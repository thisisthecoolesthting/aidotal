import Anthropic from '@anthropic-ai/sdk';
import type { Candidate } from './types';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM = `You are a domain naming expert specializing in .al domains. Given a business brief, generate exactly 6 .al domain name candidates.

Score each candidate on these dimensions (all 0–100):
- meaningFit (25 pts): Does the name connect naturally to the product and audience?
- recall (20 pts): Is it compact, distinct, and memorable?
- pronunciation (15 pts): Can someone say it correctly after seeing it once?
- spellingRisk (15 pts): Will people type what they heard? Lower risk = higher score.
- marketFit (10 pts): Right tone for the category?
- score: weighted sum of all components (0–100)

Generate diverse candidate families:
1. Literal compounds (e.g. "signal.al")
2. Shortened compounds (e.g. "sig.al")
3. Suggestive words (e.g. "orbit.al")
4. Invented pronounceable forms (e.g. "vect.al")
5. Domain hacks where .al completes the word (e.g. "capit.al", "logic.al", "music.al", "critic.al")
6. AL initials/semantic completions

Return ONLY valid JSON — no markdown, no explanation. Format:
{
  "candidates": [
    {
      "name": "capit",
      "domain": "capit.al",
      "score": 88,
      "meaningFit": 90,
      "recall": 85,
      "pronunciation": 92,
      "spellingRisk": 88,
      "marketFit": 80,
      "rationale": "Natural domain hack completing 'capital' — instantly communicates finance and authority.",
      "why": "The .al extension completes the word 'capital', making it a rare, elegant domain hack with immediate meaning.",
      "watchout": "May feel finance-specific; test whether it resonates beyond investment contexts.",
      "pronunciationHint": "KAP-it-al (same as 'capital')"
    }
  ]
}`;

export async function generateCandidates(brief: string): Promise<Candidate[]> {
  const message = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 2048,
    system: SYSTEM,
    messages: [
      {
        role: 'user',
        content: `Business brief: ${brief}\n\nGenerate 6 .al domain candidates as JSON.`,
      },
    ],
  });

  const text = message.content[0].type === 'text' ? message.content[0].text : '';

  // Strip any markdown code fences
  const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

  const parsed = JSON.parse(cleaned) as { candidates: Candidate[] };

  return parsed.candidates.map(c => ({
    ...c,
    availability: 'demo' as const,
    checkedAt: new Date().toISOString(),
  }));
}
