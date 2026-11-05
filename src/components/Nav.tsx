import { useEffect, useState } from 'react';

const items = [
  ['about', 'About'],
  ['publications', 'Publications'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['contact', 'Contact'],
] as const;

export function Nav() {
  const [active, setActive] = useState('');

  // Highlight the section currently crossing the upper third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          EK<span className="accent">.</span>
        </a>
        <ul>
          {items.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
