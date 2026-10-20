import { BookPage, ChapterOpening, DashList, PageTurn, Paper, Placeholder, RunningHead, SectionTitle } from "@/components/book/Book";

// Update this page once a month, and change the month below.
const MONTH = "October 2026";

const EXPLORING = [
  "SQL",
  "Product analytics",
  "System design",
  "AI evals and reliability",
  "How products change once real users get involved",
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
            <SectionTitle>Reading now</SectionTitle>
            <h3 className="mt-4 font-display text-[1.5rem] font-medium leading-tight text-parchment">
              The Finishing School <span className="italic text-lichen">by Gail Godwin</span>
            </h3>
            <p className="mt-3 text-[1.0625rem] leading-[1.75] text-parchment/90">
              The book opens with Justin remembering Ursula, a woman who once warned her not to &ldquo;congeal&rdquo;
              into a finished version of herself. Ursula believed the people who stay most alive are the ones who
              keep moving, changing, and wanting new things. I&apos;m only at the beginning, but that idea has
              already stuck with me. There is something comforting about treating yourself as unfinished, especially
              when it is so easy to be made into feeling like you should already know exactly who you are and where
              you are going.
            </p>
          </section>
        </Paper>
      </div>

      <div className="mt-8">
        <Paper>
          <section className="mx-auto max-w-[42rem]">
            <SectionTitle>Marginalia</SectionTitle>
            <p className="mt-2 italic text-lichen">Notes on things I&apos;ve read in the news.</p>
            <Placeholder className="mt-5">
              two or three short notes. For each: a link to the article, what it&apos;s about in one line, and your take
              in two or three sentences.
            </Placeholder>
          </section>
        </Paper>
      </div>

      <PageTurn href="/now" />
    </BookPage>
  );
}
