# CLAUDE.md — Agenify AI (Next.js 16 + App Router)

## Project Stack
- **Framework:** Next.js 16 (App Router, Turbopack, React 19) — see [package.json](package.json)
- **Language:** TypeScript (strict: false), `@/*` path alias maps to repo root
- **Styling:** plain CSS variables in [app/globals.css](app/globals.css) — no Tailwind, no CSS-in-JS lib (inline `style={}` props on JSX). All design tokens live as `--color-*`, `--font-*`, `--space-*`, `--radius-*`.
- **Icons:** `lucide-react` via the [components/Icon.tsx](components/Icon.tsx) wrapper that keeps the original `<Icon name="arrow-right" />` API
- **Rendering:** SSG — every route is `○ (Static) prerendered as static content`. Do not introduce dynamic data fetching, `cookies()`, `headers()`, or `force-dynamic` unless a route genuinely needs it.
- **Form submission:** [components/Site.tsx](components/Site.tsx) `LeadForm` posts to a Google Apps Script webhook (`LEADS_WEBHOOK_URL`) using `mode: "no-cors"`. Do not refactor this to a server action without coordinating — the receiving Sheet expects `text/plain` with a JSON body.
- **Hosting:** Vercel. No `vercel.json` — defaults are correct.

## File Layout
```
app/
  layout.tsx     SEO metadata (OG, Twitter, robots, canonical, themeColor), html lang="sv"
  page.tsx       server component, renders <Site />
  globals.css    design tokens + component classes + media queries
components/
  Site.tsx       full site as one client component (uses useState for tabs, FAQ, form, calc)
  Icon.tsx       lucide-react wrapper
public/assets/   logos, edvin.jpg, client logos — referenced as /assets/...
brand_assets/    brand guidelines markdown (reference only)
```

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Dev Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` — serves at `http://localhost:3000` (auto-bumps to 3001+ if 3000 is busy).
- If the server is already running, do not start a second instance. Hot-reload picks up edits to `app/`, `components/`, and `app/globals.css` automatically.
- For a production-fidelity check: `npm run build && npm start` (defaults to port 3000).

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Editing Conventions
- **All UI lives in [components/Site.tsx](components/Site.tsx).** Section components (`Hero`, `Problem`, `Report`, `Bonus`, `Process`, `ForWhom`, `AboutMe`, `Portfolio`, `Faq`, `LeadForm`, `Footer`) compose into the `Site` default export.
- The whole tree is a single `"use client"` component because most sections use `useState`. Splitting interactive bits into separate client components is fine, but keep server vs. client boundaries explicit.
- Use design tokens (`var(--color-primary)`, etc.) — do not hardcode hex except where the original code already does inside dark workflow mocks.
- Mobile breakpoints (`@media (max-width: 720px|900px|600px)`) are centralized in [app/globals.css](app/globals.css). Add new ones there, not as inline media queries.
- Asset paths are absolute: `/assets/logo.svg`, `/assets/clients/...`. Files live in `public/assets/`.

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Use the existing `--color-primary` (#3268B2) / `--color-accent` (#D4880C) system. Never introduce default Tailwind palette colors (we don't ship Tailwind, but the rule still holds for hand-picked hex).
- **Shadows:** Agenify uses no drop shadows by rule (see [app/globals.css](app/globals.css) `--shadow-menu` is reserved for floating menus only). Don't add `box-shadow` casually.
- **Typography:** Inter for sans, JetBrains Mono for mono. Tight tracking (`-0.03em`) on large headings, line-height 1.6+ on body.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use 120ms ease-out for fast hovers, 200ms for base.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. The global `button:focus-visible` rule already supplies the outline — preserve it.
- **Spacing:** Use the `--space-*` tokens (4-px grid: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128) — don't sprinkle random px values.
- **Depth:** Surfaces have a layering system (`--color-bg` → `--color-surface` → elevated). Don't flatten everything.

## Hard Rules
- Do not add sections, features, or copy that the user didn't ask for. The site copy is finalized — only change it on explicit instruction.
- Do not "improve" the design — match what's there.
- Do not stop after one screenshot pass when iterating on visuals.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color (we don't have Tailwind, but if you reach for one, stop).
- Do not change the form webhook URL or its `no-cors` text/plain payload shape — the Google Sheet parses that exact format.
- Do not introduce client-side data fetching libraries (SWR, React Query, etc.) — the site is fully static.
