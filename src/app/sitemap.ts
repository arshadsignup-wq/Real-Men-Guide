import { MetadataRoute } from 'next';
import { toolsRegistry } from '@/data/tools-registry';
import { categories } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://realmenguide.com';
  const lastBuild = new Date('2026-02-27');

  const staticPages = [
    { url: baseUrl, lastModified: lastBuild, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: lastBuild, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: lastBuild, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: lastBuild, changeFrequency: 'yearly' as const, priority: 0.2 },
  ];

  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: lastBuild,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const toolPages = toolsRegistry.map((tool) => ({
    url: `${baseUrl}/${tool.slug}`,
    lastModified: lastBuild,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...toolPages];
}
