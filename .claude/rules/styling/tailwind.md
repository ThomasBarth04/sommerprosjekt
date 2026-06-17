---
description: "Tailwind v4 setup, the gitignore gotcha, and styling conventions"
globs: ["**/*.{tsx,jsx,css}"]
alwaysApply: true
---

# Styling — Tailwind CSS v4

## ⚠️ The gitignore gotcha (read before debugging "no styles")

**Symptom:** the app renders as raw unstyled HTML; the built CSS is tiny
(~9 kB, only a `.dark` rule) and `@layer utilities;` is empty.

**Cause:** the parent folder `~/Rayvn/.gitignore` contains a catch-all `*`
(auto-created by a stray Python venv). Tailwind v4's Oxide scanner walks **up**
the directory tree and respects parent `.gitignore` files. With no git boundary
in this project, that `*` makes Oxide treat every `src/**` file as ignored, so
it finds **zero** class candidates and generates no utilities.

**Fix (already applied):** this project has its **own `.git` directory** at the
repo root. That git boundary stops Oxide from reading the parent's `*` rule.

- **Do NOT delete `.git`.** Removing it brings the bug straight back.
- A healthy build is **~100 kB+ of CSS** with thousands of scan candidates.
- Quick check after styling changes:
  ```bash
  npm run build && wc -c dist/assets/*.css   # expect ~100kB, not ~9kB
  ```
- The stray `~/Rayvn/.gitignore` is outside this repo; leave it alone unless
  the user asks. The local `.git` is the contained fix.

## CSS structure

- `src/styles/index.css` imports, in order: `fonts.css`, `tailwind.css`, `theme.css`.
- `tailwind.css` is the Figma Make standard: `@import 'tailwindcss' source(none);`
  followed by `@source '../**/*.{js,ts,jsx,tsx}';`. **Leave it as-is** — the file
  was never the problem; the git boundary is what makes the `@source` scan work.
- `theme.css` holds the design tokens (CSS variables: `--primary`, `--background`,
  `--sidebar`, `--chart-1..5`, `--radius`, etc.) and the `.dark` overrides.

## Conventions

- Style with Tailwind utility classes; pull semantic colours from theme tokens
  (`bg-background`, `text-foreground`, `border-border`) rather than hardcoding hex
  where a token exists. Note the Figma export does use literal hex in places
  (e.g. the sidebar `bg-[#123236]`) — match the surrounding file's style.
- Prefer flexbox/grid and responsive layouts over absolute positioning.
- Reuse `src/app/components/ui/` primitives instead of restyling raw elements.
- Class lists must be statically analysable — Oxide only sees literal class
  strings, so avoid runtime-concatenated class names (`` `bg-${x}` ``).
