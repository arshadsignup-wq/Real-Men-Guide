import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/lib/site-config';
import { getToolsByCategory } from '@/data/tools-registry';
import { generatePageMetadata } from '@/lib/seo';
import EmailCapture from '@/components/email/EmailCapture';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return generatePageMetadata(category.title, category.description, `/category/${slug}`);
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const tools = getToolsByCategory(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground">{category.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <span className="text-4xl">{category.emoji}</span>
        <h1 className="mt-3 text-3xl font-bold">{category.title}</h1>
        <p className="mt-2 text-lg text-muted">{category.description}</p>
      </div>

      {/* Tools grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.slug}`}
            className="tool-card-glow group rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{tool.emoji}</span>
              <div>
                <h2 className="font-bold group-hover:text-accent">{tool.shortTitle}</h2>
                <p className="mt-1 text-sm text-muted">{tool.description}</p>
                <span className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
                  {tool.engine === 'quiz' ? 'Quiz' : tool.engine === 'calculator' ? 'Calculator' : tool.engine === 'generator' ? 'Generator' : 'Builder'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Email */}
      <div className="mx-auto mt-16 max-w-2xl">
        <EmailCapture location={`category-${slug}`} />
      </div>
    </div>
  );
}
