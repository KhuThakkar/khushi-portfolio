import { projects, type Project } from "@/content/projects";

/**
 * The portfolio is laid out like a book. This file is the spine:
 * which chapters exist, which projects belong to each, and the order
 * a reader turns through the pages.
 */

export type Chapter = {
  numeral: string;
  title: string;
  href: string;
  /** One line shown in the table of contents */
  summary: string;
};

export const CHAPTERS: Chapter[] = [
  { numeral: "I", title: "About", href: "/about", summary: "Who I am, and what I make outside of work" },
  { numeral: "II", title: "Work", href: "/work", summary: "Products I've built and the decisions behind them" },
  { numeral: "III", title: "Writing", href: "/writing", summary: "Research and essays" },
  { numeral: "IV", title: "Now", href: "/now", summary: "What I'm reading, learning, and thinking about this month" },
  { numeral: "", title: "Appendix", href: "/appendix", summary: "Earlier projects and internships" },
];

/** Aajera has no entry in projects.ts yet, so it is a placeholder chapter page. */
export const AAJERA_SLUG = "aajera";

export const WORK_SLUGS = ["premo-ventures", AAJERA_SLUG, "uniflex-nvc-finalist"];
export const APPENDIX_SLUGS = ["geo-filtered-news-discovery", "oasis-medication-reminder"];

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** "Uniflex — Integrated Campus..." → "Uniflex" */
export function shortTitle(slug: string) {
  if (slug === AAJERA_SLUG) return "Aajera";
  const p = projectBySlug(slug);
  return p ? p.title.split(" — ")[0] : slug;
}

export type Page = { href: string; label: string };

/** Every page in reading order, front to back. */
export const READING_ORDER: Page[] = [
  { href: "/", label: "Cover" },
  { href: "/about", label: "I. About" },
  { href: "/work", label: "II. Work" },
  ...WORK_SLUGS.map((s) => ({ href: `/work/${s}`, label: shortTitle(s) })),
  { href: "/writing", label: "III. Writing" },
  { href: "/now", label: "IV. Now" },
  { href: "/appendix", label: "Appendix" },
  ...APPENDIX_SLUGS.map((s) => ({ href: `/appendix/${s}`, label: shortTitle(s) })),
];

export function neighbors(href: string) {
  const i = READING_ORDER.findIndex((p) => p.href === href);
  return {
    prev: i > 0 ? READING_ORDER[i - 1] : undefined,
    next: i >= 0 && i < READING_ORDER.length - 1 ? READING_ORDER[i + 1] : undefined,
  };
}
