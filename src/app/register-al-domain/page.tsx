import type { Metadata } from 'next';
import Link from 'next/link';
import SearchPanel from '@/components/SearchPanel';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Register a .al Domain | AIDotAL',
  description: 'Register a .al domain the right way. AI-assisted discovery, live availability check, managed registration workflow, and DNS — all in one account.',
};

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <div className="section-max">
        <div className={styles.header}>
          <p className="kicker">REGISTRATION</p>
          <h1>Register a .al Domain the Right Way</h1>
          <p className={styles.sub}>
            .al is Albania&apos;s country-code TLD — and one of the last short-namespace TLDs where meaningful names are still available. Here&apos;s what you need to know before you register.
          </p>
        </div>

        <div className={styles.sections}>
          <section className={styles.section}>
            <h2>What is a .al domain?</h2>
            <p>.al is the country-code top-level domain (ccTLD) for Albania, operated by AKEP (Albanian Electronic and Postal Communications Authority). Like .io, .ai, and .co, it&apos;s used internationally — particularly as a domain hack, where the extension completes a word.</p>
            <p>Examples: <strong>logic.al</strong> (logical), <strong>capit.al</strong> (capital), <strong>orbit.al</strong> (orbital), <strong>critic.al</strong> (critical), <strong>music.al</strong> (musical). These names turn a registration into a brand statement — the extension is part of the word.</p>
            <p>Short non-hack names are also valuable: two-to-four character prefixes followed by .al produce memorable, distinct addresses that still have meaningful inventory available.</p>
          </section>

          <section className={styles.section}>
            <h2>Eligibility and requirements</h2>
            <p>Requirements for .al registrations vary depending on the registrant and use case. Most registrations require accurate contact information (name, address, phone, email) submitted through an accredited registrar.</p>
            <p>We surface eligibility details during the registration flow and do not submit to the registry until you have confirmed. If a registration fails for eligibility reasons, a full refund applies.</p>
            <div className={styles.note}>
              <p>We do not provide legal advice on trademark or eligibility. For complex or commercial registrations, consult a domain attorney.</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>The registration process</h2>
            <ol className={styles.processList}>
              <li className={styles.processItem}>
                <span className={styles.processNum}>1</span>
                <div>
                  <strong>Discovery</strong>
                  <p>Describe your business. Get a scored shortlist of .al candidates with explanations and risk flags.</p>
                </div>
              </li>
              <li className={styles.processItem}>
                <span className={styles.processNum}>2</span>
                <div>
                  <strong>Live availability check</strong>
                  <p>Before any payment, we recheck availability in real time. The shortlist shows a point-in-time check; the pre-registration check is live.</p>
                </div>
              </li>
              <li className={styles.processItem}>
                <span className={styles.processNum}>3</span>
                <div>
                  <strong>Registration workflow</strong>
                  <p>Provide registrant contact details, confirm eligibility, authorize payment. We submit to the .al registry.</p>
                </div>
              </li>
              <li className={styles.processItem}>
                <span className={styles.processNum}>4</span>
                <div>
                  <strong>DNS and launch</strong>
                  <p>Configure DNS records, apply a template, and make the domain live. Full health checks and audit log included.</p>
                </div>
              </li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>Pricing</h2>
            <p>A managed .al domain launch is $275/year. This covers registration at the standard registry price, managed DNS, and account controls including renewal management. There are no additional fees at checkout for standard registrations.</p>
            <p>Premium names (those with aftermarket value) may cost more. The price shown at checkout is the final price.</p>
            <Link href="/pricing" className={styles.pricingLink}>Full pricing details &rarr;</Link>
          </section>

          <section className={styles.searchSection}>
            <h2>Search .al domain names</h2>
            <p className={styles.searchSub}>Describe your business and get a scored shortlist. No account required.</p>
            <SearchPanel />
          </section>
        </div>
      </div>
    </div>
  );
}
