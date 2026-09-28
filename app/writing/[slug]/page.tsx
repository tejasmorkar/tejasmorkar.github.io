import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await import(`@/content/blog/${slug}.mdx`);
    return {
      title: post.meta.title,
      description: post.meta.summary,
    };
  } catch {
    return { title: "Not found" };
  }
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;

  let Post;
  let meta;
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
      <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none prose-p:leading-relaxed">
        <Post />
      </div>
    </article>
  );
}
