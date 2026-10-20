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
