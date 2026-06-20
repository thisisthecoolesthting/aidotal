import DnsEditor from '@/components/DnsEditor';
import styles from './page.module.css';

type Props = { params: Promise<{ domain: string }> };

export default async function DnsDomainPage({ params }: Props) {
  const { domain } = await params;
  const decodedDomain = decodeURIComponent(domain);

  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>DNS: {decodedDomain}</h1>
      <DnsEditor domain={decodedDomain} />
    </div>
  );
}
