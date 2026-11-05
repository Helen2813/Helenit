import type { ReactNode } from 'react';

interface Props {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="section">
      <header className="section-head">
        <span className="mono accent">{index}</span>
        <h2>{title}</h2>
        <span className="rule" />
      </header>
      {children}
    </section>
  );
}
