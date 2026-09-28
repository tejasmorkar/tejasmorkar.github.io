import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="font-mono text-sm text-accent">Tejas Morkar</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        Software engineer with a strong interest in deep learning.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        I am a Software Engineer III at Cohesity, working on Gaia, a generative
        AI assistant built on RAG and LLMs. Before this, I spent two and a half
        years building AI-driven features for enterprise data protection. I am
        interested in deep learning broadly, from GANs to large language models.
        I&apos;m always up for a chat about code, coffee and MotoGP.
      </p>

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/about"
          className="rounded-md bg-accent px-4 py-2 font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          About me
        </Link>
        <Link
          href="/projects"
          className="rounded-md border border-border px-4 py-2 font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Projects
        </Link>
        <Link
          href="/writing"
          className="rounded-md border border-border px-4 py-2 font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Writing
        </Link>
      </div>
    </div>
  );
}
