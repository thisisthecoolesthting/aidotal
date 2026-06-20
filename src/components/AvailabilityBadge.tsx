import type { Candidate } from '@/lib/types';
import styles from './AvailabilityBadge.module.css';

interface Props {
  status: Candidate['availability'];
  checkedAt?: string;
}

export default function AvailabilityBadge({ status, checkedAt }: Props) {
  const label =
    status === 'available' ? 'Available'
    : status === 'unavailable' ? 'Unavailable'
    : status === 'checking' ? 'Checking…'
    : 'Demo · recheck required';

  return (
    <span
      className={`${styles.badge} ${styles[status]}`}
      title={checkedAt ? `Checked ${new Date(checkedAt).toLocaleString()}` : undefined}
    >
      {status === 'checking' && <span className={styles.spinner} aria-hidden="true" />}
      {label}
    </span>
  );
}
