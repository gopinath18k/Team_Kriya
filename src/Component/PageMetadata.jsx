import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_CONFIG,
  buildSchemaForPath,
  getCanonicalUrl,
  getRouteMetadata
} from '../seo/metadata.mjs';

const PageMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const data = getRouteMetadata(location.pathname);
    const isNotFound = Boolean(data.isNotFound);

    // 1. Title
    const titles = document.querySelectorAll('title');
    if (titles.length === 0) {
      const titleElement = document.createElement('title');
      titleElement.textContent = data.title;
      document.head.appendChild(titleElement);
    } else {
      titles[0].textContent = data.title;
      for (let i = 1; i < titles.length; i++) {
        titles[i].remove();
      }
    }
    document.title = data.title;

    // Helper to update or create meta tags cleanly
    const setMetaTag = (selector, nameOrProperty, value, attribute) => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) {
        const element = document.createElement('meta');
        element.setAttribute(attribute, nameOrProperty);
        element.setAttribute('content', value || '');
        document.head.appendChild(element);
      } else {
        elements[0].setAttribute('content', value || '');
        for (let i = 1; i < elements.length; i++) {
          elements[i].remove();
        }
      }
    };

    const removeMetaTag = (selector) => {
      document.querySelectorAll(selector).forEach((el) => el.remove());
    };

    // 2. Core SEO Meta Tags
    setMetaTag('meta[name="description"]', 'description', data.description, 'name');
    setMetaTag('meta[name="keywords"]', 'keywords', data.keywords, 'name');
    setMetaTag(
      'meta[name="robots"]',
      'robots',
      data.robots || 'index, follow, max-image-preview:large',
      'name'
    );

    // 3. Canonical Link (always fixed to canonical https://teamkriya.com origin)
    const canonicalUrl = getCanonicalUrl(location.pathname);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (isNotFound) {
      if (canonical) canonical.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // 4. Open Graph & Twitter Card Tags
    const ogImageUrl = data.image
      ? (data.image.startsWith('http') ? data.image : `${SITE_CONFIG.siteUrl}${data.image}`)
      : SITE_CONFIG.defaultOgImage;

    setMetaTag('meta[property="og:title"]', 'og:title', data.title, 'property');
    setMetaTag('meta[property="og:description"]', 'og:description', data.description, 'property');
    setMetaTag('meta[property="og:url"]', 'og:url', canonicalUrl, 'property');
    setMetaTag('meta[property="og:type"]', 'og:type', data.ogType || 'website', 'property');
    setMetaTag('meta[property="og:image"]', 'og:image', ogImageUrl, 'property');
    setMetaTag('meta[property="og:image:secure_url"]', 'og:image:secure_url', ogImageUrl, 'property');
    setMetaTag('meta[property="og:image:width"]', 'og:image:width', '714', 'property');
    setMetaTag('meta[property="og:image:height"]', 'og:image:height', '381', 'property');
    setMetaTag('meta[property="og:image:alt"]', 'og:image:alt', `${SITE_CONFIG.brandName} Logo`, 'property');
    setMetaTag('meta[property="og:site_name"]', 'og:site_name', SITE_CONFIG.brandName, 'property');
    setMetaTag('meta[property="og:locale"]', 'og:locale', SITE_CONFIG.inLanguage, 'property');

    setMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image', 'name');
    setMetaTag('meta[name="twitter:title"]', 'twitter:title', data.title, 'name');
    setMetaTag('meta[name="twitter:description"]', 'twitter:description', data.description, 'name');
    setMetaTag('meta[name="twitter:image"]', 'twitter:image', ogImageUrl, 'name');
    setMetaTag('meta[name="twitter:image:alt"]', 'twitter:image:alt', `${SITE_CONFIG.brandName} Logo`, 'name');
    removeMetaTag('meta[name="twitter:site"]');

    // 5. Dynamic JSON-LD Structured Data
    const schemaData = isNotFound ? null : buildSchemaForPath(location.pathname);
    let schemaScript = document.getElementById('page-schema');
    if (schemaData) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'page-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData, null, 2);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [location.pathname]);

  return null;
};

export default PageMetadata;
