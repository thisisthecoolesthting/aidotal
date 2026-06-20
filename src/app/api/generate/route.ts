import { NextRequest, NextResponse } from 'next/server';
import { generateCandidates } from '@/lib/claude';
import type { Candidate } from '@/lib/types';

export const runtime = 'nodejs';

const DEMO_CANDIDATES: Candidate[] = [
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
    why: 'The .al extension completes the word "capital", making it a rare, elegant domain hack with immediate meaning.',
    watchout: 'May feel finance-specific; test whether it resonates beyond investment contexts.',
    pronunciationHint: 'KAP-it-al (same as "capital")',
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
    rationale: 'Domain hack completing "logical" — clean, universally understood, zero pronunciation risk.',
    why: 'Instantly readable as "logical.al" — the name does double duty as a domain hack and a brand adjective.',
    watchout: 'Very broad — may not differentiate in a crowded market without strong visual branding.',
    pronunciationHint: 'LOJ-ih-kul (same as "logical")',
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
    rationale: 'Completing "orbital" — suggests scope, reach, and motion. Strong for platforms and networks.',
    why: '"Orbital" evokes movement and scale. The domain hack is clean and the word is familiar globally.',
    watchout: 'Space/tech connotation may not suit every category — validate with target audience.',
    pronunciationHint: 'OR-bit-ul (same as "orbital")',
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
    why: 'The word "critical" signals priority and decision-making — ideal for ops, security, or infrastructure.',
    watchout: 'Negative framing possible; "critical" can imply problems rather than solutions.',
    pronunciationHint: 'KRIT-ih-kul (same as "critical")',
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
    why: '"Signal" is a well-understood word in tech: alerts, communication, data. The domain hack is elegant.',
    watchout: 'Signal the messaging app owns strong mind-share — may cause confusion.',
    pronunciationHint: 'SIG-nul (same as "signal")',
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
    why: 'Vectors are central to AI and ML. The truncated form is memorable and feels technical-forward.',
    watchout: 'Non-word — some audiences may not connect it to "vector" without context.',
    availability: 'demo',
    checkedAt: new Date().toISOString(),
  },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { brief?: string };
    const brief = (body.brief ?? '').trim();

    if (brief.length < 10) {
      return NextResponse.json({ error: 'Brief must be at least 10 characters.' }, { status: 400 });
    }
    if (brief.length > 500) {
      return NextResponse.json({ error: 'Brief must be 500 characters or fewer.' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      // Return demo data when no API key configured
      return NextResponse.json({
        candidates: DEMO_CANDIDATES,
        generatedAt: new Date().toISOString(),
        source: 'demo',
      });
    }

    const candidates = await generateCandidates(brief);
    return NextResponse.json({ candidates, generatedAt: new Date().toISOString(), source: 'claude' });
  } catch (err) {
    console.error('Generate error:', err);
    return NextResponse.json({ error: 'Generation failed. Please try again.' }, { status: 500 });
  }
}
