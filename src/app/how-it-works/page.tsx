import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How AIDotAL Works | From Brief to Live .al Domain',
  description: 'Four steps from business brief to live .al domain. Discover, compare, register, and launch — all in one account.',
};

export default function HowItWorksPage() {
  return (
    <div className={styles.page}>
      <div className="section-max">
        <div className={styles.header}>
          <p className="kicker">HOW IT WORKS</p>
          <h1>From Brief to Live Domain</h1>
          <p className={styles.sub}>Four steps. One account. No guessing at any stage.</p>
        </div>

        {/* Step 1 */}
        <div className={styles.step}>
          <div className={styles.stepMeta}>
            <span className={styles.stepNum}>01</span>
            <div>
              <h2 className={styles.stepTitle}>Describe the business</h2>
              <p className={styles.stepBody}>
                Add the audience, market, tone, and naming constraints. The more specific the brief, the more relevant the shortlist. A brief like &ldquo;An AI forecasting platform for enterprise finance teams — needs to feel credible and precise&rdquo; produces better results than &ldquo;finance AI.&rdquo;
              </p>
              <p className={styles.stepBody}>
                The brief is your creative brief, not a keyword. You&apos;re telling the AI what the product does, who it&apos;s for, and what feeling it should create — not just what category it&apos;s in.
              </p>
            </div>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.mockForm}>
              <p className={styles.mockLabel}>Describe your business</p>
              <div className={styles.mockTextarea}>
                An AI forecasting platform for enterprise finance teams. Needs to feel credible, precise, and institutional — not consumer or playful.
              </div>
              <div className={styles.mockBtn}>Generate names →</div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className={styles.step}>
          <div className={styles.stepMeta}>
            <span className={styles.stepNum}>02</span>
            <div>
              <h2 className={styles.stepTitle}>Compare a reasoned shortlist</h2>
              <p className={styles.stepBody}>
                Review scores, explanations, and risks side by side. Each candidate shows five dimensions: meaning fit, recall, pronunciation, spelling risk, and market fit. The score is a weighted composite — not a black box.
              </p>
              <p className={styles.stepBody}>
                Save candidates to a project. Filter by score. Use the Compare button to put two names side by side. The rationale and watch-out sections are designed to surface the tradeoff, not just the score.
              </p>
            </div>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.mockCards}>
              {[
                { name: 'capit', score: 88, label: 'Domain hack · "capital"' },
                { name: 'logic', score: 85, label: 'Domain hack · "logical"' },
                { name: 'orbit', score: 82, label: 'Domain hack · "orbital"' },
              ].map(c => (
                <div key={c.name} className={styles.mockCard}>
                  <span className={styles.mockScore}>{c.score}</span>
                  <div>
                    <span className={styles.mockName}>{c.name}</span><span className={styles.mockTld}>.al</span>
                    <p className={styles.mockCardLabel}>{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className={styles.step}>
          <div className={styles.stepMeta}>
            <span className={styles.stepNum}>03</span>
            <div>
              <h2 className={styles.stepTitle}>Verify and register</h2>
              <p className={styles.stepBody}>
                We recheck the selected name live before order submission. Availability shown during search is a point-in-time check — the live recheck confirms the name is still available before payment is authorized.
              </p>
              <p className={styles.stepBody}>
                Registration is managed through our workflow. You provide registrant contact details, confirm eligibility, and authorize payment. We submit to the .al registry and confirm completion. You track status in your account.
              </p>
            </div>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.timeline}>
              {[
                { label: 'Availability confirmed', status: 'done' },
                { label: 'Payment authorized', status: 'done' },
                { label: 'Submitted to registry', status: 'done' },
                { label: 'Registered', status: 'active' },
              ].map(item => (
                <div key={item.label} className={styles.timelineItem}>
                  <span className={`${styles.timelineDot} ${item.status === 'done' ? styles.dotDone : styles.dotActive}`} aria-hidden="true" />
                  <span className={item.status === 'done' ? styles.timelineDone : styles.timelineActive}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className={styles.step}>
          <div className={styles.stepMeta}>
            <span className={styles.stepNum}>04</span>
            <div>
              <h2 className={styles.stepTitle}>Launch with managed DNS</h2>
              <p className={styles.stepBody}>
                Configure records, apply templates, and watch the domain go live. DNS changes propagate in minutes. Full audit history and health checks are included — you can see every change that was made and when.
              </p>
              <p className={styles.stepBody}>
                Three DNS templates cover the most common setups: Website only, Website + Email, and Custom VPS. Apply a template and fill in your values, or configure records manually. DNSSEC and CAA are supported.
              </p>
            </div>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.mockTerminal}>
              <div className={styles.mockTermBar}>
                <span className={styles.termDot} style={{ background: 'var(--danger)' }} />
                <span className={styles.termDot} style={{ background: '#F4B942' }} />
                <span className={styles.termDot} style={{ background: 'var(--success)' }} />
                <span className={styles.termUrl}>dns.aidotal.com — capit.al</span>
              </div>
              <div className={styles.mockTermBody}>
                <p className={styles.termLine}><span className={styles.termType}>A</span> <span className={styles.termName}>@</span> <span className={styles.termVal}>185.199.108.153</span></p>
                <p className={styles.termLine}><span className={styles.termType}>CNAME</span> <span className={styles.termName}>www</span> <span className={styles.termVal}>capit.al</span></p>
                <p className={styles.termLine}><span className={styles.termType}>MX</span> <span className={styles.termName}>@</span> <span className={styles.termVal}>mail.protonmail.ch</span></p>
                <p className={styles.termLine}><span className={styles.termMuted}>; Published 2 minutes ago · All records healthy</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
