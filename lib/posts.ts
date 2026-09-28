import fs from "node:fs";
import path from "node:path";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  title: string;
  date: string;
  summary: string;
};

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPostMeta(slug: string): Promise<PostMeta> {
  const post = await import(`@/content/blog/${slug}.mdx`);
  return post.meta as PostMeta;
}

export async function getAllPosts(): Promise<(PostMeta & { slug: string })[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => ({ slug, ...(await getPostMeta(slug)) })),
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
