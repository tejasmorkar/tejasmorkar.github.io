export type Talk = {
  title: string;
  date: string;
  venue: string;
  description: string;
  href: string;
  image?: string;
};

export const TALKS: Talk[] = [
  {
    title: "Introduction to Gen AI — GANs & LLMs",
    date: "Apr 2025",
    venue: "",
    description:
      "GAN and LLM architecture, plus a code walkthrough of a Conditional GAN, RAG, and an agentic framework built on LLMs.",
    href: "https://docs.google.com/presentation/d/1jBypNFAfRobmoVb22xFwgqIexXl7YWR7i6DaTMMmqOU/edit?usp=sharing",
    image: "/images/presentations/introtogenai.png",
  },
  {
    title: "Introduction to GANs — Exploring the Potential of Generative AI",
    date: "Nov 2023",
    venue: "ATAL Academy Faculty Development Program, Computer Vision",
    description:
      "GAN architecture and types, with a code walkthrough of the Conditional GAN behind Sketch to Color.",
    href: "https://docs.google.com/presentation/d/1B6KZDPMHwhr31sMjJ8EJc_WI06yS0VUQhmnq0WOLDxA/edit?usp=sharing",
    image: "/images/presentations/intro-to-gans-atal.png",
  },
  {
    title: "A Brief Intro to Containerization, Azure, and MLSA",
    date: "Sep 2022",
    venue: "",
    description:
      "Why businesses containerize, Azure fundamentals, and an intro to the Microsoft Learn Student Ambassadors program.",
    href: "/documents/presentations/a-brief-intro-to-containerization.pdf",
    image: "/images/presentations/containerization.jpg",
  },
  {
    title: "End to End AI Discord Bot",
    date: "Mar 2021",
    venue: "",
    description:
      "Building a Text Toxicity Detection Discord bot with discord.js and deploying it to Azure App Services.",
    href: "/documents/presentations/end-to-end-ai-discord-bot.pdf",
    image: "/images/presentations/end-to-end-ai-discord-bot.png",
  },
  {
    title: "Pie & AI: Pune — Intro to GANs",
    date: "Oct 2020",
    venue: "DeepLearning.AI meetup, hosted by PCCoE ACM Student Chapter",
    description:
      "A beginner-friendly walkthrough of GANs, their types, and where to go from here.",
    href: "/documents/presentations/pie-ai-pune-intro-to-gans.pdf",
    image: "/images/presentations/intro-to-gans.png",
  },
  {
    title: "Opensource — Why and How?",
    date: "Sep 2020",
    venue: "DSC PCCoE, with PCCoE ACM Student Chapter",
    description: "A hands-on workshop for getting started with open-source collaboration.",
    href: "/documents/presentations/opensource-why-and-how.pdf",
    image: "/images/presentations/opensource-why-and-how.png",
  },
];
