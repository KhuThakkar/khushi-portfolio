"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/content/projects";

type Mode = "impact" | "technical";

export default function HomePage() {
  const [mode, setMode] = useState<Mode>("impact");
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const reduce = useReducedMotion();

  const featured = useMemo(() => projects.slice(0, 3), []);

  const reveal = (slug: string) => setRevealed((r) => ({ ...r, [slug]: true }));

  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-12">
      <header className="flex flex-col gap-8">
        {/* HERO — concise, minimal */}
        <div>
          <div className="max-w-2xl">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative inline-block"
            >
              <span
                className="absolute -inset-x-3 inset-y-0 -z-10 rounded-lg opacity-30 blur-3xl"
                style={{ background: "rgba(var(--accent), 0.18)" }}
                aria-hidden
              />
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-[0.02em] text-white relative">
                Hello! I'm Khushi.
              </h1>
            </motion.div>
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4 text-white/75 text-[15px] sm:text-base leading-relaxed max-w-lg"
            >
              Product-minded full stack engineer. Early-career full stack engineer passionate about building user-first systems. I'm especially drawn to messy, real-world problems — turning complex workflows into tools people actually enjoy using.
            </motion.p>

            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-3 text-sm text-white/55"
            >
              Systems • Workflows • Product Engineering
            </motion.p>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="mt-3 text-sm text-white/65 space-y-0.5"
            >
              <p>🎓 Computer Science — George Washington University</p>
              <p className="text-white/55">Minor: Political Science</p>
            </motion.div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href="/projects" variant="outline" className="gap-2 font-bold">
                <ArrowRight size={14} strokeWidth={2} /> View Projects
              </Button>
              <Button href="/resume.pdf" variant="ghost">
                Resume
              </Button>
              <div className="flex items-center gap-2 pl-1">
                <IconLink href="https://github.com/" label="GitHub" icon={<Github size={18} />} />
                <IconLink href="https://www.linkedin.com/in/khushi-thakkar-/" label="LinkedIn" icon={<Linkedin size={18} />} />
                <IconLink href="mailto:khushikthakkar@gmail.com" label="Email" icon={<Mail size={18} />} />
              </div>
            </div>
          </div>
        </div>

        {/* Currently Exploring — list */}
        <section className="mt-12 flex flex-col gap-4">
          <h2 className="text-xs sm:text-sm font-medium tracking-[0.2em] text-white/55 uppercase">
            Currently Exploring
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-white/80 marker:text-white/40">
            <li>System design fundamentals</li>
            <li>Data integrity & reconciliation pipelines</li>
            <li>Product engineering at scale</li>
            <li>AI-assisted workflows</li>
          </ul>
        </section>

        {/* SOME OF MY LATEST WORK — heading with lines + 3 separate blocks */}
        <section className="flex flex-col gap-8">
          <div className="flex items-center gap-4 w-full">
            <span className="h-px flex-1 bg-white/20" aria-hidden />
            <h2 className="text-xs sm:text-sm font-medium tracking-[0.2em] text-white/55 uppercase whitespace-nowrap">
              Some of my latest work
            </h2>
            <span className="h-px flex-1 bg-white/20" aria-hidden />
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-3">
            {featured.map((p) => {
              const isRevealed = revealed[p.slug];
              return (
                <a
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  onMouseEnter={() => reveal(p.slug)}
                  onFocus={() => reveal(p.slug)}
                  className={`group flex flex-col rounded-xl border border-white/15 bg-white/[0.04] transition hover:border-white/25 hover:bg-white/[0.06] overflow-hidden ${!isRevealed ? "h-[240px] sm:h-[260px]" : "min-h-[200px] p-5"}`}
                >
                  {!isRevealed ? (
                    <div className="relative h-full w-full">
                      {p.cardImageUrl ? (
                        <img
                          src={p.cardImageUrl}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover object-center"
                          style={p.cardImageObjectPosition ? { objectPosition: p.cardImageObjectPosition } : undefined}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center p-4">
                          <p className="text-center text-xl font-semibold text-white/90">
                            {p.title}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-semibold text-white/95">{p.title}</p>
                        <span className="text-white/40 shrink-0 text-xs">Click me ↗</span>
                      </div>
                      {p.roleAndDate && (
                        <p className="mt-1 text-xs text-white/55">{p.roleAndDate}</p>
                      )}
                      <p className="mt-2 text-sm text-white/65 line-clamp-2">{p.subtitle}</p>
                      <ul className="mt-4 space-y-1.5 text-[13px] text-white/60 flex-1">
                        {(mode === "impact" ? p.highlights.impact : p.highlights.technical)
                          .slice(0, 2)
                          .map((x) => (
                            <li key={x} className="flex gap-2">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                              <span className="line-clamp-2">{x}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-white/50">Some work anonymized for confidentiality.</p>
            <div className="flex gap-2">
              <button onClick={() => setMode("impact")} className={segBtn(mode === "impact")}>
                Impact
              </button>
              <button onClick={() => setMode("technical")} className={segBtn(mode === "technical")}>
                Technical
              </button>
            </div>
          </div>
        </section>
      </header>
    </main>
  );
}

function segBtn(active: boolean) {
  return [
    "rounded-xl px-3 py-2 text-sm border transition",
    active
      ? "border-[rgba(var(--accent),0.45)] bg-[rgba(var(--accent),0.18)] text-white"
      : "border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.06]",
  ].join(" ");
}

function IconLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 transition hover:bg-white/[0.06]"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {icon}
    </a>
  );
}
