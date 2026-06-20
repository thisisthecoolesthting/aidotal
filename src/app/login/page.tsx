import type { Metadata } from 'next';
import LoginForm from './LoginForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your AIDotAL account to manage .al domains, DNS, and billing.',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
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

        <LoginForm />
      </div>
    </div>
  );
}
