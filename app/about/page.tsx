import type { Metadata } from "next";
import Link from "next/link";
import { TALKS } from "@/lib/talks";

export const metadata: Metadata = {
  title: "About",
  description: "Software engineer working on LLM feature integration, and how I got here.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
        <p>
          I&apos;m a Software Engineer II at Cohesity, where I work on
          integrating LLMs into the product — RAG pipelines, agentic
          workflows, and the unglamorous plumbing that makes a language model
          actually useful inside a real application. Right now that means
          Gaia, Cohesity&apos;s generative AI assistant for enterprise backup
          data.
        </p>

        <p>
          Before that, I spent two and a half years at Veritas as an
          Associate Software Engineer. I built Alta Copilot, a multi-agent
          system on LangGraph with RAG, NL-to-SQL, and decision-making
          agents, along with the LLMOps evaluation and observability around
          it, and did Java and Spring Boot work on NetBackup and Alta View.
        </p>

        <p>
          Before any of that, I was a student at Pimpri Chinchwad College of
          Engineering in Pune, deep in machine learning for its own sake. I
          built a Conditional GAN that turns sketches into colored art,
          trained a Discord bot to catch toxic messages before they spread,
          and spent a lot of nights in Kaggle notebooks. I ran technical
          events and mentored other students through Microsoft Learn Student
          Ambassadors, DSC PCCoE, and the PCCoE ACM Student Chapter, and
          edited for ACM&apos;s XRDS magazine. None of that is current — it&apos;s
          where the habit of building things and explaining them came from.
        </p>

        <p>
          I still go back occasionally to guest-lecture for students in my
          old department at PCCoE. Session materials live at{" "}
          <Link href="/pccoe" className="text-accent hover:underline">
            /pccoe
          </Link>
          .
        </p>
      </div>

      <h2 className="mt-14 text-lg font-semibold tracking-tight">
        Selected talks
      </h2>
      <ul className="mt-6 space-y-6">
        {TALKS.map((talk) => (
          <li key={talk.title} className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <a
                href={talk.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground transition-colors hover:text-accent"
              >
                {talk.title}
              </a>
              <span className="font-mono text-xs text-muted">{talk.date}</span>
            </div>
            {talk.venue && <p className="text-xs text-muted">{talk.venue}</p>}
            <p className="text-sm text-muted">{talk.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
