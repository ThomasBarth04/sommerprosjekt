---
name: verify-design
description: Confirm Tailwind utilities are generated and the app renders styled. Use after styling/build changes, when the app looks unstyled, or before handing off. Catches the parent-gitignore Oxide regression specific to this repo.
---

# Verify design / styling health

This app has a known failure mode: it renders as raw unstyled HTML when
Tailwind's Oxide scanner finds no class candidates. Root cause is the parent
`~/Rayvn/.gitignore` containing `*`, which Oxide honours unless this project
has its own `.git` boundary. Full background:
`.claude/rules/styling/tailwind.md`.

## Steps

1. **Git boundary present?**
   ```bash
   ls -d .git || git init
   ```
2. **CSS actually generated?**
   ```bash
   npm run build && wc -c dist/assets/*.css
   ```
   - Healthy: ~100 kB+.
   - Broken: ~9 kB → the git boundary is missing/ineffective.
   Deeper probe — count utility rules:
   ```bash
   grep -oc '\.flex\|\.px-\|\.bg-\|\.grid\|\.items-\|\.rounded' dist/assets/*.css
   ```
   Healthy is dozens+; broken is 0.
3. **Renders styled?** Start `npm run dev` (background) and screenshot:
   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
     --headless --disable-gpu --screenshot=/tmp/app.png \
     --window-size=1400,900 --virtual-time-budget=6000 http://localhost:5173/
   ```
   Read `/tmp/app.png`: expect dark teal sidebar, icon tab bar, styled cards.

## If broken

The fix is the local `.git` directory — **do not** edit `src/styles/tailwind.css`
(it's the correct Figma Make default) and **do not** delete the parent gitignore
(outside this repo) unless the user explicitly asks.
