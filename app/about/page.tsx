import type { Metadata } from "next";
import Link from "next/link";
import { TALKS } from "@/lib/talks";

export const metadata: Metadata = {
  title: "About",
  description: "Software engineer at Cohesity working on LLM features. Here's what I do and how I got here.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
        <p>
          I&apos;m a Software Engineer II (MTS II) at Cohesity. I work on
          Gaia, Cohesity&apos;s generative AI assistant that uses RAG and LLMs
          to give insights from enterprise backup data. My part of it is
          secure, private data integration for customers and letting people
          ask questions about their data in plain English.
        </p>

        <p>
          Before Cohesity, I was an Associate Software Engineer at Veritas for
          about two and a half years. One of the main things I built there was
          Alta Copilot, a multi-agent system on LangGraph with RAG, NL-to-SQL
          and decision-making agents. I implemented the LangGraph framework
          for it from scratch and also set up the LLMOps evaluation pipelines
          and observability. Apart from that, I worked on NetBackup and Alta
          View modules with Java and Spring Boot.
        </p>

        <p>
          I studied Computer Science at Pimpri Chinchwad College of
          Engineering (PCCoE), Pune, and graduated in 2022 with Honors in AI
          and Machine Learning. College is where I got into ML. I built a
          Conditional GAN that colors anime sketches, a Discord bot that
          catches toxic messages, and wrote about GANs and ML on Towards Data
          Science. I was also a Microsoft Learn Student Ambassador, Management
          Head at Google DSC PCCoE, Technical Head and Webmaster at the PCCoE
          ACM Student Chapter, and a technical author for ACM XRDS magazine.
        </p>

        <p>
          I still go back to PCCoE sometimes to take sessions for students. You
          can find the material from those sessions at{" "}
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
