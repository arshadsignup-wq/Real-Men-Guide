import { SiteConfig, CategoryInfo } from './types';

export const siteConfig: SiteConfig = {
  name: 'Real Men Guide',
  url: 'https://realmenguide.com',
  description: 'Free interactive tools for style, grooming, fitness, and life skills. Built for men who want to level up.',
  twitterHandle: '@realmenguide',
  // Set these in Vercel environment variables:
  // NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID
  // NEXT_PUBLIC_GA_ID
};

export const categories: CategoryInfo[] = [
  {
    slug: 'style-and-grooming',
    title: 'Style & Grooming',
    description: 'Tools to help you look your best — from face shape analysis to wardrobe building.',
    emoji: '👔',
  },
  {
    slug: 'relationships-and-life-skills',
    title: 'Relationships & Life Skills',
    description: 'Navigate dating, gifting, interviews, and daily routines with confidence.',
    emoji: '💡',
  },
  {
    slug: 'fitness-and-health',
    title: 'Fitness & Health',
    description: 'Calculate your macros, body fat, sleep cycles, and more to optimize your health.',
    emoji: '💪',
  },
  {
    slug: 'viral-and-shareable',
    title: 'Viral & Shareable',
    description: 'Fun quizzes and challenges you\'ll want to share with the boys.',
    emoji: '🔥',
  },
];

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}
