import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Terms of Use',
  'Terms of use for Real Men Guide tools and website.',
  '/terms'
);

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Terms of Use</h1>
      <p className="mt-2 text-sm text-muted">Last updated: February 2026</p>

      <div className="mt-8 space-y-6 text-muted leading-relaxed">
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Acceptance</h2>
          <p>
            By using Real Men Guide (&quot;the site&quot;), you agree to these terms. If you
            don&apos;t agree, please don&apos;t use the site. It&apos;s that simple.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Our Tools</h2>
          <p>
            All tools on this site are provided for informational and entertainment
            purposes only. They are not a substitute for professional medical,
            financial, or personal advice.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Fitness calculators provide estimates, not medical diagnoses</li>
            <li>Financial calculators are for educational purposes only</li>
            <li>Style recommendations are suggestions, not prescriptions</li>
            <li>Quiz results are for fun and self-reflection</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Accuracy</h2>
          <p>
            We strive for accuracy in all our tools and content. However, we make no
            warranties about the completeness, reliability, or accuracy of any
            information on this site. Use at your own discretion.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Affiliate Links</h2>
          <p>
            This site contains affiliate links. We may earn a commission from purchases
            made through these links at no additional cost to you. Affiliate
            relationships are clearly disclosed on relevant pages.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Intellectual Property</h2>
          <p>
            All content, design, and tools on this site are owned by Real Men Guide.
            You may share results and link to our tools, but you may not copy or
            reproduce our tools or content without permission.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Limitation of Liability</h2>
          <p>
            Real Men Guide is not liable for any damages arising from the use of this
            site or its tools. This includes but is not limited to decisions made based
            on calculator results, product purchases through affiliate links, or any
            actions taken based on quiz or tool recommendations.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Changes</h2>
          <p>
            We may update these terms at any time. Continued use of the site after
            changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Contact</h2>
          <p>
            Questions? Email us at realmenguide@gmail.com.
          </p>
        </section>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-accent hover:text-accent-hover">← Back to all tools</Link>
      </div>
    </div>
  );
}
