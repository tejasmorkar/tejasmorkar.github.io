export type Role = {
  company: string;
  title: string;
  location: string;
  dateRange: string;
  summary: string;
  bullets: string[];
};

export const ROLES: Role[] = [
  {
    company: "Cohesity",
    title: "Software Engineer II (MTS II)",
    location: "Pune, India",
    dateRange: "Dec 2024 - Present",
    summary:
      "Working on Gaia, Cohesity's generative AI assistant that uses RAG and LLMs to give insights from enterprise backup data.",
    bullets: [
      "Implementing secure, private data integration so customers can have conversations with AI about their own data.",
      "Enabling natural-language queries for enterprise knowledge discovery.",
    ],
  },
  {
    company: "Veritas",
    title: "Associate Software Engineer",
    location: "Pune, India",
    dateRange: "Jul 2022 - Dec 2024",
    summary:
      "Explored and built AI features to solve customer problems using LangChain, LlamaIndex and Azure OpenAI GPT models.",
    bullets: [
      "Built Alta Copilot, a multi-agent LangGraph system with RAG, NL-to-SQL and decision-making agents for help, report generation and autonomous data protection. Implemented the LangGraph framework from scratch and set up LLMOps evaluation pipelines and observability with Arize Phoenix.",
      "Developed chatbot solutions, task automation, and predictive analysis pipelines.",
      "Worked on NetBackup and Alta View modules with Java, Spring Boot, and WebSockets.",
    ],
  },
  {
    company: "PTC",
    title: "Information Security Intern",
    location: "Pune, India",
    dateRange: "Aug 2021 - Jun 2022",
    summary:
      "Handled live cybersecurity incident investigations and built tools using vendor APIs.",
    bullets: [
      "Performed threat hunting, vulnerability assessments, and infrastructure scripting.",
    ],
  },
  {
    company: "CDAC",
    title: "ML Software Developer Intern",
    location: "Mumbai, India",
    dateRange: "Sep 2020 - Mar 2021",
    summary:
      "Researched adversarial ML techniques and built fake-news detection models using BERT and GRU-based RNNs.",
    bullets: [],
  },
];

export const EDUCATION = {
  school: "Pimpri Chinchwad College of Engineering (PCCoE), Pune",
  degree: "B.E. in Computer Science, 9.51 CGPA with Honors in AI and Machine Learning",
  dateRange: "2018 - 2022",
};

export const SKILLS = [
  "LLMs & RAG",
  "Agentic systems (LangGraph, AutoGen, Semantic Kernel)",
  "LangChain / LlamaIndex",
  "OpenAI & Gemini APIs",
  "Deep Learning (CNNs, GANs)",
  "TensorFlow",
  "Python",
  "Java / Spring",
  "TypeScript / JavaScript",
  "MongoDB / MySQL",
  "Azure, AWS, GCP",
];
