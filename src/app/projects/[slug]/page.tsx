import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { projects, TAGS_HIDDEN_ON_CARDS } from "@/content/projects";
import { MediaAndArchitectureCard } from "@/components/projects/MediaAndArchitectureCard";
import { roman } from "@/components/ui/Fern";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();
  if (p.experienceOnly) redirect("/projects");

  const chapter = projects.filter((x) => !x.experienceOnly).indexOf(p) + 1;
  const tags = p.tags.filter((t) => !TAGS_HIDDEN_ON_CARDS.includes(t));
  const hasMediaOrTable = p.videoUrl || p.pitchDeckUrl || p.executiveSummaryUrl || p.architectureTable;

  return (
    <main className="mx-auto max-w-5xl px-5 pb-28 pt-12 sm:px-8 sm:pt-16">
      <Link href="/projects" className="text-[0.95rem] text-lichen no-underline hover:text-parchment">
        ← Back
      </Link>

      <article className="mx-auto mt-12 max-w-[42rem]">
        <header className="text-center">
          <p className="font-display text-[1.5rem] text-foxglove">Chapter {roman(chapter)}</p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,3.75rem)] font-medium leading-[1.05] text-parchment">
            {p.title}
          </h1>
          {p.roleAndDate && <p className="mt-4 text-[0.95rem] text-lichen">{p.roleAndDate}</p>}
          <p className="mt-4 text-[1.2rem] italic leading-relaxed text-lichen">{p.subtitle}</p>
          {tags.length > 0 && <p className="mt-4 text-[0.85rem] text-lichen/80">{tags.join(", ")}</p>}
          <div className="mx-auto mt-10 h-px w-16 bg-foxglove/70" aria-hidden />
        </header>

        {hasMediaOrTable && (
          <div className="mt-12">
            <MediaAndArchitectureCard
              videoUrl={p.videoUrl}
              pitchDeckUrl={p.pitchDeckUrl}
              executiveSummaryUrl={p.executiveSummaryUrl}
              architectureTable={p.architectureTable}
            />
          </div>
        )}

        {p.contentSections && p.contentSections.length > 0 && (
          <div className="mt-12 flex flex-col gap-12">
            {p.contentSections.map((section, i) => (
              <section key={i}>
                <h2 className="font-display text-[1.8rem] font-medium italic leading-tight text-parchment">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.75] text-parchment/90">
                  {section.body.split(/\n\n+/).map((block, j) => {
                    const lines = block.split("\n").filter(Boolean);
                    const bulletLines = lines.filter((l) => l.trim().startsWith("•"));
                    if (bulletLines.length === lines.length && bulletLines.length > 0) {
                      return (
                        <ul key={j} className="flex flex-col gap-2">
                          {bulletLines.map((line, k) => (
                            <li key={k} className="flex gap-3">
                              <span className="text-foxglove" aria-hidden>
                                –
                              </span>
                              <span>{line.replace(/^•\s*/, "").trim()}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={j} className="whitespace-pre-line">
                        {block}
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        {p.confidentialityNote && (
          <p className="mt-14 border-l-2 border-foxglove/60 pl-4 text-[0.95rem] italic text-lichen">
            <span className="not-italic text-parchment">Confidentiality:</span> {p.confidentialityNote}
          </p>
        )}
      </article>
    </main>
  );
}
