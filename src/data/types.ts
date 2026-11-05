export type PublicationStatus = 'journal' | 'preprint' | 'conference' | 'under-review' | 'thesis';

export interface Publication {
  title: string;
  /** Author list as it should appear. Wrap her own name in ** ** to highlight it. */
  authors: string;
  venue: string;
  status: PublicationStatus;
  /** ISO date, e.g. "2026-09-23". Used for sorting and display. */
  date: string;
  url: string;
  doi?: string;
  summary?: string;
  tags?: string[];
  links?: { label: string; url: string }[];
  firstAuthor?: boolean;
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  location: string;
  kind: 'research' | 'engineering';
  description: string;
  stack?: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export interface NewsItem {
  date: string;
  text: string;
  url?: string;
}
