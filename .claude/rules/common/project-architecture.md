---
description: "What this app is and how its code is organised"
globs: ["**/*"]
alwaysApply: true
---

# Project: Add Modules and Views Buttons

A single-page React app exported from **Figma Make** for **Rayvn**, an
emergency / incident-management product. It demonstrates two features bolted
onto a settings-style admin shell: **Modules** (reusable chart definitions)
and **Views** (drag-and-drop grids of modules that can be enabled as log
tools inside an active incident).

## Stack

- **Build:** Vite 6 (`npm run dev` / `npm run build`) — use **npm**, not pnpm,
  despite the `pnpm-workspace.yaml`. No `pnpm` is installed.
- **UI:** React 18 + TypeScript, function components only.
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`. See
  [`../styling/tailwind.md`](../styling/tailwind.md) — there is a critical gotcha.
- **Primitives:** shadcn/ui (Radix) in `src/app/components/ui/`, plus MUI,
  `recharts` (charts), `react-dnd` (drag-and-drop in Views).
- **State:** a single React Context store. **No Redux, no router-based data.**

## Directory map

```
src/
├── main.tsx                     # entry — mounts <App/>, imports styles/index.css
├── app/
│   ├── App.tsx                  # shell: sidebar + tab bar + tab routing (useState, no router)
│   ├── store.tsx                # StoreProvider + useStore() — all app state lives here
│   └── components/
│       ├── ModulesPanel.tsx     # "Modules" tab: list + create modules
│       ├── ModuleBuilderPage.tsx# create/edit a single module
│       ├── ViewsPanel.tsx       # "Views" tab: build grids of modules (react-dnd)
│       ├── IncidentView.tsx     # incident screen; enabled views appear as log tools
│       ├── charts.tsx           # recharts wrappers keyed by ChartType
│       ├── figma/               # Figma-provided helpers (ImageWithFallback)
│       └── ui/                  # shadcn/ui primitives — treat as vendored
├── imports/                     # AUTO-GENERATED from Figma (svg paths, screenshots) — do not hand-edit
└── styles/                      # index.css → fonts/tailwind/theme; theme.css holds design tokens
```

## Domain model (`src/app/store.tsx`)

- `Module` — `{ id, name, description, published, chartType, createdAt, dataSource }`.
  Only `published` modules are draggable into views (`publishedModules`).
- `ChartType` — `"bar" | "line" | "pie" | "area"`.
- `GridLayout` / `GRIDS` — supported view grids (`2x2`, `3x2`, `2x1`, `1x2`).
- `SavedView` — `{ id, name, grid, modules: (DroppedModule | null)[] }`. A null
  cell is an empty grid slot.
- `enabledViewIds` + `toggleViewEnabled` — which saved views are surfaced as log
  tools inside the active incident.

`useStore()` throws outside `<StoreProvider>`; the provider wraps the app in `App.tsx`.

## Conventions

- New screens/panels go in `src/app/components/`; share types and state through
  `store.tsx` rather than prop-drilling or adding new global stores.
- Import via the `@` alias (`@/...` → `src/`) where it reads cleanly.
- Keep components focused; the existing files are 90–580 lines — split before
  they grow much larger.
