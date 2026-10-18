"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/content/projects";
import { CornerFlourish, Fern, roman } from "@/components/ui/Fern";

type Mode = "impact" | "technical";

const EXPLORING = [
  "System design fundamentals",
  "Data integrity & reconciliation pipelines",
  "Product engineering at scale",
  "AI-assisted workflows",
];

export default function HomePage() {
  const [mode, setMode] = useState<Mode>("impact");
  const featured = useMemo(() => projects.slice(0, 3), []);

  return (
    <main className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
      {/* Title page */}
      <header className="title-page-in pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="cover-frame relative px-6 py-12 sm:px-14 sm:py-16">
        <CornerFlourish className="pointer-events-none absolute left-3 top-3 h-11 w-11" />
        <CornerFlourish className="pointer-events-none absolute right-3 top-3 h-11 w-11 rotate-90" />
        <CornerFlourish className="pointer-events-none absolute bottom-3 right-3 h-11 w-11 rotate-180" />
        <CornerFlourish className="pointer-events-none absolute bottom-3 left-3 h-11 w-11 -rotate-90" />
        <Fern className="pointer-events-none absolute right-8 top-44 hidden h-[22rem] w-auto md:block lg:right-14" />

        <h1 className="font-display text-[clamp(3.25rem,9vw,6.25rem)] font-medium leading-[0.95] tracking-[-0.01em] gilt-stamp">
          Hello! I&apos;m Khushi.
        </h1>

        <div className="mt-8 h-px w-16 bg-gilt/70" aria-hidden />

        <p className="mt-8 max-w-[34rem] text-[1.3rem] leading-[1.6] text-parchment sm:text-[1.4rem]">
          I build software for the messy parts of running a business: reconciling data, fixing slow workflows, and
          figuring out what&apos;s worth building.
        </p>

        <p className="mt-5 text-[0.95rem] italic text-lichen">Systems • Workflows • Product Engineering</p>

        <div className="mt-6 text-[0.95rem] leading-relaxed text-lichen">
          <p>Computer Science — George Washington University</p>
          <p>Minor: Political Science</p>
        </div>

        <div className="mt-10 flex flex-wrap items-baseline gap-x-7 gap-y-3">
          <Link
            href="/projects"
            className="font-display text-[1.6rem] font-medium italic text-gilt underline decoration-gilt/40 hover:decoration-gilt"
          >
            View Projects
          </Link>
          <a href="/resume.pdf" className="text-parchment underline decoration-tooling hover:decoration-gilt">
            Resume
          </a>
          <a
            href="https://github.com/khuthakkar"
            target="_blank"
            rel="noreferrer"
            className="text-parchment underline decoration-tooling hover:decoration-gilt"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/khushi-thakkar-/"
            target="_blank"
            rel="noreferrer"
            className="text-parchment underline decoration-tooling hover:decoration-gilt"
          >
            LinkedIn
          </a>
          <a
            href="mailto:khushikthakkar@gmail.com"
            className="text-parchment underline decoration-tooling hover:decoration-gilt"
          >
            Email
          </a>
        </div>
        </div>
      </header>

      {/* Contents */}
      <section className="grid gap-8 border-t border-tooling pt-10 md:grid-cols-[12rem_1fr] md:gap-12">
        <div>
          <h2 className="font-display text-[2rem] font-medium italic leading-tight text-parchment">
            Some of my latest work
          </h2>
          <div className="mt-5 flex gap-5 text-[0.95rem]" role="group" aria-label="Show highlights by">
            <ModeButton active={mode === "impact"} onClick={() => setMode("impact")}>
              Impact
            </ModeButton>
            <ModeButton active={mode === "technical"} onClick={() => setMode("technical")}>
              Technical
            </ModeButton>
          </div>
        </div>

        <div>
          <ol className="flex flex-col">
            {featured.map((p, i) => (
              <li key={p.slug} className="border-b border-tooling/70 py-7 first:pt-0">
                <Link href={`/projects/${p.slug}`} className="group block no-underline">
                  <div className="flex items-baseline">
                    <span className="w-12 shrink-0 font-display text-[1.35rem] text-gilt">{roman(i + 1)}.</span>
                    <span className="font-display text-[1.75rem] font-medium leading-tight text-parchment decoration-gilt/60 underline-offset-4 group-hover:underline">
                      {p.title}
                    </span>
                    {p.roleAndDate && (
                      <>
                        <span className="leader hidden sm:block" aria-hidden />
                        <span className="hidden shrink-0 text-[0.9rem] text-lichen sm:block">{p.roleAndDate}</span>
                      </>
                    )}
                  </div>
                  <div className="pl-12">
                    {p.roleAndDate && <p className="mt-1 text-[0.9rem] text-lichen sm:hidden">{p.roleAndDate}</p>}
                    <p className="mt-2 max-w-[40rem] italic text-lichen">{p.subtitle}</p>
                    <ul className="mt-4 flex max-w-[40rem] flex-col gap-2">
                      {(mode === "impact" ? p.highlights.impact : p.highlights.technical).slice(0, 2).map((x) => (
                        <li key={x} className="flex gap-3 text-parchment/90">
                          <span className="text-gilt" aria-hidden>
                            –
                          </span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-6 pl-12 text-[0.9rem] italic text-lichen">Some work anonymized for confidentiality.</p>
        </div>
      </section>

      {/* Currently exploring */}
      <section className="mt-20 grid gap-6 border-t border-tooling pt-10 md:grid-cols-[12rem_1fr] md:gap-12">
        <h2 className="font-display text-[2rem] font-medium italic leading-tight text-parchment">
          Currently Exploring
        </h2>
        <ul className="flex flex-col gap-2 text-parchment/90">
          {EXPLORING.map((x) => (
            <li key={x} className="flex gap-3">
              <span className="text-gilt" aria-hidden>
                –
              </span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "text-parchment underline decoration-gilt decoration-2 underline-offset-[6px]"
          : "text-lichen hover:text-parchment"
      }
    >
      {children}
    </button>
  );
}
