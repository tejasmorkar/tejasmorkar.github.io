import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tejasmorkar.github.io",
      },
    ],
  },
  // Next's default trailing-slash redirect always strips the slash, which we
  // need to keep for /pccoe/<slug>/ so the deck's *relative* asset paths
  // (vendor/..., deck.js) resolve against the right directory in the browser.
  // The no-slash -> slash redirect itself is handled in proxy.ts, since
  // Next's config-level route matching treats a trailing slash as optional
  // and a redirect rule defined here loops on the already-slashed request.
  skipTrailingSlashRedirect: true,
  async redirects() {
    // URLs from the old static site (and the GitHub project pages it used to
    // serve under this domain) that are still linked from elsewhere.
    return [
      {
        source: "/:repo(sketch-to-color|toxicity-zero-discord-bot|sudoku-solver)/:path*",
        destination: "https://tejasmorkar.github.io/:repo/:path*",
        permanent: true,
      },
      {
        source: "/assets/presentations/:file",
        destination: "/documents/presentations/:file",
        permanent: true,
      },
      {
        source: "/assets/SocialPreviews-tejasmorkar.png",
        destination: "/opengraph-image",
        permanent: true,
      },
      {
        source: "/end-to-end-ai-discord-bot/:path*",
        destination: "/documents/presentations/end-to-end-ai-discord-bot.pdf",
        permanent: true,
      },
      {
        source: "/pages/courses-and-achievements/:path*",
        destination: "/experience",
        permanent: true,
      },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
  async rewrites() {
    // Static sessions live at public/pccoe/<slug>/index.html. Next's public/
    // file serving is exact-path only (no directory-index resolution), so the
    // trailing-slash URL needs an explicit rewrite to the real file.
    return [{ source: "/pccoe/:slug/", destination: "/pccoe/:slug/index.html" }];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
