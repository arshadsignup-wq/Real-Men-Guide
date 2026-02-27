import Link from 'next/link';
import { toolsRegistry, getFeaturedTools } from '@/data/tools-registry';
import { categories } from '@/lib/site-config';
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/seo';
import EmailCapture from '@/components/email/EmailCapture';

export default function HomePage() {
  const featured = getFeaturedTools();

  return (
    <div>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteJsonLd()) }} />

      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Free Tools to <span className="text-accent">Level Up</span> Your Life
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Interactive tools for style, grooming, fitness, and life skills.
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

      {/* Quick Jump Categories */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Explore by Category</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-all hover:border-accent/50 hover:text-accent"
            >
              {cat.emoji} {cat.title}
              <span className="ml-1.5 text-muted">
                ({toolsRegistry.filter((t) => t.category === cat.slug).length})
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Tools by Category */}
      {categories.map((cat, index) => {
        const catTools = toolsRegistry.filter((t) => t.category === cat.slug);
        return (
          <section
            key={cat.slug}
            id={cat.slug}
            className={index % 2 === 0 ? 'border-t border-border bg-surface' : 'border-t border-border'}
          >
            <div className="mx-auto max-w-6xl px-4 py-16">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    <span className="mr-2">{cat.emoji}</span>{cat.title}
                  </h2>
                  <p className="mt-1 text-muted">{cat.description}</p>
                </div>
                <Link
                  href={`/category/${cat.slug}`}
                  className="hidden text-sm text-accent hover:text-accent-hover md:block"
                >
                  View all →
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catTools.map((tool) => (
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
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href={`/category/${cat.slug}`}
                className="mt-6 block text-center text-sm text-accent hover:text-accent-hover md:hidden"
              >
                View all {cat.title} tools →
              </Link>
            </div>
          </section>
        );
      })}

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
