import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostSlugs, type PostMeta } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await import(`@/content/blog/${slug}.mdx`);
    const meta = post.meta as PostMeta;
    return {
      title: meta.title,
      description: meta.summary,
      // Republished posts point search engines at the original.
      alternates: { canonical: meta.originalUrl ?? `/writing/${slug}` },
    };
  } catch {
    return { title: "Not found" };
  }
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;

  let Post;
  let meta: PostMeta;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    Post = mod.default;
    meta = mod.meta;
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-xs text-muted">
        {new Date(meta.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">
        {meta.title}
      </h1>
      {meta.originalUrl && (
        <p className="mt-3 text-sm text-muted">
          Originally published
          {meta.publication && ` in ${meta.publication}`} on{" "}
          <a
            href={meta.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Medium
          </a>
          .
        </p>
      )}
      <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none prose-p:leading-relaxed prose-img:rounded-lg">
        <Post />
      </div>
    </article>
  );
}
