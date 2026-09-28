export type Project = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  href?: string;
  image?: string;
  imageAlt?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "sketch-to-color",
    title: "Sketch to Color",
    description:
      "Image-to-image translation with a Conditional GAN — turns anime line art into fully colored artwork.",
    detail:
      "Trained on a Kaggle dataset of 14.2k sketch-color pairs. The demo runs the generator on new sketches in the browser.",
    href: "https://tejasmorkar.github.io/sketch-to-color/",
    image: "https://tejasmorkar.github.io/sketch-to-color/assets/outputs.gif",
    imageAlt: "Sketch to Color output examples",
  },
  {
    slug: "toxicity-zero",
    title: "ToxicityZero Discord Bot",
    description:
      "A moderation bot that scores message toxicity in real time and flags it before it spreads.",
    detail:
      "Built with discord.js and TensorFlow.js, deployed on Azure App Services with continuous WebJobs. Originally built for a Microsoft Learn Student Ambassadors session.",
    href: "https://tejasmorkar.github.io/toxicity-zero-discord-bot/",
    image:
      "https://tejasmorkar.github.io/toxicity-zero-discord-bot/assets/toxicity-zero-bot-working.gif",
    imageAlt: "ToxicityZero Discord bot in action",
  },
  {
    slug: "housing-price-prediction",
    title: "Housing Price Prediction — Streamlit App",
    description:
      "A tunable housing-price model you can poke at in the browser — adjust neurons, learning rate, and epochs live.",
    detail:
      "An exploratory tutorial into the California Housing Price dataset, built with TensorFlow and deployed with Streamlit — no separate backend needed to share a model demo.",
    image: "/images/projects/streamlit-housing.gif",
    imageAlt: "Streamlit housing price prediction app",
  },
  {
    slug: "cervical-cancer-detection",
    title: "Cervical Cancer Detection",
    description:
      "A deep-learning web platform for cervical cancer screening, with built-in patient–doctor interaction.",
    detail:
      "Classifies cervical cells in Pap smear images using transfer learning with TensorFlow, deployed on GCP — the model achieved top-of-class accuracy.",
  },
];
