export type Role = {
  company: string;
  title: string;
  dateRange: string;
  dateVerified: boolean;
  summary: string;
  bullets: string[];
};

export const ROLES: Role[] = [
  {
    company: "Cohesity",
    title: "Software Engineer II (MTS II)",
    dateRange: "[VERIFY DATE — start month/year] — Present",
    dateVerified: false,
    summary:
      "Building AI-powered features on top of Cohesity's data platform — integrating LLMs into product workflows.",
    bullets: [
      "LLM feature integration: RAG pipelines and agentic workflows shipped into production product surfaces.",
      "[VERIFY — add 1-2 concrete, NDA-safe specifics: what kind of feature, what problem it solves for users]",
    ],
  },
  {
    company: "Veritas",
    title: "Associate Software Engineer",
    dateRange: "[VERIFY DATE — start] — [VERIFY DATE — end]",
    dateVerified: false,
    summary: "[VERIFY — one-line summary of the role/team]",
    bullets: [
      "[VERIFY — add 1-3 concrete bullets: what you built, what stack, what scale]",
    ],
  },
];

export const EDUCATION = {
  school: "Pimpri Chinchwad College of Engineering (PCCoE), Pune",
  degree: "[VERIFY — degree/major, e.g. B.E. Computer Engineering]",
  dateRange: "[VERIFY DATE — graduation year]",
  dateVerified: false,
};

export const SKILLS = [
  "LLMs & RAG",
  "Agentic frameworks",
  "Machine Learning",
  "Python",
  "TypeScript / JavaScript",
  "Cloud (Azure, AWS)",
  "Kubernetes",
  "TensorFlow",
];
