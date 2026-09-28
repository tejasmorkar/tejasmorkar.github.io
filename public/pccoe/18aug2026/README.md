# System Design — OOM&SD Alumni Session
PCCOE Pune · 18 Aug 2026 · Tejas Morkar

## Run it
Open `index.html` — works by double-click (no server needed) or over HTTP.

## Publish to GitHub Pages
1. `git init && git add -A && git commit -m "deck"`
2. Push to a GitHub repo
3. Settings → Pages → Source: `main` / root
4. Live at `https://<user>.github.io/<repo>`

`.nojekyll` is present so `vendor/` is served as-is.

## Offline single file
`node build-single.js` → `dist/deck-offline.html` (everything inlined; email-safe).

## Keys
`→`/`Space` next step · `←` back · `↓`/`↑` skip whole slide
`o` overview grid · `g`+number+Enter jump to slide
`t` hide timer/counter · `r` reset timer · `f` fullscreen · `?` help
**`p` export every slide to PDF** (renders all diagrams, reveals every step, opens print dialog)

## Exporting
Press `p`, or use the button on the final slide. Choose **Save as PDF** and **Landscape**.
Anyone you share the page with can do the same — it is the handout version.

## Presenter mode  (press `s`)
Does two things at once:
1. The main window goes **sparse**: sub-headlines, footers, poll verdicts and the
   explanatory half of every bullet disappear. Only headlines, diagrams and cue words remain.
   **Share this window.**
2. A **presenter notes window** opens alongside it, showing the current slide in full:
   every line you would have read, the poll answer, what to say after the diagram,
   a step counter, the clock, and the next slide's headline. **Read from this one.**

Allow pop-ups the first time. Press `s` again to leave presenter mode and close the notes.
`index.html?present` starts sparse without opening the notes window.

**Serve it over HTTP** for presenter mode (`python3 -m http.server`, or GitHub Pages).

## Navigation
Arrow buttons sit bottom right. Clicking the slide body does nothing, so you can point
and gesture without jumping ahead.

## 96 slides
Many are 15-second beats (single statements, method-highlight slides). Use `o` and `g`
to skip live if you are behind schedule.

## Files
- `index.html` — engine, styles, keyboard, widgets
- `deck.js` — all slide content (edit this)
- `vendor/` — mermaid, js-yaml, swagger-ui (pinned, no CDN)
