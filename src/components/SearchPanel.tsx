'use client';

import { useState } from 'react';
import type { Candidate } from '@/lib/types';
import ResultCard from './ResultCard';
import styles from './SearchPanel.module.css';

interface Props {
  compact?: boolean;
  initialBrief?: string;
}

const EXAMPLE_BRIEFS = [
  'An AI forecasting platform for finance teams',
  'A legal tech startup for contract review',
  'A personal brand for a product designer',
];

const DEMO_FALLBACK: Candidate[] = [
  {
    name: 'capit',
    domain: 'capit.al',
    score: 88,
    meaningFit: 90,
    recall: 85,
    pronunciation: 92,
    spellingRisk: 88,
    marketFit: 80,
    rationale: 'Natural domain hack completing "capital" — instantly communicates finance and authority.',
    why: 'The .al extension completes the word "capital", making it a rare, elegant domain hack.',
    watchout: 'May feel finance-specific; test whether it resonates beyond investment contexts.',
    pronunciationHint: 'KAP-it-al',
    availability: 'demo',
    checkedAt: new Date().toISOString(),
  },
  {
    name: 'logic',
    domain: 'logic.al',
    score: 85,
    meaningFit: 88,
    recall: 87,
    pronunciation: 95,
    spellingRisk: 90,
    marketFit: 78,
    rationale: 'Domain hack completing "logical" — universally understood, zero pronunciation risk.',
    why: 'Instantly readable as "logical" — the name acts as a brand adjective.',
    watchout: 'Very broad — needs strong visual branding to differentiate.',
    pronunciationHint: 'LOJ-ih-kul',
    availability: 'demo',
    checkedAt: new Date().toISOString(),
  },
  {
    name: 'orbit',
    domain: 'orbit.al',
    score: 82,
    meaningFit: 80,
    recall: 88,
    pronunciation: 94,
    spellingRisk: 92,
    marketFit: 72,
    rationale: 'Completing "orbital" — suggests scope and reach. Strong for platforms and networks.',
    why: '"Orbital" evokes movement and scale. Clean domain hack, familiar globally.',
    watchout: 'Space/tech connotation may not suit every category.',
    pronunciationHint: 'OR-bit-ul',
    availability: 'demo',
    checkedAt: new Date().toISOString(),
  },
  {
    name: 'critic',
    domain: 'critic.al',
    score: 79,
    meaningFit: 82,
    recall: 80,
    pronunciation: 90,
    spellingRisk: 88,
    marketFit: 70,
    rationale: 'Completing "critical" — strong connotation of importance and decisiveness.',
    why: '"Critical" signals priority — ideal for ops, security, or infrastructure products.',
    watchout: 'Negative framing possible; "critical" can imply problems.',
    pronunciationHint: 'KRIT-ih-kul',
    availability: 'demo',
    checkedAt: new Date().toISOString(),
  },
  {
    name: 'sign',
    domain: 'sign.al',
    score: 77,
    meaningFit: 78,
    recall: 82,
    pronunciation: 96,
    spellingRisk: 94,
    marketFit: 68,
    rationale: 'Completing "signal" — direct, clean, one syllable before the TLD.',
    why: '"Signal" is well understood in tech: alerts, communication, data.',
    watchout: 'Signal the messaging app owns strong mind-share — may cause confusion.',
    pronunciationHint: 'SIG-nul',
    availability: 'demo',
    checkedAt: new Date().toISOString(),
  },
  {
    name: 'vect',
    domain: 'vect.al',
    score: 74,
    meaningFit: 72,
    recall: 78,
    pronunciation: 82,
    spellingRisk: 80,
    marketFit: 72,
    rationale: 'Invented form derived from "vector" — short, punchy, strong ML/AI connotation.',
    why: 'Vectors are central to AI and ML. The truncated form feels technical-forward.',
    watchout: 'Non-word — some audiences may not connect it to "vector" without context.',
    availability: 'demo',
    checkedAt: new Date().toISOString(),
  },
];

export default function SearchPanel({ compact, initialBrief }: Props) {
  const [brief, setBrief] = useState(initialBrief ?? '');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [compared, setCompared] = useState<string[]>([]);
  const [generatedAt, setGeneratedAt] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (brief.trim().length < 10) {
      setError('Please describe your business in at least 10 characters.');
      return;
    }
    setStatus('loading');
    setError(null);
    setCandidates([]);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brief: brief.trim() }),
      });
      const data = await res.json() as { candidates?: Candidate[]; error?: string; generatedAt?: string };
      if (!res.ok || data.error) {
        throw new Error(data.error ?? 'Generation failed');
      }
      setCandidates(data.candidates ?? DEMO_FALLBACK);
      setGeneratedAt(data.generatedAt ?? new Date().toISOString());
      setStatus('done');
    } catch (err) {
      setCandidates(DEMO_FALLBACK);
      setGeneratedAt(new Date().toISOString());
      setError(err instanceof Error ? err.message : 'Generation failed — showing demo results.');
      setStatus('error');
    }
  }

  function toggleSave(domain: string) {
    setSaved(prev => {
      const next = new Set(prev);
      if (next.has(domain)) next.delete(domain);
      else next.add(domain);
      return next;
    });
  }

  function toggleCompare(domain: string) {
    setCompared(prev =>
      prev.includes(domain)
        ? prev.filter(d => d !== domain)
        : prev.length < 2 ? [...prev, domain] : prev
    );
  }

  const showResults = status === 'done' || status === 'error';

  return (
    <div className={`${styles.wrap} ${compact ? styles.compact : ''}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="brief">
          Describe your business
        </label>
        <textarea
          id="brief"
          className={styles.textarea}
          rows={compact ? 2 : 4}
          value={brief}
          onChange={e => setBrief(e.target.value)}
          placeholder="e.g. An AI forecasting platform for enterprise finance teams — needs to feel credible and precise."
          maxLength={500}
          aria-describedby="brief-help"
        />
        <div className={styles.formFooter}>
          <span id="brief-help" className={styles.charCount}>
            {brief.length}/500
          </span>
          <button
            className={styles.btnSubmit}
            type="submit"
            disabled={status === 'loading' || brief.trim().length < 10}
            aria-busy={status === 'loading'}
          >
            {status === 'loading' ? (
              <><span className={styles.spinner} aria-hidden="true" /> Generating&hellip;</>
            ) : (
              'Generate names →'
            )}
          </button>
        </div>
      </form>

      {!compact && status === 'idle' && (
        <div className={styles.examples}>
          <p className={styles.exLabel}>Try an example:</p>
          <div className={styles.exChips}>
            {EXAMPLE_BRIEFS.map(b => (
              <button
                key={b}
                className={styles.exChip}
                type="button"
                onClick={() => setBrief(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      )}

      {status === 'loading' && (
        <div className={styles.skeletons} aria-live="polite" aria-label="Generating candidates">
          {[0, 1, 2].map(i => (
            <div key={i} className={styles.skeleton} style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      )}

      {error && (
        <div className={styles.errorBanner} role="alert">
          <span>{error}</span>
          {status === 'error' && <span className={styles.demoNote}> Showing demo results.</span>}
        </div>
      )}

      {showResults && candidates.length > 0 && (
        <>
          <div className={styles.grid}>
            {candidates.map(c => (
              <ResultCard
                key={c.domain}
                candidate={c}
                onSave={() => toggleSave(c.domain)}
                onCompare={() => toggleCompare(c.domain)}
                isSaved={saved.has(c.domain)}
                isCompared={compared.includes(c.domain)}
              />
            ))}
          </div>

          <div className={styles.statusBar}>
            <span>{candidates.length} candidates &middot; AI-generated &middot; demo availability</span>
            {generatedAt && (
              <span>&middot; {new Date(generatedAt).toLocaleTimeString()}</span>
            )}
          </div>

          <p className={styles.disclaimer}>
            Suggestions are not trademark clearance. A final availability check is required before purchase.
          </p>
        </>
      )}
    </div>
  );
}
