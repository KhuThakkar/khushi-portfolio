import { BookPage, ChapterOpening, PageTurn, RunningHead } from "@/components/book/Book";
import { WorkList } from "./WorkList";

export default function WorkPage() {
  return (
    <BookPage>
      <RunningHead>Chapter II · Work</RunningHead>
      <ChapterOpening label="Chapter II" title="Work" subtitle="Products I've built and the decisions behind them." />
      <WorkList />
      <PageTurn href="/work" />
    </BookPage>
  );
}
