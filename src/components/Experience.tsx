import { experience } from '../data/cv';

export function Experience() {
  return (
    <ol className="timeline">
      {experience.map((e) => (
        <li key={e.role + e.org} className={e.kind}>
          <div className="tl-head">
            <span className="mono muted">{e.period}</span>
            <span className={`badge ${e.kind}`}>{e.kind === 'research' ? 'Research' : 'Engineering'}</span>
          </div>
          <h3>{e.role}</h3>
          <p className="muted">
            {e.org} · {e.location}
          </p>
          <p>{e.description}</p>
          {e.stack && (
            <div className="chips">
              {e.stack.map((s) => (
                <span className="chip small" key={s}>
                  {s}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
