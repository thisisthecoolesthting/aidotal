import Link from 'next/link';
import styles from './page.module.css';

const STATS = [
  { label: 'Active domains', value: '0' },
  { label: 'Saved shortlists', value: '0' },
  { label: 'Open orders', value: '0' },
  { label: 'DNS zones', value: '0' },
];

const EMPTY_CTAS = [
  { title: 'Start a new search', desc: 'Describe your business and get a scored .al shortlist.', href: '/search', cta: 'Search names' },
  { title: 'Register your first .al', desc: 'Learn what\'s needed to register a .al domain.', href: '/register-al-domain', cta: 'Registration guide' },
  { title: 'Set up managed DNS', desc: 'See how DNS management works before you register.', href: '/managed-dns', cta: 'View DNS demo' },
];

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>Dashboard</h1>

      <div className={styles.statsGrid}>
        {STATS.map(s => (
          <div key={s.label} className={styles.statCard}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.emptySection}>
        <h2 className={styles.emptyH2}>Get started</h2>
        <div className={styles.emptyGrid}>
          {EMPTY_CTAS.map(c => (
            <div key={c.title} className={styles.emptyCard}>
              <h3 className={styles.emptyTitle}>{c.title}</h3>
              <p className={styles.emptyDesc}>{c.desc}</p>
              <Link href={c.href} className={styles.emptyBtn}>{c.cta} &rarr;</Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.activitySection}>
        <h2 className={styles.activityH2}>Recent activity</h2>
        <div className={styles.activityEmpty}>No activity yet.</div>
      </div>
    </div>
  );
}
