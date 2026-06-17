---
description: Add a new Module (chart definition) end-to-end, wiring it through the store and UI
---

Add a new **Module** to the app. A Module is a reusable chart definition; only
published modules can be dropped into Views.

Read `.claude/rules/common/project-architecture.md` first, then:

1. **Type/data:** a `Module` is `{ id, name, description, published,
   chartType, createdAt, dataSource }` in `src/app/store.tsx`. If the request
   needs a new `ChartType`, extend the union there and add a matching renderer
   in `src/app/components/charts.tsx`.
2. **Creation flow:** modules are created via `ModuleBuilderPage.tsx` and added
   to the store with `addModule(...)`; existing ones use `updateModule(...)`.
   Reuse that flow rather than mutating seed data.
3. **Listing:** `ModulesPanel.tsx` renders the Modules tab. Published modules
   feed `publishedModules`, which `ViewsPanel.tsx` exposes for drag-and-drop.
4. Use `src/app/components/ui/` primitives and theme tokens for any new UI.
5. Build (`npm run build`) and, if it's a visible change, screenshot to verify
   (see `/run-app`).

Module to add (name / chart type / description / data source, as given):
$ARGUMENTS
