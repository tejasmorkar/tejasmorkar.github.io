import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles on machine learning, GANs and LLMs, from my Towards Data Science posts to new notes on RAG and agents.",
};

export default async function WritingPage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Writing</h1>

      {posts.length === 0 ? (
        <p className="mt-6 text-sm text-muted">Nothing here yet.</p>
      ) : (
        <ul className="mt-10 space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="font-medium text-foreground transition-colors hover:text-accent"
              >
                {post.title}
              </Link>
              <p className="mt-1 font-mono text-xs text-muted">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {post.publication && ` · ${post.publication}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {post.summary}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
