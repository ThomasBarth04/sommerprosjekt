---
description: Install deps if needed and start the Vite dev server, then verify it renders styled
---

Run this app and confirm it actually renders with styles.

1. If `node_modules/` is missing, run `npm i`.
2. Confirm `.git` exists at the repo root (`ls -d .git`). If it does not,
   run `git init` — without it Tailwind generates no styles (see
   `.claude/rules/styling/tailwind.md`).
3. Start the dev server in the background: `npm run dev` (serves on
   http://localhost:5173/).
4. Verify it renders **styled**, not raw HTML — screenshot it headless:
   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
     --headless --disable-gpu --screenshot=/tmp/app.png \
     --window-size=1400,900 --virtual-time-budget=6000 http://localhost:5173/
   ```
   Read `/tmp/app.png`. Expect a dark teal sidebar, an icon tab bar
   (Users … Modules, Views) and styled cards. A plain unstyled page means the
   Tailwind gitignore regression — see the styling rule.
5. Report the local URL and what you saw.

$ARGUMENTS
