'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { categories } from '@/lib/site-config';
import { toolsRegistry } from '@/data/tools-registry';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Real Men Guide" width={140} height={40} className="h-8 w-auto invert" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {/* All Tools dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
            >
              All Tools
              <svg className={`h-4 w-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {toolsOpen && (
              <div className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] max-w-[720px] rounded-xl border border-border bg-background p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {categories.map((cat) => {
                    const catTools = toolsRegistry.filter((t) => t.category === cat.slug);
                    return (
                      <div key={cat.slug}>
                        <Link
                          href={`/category/${cat.slug}`}
                          onClick={() => setToolsOpen(false)}
                          className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
                        >
                          {cat.emoji} {cat.title}
                          <span className="text-xs text-muted font-normal">({catTools.length})</span>
                        </Link>
                        <div className="flex flex-col gap-1">
                          {catTools.slice(0, 6).map((tool) => (
                            <Link
                              key={tool.slug}
                              href={`/${tool.slug}`}
                              onClick={() => setToolsOpen(false)}
                              className="rounded px-2 py-1 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                            >
                              {tool.emoji} {tool.shortTitle}
                            </Link>
                          ))}
                          {catTools.length > 6 && (
                            <Link
                              href={`/category/${cat.slug}`}
                              onClick={() => setToolsOpen(false)}
                              className="mt-1 px-2 text-xs text-accent hover:text-accent-hover"
                            >
                              +{catTools.length - 6} more →
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {categories.map((cat) => {
              const catTools = toolsRegistry.filter((t) => t.category === cat.slug);
              const isExpanded = mobileCategory === cat.slug;
              return (
                <div key={cat.slug}>
                  <button
                    onClick={() => setMobileCategory(isExpanded ? null : cat.slug)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors hover:bg-surface"
                  >
                    <span>{cat.emoji} {cat.title} <span className="text-muted font-normal">({catTools.length})</span></span>
                    <svg className={`h-4 w-4 text-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isExpanded && (
                    <div className="ml-4 flex flex-col gap-0.5 pb-2">
                      {catTools.map((tool) => (
                        <Link
                          key={tool.slug}
                          href={`/${tool.slug}`}
                          onClick={() => { setMobileOpen(false); setMobileCategory(null); }}
                          className="rounded px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                        >
                          {tool.emoji} {tool.shortTitle}
                        </Link>
                      ))}
                      <Link
                        href={`/category/${cat.slug}`}
                        onClick={() => { setMobileOpen(false); setMobileCategory(null); }}
                        className="mt-1 px-3 text-xs text-accent hover:text-accent-hover"
                      >
                        View all {cat.title} →
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
