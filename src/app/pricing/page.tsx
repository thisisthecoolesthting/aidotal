import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Pricing | AIDotAL — $275/year Managed .al Domain Launch',
  description: 'One managed .al domain launch for $275/year. Includes registration, AI discovery, managed DNS, and account controls. No mystery at checkout.',
};

const LAUNCH_INCLUDED = [
  'One .al registration (standard price)',
  'Full AI discovery and scoring',
  'Live availability verification',
  'Managed registration workflow',
  'Managed authoritative DNS',
  'Account and renewal controls',
  'Standard support',
];

const STUDIO_INCLUDED = [
  'Everything in Launch',
  'Up to 5 active domain projects',
  'Shared shortlists and client links',
  'Role-based access',
  'Priority support',
];

const CONCIERGE_INCLUDED = [
  'Human naming workshop',
  'Expanded trademark screening',
  'Launch migration support',
  'Complex DNS configuration',
  'Acquisition discussions',
];

const PRICING_FAQ = [
  { q: 'Is $275 the full price?', a: 'Yes for a standard .al registration. Premium names at auction or via acquisition cost more, and we surface that before any purchase.' },
  { q: 'What happens at renewal?', a: 'You get a renewal notice 90 and 30 days before expiry. Auto-renewal is available. The renewal price matches the initial year.' },
  { q: 'Is there a refund policy?', a: 'Registered domains cannot be refunded once submitted to the registry. For eligibility issues or registration failures, refunds apply. See our refund policy for details.' },
  { q: 'What are the eligibility requirements for .al?', a: 'Most .al registrations require accurate registrant contact information. Some categories have additional requirements. We surface these during the registration flow and do not submit without confirmation.' },
];

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <div className="section-max">
        <div className={styles.header}>
          <p className="kicker">PRICING</p>
          <h1>Clear pricing.<br />No stack at checkout.</h1>
          <p className={styles.sub}>One annual price covers registration, DNS, and account management. Studio and Concierge tiers are available for agencies and complex needs.</p>
        </div>

        <div className={styles.tiersGrid}>
          {/* Launch */}
          <div className={`${styles.tier} ${styles.tierHighlight}`}>
            <div className={styles.tierHeader}>
              <p className={styles.tierName}>Launch</p>
              <div className={styles.tierPrice}>
                <span className={styles.tierAmount}>$275</span>
                <span className={styles.tierPer}>/year</span>
              </div>
              <p className={styles.tierDesc}>For founders and product teams registering a single .al domain.</p>
            </div>
            <ul className={styles.tierList}>
              {LAUNCH_INCLUDED.map(item => (
                <li key={item} className={styles.tierItem}>
                  <span className={styles.check} aria-hidden="true">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/search" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              Search names
            </Link>
          </div>

          {/* Studio */}
          <div className={`${styles.tier} ${styles.tierStudio}`}>
            <div className={styles.tierHeader}>
              <div className={styles.tierNameRow}>
                <p className={styles.tierName}>Studio</p>
                <span className={styles.comingSoon}>Coming soon</span>
              </div>
              <div className={styles.tierPrice}>
                <span className={styles.tierAmount}>$595</span>
                <span className={styles.tierPer}>/year</span>
              </div>
              <p className={styles.tierDesc}>For agencies managing domain naming across multiple clients.</p>
            </div>
            <ul className={styles.tierList}>
              {STUDIO_INCLUDED.map(item => (
                <li key={item} className={styles.tierItem}>
                  <span className={styles.check} aria-hidden="true">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }} type="button">
              Join waitlist
            </button>
          </div>

          {/* Concierge */}
          <div className={styles.tier}>
            <div className={styles.tierHeader}>
              <p className={styles.tierName}>Concierge</p>
              <div className={styles.tierPrice}>
                <span className={styles.tierAmount}>Custom</span>
              </div>
              <p className={styles.tierDesc}>For organizations with naming workshops, acquisition needs, or complex DNS requirements.</p>
            </div>
            <ul className={styles.tierList}>
              {CONCIERGE_INCLUDED.map(item => (
                <li key={item} className={styles.tierItem}>
                  <span className={styles.check} aria-hidden="true">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              Contact us
            </Link>
          </div>
        </div>

        <div className={styles.disclosures}>
          <h2 className={styles.disclosuresH2}>Pricing disclosures</h2>
          <div className={styles.disclosureGrid}>
            <div className={styles.disclosureItem}>
              <h3>Premium names</h3>
              <p>Some .al names are priced above the standard registry fee due to aftermarket value. The price shown at checkout is the final price.</p>
            </div>
            <div className={styles.disclosureItem}>
              <h3>Taxes</h3>
              <p>Applicable taxes are calculated at checkout based on your location. Prices shown are pre-tax.</p>
            </div>
            <div className={styles.disclosureItem}>
              <h3>Eligibility</h3>
              <p>Some .al registrations require eligibility verification. If a registration fails for eligibility reasons, a full refund applies.</p>
            </div>
            <div className={styles.disclosureItem}>
              <h3>Refund policy</h3>
              <p>Registered domains cannot be refunded once submitted to the .al registry. DNS and account features can be cancelled at any time.</p>
            </div>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2 className={styles.faqH2}>Pricing questions</h2>
          <div className={styles.faqGrid}>
            {PRICING_FAQ.map(item => (
              <div key={item.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{item.q}</h3>
                <p className={styles.faqA}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
