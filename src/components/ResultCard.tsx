'use client';

import { useState } from 'react';
import type { Candidate } from '@/lib/types';
import ScoreRing from './ScoreRing';
import AvailabilityBadge from './AvailabilityBadge';
import styles from './ResultCard.module.css';

interface Props {
  candidate: Candidate;
  onSave?: () => void;
  onCompare?: () => void;
  isSaved?: boolean;
  isCompared?: boolean;
}

const SCORE_DIMS = [
  { key: 'meaningFit', label: 'Meaning' },
  { key: 'recall', label: 'Recall' },
  { key: 'pronunciation', label: 'Pronounce' },
  { key: 'spellingRisk', label: 'Spelling' },
  { key: 'marketFit', label: 'Market' },
] as const;

export default function ResultCard({ candidate, onSave, onCompare, isSaved, isCompared }: Props) {
  const [toast, setToast] = useState('');

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  }

  function handleSave() {
    if (onSave) { onSave(); }
    else { showToast('Saved to shortlist'); }
  }

  function handleCompare() {
    if (onCompare) { onCompare(); }
    else { showToast('Added to comparison'); }
  }

  return (
    <article className={styles.card}>
      {toast && <div className={styles.toast} role="status">{toast}</div>}

      <div className={styles.top}>
        <div className={styles.domainWrap}>
          <h3 className={styles.domain}>
            <span className={styles.name}>{candidate.name}</span>
            <span className={styles.tld}>.al</span>
          </h3>
          {candidate.pronunciationHint && (
            <p className={styles.hint}>{candidate.pronunciationHint}</p>
          )}
        </div>
        <ScoreRing score={candidate.score} size={56} />
      </div>

      <div className={styles.badgeRow}>
        <AvailabilityBadge status={candidate.availability} checkedAt={candidate.checkedAt} />
      </div>

      <p className={styles.rationale}>{candidate.rationale}</p>

      <div className={styles.dims} aria-label="Score breakdown">
        {SCORE_DIMS.map(d => (
          <span key={d.key} className={styles.dim}>
            <span className={styles.dimLabel}>{d.label}</span>
            <span className={styles.dimVal}>{candidate[d.key]}</span>
          </span>
        ))}
      </div>

      <hr className={styles.divider} />

      <div className={styles.why}>
        <p className={styles.whyLabel}>Why it works</p>
        <p className={styles.whyText}>{candidate.why}</p>
      </div>

      {candidate.watchout && (
        <div className={styles.watchout}>
          <p className={styles.watchoutText}>{candidate.watchout}</p>
        </div>
      )}

      <div className={styles.actions}>
        <button
          className={`${styles.btnSave} ${isSaved ? styles.btnSaveActive : ''}`}
          onClick={handleSave}
          type="button"
          aria-label={isSaved ? 'Remove from saved' : 'Save to shortlist'}
        >
          {isSaved ? 'Saved' : 'Save'}
        </button>
        <button
          className={`${styles.btnCompare} ${isCompared ? styles.btnCompareActive : ''}`}
          onClick={handleCompare}
          type="button"
          aria-label={isCompared ? 'Remove from comparison' : 'Add to comparison'}
        >
          Compare
        </button>
      </div>
    </article>
  );
}
