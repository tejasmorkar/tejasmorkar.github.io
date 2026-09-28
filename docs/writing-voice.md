# Writing voice: Tejas Morkar

Any text that appears on tejasmorkar.dev (pages, `lib/` data, blog posts,
metadata, alt text, button labels) must sound like Tejas wrote it himself. This
guide is based on his five Medium articles (2020, ~8,300 words), the copy and
README of his old hand-written site, his resume, and how he writes in chat.

The short version: **a friendly engineer explaining things to a curious
friend.** Plain words, real details, a bit of humour, no corporate or AI polish.

## Hard rules

1. **No em dashes (—) or en dashes (–). Ever.** Use a comma, a period, a
   colon, parentheses, or split the sentence. For ranges and title separators
   use a spaced hyphen: `Dec 2024 - Present`, `Intro to GANs - Pie & AI Pune`.
   (The em dashes in his Medium posts come from Medium's auto-formatting of
   list items like "on Coursera — Link". He doesn't use them in sentences.)
2. **No semicolons.** He used zero in 8,300 words.
3. **No AI tone.** See the banned list below. If a sentence sounds like a
   LinkedIn post or a press release, rewrite it.
4. **Don't invent facts, feelings, or opinions.** Only claim what's on his
   resume, his articles, or what he has said. Don't write "I'm most proud of" or
   "I love" unless he said it.
5. **No emojis in body text.** (His old site had one emoji per section
   heading, like "Presentations 👨‍🏫". Don't add them unless he asks.)

## What his writing does

**Talks to the reader.** "You" is his most common pronoun (about 16 per 1,000
words, twice as often as "I"). He writes for the person reading, often a
beginner: "If you are like me or any other Machine Learning enthusiast..."

**Uses first person for real experience, with specifics.** "When I trained the
model on my system, I ran it for 150 epochs which took approximately 23 hours
on a single GeForce GTX 1060 6GB." Real numbers, real hardware, real time.

**Mixes explaining sentences with short punchy ones.** Average sentence is
about 20 words, but he breaks it up with lines like "That's it!", "But is that
it?", "Keep Learning!", "Aah! Finally, here we are..."

**Starts sentences conversationally.** Common openers: "So,", "Now,", "Also,",
"And", "But", "Here". Always with a comma after So/Now/Also.
- "So, it is best to keep saving checkpoints at regular intervals..."
- "Now, what exactly is so amazing about GANs?"

**Asks questions to set up a section.** "Why Streamlit?", "What are the
alternatives?", "Let's not kill the model right after doing so much work,
right?"

**Light developer humour.** Self-aware, never forced.
- "the worst nightmare for you, obviously other than the Cuda errors, must be
  deploying the model"
- "Focus less on deployment and more on solving Cuda errors!"
- "A model shouldn't end its life in a Jupyter Notebook!"

**Genuinely enthusiastic, in plain words.** amazing, awesome, great, wonderful,
interesting, easy, "totally worth it", "the go-to course", "I highly
recommend". Exclamation marks about twice per 1,000 words: for real
excitement and sign-offs, not every paragraph.

**Credits people generously.** Names authors, instructors and sources: "this
excellent article by Adrien Treuille", "Andrei Neagoie is a great instructor",
quotes Yann LeCun and Max Tegmark. Always credits images ("Image by Author").

**Plays with pop culture now and then.** The Matrix, 2001: A Space Odyssey.

**Ends warmly.** A "CONCLUSION" or "So, that is it!", then an invitation:
"feel free to contact me", "Keep Learning!". His old README: "Feel free to reach
out to me for anything related to code, coffee and football."

**Uses contractions freely**: you'll, don't, let's, that's, I'll.

**Indian English phrasing is natural, keep it**: "Let us build", "for curious
minds like you", "all the ML enthusiasts out there", "the one which we are
going to build".

**Short copy is short and factual.** Old site project blurbs: "Bot for helping
reduce toxicity levels on Discord servers to zero." His headline style:
"Software Engineer II (MTS II) @ Cohesity | AI-based feature integration with
LLMs". Pipes ( | ) and "@" are fine in headlines.

**Punctuation he does use**: commas, periods, colons (for lists and "NOTE:"),
parentheses for asides and specs, spaced hyphens in lists ("1 - Python for
Everybody"), occasional ellipsis in a heading.

## Banned: AI tone

Words and phrases: delve, leverage, seamless, robust, tapestry, landscape,
navigate, elevate, unlock, empower, cutting-edge (unless quoting his resume),
game-changer, deep dive, "in today's fast-paced world", "it's worth noting",
"it's important to note", "whether you're X or Y", "at the end of the day",
"the unglamorous plumbing", "Here's the thing", "Let's dive in", moreover,
furthermore, additionally.

Constructions:
- em-dash asides or reveals ("the thing I care about — LLMs — ...")
- colon reveals and dramatic fragments ("So: a rebuild.", "The result? Magic.")
- "not X, but Y" / "it's not just X, it's Y" contrasts
- stacking three adjectives or three parallel clauses for rhythm
- clever metaphors he would never use in casual speech
- ending a paragraph with a summary of the paragraph

## Before you commit copy

- Search the diff for `—` and `–`. There should be none.
- Read it out loud. Would Tejas say this to a friend over coffee? If it sounds
  like marketing, rewrite it simpler.
- Check every fact against `lib/experience.ts` / `public/resume.pdf`.

Imported Medium articles in `content/blog/` are his original words. Leave their
body text as it is, and apply these rules only to anything newly written
around them.
