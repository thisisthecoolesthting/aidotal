export interface Guide {
  slug: string
  title: string
  description: string
  readTime: string
  published: string
  category: string
  body: string
}

export const GUIDES: Guide[] = [
  {
    slug: 'why-al-domains-for-ai-companies',
    title: 'Why .al domains are perfect for AI companies',
    description: 'The linguistic trick that makes .al uniquely powerful for AI brands — and which names you should register before they are gone.',
    readTime: '6 min read',
    published: '2025-01-15',
    category: 'Strategy',
    body: `The .al country-code top-level domain (ccTLD) belongs to Albania, but it has earned a second life as the preferred TLD for AI-native brands. The reason is simple: .al domains can spell complete English words.

"tot.al" reads as "total". "logic.al" as "logical". "ration.al" as "rational". "capit.al" as "capital". No other TLD offers this built-in semantic advantage — your domain name and your brand become one.

**The inventory advantage**

Unlike .com, .io, or even .ai, the .al namespace still has significant premium inventory available. Names that would cost five or six figures on .com aftermarkets — "neural", "sync", "arc", "volt" — are registerable on .al for $18-28 per year.

This window will not stay open. As AI brands proliferate and the .al TLD gains recognition, premium short names will be snapped up. Early movers gain lasting brand advantage.

**Linguistic fit for AI products**

The strongest .al domains work because English adjectives often end in "-al": neural, logical, rational, total, capital, orbital, pivotal, digital. When you register the root without the suffix, you get a domain that literally completes the word:

- neuro.al — neurological
- orbit.al — orbital
- digit.al — digital
- pivot.al — pivotal
- logic.al — logical

For AI products — which often carry names suggesting intelligence, totality, or transformation — this is unusually powerful positioning.

**Registration tips**

1. Register the shortest form. "neural.al" beats "neuralnetwork.al" by every brand metric.
2. Test pronunciation. Read the full domain aloud including .al. If it sounds like a word, that is a signal.
3. Check the adjective list. Search for AI-adjacent adjectives ending in "-al" and register the root.
4. Act fast on available names. A WHOIS check showing availability today does not mean available tomorrow.`,
  },
  {
    slug: 'how-ai-scores-domain-names',
    title: 'How AI scores domain names: the AIDotAL methodology',
    description: 'A detailed look at the 7-factor scoring model Claude uses to rank .al domain candidates — and how to optimize for a higher score.',
    readTime: '8 min read',
    published: '2025-01-20',
    category: 'Technical',
    body: `Every .al domain candidate on AIDotAL receives a 0–100 brand-fit score. This score is not a black box — it comes from a transparent 7-factor model that Claude applies to every candidate.

**The 7 scoring factors**

**1. Brevity (up to 20 points)**
Shorter domains are more memorable and easier to type. Domains under 5 characters receive the full 20 points.

**2. Pronounceability (up to 15 points)**
Claude tests whether the domain sounds natural when spoken aloud — including the .al suffix.

**3. AI/tech relevance (up to 20 points)**
Does the domain fit the AI-native market? Terms with established meaning in ML, neural networks, inference, or compute score higher.

**4. Originality (up to 15 points)**
Unique coined terms or creative portmanteaus score higher than dictionary words that could apply to many products.

**5. Memorability (up to 15 points)**
Domains that are distinctive, have a pleasing rhythm, or carry an unexpected visual effect are more memorable.

**6. No hyphens (5 points)**
Hyphens kill brand recall. Every hyphen-free domain gets the full 5 points.

**7. Clean spelling (up to 10 points)**
Intentional misspellings score lower unless the variant is very widely known.

**Optimizing your search**

To get the highest-scoring candidates, search for concepts rather than words. "edge inference platform" will produce more creative candidates than "edgeinfer".`,
  },
  {
    slug: 'al-domain-dns-setup-guide',
    title: 'Complete DNS setup guide for .al domains',
    description: 'Step-by-step DNS configuration for .al domains — including A records, MX setup for Google Workspace, SPF/DKIM, and DNSSEC.',
    readTime: '10 min read',
    published: '2025-01-25',
    category: 'Technical',
    body: `Once you have registered your .al domain, you need to configure DNS to point it at your infrastructure.

**Step 1: Point your domain at a web server**

To serve a website at your .al domain, add an A record pointing to your server IP address with TTL 300.

**Step 2: Configure email with Google Workspace**

Add the five Google MX records with priorities 1, 5, 5, 10, and 10. Then add SPF, DKIM, and DMARC TXT records as specified in your Google Workspace admin console.

**Step 3: Enable DNSSEC**

In AIDotAL's DNS editor, click "Enable DNSSEC" — the system handles key generation and rotation automatically. Your registrar DS record is updated within 60 seconds.

**Testing your configuration**

Use dig or the built-in DNS checker in your AIDotAL dashboard to verify all records are resolving correctly after changes propagate.`,
  },
]
