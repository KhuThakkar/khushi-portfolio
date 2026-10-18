/**
 * Gold-stamped vines for the corners of the cover frame, in the style of
 * Victorian cloth bindings. Drawn for the top-left corner; mirror it with
 * CSS (scale-x-[-1], scale-y-[-1]) for the other corners.
 */

type Pt = { x: number; y: number };

const W = 300;
const H = 220;

// Point on a wavy branch from `a` to `b`, with a gentle sideways wave.
function branchPoint(a: Pt, b: Pt, t: number, wave: number): Pt {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  const nx = -dy / len;
  const ny = dx / len;
  const off = Math.sin(t * Math.PI * 2.5) * wave * (1 - t * 0.4);
  return { x: a.x + dx * t + nx * off, y: a.y + dy * t + ny * off };
}

function branchPath(a: Pt, b: Pt, wave: number) {
  const pts: string[] = [];
  for (let i = 0; i <= 40; i++) {
    const p = branchPoint(a, b, i / 40, wave);
    pts.push(`${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`);
  }
  return pts.join("");
}

// A pointed leaf from `base`, pointing in direction `angle` (radians).
function leafPath(base: Pt, angle: number, size: number) {
  const tip = { x: base.x + Math.cos(angle) * size, y: base.y + Math.sin(angle) * size };
  const w = size * 0.5;
  const mx = (base.x + tip.x) / 2;
  const my = (base.y + tip.y) / 2;
  const px = -Math.sin(angle) * w;
  const py = Math.cos(angle) * w;
  const f = (n: number) => n.toFixed(1);
  return `M${f(base.x)} ${f(base.y)}Q${f(mx + px)} ${f(my + py)} ${f(tip.x)} ${f(tip.y)}Q${f(mx - px)} ${f(my - py)} ${f(base.x)} ${f(base.y)}Z`;
}

function leavesAlong(a: Pt, b: Pt, wave: number, count: number, maxSize: number) {
  const out: { leaf: string; vein: string }[] = [];
  const dirAngle = Math.atan2(b.y - a.y, b.x - a.x);
  for (let i = 0; i < count; i++) {
    const t = 0.1 + (i / count) * 0.82;
    const base = branchPoint(a, b, t, wave);
    const side = i % 2 === 0 ? 1 : -1;
    const angle = dirAngle + side * 0.95;
    const size = maxSize * (1 - t * 0.55);
    const tipX = base.x + Math.cos(angle) * size * 0.75;
    const tipY = base.y + Math.sin(angle) * size * 0.75;
    const small = branchPoint(a, b, t + 0.035, wave);
    out.push({
      leaf: leafPath(base, angle, size) + leafPath(small, dirAngle - side * 0.7, size * 0.45),
      vein: `M${base.x.toFixed(1)} ${base.y.toFixed(1)}L${tipX.toFixed(1)} ${tipY.toFixed(1)}`,
    });
  }
  return out;
}

const ORIGIN = { x: 20, y: 20 };
const ALONG_TOP = { x: W - 6, y: 14 };
const DOWN_SIDE = { x: 14, y: H - 6 };

const TOP_LEAVES = leavesAlong(ORIGIN, ALONG_TOP, 6, 15, 25);
const SIDE_LEAVES = leavesAlong(ORIGIN, DOWN_SIDE, 6, 10, 23);

// Five petals around the corner, like a stamped rosette.
const PETALS = Array.from({ length: 5 }, (_, i) => leafPath(ORIGIN, (i / 5) * Math.PI * 2 + 0.3, 13));

// Small berry clusters partway along each branch.
const BERRIES: Pt[] = [
  branchPoint(ORIGIN, ALONG_TOP, 0.3, 6),
  branchPoint(ORIGIN, ALONG_TOP, 0.68, 6),
  branchPoint(ORIGIN, DOWN_SIDE, 0.45, 6),
];

// Curling tendrils, like a vine reaching out.
function tendril(at: Pt, dir: number) {
  const f = (n: number) => n.toFixed(1);
  const r = 7;
  return `M${f(at.x)} ${f(at.y)}c${f(6 * dir)} -10 ${f(18 * dir)} -10 ${f(16 * dir)} -1s${f(-9 * dir)} 7 ${f(-8 * dir)} -1c${f(1 * dir)} -${r / 2} ${f(5 * dir)} -3 ${f(5 * dir)} 0`;
}
const TENDRILS = [
  tendril(branchPoint(ORIGIN, ALONG_TOP, 0.52, 6), 1),
  tendril(branchPoint(ORIGIN, ALONG_TOP, 0.9, 6), 1),
];

export function CornerVine({ className = "" }: { className?: string }) {
  const gold = "var(--color-gilt)";
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} aria-hidden="true" fill="none">
      <path d={branchPath(ORIGIN, ALONG_TOP, 5)} stroke={gold} strokeOpacity="0.75" strokeWidth="1.3" strokeLinecap="round" />
      <path d={branchPath(ORIGIN, DOWN_SIDE, 5)} stroke={gold} strokeOpacity="0.75" strokeWidth="1.3" strokeLinecap="round" />
      {[...TOP_LEAVES, ...SIDE_LEAVES].map(({ leaf, vein }, i) => (
        <g key={i}>
          <path d={leaf} fill={gold} fillOpacity="0.6" stroke={gold} strokeOpacity="0.85" strokeWidth="0.6" />
          <path d={vein} stroke="var(--color-cloth)" strokeOpacity="0.55" strokeWidth="0.6" />
        </g>
      ))}
      {TENDRILS.map((d, i) => (
        <path key={i} d={d} stroke={gold} strokeOpacity="0.7" strokeWidth="0.9" strokeLinecap="round" />
      ))}
      {BERRIES.map((b, i) => (
        <g key={i} fill={gold} fillOpacity="0.8">
          <circle cx={b.x + 4} cy={b.y + 6} r="2.2" />
          <circle cx={b.x + 8} cy={b.y + 3} r="1.9" />
          <circle cx={b.x + 6} cy={b.y + 9.5} r="1.7" />
        </g>
      ))}
      {PETALS.map((d, i) => (
        <path key={i} d={d} fill={gold} fillOpacity="0.7" stroke={gold} strokeOpacity="0.9" strokeWidth="0.5" />
      ))}
      <circle cx={ORIGIN.x} cy={ORIGIN.y} r="2.6" fill="var(--color-cloth)" stroke={gold} strokeWidth="1" />
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
