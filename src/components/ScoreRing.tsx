import styles from './ScoreRing.module.css';

interface Props {
  score: number;
  size?: number;
}

export default function ScoreRing({ score, size = 56 }: Props) {
  const radius = 20;
  const circ = 2 * Math.PI * radius;
  const arc = (score / 100) * circ;

  return (
    <div className={styles.wrap} style={{ width: size, height: size }} aria-label={`Score ${score} out of 100`}>
      <svg viewBox="0 0 52 52" width={size} height={size} fill="none">
        <circle cx="26" cy="26" r={radius} stroke="var(--line)" strokeWidth="4" />
        <circle
          cx="26"
          cy="26"
          r={radius}
          stroke="var(--lime)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${arc} ${circ}`}
          transform="rotate(-90 26 26)"
        />
      </svg>
      <span className={styles.num}>{score}</span>
    </div>
  );
}
