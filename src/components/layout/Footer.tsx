import Link from 'next/link';
import { categories } from '@/lib/site-config';
import { toolsRegistry } from '@/data/tools-registry';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Tool Categories Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const catTools = toolsRegistry.filter((t) => t.category === cat.slug);
            return (
              <div key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="mb-3 block text-sm font-semibold uppercase tracking-wider text-accent hover:text-accent-hover"
                >
                  {cat.emoji} {cat.title}
                </Link>
                <div className="flex flex-col gap-1.5">
                  {catTools.slice(0, 8).map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.slug}`}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {tool.shortTitle}
                    </Link>
                  ))}
                  {catTools.length > 8 && (
                    <Link
                      href={`/category/${cat.slug}`}
                      className="text-xs text-accent hover:text-accent-hover"
                    >
                      +{catTools.length - 8} more →
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-bold">
              <span className="text-accent">■</span> Real Men Guide
            </Link>
          </div>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
            <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
          </div>
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Real Men Guide</p>
        </div>
      </div>
    </footer>
  );
}
