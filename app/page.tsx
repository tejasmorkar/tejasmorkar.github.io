import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="font-mono text-sm text-accent">Tejas Morkar</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        I build and write about LLM-powered software.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        I&apos;m a software engineer at Cohesity, where I work on bringing
        LLMs into real products with RAG and agents. Before this, I was at
        Veritas building AI features with LangChain and Azure OpenAI. I live
        in Pune, India, and I&apos;m always up for a chat about code, coffee
        and MotoGP.
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
