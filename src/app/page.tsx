import type { Metadata } from 'next';
import Link from 'next/link';
import SearchPanel from '@/components/SearchPanel';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AIDotAL — AI-Ranked .al Domain Discovery',
  description: 'Describe your business. Get a scored .al domain shortlist in seconds. Compare meaning, recall, pronunciation risk, and spelling risk before you pay.',
};

const SCORE_DIMS = [
  { num: '01', label: 'Meaning fit', desc: 'Connect the name to the product, outcome, and audience.' },
  { num: '02', label: 'Recall', desc: 'Prefer compact, distinct names people can retrieve later.' },
  { num: '03', label: 'Pronunciation', desc: 'Spot names that become awkward when spoken aloud.' },
  { num: '04', label: 'Spelling risk', desc: 'Estimate whether people will type what they heard.' },
  { num: '05', label: 'Market fit', desc: 'Does it feel right for the language, category, and tone?' },
  { num: '06', label: 'Availability', desc: 'When was it checked, and does it need a final recheck?' },
];

const HOW_STEPS = [
  { num: '01', title: 'Describe the business', body: 'Add the audience, market, tone, and naming constraints. The more specific the brief, the more relevant the shortlist.' },
  { num: '02', title: 'Compare a reasoned shortlist', body: 'Review scores, explanations, and risks side by side. Filter by type. Save candidates to a project.' },
  { num: '03', title: 'Verify and register', body: 'We recheck the selected name live before order submission. Registration is managed through our workflow — you track status in your account.' },
  { num: '04', title: 'Launch with managed DNS', body: 'Configure records, apply templates, and watch the domain go live. Full audit history and health checks included.' },
];

const INCLUDED = [
  'One .al registration (standard price)',
  'Full AI discovery and scoring',
  'Live availability verification',
  'Managed registration workflow',
  'Managed authoritative DNS',
  'Account and renewal controls',
  'Standard support',
];

const FAQ = [
  { q: 'What is a .al domain?', a: '.al is Albania\'s country-code top-level domain. It\'s increasingly used internationally — especially as a domain hack, where the extension completes a word like "logic.al" or "capit.al".' },
  { q: 'Is the AI score a guarantee?', a: 'No. The score reflects how the name performs across measurable dimensions. It does not predict market success or trademark availability. Use it to narrow the shortlist, not to replace judgment.' },
  { q: 'What happens after I search?', a: 'You get a shortlist with reasons. When you\'re ready to register, we recheck availability live and walk through the registration workflow in your account.' },
  { q: 'Do I need to create an account to search?', a: 'No. Search is open. Account features — projects, shortlist saving, renewal management — launch with early access.' },
  { q: 'How much does a .al domain cost?', a: 'Registration is $275/year, which includes managed DNS, account controls, and support. There are no hidden fees at checkout.' },
  { q: 'Can I use my own DNS provider?', a: 'Yes. You can point your domain at external nameservers. Managed DNS is included and optional.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={`${styles.heroInner} section-max`}>
          <div className={styles.eyebrowWrap}>
            <span className="eyebrow">
              <span className={styles.limeDot} aria-hidden="true" />
              AI DOMAIN DISCOVERY FOR .AL
            </span>
          </div>
          <h1 className={styles.heroH1}>
            Describe the idea.<br />
            Own the <span className={styles.cyAl}>.al.</span>
          </h1>
          <p className={styles.heroSub}>
            Turn a product brief into a reasoned domain shortlist. Compare meaning, recall, pronunciation, and spelling risk — then register and launch from one account.
          </p>
          <div className={styles.searchWrap}>
            <SearchPanel />
          </div>
          <p className={styles.microcopy}>
            Availability is checked live and can change until registration succeeds.
          </p>
        </div>
      </section>

      {/* ── Why .al ── */}
      <section className={styles.whySection}>
        <div className={`${styles.whySplit} section-max`}>
          <div className={styles.whyLeft}>
            <p className="kicker">A DISTINCTIVE ADDRESS</p>
            <h2>Short enough to remember. Open enough to explore.</h2>
          </div>
          <div className={styles.whyRight}>
            <p>
              The .al extension is most powerful when it completes a word — &ldquo;logic.al&rdquo;, &ldquo;capit.al&rdquo;, &ldquo;orbit.al&rdquo; — turning a registration into a brand statement. Short combinations are still available. The international tech community is still discovering it.
            </p>
            <div className={styles.guardrail}>
              <p>
                The .al registry is operated by AKEP (Albanian Electronic and Postal Communications Authority). Registration requirements are enforced. We surface eligibility details honestly during the registration flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scoring ── */}
      <section className={styles.scoringSection}>
        <div className="section-max">
          <p className="kicker">SCORING MODEL</p>
          <h2 className={styles.scoringH2}>Know why a name works before you pay for it.</h2>
          <div className={styles.dimGrid}>
            {SCORE_DIMS.map(d => (
              <div key={d.num} className={styles.dimCard}>
                <span className={styles.dimNum}>{d.num}</span>
                <h3 className={styles.dimLabel}>{d.label}</h3>
                <p className={styles.dimDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.howSection}>
        <div className="section-max">
          <p className="kicker">HOW IT WORKS</p>
          <h2 className={styles.howH2}>Four steps from brief to live domain.</h2>
          <div className={styles.stepsGrid}>
            {HOW_STEPS.map(s => (
              <div key={s.num} className={styles.stepCard}>
                <span className={styles.stepNum}>{s.num}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </div>
            ))}
          </div>
          <div className={styles.howCta}>
            <Link href="/search" className="btn-primary">Build my shortlist</Link>
          </div>
        </div>
      </section>

      {/* ── DNS ── */}
      <section className={styles.dnsSection}>
        <div className={`${styles.dnsSplit} section-max`}>
          <div className={styles.dnsLeft}>
            <p className="kicker">LAUNCH-READY DNS</p>
            <h2>Registration is only useful when the domain works.</h2>
            <ul className={styles.dnsFeatures}>
              {['A, AAAA, CNAME, MX, TXT, CAA, SRV records', 'Website and email templates', 'Validation before publish', 'Audit log and rollback', 'DNS health checks', 'Optional DNSSEC'].map(f => (
                <li key={f} className={styles.dnsFeature}>
                  <span className={styles.dnsDot} aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.dnsRight}>
            <div className={styles.terminal}>
              <div className={styles.terminalBar}>
                <span className={styles.termDot} style={{ background: 'var(--danger)' }} />
                <span className={styles.termDot} style={{ background: '#F4B942' }} />
                <span className={styles.termDot} style={{ background: 'var(--success)' }} />
                <span className={styles.termUrl}>dns.aidotal.com</span>
              </div>
              <div className={styles.terminalBody}>
                <p className={styles.termLine}><span className={styles.termMuted}>; capit.al DNS zone</span></p>
                <p className={styles.termLine}><span className={styles.termType}>A</span> <span className={styles.termName}>@</span> <span className={styles.termVal}>185.199.108.153</span></p>
                <p className={styles.termLine}><span className={styles.termType}>AAAA</span> <span className={styles.termName}>@</span> <span className={styles.termVal}>2606:50c0:8000::153</span></p>
                <p className={styles.termLine}><span className={styles.termType}>CNAME</span> <span className={styles.termName}>www</span> <span className={styles.termVal}>capit.al</span></p>
                <p className={styles.termLine}><span className={styles.termType}>MX</span> <span className={styles.termName}>@</span> <span className={styles.termVal}>mail.protonmail.ch</span></p>
                <p className={styles.termLine}><span className={styles.termType}>TXT</span> <span className={styles.termName}>@</span> <span className={styles.termVal}>v=spf1 include:_spf.protonmail.ch ~all</span></p>
                <p className={styles.termLine}><span className={styles.termMuted}>; 5 records · last published just now</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className={styles.pricingSection}>
        <div className={`${styles.pricingSplit} section-max`}>
          <div className={styles.pricingLeft}>
            <p className="kicker">ONE MANAGED LAUNCH</p>
            <h2>$275 per year.<br />No mystery at checkout.</h2>
            <p className={styles.pricingSub}>One price covers registration, DNS, and the account controls to renew and manage. No upsell stack at checkout.</p>
          </div>
          <div className={styles.priceCard}>
            <div className={styles.priceTop}>
              <span className={styles.priceAmount}>$275</span>
              <span className={styles.pricePer}>/year</span>
            </div>
            <ul className={styles.priceList}>
              {INCLUDED.map(item => (
                <li key={item} className={styles.priceItem}>
                  <span className={styles.checkMark} aria-hidden="true">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/search" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Search before you buy
            </Link>
            <p className={styles.priceNote}>Price covers one .al registration at standard registry price. Premium names and premium TLD pricing vary.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <div className="section-max">
          <p className="kicker">FAQ</p>
          <h2 className={styles.faqH2}>Common questions</h2>
          <div className={styles.faqGrid}>
            {FAQ.map(item => (
              <div key={item.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{item.q}</h3>
                <p className={styles.faqA}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className="section-max">
          <div className={styles.ctaBox}>
            <p className="kicker">GET STARTED</p>
            <h2 className={styles.ctaH2}>Your next name should come with a reason.</h2>
            <p className={styles.ctaSub}>Describe what you&apos;re building and get a scored shortlist with explanations — not just a list of available strings.</p>
            <div className={styles.ctaSearch}>
              <SearchPanel compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
