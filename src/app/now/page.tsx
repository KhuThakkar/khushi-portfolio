import { BookPage, ChapterOpening, DashList, PageTurn, Placeholder, RunningHead, SectionTitle } from "@/components/book/Book";

// Update this page once a month, and change the month below.
const MONTH = "October 2026";

const EXPLORING = [
  "System design fundamentals",
  "Data integrity & reconciliation pipelines",
  "Product engineering at scale",
  "AI-assisted workflows",
];

export default function NowPage() {
  return (
    <BookPage>
      <RunningHead>Chapter IV · Now</RunningHead>
      <ChapterOpening label="Chapter IV" title="Now" subtitle={MONTH} />

      <div className="mx-auto mt-12 flex max-w-[42rem] flex-col gap-16">
        <section>
          <SectionTitle>This month</SectionTitle>
          <dl className="mt-6 flex flex-col gap-6">
            {[
              ["Looking forward to", "something you're excited about this month."],
              ["Learning", "a skill or subject you're working on, including personal development."],
              ["Working on", "what you're building or doing, such as Aajera's beta."],
            ].map(([term, hint]) => (
              <div key={term}>
                <dt className="font-display text-[1.3rem] italic text-parchment">{term}</dt>
                <dd className="mt-2">
                  <Placeholder>{hint}</Placeholder>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <SectionTitle>Currently exploring</SectionTitle>
          <DashList className="mt-4" items={EXPLORING} />
        </section>

        <section>
          <SectionTitle>On my shelf</SectionTitle>
          <div className="mt-6 flex flex-col gap-6">
            <div>
              <p className="font-display text-[1.3rem] italic text-parchment">Reading now</p>
              <Placeholder className="mt-2">the book, its author, and one sentence on why you picked it up.</Placeholder>
            </div>
            <div>
              <p className="font-display text-[1.3rem] italic text-parchment">Favorites</p>
              <Placeholder className="mt-2">three to five books, each with one sentence on why it matters to you.</Placeholder>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle>Marginalia</SectionTitle>
          <p className="mt-2 italic text-lichen">Notes on things I&apos;ve read in the news.</p>
          <Placeholder className="mt-5">
            two or three short notes. For each: a link to the article, what it&apos;s about in one line, and your take in
            two or three sentences.
          </Placeholder>
        </section>
      </div>

      <PageTurn href="/now" />
    </BookPage>
  );
}
