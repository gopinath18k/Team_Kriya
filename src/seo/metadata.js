export const SITE_CONFIG = {
  siteUrl: 'https://teamkriya.com',
  brandName: 'Team Kriya',
  legalName: 'Team Kriya',
  logoUrl: 'https://teamkriya.com/logo.webp',
  defaultOgImage: 'https://teamkriya.com/og-image.webp',
  telephone: '+91 73059 79062',
  secondaryTelephone: '+91 73059 79061',
  email: 'info@teamkriya.com',
  hrEmail: 'hr@teamkriya.com',
  careersEmail: 'careers@teamkriya.com',
  inLanguage: 'en-IN',
  sameAs: [
    'https://www.instagram.com/teamkriya/'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '71/42, Vadavalli, Marutham Nagar',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641041',
    addressCountry: 'IN'
  }
};

export const metadataMap = {
  '/': {
    title: 'Digital Marketing Company in Coimbatore | Team Kriya',
    description:
      'Grow your brand with Team Kriya, offering SEO, social media marketing, performance marketing, branding, and web development in Coimbatore.',
    keywords:
      'team kriya, digital marketing agency coimbatore, digital marketing company coimbatore, seo services coimbatore, web development coimbatore',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbName: 'Home',
    priority: '1.0',
    changefreq: 'weekly'
  },
  '/about': {
    title: 'About Team Kriya | Creative Digital Agency in Coimbatore',
    description:
      'Discover Team Kriya—a Coimbatore digital marketing, branding, SEO, and web development agency driven by strategy, storytelling, and measurable growth.',
    keywords:
      'about team kriya, digital marketing agency coimbatore, creative agency coimbatore, branding team coimbatore',
    ogType: 'website',
    pageType: 'AboutPage',
    breadcrumbName: 'About Us',
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/services': {
    title: '360° Digital Marketing & Creative Services | Team Kriya',
    description:
      'Explore full-funnel digital marketing services in Coimbatore by Team Kriya: SEO, AEO, GEO, SMM, PPC, website development, graphic design, and video production.',
    keywords:
      'digital marketing services coimbatore, seo services, performance marketing, web development, branding services',
    ogType: 'website',
    pageType: 'CollectionPage',
    breadcrumbName: 'Services',
    priority: '0.9',
    changefreq: 'monthly'
  },
  '/services/social-media-marketing': {
    title: 'Social Media Marketing Services in Coimbatore | Team Kriya',
    description:
      'Build engagement, reach target audiences, and generate leads with full-funnel social media marketing services in Coimbatore from Team Kriya.',
    keywords:
      'social media marketing coimbatore, smm agency coimbatore, instagram marketing, meta ads, linkedin marketing coimbatore',
    ogType: 'website',
    serviceType: 'Social Media Marketing',
    serviceName: 'Social Media Marketing (SMM) Services',
    breadcrumbParent: '/services',
    breadcrumbName: 'Social Media Marketing',
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/services/performance-marketing': {
    title: 'Performance Marketing & PPC Agency in Coimbatore | Team Kriya',
    description:
      'Team Kriya is a performance marketing company in Coimbatore offering Google Ads, Meta Ads, PPC campaigns, lead generation, and ROI-focused advertising.',
    keywords:
      'performance marketing coimbatore, ppc agency coimbatore, google ads management, meta ads, roas optimization',
    ogType: 'website',
    serviceType: 'Performance Marketing',
    serviceName: 'Performance Marketing & PPC Services',
    breadcrumbParent: '/services',
    breadcrumbName: 'Performance Marketing',
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/services/website-development': {
    title: 'Custom Website Development in Coimbatore | Team Kriya',
    description:
      'Team Kriya builds fast, responsive, SEO-friendly business websites, React applications, and e-commerce platforms in Coimbatore.',
    keywords:
      'website development coimbatore, web design company coimbatore, react development, ecommerce website coimbatore',
    ogType: 'website',
    serviceType: 'Website Development',
    serviceName: 'Custom Website Development Services',
    breadcrumbParent: '/services',
    breadcrumbName: 'Website Development',
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/services/seo-aeo-geo': {
    title: 'SEO, AEO & GEO Services in Coimbatore | Team Kriya',
    description:
      'Improve organic visibility across Google and AI search with technical SEO, local SEO, Answer Engine Optimization (AEO), and GEO from Team Kriya.',
    keywords:
      'seo services coimbatore, aeo agency, geo optimization, technical seo, local seo coimbatore',
    ogType: 'website',
    serviceType: 'Search Engine Optimization',
    serviceName: 'SEO, AEO & GEO Services',
    breadcrumbParent: '/services',
    breadcrumbName: 'SEO, AEO & GEO',
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/services/video-editing': {
    title: 'Video Editing & Brand Storytelling in Coimbatore | Team Kriya',
    description:
      'Build a memorable brand with Team Kriya in Coimbatore—offering commercial video editing, Reels production, brand identity, and creative communication.',
    keywords:
      'video editing coimbatore, reels editing, commercial video editor, brand storytelling, motion graphics coimbatore',
    ogType: 'website',
    serviceType: 'Video Editing & Creative Branding',
    serviceName: 'Video Editing & Brand Storytelling Services',
    breadcrumbParent: '/services',
    breadcrumbName: 'Video Editing & Branding',
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/services/graphic-design': {
    title: 'Graphic Design & Brand Identity in Coimbatore | Team Kriya',
    description:
      'Team Kriya is a graphic design studio in Coimbatore creating logos, social media creatives, brochures, packaging, and complete brand identity systems.',
    keywords:
      'graphic design coimbatore, logo design coimbatore, packaging design, brochure design, brand identity agency',
    ogType: 'website',
    serviceType: 'Graphic Design',
    serviceName: 'Graphic Design & Brand Identity Services',
    breadcrumbParent: '/services',
    breadcrumbName: 'Graphic Design',
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/services/videography': {
    title: 'Commercial Videography & Ad Films in Coimbatore | Team Kriya',
    description:
      'Team Kriya is a video production team in Coimbatore delivering brand films, product shoots, corporate videos, and commercial ad production.',
    keywords:
      'videography coimbatore, corporate video production, product photography, commercial ad films coimbatore',
    ogType: 'website',
    serviceType: 'Videography & Video Production',
    serviceName: 'Commercial Videography & Production Services',
    breadcrumbParent: '/services',
    breadcrumbName: 'Videography',
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/portfolio': {
    title: 'Client Portfolio & Case Studies | Team Kriya',
    description:
      'Explore Team Kriya’s portfolio in Coimbatore featuring branding, SEO, performance advertising, web development, videography, and creative campaigns.',
    keywords:
      'team kriya portfolio, digital marketing case studies, branding portfolio coimbatore, web design showcase',
    ogType: 'website',
    pageType: 'CollectionPage',
    breadcrumbName: 'Portfolio',
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/blog': {
    title: 'Digital Marketing, SEO & Branding Blog | Team Kriya',
    description:
      'Read practical guides from Team Kriya covering SEO, AEO, GEO, social media marketing, website development, and digital growth in Coimbatore.',
    keywords:
      'team kriya blog, digital marketing insights, seo tips coimbatore, branding strategies',
    ogType: 'website',
    pageType: 'Blog',
    breadcrumbName: 'Blog',
    priority: '0.8',
    changefreq: 'weekly'
  },
  '/careers': {
    title: 'Careers & Internships in Digital Marketing | Team Kriya',
    description:
      'Join Team Kriya in Coimbatore. Explore open roles, internships, workshops, and training across SEO, design, content, and web development.',
    keywords:
      'team kriya careers, digital marketing jobs coimbatore, internships coimbatore, web developer jobs',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbName: 'Careers',
    priority: '0.5',
    changefreq: 'monthly'
  },
  '/reach': {
    title: 'Contact Team Kriya | Coimbatore Digital Marketing Office',
    description:
      'Contact Team Kriya in Vadavalli, Coimbatore for SEO, social media marketing, performance ads, branding, and custom website development.',
    keywords:
      'contact team kriya, digital marketing agency vadavalli coimbatore, book strategy call',
    ogType: 'website',
    pageType: 'ContactPage',
    breadcrumbName: 'Reach Us',
    priority: '0.7',
    changefreq: 'monthly'
  },
  '/digital-marketing-company-in-coimbatore': {
    title: 'Full-Funnel Digital Marketing Partner in Coimbatore | Team Kriya',
    description:
      'Scale your Coimbatore business with Team Kriya’s full-funnel SEO, Google & Meta Ads, branding, and conversion-focused web development.',
    keywords:
      'digital marketing partner coimbatore, full funnel marketing coimbatore, seo and ppc coimbatore, lead generation coimbatore',
    ogType: 'website',
    pageType: 'LocalLandingPage',
    breadcrumbName: 'Digital Marketing in Coimbatore',
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/blog/digital-marketing-a-boon-or-bane': {
    title: 'Digital Marketing: A Boon or Bane? | Team Kriya Blog',
    description:
      'Explore the pros and cons of digital marketing and learn how businesses use modern channels to reach customers and scale sustainably.',
    keywords: 'digital marketing pros and cons, boon or bane, online marketing strategy',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Digital Marketing: A Boon or Bane?',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/digital-marketing-company-in-coimbatore': {
    title: 'How to Choose a Digital Marketing Company in Coimbatore | Team Kriya',
    description:
      'A practical guide to evaluating digital marketing agencies in Coimbatore across SEO, social media, PPC, and custom web design.',
    keywords: 'choose digital marketing company coimbatore, marketing agency guide, seo smm coimbatore',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Choosing a Digital Marketing Company in Coimbatore',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/significance-of-digital-marketing': {
    title: 'Significance of Digital Marketing for Modern Businesses | Team Kriya',
    description:
      'Understand why digital marketing is essential for modern business visibility, brand equity, customer trust, and measurable conversions.',
    keywords: 'significance of digital marketing, benefits of online marketing, business growth',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Significance of Digital Marketing',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/why-professional-advertising-is-still-essential-for-business-growth-in-2026': {
    title: 'Why Professional Advertising Matters for Business Growth in 2026 | Team Kriya',
    description:
      'Discover why strategic advertising remains vital in 2026 and how creative campaigns, targeting, and measurement compound brand growth.',
    keywords: 'professional advertising 2026, business growth strategy, creative campaigns',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Why Professional Advertising Matters in 2026',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/effective-social-media-marketing-services-in-coimbatore': {
    title: 'Effective Social Media Marketing Strategies in Coimbatore | Team Kriya',
    description:
      'Learn how Coimbatore brands build loyalty, engage local audiences, and drive sales with strategic social media content and Meta ads.',
    keywords: 'social media marketing strategies coimbatore, instagram growth, facebook ads',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Social Media Marketing Services in Coimbatore',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/best-website-development-company-in-coimbatore': {
    title: 'What Makes a Great Website Development Partner in Coimbatore | Team Kriya',
    description:
      'Explore key traits of a reliable website development company in Coimbatore—responsive UX, speed optimization, SEO architecture, and support.',
    keywords: 'website development guide coimbatore, responsive web design, seo friendly websites',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Website Development in Coimbatore',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/digital-marketing-company-in-gandhipuram-coimbatore': {
    title: 'Digital Marketing Guide for Businesses in Gandhipuram, Coimbatore | Team Kriya',
    description:
      'How businesses in Gandhipuram, Coimbatore can use local SEO, PPC, and social media marketing to stand out and capture high-intent leads.',
    keywords: 'digital marketing gandhipuram, gandhipuram seo, coimbatore local marketing',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Digital Marketing in Gandhipuram',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/digital-marketing-company-in-rs-puram-coimbatore': {
    title: 'Digital Marketing for Brands in RS Puram, Coimbatore | Team Kriya',
    description:
      'Elevate your RS Puram business with localized SEO, targeted social campaigns, branding, and conversion-focused paid advertising.',
    keywords: 'digital marketing rs puram, rs puram marketing agency, coimbatore local seo',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Digital Marketing in RS Puram',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/digital-marketing-company-in-peelamedu-coimbatore': {
    title: 'Digital Marketing Solutions in Peelamedu, Coimbatore | Team Kriya',
    description:
      'Grow your Peelamedu startup or enterprise online with tailored SEO, content marketing, social media, and lead generation campaigns.',
    keywords: 'digital marketing peelamedu, peelamedu seo agency, lead generation coimbatore',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Digital Marketing in Peelamedu',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/best-digital-marketing-agency-in-coimbatore': {
    title: 'Selecting the Right Digital Marketing Partner in Coimbatore | Team Kriya',
    description:
      'Compare agency capabilities, reporting transparency, and ROI frameworks before choosing a digital marketing partner in Coimbatore.',
    keywords: 'digital marketing agency checklist, roi marketing coimbatore, growth partner',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Selecting a Digital Marketing Agency',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/digital-marketing-saravanampatti-in-coimbatore': {
    title: 'Digital Marketing for IT & Startups in Saravanampatti | Team Kriya',
    description:
      'Boost search visibility and B2B/B2C lead pipelines in Saravanampatti, Coimbatore with targeted SEO, PPC, and content strategies.',
    keywords: 'digital marketing saravanampatti, saravanampatti it marketing, seo audit coimbatore',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Digital Marketing in Saravanampatti',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/digital-marketing-pollachi-in-coimbatore': {
    title: 'Digital Marketing Guide for Businesses in Pollachi | Team Kriya',
    description:
      'Help your Pollachi business reach regional and digital-first customers with practical local SEO, social campaigns, and brand positioning.',
    keywords: 'digital marketing pollachi, pollachi seo services, regional business growth',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Digital Marketing in Pollachi',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/best-branding-company-in-coimbatore': {
    title: 'Building a Memorable Brand Identity in Coimbatore | Team Kriya',
    description:
      'Learn how strategic positioning, logo design, visual systems, and creative storytelling help Coimbatore businesses stand out.',
    keywords: 'branding strategy coimbatore, brand identity design, logo design guide',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'Branding in Coimbatore',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/blog/best-seo-services-in-coimbatore': {
    title: 'SEO Growth Blueprint for Coimbatore Businesses | Team Kriya',
    description:
      'Understand technical SEO, local map rankings, keyword research, and content authority for consistent organic traffic in Coimbatore.',
    keywords: 'seo blueprint coimbatore, search engine optimization guide, local pack rankings',
    ogType: 'article',
    breadcrumbParent: '/blog',
    breadcrumbName: 'SEO Services Guide',
    priority: '0.6',
    changefreq: 'monthly'
  }
};

export const NOT_FOUND_METADATA = {
  title: 'Page Not Found | Team Kriya',
  description: 'The requested page could not be found on Team Kriya.',
  keywords: 'team kriya',
  ogType: 'website',
  robots: 'noindex, nofollow',
  isNotFound: true
};

export function normalizePathname(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '').toLowerCase() || '/';
}

export function getCanonicalUrl(pathname) {
  const normalized = normalizePathname(pathname);
  return normalized === '/' ? `${SITE_CONFIG.siteUrl}/` : `${SITE_CONFIG.siteUrl}${normalized}`;
}

export function getRouteMetadata(pathname) {
  const normalized = normalizePathname(pathname);
  return metadataMap[normalized] || NOT_FOUND_METADATA;
}

const LOCAL_FAQS = [
  {
    question: 'What digital marketing services do you provide in Coimbatore?',
    answer:
      'We provide end-to-end 360-degree digital marketing solutions tailored for Coimbatore businesses. This includes Local & National SEO, Generative AI Search Optimization (AEO/GEO), Google Ads & Meta Ads (Performance Marketing), Social Media Marketing (SMM), Custom Web Development (React & WordPress), Creative Branding & Logo Design, Video Production & Reel Editing.'
  },
  {
    question: 'How can digital marketing help grow my Coimbatore business?',
    answer:
      'Digital marketing puts your brand directly in front of active customers searching for your products or services in Coimbatore and across Tamil Nadu. Through hyper-targeted local SEO, social media funnels, and performance ads, you acquire qualified high-intent leads, build brand authority, and achieve measurable ROI faster than traditional advertising methods.'
  },
  {
    question: 'Why is local SEO important for Coimbatore businesses?',
    answer:
      'Local SEO enables your business to rank #1 on Google Maps 3-pack and localized organic search results when users search for keywords like "near me", "in Coimbatore", "in RS Puram", "in Gandhipuram", or "in Peelamedu". It captures high-conversion footfall and high-intent phone inquiries from your immediate target region.'
  },
  {
    question: 'How do you manage and optimize social media marketing?',
    answer:
      'We create viral, aesthetic visual content, cinematic Reels, engaging carousel posts, and data-backed paid ad campaigns across Instagram, Facebook, LinkedIn, and YouTube. We continuously monitor audience demographics, run A/B creative split testing, manage community engagement, and optimize campaigns for lower CPA and higher lead quality.'
  },
  {
    question: 'How long does it take to see results from SEO and Ads?',
    answer:
      'With Performance Marketing (Google Search & Meta Ads), you can start generating qualified inquiries and sales within 24 to 72 hours of campaign launch. For organic SEO, significant ranking climbs and traffic surges typically compound over 3 to 6 months as domain authority and keyword indexing strengthen.'
  },
  {
    question: 'How do you track and measure marketing campaign results?',
    answer:
      'We employ advanced tracking tools including Google Analytics 4 (GA4), Google Search Console, Meta Pixel, and custom conversion tracking dashboards. You receive transparent weekly and monthly reporting covering ROAS, cost per lead (CPL), organic impressions, keyword rankings, and clear actionable growth insights.'
  }
];

function buildBreadcrumbs(path, meta) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_CONFIG.siteUrl}/`
    }
  ];

  if (meta.breadcrumbParent && metadataMap[meta.breadcrumbParent]) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: metadataMap[meta.breadcrumbParent].breadcrumbName,
      item: `${SITE_CONFIG.siteUrl}${meta.breadcrumbParent}`
    });
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: meta.breadcrumbName,
      item: `${SITE_CONFIG.siteUrl}${path}`
    });
  } else if (path !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: meta.breadcrumbName,
      item: `${SITE_CONFIG.siteUrl}${path}`
    });
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_CONFIG.siteUrl}${path === '/' ? '' : path}/#breadcrumb`,
    itemListElement: items
  };
}

export function buildSchemaForPath(pathname) {
  const path = normalizePathname(pathname);
  const meta = metadataMap[path];
  if (!meta) return null;

  const pageUrl = getCanonicalUrl(path);
  const orgId = `${SITE_CONFIG.siteUrl}/#organization`;
  const websiteId = `${SITE_CONFIG.siteUrl}/#website`;
  const logoId = `${SITE_CONFIG.siteUrl}/#logo`;

  if (path === '/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': orgId,
          name: SITE_CONFIG.brandName,
          url: `${SITE_CONFIG.siteUrl}/`,
          logo: {
            '@type': 'ImageObject',
            '@id': logoId,
            url: SITE_CONFIG.logoUrl,
            contentUrl: SITE_CONFIG.logoUrl
          },
          image: { '@id': logoId },
          telephone: SITE_CONFIG.telephone,
          email: SITE_CONFIG.email,
          sameAs: SITE_CONFIG.sameAs,
          description:
            'Team Kriya is a digital marketing, SEO, branding, advertising, and web development company in Coimbatore.',
          address: SITE_CONFIG.address,
          areaServed: { '@type': 'City', name: 'Coimbatore' }
        },
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: `${SITE_CONFIG.siteUrl}/`,
          name: SITE_CONFIG.brandName,
          publisher: { '@id': orgId },
          inLanguage: SITE_CONFIG.inLanguage
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${SITE_CONFIG.siteUrl}/#business`,
          name: SITE_CONFIG.brandName,
          url: `${SITE_CONFIG.siteUrl}/`,
          image: { '@id': logoId },
          logo: { '@id': logoId },
          telephone: SITE_CONFIG.telephone,
          email: SITE_CONFIG.email,
          priceRange: '$$',
          description:
            'Team Kriya provides digital marketing, SEO, branding, advertising, and web development services in Coimbatore.',
          address: SITE_CONFIG.address,
          areaServed: { '@type': 'City', name: 'Coimbatore' },
          parentOrganization: { '@id': orgId }
        }
      ]
    };
  }

  if (meta.serviceType) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${pageUrl}/#service`,
          name: meta.serviceName,
          serviceType: meta.serviceType,
          url: pageUrl,
          provider: {
            '@type': 'Organization',
            '@id': orgId,
            name: SITE_CONFIG.brandName,
            url: `${SITE_CONFIG.siteUrl}/`
          },
          description: meta.description,
          areaServed: { '@type': 'City', name: 'Coimbatore' }
        },
        buildBreadcrumbs(path, meta)
      ]
    };
  }

  if (meta.ogType === 'article') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          '@id': `${pageUrl}/#article`,
          mainEntityOfPage: pageUrl,
          headline: meta.title.replace(/\s*\|\s*Team Kriya$/, ''),
          description: meta.description,
          image: SITE_CONFIG.defaultOgImage,
          inLanguage: SITE_CONFIG.inLanguage,
          author: {
            '@type': 'Organization',
            '@id': orgId,
            name: SITE_CONFIG.brandName,
            url: `${SITE_CONFIG.siteUrl}/`
          },
          publisher: {
            '@type': 'Organization',
            '@id': orgId,
            name: SITE_CONFIG.brandName,
            logo: {
              '@type': 'ImageObject',
              url: SITE_CONFIG.logoUrl
            }
          }
        },
        buildBreadcrumbs(path, meta)
      ]
    };
  }

  if (meta.pageType === 'LocalLandingPage') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': `${pageUrl}/#business`,
          name: `${SITE_CONFIG.brandName} - Digital Marketing Company in Coimbatore`,
          url: pageUrl,
          image: SITE_CONFIG.logoUrl,
          logo: SITE_CONFIG.logoUrl,
          telephone: SITE_CONFIG.telephone,
          email: SITE_CONFIG.email,
          priceRange: '$$',
          description: meta.description,
          address: SITE_CONFIG.address,
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '11.0168',
            longitude: '76.9558'
          },
          areaServed: { '@type': 'City', name: 'Coimbatore' },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Digital Marketing Services Coimbatore',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creative Branding & Design' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO, AEO & GEO Search Visibility' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media & Performance Marketing' } }
            ]
          },
          parentOrganization: { '@id': orgId }
        },
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}/#webpage`,
          url: pageUrl,
          name: meta.title,
          description: meta.description,
          isPartOf: { '@id': websiteId },
          about: { '@id': `${pageUrl}/#business` }
        },
        buildBreadcrumbs(path, meta),
        {
          '@type': 'FAQPage',
          mainEntity: LOCAL_FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        }
      ]
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': meta.pageType || 'WebPage',
        '@id': `${pageUrl}/#webpage`,
        url: pageUrl,
        name: meta.title,
        description: meta.description,
        inLanguage: SITE_CONFIG.inLanguage,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId }
      },
      buildBreadcrumbs(path, meta)
    ]
  };
}
