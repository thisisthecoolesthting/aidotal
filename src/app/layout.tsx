import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | AIDotAL',
    default: 'AIDotAL — AI-Ranked .al Domain Discovery',
  },
  description: 'AI-ranked domain discovery, managed registration, and DNS for .al domains. Describe your business — get a scored shortlist in seconds.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aidotal.com'),
  openGraph: {
    siteName: 'AIDotAL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
