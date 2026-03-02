/** Tags to hide from filter chips and from project card badges */
export const TAGS_HIDDEN_ON_CARDS = ["Accessibility", "Data", "Health", "Maps", "Workflows", "Product", "Product Engineering", "Market Analysis", "Presentation", "Analytics"];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  role: string[];
  stack: string[];
  highlights: { impact: string[]; technical: string[] };
  confidentialityNote?: string;
  /** Internship/work experience: show full info on card, no separate detail page */
  experienceOnly?: boolean;
  /** Long-form page content: heading + body (paragraphs separated by \n\n) */
  contentSections?: { heading: string; body: string }[];
  /** Media: paths under public/ (e.g. /projects/uniflex/demo.mp4) */
  videoUrl?: string;
  pitchDeckUrl?: string;
  executiveSummaryUrl?: string;
  /** Optional architecture/layers table: headers + rows */
  architectureTable?: { headers: string[]; rows: string[][] };
  /** Optional image for home page card (logo / cover). Path under public/ */
  cardImageUrl?: string;
  /** Optional object-position for card image (e.g. "58% 50%" to nudge horizontal center) */
  cardImageObjectPosition?: string;
  /** Optional PDF for presentations / decks. Path under public/ (e.g. /projects/gen-z/presentation.pdf) */
  presentationPdfUrl?: string;
  /** Optional role + date line for display (e.g. "Business Technology Lead · May 2025 - Present") */
  roleAndDate?: string;
}

export const projects: Project[] = [
  {
    slug: "premo-ventures",
    title: "Premo Ventures",
    subtitle: "Building a Multi-Location Retail ERP & Operational Intelligence Platform",
    roleAndDate: "Business Technology Lead · May 2025 - Present",
    cardImageUrl: "/projects/premo-ventures/premo-logo.png",
    tags: ["Product Development", "Customer Discovery", "Full Stack", "APIs", "Workflow System", "Analytics", "ERP", "Agile", "Jira", "Supabase", "Next.js", "Node.js", "Tailwind CSS"],
    role: ["Product Engineering"],
    stack: [],
    highlights: {
      impact: [
        "Standardized reporting workflows across multiple retail branches.",
        "Helped reduce operational inconsistencies by ~20% by standardizing reporting workflows across branches.",
        "Improved reporting clarity for management decision-making.",
        "Shifted teams away from spreadsheet-dependent reconciliation.",
      ],
      technical: [
        "Built reusable analytics and reporting components in a modern full-stack environment.",
        "Designed role-based dashboard views (operator vs management).",
        "Integrated external APIs and normalized heterogeneous schemas.",
        "Structured frontend data models for multi-source reconciliation.",
        "Mapped real operator workflows and translated manual reconciliation into system logic.",
      ],
    },
    confidentialityNote: "Visuals and data are anonymized/redacted due to confidentiality.",
    contentSections: [
      {
        heading: "Overview",
        body:
          "At Premo Ventures, I am part of the team building an in-house ERP and operational intelligence platform designed to unify retail workflows across multiple cannabis store locations.\n\n" +
          "The goal is to create a scalable system that integrates: POS systems; payment processors; inventory compliance tools (e.g., METRC); accounting software; payroll systems; delivery platforms.\n\n" +
          "Rather than layering dashboards on top of disconnected tools, we are designing a structured workflow system that reduces reconciliation overhead and improves operational visibility.\n\n" +
          "The long-term vision is to scale this ERP into a product that can support other retailers with similar complexity.",
      },
      {
        heading: "My Contributions",
        body:
          "I operate in a hybrid engineering + product capacity.\n\n" +
          "Engineering Contributions:\n" +
          "• Built reusable analytics and reporting components in a modern full-stack environment\n" +
          "• Designed role-based dashboard views (operator vs management)\n" +
          "• Integrated external APIs and normalized heterogeneous schemas\n" +
          "• Structured frontend data models for multi-source reconciliation\n" +
          "• Implemented asynchronous data fetching and conditional rendering\n" +
          "• Designed filtering logic for shift-level, store-level, and time-range reporting\n\n" +
          "Workflow & Product Contributions:\n" +
          "• Mapped real operator workflows before feature implementation\n" +
          "• Translated manual reconciliation processes into system logic\n" +
          "• Contributed to product roadmap prioritization\n" +
          "• Scoped MVP boundaries for new modules\n" +
          "• Focused UX on reducing cognitive load for operators\n\n" +
          "This role goes beyond ticket execution — it requires system-level thinking across engineering and operations.",
      },
      {
        heading: "The Problem We're Solving",
        body:
          "Retail operators currently: reconcile deposits manually across systems; compare spreadsheets to POS exports; track inventory discrepancies manually; lack a unified operational dashboard.\n\n" +
          "This results in: 15–20+ hours/week spent on verification; human error in reconciliation; delayed visibility into operational issues.\n\n" +
          "We are building a system that moves reconciliation from spreadsheets to structured logic.",
      },
      {
        heading: "System Focus Areas",
        body:
          "Data Normalization — Aggregating multiple APIs with different schemas into unified frontend models.\n\n" +
          "Reconciliation Logic — Comparing: POS sales totals; payment processor deposits; tip allocations; labor cost ratios. Flagging mismatches for review.\n\n" +
          "Workflow-Driven UI — Designing interface flows that mirror actual store operations: shift-level breakdowns; transaction drill-down; store comparison views.",
      },
      {
        heading: "Impact (Current Stage)",
        body:
          "• Standardized reporting workflows across multiple retail branches\n" +
          "• Helped reduce operational inconsistencies by ~20% by standardizing reporting workflows across branches\n" +
          "• Improved reporting clarity for management decision-making\n" +
          "• Shifted teams away from spreadsheet-dependent reconciliation",
      },
    ],
  },
  {
    slug: "uniflex-nvc-finalist",
    title: "Uniflex — Integrated Campus Scheduling & Engagement Platform",
    subtitle: "Top 5 Finalist — GWU New Venture Competition (224 Teams)",
    cardImageUrl: "/projects/uniflex/uniflex-logo.png",
    tags: ["Product Development", "Customer Discovery", "Data Analytics", "Market Research", "MVP", "Strategy", "Pitch"],
    role: [],
    stack: [],
    videoUrl: "/projects/uniflex/uniflex-screenrecording.mp4",
    pitchDeckUrl: "/projects/uniflex/Copy%20of%20UniFlex_NVC25_PitchDeck.pdf",
    executiveSummaryUrl: "/projects/uniflex/UniFlex_NVC25_Updated_Executive%20Summary%20(1).pdf",
    highlights: {
      impact: [
        "Placed Top 5 out of 224 teams in GWU's New Venture Competition.",
        "Conducted 200+ research sessions to validate demand and refine product direction.",
        "Delivered VC-facing pitch and go-to-market strategy with strong market positioning.",
      ],
      technical: [
        "Translated qualitative insights into structured MVP features with defined acceptance criteria.",
        "Built prototype flows informed by competitive analysis and segmentation strategy.",
        "Scoped technical feasibility alongside product strategy under tight timelines.",
      ],
    },
    contentSections: [
      {
        heading: "Overview",
        body:
          "Uniflex is a scheduling infrastructure platform designed to solve a structural problem in higher education: students cannot efficiently align their academic schedules with extracurricular engagement opportunities.\n\n" +
          "While universities provide platforms like GW Engage, they lack real-time schedule integration and coordinated communication systems. The result is low participation, scheduling conflicts, and reduced student engagement.\n\n" +
          "Uniflex was built to integrate academic schedules, extracurricular activities, and event coordination into a single, availability-driven system.",
      },
      {
        heading: "The Problem",
        body:
          "Campus engagement tools today are fragmented.\n\n" +
          "From customer discovery:\n" +
          "• 70% of students said they would be more likely to attend events with personalized reminders\n" +
          "• 70% of club leaders reported needing better tracking of involvement\n" +
          "• The dominant frustration with GW Engage was that it was \"hard to use and people don't use it much\"\n\n" +
          "Students face: no integrated scheduling tool connecting academics and clubs; manual conflict comparison; low visibility into events that match availability.\n\n" +
          "Club leaders face: recruitment challenges; low attendance; poor tracking of engagement.\n\n" +
          "The core issue isn't discovery — it's schedule alignment and coordination.",
      },
      {
        heading: "Product Thesis",
        body:
          "Student engagement increases when availability drives opportunity discovery.\n\n" +
          "Instead of static event listings, Uniflex centers the product around: real-time schedule integration; interest-based filtering; availability-driven recommendations; centralized communication.\n\n" +
          "The goal is not just listing events — it is reducing friction between intent and attendance.",
      },
      {
        heading: "Solution Architecture",
        body:
          "Uniflex integrates three core layers:\n\n" +
          "1️⃣ Academic Schedule Sync — Students connect academic timetables to automatically block unavailable times.\n\n" +
          "2️⃣ Interest-Based Discovery — Clubs and events are filtered by both interest category and real-time availability.\n\n" +
          "3️⃣ Centralized Communication — Club leaders access analytics dashboards and messaging tools to coordinate more effectively.\n\n" +
          "This creates a feedback loop: students discover events they can actually attend; leaders schedule based on visible availability trends; universities gain engagement analytics.",
      },
      {
        heading: "MVP & Technical Direction",
        body:
          "As Co-founder, Product Development, I led: platform feature scoping; UX optimization; schedule logic modeling; system architecture planning.\n\n" +
          "Core MVP components included: calendar conflict detection logic; availability-based filtering engine; role-based dashboard views (student vs club leader); engagement analytics framework.\n\n" +
          "The system was designed with modular growth in mind: university licensing model; department-level advertising tools; future recruiter subscription layer.\n\n" +
          "We intentionally structured the MVP around solving scheduling conflicts before expanding into monetization complexity.",
      },
      {
        heading: "Business Model & Scalability",
        body:
          "Primary revenue streams: $15,000 annual university licensing; $2,000/month department advertising.\n\n" +
          "Future expansion: recruiter subscription access; digital ad monetization at scale.\n\n" +
          "Key financial assumptions: 70–80% projected gross margins; 35–45% net profit margins; CAC optimization through institutional adoption.\n\n" +
          "Rather than relying solely on student ads (initial idea), the model evolved toward institutional licensing to reduce acquisition costs and improve retention. That pivot demonstrates real product-market learning.",
      },
      {
        heading: "Competitive Positioning",
        body:
          "Current tools (e.g., GW Engage) lack real-time synchronization, have poor UX adoption, and do not align events with availability.\n\n" +
          "Uniflex differentiates through: schedule-driven discovery; data-backed engagement analytics; integrated communication tools.\n\n" +
          "It moves from static listings to dynamic coordination.",
      },
      {
        heading: "Outcomes",
        body:
          "• Top 5 Finalist out of 224 teams\n" +
          "• Secured mentorship through GW Office of Innovation & Entrepreneurship\n" +
          "• Validated customer pain points through structured discovery\n" +
          "• Developed financial projections and institutional pricing model",
      },
    ],
  },
  {
    slug: "geo-filtered-news-discovery",
    title: "Scope",
    subtitle: "Geo-Filtered News Discovery — Native Android with Real-Time Geo Querying",
    cardImageUrl: "/projects/geo-filtered-news/scope-logo.png",
    tags: ["Product Development", "Full Stack", "Data Analytics", "Firebase", "APIs", "Maps", "UX", "Android", "Kotlin"],
    role: [],
    stack: [
      "Kotlin",
      "Android Studio",
      "Google Maps SDK",
      "News API",
      "Firebase Auth",
      "Firestore",
      "Firebase Analytics",
    ],
    videoUrl: "/projects/geo-filtered-news/newsappdemo.mov",
    highlights: {
      impact: [
        "Enabled location-aware news discovery through structured geo queries.",
        "Reduced content overload by combining spatial filtering with intent-based search.",
        "Demonstrated alternative UX paradigm for news consumption.",
        "Built full-stack mobile application from UI to backend analytics.",
      ],
      technical: [
        "Asynchronous networking with coroutine-based architecture.",
        "Dynamic query construction combining geo + interest filters.",
        "Firestore schema design optimized for future personalization.",
        "State management for filter combinations and map updates.",
        "Modular UI component structure for scalability.",
      ],
    },
    contentSections: [
      {
        heading: "Overview",
        body:
          "This project explored how geographic context can reduce information overload in news consumption.\n\n" +
          "Instead of presenting a linear feed, the app reframes news as spatially discoverable content — allowing users to explore stories by location, interest category, and keyword filters.\n\n" +
          "The goal was to reduce cognitive load and make news discovery exploratory rather than scroll-based.",
      },
      {
        heading: "The Problem",
        body:
          "Traditional news apps optimize for engagement through infinite feeds.\n\n" +
          "They do not optimize for: geographic relevance; contextual filtering; intent-driven exploration.\n\n" +
          "Users often struggle with: overwhelming volume of content; irrelevant global stories; poor filtering mechanisms.\n\n" +
          "This app restructured news consumption around map-first interaction and structured filtering logic.",
      },
      {
        heading: "Product Decisions",
        body:
          "Key UX decisions included: map-first entry point instead of feed-first; tap-to-discover interaction model; combined category + keyword filters; saved history for personalized revisit behavior; lightweight onboarding via Firebase authentication.\n\n" +
          "The core interaction flow: Open app → View map → Tap region → Apply filters → Structured results. The focus was speed, clarity, and contextual relevance.",
      },
      {
        heading: "Technical Architecture",
        body:
          "1️⃣ Native Android Build — Developed entirely in Kotlin using Android Studio. Modular Activity + Fragment architecture. View binding for UI separation. Reusable component-based layout structure.\n\n" +
          "2️⃣ Google Maps Integration — Integrated Google Maps SDK for Android. Rendered dynamic markers based on article coordinates. Managed camera state and zoom-level logic. Used geocoding assumptions to map article location metadata.\n\n" +
          "3️⃣ News API Integration — Implemented asynchronous network calls using coroutines. Parsed JSON responses into structured data models. Built dynamic query URLs combining location, category, and keyword parameters. Handled API throttling and error states gracefully.\n\n" +
          "4️⃣ Firebase Backend — Used Firebase for: Authentication (secure email/password login, user session persistence); Firestore Database (user profiles, search history, filter preferences, saved articles); Analytics (session duration, most-used filters, geographic exploration behavior, structured event logging for user interaction analysis). This allowed early behavioral insights into how users interacted with map-based discovery.",
      },
      {
        heading: "Data Modeling",
        body:
          "Designed a schema separating: user metadata; article metadata; interaction history; preference profiles.\n\n" +
          "This allowed: clean filtering; future recommendation logic; potential scaling to personalized ranking.",
      },
      {
        heading: "Impact",
        body:
          "• Enabled location-aware news discovery through structured geo queries\n" +
          "• Reduced content overload by combining spatial filtering with intent-based search\n" +
          "• Demonstrated alternative UX paradigm for news consumption\n" +
          "• Built full-stack mobile application from UI to backend analytics",
      },
      {
        heading: "Technical Depth Highlights",
        body:
          "• Asynchronous networking with coroutine-based architecture\n" +
          "• Dynamic query construction combining geo + interest filters\n" +
          "• Firestore schema design optimized for future personalization\n" +
          "• State management for filter combinations and map updates\n" +
          "• Modular UI component structure for scalability",
      },
    ],
    architectureTable: {
      headers: ["Layer", "Component", "Purpose", "Inputs", "Outputs", "Tech / Notes"],
      rows: [
        [
          "Presentation",
          "Android Mobile App",
          "Collects user intent and drives UI",
          "Category, keyword, user location, map interactions",
          "UI state updates, API requests, DB writes",
          "Kotlin, Android Studio, MVVM-ish separation, coroutines for async",
        ],
        [
          "Application Logic",
          "Query Builder & Filter Engine",
          "Translates user intent into structured queries",
          "Category + keyword + lat/lng (+ optional radius)",
          "REST query params + app filter state",
          "Encodes params, manages loading/error states, prevents stale filters",
        ],
        [
          "External API",
          "News API (REST)",
          "Fetches news articles based on query",
          "HTTP request with query params",
          "JSON response (articles list)",
          "Handles rate limits + error responses; retries/backoff optional",
        ],
        [
          "Data Processing",
          "JSON Parsing & Data Modeling",
          "Converts API JSON into app-friendly models",
          "JSON payload",
          "Article objects (title, source, url, coords, category)",
          "Clean data classes; null-safe parsing; ready for map + lists",
        ],
        [
          "UI Rendering",
          "Google Maps SDK Integration",
          "Displays geo-based discovery interface",
          "Article models with coordinates, user map gestures",
          "Markers, clusters (optional), preview panels",
          "Marker tap → article preview; camera/zoom state handling",
        ],
        [
          "Auth (Side)",
          "Firebase Authentication",
          "Identifies users securely",
          "Email/password login (or provider)",
          "uid, session state",
          "Links data ownership to /users/{uid}",
        ],
        [
          "Persistence (Side)",
          "Firebase Realtime Database",
          "Stores user-specific data for personalization",
          "uid, search events, saved items",
          "/users/{uid}/... nodes updated",
          "Stores profile, search history, saved articles; security rules required",
        ],
        [
          "Analytics (Side)",
          "Firebase Analytics",
          "Measures behavior + UX performance",
          "Map taps, filter changes, article opens",
          "Event logs + funnels",
          "Useful for product storytelling + iterative UX improvements",
        ],
      ],
    },
  },
  {
    slug: "oasis-medication-reminder",
    title: "Oasis — Medication Tracking & Intelligent Reminder System",
    subtitle: "Native Android | Kotlin | Firebase | Recurring Notification Engine",
    cardImageUrl: "/projects/oasis/oasis-logo.png",
    tags: ["Product Development", "Customer Discovery", "Mobile", "Android", "Kotlin", "Firebase", "UX", "Full Stack", "APIs"],
    role: [],
    stack: ["Kotlin", "Android Studio", "Firebase Auth", "Firestore", "Android Notifications"],
    highlights: {
      impact: [
        "Simplified medication adherence through structured reminder logic and user-centered design.",
        "Prioritized minimal setup friction, clear scheduling, and predictable notifications.",
        "Reduced cognitive load for users managing health routines.",
      ],
      technical: [
        "Implemented recurring scheduling logic with state persistence.",
        "Managed notification IDs to avoid duplication; linked auth to secure per-user storage.",
        "Designed schema to support future analytics-based recommendations.",
      ],
    },
    contentSections: [
      {
        heading: "Overview",
        body:
          "Oasis is a mobile health application designed to simplify medication adherence through structured reminder logic and user-centered design.\n\n" +
          "The project began from a clear observation: many medication apps were either cluttered, overly clinical, or difficult to configure. Users needed something reliable, friendly, and cognitively simple.\n\n" +
          "Oasis was built as a full-stack Android application integrating authentication, recurring reminder logic, secure data storage, and push notification handling.",
      },
      {
        heading: "The Problem",
        body:
          "Medication adherence tools often fail due to: overly complex configuration flows; poor UX for recurring schedules; notification fatigue; lack of personalization; distrust in reliability.\n\n" +
          "For a health-related application, reliability and clarity matter more than feature density.\n\n" +
          "Oasis prioritizes: minimal setup friction; clear recurring scheduling logic; predictable notification behavior; friendly, approachable UX.",
      },
      {
        heading: "Core Features",
        body:
          "• Secure user authentication\n" +
          "• Pill profile creation (name, dosage, schedule)\n" +
          "• Custom recurring schedules (daily, weekly, custom intervals)\n" +
          "• Local notifications via Android scheduling APIs\n" +
          "• Push notifications support\n" +
          "• Analytics tracking for reminder engagement\n" +
          "• Persistent reminder storage in Firebase",
      },
      {
        heading: "Technical Depth Highlights",
        body:
          "• Implemented recurring scheduling logic with state persistence\n" +
          "• Managed notification IDs to avoid duplication conflicts\n" +
          "• Designed schema to support future analytics-based recommendations\n" +
          "• Linked authentication to secure per-user storage\n" +
          "• Handled asynchronous operations between local scheduling and remote storage",
      },
      {
        heading: "Product Design Decisions",
        body:
          "Oasis prioritized: simple onboarding (create pill → set time → done); friendly visual design instead of clinical UI; minimal steps per interaction; clear confirmation when reminders are scheduled.\n\n" +
          "The goal was to reduce cognitive load for users managing health routines.",
      },
    ],
    videoUrl: "/projects/oasis/oasis-updated2x.mp4",
    architectureTable: {
      headers: ["Layer", "Component", "Purpose", "Inputs", "Outputs", "Tech / Notes"],
      rows: [
        [
          "Presentation Layer",
          "Android UI (Kotlin)",
          "Handles user interaction and state rendering",
          "User login, pill creation, schedule configuration",
          "UI updates, scheduling requests, DB writes",
          "Kotlin, Android Studio, Activity/Fragment structure",
        ],
        [
          "Authentication Layer",
          "Firebase Authentication",
          "Manages secure user sessions",
          "Email/password login",
          "uid, session persistence",
          "Links all stored data to /users/{uid}",
        ],
        [
          "Application Logic Layer",
          "Reminder Configuration Engine",
          "Converts user-selected frequency into structured scheduling rules",
          "Pill name, dosage, time, recurrence type",
          "Reminder objects with calculated next trigger times",
          "Supports daily, weekly, custom intervals",
        ],
        [
          "Scheduling Layer",
          "Local Notification Scheduler",
          "Schedules reliable device notifications",
          "Reminder object with trigger time",
          "Android system notifications",
          "AlarmManager / WorkManager; handles persistence across app restarts",
        ],
        [
          "Background Processing",
          "Recurrence Handler",
          "Recomputes next reminder after completion",
          "Completed reminder event",
          "New scheduled reminder instance",
          "Prevents duplicate triggers; manages notification IDs",
        ],
        [
          "Persistence Layer",
          "Firebase Realtime Database",
          "Stores user-specific health data",
          "Pill metadata, reminder settings, completion events",
          "/users/{uid}/pills, /reminders, /history",
          "Structured JSON nodes under per-user ownership",
        ],
        [
          "Analytics Layer",
          "Firebase Analytics",
          "Tracks engagement and reminder adherence",
          "Reminder opened, reminder completed, missed event",
          "Event logs for behavior analysis",
          "Enables future personalization insights",
        ],
        [
          "Notification Layer",
          "Push Notification Support",
          "Delivers remote updates if needed",
          "Server-triggered notification events",
          "Push alerts to device",
          "Supplement to local notifications",
        ],
      ],
    },
  },
  {
    slug: "accessibility-engineering-1-800-flowers",
    title: "Accessibility Engineering — 1-800-FLOWERS",
    subtitle: "WCAG compliance improvements across high-traffic ecommerce pages.",
    tags: ["Frontend", "Accessibility", "Magento", "Agile", "UX"],
    role: [],
    stack: [],
    experienceOnly: true,
    highlights: {
      impact: [
        "Closed 100% of P1 accessibility issues across 8 high-traffic pages.",
        "Improved compliance and usability for thousands of users.",
        "Clarified ambiguous requirements between design and engineering teams.",
      ],
      technical: [
        "Used WCAG auditing tools and Magento development environment.",
        "Managed sprint delivery via Jira with structured issue tracking.",
        "Implemented semantic markup and accessibility-focused UI adjustments.",
      ],
    },
  },
  {
    slug: "salesforce-workflow-sarla-consulting",
    title: "Salesforce Workflow & Reporting Optimization",
    subtitle: "Translated business requirements into structured Salesforce automation flows.",
    tags: ["Salesforce", "Product Engineering", "CRM", "Data Analytics", "Data", "Workflow System"],
    role: [],
    stack: [],
    experienceOnly: true,
    highlights: {
      impact: [
        "Improved reporting efficiency by 25% for client stakeholders.",
        "Translated 10+ business requirements into actionable product flows.",
        "Enhanced cross-department visibility through structured dashboards.",
      ],
      technical: [
        "Built Salesforce automation flows and reporting pipelines.",
        "Structured CRM data models for clearer stakeholder access.",
        "Collaborated directly with clients to refine technical scope.",
      ],
    },
  },
  {
    slug: "gray-acumen-product-discovery",
    title: "Product Discovery & Business Requirements (Gray Acumen)",
    subtitle: "Stakeholder-driven product enhancement through structured discovery.",
    tags: ["Product Development", "Customer Discovery", "Data Analytics", "Agile", "AWS"],
    role: [],
    stack: [],
    experienceOnly: true,
    highlights: {
      impact: [
        "Reduced operational friction by 30% through scoped enhancements.",
        "Identified 7 major pain points and prioritized roadmap adjustments.",
        "Accelerated feature delivery timelines through structured BRDs.",
      ],
      technical: [
        "Conducted 5+ stakeholder interviews to define problem statements.",
        "Wrote lightweight BRDs to align engineering with business goals.",
        "Balanced feasibility with user satisfaction metrics.",
      ],
    },
  },
  {
    slug: "gen-z-market-strategy-1-800-flowers",
    title: "Gen Z Market Strategy — 1st Place Corporate Competition",
    subtitle: "Data-driven customer research and product positioning for executive panel.",
    presentationPdfUrl: "/projects/gen-z-market-strategy/intern-project-pdf.pdf",
    tags: ["Market Research", "Strategy", "Presentation"],
    role: [],
    stack: [],
    experienceOnly: true,
    highlights: {
      impact: [
        "Interviewed 50 potential Gen Z users to uncover unmet needs.",
        "Won 1st place in company-wide competition.",
        "Presented actionable product recommendations to CEO and CMO.",
      ],
      technical: [
        "Structured user interview data into actionable insights.",
        "Performed segmentation and trend analysis.",
        "Translated research into product-ready strategic proposals.",
      ],
    },
  },
];
