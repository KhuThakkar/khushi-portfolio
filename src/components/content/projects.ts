export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    tags: string[];
    role: string[];
    stack: string[];
    highlights: { impact: string[]; technical: string[] };
    confidentialityNote?: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "premo-ventures",
      title: "Premo Ventures",
      subtitle: "Building a Multi-Location Retail ERP & Operational Intelligence Platform",
      tags: ["Product Engineering", "Frontend", "Workflows", "Analytics"],
      role: [
        "Translated operator workflows into UI flows and dashboard IA",
        "Implemented Next.js components and interaction patterns",
        "Iterated based on stakeholder feedback; supported rollout/training",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind", "Jira"],
      highlights: {
        impact: [
          "Standardized workflows across 5 locations",
          "Reached ~90% adoption within 30 days",
        ],
        technical: [
          "Reusable component patterns for dense analytics UI",
          "State-driven filters + date range patterns",
        ],
      },
      confidentialityNote: "Visuals and data are anonymized/redacted due to confidentiality.",
    },
  ];
  