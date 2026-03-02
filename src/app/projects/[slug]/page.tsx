import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { projects, TAGS_HIDDEN_ON_CARDS } from "@/content/projects";
import { MediaAndArchitectureCard } from "@/components/projects/MediaAndArchitectureCard";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();
  if (p.experienceOnly) redirect("/projects");

  const hasMediaOrTable =
    p.videoUrl || p.pitchDeckUrl || p.executiveSummaryUrl || p.architectureTable;

  return (
    <main className="mx-auto max-w-4xl px-5 pb-20 pt-10">
      <div className="flex flex-col gap-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors w-fit mb-2"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        <header>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">{p.title}</h1>
          {p.roleAndDate && (
            <p className="mt-2 text-sm text-white/60">{p.roleAndDate}</p>
          )}
          <p className="mt-3 text-white/80">{p.subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.filter((t) => !TAGS_HIDDEN_ON_CARDS.includes(t)).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </header>

        {hasMediaOrTable && (
          <MediaAndArchitectureCard
            videoUrl={p.videoUrl}
            pitchDeckUrl={p.pitchDeckUrl}
            executiveSummaryUrl={p.executiveSummaryUrl}
            architectureTable={p.architectureTable}
          />
        )}

        {p.contentSections && p.contentSections.length > 0 && (
          <div className="flex flex-col gap-5">
            {p.contentSections.map((section, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/15 p-6 sm:p-7"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, rgba(255,120,200,0.04) 100%)",
                }}
              >
                <h2 className="text-lg font-semibold text-white tracking-tight">{section.heading}</h2>
                <div className="mt-4 max-w-prose space-y-4 text-[15px] leading-[1.65] text-white/95">
                  {section.body.split(/\n\n+/).map((block, j) => {
                    const lines = block.split("\n").filter(Boolean);
                    const bulletLines = lines.filter((l) => l.trim().startsWith("•"));
                    if (bulletLines.length === lines.length && bulletLines.length > 0) {
                      return (
                        <ul key={j} className="list-disc space-y-2 pl-5">
                          {bulletLines.map((line, k) => (
                            <li key={k} className="pl-0.5">{line.replace(/^•\s*/, "").trim()}</li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={j} className="whitespace-pre-line first:mt-0">
                        {block}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {p.confidentialityNote && (
          <GlassCard className="p-4 border-[rgba(var(--accent),0.25)]">
            <p className="text-sm text-white/70">
              <span className="text-white font-medium">Confidentiality:</span> {p.confidentialityNote}
            </p>
          </GlassCard>
        )}

      </div>
    </main>
  );
}
