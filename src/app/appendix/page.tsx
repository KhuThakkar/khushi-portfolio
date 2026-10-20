import Link from "next/link";
import { BookPage, ChapterOpening, PageTurn, Paper, RunningHead } from "@/components/book/Book";
import { APPENDIX_SLUGS, projectBySlug } from "@/content/book";
import { TAGS_HIDDEN_ON_CARDS, type Project } from "@/content/projects";
import { roman } from "@/components/ui/Ornaments";

const tagsOf = (p: Project) => p.tags.filter((t) => !TAGS_HIDDEN_ON_CARDS.includes(t));

export default function AppendixPage() {
  return (
    <BookPage>
      <RunningHead>Appendix</RunningHead>
      <Paper>
        <ChapterOpening title="Appendix" subtitle="Earlier school projects." />
        <ol className="mx-auto mt-10 flex max-w-[42rem] flex-col">
          {APPENDIX_SLUGS.map((slug, i) => {
            const p = projectBySlug(slug)!;
            return (
              <li key={slug} className="border-b border-tooling/70 py-6 last:border-0">
                <Link href={`/appendix/${slug}`} className="group grid gap-x-5 no-underline sm:grid-cols-[3rem_1fr]">
                  <span className="font-display text-[1.35rem] text-gilt">{roman(i + 1)}.</span>
                  <div>
                    <span className="font-display text-[1.6rem] font-medium leading-tight text-parchment decoration-gilt/60 underline-offset-4 group-hover:underline">
                      {p.title}
                    </span>
                    <p className="mt-2 italic text-lichen">{p.subtitle}</p>
                    {tagsOf(p).length > 0 && (
                      <p className="mt-2 text-[0.85rem] text-lichen/80">{tagsOf(p).join(", ")}</p>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </Paper>

      <PageTurn href="/appendix" />
    </BookPage>
  );
}
