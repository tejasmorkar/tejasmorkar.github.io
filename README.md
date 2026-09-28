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
- `content/blog/*.mdx` — blog posts, each exporting a `meta` object
- `lib/` — content data (experience, projects, talks) and blog helpers
- `public/pccoe/` — static session decks, served byte-for-byte at `/pccoe/...`

## Deploy

Hosted on Vercel with the custom domain `tejasmorkar.dev` (DNS points there, not
GitHub Pages). Push to `master` to deploy.

## Known follow-ups

- Several facts in `lib/experience.ts` and `app/about/page.tsx` are marked
  `[VERIFY]` — pulled from the public GitHub profile since LinkedIn couldn't be
  scraped. Confirm dates and fill in the Veritas details.
- `public/resume.pdf` doesn't exist yet — add the real file for the Resume
  page's download button to work.
- Contact form needs a [Resend](https://resend.com) account; set
  `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in Vercel's project env vars. The
  `from` address defaults to Resend's shared `onboarding@resend.dev` sender —
  verify your own domain in Resend to send as `@tejasmorkar.dev` instead.
