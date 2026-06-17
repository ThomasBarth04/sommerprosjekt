---
description: "Figma Make export conventions — what not to break"
globs: ["vite.config.ts", "src/imports/**", "src/styles/**", "index.html"]
alwaysApply: false
---

# Figma Make export conventions

This repo is a code bundle exported from Figma Make
(original design: figma.com/design/TEsu3ie3LxRbdJUKCt7sOw). A few things are
load-bearing for the Make toolchain — don't "tidy" them away:

- **`vite.config.ts`** keeps both `react()` and `tailwindcss()` plugins, and a
  `figmaAssetResolver` that maps `figma:asset/<file>` imports to `src/assets/`.
  The inline comment says the React + Tailwind plugins are required for Make
  "even if Tailwind is not being actively used — do not remove them." Honour that.
- **`assetsInclude`** is restricted to `**/*.svg` and `**/*.csv`. The comment
  warns: never add `.css`, `.tsx`, or `.ts` there.
- **`src/imports/`** is generated (SVG path data like `svg-6vze7hckkw.ts`,
  screenshots). Treat as read-only output, not source.
- **`@` alias** → `src/` is defined in `vite.config.ts`.
- A `{/* MARKER-MAKE-KIT-INVOKED */}` marker sits at the top of `App.tsx`; it's a
  Make breadcrumb — leave it.

When in doubt, prefer additive changes in `src/app/**` over editing exported
scaffolding.
