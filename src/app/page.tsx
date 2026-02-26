import Link from 'next/link';
import { toolsRegistry, getFeaturedTools } from '@/data/tools-registry';
import { categories } from '@/lib/site-config';
import EmailCapture from '@/components/email/EmailCapture';

export default function HomePage() {
  const featured = getFeaturedTools();

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Free Tools to <span className="text-accent">Level Up</span> Your Life
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            25+ interactive tools for style, grooming, fitness, and life skills.
            No sign-up required. 100% free.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {featured.slice(0, 4).map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="rounded-lg bg-accent px-5 py-2.5 font-medium text-background transition-colors hover:bg-accent-hover"
              >
                {tool.emoji} {tool.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Explore by Category</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="tool-card-glow rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <h3 className="mt-3 font-bold">{cat.title}</h3>
              <p className="mt-1 text-sm text-muted">{cat.description}</p>
              <p className="mt-3 text-sm text-accent">
                {toolsRegistry.filter((t) => t.category === cat.slug).length} tools →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* All Tools Grid */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">All 25 Tools</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolsRegistry.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="tool-card-glow group rounded-xl border border-border bg-background p-5 transition-all hover:border-accent/30"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{tool.emoji}</span>
                  <div>
                    <h3 className="font-medium group-hover:text-accent">{tool.shortTitle}</h3>
                    <p className="mt-1 text-sm text-muted line-clamp-2">{tool.description}</p>
                    <span className="mt-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                      {tool.engine}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="mx-auto max-w-2xl px-4 py-16">
        <EmailCapture
          location="homepage"
          title="Get weekly tips to level up"
          description="Join men who are serious about self-improvement. Style, fitness, and life advice every Tuesday."
          variant="card"
        />
      </section>
    </div>
  );
}
