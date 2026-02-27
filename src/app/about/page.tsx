import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'About',
  'Real Men Guide is a free resource hub with interactive tools for style, grooming, fitness, and life skills.',
  '/about'
);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">About Real Men Guide</h1>

      <div className="mt-8 space-y-6 text-muted leading-relaxed">
        <p>
          Real Men Guide is a free collection of interactive tools designed to help men
          look better, feel better, and live better. Use our{' '}
          <Link href="/body-fat-calculator" className="text-accent hover:text-accent-hover">body fat calculator</Link> to
          track your fitness, find the perfect{' '}
          <Link href="/beard-style-selector" className="text-accent hover:text-accent-hover">beard style for your face shape</Link>,
          or build a{' '}
          <Link href="/capsule-wardrobe-builder" className="text-accent hover:text-accent-hover">capsule wardrobe</Link> that
          actually works. Every tool gives you actionable, personalized advice in minutes.
        </p>

        <p>
          We believe men&apos;s self-improvement shouldn&apos;t cost a fortune or require a personal
          stylist. Every tool on this site is 100% free, requires no sign-up, and works
          instantly in your browser — from{' '}
          <Link href="/tdee-calculator" className="text-accent hover:text-accent-hover">calorie calculators</Link> to{' '}
          <Link href="/fragrance-finder" className="text-accent hover:text-accent-hover">cologne finders</Link>.
        </p>

        <h2 className="text-xl font-bold text-foreground">What We Cover</h2>
        <ul className="space-y-2">
          <li className="flex gap-2"><span className="text-accent">→</span> <Link href="/category/style-and-grooming" className="text-accent hover:text-accent-hover">Style & Grooming</Link> — <Link href="/face-shape-analyzer" className="hover:text-foreground">Face shape analysis</Link>, <Link href="/outfit-builder" className="hover:text-foreground">outfit building</Link>, <Link href="/fragrance-finder" className="hover:text-foreground">fragrance matching</Link>, <Link href="/skincare-routine-builder" className="hover:text-foreground">skincare routines</Link></li>
          <li className="flex gap-2"><span className="text-accent">→</span> <Link href="/category/relationships-and-life-skills" className="text-accent hover:text-accent-hover">Relationships & Life Skills</Link> — <Link href="/date-night-generator" className="hover:text-foreground">Date ideas</Link>, <Link href="/love-language-quiz" className="hover:text-foreground">love languages</Link>, <Link href="/interview-prep-coach" className="hover:text-foreground">interview prep</Link>, <Link href="/morning-routine-builder" className="hover:text-foreground">morning routines</Link></li>
          <li className="flex gap-2"><span className="text-accent">→</span> <Link href="/category/fitness-and-health" className="text-accent hover:text-accent-hover">Fitness & Health</Link> — <Link href="/body-fat-calculator" className="hover:text-foreground">Body fat</Link>, <Link href="/tdee-calculator" className="hover:text-foreground">TDEE</Link>, <Link href="/protein-macro-calculator" className="hover:text-foreground">macros</Link>, <Link href="/sleep-cycle-calculator" className="hover:text-foreground">sleep cycles</Link></li>
          <li className="flex gap-2"><span className="text-accent">→</span> <Link href="/category/viral-and-shareable" className="text-accent hover:text-accent-hover">Fun & Shareable</Link> — <Link href="/man-archetype-quiz" className="hover:text-foreground">Archetype quizzes</Link>, <Link href="/life-audit-score" className="hover:text-foreground">life audits</Link>, <Link href="/daily-man-challenge" className="hover:text-foreground">daily challenges</Link></li>
        </ul>

        <h2 className="text-xl font-bold text-foreground">Our Philosophy</h2>
        <p>
          We don&apos;t do fluff. Our{' '}
          <Link href="/body-fat-calculator" className="text-accent hover:text-accent-hover">fitness calculators</Link> use
          proven formulas like the U.S. Navy method and Mifflin-St Jeor equation. Our{' '}
          <Link href="/face-shape-analyzer" className="text-accent hover:text-accent-hover">style quizzes</Link> are
          built on expert grooming recommendations. We keep things simple, direct, and actionable
          — because that&apos;s what actually helps men level up.
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
            <span className="text-accent">realmenguide@gmail.com</span>
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
