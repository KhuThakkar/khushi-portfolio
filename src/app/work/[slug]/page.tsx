import { notFound } from "next/navigation";
import { BookPage, ChapterOpening, PageTurn, Paper, RunningHead, SectionTitle } from "@/components/book/Book";
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

const DECISIONS: { title: string; body: string }[] = [
  {
    title: "Let the AI say “I’m not sure.”",
    body:
      "Quick Add can create a task, create an event, ask for clarification, or reject an unsupported request instead of guessing.",
  },
  {
    title: "Constrain what the AI can do.",
    body:
      "Rather than letting the model generate arbitrary actions, I gave it a defined schema of intents and fields that Aajera knows how to handle.",
  },
  {
    title: "Start narrow before adding more automation.",
    body:
      "I kept V1 focused on creating tasks and events, leaving things like reminders and more complex calendar actions out until the core experience was reliable.",
  },
];

function AajeraChapter({ label }: { label: string }) {
  return (
    <article className="flex flex-col gap-8">
      <Paper>
        <ChapterOpening
          label={label}
          title="Aajera"
          subtitle="A calendar and task planner with natural-language quick add and reflection prompts."
        />
      </Paper>

      <Paper>
        <section className="mx-auto max-w-[42rem]">
          <SectionTitle>The problem</SectionTitle>
          <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.75] text-parchment/90">
            <p>I wanted a calendar I actually enjoyed using.</p>
            <p>
              I liked the feel of my physical planner, especially the mix of scheduling, to-dos, and little journal
              prompts, but my digital calendars felt purely functional. They were good at telling me where I had to be,
              but not especially pleasant to use, and they did not have the reflective elements I liked on paper.
            </p>
            <p>
              Aajera started as my attempt to bring those things together: a clean digital planner with a UI I wanted
              to open, lightweight journal prompts, tasks and events in one place, and the ability to connect with the
              calendars I already used.
            </p>
          </div>
        </section>
      </Paper>

      <Paper>
        <section className="mx-auto max-w-[42rem]">
          <SectionTitle>What I built</SectionTitle>
          <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.75] text-parchment/90">
            <p>
              Aajera is a digital planner that brings calendars, tasks, reflection prompts, and natural-language input
              into one place.
            </p>
            <p>
              Instead of filling out forms, users can type things like &ldquo;coffee with Maya Friday at 2&rdquo; or
              &ldquo;submit application tomorrow,&rdquo; and Aajera turns that into a structured event or task.
            </p>
            <p>
              Daily, weekly, and monthly views make it easy to plan at different levels, while lightweight reflection
              prompts bring some of the intention-setting and journaling I liked from physical planners into the
              digital experience.
            </p>
          </div>
        </section>
      </Paper>

      <Paper>
        <section className="mx-auto max-w-[42rem]">
          <SectionTitle>Decisions I made</SectionTitle>
          <dl className="mt-6 flex flex-col gap-6">
            {DECISIONS.map(({ title, body }) => (
              <div key={title}>
                <dt className="font-display text-[1.3rem] italic text-parchment">{title}</dt>
                <dd className="mt-2 text-[1.0625rem] leading-[1.75] text-parchment/90">{body}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Paper>

      <Paper>
        <section className="mx-auto max-w-[42rem]">
          <SectionTitle>What I measured</SectionTitle>
          <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.75] text-parchment/90">
            <p>
              With a small group of early beta users, I use Supabase and Vercel to track early usage, including
              sign-ups, active users, and how people move through the product.
            </p>
            <p>
              I defined <strong>Weekly Active Planner</strong> as the North Star metric: whether users come back and
              actively plan, not just open the app. I&apos;m also tracking activation, D7 retention, and Quick Add
              adoption to understand where the core experience is sticking and where it is not.
            </p>
          </div>
        </section>
      </Paper>

      <Paper>
        <section className="mx-auto max-w-[42rem]">
          <SectionTitle>How the AI performs</SectionTitle>
          <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.75] text-parchment/90">
            <p>
              I&apos;m evaluating Quick Add across a set of natural-language planning scenarios, including tasks,
              events, relative dates, missing details, and ambiguous requests.
            </p>
            <p>
              The goal is to measure intent, date, and time accuracy, along with clarification behavior and cost per
              request, then compare performance before and after prompt or model changes.
            </p>
          </div>
        </section>
      </Paper>

      <Paper>
        <section className="mx-auto max-w-[42rem]">
          <SectionTitle>What I learned</SectionTitle>
          <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.75] text-parchment/90">
            <p>Building Aajera taught me how much a product can change once people actually start using it.</p>
            <p>
              Reflection was originally a small part of the idea, mostly inspired by my physical planner. But the more
              people I talked to, the more it came up, and it ended up becoming a much bigger part of Aajera than I
              expected.
            </p>
            <p>
              Quick Add taught me something different. Getting AI to understand a sentence was not the hardest part.
              Figuring out when it should ask a question, when it should make an assumption, and how much I should
              trust it was much harder.
            </p>
            <p>A lot of the work ended up being less about adding features and more about deciding what was actually worth keeping.</p>
          </div>
        </section>
      </Paper>
    </article>
  );
}
