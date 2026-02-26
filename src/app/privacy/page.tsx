import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Privacy Policy',
  'Privacy policy for Real Men Guide. Learn how we handle your data.',
  '/privacy'
);

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: February 2026</p>

      <div className="mt-8 space-y-6 text-muted leading-relaxed">
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Overview</h2>
          <p>
            Real Men Guide (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This
            policy explains what data we collect and how we use it. The short version:
            we collect very little, and we never sell your data.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Data We Collect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Tool inputs:</strong> All tool calculations happen in your browser. We do not store your quiz answers, measurements, or results on any server.</li>
            <li><strong className="text-foreground">Email address:</strong> Only if you voluntarily subscribe to our newsletter. Managed by Beehiiv.</li>
            <li><strong className="text-foreground">Analytics:</strong> We use Google Analytics 4 to understand how people use our site (pages visited, time on site). This data is anonymous and aggregated.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Cookies</h2>
          <p>
            We use minimal cookies required by Google Analytics. No advertising cookies
            or tracking pixels. You can disable cookies in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Third-Party Services</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Vercel:</strong> Website hosting</li>
            <li><strong className="text-foreground">Google Analytics:</strong> Anonymous usage analytics</li>
            <li><strong className="text-foreground">Beehiiv:</strong> Email newsletter management</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Affiliate Links</h2>
          <p>
            Some pages contain affiliate links. When you click these links, the
            destination site may set their own cookies. We have no control over
            third-party cookies.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Your Rights</h2>
          <p>
            You can unsubscribe from our newsletter at any time using the link in any
            email. To request data deletion, contact us at realmenguide@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Contact</h2>
          <p>
            Questions about this policy? Email us at realmenguide@gmail.com.
          </p>
        </section>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-accent hover:text-accent-hover">← Back to all tools</Link>
      </div>
    </div>
  );
}
