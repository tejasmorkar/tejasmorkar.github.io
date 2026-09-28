import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE_URL, SITE_DESCRIPTION as DESCRIPTION } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tejas Morkar",
    template: "%s | Tejas Morkar",
  },
  description: DESCRIPTION,
  keywords: [
    "Tejas Morkar",
    "software engineer",
    "deep learning",
    "machine learning",
    "LLMs",
    "GANs",
  ],
  authors: [{ name: "Tejas Morkar" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Tejas Morkar",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Morkar",
    description: DESCRIPTION,
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
