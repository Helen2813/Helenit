import { useMemo, useState } from 'react';
import { publications } from '../data/publications';
import type { Publication, PublicationStatus } from '../data/types';
import { formatDate } from '../utils';

const labels: Record<PublicationStatus, string> = {
  journal: 'Journal',
  preprint: 'Preprint',
  conference: 'Conference',
  'under-review': 'Under review',
  thesis: 'Thesis',
};

type Filter = 'all' | PublicationStatus;

/** Renders "**Name**" segments in bold so her name stands out in author lists. */
function Authors({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
      )}
    </>
  );
}

function PubCard({ p }: { p: Publication }) {
  return (
    <article className="pub">
      <div className="pub-meta mono">
        <span className={`badge ${p.status}`}>{labels[p.status]}</span>
        <time>{formatDate(p.date)}</time>
        {p.firstAuthor && <span className="muted">· First author</span>}
      </div>
      <h3>
        <a href={p.url} target="_blank" rel="noreferrer">
          {p.title}
        </a>
      </h3>
      <p className="authors">
        <Authors text={p.authors} />
      </p>
      <p className="venue">{p.venue}</p>
      {p.summary && <p className="summary">{p.summary}</p>}
      <div className="pub-foot">
        <div className="chips">
          {p.tags?.map((t) => (
            <span className="chip small" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="pub-links mono">
          {p.doi && (
            <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer">
              DOI
            </a>
          )}
          {p.links?.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Publications() {
  const [filter, setFilter] = useState<Filter>('all');

  const sorted = useMemo(() => [...publications].sort((a, b) => b.date.localeCompare(a.date)), []);
  // Only offer filter buttons for statuses that actually exist in the data.
  const statuses = useMemo(() => [...new Set(sorted.map((p) => p.status))], [sorted]);
  const shown = filter === 'all' ? sorted : sorted.filter((p) => p.status === filter);

  return (
    <>
      <div className="filters" role="tablist">
        {(['all', ...statuses] as Filter[]).map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={filter === f ? 'active' : undefined}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All' : labels[f]}{' '}
            <span className="muted">{f === 'all' ? sorted.length : sorted.filter((p) => p.status === f).length}</span>
          </button>
        ))}
      </div>
      <div className="pubs">
        {shown.map((p) => (
          <PubCard key={p.url} p={p} />
        ))}
      </div>
    </>
  );
}
