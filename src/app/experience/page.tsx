import Link from "next/link";
import { BookPage, ChapterOpening, DashList, PageTurn, Paper, RunningHead } from "@/components/book/Book";
import { EXPERIENCE } from "@/content/book";
import { roman } from "@/components/ui/Ornaments";

export default function ExperiencePage() {
  return (
    <BookPage>
      <RunningHead>Chapter III · Experience</RunningHead>
      <Paper>
        <ChapterOpening
          label="Chapter III"
          title="Experience"
          subtitle="Where I've worked and what I did there, newest first."
        />
      </Paper>

      {EXPERIENCE.map((entry, i) => (
        <div key={entry.key} className="mt-8">
          <Paper>
            <article className="mx-auto max-w-[42rem]">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[1.35rem] text-gilt">III.{roman(i + 1).toLowerCase()}</span>
                <h2 className="font-display text-[1.9rem] font-medium leading-tight text-parchment">
                  {entry.company}
                </h2>
              </div>
              <p className="mt-2 pl-14 text-[0.95rem] italic text-lichen">
                {entry.role} · {entry.dates}
              </p>
              <p className="mt-5 pl-14 text-[1.0625rem] leading-[1.75] text-parchment/90">{entry.summary}</p>
              <DashList className="mt-4 pl-14 text-[0.97rem]" items={entry.bullets} />
              {entry.workSlug && (
                <p className="mt-5 pl-14 text-[0.95rem]">
                  <Link
                    href={`/work/${entry.workSlug}`}
                    className="italic text-gilt underline decoration-gilt/40 hover:decoration-gilt"
                  >
                    Read the full chapter in II.i →
                  </Link>
                </p>
              )}
            </article>
          </Paper>
        </div>
      ))}

      <PageTurn href="/experience" />
    </BookPage>
  );
}
