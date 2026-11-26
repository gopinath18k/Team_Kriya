import fs from 'node:fs';
import fsp from 'node:fs/promises';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  SITE_CONFIG,
  buildSchemaForPath,
  getCanonicalUrl,
  metadataMap
} from '../src/seo/metadata.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'Live');
const PRERENDER_DIR = path.join(DIST_DIR, '_prerender');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function findBrowserExecutable() {
  const candidates = [
    process.env.PRERENDER_BROWSER,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser'
  ].filter(Boolean);

  return candidates.find((candidate) => fs.existsSync(candidate)) || null;
}

function startStaticServer() {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  const indexHtml = fs.readFileSync(indexHtmlPath);

  const server = http.createServer(async (req, res) => {
    try {
      const reqUrl = new URL(req.url || '/', 'http://127.0.0.1');
      const pathname = decodeURIComponent(reqUrl.pathname);
      const safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
      let filePath = path.join(DIST_DIR, safePath);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(indexHtml);
    } catch {
      res.writeHead(500);
      res.end('Internal server error');
    }
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      resolve({ server, port: address.port });
    });
  });
}

async function launchBrowser(executablePath) {
  const userDataDir = await fsp.mkdtemp(path.join(os.tmpdir(), 'teamkriya-prerender-'));
  const proc = spawn(
    executablePath,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--remote-debugging-port=0',
      `--user-data-dir=${userDataDir}`,
      'about:blank'
    ],
    { stdio: ['ignore', 'pipe', 'pipe'] }
  );

  const wsEndpoint = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Timed out waiting for headless browser DevTools endpoint.'));
    }, 15000);

    const onData = (chunk) => {
      const text = chunk.toString();
      const match = text.match(/DevTools listening on (ws:\/\/[^\s]+)/);
      if (match) {
        clearTimeout(timeout);
        resolve(match[1]);
      }
    };

    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);
    proc.once('exit', (code) => {
      clearTimeout(timeout);
      reject(new Error(`Browser exited early with code ${code}`));
    });
  });

  return { proc, wsEndpoint, userDataDir };
}

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.nextId = 1;
    this.pending = new Map();
    this.ready = new Promise((resolve, reject) => {
      this.ws.addEventListener('open', resolve, { once: true });
      this.ws.addEventListener('error', reject, { once: true });
    });
    this.ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    });
  }

  async send(method, params = {}, sessionId = undefined) {
    await this.ready;
    const id = this.nextId++;
    const payload = sessionId ? { id, method, params, sessionId } : { id, method, params };
    this.ws.send(JSON.stringify(payload));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });
  }

  close() {
    this.ws.close();
  }
}

function escapeHtmlAttr(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectHeadFallback(templateHtml, route) {
  const meta = metadataMap[route];
  const canonicalUrl = getCanonicalUrl(route);
  const schema = buildSchemaForPath(route);
  const ogImage = meta.image
    ? (meta.image.startsWith('http') ? meta.image : `${SITE_CONFIG.siteUrl}${meta.image}`)
    : SITE_CONFIG.defaultOgImage;

  const headTags = [
    `<title>${escapeHtmlAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtmlAttr(meta.description)}" />`,
    `<meta name="keywords" content="${escapeHtmlAttr(meta.keywords)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeHtmlAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtmlAttr(meta.description)}" />`,
    `<meta property="og:url" content="${escapeHtmlAttr(canonicalUrl)}" />`,
    `<meta property="og:type" content="${escapeHtmlAttr(meta.ogType || 'website')}" />`,
    `<meta property="og:image" content="${escapeHtmlAttr(ogImage)}" />`,
    `<meta property="og:image:secure_url" content="${escapeHtmlAttr(ogImage)}" />`,
    `<meta property="og:image:width" content="714" />`,
    `<meta property="og:image:height" content="381" />`,
    `<meta property="og:image:alt" content="${escapeHtmlAttr(SITE_CONFIG.brandName)} Logo" />`,
    `<meta property="og:site_name" content="${escapeHtmlAttr(SITE_CONFIG.brandName)}" />`,
    `<meta property="og:locale" content="${escapeHtmlAttr(SITE_CONFIG.inLanguage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtmlAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtmlAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtmlAttr(ogImage)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtmlAttr(SITE_CONFIG.brandName)} Logo" />`,
    schema ? `<script id="page-schema" type="application/ld+json">${JSON.stringify(schema)}</script>` : ''
  ]
    .filter(Boolean)
    .join('\n    ');

  const stripped = templateHtml
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+(?:name|property)="(?:description|keywords|robots|og:[^"]+|twitter:[^"]+)"[^>]*>/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/<script\s+id="page-schema"[^>]*>[\s\S]*?<\/script>/gi, '');

  return stripped.replace('</head>', `    ${headTags}\n  </head>`);
}

async function renderRoutesWithBrowser(browserExe, port, routes) {
  const { proc, wsEndpoint, userDataDir } = await launchBrowser(browserExe);
  const cdp = new CDPClient(wsEndpoint);
  const rendered = new Map();

  try {
    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
    await cdp.send('Page.enable', {}, sessionId);
    await cdp.send('Runtime.enable', {}, sessionId);
    // Block heavy external media/fonts/embeds during prerender to keep build fast
    await cdp.send('Network.enable', {}, sessionId);
    await cdp.send(
      'Network.setBlockedURLs',
      {
        urls: ['*.mp4', '*google.com/maps*', '*script.google.com*', '*fonts.googleapis.com*', '*fonts.gstatic.com*']
      },
      sessionId
    );

    for (const route of routes) {
      const targetUrl = `http://127.0.0.1:${port}${route}`;
      const expectedCanonical = getCanonicalUrl(route);
      await cdp.send('Page.navigate', { url: targetUrl }, sessionId);

      const html = await new Promise((resolve, reject) => {
        const deadline = Date.now() + 15000;
        const poll = async () => {
          try {
            const evalRes = await cdp.send(
              'Runtime.evaluate',
              {
                expression: `(() => {
                  const root = document.getElementById('root');
                  const canonical = document.querySelector('link[rel="canonical"]');
                  const schema = document.getElementById('page-schema');
                  if (!root || !root.innerHTML || root.innerHTML.trim().length < 50) return null;
                  if (!canonical || canonical.getAttribute('href') !== ${JSON.stringify(expectedCanonical)}) return null;
                  if (!schema) return null;
                  return '<!DOCTYPE html>' + document.documentElement.outerHTML;
                })()`,
                returnByValue: true
              },
              sessionId
            );

            if (evalRes.result && evalRes.result.value) {
              resolve(evalRes.result.value);
              return;
            }
          } catch {
            // Navigation still settling
          }

          if (Date.now() > deadline) {
            reject(new Error(`Timed out prerendering route: ${route}`));
            return;
          }
          setTimeout(poll, 80);
        };
        setTimeout(poll, 120);
      });

      rendered.set(route, html);
    }
  } finally {
    cdp.close();
    proc.kill();
    await fsp.rm(userDataDir, { recursive: true, force: true }).catch(() => {});
  }

  return rendered;
}

async function writeRouteOutput(route, html) {
  if (route === '/') {
    await fsp.writeFile(path.join(DIST_DIR, 'index.html'), html, 'utf8');
    return;
  }

  const routeDir = path.join(PRERENDER_DIR, route.replace(/^\/+/, ''));
  await fsp.mkdir(routeDir, { recursive: true });
  await fsp.writeFile(path.join(routeDir, 'index.html'), html, 'utf8');
}

async function main() {
  const routes = Object.keys(metadataMap);
  const templateHtml = await fsp.readFile(path.join(DIST_DIR, 'index.html'), 'utf8');
  await fsp.rm(PRERENDER_DIR, { recursive: true, force: true });

  const browserExe = findBrowserExecutable();
  if (browserExe) {
    console.log(`[prerender] Using headless browser: ${browserExe}`);
    const { server, port } = await startStaticServer();
    try {
      const rendered = await renderRoutesWithBrowser(browserExe, port, routes);
      for (const [route, html] of rendered.entries()) {
        await writeRouteOutput(route, html);
      }
      console.log(`[prerender] Rendered full DOM + metadata for ${rendered.size} routes.`);
      return;
    } finally {
      server.close();
    }
  }

  console.warn('[prerender] No Chrome/Edge executable found; writing static <head> metadata fallback.');
  for (const route of routes) {
    await writeRouteOutput(route, injectHeadFallback(templateHtml, route));
  }
  console.log(`[prerender] Wrote metadata fallback for ${routes.length} routes.`);
}

main().catch((err) => {
  console.error('[prerender] Failed:', err);
  process.exit(1);
});
