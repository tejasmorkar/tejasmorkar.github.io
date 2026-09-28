import type { Metadata } from "next";
import { ROLES, EDUCATION, SKILLS } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work history, education, and the tools I reach for.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Experience</h1>

      <ol className="mt-10 space-y-10">
        {ROLES.map((role) => (
          <li key={role.company} className="border-l border-border pl-6">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h2 className="font-medium text-foreground">
                {role.title} · {role.company}
              </h2>
            </div>
            <p className="mt-1 font-mono text-xs text-muted">
              {role.dateRange} · {role.location}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {role.summary}
            </p>
            {role.bullets.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <li className="border-l border-border pl-6">
          <h2 className="font-medium text-foreground">{EDUCATION.school}</h2>
          <p className="mt-1 text-sm text-muted">{EDUCATION.degree}</p>
          <p className="mt-1 font-mono text-xs text-muted">
            {EDUCATION.dateRange}
          </p>
        </li>
      </ol>

      <h2 className="mt-14 text-lg font-semibold tracking-tight">Skills</h2>
      <ul className="mt-5 flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
