import Link from "next/link";
import { CornerFlourish, roman } from "@/components/ui/Ornaments";
import { CHAPTERS, WORK_SLUGS, APPENDIX_SLUGS, shortTitle } from "@/content/book";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
      {/* Title page */}
      <header className="title-page-in pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="cover-frame relative px-6 py-12 sm:px-14 sm:py-16">
        <CornerFlourish className="pointer-events-none absolute left-3 top-3 h-11 w-11" />
        <CornerFlourish className="pointer-events-none absolute right-3 top-3 h-11 w-11 rotate-90" />
        <CornerFlourish className="pointer-events-none absolute bottom-3 right-3 h-11 w-11 rotate-180" />
        <CornerFlourish className="pointer-events-none absolute bottom-3 left-3 h-11 w-11 -rotate-90" />

        <h1 className="font-display text-[clamp(3.25rem,9vw,6.25rem)] font-medium leading-[0.95] tracking-[-0.01em] gilt-stamp">
          Hello! I&apos;m Khushi.
        </h1>

        <div className="mt-8 h-px w-16 bg-gilt/70" aria-hidden />

        <p className="mt-8 max-w-[34rem] text-[1.3rem] leading-[1.6] text-parchment sm:text-[1.4rem]">
          I build software for the messy parts of running a business: reconciling data, fixing slow workflows, and
          figuring out what&apos;s worth building.
        </p>

        <p className="mt-5 text-[0.95rem] italic text-lichen">Systems • Workflows • Product Engineering</p>

        <div className="mt-6 text-[0.95rem] leading-relaxed text-lichen">
          <p>Computer Science — George Washington University</p>
          <p>Minor: Political Science</p>
        </div>

        <div className="mt-10 flex flex-wrap items-baseline gap-x-7 gap-y-3">
          <Link
            href="/work"
            className="font-display text-[1.6rem] font-medium italic text-gilt underline decoration-gilt/40 hover:decoration-gilt"
          >
            Begin reading
          </Link>
          <a href="/resume.pdf" className="text-parchment underline decoration-tooling hover:decoration-gilt">
            Resume
          </a>
          <a
            href="https://github.com/khuthakkar"
            target="_blank"
            rel="noreferrer"
            className="text-parchment underline decoration-tooling hover:decoration-gilt"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/khushi-thakkar-/"
            target="_blank"
            rel="noreferrer"
            className="text-parchment underline decoration-tooling hover:decoration-gilt"
          >
            LinkedIn
          </a>
          <a
            href="mailto:khushikthakkar@gmail.com"
            className="text-parchment underline decoration-tooling hover:decoration-gilt"
          >
            Email
          </a>
        </div>
        </div>
      </header>

      {/* Contents */}
      <section id="contents" className="scroll-mt-8 border-t border-tooling pt-12">
        <h2 className="text-center font-display text-[2.4rem] font-medium italic text-parchment">Contents</h2>
        <ol className="mx-auto mt-10 flex max-w-[44rem] flex-col gap-9">
          {CHAPTERS.map((c) => {
            const subs = c.href === "/work" ? WORK_SLUGS : c.href === "/appendix" ? APPENDIX_SLUGS : [];
            return (
              <li key={c.href}>
                <Link href={c.href} className="group flex items-baseline no-underline">
                  <span className="w-12 shrink-0 font-display text-[1.4rem] text-gilt">{c.numeral && `${c.numeral}.`}</span>
                  <span className="font-display text-[1.9rem] font-medium leading-tight text-parchment decoration-gilt/60 underline-offset-4 group-hover:underline">
                    {c.title}
                  </span>
                                  </Link>
                <p className="mt-1 pl-12 italic text-lichen">{c.summary}</p>
                {subs.length > 0 && (
                  <ol className="mt-3 flex flex-col gap-1.5 pl-12">
                    {subs.map((slug, i) => (
                      <li key={slug}>
                        <Link
                          href={`${c.href}/${slug}`}
                          className="flex items-baseline text-parchment/90 no-underline hover:text-gilt"
                        >
                          <span className="w-8 shrink-0 text-[0.9rem] text-gilt/80">{roman(i + 1).toLowerCase()}.</span>
                          <span>{shortTitle(slug)}</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
