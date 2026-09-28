# tejasmorkar.dev

Personal site, built with Next.js (App Router) + Tailwind CSS, deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

Copy `.env.local.example` to `.env.local` and fill in the contact-form env vars
(`RESEND_API_KEY`, `CONTACT_TO_EMAIL`) to test the contact form locally — without
them the form fails with a clear error instead of silently dropping submissions.

## Structure

- `app/` — routes (Home, About, Experience, Projects, Writing, Resume, Contact,
  plus an unlisted `/pccoe` archive for PCCoE session materials)
- `content/blog/*.mdx` — blog posts, each exporting a `meta` object. Posts
  republished from Medium set `originalUrl` and `publication`: the page links
  back to the original, its canonical URL points there, and it's left out of
  the sitemap. Their images live in `public/images/writing/<slug>/`.
- `lib/` — content data (experience, projects, talks) and blog helpers
- `public/pccoe/` — static session decks, served byte-for-byte at `/pccoe/...`

## Deploy

Hosted on Vercel with the custom domain `tejasmorkar.dev` (DNS points there, not
GitHub Pages). Push to `main` to deploy.

## Updating content

Experience, education, and skills live in `lib/experience.ts` and feed both the
Experience and Resume pages — keep them in sync with `public/resume.pdf`.

## Known follow-ups

- Contact form needs a [Resend](https://resend.com) account; set
  `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in Vercel's project env vars. The
  `from` address defaults to Resend's shared `onboarding@resend.dev` sender —
  verify your own domain in Resend to send as `@tejasmorkar.dev` instead.
