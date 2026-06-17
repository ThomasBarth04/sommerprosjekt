---
description: "TypeScript + React conventions for this codebase"
globs: ["**/*.{ts,tsx}"]
alwaysApply: false
---

# TypeScript & React

- **Function components only**, with typed props. No class components.
- **State lives in `store.tsx`.** Read and mutate shared state through
  `useStore()`. Add new fields to the `StoreValue` interface and the
  `StoreProvider` value together. Don't introduce a second global store or a
  state library — keep the single-context pattern.
- Local, view-only UI state (open/closed, form drafts) stays in `useState`
  inside the component.
- **Types:** keep domain types (`Module`, `SavedView`, `ChartType`,
  `GridLayout`, …) in `store.tsx` and import them; don't redeclare shapes.
- Prefer the `@/` alias for cross-directory imports; relative paths are fine
  within a feature folder.
- Match the existing idiom: the codebase uses light, readable TS — explicit
  interfaces for data, inferred types for locals. Avoid `any`.
- Keep components focused. When a file approaches a few hundred lines, split
  helpers/subcomponents into their own files.
- `src/imports/**` is generated from Figma (SVG path data, screenshots).
  **Do not hand-edit it** — re-export from Figma if it must change.
- After non-trivial changes, sanity-check the build: `npm run build`.
