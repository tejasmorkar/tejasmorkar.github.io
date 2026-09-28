import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal and open-source projects.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-4 max-w-xl text-sm text-muted">
        Personal and open-source work — not what I ship at my day job.
      </p>

      <div className="mt-10 space-y-14">
        {PROJECTS.map((project) => (
          <article key={project.slug} className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <h2 className="font-medium text-foreground">{project.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.detail}
              </p>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
                >
                  View project &rarr;
                </a>
              )}
            </div>
            {project.image &&
              (project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full overflow-hidden rounded-lg border border-border sm:w-56"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </a>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full rounded-lg border border-border object-cover sm:w-56"
                />
              ))}
          </article>
        ))}
      </div>
    </div>
  );
}
