import { TAGS_HIDDEN_ON_CARDS, type Project } from "@/content/projects";
import { MediaAndArchitectureCard } from "@/components/projects/MediaAndArchitectureCard";
import { ChapterOpening, DashList, Paper, SectionTitle } from "@/components/book/Book";

/** A project told as a chapter: opening and body each on their own paper page. */
export function ProjectArticle({ p, label }: { p: Project; label: string }) {
  const tags = p.tags.filter((t) => !TAGS_HIDDEN_ON_CARDS.includes(t));
  const hasMediaOrTable = p.videoUrl || p.pitchDeckUrl || p.executiveSummaryUrl || p.architectureTable;

  return (
    <article className="flex flex-col gap-8">
      <Paper>
        <ChapterOpening label={label} title={p.title} subtitle={p.subtitle}>
          {p.roleAndDate && <p className="mt-4 text-[0.95rem] text-lichen">{p.roleAndDate}</p>}
          {tags.length > 0 && <p className="mt-3 text-[0.85rem] text-lichen/80">{tags.join(", ")}</p>}
        </ChapterOpening>
      </Paper>

      {hasMediaOrTable && (
        <Paper>
          <div className="mx-auto max-w-[42rem]">
            <MediaAndArchitectureCard
              videoUrl={p.videoUrl}
              pitchDeckUrl={p.pitchDeckUrl}
              executiveSummaryUrl={p.executiveSummaryUrl}
              architectureTable={p.architectureTable}
            />
          </div>
        </Paper>
      )}

      {p.contentSections?.map((section, i) => (
        <Paper key={i}>
          <section className="mx-auto max-w-[42rem]">
            <SectionTitle>{section.heading}</SectionTitle>
            <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.75] text-parchment/90">
              {section.body.split(/\n\n+/).map((block, j) => {
                const lines = block.split("\n").filter(Boolean);
                const bullets = lines.filter((l) => l.trim().startsWith("•"));
                if (bullets.length === lines.length && bullets.length > 0) {
                  return <DashList key={j} items={bullets.map((l) => l.replace(/^•\s*/, "").trim())} />;
                }
                return (
                  <p key={j} className="whitespace-pre-line">
                    {block}
                  </p>
                );
              })}
            </div>
          </section>
        </Paper>
      ))}

      {p.confidentialityNote && (
        <Paper>
          <p className="mx-auto max-w-[42rem] border-l-2 border-gilt/60 pl-4 text-[0.95rem] italic text-lichen">
            <span className="not-italic text-parchment">Confidentiality:</span> {p.confidentialityNote}
          </p>
        </Paper>
      )}
    </article>
  );
}
