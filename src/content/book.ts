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
  { numeral: "III", title: "Experience", href: "/experience", summary: "Where I've worked and what I did there" },
  { numeral: "IV", title: "Writing", href: "/writing", summary: "Research, product analytics, and notes on building with AI" },
  { numeral: "V", title: "Now", href: "/now", summary: "What I'm reading, learning, and thinking about this month" },
  { numeral: "", title: "Appendix", href: "/appendix", summary: "Earlier school projects" },
];

/** Aajera has no entry in projects.ts yet, so it is a placeholder chapter page. */
export const AAJERA_SLUG = "aajera";

export const WORK_SLUGS = ["premo-ventures", AAJERA_SLUG, "uniflex-nvc-finalist"];
export const APPENDIX_SLUGS = ["geo-filtered-news-discovery", "oasis-medication-reminder"];

/**
 * Each entry in Chapter III: Experience. Newest first.
 * Internships that already live in projects.ts are referenced by slug so
 * the data stays in one place; freestanding entries carry their own copy.
 */
export type ExperienceEntry = {
  key: string;
  company: string;
  role: string;
  dates: string;
  /** 1-2 sentence summary, in Khushi's voice. */
  summary: string;
  /** 2-3 bullets. */
  bullets: string[];
  /** Optional link to a Work chapter for the full case study. */
  workSlug?: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    key: "premo",
    company: "Premo Ventures",
    role: "Product Lead",
    dates: "June 2025 – Present",
    summary:
      "I lead product for a multi-location retail operator and co-founded Debtera, the reconciliation product that grew out of this work.",
    bullets: [
      "Replaced a manual Excel reconciliation process with automated integrations across QuickBooks, AeroPay, AlpineIQ, POS, and banking data, cutting weekly reconciliation time from about 4 hours to 1.",
      "Co-wrote the PRD for a multi-location analytics platform (6 personas, 20+ user stories, MVP acceptance criteria).",
      "Co-founded Debtera, pitched to VC judges, and placed 2nd of 200+ teams in the GW New Venture Competition ($7,500).",
    ],
    workSlug: "premo-ventures",
  },
  {
    key: "gray-acumen",
    company: "Gray Acumen",
    role: "Business Analyst Intern",
    dates: "May 2024 – August 2024",
    summary:
      "I worked with a consulting team on a client workflow redesign, interviewing stakeholders and mapping how information actually moved through the business.",
    bullets: [
      "Interviewed 5+ stakeholders and mapped the end-to-end workflow to find where processing slowed down.",
      "Recommended a redesigned process that the team adopted.",
      "Wrote requirements for 5+ product enhancements and prioritized pain points with engineering.",
    ],
  },
  {
    key: "flowers",
    company: "1-800-FLOWERS",
    role: "Software Engineering Intern",
    dates: "June 2023 – August 2023",
    summary:
      "I fixed accessibility issues across the e-commerce site in Magento and competed in the company's Gen Z marketing competition.",
    bullets: [
      "Closed 100% of priority-one WCAG accessibility issues across 8 high-traffic pages within the sprint.",
      "Placed 1st in a company-wide Gen Z marketing competition, presenting a strategy built on customer research to the CEO and CMO.",
      "Worked in Jira and GitLab with designers and engineers to clarify requirements.",
    ],
  },
  {
    key: "sarla",
    company: "Sarla Consulting",
    role: "Technology Intern",
    dates: "June 2022 – August 2022",
    summary:
      "I migrated legacy Salesforce automations to Flows for a performing arts center client.",
    bullets: [
      "Translated 10+ business requirements from 2+ clients into Salesforce workflows.",
      "Rebuilt legacy Process Builder automations as Flows for a performing arts center.",
    ],
  },
];

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
  { href: "/experience", label: "III. Experience" },
  { href: "/writing", label: "IV. Writing" },
  { href: "/now", label: "V. Now" },
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
