# Agenify AI — Brand Guidelines

> AI-driven lead reactivation and speed-to-lead systems for Swedish digital marketing agencies.

**Version 1.0** · For human reference and AI tool input (Lovable, v0, Cursor, Claude, etc.)

---

## How to use this document

This document is the single source of truth for Agenify AI's visual and verbal identity. It is written to be pasted directly into AI builders. Every design decision is expressed as an explicit token or rule — no judgment calls required.

**For AI tools:** Paste the entire document, or just the *Quick Reference* and *AI Prompt Templates* sections, into your system prompt.

**For humans:** Read *Brand essence* first, then jump to what you need.

---

## 1. Brand at a glance

| | |
|---|---|
| **Name** | Agenify AI |
| **Domain** | agenifyai.com |
| **Positioning** | AI-driven lead reactivation and speed-to-lead systems for Swedish digital marketing agencies |
| **Audience** | Swedish digital agencies, 5–20 employees |
| **Core offer** | Wake dormant CRM leads, qualify them, and book meetings automatically |
| **Price band** | 15,000–25,000 SEK setup + 8,000–15,000 SEK/month |
| **Primary language** | Swedish (English as fallback) |
| **Brand feel** | Sharp, trustworthy, modern. Quietly technical. Zero fluff. |
| **Reference brands** | Attio, Relay.app, Linear |

---

## 2. Brand essence

### What we are
A specialist AI automation partner for Swedish digital marketing agencies. Not a generalist. Not a "do everything" AI consultancy. One problem, solved exceptionally well: leads that slip through the cracks.

### What we sound like
Direct. Specific. Swedish-first. We talk like a technical operator, not a marketer. We show math. We name the mechanism. We never oversell.

### What we are not
We are not a hype brand. We do not use "unlock", "transform", "journey", "empower", "seamless", "revolutionize", or "game-changer". We do not promise vague outcomes. We do not use emoji in professional copy.

### The one-sentence test
If a sentence could have been written by any of 500 other AI agencies, rewrite it. Specificity is the brand.

---

## 3. Color system

### Principle
Blue does the heavy lifting. Amber is hot sauce — a little transforms the dish, too much ruins it. Neutrals carry 80% of the surface area.

### Primary & accent

| Token | Hex | Use |
|---|---|---|
| `--color-primary` | `#3268B2` | Primary buttons, links, logo, focus rings |
| `--color-primary-hover` | `#2A5598` | Hover/pressed state for primary |
| `--color-primary-tint` | `#DCE8F5` | Soft backgrounds, selected states, pill bg |
| `--color-accent` | `#D4880C` | Highlights, badges, data accents, one-off CTAs |
| `--color-accent-hover` | `#B87509` | Hover state for amber |
| `--color-accent-tint` | `#FDF3E0` | Amber soft backgrounds |

### Neutrals

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#F2F5F9` | Page background, section fills |
| `--color-surface` | `#FFFFFF` | Cards, modals, inputs, elevated surfaces |
| `--color-border` | `#E5EAF1` | Card borders, input borders, dividers |
| `--color-border-strong` | `#C9D2DF` | Emphasized dividers, pressed input states |
| `--color-text` | `#1C2130` | Headlines, navigation, primary body text |
| `--color-text-muted` | `#7A8BA0` | Secondary text, captions, placeholders |
| `--color-text-subtle` | `#A8B4C5` | Tertiary text, disabled states |

**Never use `#000000` for text.** Always `#1C2130`. Pure black is harsher than it looks and reads as unrefined.

### Semantic

| Token | Hex | Use |
|---|---|---|
| `--color-success` | `#0E9F6E` | Success states, positive metrics |
| `--color-success-tint` | `#E3F5EC` | Success background |
| `--color-error` | `#D92D20` | Error states, destructive actions |
| `--color-error-tint` | `#FCE8E6` | Error background |
| `--color-warning` | `#D4880C` | Warnings (reuse accent amber) |
| `--color-warning-tint` | `#FDF3E0` | Warning background |
| `--color-info` | `#3268B2` | Info states (reuse primary blue) |
| `--color-info-tint` | `#DCE8F5` | Info background |

### Color pairing rules

- **DO** use `--color-text` on `--color-bg`, `--color-surface`, and `--color-primary-tint`.
- **DO** use `white` on `--color-primary`, `--color-accent`, `--color-text`, `--color-success`, `--color-error`.
- **DO NOT** put blue text on amber backgrounds or vice versa. The contrast is harsh.
- **DO NOT** stack three or more accent colors in one section.
- **DO NOT** use gradients, drop shadows, or glows. Use borders and background tints for elevation.

---

## 4. Typography

### Principle
Inter, one family. The scale is modern and ambitious — headlines are meant to be large and confident. Tight tracking on display, normal on body.

### Font

```
Font family: Inter
Source: Google Fonts (https://fonts.google.com/specimen/Inter)
Weights loaded: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
Fallback stack: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

For code, numbers in data tables, or technical specs, use `JetBrains Mono` (also Google Fonts, weights 400 and 500).

### Type scale (desktop)

| Role | Size | Line-height | Tracking | Weight | Use |
|---|---|---|---|---|---|
| Display | 72px | 1.05 | -0.03em | 700 Bold | Hero page headline (one per page max) |
| H1 | 56px | 1.1 | -0.025em | 700 Bold | Top of page headline |
| H2 | 40px | 1.15 | -0.02em | 700 Bold | Section headline |
| H3 | 28px | 1.2 | -0.02em | 600 SemiBold | Sub-section |
| H4 | 20px | 1.3 | -0.015em | 600 SemiBold | Card title, small section |
| Body Large | 18px | 1.6 | 0 | 400 Regular | Lead paragraph, hero subtitle |
| Body | 16px | 1.6 | 0 | 400 Regular | Standard paragraph |
| Small | 14px | 1.5 | 0 | 400 Regular | Captions, helper text |
| Micro | 12px | 1.4 | 0.01em | 500 Medium | Labels, tags, eyebrows |

### Mobile scaling
Scale down the top of the scale. Display → 48px, H1 → 40px, H2 → 32px, H3 → 24px. Body sizes stay the same.

### Rules
- **Never** use weights below 400. Agenify does not use Thin or Light — they feel fragile.
- **Never** use ALL CAPS except for Micro labels with `letter-spacing: 0.08em`.
- **Never** italicize Swedish words to "highlight" them. Use `--color-accent` or weight instead.
- **Do** use tight tracking (-0.025em) on all headlines. This is the single most consistent signal of brand quality.

---

## 5. Spacing & layout

### Principle
4px base grid. Everything aligns to a multiple of 4. Generous whitespace between sections — if in doubt, add more.

### Spacing tokens

| Token | Value | Typical use |
|---|---|---|
| `--space-1` | 4px | Icon-to-text gap, micro-padding |
| `--space-2` | 8px | Tight padding, badge internal spacing |
| `--space-3` | 12px | Button internal padding (vertical) |
| `--space-4` | 16px | Standard gap between form fields |
| `--space-5` | 24px | Card internal padding, paragraph spacing |
| `--space-6` | 32px | Gap between related components |
| `--space-7` | 48px | Gap between sub-sections |
| `--space-8` | 64px | Gap between major sections (mobile) |
| `--space-9` | 96px | Gap between major sections (desktop) |
| `--space-10` | 128px | Hero padding, extreme breathing room |

### Layout

- **Max container width:** 1200px, centered
- **Content column (prose):** max-width 680px for readability
- **Gutter (desktop):** 24px
- **Gutter (mobile):** 16px
- **Section vertical padding (desktop):** 96–128px
- **Section vertical padding (mobile):** 64–80px

---

## 6. Border radius & elevation

### Radius tokens

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Badges, tags, small inputs |
| `--radius-md` | 8px | Buttons, inputs, small cards |
| `--radius-lg` | 12px | Standard cards, panels |
| `--radius-xl` | 16px | Large feature cards, modals |
| `--radius-full` | 9999px | Pills, avatars, circular buttons |

### Elevation
Agenify does not use drop shadows. Ever. Elevation is communicated by:
1. Background color contrast (`--color-surface` on `--color-bg`)
2. 1px borders (`--color-border`)
3. Hairline color shifts on hover

The only exception: a subtle `box-shadow: 0 1px 2px rgba(28, 33, 48, 0.04)` may be used on floating menus (dropdowns, tooltips) and nowhere else.

---

## 7. Components

### Buttons

**Sizes:**
| Size | Height | Horizontal padding | Font size |
|---|---|---|---|
| sm | 32px | 12px | 14px |
| md (default) | 40px | 16px | 15px |
| lg | 48px | 20px | 16px |

**All buttons:**
- Font weight: 600 SemiBold
- Border radius: `--radius-md` (8px)
- Transition: all 120ms ease-out
- Focus ring: 2px `--color-primary` with 2px offset

**Primary:**
```
background: #3268B2
color: #FFFFFF
border: none
hover: background #2A5598
active: background #234780
```

**Secondary:**
```
background: #FFFFFF
color: #3268B2
border: 1px solid #3268B2
hover: background #DCE8F5
```

**Tertiary / Ghost:**
```
background: transparent
color: #1C2130
border: none
hover: background #F2F5F9
```

**Destructive:**
```
background: #D92D20
color: #FFFFFF
hover: background #B42318
```
Use sparingly. Only for irreversible destructive actions.

**Button rules:**
- Max one Primary button per section.
- Primary CTA should state the action plainly: "Boka ett samtal", "Läs mer", "Starta nu" — not "Click here" or "Submit".
- Button text never wraps. If it would, shorten the label.

### Inputs

```
height: 40px
padding: 8px 12px
background: #FFFFFF
border: 1px solid #E5EAF1
border-radius: 8px
font-size: 15px
color: #1C2130
placeholder color: #A8B4C5

focus:
  border: 1px solid #3268B2
  outline: 2px solid rgba(50, 104, 178, 0.2)
  outline-offset: 0

error:
  border: 1px solid #D92D20
  outline: 2px solid rgba(217, 45, 32, 0.15)
```

Labels go above the input, 14px, weight 500, color `--color-text`, 6px gap to the input.

### Cards

```
background: #FFFFFF
border: 1px solid #E5EAF1
border-radius: 12px
padding: 24px

hover (if interactive):
  border-color: #C9D2DF
  transition: border-color 120ms ease-out
```

### Badges

```
font-size: 12px
font-weight: 500
padding: 2px 8px
border-radius: 9999px
```

Variants use the semantic tint colors:
- Info: bg `#DCE8F5`, text `#234780`
- Success: bg `#E3F5EC`, text `#036B48`
- Warning: bg `#FDF3E0`, text `#8B5A06`
- Error: bg `#FCE8E6`, text `#9A1D13`
- Neutral: bg `#F2F5F9`, text `#1C2130`

### Dividers

1px solid `--color-border`. Full-width or content-width. Never gradients or dashed lines.

---

## 8. Iconography

- **Library:** [Lucide](https://lucide.dev). It's free, well-maintained, and matches the clean Inter aesthetic.
- **Sizes:** 16px (inline with body), 20px (buttons), 24px (section anchors), 32px (feature cards).
- **Stroke width:** 1.75 (Lucide default is 2 — 1.75 reads slightly more refined).
- **Color:** Inherit from surrounding text (`currentColor`). Brand accent only when the icon *is* the visual emphasis.
- **Never** use multicolor icons, 3D icons, or gradient-filled icons.

---

## 9. Voice & copy guidelines

### Tone principles

1. **Be specific.** "Vi svarar på nya leads inom 60 sekunder" beats "Snabb respons".
2. **Name the mechanism.** "AI-agent läser CRM, filtrerar efter senast kontakt, skickar personlig uppföljning" beats "Automatiserad uppföljning".
3. **Show the math.** "Den genomsnittliga byrån har 40% döda leads i sin CRM" beats "Många leads går förlorade".
4. **Cut the adjectives.** One modifier per noun, max. "Kraftfull, modern, intelligent plattform" → "Plattform".
5. **Swedish first.** Always write the Swedish first, translate to English only if needed.

### Banned words and phrases

| Instead of... | Use... |
|---|---|
| Unlock your potential | [delete entirely, name the outcome] |
| Transform your business | [delete entirely, name the mechanism] |
| Seamless integration | Fungerar med [tool name] |
| Cutting-edge | [delete — always a red flag] |
| Revolutionary | [delete — nothing is] |
| Empower your team | Spara [x] timmar i veckan |
| Game-changing | [delete] |
| Next-level | [delete] |
| Synergi | [delete — it is 1998] |
| Lösningar | [be specific — what solution?] |

### Preferred verbs

Prefer concrete, mechanical verbs: *väcker, kvalificerar, bokar, svarar, filtrerar, skickar, identifierar, följer upp*.

Avoid abstract verbs: *optimerar, förbättrar, förstärker, möjliggör, driver*.

### Capitalization

- Headlines: sentence case. "Stop losing leads to slow follow-up" — not "Stop Losing Leads To Slow Follow-Up".
- Product/feature names: capitalize only proper names (Agenify AI, CRM, HubSpot).
- Buttons: sentence case.

---

## 10. Copy examples

### Swedish headlines (approved)

- "Din CRM är full av leads som blev kalla. Vi väcker dem."
- "Svar inom 60 sekunder. Dygnet runt."
- "Sluta tappa affärer till långsam uppföljning."
- "AI som ringer CRM-arkivet — och bokar möten."

### Swedish body (approved)

> Genomsnittsbyrån i Sverige har mellan 30 och 50 procent döda leads i sin CRM — kontakter som en gång visat intresse men aldrig konverterade. Agenifys AI-agent läser hela listan, identifierar vilka som är värda att återuppta, och skickar personliga uppföljningar på svenska. Kvalificerade leads hamnar i din kalender. Resten tar vi bort.

### English equivalents (for international-facing copy only)

- "Your CRM is full of leads that went cold. We wake them up."
- "Response in under 60 seconds. Around the clock."
- "Stop losing deals to slow follow-up."

### CTAs

- Primary: **Boka ett samtal** / *Book a call*
- Secondary: **Se hur det fungerar** / *See how it works*
- Tertiary (in prose): "Läs mer →"

### Headlines to avoid (rewritten)

| ❌ Before | ✅ After |
|---|---|
| "Transform your agency with AI" | "AI som bokar dina möten medan du sover" |
| "Unlock the power of automation" | "Automatisering som tar bort 12 timmar av manuellt arbete i veckan" |
| "The future of lead generation is here" | "Dina döda leads är inte döda. De har bara inte hört från dig på 90 dagar." |

---

## 11. AI prompt templates

Paste these when briefing an AI builder.

### Full system prompt (paste at start of any AI design session)

```
You are designing for Agenify AI, a Swedish AI automation agency targeting digital marketing agencies with 5–20 employees. The offer is AI-driven lead reactivation.

Brand feel: sharp, trustworthy, modern. Quietly technical. Like Attio or Linear — not like a typical "AI agency" landing page.

Font: Inter from Google Fonts. Weights: 400, 500, 600, 700.
- Headlines: Bold 700, tight tracking -0.025em, large scale (H1: 56px, Display: 72px)
- Body: Regular 400, line-height 1.6, 16px

Colors:
- Primary: #3268B2 (blue — CTAs, links, brand)
- Primary hover: #2A5598
- Accent: #D4880C (amber — highlights and badges only, used sparingly)
- Background: #F2F5F9
- Surface: #FFFFFF
- Text: #1C2130 (never pure black)
- Muted text: #7A8BA0
- Border: #E5EAF1

Rules:
- No gradients, no drop shadows, no glows
- 4px grid spacing; sections get 96px vertical padding on desktop
- Border radius: 8px buttons/inputs, 12px cards, 16px large panels
- One primary CTA per section, max
- Amber only for accents (badges, highlights), never for primary buttons
- Generous whitespace

Voice: Swedish-first, direct, specific. No hype words. Show mechanics and numbers, not adjectives.
```

### Shorter prompt (for quick tasks)

```
Brand: Agenify AI. Font: Inter. Primary color: #3268B2 (blue). Accent: #D4880C (amber, sparingly). Background: #F2F5F9. Text: #1C2130. Clean, flat, no shadows or gradients. Tight letter-spacing on headlines. Generous whitespace. Inspired by Attio and Linear.
```

### Landing page brief

```
Build a landing page for Agenify AI following the brand guidelines above.

Structure:
1. Hero: H1 headline (56px), one-line subtitle, primary CTA "Boka ett samtal"
2. Problem section: 3 stats about dead leads in Swedish agencies
3. How it works: 3-step explanation with Lucide icons
4. Social proof: 2-3 testimonial cards
5. Pricing: 2 tiers, side by side
6. FAQ: 5-6 collapsible items
7. Footer: minimal — logo, 4 links, copyright

All copy in Swedish. Do not use any banned words from the brand guide.
```

---

## 12. Quick reference (design tokens)

Copy this block into a CSS file or Tailwind config.

```css
:root {
  /* Colors — primary */
  --color-primary: #3268B2;
  --color-primary-hover: #2A5598;
  --color-primary-tint: #DCE8F5;

  /* Colors — accent */
  --color-accent: #D4880C;
  --color-accent-hover: #B87509;
  --color-accent-tint: #FDF3E0;

  /* Colors — neutral */
  --color-bg: #F2F5F9;
  --color-surface: #FFFFFF;
  --color-border: #E5EAF1;
  --color-border-strong: #C9D2DF;
  --color-text: #1C2130;
  --color-text-muted: #7A8BA0;
  --color-text-subtle: #A8B4C5;

  /* Colors — semantic */
  --color-success: #0E9F6E;
  --color-success-tint: #E3F5EC;
  --color-error: #D92D20;
  --color-error-tint: #FCE8E6;
  --color-warning: #D4880C;
  --color-warning-tint: #FDF3E0;
  --color-info: #3268B2;
  --color-info-tint: #DCE8F5;

  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, Menlo, monospace;

  /* Spacing (4px grid) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 120ms ease-out;
  --transition-base: 200ms ease-out;
}
```

### Tailwind extension

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#3268B2', hover: '#2A5598', tint: '#DCE8F5' },
        accent: { DEFAULT: '#D4880C', hover: '#B87509', tint: '#FDF3E0' },
        surface: '#FFFFFF',
        bg: '#F2F5F9',
        border: { DEFAULT: '#E5EAF1', strong: '#C9D2DF' },
        text: { DEFAULT: '#1C2130', muted: '#7A8BA0', subtle: '#A8B4C5' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.025em',
        tight: '-0.02em',
      },
      borderRadius: {
        sm: '4px', md: '8px', lg: '12px', xl: '16px',
      },
    },
  },
};
```

---

## 13. Changelog

- **v1.0** (April 2026) — Initial release. Locked for 7-day launch sprint. Revisit after first 5 discovery calls.
