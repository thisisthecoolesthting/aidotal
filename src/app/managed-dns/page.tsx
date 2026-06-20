import type { Metadata } from 'next';
import DnsEditor from '@/components/DnsEditor';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Managed DNS for .al Domains | AIDotAL',
  description: 'Managed authoritative DNS included with every .al registration. Record management, templates, health checks, and audit log — all in your account.',
};

export default function ManagedDnsPage() {
  return (
    <div className={styles.page}>
      <div className="section-max">
        <div className={styles.header}>
          <p className="kicker">MANAGED DNS</p>
          <h1>DNS That Launches With Your Domain</h1>
          <p className={styles.sub}>
            A registered domain is only useful when it resolves. Managed DNS is included with every .al registration — no extra setup, no separate provider required.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {[
            { title: 'Full record type support', desc: 'A, AAAA, CNAME, MX, TXT, CAA, and SRV records. Everything you need to run a website, email, and custom services.' },
            { title: 'Website and email templates', desc: 'Three templates cover the most common setups. Apply a template and your records are configured — fill in your values and publish.' },
            { title: 'Validation before publish', desc: 'Record changes are validated before they go live. The publish step shows you a diff of what will change and asks for confirmation.' },
            { title: 'Audit log and rollback', desc: 'Every change is logged with a timestamp and user. Review the full history of your DNS zone and identify any unexpected changes.' },
            { title: 'DNS health checks', desc: 'Regular health checks verify that your records are resolving correctly. Status is visible in your account — no separate monitoring tool required.' },
            { title: 'Nameserver modes', desc: 'Use our managed nameservers (default) or point to external nameservers if you prefer to manage DNS elsewhere.' },
          ].map(f => (
            <div key={f.title} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.editorSection}>
          <p className="kicker">LIVE DEMO</p>
          <h2 className={styles.editorH2}>Try the DNS editor</h2>
          <p className={styles.editorSub}>This is the actual DNS editor interface. Changes made here are not saved — it&apos;s a fully interactive preview.</p>
          <DnsEditor domain="demo.al" />
        </div>

        <div className={styles.nsSection}>
          <h2>Nameserver options</h2>
          <div className={styles.nsGrid}>
            <div className={styles.nsCard}>
              <h3>Managed nameservers</h3>
              <p>Default. Use our authoritative DNS — records are configured in your account and changes propagate globally within 5 minutes.</p>
              <div className={styles.nsRecords}>
                <p className={styles.nsRecord}>ns1.aidotal.com</p>
                <p className={styles.nsRecord}>ns2.aidotal.com</p>
              </div>
            </div>
            <div className={styles.nsCard}>
              <h3>External nameservers</h3>
              <p>Point your .al domain at Cloudflare, Route 53, or any other DNS provider. DNS management moves to your external provider — our DNS editor will not be used.</p>
              <p className={styles.nsNote}>You&apos;ll need to configure your records in the external provider before switching nameservers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
