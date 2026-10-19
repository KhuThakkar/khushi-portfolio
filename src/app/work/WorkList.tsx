"use client";

import { useState } from "react";
import Link from "next/link";
import { roman } from "@/components/ui/Ornaments";
import { DashList, Placeholder } from "@/components/book/Book";
import { AAJERA_SLUG, WORK_SLUGS, projectBySlug } from "@/content/book";

type Mode = "impact" | "technical";

export function WorkList() {
  const [mode, setMode] = useState<Mode>("impact");

  return (
    <section className="mt-14 grid gap-8 md:grid-cols-[12rem_1fr] md:gap-12">
      <div>
        <h2 className="font-display text-[2rem] font-medium italic leading-tight text-parchment">
          Some of my latest work
        </h2>
        <div className="mt-5 flex gap-5 text-[0.95rem]" role="group" aria-label="Show highlights by">
          <ModeButton active={mode === "impact"} onClick={() => setMode("impact")}>
            Impact
          </ModeButton>
          <ModeButton active={mode === "technical"} onClick={() => setMode("technical")}>
            Technical
          </ModeButton>
        </div>
      </div>

      <div>
        <ol className="flex flex-col">
          {WORK_SLUGS.map((slug, i) => {
            const p = projectBySlug(slug);
            const isAajera = slug === AAJERA_SLUG;
            const title = isAajera ? "Aajera" : p?.title;
            const subtitle = isAajera
              ? "A calendar and task planner with natural-language quick add and reflection prompts."
              : p?.subtitle;
            return (
              <li key={slug} className="border-b border-tooling/70 py-7 first:pt-0">
                <Link href={`/work/${slug}`} className="group block no-underline">
                  <div className="flex items-baseline">
                    <span className="w-12 shrink-0 font-display text-[1.35rem] text-gilt">{roman(i + 1).toLowerCase()}.</span>
                    <span className="font-display text-[1.75rem] font-medium leading-tight text-parchment decoration-gilt/60 underline-offset-4 group-hover:underline">
                      {title}
                    </span>
                    {p?.roleAndDate && (
                      <>
                        <span className="leader hidden sm:block" aria-hidden />
                        <span className="hidden shrink-0 text-[0.9rem] text-lichen sm:block">{p.roleAndDate}</span>
                      </>
                    )}
                  </div>
                  <div className="pl-12">
                    {p?.roleAndDate && <p className="mt-1 text-[0.9rem] text-lichen sm:hidden">{p.roleAndDate}</p>}
                    <p className="mt-2 max-w-[40rem] italic text-lichen">{subtitle}</p>
                    {p ? (
                      <DashList
                        className="mt-4 max-w-[40rem]"
                        items={(mode === "impact" ? p.highlights.impact : p.highlights.technical).slice(0, 2)}
                      />
                    ) : (
                      <Placeholder className="mt-4 max-w-[40rem]">two highlights, such as 30 beta users and one product decision you made.</Placeholder>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
        <p className="mt-6 pl-12 text-[0.9rem] italic text-lichen">Some work anonymized for confidentiality.</p>
      </div>
    </section>
  );
}

function ModeButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active ? "text-parchment underline decoration-gilt decoration-2 underline-offset-[6px]" : "text-lichen hover:text-parchment"
      }
    >
      {children}
    </button>
  );
}
