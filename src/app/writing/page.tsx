import { BookPage, ChapterOpening, PageTurn, Paper, RunningHead } from "@/components/book/Book";

export default function WritingPage() {
  return (
    <BookPage>
      <RunningHead>Chapter III · Writing</RunningHead>
      <Paper>
        <ChapterOpening
          label="Chapter III"
          title="Writing"
          subtitle="Research, product analytics, and notes on building with AI."
        />
      </Paper>

      <div className="mt-8">
        <Paper>
          <section className="mx-auto max-w-[42rem]">
            <p className="text-[0.9rem] italic text-lichen">Research paper</p>
            <h2 className="mt-1 font-display text-[2rem] font-medium leading-tight text-parchment">
              AI and the risk of flash wars
            </h2>
            <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.75] text-parchment/90">
              <p>
                The AI takeover probably will not look like <em>The Terminator</em>. What worries me more is how easy
                it is to start trusting AI without checking whether it&apos;s actually right. In warfare, that creates
                the risk of a &ldquo;flash war,&rdquo; a conflict that escalates so quickly that humans do not have
                enough time to step in before a mistake turns into something much bigger.
              </p>
              <p>
                In 1983, a Soviet early-warning system falsely reported that U.S. nuclear missiles had been launched
                toward the Soviet Union. Following the alert could have set a nuclear retaliation in motion, but
                officer Stanislav Petrov decided the system was probably wrong and refused to treat it as a real
                attack. This paper looks at what happens when AI speeds those decisions up so much that there may no
                longer be time for someone like Petrov to stop, question the system, and prevent a false alarm from
                becoming a real war.
              </p>
            </div>
            <p className="mt-6">
              <a
                href="/writing/flash-wars.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-gilt underline decoration-gilt/40 underline-offset-4 hover:decoration-gilt"
              >
                Read the full paper (PDF)
              </a>
            </p>
          </section>
        </Paper>
      </div>

      <PageTurn href="/writing" />
    </BookPage>
  );
}
