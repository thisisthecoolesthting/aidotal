import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About AIDotAL',
  description: 'AIDotAL is a managed .al domain discovery and launch service. AI generates shortlists with reasons — humans still choose.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="section-max">
        <div className={styles.header}>
          <p className="kicker">ABOUT</p>
          <h1>About AIDotAL</h1>
        </div>
        <div className={styles.content}>
          <p className={styles.lead}>
            AIDotAL is a managed .al domain discovery and launch service. It exists because domain search is usually a dead end — a keyword box that returns 50 names with no explanation of why any of them are good.
          </p>
          <p>
            We built a product that starts with a business brief and produces a shortlist with reasons: why a name works, where the risk is, and what the scores mean. Then it handles registration, DNS, and renewal in one account.
          </p>

          <section className={styles.section}>
            <h2>Our editorial commitment</h2>
            <p>We don&apos;t fabricate availability. We don&apos;t promise instant registration. We don&apos;t show reviews we don&apos;t have. Every claim on this site is intended to be accurate and verifiable.</p>
            <p>If a domain is checked at search time and its availability has changed by registration time, we tell you — and we don&apos;t charge you for a failed registration.</p>
          </section>

          <section className={styles.section}>
            <h2>On AI</h2>
            <p>AI generates the candidates and explains them. Humans still choose. The product is designed to improve the decision, not remove it. The scoring dimensions — meaning fit, recall, pronunciation, spelling risk, and market fit — are enforced by a structured system prompt. The rationale and watch-out notes are the model&apos;s actual reasoning, not marketing copy.</p>
            <p>You can disagree with any score. The scores give you a starting position. The choice is yours.</p>
          </section>

          <section className={styles.section}>
            <h2>On .al domains</h2>
            <p>Albania&apos;s country-code TLD is increasingly used internationally because short combinations and domain hacks are still available. Many English words end in &ldquo;al&rdquo; — which makes .al uniquely suited to domain hacks where the extension completes the word.</p>
            <p>We verify eligibility and surface requirements honestly. We don&apos;t claim instant registration or guaranteed approval. When registration fails, we say why and refund where applicable.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
