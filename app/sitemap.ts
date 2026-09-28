import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { NAV_LINKS } from "@/lib/nav";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["/", ...NAV_LINKS.map((link) => link.href), "/resume"].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
  }));

  // Posts republished from Medium are left out: their canonical URL is on Medium.
  const posts = (await getAllPosts())
    .filter((post) => !post.originalUrl)
    .map((post) => ({
      url: `${SITE_URL}/writing/${post.slug}`,
      lastModified: post.date,
    }));

  return [...pages, ...posts];
}
