import Link from 'next/link';
import styles from './page.module.css';

export default function DomainsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.topRow}>
        <h1 className={styles.h1}>Domains</h1>
        <Link href="/search" className="btn-primary">Search names</Link>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Status</th>
              <th>Registered</th>
              <th>Expires</th>
              <th>DNS</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className={styles.emptyRow}>
                No domains yet. <Link href="/search" className={styles.emptyLink}>Start with a search.</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
