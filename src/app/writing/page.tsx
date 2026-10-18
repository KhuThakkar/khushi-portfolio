import { BookPage, ChapterOpening, PageTurn, Placeholder, RunningHead, SectionTitle } from "@/components/book/Book";

export default function WritingPage() {
  return (
    <BookPage>
      <RunningHead>Chapter III · Writing</RunningHead>
      <ChapterOpening label="Chapter III" title="Writing" subtitle="Research and essays." />

      <div className="mx-auto mt-12 flex max-w-[42rem] flex-col gap-16">
        <section>
          <p className="text-[0.9rem] italic text-lichen">Research paper</p>
          <h2 className="mt-1 font-display text-[2rem] font-medium leading-tight text-parchment">
            AI and the risk of flash wars
          </h2>
          <Placeholder className="mt-5">
            a 3 to 4 sentence summary: the question you asked, your main argument, and why it matters. Then add the PDF to
            public/writing/ and link it here.
          </Placeholder>
        </section>

        <section>
          <SectionTitle>Strategy memos</SectionTitle>
          <Placeholder className="mt-4">
            one-to-two page memos on companies you&apos;re interested in: their situation, one problem or opportunity, and
            what you would do. Add one every couple of weeks.
          </Placeholder>
        </section>
      </div>

      <PageTurn href="/writing" />
    </BookPage>
  );
}
