---
description: Check that Tailwind is generating styles (catches the gitignore regression)
---

Verify the app's CSS is actually being generated and the design will render.

1. `ls -d .git` — must exist. If missing, `git init` (see
   `.claude/rules/styling/tailwind.md` for why).
2. `npm run build`, then `wc -c dist/assets/*.css`.
   - **Healthy:** ~100 kB+ of CSS.
   - **Broken:** ~9 kB (only a `.dark` rule, empty `@layer utilities`) — the
     parent `~/Rayvn/.gitignore` `*` is leaking into Oxide's scan because the
     git boundary is gone.
3. Optionally launch and screenshot to confirm visually (see `/run-app`).
4. Report the CSS size and whether styling is healthy. If broken, the fix is a
   local `.git` at the repo root — not editing `tailwind.css`.

$ARGUMENTS
