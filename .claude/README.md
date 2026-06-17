# `.claude/` — project configuration

Layout based on the [Everything Claude Code](https://github.com/affaan-m/everything-claude-code)
(ECC) structure, scoped to this repo.

```
.claude/
├── README.md            # this file
├── settings.local.json  # personal, machine-local settings (permissions, etc.)
├── agents/              # delegated subagents (markdown + YAML frontmatter)
│   ├── component-builder.md
│   └── ui-design-reviewer.md
├── commands/            # slash commands (/add-module, /run-app, /verify-design)
│   ├── add-module.md
│   ├── run-app.md
│   └── verify-design.md
├── rules/               # always-follow guidelines, grouped by domain
│   ├── common/
│   │   ├── project-architecture.md
│   │   └── figma-make.md
│   ├── typescript/
│   │   └── react.md
│   └── styling/
│       └── tailwind.md
└── skills/
    └── verify-design/SKILL.md
```

## How the pieces fit (ECC model)

- **Rules** are always-follow guidelines, kept modular. Start in
  `rules/common/project-architecture.md`.
- **Agents** are subagents that handle delegated, scoped tasks.
- **Commands** are slash commands you invoke directly.
- **Skills** are reusable workflows invoked by commands or agents.

Like ECC, this repo ships **no shared `settings.json`** — permissions and hooks
are configured per machine in `settings.local.json` (git-ignored).

## ⚠️ Read this first

This project will render **completely unstyled** unless its own `.git`
directory exists at the repo root. The parent folder `~/Rayvn/.gitignore`
contains a catch-all `*` (created by a stray Python venv); Tailwind v4's
Oxide scanner walks up the tree and honours it, so without a local git
boundary it treats every source file as ignored and generates zero utility
classes. **Do not delete `.git`.** Full detail in
[`rules/styling/tailwind.md`](rules/styling/tailwind.md).
