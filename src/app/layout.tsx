import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
