import type { Metadata } from 'next';
import SearchPageClient from './SearchPageClient';

export const metadata: Metadata = {
  title: 'Search .al Domain Names',
  description: 'Describe your business and get an AI-scored .al domain shortlist with explanations for meaning, recall, pronunciation, and spelling risk.',
};

export default function SearchPage() {
  return <SearchPageClient />;
}
