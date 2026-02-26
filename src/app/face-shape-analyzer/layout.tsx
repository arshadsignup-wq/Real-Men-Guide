import { Metadata } from 'next';
import { getToolBySlug } from '@/data/tools-registry';
import { generateToolMetadata } from '@/lib/seo';

const tool = getToolBySlug('face-shape-analyzer')!;

export const metadata: Metadata = generateToolMetadata(tool);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
