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
      "An image-to-image translation model using Conditional GANs that takes a black and white anime sketch and gives you a colored version of it.",
    detail:
      "Trained on the Anime Sketch-Colorization Pair dataset from Kaggle, which has 14.2k sketch-color pairs. I wrote the full walkthrough as part two of my GANs series.",
    href: "https://tejasmorkar.github.io/sketch-to-color/",
    image: "https://tejasmorkar.github.io/sketch-to-color/assets/outputs.gif",
    imageAlt: "Sketch to Color output examples",
  },
  {
    slug: "toxicity-zero",
    title: "ToxicityZero Discord Bot",
    description:
      "A bot for helping reduce toxicity levels on Discord servers to zero.",
    detail:
      "Built with discord.js and TensorFlow.js for a Microsoft Learn Student Ambassadors session, and deployed on Azure App Services with continuous WebJobs so it stays up.",
    href: "https://tejasmorkar.github.io/toxicity-zero-discord-bot/",
    image:
      "https://tejasmorkar.github.io/toxicity-zero-discord-bot/assets/toxicity-zero-bot-working.gif",
    imageAlt: "ToxicityZero Discord bot in action",
  },
  {
    slug: "housing-price-prediction",
    title: "Housing Price Prediction with Streamlit",
    description:
      "A Streamlit web app that hosts a housing price prediction model you can tweak on the web itself. You can change the number of neurons, the learning rate and the epochs.",
    detail:
      "It's an exploratory tutorial on the California Housing Price dataset, with the model built using TensorFlow in Python.",
    image: "/images/projects/streamlit-housing.gif",
    imageAlt: "Streamlit housing price prediction app",
  },
  {
    slug: "cervical-cancer-detection",
    title: "Cervical Cancer Detection",
    description:
      "A deep learning based web platform for cervical cancer detection and patient-doctor interaction.",
    detail:
      "We achieved top in the class accuracy in classification of cervical cells in Pap smear images using transfer learning. Built with TensorFlow and deployed on GCP.",
  },
];
