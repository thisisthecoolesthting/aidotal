'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function LoginForm() {
  const [step, setStep] = useState<'form' | 'loading' | 'waitlist'>('form');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistDone, setWaitlistDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep('loading');
    setTimeout(() => setStep('waitlist'), 900);
  }

  function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    setWaitlistDone(true);
  }

  return (
    <>
      {step === 'form' && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input id="email" className={styles.input} type="email" required placeholder="you@example.com" autoComplete="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input id="password" className={styles.input} type="password" required placeholder="••••••••" autoComplete="current-password" />
          </div>
          <div className={styles.forgotRow}>
            <Link href="#" className={styles.forgotLink}>Forgot password?</Link>
          </div>
          <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            Sign in
          </button>
          <p className={styles.createLink}>
            No account? <Link href="#" className={styles.link}>Create one</Link>
          </p>
        </form>
      )}

      {step === 'loading' && (
        <div className={styles.loadingState} role="status" aria-live="polite">
          <span className={styles.spinner} aria-hidden="true" />
          <p>Signing in…</p>
        </div>
      )}

      {step === 'waitlist' && !waitlistDone && (
        <div className={styles.waitlist}>
          <p className={styles.waitlistNote}>
            Account features are in early access. Join the waitlist to be notified when your account is ready.
          </p>
          <form className={styles.waitlistForm} onSubmit={handleWaitlist}>
            <input
              className={styles.input}
              type="email"
              value={waitlistEmail}
              onChange={e => setWaitlistEmail(e.target.value)}
              required
              placeholder="you@example.com"
              aria-label="Email for waitlist"
            />
            <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              Join waitlist
            </button>
          </form>
        </div>
      )}

      {waitlistDone && (
        <div className={styles.waitlistDone} role="status">
          <span className={styles.doneIcon} aria-hidden="true">&#10003;</span>
          <p>You&apos;re on the list. We&apos;ll be in touch.</p>
        </div>
      )}
    </>
  );
}
