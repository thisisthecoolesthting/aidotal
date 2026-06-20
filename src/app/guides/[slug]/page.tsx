import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

type Props = { params: Promise<{ slug: string }> };

const GUIDES: Record<string, { title: string; readTime: string; content: () => React.ReactNode }> = {
  'how-to-choose-a-domain-name': {
    title: 'How to Choose a Domain Name',
    readTime: '8 min read',
    content: () => (
      <>
        <section>
          <h2>Start with a brief, not a keyword box</h2>
          <p>Most domain search tools work like this: you type a word, you get a list of available strings. Some of those strings are available. Most of them are not good names. The tool can&apos;t tell the difference because it doesn&apos;t know what you&apos;re building or who it&apos;s for.</p>
          <p>A better approach starts with a brief. What does the product do? Who is the audience? What tone is appropriate — technical, approachable, institutional, playful? What are the naming constraints — length, language, category associations to avoid? A brief gives an AI model enough context to generate candidates that actually fit, not just candidates that are available.</p>
        </section>
        <section>
          <h2>The scoring dimensions that matter</h2>
          <p>Good domain naming comes down to five measurable dimensions:</p>
          <ul>
            <li><strong>Meaning fit:</strong> Does the name connect to the product and audience without requiring explanation?</li>
            <li><strong>Recall:</strong> Can someone hear it in a meeting, not see it for a week, and still type it correctly?</li>
            <li><strong>Pronunciation:</strong> Can someone say it correctly after seeing it once? Names that create spoken ambiguity cause real problems in word-of-mouth contexts.</li>
            <li><strong>Spelling risk:</strong> Will people type what they heard? Double letters, silent letters, and unusual combinations all introduce risk.</li>
            <li><strong>Market fit:</strong> Does the name feel appropriate for the category, language, and target audience?</li>
          </ul>
          <p>These dimensions are not equally weighted for every product. A consumer brand cares more about recall and pronunciation than a developer tool does. An institutional product cares more about market fit and meaning than a startup does.</p>
        </section>
        <section>
          <h2>Why shorter isn&apos;t always better</h2>
          <p>Short domain names score well on recall, but length isn&apos;t the only variable. &ldquo;qxt.al&rdquo; is short, but it has terrible pronunciation and spelling risk scores. &ldquo;orbit.al&rdquo; is seven characters including the extension — longer than &ldquo;qxt.al&rdquo; — but it&apos;s a familiar English word with no pronunciation ambiguity and strong recall.</p>
          <p>The goal is a name that is as short as it can be while still being pronounceable, spellable, and meaningful. That&apos;s not always a three-character name.</p>
        </section>
        <section>
          <h2>The .al domain hack opportunity</h2>
          <p>Domain hacks use the extension to complete a word. .al is particularly well-suited to this because many English words end in &ldquo;al&rdquo; — capital, logical, orbital, critical, musical, digital, minimal, optimal, arrival, removal. For each of these, there is a potential domain hack: capit.al, logic.al, orbit.al, critic.al, music.al, digit.al, minim.al, optim.al, arriv.al, remov.al.</p>
          <p>A good domain hack works when the base word (before the .al) is recognizable on its own, and the completed word reinforces the brand. &ldquo;logic.al&rdquo; works because &ldquo;logic&rdquo; is a complete word and &ldquo;logical&rdquo; is a natural extension. &ldquo;capit.al&rdquo; works for a finance product because &ldquo;capital&rdquo; is the completed word.</p>
          <p>Domain hacks fail when the base word is not recognizable alone, or when the completed word has the wrong connotation for the audience.</p>
        </section>
        <section>
          <h2>Avoiding registration regret</h2>
          <p>Registration regret comes from choosing based on availability rather than fit. A name that is available today but creates confusion in every product demo is a liability, not an asset. Spend extra time on the brief and the shortlist — the registration itself takes minutes; the name is with you for years.</p>
          <p>Three things to check before registering: (1) Run a trademark clearance search — we do not do this, but a domain attorney can. (2) Test pronunciation out loud with someone who hasn&apos;t seen the name written. (3) Google the name — check for existing brands, negative associations, and conflicting abbreviations.</p>
        </section>
        <section>
          <h2>Using AI for discovery without replacing judgment</h2>
          <p>AI scoring surfaces measurable dimensions that humans can miss under time pressure. It doesn&apos;t replace the judgment calls that only you can make — audience expectations, competitive landscape, personal preference, and the feel of a name in a specific context.</p>
          <p>Use the scores as a starting position. Eliminate obvious failures. Pay attention to the watch-out notes on candidates that score well but have a specific risk. Then make the call yourself. The AI&apos;s job is to narrow the field and surface the tradeoffs — yours is to choose.</p>
        </section>
      </>
    ),
  },
  'al-domain-registration-checklist': {
    title: '.al Domain Registration Checklist',
    readTime: '4 min read',
    content: () => (
      <>
        <section>
          <h2>Before you register</h2>
          <p>Complete these steps before submitting a registration. Missing any of them can cause delays, registration failures, or problems that are expensive to fix after the domain is live.</p>
          <ul className={styles.checklist}>
            <li className={styles.checkItem}>
              <span className={styles.checkBox} aria-hidden="true" />
              <div>
                <strong>Confirm the name is what you want</strong>
                <p>Say it out loud. Type it from memory. Check it in a search engine. Make sure you&apos;re not registering a name you&apos;ll want to change in six months.</p>
              </div>
            </li>
            <li className={styles.checkItem}>
              <span className={styles.checkBox} aria-hidden="true" />
              <div>
                <strong>Verify .al eligibility requirements</strong>
                <p>Most .al registrations require accurate registrant contact information. Some categories have additional requirements. Check before submitting.</p>
              </div>
            </li>
            <li className={styles.checkItem}>
              <span className={styles.checkBox} aria-hidden="true" />
              <div>
                <strong>Prepare registrant contact information</strong>
                <p>Name, organization (if applicable), address, phone, email. This information is submitted to the registry and must be accurate.</p>
              </div>
            </li>
            <li className={styles.checkItem}>
              <span className={styles.checkBox} aria-hidden="true" />
              <div>
                <strong>Decide between managed DNS and external nameservers</strong>
                <p>If you&apos;re using managed DNS, have your target records ready. If using external nameservers, have those ready to configure in your DNS provider.</p>
              </div>
            </li>
            <li className={styles.checkItem}>
              <span className={styles.checkBox} aria-hidden="true" />
              <div>
                <strong>Plan your DNS records</strong>
                <p>Know your server IP (for A records), MX provider (for email), and any verification TXT records you&apos;ll need at launch.</p>
              </div>
            </li>
            <li className={styles.checkItem}>
              <span className={styles.checkBox} aria-hidden="true" />
              <div>
                <strong>Enable auto-renewal</strong>
                <p>Expired domains can be lost. Enable auto-renewal on the day you register — not when the expiry notice arrives.</p>
              </div>
            </li>
            <li className={styles.checkItem}>
              <span className={styles.checkBox} aria-hidden="true" />
              <div>
                <strong>Run a trademark clearance check</strong>
                <p>We do not provide trademark screening. A domain attorney or trademark search service can tell you if the name conflicts with an existing mark. This is especially important for commercial products.</p>
              </div>
            </li>
            <li className={styles.checkItem}>
              <span className={styles.checkBox} aria-hidden="true" />
              <div>
                <strong>Test the live domain within 24 hours of registration</strong>
                <p>Verify DNS propagation, confirm your records are resolving, and test both the apex domain and www subdomain. Fix any issues while the registration is fresh.</p>
              </div>
            </li>
          </ul>
        </section>
      </>
    ),
  },
  'dns-setup-for-a-new-domain': {
    title: 'DNS Setup for a New Domain',
    readTime: '6 min read',
    content: () => (
      <>
        <section>
          <h2>What DNS does</h2>
          <p>DNS (Domain Name System) translates a human-readable domain name into an IP address that computers use to route traffic. When someone types your domain into a browser, DNS resolves that name to your server&apos;s address. Without correct DNS records, a registered domain goes nowhere.</p>
        </section>
        <section>
          <h2>Essential record types</h2>
          <ul>
            <li><strong>A record:</strong> Maps your apex domain (yourdomain.al) to an IPv4 address. Required for website hosting on most servers.</li>
            <li><strong>AAAA record:</strong> Same as A, but for IPv6. Recommended for modern deployments.</li>
            <li><strong>CNAME record:</strong> Maps a name (like www) to another name (like your apex domain). Use this to point www.yourdomain.al to yourdomain.al.</li>
            <li><strong>MX record:</strong> Specifies which mail server handles email for your domain. Required if you want to receive email at your domain.</li>
            <li><strong>TXT record:</strong> Free-form text. Used for SPF (email authentication), DKIM, DMARC, and domain ownership verification.</li>
            <li><strong>CAA record:</strong> Specifies which certificate authorities are allowed to issue SSL certificates for your domain. Recommended as a security measure.</li>
          </ul>
        </section>
        <section>
          <h2>Setting up your website</h2>
          <p>For most web hosting setups, you need two records: an A record for the apex domain (@) pointing to your server&apos;s IP address, and a CNAME record for www pointing back to the apex domain. Some hosts use CNAME for both; check your host&apos;s documentation.</p>
          <p>If you&apos;re using a CDN like Cloudflare or a static host like Vercel or Netlify, follow their specific DNS setup instructions — they often use CNAME for the apex domain rather than an A record.</p>
        </section>
        <section>
          <h2>Setting up email</h2>
          <p>To receive email at your domain, you need an MX record pointing to your email provider&apos;s mail server. Most providers (Google Workspace, ProtonMail, Fastmail) give you the exact MX record to add.</p>
          <p>Add an SPF TXT record to specify which servers are authorized to send email from your domain. A basic SPF record looks like: <code>v=spf1 include:_spf.yourmailprovider.com ~all</code>. DKIM and DMARC records add additional email authentication — consult your email provider&apos;s documentation for the specific values.</p>
        </section>
        <section>
          <h2>Propagation timing</h2>
          <p>DNS changes propagate globally over time. The exact duration depends on the TTL (Time To Live) of the records. Most records propagate within 5–30 minutes with a low TTL (300–600 seconds). Records with high TTLs (86400 = 24 hours) can take longer to update globally if they were recently changed.</p>
          <p>New domains typically propagate faster because there are no cached old records. If you&apos;re migrating from an existing domain, lower your TTLs 24 hours before the switch to minimize propagation time.</p>
        </section>
        <section>
          <h2>Testing with dig</h2>
          <p>Use the <code>dig</code> command to verify DNS records from a terminal:</p>
          <ul>
            <li><code>dig yourdomain.al A</code> — check the A record</li>
            <li><code>dig yourdomain.al MX</code> — check the MX record</li>
            <li><code>dig yourdomain.al TXT</code> — check TXT records (SPF, etc.)</li>
            <li><code>dig @8.8.8.8 yourdomain.al A</code> — query Google&apos;s DNS to check propagation</li>
          </ul>
        </section>
        <section>
          <h2>Common mistakes</h2>
          <ul>
            <li><strong>High TTL on new records:</strong> New records with a 24-hour TTL can take a day to propagate. Start with 300–600 seconds for new setups.</li>
            <li><strong>CNAME at apex:</strong> Most DNS providers don&apos;t allow a CNAME record at the apex domain (@ / root). Use an A record instead, or a flattened CNAME if your provider supports it.</li>
            <li><strong>Missing www record:</strong> Many users type www.yourdomain.al habitually. Make sure it resolves, even if you redirect it to the apex domain.</li>
            <li><strong>Forgetting SPF:</strong> Email without SPF is likely to land in spam. Add an SPF TXT record before you send any email from your domain.</li>
          </ul>
        </section>
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(GUIDES).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES[slug];
  if (!guide) return { title: 'Guide Not Found' };
  return {
    title: `${guide.title} | AIDotAL`,
    description: `${guide.title} — practical guide from AIDotAL.`,
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = GUIDES[slug];
  if (!guide) notFound();

  return (
    <div className={styles.page}>
      <div className="section-max">
        <div className={styles.breadcrumb}>
          <Link href="/guides" className={styles.breadLink}>Guides</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.breadCurrent}>{guide.title}</span>
        </div>
        <div className={styles.header}>
          <span className={styles.readTime}>{guide.readTime}</span>
          <h1>{guide.title}</h1>
        </div>
        <div className={styles.content}>
          {guide.content()}
        </div>
        <div className={styles.backLink}>
          <Link href="/guides" className={styles.backBtn}>&larr; All guides</Link>
        </div>
      </div>
    </div>
  );
}
