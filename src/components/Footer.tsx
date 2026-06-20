import Link from 'next/link';
import styles from './Footer.module.css';

const COLS = [
  {
    title: 'Product',
    links: [
      { href: '/', label: 'Home' },
      { href: '/search', label: 'Search' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/for-agencies', label: 'For agencies' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/guides', label: 'Guides' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/legal/terms', label: 'Terms' },
      { href: '/legal/privacy', label: 'Privacy' },
      { href: '/legal/refunds', label: 'Refunds' },
      { href: '/legal/registration-policy', label: 'Registration Policy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.inner} section-max`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="6" fill="#080B0F" />
              <rect x="3" y="3" width="26" height="26" rx="5" fill="none" stroke="#46D9F3" strokeWidth="2" />
              <text x="16" y="20" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="800" fontSize="11" fill="#F3F4EF">AL</text>
              <circle cx="24" cy="24" r="3" fill="#B9FF4F" />
            </svg>
            <span className={styles.logoText}>AIDot<span className={styles.cyan}>AL</span></span>
          </div>
          <p className={styles.tagline}>AI-ranked domain discovery, managed registration, and DNS.</p>
        </div>

        {COLS.map(col => (
          <div key={col.title} className={styles.col}>
            <p className={styles.colTitle}>{col.title}</p>
            <ul className={styles.colLinks} role="list">
              {col.links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.colLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} AIDotAL &middot; AI-ranked .al domain discovery.</p>
      </div>
    </footer>
  );
}
