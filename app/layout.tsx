import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://tejasmorkar.dev";
const DESCRIPTION =
  "I build and write about LLM-powered software. Software engineer working on AI/LLM feature integration, with notes on RAG, agentic systems, and shipping ML in production.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tejas Morkar",
    template: "%s — Tejas Morkar",
  },
  description: DESCRIPTION,
  keywords: [
    "Tejas Morkar",
    "software engineer",
    "LLM engineering",
    "RAG",
    "agentic AI",
    "machine learning",
  ],
  authors: [{ name: "Tejas Morkar" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Tejas Morkar",
    description: DESCRIPTION,
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Morkar",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
