import Link from "next/link";
import { BookPage, ChapterOpening, DashList, PageTurn, RunningHead, SectionTitle } from "@/components/book/Book";
import { APPENDIX_SLUGS, projectBySlug } from "@/content/book";
import { projects, TAGS_HIDDEN_ON_CARDS, type Project } from "@/content/projects";
import { roman } from "@/components/ui/Ornaments";

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

const tagsOf = (p: Project) => p.tags.filter((t) => !TAGS_HIDDEN_ON_CARDS.includes(t));

export default function AppendixPage() {
  const experience = projects
    .filter((p) => p.experienceOnly)
    .sort((a, b) => EXPERIENCE_ORDER.indexOf(a.slug) - EXPERIENCE_ORDER.indexOf(b.slug));

  return (
    <BookPage>
      <RunningHead>Appendix</RunningHead>
      <ChapterOpening title="Appendix" subtitle="Earlier projects and internships." />

      <section className="mx-auto mt-14 max-w-[44rem]">
        <SectionTitle>Earlier projects</SectionTitle>
        <ol className="mt-6 flex flex-col">
          {APPENDIX_SLUGS.map((slug, i) => {
            const p = projectBySlug(slug)!;
            return (
              <li key={slug} className="border-b border-tooling/70 py-6 first:pt-0">
                <Link href={`/appendix/${slug}`} className="group grid gap-x-5 no-underline sm:grid-cols-[3rem_1fr]">
                  <span className="font-display text-[1.35rem] text-gilt">{roman(i + 1)}.</span>
                  <div>
                    <span className="font-display text-[1.6rem] font-medium leading-tight text-parchment decoration-gilt/60 underline-offset-4 group-hover:underline">
                      {p.title}
                    </span>
                    <p className="mt-2 italic text-lichen">{p.subtitle}</p>
                    {tagsOf(p).length > 0 && <p className="mt-2 text-[0.85rem] text-lichen/80">{tagsOf(p).join(", ")}</p>}
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mx-auto mt-16 max-w-[44rem]">
        <SectionTitle>Other work experience</SectionTitle>
        <div className="mt-6 flex flex-col border-t border-tooling">
          {experience.map((p) => {
            const header = EXPERIENCE_HEADERS[p.slug];
            return (
              <details key={p.slug} className="group border-b border-tooling">
                <summary className="flex items-baseline gap-4 py-5">
                  <span className="chevron inline-block w-3 shrink-0 text-gilt" aria-hidden>
                    ›
                  </span>
                  <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline">
                    <span className="font-display text-[1.45rem] font-medium leading-tight text-parchment group-hover:text-gilt">
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
                  <p className="italic text-lichen">{p.subtitle}</p>
                  {tagsOf(p).length > 0 && <p className="mt-2 text-[0.85rem] text-lichen/80">{tagsOf(p).join(", ")}</p>}
                  <div className="mt-5 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="font-display text-[1.2rem] italic text-parchment">Impact</p>
                      <DashList className="mt-2 text-[0.97rem]" items={p.highlights.impact} />
                    </div>
                    <div>
                      <p className="font-display text-[1.2rem] italic text-parchment">Technical</p>
                      <DashList className="mt-2 text-[0.97rem]" items={p.highlights.technical} />
                    </div>
                  </div>
                  {p.presentationPdfUrl && (
                    <a
                      href={p.presentationPdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-block text-gilt underline decoration-gilt/40 hover:decoration-gilt"
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

      <PageTurn href="/appendix" />
    </BookPage>
  );
}
