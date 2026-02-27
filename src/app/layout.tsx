import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/layout/GoogleAnalytics';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617',
};

export const metadata: Metadata = {
  title: {
    default: 'Real Men Guide - Free Tools for Style, Fitness & Life',
    template: '%s | Real Men Guide',
  },
  description:
    'Free interactive tools for men. Body fat calculator, TDEE calculator, face shape analyzer, outfit builder, and more tools to help you level up.',
  keywords: ['body fat calculator men', 'TDEE calculator', 'face shape analyzer', 'beard style quiz', 'capsule wardrobe men', 'cologne finder', 'macro calculator', 'sleep cycle calculator', 'men grooming tools', 'self improvement tools for men', 'love language quiz', 'outfit builder men', 'skincare routine men'],
  metadataBase: new URL('https://realmenguide.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ZYZFGjAs4XVQ8o8pbzHA4nQnc9Di2xJQj3RWNLSCSlU',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://realmenguide.com',
    siteName: 'Real Men Guide',
    title: 'Real Men Guide - Free Tools for Style, Fitness & Life',
    description: 'Free interactive tools for men. Body fat calculator, TDEE calculator, face shape analyzer, outfit builder, and more tools to help you level up.',
    images: [{ url: '/og/default.png', width: 1200, height: 630, alt: 'Real Men Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Men Guide - Free Tools for Style, Fitness & Life',
    description: 'Free interactive tools for men. Body fat calculator, TDEE calculator, face shape analyzer, outfit builder, and more.',
    creator: '@realmenguide',
  },
  alternates: {
    canonical: 'https://realmenguide.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3244357825097886"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
