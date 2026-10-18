import { notFound } from "next/navigation";
import { BookPage, ChapterOpening, PageTurn, Placeholder, RunningHead, SectionTitle } from "@/components/book/Book";
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
  return (
    <article>
      <ChapterOpening
        label={label}
        title="Aajera"
        subtitle="A calendar and task planner that prompts you to reflect on your day and month."
      />
      <div className="mx-auto flex max-w-[42rem] flex-col gap-12">
        <section>
          <SectionTitle>In brief</SectionTitle>
          <Placeholder className="mt-4">
            three lines: the problem, what you built, and the result (for example, 30 beta users).
          </Placeholder>
        </section>
        <section>
          <SectionTitle>Why I built it</SectionTitle>
          <Placeholder className="mt-4">
            you never found a calendar you liked, so you built your own; then friends asked to use it. About 100 words.
          </Placeholder>
        </section>
        <section>
          <SectionTitle>What it looks like</SectionTitle>
          <Placeholder className="mt-4">two or three screenshots: the calendar, the monthly reflection prompt, the daily view.</Placeholder>
        </section>
        <section>
          <SectionTitle>Decisions I made</SectionTitle>
          <Placeholder className="mt-4">
            two or three product choices and why, such as making daily reflection optional, or keeping daily, weekly, and
            monthly views separate.
          </Placeholder>
        </section>
      </div>
    </article>
  );
}
