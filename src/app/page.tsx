'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toolsRegistry } from '@/data/tools-registry';
import { categories } from '@/lib/site-config';
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/seo';
import EmailCapture from '@/components/email/EmailCapture';

export default function HomePage() {
  const [search, setSearch] = useState('');

  const filteredTools = search.trim()
    ? toolsRegistry.filter(
        (t) =>
          t.shortTitle.toLowerCase().includes(search.toLowerCase()) ||
          t.title.toLowerCase().includes(search.toLowerCase()) ||
          t.description.toLowerCase().includes(search.toLowerCase()) ||
          t.keywords?.some((k) => k.toLowerCase().includes(search.toLowerCase()))
      )
    : null;

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
            Calculators, quizzes, and builders for style, grooming, fitness, dating, and more. 100% free, works instantly.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools... (e.g. body fat, beard, cologne, sleep)"
                className="w-full rounded-xl border border-border bg-background py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Search Results */}
          {filteredTools !== null && (
            <div className="mx-auto mt-4 max-w-xl">
              {filteredTools.length === 0 ? (
                <p className="rounded-xl border border-border bg-background p-4 text-sm text-muted">
                  No tools found for &quot;{search}&quot;. Try a different keyword.
                </p>
              ) : (
                <div className="rounded-xl border border-border bg-background text-left">
                  {filteredTools.map((tool, i) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.slug}`}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors hover:bg-surface ${
                        i !== filteredTools.length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      <span className="text-xl">{tool.emoji}</span>
                      <div>
                        <p className="font-medium">{tool.shortTitle}</p>
                        <p className="text-sm text-muted line-clamp-1">{tool.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Category Cards */}
          {!search && (
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat) => {
                const count = toolsRegistry.filter((t) => t.category === cat.slug).length;
                return (
                  <a
                    key={cat.slug}
                    href={`#${cat.slug}`}
                    className="group rounded-xl border border-border bg-background p-5 text-left transition-all hover:border-accent/50 hover:shadow-lg"
                  >
                    <span className="text-3xl">{cat.emoji}</span>
                    <h2 className="mt-2 font-bold group-hover:text-accent">{cat.title}</h2>
                    <p className="mt-1 text-sm text-accent">{count} tools</p>
                  </a>
                );
              })}
            </div>
          )}
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
