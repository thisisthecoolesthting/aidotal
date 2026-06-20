'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function LoginPage() {
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
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo} aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#080B0F" />
            <rect x="3" y="3" width="26" height="26" rx="5" fill="none" stroke="#46D9F3" strokeWidth="2" />
            <text x="16" y="20" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="800" fontSize="11" fill="#F3F4EF">AL</text>
            <circle cx="24" cy="24" r="3" fill="#B9FF4F" />
          </svg>
        </div>

        <h1 className={styles.h1}>Sign in to AIDotAL</h1>

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
      </div>
    </div>
  );
}
