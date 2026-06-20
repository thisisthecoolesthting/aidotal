'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import SearchPanel from '@/components/SearchPanel';
import styles from './page.module.css';

// Note: metadata export doesn't work in client components; set via layout patterns
// This page must be client for the chip click → state interaction.
// We'll use a wrapper pattern.

const EXAMPLE_BRIEFS = [
  'An AI forecasting platform for finance teams',
  'A legal tech startup for contract review',
  'A personal brand for a product designer',
];

export default function SearchPage() {
  const [brief, setBrief] = useState('');
  const [showSaveModal, setShowSaveModal] = useState(false);

  return (
    <div className={styles.page}>
      <div className={`${styles.inner} section-max`}>
        <div className={styles.header}>
          <p className="kicker">AI DOMAIN SEARCH</p>
          <h1 className={styles.h1}>Search .al Domain Names</h1>
          <p className={styles.sub}>Describe your business. Get a scored shortlist with explanations for each name.</p>
        </div>

        <SearchPanel initialBrief={brief} />

        <div className={styles.chips}>
          <p className={styles.chipsLabel}>Start with an example:</p>
          <div className={styles.chipsRow}>
            {EXAMPLE_BRIEFS.map(b => (
              <button
                key={b}
                className={styles.chip}
                onClick={() => setBrief(b)}
                type="button"
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.saveBar}>
          <button
            className={styles.btnSaveShortlist}
            onClick={() => setShowSaveModal(true)}
            type="button"
          >
            Save shortlist
          </button>
        </div>
      </div>

      {showSaveModal && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-label="Create account to save">
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Create account to save</h2>
            <p className={styles.modalDesc}>Account features are in early access. Enter your email to join the waitlist and get notified when saving is available.</p>
            <form
              className={styles.modalForm}
              onSubmit={e => { e.preventDefault(); setShowSaveModal(false); }}
            >
              <input
                className={styles.modalInput}
                type="email"
                placeholder="you@example.com"
                required
                aria-label="Email address"
              />
              <button className="btn-primary" type="submit">Join waitlist</button>
            </form>
            <button
              className={styles.modalClose}
              onClick={() => setShowSaveModal(false)}
              type="button"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
