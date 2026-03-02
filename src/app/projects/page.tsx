"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { projects, TAGS_HIDDEN_ON_CARDS } from "@/content/projects";

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
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [revealedWork, setRevealedWork] = useState<Record<string, boolean>>({});
  const reveal = (slug: string) => setRevealed((r) => ({ ...r, [slug]: true }));
  const revealWork = (slug: string) => setRevealedWork((r) => ({ ...r, [slug]: true }));

  const linkProjects = useMemo(() => projects.filter((p) => !p.experienceOnly), []);
  const experienceOnlyProjects = useMemo(() => projects.filter((p) => p.experienceOnly), []);

  const filtered = useMemo(() => {
    if (tag === "All") return linkProjects;
    return linkProjects.filter((p) => p.tags.includes(tag));
  }, [tag, linkProjects]);

  const filteredExperienceOnly = useMemo(() => {
    if (tag === "All") return experienceOnlyProjects;
    return experienceOnlyProjects.filter((p) => p.tags.includes(tag));
  }, [tag, experienceOnlyProjects]);

  const EXPERIENCE_ORDER = [
    "gray-acumen-product-discovery",
    "accessibility-engineering-1-800-flowers",
    "salesforce-workflow-sarla-consulting",
    "gen-z-market-strategy-1-800-flowers",
  ];
  const sortedExperienceOnly = useMemo(() => {
    return [...filteredExperienceOnly].sort((a, b) => {
      const i = EXPERIENCE_ORDER.indexOf(a.slug);
      const j = EXPERIENCE_ORDER.indexOf(b.slug);
      if (i === -1 && j === -1) return 0;
      if (i === -1) return 1;
      if (j === -1) return -1;
      return i - j;
    });
  }, [filteredExperienceOnly]);

  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-10">
      <div className="flex flex-col gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors w-fit"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white">Projects & Work Experience</h2>
          <p className="mt-2 text-white/75">
            A collection of real-world builds, from scrappy MVPs to production systems, grounded in product thinking and thoughtful execution.
          </p>
        </div>

        {/* Filter strip — no card wrapper, so buttons don't clash with a container */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={[
                "rounded-full px-3 py-2 text-sm border transition",
                tag === t
                  ? "border-[rgba(var(--accent),0.45)] bg-[rgba(var(--accent),0.16)] text-white"
                  : "border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.06]",
              ].join(" ")}
            >
              {t === "Discovery" ? "Customer Discovery" : t}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((p) =>
            p.experienceOnly ? (
              <div
                key={p.slug}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-lg font-medium leading-snug text-white/95">{p.title}</p>
                <p className="mt-2 text-sm text-white/75">{p.subtitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/80">
                  <div>
                    <p className="mb-1.5 font-medium text-white/90">Impact</p>
                    <ul className="space-y-1">
                      {p.highlights.impact.map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(var(--accent),0.65)]" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-1.5 font-medium text-white/90">Technical</p>
                    <ul className="space-y-1">
                      {p.highlights.technical.map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(var(--accent),0.65)]" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                onMouseEnter={() => reveal(p.slug)}
                onFocus={() => reveal(p.slug)}
                className={`group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.06] overflow-hidden ${!revealed[p.slug] ? "h-[220px] sm:h-[240px]" : "p-5"}`}
              >
                {!revealed[p.slug] ? (
                  <div className="relative h-full w-full">
                    {p.cardImageUrl ? (
                      <img
                        src={p.cardImageUrl}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        style={p.cardImageObjectPosition ? { objectPosition: p.cardImageObjectPosition } : undefined}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center p-4">
                        <p className="text-center text-lg font-semibold text-white/90">
                          {p.title}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-medium leading-snug text-white/95">{p.title}</p>
                        {p.roleAndDate && (
                          <p className="mt-1 text-sm text-white/60">{p.roleAndDate}</p>
                        )}
                        <p className="mt-2 text-sm text-white/75">{p.subtitle}</p>
                      </div>
                      <span className="text-white/40 shrink-0 text-xs">Click me ↗</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.filter((t) => !TAGS_HIDDEN_ON_CARDS.includes(t)).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </>
                )}
              </Link>
            )
          )}
        </div>

        {/* Other work experience — left-aligned heading with line */}
        <section className="flex flex-col gap-5 pt-4">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xs sm:text-sm font-medium tracking-[0.2em] text-white/55 uppercase whitespace-nowrap">
              Other work experience
            </h2>
            <span className="h-px flex-1 bg-white/20" aria-hidden />
          </div>

          <div className="flex flex-col gap-4">
            {sortedExperienceOnly.map((p) => {
              const is1800Accessibility = p.slug === "accessibility-engineering-1-800-flowers";
              const isSarla = p.slug === "salesforce-workflow-sarla-consulting";
              const isGrayAcumen = p.slug === "gray-acumen-product-discovery";
              const isGenZ = p.slug === "gen-z-market-strategy-1-800-flowers";
              const isRevealed = revealedWork[p.slug];

              if (is1800Accessibility && !isRevealed) {
                return (
                  <div
                    key={p.slug}
                    onMouseEnter={() => revealWork(p.slug)}
                    onFocus={() => revealWork(p.slug)}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 cursor-default"
                    tabIndex={0}
                  >
                    <p className="text-lg font-medium leading-snug text-white/95">1-800-FLOWERS</p>
                    <p className="mt-1 text-sm text-white/60">
                      Information Technology Intern · June 2023 – Sept 2023
                    </p>
                  </div>
                );
              }

              if (isSarla && !isRevealed) {
                return (
                  <div
                    key={p.slug}
                    onMouseEnter={() => revealWork(p.slug)}
                    onFocus={() => revealWork(p.slug)}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 cursor-default"
                    tabIndex={0}
                  >
                    <p className="text-lg font-medium leading-snug text-white/95">Sarla Consulting</p>
                    <p className="mt-1 text-sm text-white/60">
                      Information Technology Intern · June 2022 – Sept 2022
                    </p>
                  </div>
                );
              }

              if (isGrayAcumen && !isRevealed) {
                return (
                  <div
                    key={p.slug}
                    onMouseEnter={() => revealWork(p.slug)}
                    onFocus={() => revealWork(p.slug)}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 cursor-default"
                    tabIndex={0}
                  >
                    <p className="text-lg font-medium leading-snug text-white/95">Gray Acumen</p>
                    <p className="mt-1 text-sm text-white/60">
                      Business Analyst Intern · May 2024 – Sept 2024
                    </p>
                  </div>
                );
              }

              if (isGenZ && !isRevealed) {
                return (
                  <div
                    key={p.slug}
                    onMouseEnter={() => revealWork(p.slug)}
                    onFocus={() => revealWork(p.slug)}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 cursor-default"
                    tabIndex={0}
                  >
                    <p className="text-lg font-medium leading-snug text-white/95">1st Place Competition at 1-800-FLOWERS</p>
                    <p className="mt-1 text-sm text-white/60">Gen Z Marketing · Aug 2023</p>
                  </div>
                );
              }

              const customHeader =
                is1800Accessibility
                  ? { title: "1-800-FLOWERS", roleLine: "Information Technology Intern · June 2023 – Sept 2023" }
                  : isSarla
                    ? { title: "Sarla Consulting", roleLine: "Information Technology Intern · June 2022 – Sept 2022" }
                    : isGrayAcumen
                      ? { title: "Gray Acumen", roleLine: "Business Analyst Intern · May 2024 – Sept 2024" }
                      : isGenZ
                        ? { title: "1st Place Competition at 1-800-FLOWERS", roleLine: "Gen Z Marketing · Aug 2023" }
                        : null;

              return (
                <div
                  key={p.slug}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  {customHeader ? (
                    <>
                      <p className="text-lg font-medium leading-snug text-white/95">{customHeader.title}</p>
                      <p className="mt-1 text-sm text-white/60">{customHeader.roleLine}</p>
                      <p className="mt-2 text-sm text-white/75">{p.subtitle}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-lg font-medium leading-snug text-white/95">{p.title}</p>
                      <p className="mt-2 text-sm text-white/75">{p.subtitle}</p>
                    </>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.filter((t) => !TAGS_HIDDEN_ON_CARDS.includes(t)).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <div>
                      <p className="mb-1.5 font-medium text-white/90">Impact</p>
                      <ul className="space-y-1">
                        {p.highlights.impact.map((x) => (
                          <li key={x} className="flex gap-2">
                            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(var(--accent),0.65)]" />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1.5 font-medium text-white/90">Technical</p>
                      <ul className="space-y-1">
                        {p.highlights.technical.map((x) => (
                          <li key={x} className="flex gap-2">
                            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(var(--accent),0.65)]" />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {"presentationPdfUrl" in p && p.presentationPdfUrl && (
                      <a
                        href={p.presentationPdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/90 hover:text-white transition-colors"
                      >
                        View presentation (PDF) ↗
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

