import Link from 'next/link';
import styles from './layout.module.css';

const SIDEBAR_LINKS = [
  { href: '/app/dashboard', label: 'Dashboard' },
  { href: '/app/domains', label: 'Domains' },
  { href: '/app/dns', label: 'DNS' },
  { href: '/app/billing', label: 'Billing' },
  { href: '/app/security', label: 'Security' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <div className={styles.demoBanner}>
        Preview mode &mdash; account features are in early access.{' '}
        <Link href="/login" className={styles.demoBannerLink}>Join waitlist</Link>
      </div>

      <div className={styles.body}>
        <aside className={styles.sidebar} aria-label="App navigation">
          <div className={styles.sidebarLogo}>
            <Link href="/" className={styles.sideLogoLink} aria-label="AIDotAL home">
              <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="6" fill="#080B0F" />
                <rect x="3" y="3" width="26" height="26" rx="5" fill="none" stroke="#46D9F3" strokeWidth="2" />
                <text x="16" y="20" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="800" fontSize="11" fill="#F3F4EF">AL</text>
                <circle cx="24" cy="24" r="3" fill="#B9FF4F" />
              </svg>
              <span className={styles.sideLogoText}>AIDot<span className={styles.cyan}>AL</span></span>
            </Link>
            <span className={styles.sideAcctLabel}>Account Preview</span>
          </div>

          <nav aria-label="Sidebar navigation">
            <ul className={styles.sideLinks} role="list">
              {SIDEBAR_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.sideLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.sideFooter}>
            <Link href="/contact" className={styles.sideLink}>Support</Link>
          </div>
        </aside>

        <div className={styles.main}>
          <header className={styles.topbar}>
            <div className={styles.topbarLeft}>
              <span className={styles.topbarTitle}>Account Preview</span>
            </div>
            <div className={styles.topbarRight}>
              <button className={styles.bellBtn} type="button" aria-label="Notifications">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
            </div>
          </header>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
