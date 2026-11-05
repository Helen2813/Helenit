/**
 * Decorative hero illustration built from motifs in Elena's research:
 * a gene-expression heatmap (background), a causal graph with the target's
 * Markov blanket highlighted (centre) and two Kaplan–Meier survival curves (bottom).
 */

type Pt = { x: number; y: number };
type Node = Pt & { id: string; label: string; role: 'target' | 'blanket' | 'outer' };

const nodes: Node[] = [
  { id: 'T', x: 205, y: 165, label: 'outcome', role: 'target' },
  { id: 'P1', x: 125, y: 95, label: 'ESR1', role: 'blanket' },
  { id: 'P2', x: 280, y: 85, label: 'TP53', role: 'blanket' },
  { id: 'C1', x: 135, y: 245, label: 'stage', role: 'blanket' },
  { id: 'C2', x: 270, y: 250, label: 'PGR', role: 'blanket' },
  { id: 'S1', x: 345, y: 185, label: 'lncRNA', role: 'blanket' },
  { id: 'O1', x: 45, y: 150, label: 'age', role: 'outer' },
  { id: 'O2', x: 200, y: 30, label: 'HER2', role: 'outer' },
  { id: 'O3', x: 375, y: 70, label: 'CNV', role: 'outer' },
  { id: 'O4', x: 40, y: 250, label: 'meth', role: 'outer' },
];

const edges: [string, string][] = [
  ['P1', 'T'],
  ['P2', 'T'],
  ['T', 'C1'],
  ['T', 'C2'],
  ['S1', 'C2'],
  ['O1', 'P1'],
  ['O2', 'P2'],
  ['O3', 'P2'],
  ['O4', 'C1'],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
const radius = (n: Node) => (n.role === 'target' ? 13 : n.role === 'blanket' ? 7 : 5);

/** Shorten a segment so it starts/ends at the node circles instead of their centres. */
function trim(a: Node, b: Node) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  const ra = radius(a) + 3;
  const rb = radius(b) + 6;
  return {
    x1: a.x + (dx / len) * ra,
    y1: a.y + (dy / len) * ra,
    x2: b.x - (dx / len) * rb,
    y2: b.y - (dy / len) * rb,
  };
}

// Small seeded PRNG (mulberry32) so the heatmap looks identical on every load.
function prng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Heatmap cells are bucketed by colour/opacity and each bucket is drawn as ONE <path>,
// so ~300 cells cost ~6 DOM nodes instead of ~300 <rect>s. The radial fade is baked
// into the opacity here, which avoids an SVG <mask> (expensive per-pixel compositing).
const heatmap = (() => {
  const rand = prng(2813);
  const buckets = new Map<string, { fill: string; opacity: number; d: string }>();
  const cols = 18;
  for (let i = 0; i < cols * cols; i++) {
    const x = 12 + (i % cols) * 22.3;
    const y = 12 + Math.floor(i / cols) * 22.3;
    const v = rand();
    const dist = Math.hypot((x - 210) / 230, (y - 180) / 220);
    const fade = 1 - dist;
    if (fade <= 0.08) continue; // invisible anyway, don't emit it
    const level = Math.min(3, Math.floor(fade * 4)); // 4 opacity steps
    const [fill, base] = v > 0.86 ? ['var(--accent)', 0.6] : v < 0.07 ? ['var(--violet)', 0.5] : ['#2a3739', 0.75];
    const key = fill + level;
    const b = buckets.get(key) ?? { fill, opacity: base * ((level + 1) / 4), d: '' };
    b.d += `M${(x - 2).toFixed(1)} ${(y - 2).toFixed(1)}h4v4h-4z`;
    buckets.set(key, b);
  }
  return [...buckets.values()];
})();

/** Kaplan–Meier style step path from (time, survival) events. */
function steps(events: [number, number][], x0: number, y0: number, w: number, h: number) {
  let d = `M${x0},${y0}`;
  let prev = 1;
  for (const [t, s] of events) {
    const x = x0 + t * w;
    d += ` H${x} V${y0 + (1 - s) * h}`;
    prev = s;
  }
  return d + ` H${x0 + w} V${y0 + (1 - prev) * h}`;
}

const KM = { x: 30, y: 305, w: 350, h: 80 };
const curveA: [number, number][] = [[0.08, 0.95], [0.19, 0.9], [0.33, 0.84], [0.47, 0.8], [0.62, 0.74], [0.8, 0.7]];
const curveB: [number, number][] = [[0.06, 0.88], [0.15, 0.76], [0.27, 0.62], [0.4, 0.5], [0.55, 0.38], [0.74, 0.3]];
const censorA = [0.26, 0.55, 0.71, 0.9];
const censorB = [0.21, 0.48, 0.66, 0.88];

function survivalAt(events: [number, number][], t: number) {
  let s = 1;
  for (const [et, es] of events) if (et <= t) s = es;
  return s;
}

export function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 420 400" role="img" aria-label="Causal graph and survival curves illustration">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L9,5 L0,9 z" fill="var(--accent)" />
        </marker>
        <marker id="arrow-dim" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,1 L9,5 L0,9 z" fill="#3a4a4d" />
        </marker>
      </defs>

      {/* Expression heatmap */}
      {heatmap.map((b) => (
        <path key={b.fill + b.opacity} d={b.d} fill={b.fill} opacity={b.opacity} />
      ))}

      {/* Markov blanket boundary */}
      <ellipse className="mb-boundary" cx="232" cy="168" rx="150" ry="118" />
      <text className="art-label accent-label" x="300" y="300">
        markov blanket
      </text>

      {/* Edges */}
      {edges.map(([a, b], i) => {
        const from = byId[a];
        const to = byId[b];
        const inner = from.role !== 'outer' && to.role !== 'outer';
        return (
          <line
            key={a + b}
            {...trim(from, to)}
            className={inner ? 'edge' : 'edge dim'}
            markerEnd={inner ? 'url(#arrow)' : 'url(#arrow-dim)'}
            style={{ animationDelay: `${0.2 + i * 0.12}s` }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.id} className={`node ${n.role}`}>
          {n.role === 'target' && <circle className="pulse" cx={n.x} cy={n.y} r={radius(n)} />}
          <circle cx={n.x} cy={n.y} r={radius(n)} />
          <text
            className="art-label"
            x={n.role === 'target' ? n.x + radius(n) + 8 : n.x}
            y={n.role === 'target' ? n.y + 3 : n.y + radius(n) + 13}
            textAnchor={n.role === 'target' ? 'start' : 'middle'}
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* Kaplan–Meier panel */}
      <g className="km">
        <line className="axis" x1={KM.x} y1={KM.y - 4} x2={KM.x} y2={KM.y + KM.h} />
        <line className="axis" x1={KM.x} y1={KM.y + KM.h} x2={KM.x + KM.w} y2={KM.y + KM.h} />
        <text className="art-label" x={KM.x - 4} y={KM.y - 10}>
          S(t)
        </text>
        <path className="curve a" d={steps(curveA, KM.x, KM.y, KM.w, KM.h)} />
        <path className="curve b" d={steps(curveB, KM.x, KM.y, KM.w, KM.h)} />
        {censorA.map((t) => {
          const x = KM.x + t * KM.w;
          const y = KM.y + (1 - survivalAt(curveA, t)) * KM.h;
          return <line key={'a' + t} className="censor a" x1={x} y1={y - 4} x2={x} y2={y + 4} />;
        })}
        {censorB.map((t) => {
          const x = KM.x + t * KM.w;
          const y = KM.y + (1 - survivalAt(curveB, t)) * KM.h;
          return <line key={'b' + t} className="censor b" x1={x} y1={y - 4} x2={x} y2={y + 4} />;
        })}
      </g>
    </svg>
  );
}
