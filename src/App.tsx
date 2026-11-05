import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Publications } from './components/Publications';
import { Experience } from './components/Experience';
import { profile } from './data/profile';
import { certifications, education, news, skills } from './data/cv';
import { formatDate } from './utils';

export default function App() {
  return (
    <>
      <Nav />
      <main className="container">
        <Hero />

        <Section id="about" index="01" title="About">
          <div className="about-grid">
            <div className="prose">
              {profile.about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <aside className="card interests">
              <h3 className="eyebrow">Research interests</h3>
              <ul>
                {profile.interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </aside>
          </div>
        </Section>

        <Section id="news" index="02" title="News">
          <ul className="news">
            {news.map((n) => (
              <li key={n.date + n.text}>
                <time className="mono">{formatDate(n.date)}</time>
                {n.url ? (
                  <a href={n.url} target="_blank" rel="noreferrer">
                    {n.text}
                  </a>
                ) : (
                  <span>{n.text}</span>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="publications" index="03" title="Publications">
          <Publications />
        </Section>

        <Section id="experience" index="04" title="Experience">
          <Experience />
        </Section>

        <Section id="education" index="05" title="Education & Skills">
          <div className="edu-grid">
            <div>
              {education.map((e) => (
                <div className="edu" key={e.degree}>
                  <span className="mono muted">{e.period}</span>
                  <h3>{e.degree}</h3>
                  <p className="muted">{e.school}</p>
                  {e.note && <p className="note">{e.note}</p>}
                </div>
              ))}
              <h3 className="eyebrow">Biomedical training</h3>
              <ul className="certs">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <span>{c.title}</span>
                    <span className="muted">
                      {c.issuer} · {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3 className="eyebrow">{s.group}</h3>
                  <div className="chips">
                    {s.items.map((i) => (
                      <span className="chip" key={i}>
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" index="06" title="Contact">
          <div className="contact card">
            <p>{profile.openTo}</p>
            <div className="actions">
              {profile.links.email && (
                <a className="btn primary" href={`mailto:${profile.links.email}`}>
                  Email me
                </a>
              )}
              <a className="btn primary" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
              {profile.links.cv && (
                <a className="btn" href={import.meta.env.BASE_URL + profile.links.cv} target="_blank" rel="noreferrer">
                  Download CV
                </a>
              )}
            </div>
          </div>
        </Section>
      </main>
      <footer className="container footer mono">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </>
  );
}
