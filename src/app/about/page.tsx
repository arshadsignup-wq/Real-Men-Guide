import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'About',
  'Real Men Guide is a free resource hub with 25+ interactive tools for style, grooming, fitness, and life skills.',
  '/about'
);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">About Real Men Guide</h1>

      <div className="mt-8 space-y-6 text-muted leading-relaxed">
        <p>
          Real Men Guide is a free collection of interactive tools designed to help men
          look better, feel better, and live better. From calculating your body fat
          percentage to finding the perfect beard style for your face shape, we&apos;ve
          built 25+ tools that give you actionable, personalized advice in minutes.
        </p>

        <p>
          We believe self-improvement shouldn&apos;t cost a fortune or require a personal
          stylist. Every tool on this site is 100% free, requires no sign-up, and works
          instantly in your browser.
        </p>

        <h2 className="text-xl font-bold text-foreground">What We Cover</h2>
        <ul className="space-y-2">
          <li className="flex gap-2"><span className="text-accent">→</span> Style & Grooming — Face shape analysis, outfit building, fragrance matching</li>
          <li className="flex gap-2"><span className="text-accent">→</span> Relationships & Life Skills — Date ideas, love languages, interview prep</li>
          <li className="flex gap-2"><span className="text-accent">→</span> Fitness & Health — Body fat, TDEE, macros, sleep cycles</li>
          <li className="flex gap-2"><span className="text-accent">→</span> Fun & Shareable — Archetype quizzes, life audits, daily challenges</li>
        </ul>

        <h2 className="text-xl font-bold text-foreground">Our Philosophy</h2>
        <p>
          We don&apos;t do fluff. Every tool is backed by real data, proven formulas,
          or expert-informed recommendations. We keep things simple, direct, and actionable
          — because that&apos;s what actually helps.
        </p>

        <h2 className="text-xl font-bold text-foreground">How We Make Money</h2>
        <p>
          Some of our tools recommend products through affiliate links. This means we may
          earn a small commission if you buy something through our links — at no extra
          cost to you. We only recommend products we genuinely believe in, and affiliate
          links never influence our tool results.
        </p>

        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="font-medium text-foreground">Have a tool idea or feedback?</p>
          <p className="mt-1 text-sm">
            We&apos;re always looking to build more useful tools.
            Drop us a line at{' '}
            <span className="text-accent">hello@realmenguide.com</span>
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-accent hover:text-accent-hover">
          ← Back to all tools
        </Link>
      </div>
    </div>
  );
}
