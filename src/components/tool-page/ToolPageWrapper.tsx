'use client';

import Link from 'next/link';
import { ToolMeta, SupportingContent } from '@/lib/types';
import { getCategoryBySlug } from '@/lib/site-config';
import EmailCapture from '@/components/email/EmailCapture';

interface ToolPageWrapperProps {
  tool: ToolMeta;
  supportingContent: SupportingContent;
  children: React.ReactNode;
}

export default function ToolPageWrapper({ tool, supportingContent, children }: ToolPageWrapperProps) {
  const category = getCategoryBySlug(tool.category);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="hover:text-foreground">{category.title}</Link>
            <span>/</span>
          </>
        )}
        <span className="text-foreground">{tool.shortTitle}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{tool.emoji}</span>
          <h1 className="text-2xl font-bold md:text-3xl">{tool.title}</h1>
        </div>
        <p className="mt-2 text-muted">{tool.description}</p>
      </div>

      {/* Tool content (engine goes here) */}
      <div className="mb-12">{children}</div>

      {/* Supporting content for SEO */}
      <div className="space-y-8 border-t border-border pt-8">
        {/* Intro */}
        <div>
          <h2 className="mb-3 text-xl font-bold">About This Tool</h2>
          <div className="text-muted leading-relaxed break-words [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-hover" dangerouslySetInnerHTML={{ __html: supportingContent.intro }} />
        </div>

        {/* How to use */}
        <div>
          <h2 className="mb-3 text-xl font-bold">How to Use</h2>
          <div className="text-muted leading-relaxed break-words [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-hover" dangerouslySetInnerHTML={{ __html: supportingContent.howToUse }} />
        </div>

        {/* FAQ */}
        {supportingContent.faq.length > 0 && (
          <div>
            <h2 className="mb-4 text-xl font-bold">FAQ</h2>
            <div className="space-y-4">
              {supportingContent.faq.map((faq, i) => (
                <details key={i} className="group rounded-lg border border-border bg-surface">
                  <summary className="cursor-pointer p-4 font-medium transition-colors hover:text-accent">
                    {faq.question}
                  </summary>
                  <div className="px-4 pb-4 text-sm text-muted break-words [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-hover" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Email capture */}
        <EmailCapture location={`tool-${tool.slug}`} />

        {/* Related tools */}
        {supportingContent.relatedTools && supportingContent.relatedTools.length > 0 && (
          <div>
            <h2 className="mb-4 text-xl font-bold">Related Tools</h2>
            <div className="flex flex-wrap gap-2">
              {supportingContent.relatedTools.map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
