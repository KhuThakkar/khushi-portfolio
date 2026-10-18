import Link from "next/link";
import { neighbors } from "@/content/book";

/** Small line at the top of a page saying where you are; links back to the contents. */
export function RunningHead({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/#contents"
      className="inline-block text-[0.9rem] italic text-lichen no-underline hover:text-parchment"
      title="Back to contents"
    >
      {children}
    </Link>
  );
}

/** Centered chapter opening: numeral, title, optional subtitle, and a short gold rule. */
export function ChapterOpening({
  label,
  title,
  subtitle,
  children,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="mx-auto mt-14 max-w-[42rem] text-center">
      {label && <p className="font-display text-[1.5rem] text-gilt">{label}</p>}
      <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,3.75rem)] font-medium leading-[1.05] text-parchment">
        {title}
      </h1>
      {subtitle && <p className="mt-4 text-[1.2rem] italic leading-relaxed text-lichen">{subtitle}</p>}
      {children}
      <div className="mx-auto mt-10 h-px w-16 bg-gilt/70" aria-hidden />
    </header>
  );
}

/** Previous / next links at the foot of every page, like turning a page. */
export function PageTurn({ href }: { href: string }) {
  const { prev, next } = neighbors(href);
  return (
    <nav aria-label="Turn the page" className="mt-24 flex items-baseline justify-between gap-6 border-t border-tooling pt-6">
      {prev ? (
        <Link href={prev.href} className="group no-underline">
          <span className="block text-[0.85rem] text-lichen">Previous</span>
          <span className="font-display text-[1.4rem] text-parchment group-hover:text-gilt">← {prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={next.href} className="group text-right no-underline">
          <span className="block text-[0.85rem] text-lichen">Next</span>
          <span className="font-display text-[1.4rem] text-parchment group-hover:text-gilt">{next.label} →</span>
        </Link>
      )}
    </nav>
  );
}

/** A clearly marked spot for writing that hasn't been done yet. */
export function Placeholder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-dashed border-gilt/50 px-5 py-4 text-[0.97rem] italic text-lichen ${className}`}>
      <span className="not-italic text-gilt">To write: </span>
      {children}
    </div>
  );
}

/** Section heading inside a chapter. */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-[1.9rem] font-medium italic leading-tight text-parchment">{children}</h2>;
}

/** Gold dash list used for highlights. */
export function DashList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      {items.map((x) => (
        <li key={x} className="flex gap-3 text-parchment/90">
          <span className="text-gilt" aria-hidden>
            –
          </span>
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

/** Standard page wrapper so every chapter has the same margins. */
export function BookPage({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto max-w-5xl px-5 pb-20 pt-10 sm:px-8 sm:pt-12">{children}</main>;
}

/** A cream paper page laid on the cloth, for reading-heavy chapters. */
export function Paper({ children }: { children: React.ReactNode }) {
  return <div className="paper px-6 py-12 sm:px-16 sm:py-14">{children}</div>;
}
