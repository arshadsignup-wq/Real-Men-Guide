import { Metadata } from 'next';
import { siteConfig } from './site-config';
import { ToolMeta } from './types';
import { getCategoryBySlug } from './site-config';

export function generateToolMetadata(tool: ToolMeta): Metadata {
  const category = getCategoryBySlug(tool.category);
  return {
    title: tool.seoTitle,
    description: tool.seoDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.seoTitle,
      description: tool.seoDescription,
      url: `${siteConfig.url}/${tool.slug}`,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: tool.ogImage ? `${siteConfig.url}${tool.ogImage}` : `${siteConfig.url}/og/default.png`,
          width: 1200,
          height: 630,
          alt: tool.seoTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.seoTitle,
      description: tool.seoDescription,
      creator: siteConfig.twitterHandle,
      images: [tool.ogImage ? `${siteConfig.url}${tool.ogImage}` : `${siteConfig.url}/og/default.png`],
    },
    alternates: {
      canonical: `${siteConfig.url}/${tool.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateToolJsonLd(tool: ToolMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.title,
    description: tool.seoDescription,
    url: `${siteConfig.url}/${tool.slug}`,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(tool: ToolMeta) {
  const category = getCategoryBySlug(tool.category);
  const items = [
    { name: 'Home', url: siteConfig.url },
  ];
  if (category) {
    items.push({ name: category.title, url: `${siteConfig.url}/category/${category.slug}` });
  }
  items.push({ name: tool.title, url: `${siteConfig.url}/${tool.slug}` });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'realmenguide@gmail.com',
      contactType: 'customer support',
    },
    sameAs: [
      'https://twitter.com/realmenguide',
    ],
  };
}

export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generatePageMetadata(title: string, description: string, path: string = ''): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}/og/default.png`,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.url}/og/default.png`],
    },
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
