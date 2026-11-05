import { profile } from '../data/profile';
import { publications } from '../data/publications';
import { HeroArt } from './HeroArt';

export function Hero() {
  const { links } = profile;
  const journals = publications.filter((p) => p.status === 'journal').length;
  const preprints = publications.filter((p) => p.status === 'preprint').length;

  const external = [
    ['LinkedIn', links.linkedin],
    ['GitHub', links.github],
    ['Google Scholar', links.scholar],
    ['ORCID', links.orcid],
  ].filter(([, url]) => url);

  return (
    <header id="top" className="hero">
      <div className="hero-top">
        <div>
          <p className="mono muted hero-meta">
            <span className="dot" /> {profile.affiliation} · {profile.location}
          </p>
          <h1>{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-tagline">{profile.tagline}</p>
        </div>
        <HeroArt />
      </div>

      <div className="actions">
        <a className="btn primary" href="#publications">
          View publications
        </a>
        {links.cv && (
          <a className="btn" href={import.meta.env.BASE_URL + links.cv} target="_blank" rel="noreferrer">
            CV (PDF)
          </a>
        )}
        {external.map(([label, url]) => (
          <a key={label} className="btn ghost" href={url} target="_blank" rel="noreferrer">
            {label} ↗
          </a>
        ))}
      </div>

      <dl className="stats">
        <div>
          <dt>{journals}</dt>
          <dd>journal papers</dd>
        </div>
        <div>
          <dt>{preprints}</dt>
          <dd>preprints</dd>
        </div>
        <div>
          <dt>4+</dt>
          <dd>years in software engineering</dd>
        </div>
      </dl>
    </header>
  );
}
