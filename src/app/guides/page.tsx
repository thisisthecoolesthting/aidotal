import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Domain Naming & .al Registration Guides | AIDotAL',
  description: 'Practical guides on choosing a domain name, registering a .al domain, and setting up DNS for a new domain.',
};

const GUIDES = [
  {
    slug: 'how-to-choose-a-domain-name',
    title: 'How to Choose a Domain Name',
    desc: 'Why keyword boxes fail you, what dimensions actually matter, and how to use a business brief instead of a search term.',
    readTime: '8 min read',
  },
  {
    slug: 'al-domain-registration-checklist',
    title: '.al Domain Registration Checklist',
    desc: 'Eight steps to check before and after registering a .al domain — from trademark to DNS setup.',
    readTime: '4 min read',
  },
  {
    slug: 'dns-setup-for-a-new-domain',
    title: 'DNS Setup for a New Domain',
    desc: 'What DNS does, which record types matter, how to set up website and email, and what to test after you go live.',
    readTime: '6 min read',
  },
];

export default function GuidesPage() {
  return (
    <div className={styles.page}>
      <div className="section-max">
        <div className={styles.header}>
          <p className="kicker">GUIDES</p>
          <h1>Guides</h1>
          <p className={styles.sub}>Practical reference for domain naming, registration, and DNS. No filler.</p>
        </div>
        <div className={styles.grid}>
          {GUIDES.map(g => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className={styles.card}>
              <span className={styles.readTime}>{g.readTime}</span>
              <h2 className={styles.cardTitle}>{g.title}</h2>
              <p className={styles.cardDesc}>{g.desc}</p>
              <span className={styles.arrow}>Read &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
