"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects, TAGS_HIDDEN_ON_CARDS, type Project } from "@/content/projects";
import { roman } from "@/components/ui/Fern";

const EXPERIENCE_ORDER = [
  "gray-acumen-product-discovery",
  "accessibility-engineering-1-800-flowers",
  "salesforce-workflow-sarla-consulting",
  "gen-z-market-strategy-1-800-flowers",
];

const EXPERIENCE_HEADERS: Record<string, { title: string; roleLine: string }> = {
  "accessibility-engineering-1-800-flowers": {
    title: "1-800-FLOWERS",
    roleLine: "Software Engineering Intern · June 2023 – Sept 2023",
  },
  "salesforce-workflow-sarla-consulting": {
    title: "Sarla Consulting",
    roleLine: "Technology Intern · June 2022 – Sept 2022",
  },
  "gray-acumen-product-discovery": {
    title: "Gray Acumen",
    roleLine: "Business Analyst Intern · May 2024 – Sept 2024",
  },
  "gen-z-market-strategy-1-800-flowers": {
    title: "1st Place Competition at 1-800-FLOWERS",
    roleLine: "Gen Z Marketing · Aug 2023",
  },
};

function visibleTags(p: Project) {
  return p.tags.filter((t) => !TAGS_HIDDEN_ON_CARDS.includes(t));
}

export default function ProjectsPage() {
  const allTags = useMemo(() => {
    const hide = new Set(TAGS_HIDDEN_ON_CARDS);
    const s = new Set<string>();
    projects.forEach((p) =>
      p.tags.forEach((t) => {
        if (!hide.has(t)) s.add(t);
      })
    );
    return ["All", ...Array.from(s).sort()];
  }, []);

  const [tag, setTag] = useState("All");

  const linkProjects = useMemo(() => projects.filter((p) => !p.experienceOnly), []);
  const experienceOnlyProjects = useMemo(() => projects.filter((p) => p.experienceOnly), []);

  const filtered = useMemo(
    () => (tag === "All" ? linkProjects : linkProjects.filter((p) => p.tags.includes(tag))),
    [tag, linkProjects]
  );

  const sortedExperienceOnly = useMemo(() => {
    const list = tag === "All" ? experienceOnlyProjects : experienceOnlyProjects.filter((p) => p.tags.includes(tag));
    return [...list].sort((a, b) => {
      const i = EXPERIENCE_ORDER.indexOf(a.slug);
      const j = EXPERIENCE_ORDER.indexOf(b.slug);
      if (i === -1 && j === -1) return 0;
      if (i === -1) return 1;
      if (j === -1) return -1;
      return i - j;
    });
  }, [tag, experienceOnlyProjects]);

  return (
    <main className="mx-auto max-w-5xl px-5 pb-28 pt-12 sm:px-8 sm:pt-16">
      <Link href="/" className="text-[0.95rem] text-lichen no-underline hover:text-parchment">
        ← Back
      </Link>

      <header className="mt-10 max-w-[40rem]">
        <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-medium leading-[1.02] text-parchment">
          Projects & Work Experience
        </h1>
        <p className="mt-5 text-[1.15rem] text-lichen">
          A collection of real-world builds, from scrappy MVPs to production systems, grounded in product thinking and
          thoughtful execution.
        </p>
      </header>

      {/* Filter */}
      <div className="mt-12 border-y border-vine py-5" role="group" aria-label="Filter by topic">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[0.92rem]">
          {allTags.map((t) => (
            <li key={t}>
              <button
                type="button"
                onClick={() => setTag(t)}
                aria-pressed={tag === t}
                className={
                  tag === t
                    ? "text-foxglove underline decoration-foxglove underline-offset-[5px]"
                    : "text-lichen hover:text-parchment"
                }
              >
                {t === "Discovery" ? "Customer Discovery" : t}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects as chapters */}
      <ol className="mt-4 flex flex-col">
        {filtered.map((p) => {
          const chapter = linkProjects.indexOf(p) + 1;
          return (
            <li key={p.slug} className="border-b border-vine/70 py-8">
              <Link href={`/projects/${p.slug}`} className="group grid gap-x-6 no-underline sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-[1.5rem] leading-tight text-foxglove">{roman(chapter)}.</span>
                <div>
                  <div className="flex items-baseline">
                    <span className="font-display text-[2rem] font-medium leading-tight text-parchment decoration-foxglove/60 underline-offset-4 group-hover:underline">
                      {p.title}
                    </span>
                    {p.roleAndDate && (
                      <>
                        <span className="leader hidden md:block" aria-hidden />
                        <span className="hidden shrink-0 text-[0.9rem] text-lichen md:block">{p.roleAndDate}</span>
                      </>
                    )}
                  </div>
                  {p.roleAndDate && <p className="mt-1 text-[0.9rem] text-lichen md:hidden">{p.roleAndDate}</p>}
                  <p className="mt-2 max-w-[42rem] italic text-lichen">{p.subtitle}</p>
                  {visibleTags(p).length > 0 && (
                    <p className="mt-3 max-w-[42rem] text-[0.85rem] text-lichen/80">{visibleTags(p).join(", ")}</p>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="py-8 italic text-lichen">No projects under this topic. Choose another, or All.</li>
        )}
      </ol>

      {/* Other work experience */}
      {sortedExperienceOnly.length > 0 && (
        <section className="mt-20 grid gap-6 md:grid-cols-[12rem_1fr] md:gap-12">
          <h2 className="font-display text-[2rem] font-medium italic leading-tight text-parchment">
            Other work experience
          </h2>
          <div className="flex flex-col border-t border-vine">
            {sortedExperienceOnly.map((p) => {
              const header = EXPERIENCE_HEADERS[p.slug];
              return (
                <details key={p.slug} className="group border-b border-vine">
                  <summary className="flex items-baseline gap-4 py-5">
                    <span className="chevron inline-block w-3 shrink-0 text-foxglove" aria-hidden>
                      ›
                    </span>
                    <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline">
                      <span className="font-display text-[1.45rem] font-medium leading-tight text-parchment group-hover:text-foxglove">
                        {header ? header.title : p.title}
                      </span>
                      {header && (
                        <>
                          <span className="leader hidden sm:block" aria-hidden />
                          <span className="text-[0.9rem] text-lichen">{header.roleLine}</span>
                        </>
                      )}
                    </span>
                  </summary>

                  <div className="pb-7 pl-7">
                    <p className="max-w-[40rem] italic text-lichen">{p.subtitle}</p>
                    {visibleTags(p).length > 0 && (
                      <p className="mt-2 text-[0.85rem] text-lichen/80">{visibleTags(p).join(", ")}</p>
                    )}
                    <div className="mt-5 grid gap-6 sm:grid-cols-2">
                      <HighlightList title="Impact" items={p.highlights.impact} />
                      <HighlightList title="Technical" items={p.highlights.technical} />
                    </div>
                    {p.presentationPdfUrl && (
                      <a
                        href={p.presentationPdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-block text-foxglove underline decoration-foxglove/40 hover:decoration-foxglove"
                      >
                        View presentation (PDF)
                      </a>
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}

function HighlightList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="font-display text-[1.2rem] italic text-parchment">{title}</p>
      <ul className="mt-2 flex flex-col gap-2 text-[0.97rem] text-parchment/90">
        {items.map((x) => (
          <li key={x} className="flex gap-3">
            <span className="text-foxglove" aria-hidden>
              –
            </span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
