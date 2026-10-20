import Image from "next/image";
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

const SHELF: { title: string; author: string; cover: string; note: string }[] = [
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    cover: "fahrenheit-451.jpg",
    note:
      "My favorite book of all time. I love how it shows a world so overstimulated by technology and constant entertainment that people stop noticing, questioning, and really experiencing their own lives. That idea of what it means to actually be awake to the world is what made the book stick with me.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "pride-and-prejudice.jpg",
    note:
      "What I loved most was that both Elizabeth and Darcy had to look inward before they could really understand each other. They were forced to see how much their own pride, assumptions, and biases had shaped the way they saw the other person.",
  },
  {
    title: "Sunrise on the Reaping",
    author: "Suzanne Collins",
    cover: "sunrise-on-the-reaping.jpg",
    note:
      "I loved how much of the book is about who gets to control the story. It made me think about how power is not just controlling what people can do, but controlling what they believe happened in the first place.",
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
            <SectionTitle>On my shelf</SectionTitle>
            <div className="mt-6 flex flex-col gap-8">
              <div>
                <p className="text-[0.9rem] italic text-lichen">Reading now</p>
                <h3 className="mt-1 font-display text-[1.5rem] font-medium leading-tight text-parchment">
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
              </div>

              <div>
                <p className="text-[0.9rem] italic text-lichen">Favorites</p>
                <ol className="mt-6 grid gap-8 sm:grid-cols-3 sm:gap-6">
                  {SHELF.map(({ title, author, cover, note }) => (
                    <li key={title}>
                      <figure>
                        <div className="relative aspect-[2/3] overflow-hidden border border-gilt/40">
                          <Image
                            src={`/now/${cover}`}
                            alt={`Cover of ${title} by ${author}`}
                            fill
                            sizes="(min-width: 640px) 200px, 60vw"
                            className="object-contain"
                          />
                        </div>
                        <figcaption className="mt-3">
                          <p className="font-display text-[1.25rem] font-medium leading-tight text-parchment">{title}</p>
                          <p className="text-[0.95rem] italic text-lichen">by {author}</p>
                          <p className="mt-3 text-[0.97rem] leading-[1.7] text-parchment/90">{note}</p>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
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
