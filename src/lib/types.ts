export interface Candidate {
  name: string;
  domain: string;
  score: number;
  meaningFit: number;
  recall: number;
  pronunciation: number;
  spellingRisk: number;
  marketFit: number;
  rationale: string;
  why: string;
  watchout: string;
  pronunciationHint?: string;
  availability: 'demo' | 'available' | 'unavailable' | 'checking';
  checkedAt?: string;
}

export interface SearchResult {
  brief: string;
  candidates: Candidate[];
  generatedAt: string;
}
