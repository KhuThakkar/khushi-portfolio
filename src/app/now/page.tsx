import { BookPage, ChapterOpening, DashList, PageTurn, Paper, RunningHead, SectionTitle } from "@/components/book/Book";

// Update this page once a month, and change the month below.
const MONTH = "October 2026";

const EXPLORING = [
  "SQL",
  "Product analytics",
  "System design",
  "AI evals and reliability",
  "How products change once real users get involved",
];

const CLIPPINGS: { title: string; source: string; date: string; href: string; take: string }[] = [
  {
    title: "Amazon says its AI chips will work with popular coding language, challenging Nvidia",
    source: "Reuters",
    date: "October 19, 2026",
    href: "https://www.reuters.com/business/retail-consumer/amazon-says-its-ai-chips-will-work-with-popular-coding-language-challenging-2026-10-19/",
    take:
      "What interested me was that Amazon is competing with Nvidia by making the decision to switch easier, not just by saying its chip is better. It made me think about how much of a product's advantage can come from everything built around it. Once people have invested enough time and work into a system, convenience can become a stronger moat than the product itself.",
  },
  {
    title: "Brian Chesky interview: AI agents need their own operating system",
    source: "TechCrunch",
    date: "October 1, 2026",
    href: "https://techcrunch.com/2026/10/01/brian-chesky-interview-ai-agents-need-their-own-operating-system/",
    take:
      "What stood out to me was the difference between removing friction and removing the experience itself. In travel, browsing, comparing, and exploring are part of the value, so turning everything into a chatbot can actually make the product worse. I like the idea that AI should automate the parts people do not care about, not erase the parts they enjoy.",
  },
];

const THIS_MONTH: { term: string; body: string }[] = [
  {
    term: "Looking forward to",
    body:
      "Getting better at SQL and product analytics. My goal this month is to work through one structured SQL course and use Aajera's real usage data to build a simple dashboard and answer a few actual product questions.",
  },
  {
    term: "Learning",
    body:
      "I'm working on getting more comfortable using data to make product decisions, not just relying on instinct or user feedback alone. I'm also trying to get better at shipping before everything feels perfectly finished.",
  },
  {
    term: "Working on",
    body:
      "The biggest goal right now is getting Aajera out of the dev environment and into the real world. That means tightening the core experience, fixing the things that break once real people start using it, and getting it in front of more beta users.",
  },
];

export default function NowPage() {
  return (
    <BookPage>
      <RunningHead>Chapter V · Now</RunningHead>
      <Paper>
        <ChapterOpening label="Chapter V" title="Now" subtitle={MONTH} />
      </Paper>

      <div className="mt-8">
        <Paper>
          <section className="mx-auto max-w-[42rem]">
            <SectionTitle>This month</SectionTitle>
            <dl className="mt-6 flex flex-col gap-6">
              {THIS_MONTH.map(({ term, body }) => (
                <div key={term}>
                  <dt className="font-display text-[1.3rem] italic text-parchment">{term}</dt>
                  <dd className="mt-2 text-[1.0625rem] leading-[1.75] text-parchment/90">{body}</dd>
                </div>
              ))}
            </dl>
          </section>
        </Paper>
      </div>

      <div className="mt-8">
        <Paper>
          <section className="mx-auto max-w-[42rem]">
            <SectionTitle>Currently exploring</SectionTitle>
            <DashList className="mt-4" items={EXPLORING} />
          </section>
        </Paper>
      </div>

      <div className="mt-8">
        <Paper>
          <section className="mx-auto max-w-[42rem]">
            <SectionTitle>Clippings</SectionTitle>
            <p className="mt-2 italic text-lichen">Notes on things I&apos;ve read in the news.</p>
            <ol className="mt-6 flex flex-col gap-8">
              {CLIPPINGS.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-[1.3rem] font-medium leading-tight text-parchment underline decoration-gilt/40 underline-offset-4 hover:decoration-gilt"
                  >
                    {c.title}
                  </a>
                  <p className="mt-1 text-[0.9rem] italic text-lichen">
                    {c.source} &middot; {c.date}
                  </p>
                  <p className="mt-3 text-[1.0625rem] leading-[1.75] text-parchment/90">{c.take}</p>
                </li>
              ))}
            </ol>
          </section>
        </Paper>
      </div>

      <PageTurn href="/now" />
    </BookPage>
  );
}
