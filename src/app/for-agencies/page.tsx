import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AIDotAL for Agencies | Multi-Domain Management',
  description: 'Manage domain naming projects for multiple clients. Shared shortlists, client approval links, role-based access, and multi-domain DNS — coming in Studio.',
};

export default function ForAgenciesPage() {
  return (
    <div className={styles.page}>
      <div className="section-max">
        <div className={styles.header}>
          <p className="kicker">FOR AGENCIES</p>
          <h1>Name More. Register Faster. Deliver Cleaner.</h1>
          <p className={styles.sub}>
            Studio tier gives agencies a structured workflow for multi-client domain naming — from discovery shortlist to registered domain, without the back-and-forth of shared spreadsheets.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {[
            { title: 'Multi-domain projects', desc: 'Organize domain searches by client or project. Each project gets its own shortlist, registration status, and DNS zones — not one undifferentiated account.' },
            { title: 'Shared shortlists', desc: 'Send a client a link to review the shortlist. They see the names, scores, and explanations — not your internal notes. No account required on their end.' },
            { title: 'Client approval links', desc: 'Clients mark their preferred names directly in the shortlist. You see their selections and comments in your project view without managing email threads.' },
            { title: 'Role-based access', desc: 'Add team members at different access levels. Reviewers can see but not register. Managers can register but not see billing. Full control is yours.' },
            { title: 'Bulk AI search', desc: 'Run multiple searches from a single brief session. Compare candidates across briefs and consolidate into a single shortlist for client review.' },
            { title: 'Priority support', desc: 'Studio accounts get priority responses on registration issues, DNS questions, and technical problems — not a shared support queue.' },
          ].map(f => (
            <div key={f.title} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <div className={styles.badge}><span className={styles.badgeDot} />Coming soon</div>
          <h2 className={styles.ctaH2}>Studio launches soon.</h2>
          <p className={styles.ctaDesc}>
            Studio is $595/year and supports up to 5 active domain projects with shared shortlists and client links. Join the waitlist to be notified at launch.
          </p>
          <div className={styles.ctaActions}>
            <button className="btn-primary" type="button">Join Studio waitlist</button>
            <Link href="/pricing" className="btn-secondary">Compare all tiers</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
