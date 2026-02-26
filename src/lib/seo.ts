import { Metadata } from 'next';
import { siteConfig } from './site-config';
import { ToolMeta } from './types';

export function generateToolMetadata(tool: ToolMeta): Metadata {
  return {
    title: `${tool.seoTitle} | ${siteConfig.name}`,
    description: tool.seoDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.seoTitle,
      description: tool.seoDescription,
      url: `${siteConfig.url}/${tool.slug}`,
      siteName: siteConfig.name,
      type: 'website',
      images: tool.ogImage
        ? [{ url: `${siteConfig.url}${tool.ogImage}`, width: 1200, height: 630 }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.seoTitle,
      description: tool.seoDescription,
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: `${siteConfig.url}/${tool.slug}`,
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

export function generatePageMetadata(title: string, description: string, path: string = ''): Metadata {
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
  };
}
