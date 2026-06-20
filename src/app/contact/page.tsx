'use client';

import { useState } from 'react';
import styles from './page.module.css';

const SUBJECTS = [
  { value: 'general', label: 'General' },
  { value: 'support', label: 'Technical support' },
  { value: 'agency', label: 'Agency inquiry' },
  { value: 'press', label: 'Press' },
  { value: 'other', label: 'Other' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <div className={styles.page}>
      <div className="section-max">
        <div className={styles.header}>
          <p className="kicker">CONTACT</p>
          <h1>Get in Touch</h1>
          <p className={styles.sub}>We typically respond within one business day.</p>
        </div>

        {submitted ? (
          <div className={styles.success} role="status">
            <div className={styles.successIcon} aria-hidden="true">&#10003;</div>
            <h2 className={styles.successTitle}>Message received.</h2>
            <p className={styles.successBody}>We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input id="name" className={styles.input} type="text" required placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input id="email" className={styles.input} type="email" required placeholder="you@example.com" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <select id="subject" className={styles.select}>
                {SUBJECTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea id="message" className={styles.textarea} rows={6} required placeholder="What would you like to talk about?" />
            </div>
            <button className="btn-primary" type="submit" disabled={loading} aria-busy={loading}>
              {loading ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
