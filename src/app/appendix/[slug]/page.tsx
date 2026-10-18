import { notFound } from "next/navigation";
import { BookPage, PageTurn, RunningHead } from "@/components/book/Book";
import { ProjectArticle } from "@/components/book/ProjectArticle";
import { APPENDIX_SLUGS, projectBySlug, shortTitle } from "@/content/book";
import { roman } from "@/components/ui/Ornaments";

export function generateStaticParams() {
  return APPENDIX_SLUGS.map((slug) => ({ slug }));
}

export default async function AppendixEntry({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = APPENDIX_SLUGS.indexOf(slug);
  const p = projectBySlug(slug);
  if (index === -1 || !p) notFound();

  return (
    <BookPage>
      <RunningHead>Appendix · {shortTitle(slug)}</RunningHead>
      <ProjectArticle p={p} label={`Appendix ${roman(index + 1)}`} />
      <PageTurn href={`/appendix/${slug}`} />
    </BookPage>
  );
}
