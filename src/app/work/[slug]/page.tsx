import { notFound } from "next/navigation";
import { BookPage, ChapterOpening, PageTurn, Paper, Placeholder, RunningHead, SectionTitle } from "@/components/book/Book";
import { ProjectArticle } from "@/components/book/ProjectArticle";
import { AAJERA_SLUG, WORK_SLUGS, projectBySlug, shortTitle } from "@/content/book";
import { roman } from "@/components/ui/Ornaments";

export function generateStaticParams() {
  return WORK_SLUGS.map((slug) => ({ slug }));
}

export default async function WorkChapter({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = WORK_SLUGS.indexOf(slug);
  if (index === -1) notFound();
  const label = `Chapter II.${roman(index + 1).toLowerCase()}`;

  return (
    <BookPage>
      <RunningHead>Chapter II · Work · {shortTitle(slug)}</RunningHead>
      {slug === AAJERA_SLUG ? <AajeraChapter label={label} /> : <ProjectArticle p={projectBySlug(slug)!} label={label} />}
      <PageTurn href={`/work/${slug}`} />
    </BookPage>
  );
}

function AajeraChapter({ label }: { label: string }) {
  const sections = [
    {
      heading: "The problem",
      hint: "the gap you noticed: existing calendars help you plan time but not reflect on it. Who feels this most and why. 3 to 5 sentences.",
    },
    {
      heading: "What I built",
      hint: "a short tour: core calendar + tasks, the monthly and daily reflection prompts, natural-language quick add. Two or three screenshots.",
    },
    {
      heading: "Decisions I made",
      hint: "the product choices and the reasoning. Lead with the AI governance call: AI actions require preview and confirmation before writing user data. Then: optional daily reflection, separate daily/weekly/monthly views, Google Calendar as an optional integration.",
    },
    {
      heading: "What I measured",
      hint: "once Sprint 2 runs: your North Star (Weekly Active Planner), the activation funnel, D7 retention, Quick Add adoption. Call out the one metric that moved most.",
    },
    {
      heading: "How the AI performs",
      hint: "once Sprint 3 runs: eval framework over ~150 natural-language scenarios, intent/date/time accuracy, cost per request, before/after a prompt or model change.",
    },
    {
      heading: "What I learned",
      hint: "two or three sentences. What surprised you, what you would do differently, what the next version becomes.",
    },
  ];
  return (
    <article className="flex flex-col gap-8">
      <Paper>
        <ChapterOpening
          label={label}
          title="Aajera"
          subtitle="A calendar and task planner with natural-language quick add and reflection prompts."
        />
      </Paper>
      {sections.map((s) => (
        <Paper key={s.heading}>
          <section className="mx-auto max-w-[42rem]">
            <SectionTitle>{s.heading}</SectionTitle>
            <Placeholder className="mt-4">{s.hint}</Placeholder>
          </section>
        </Paper>
      ))}
    </article>
  );
}
