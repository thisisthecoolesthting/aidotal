'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function SecurityPage() {
  const [passwordDone, setPasswordDone] = useState(false);
  const [signOutDone, setSignOutDone] = useState(false);

  function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPasswordDone(true);
    setTimeout(() => setPasswordDone(false), 3000);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>Security</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionH2}>Change password</h2>
        <div className={styles.card}>
          <form className={styles.passwordForm} onSubmit={handlePasswordSubmit}>
            <div className={styles.field}>
              <label htmlFor="current-pw" className={styles.label}>Current password</label>
              <input id="current-pw" className={styles.input} type="password" required placeholder="••••••••" autoComplete="current-password" />
            </div>
            <div className={styles.field}>
              <label htmlFor="new-pw" className={styles.label}>New password</label>
              <input id="new-pw" className={styles.input} type="password" required placeholder="••••••••" autoComplete="new-password" />
            </div>
            <div className={styles.field}>
              <label htmlFor="confirm-pw" className={styles.label}>Confirm new password</label>
              <input id="confirm-pw" className={styles.input} type="password" required placeholder="••••••••" autoComplete="new-password" />
            </div>
            <div className={styles.pwActions}>
              <button className="btn-primary" type="submit">Update password</button>
              {passwordDone && <span className={styles.doneMsg} role="status">Password updated.</span>}
            </div>
          </form>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeaderRow}>
          <h2 className={styles.sectionH2}>Two-factor authentication</h2>
          <span className={styles.comingSoon}>Coming soon</span>
        </div>
        <div className={styles.card}>
          <p className={styles.twoFaDesc}>Two-factor authentication adds an additional layer of security to your account. It will be available when full account access launches.</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionH2}>Active sessions</h2>
        <div className={styles.card}>
          <div className={styles.sessionRow}>
            <div className={styles.sessionInfo}>
              <p className={styles.sessionBrowser}>Chrome &mdash; United States</p>
              <p className={styles.sessionTime}>Last active: just now &mdash; Current session</p>
            </div>
          </div>
          <hr className={styles.divider} />
          <button
            className="btn-secondary"
            type="button"
            onClick={() => setSignOutDone(true)}
            disabled={signOutDone}
            aria-disabled={signOutDone}
          >
            {signOutDone ? 'Done' : 'Sign out all other sessions'}
          </button>
        </div>
      </div>
    </div>
  );
}
