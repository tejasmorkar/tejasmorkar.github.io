import type { Metadata } from "next";
import { ROLES, EDUCATION, SKILLS } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Resume",
  description: "Tejas Morkar's resume.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Tejas Morkar
        </h1>
        <a
          href="/resume.pdf"
          className="rounded-md border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Download PDF
        </a>
      </div>
      <p className="mt-2 text-sm text-muted">
        Software Engineer III at Cohesity
      </p>

      <section className="mt-10">
        <h2 className="text-xs font-semibold tracking-wide text-muted uppercase">
          Experience
        </h2>
        <div className="mt-4 space-y-8">
          {ROLES.map((role) => (
            <div key={role.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-medium text-foreground">
                  {role.title} · {role.company}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {role.dateRange}
                </span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted">
                {[role.summary, ...role.bullets].map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-semibold tracking-wide text-muted uppercase">
          Education
        </h2>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-3">
          <h3 className="font-medium text-foreground">{EDUCATION.school}</h3>
          <span className="font-mono text-xs text-muted">
            {EDUCATION.dateRange}
          </span>
        </div>
        <p className="text-sm text-muted">{EDUCATION.degree}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-semibold tracking-wide text-muted uppercase">
          Skills
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {SKILLS.join(" · ")}
        </p>
      </section>
    </div>
  );
}
