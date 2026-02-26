import Link from 'next/link';
import { categories } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <span className="text-accent">■</span>
              <span>Real Men Guide</span>
            </Link>
            <p className="mt-2 text-sm text-muted">
              Free tools to help you look better, feel better, and live better.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Tools</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Popular */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Popular</h3>
            <div className="flex flex-col gap-2">
              <Link href="/body-fat-calculator" className="text-sm text-muted transition-colors hover:text-foreground">Body Fat Calculator</Link>
              <Link href="/tdee-calculator" className="text-sm text-muted transition-colors hover:text-foreground">TDEE Calculator</Link>
              <Link href="/face-shape-analyzer" className="text-sm text-muted transition-colors hover:text-foreground">Face Shape Analyzer</Link>
              <Link href="/love-language-quiz" className="text-sm text-muted transition-colors hover:text-foreground">Love Language Quiz</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Company</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted transition-colors hover:text-foreground">About</Link>
              <Link href="/privacy" className="text-sm text-muted transition-colors hover:text-foreground">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted transition-colors hover:text-foreground">Terms of Use</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Real Men Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
