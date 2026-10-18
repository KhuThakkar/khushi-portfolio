/**
 * A single fern frond drawn as line art. Purely decorative.
 * The stem is a gentle curve; leaflets shrink toward the tip.
 */
export function Fern({ className = "" }: { className?: string }) {
  const pairs = 14;
  const leaves: string[] = [];

  // Point and tangent along a quadratic curve from base (60,400) to tip (150,20).
  const p0 = { x: 60, y: 400 };
  const p1 = { x: 40, y: 160 };
  const p2 = { x: 150, y: 20 };
  const at = (t: number) => ({
    x: (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x,
    y: (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y,
  });
  const tangent = (t: number) => {
    const dx = 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
    const dy = 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
    const len = Math.hypot(dx, dy);
    return { x: dx / len, y: dy / len };
  };

  for (let i = 0; i < pairs; i++) {
    const t = 0.08 + (i / pairs) * 0.86;
    const base = at(t);
    const dir = tangent(t);
    const len = 70 * (1 - t) + 10;
    for (const side of [-1, 1]) {
      // Normal to the stem, leaning slightly toward the tip.
      const nx = -dir.y * side + dir.x * 0.45;
      const ny = dir.x * side + dir.y * 0.45;
      const tip = { x: base.x + nx * len, y: base.y + ny * len };
      const bulge = len * 0.28;
      const c1 = { x: base.x + nx * len * 0.5 + dir.x * bulge, y: base.y + ny * len * 0.5 + dir.y * bulge };
      const c2 = { x: base.x + nx * len * 0.5 - dir.x * bulge * 0.4, y: base.y + ny * len * 0.5 - dir.y * bulge * 0.4 };
      leaves.push(
        `M${base.x.toFixed(1)} ${base.y.toFixed(1)}Q${c1.x.toFixed(1)} ${c1.y.toFixed(1)} ${tip.x.toFixed(1)} ${tip.y.toFixed(1)}Q${c2.x.toFixed(1)} ${c2.y.toFixed(1)} ${base.x.toFixed(1)} ${base.y.toFixed(1)}`
      );
    }
  }

  return (
    <svg viewBox="0 0 260 420" className={className} aria-hidden="true" fill="none">
      <path
        d={`M${p0.x} ${p0.y}Q${p1.x} ${p1.y} ${p2.x} ${p2.y}`}
        stroke="var(--color-gilt)"
        strokeOpacity="0.85"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {leaves.map((d, i) => (
        <path key={i} d={d} fill="var(--color-gilt)" fillOpacity="0.55" stroke="var(--color-gilt)" strokeOpacity="0.8" strokeWidth="0.75" />
      ))}
    </svg>
  );
}

/**
 * A small tooled corner flourish, like the stamped corners on a book cover.
 * Drawn for the top-left corner; rotate it for the others.
 */
export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M4 44V12a8 8 0 0 1 8-8h32" stroke="var(--color-gilt)" strokeOpacity="0.7" strokeWidth="1" />
      <path d="M10 30c0-11 9-20 20-20" stroke="var(--color-gilt)" strokeOpacity="0.55" strokeWidth="1" />
      <path
        d="M14 14c5-1 9 1 10 6-5 1-9-1-10-6Z"
        fill="var(--color-gilt)"
        fillOpacity="0.6"
        stroke="var(--color-gilt)"
        strokeOpacity="0.8"
        strokeWidth="0.6"
      />
      <circle cx="9" cy="9" r="1.6" fill="var(--color-gilt)" fillOpacity="0.8" />
    </svg>
  );
}

const NUMERALS: [number, string][] = [
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

/** Roman numeral for chapter numbers (1 → I). Good up to 39. */
export function roman(n: number) {
  let out = "";
  for (const [value, letters] of NUMERALS) {
    while (n >= value) {
      out += letters;
      n -= value;
    }
  }
  return out;
}
