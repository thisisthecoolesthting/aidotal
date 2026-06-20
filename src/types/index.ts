export interface Candidate {
  name: string
  score: number
  available: boolean
  reason: string
  tags: string[]
  price?: number
}

export interface SearchResult {
  query: string
  candidates: Candidate[]
  generated_at: string
}

export interface DomainRecord {
  id: string
  name: string
  tld: string
  status: 'active' | 'expiring' | 'expired'
  expires: string
  autoRenew: boolean
  locked: boolean
}

export interface DnsRecord {
  id: string
  type: 'A' | 'AAAA' | 'CNAME' | 'MX' | 'TXT' | 'NS'
  name: string
  value: string
  ttl: number
}

export interface GuidePost {
  slug: string
  title: string
  description: string
  readTime: string
  published: string
  category: string
}
