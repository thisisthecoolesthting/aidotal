import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aidotal.com';
  const pages = [
    '',
    '/search',
    '/pricing',
    '/how-it-works',
    '/register-al-domain',
    '/ai-domain-name-generator',
    '/managed-dns',
    '/for-agencies',
    '/guides',
    '/guides/how-to-choose-a-domain-name',
    '/guides/al-domain-registration-checklist',
    '/guides/dns-setup-for-a-new-domain',
    '/about',
    '/contact',
    '/legal/terms',
    '/legal/privacy',
    '/legal/refunds',
    '/legal/registration-policy',
  ];
  return pages.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
}
