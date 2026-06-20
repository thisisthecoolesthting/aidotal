'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/managed-dns', label: 'DNS' },
  { href: '/guides', label: 'Guides' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isApp = pathname.startsWith('/app');

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={styles.inner} aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="AIDotAL home">
          <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="6" fill="#080B0F" />
            <rect x="3" y="3" width="26" height="26" rx="5" fill="none" stroke="#46D9F3" strokeWidth="2" />
            <text x="16" y="20" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="800" fontSize="11" fill="#F3F4EF">AL</text>
            <circle cx="24" cy="24" r="3" fill="#B9FF4F" />
          </svg>
          <span className={styles.logoText}>
            <span className={styles.logoAi}>AI</span>
            <span className={styles.logoDot}>&middot;</span>
            <span className={styles.logoCyan}>AL</span>
          </span>
        </Link>

        {!isApp && (
          <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`} role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.link} ${pathname === link.href ? styles.linkActive : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.right}>
          <Link href="/search" className={styles.btnSearch} aria-label="Search domain names">
            Search names
          </Link>
          {!isApp && (
            <button
              className={styles.hamburger}
              onClick={() => setOpen(o => !o)}
              aria-expanded={open}
              aria-controls="nav-links"
              aria-label={open ? 'Close menu' : 'Open menu'}
              type="button"
            >
              <span className={styles.bar} aria-hidden="true" />
              <span className={styles.bar} aria-hidden="true" />
              <span className={styles.bar} aria-hidden="true" />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
