# Handoff: Savanna Springs Water Solutions — Marketing Website

## Overview
A complete marketing website for **Savanna Springs Water Solutions** — a family-owned water-treatment company serving Northeast Ohio & Western PA. The site is organized around the customer's *problem* (smelly, hard, rusty, bad-tasting water) and drives every page to one action: **book a free in-home water test** (phone backup **(877) 750-1420**).

Full site map: Home · 8 problem pages + hub · 8 product pages + hub · 9 service-area (city) pages + hub · About · Reviews · Gallery · FAQ · Specials · Financing · Free Water Test · Contact.

## About the design files
The files in this bundle are **design references created in HTML/React-in-the-browser** — a working prototype that demonstrates the intended look, copy, and behavior. They are **not** meant to be shipped as-is. The task is to **recreate these designs in the target codebase's environment** (Next.js, Astro, WordPress, Vue, etc.) using its established patterns, routing, component library, and CMS. If no environment exists yet, pick the most appropriate framework (a static-site or React framework suits this content-heavy, SEO-driven site well) and implement there.

`savanna-springs-site.html` is a single, self-contained file (all scripts, styles, fonts links, logo, and hero image inlined) — open it directly in any browser to explore the full click-through, no server needed.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, radii, shadows, copy, and interactions are all specified below and present in the prototype. Recreate the UI pixel-faithfully using the exact tokens. The prototype is built on the Savanna Springs design system — reuse those tokens/components verbatim where the target stack allows.

---

## Design tokens

### Color (locked brand palette)
**Brand**
- Navy (primary) `--navy-700 #1f2b6e` · ramp: 50 `#eef0fa`, 100 `#d7dcf1`, 200 `#b0bae2`, 300 `#8493d0`, 400 `#5868bb`, 500 `#3a49a3`, 600 `#2b3886`, **700 `#1f2b6e`**, 800 `#161f54`, 900 `#0e1438`
- Spring blue (water/secondary) `--spring-400 #49ade4` · ramp: 50 `#ecf7fd`, 100 `#d2edfb`, 200 `#a8dcf6`, 300 `#74c5ef`, **400 `#49ade4`**, 500 `#2f97d4`, 600 `#1f7bb4`, 700 `#1a6191`, 800 `#194f74`, 900 `#163f5c`
- Sun yellow (hero CTA / duck) `--sun-400 #fcca21` · ramp: 50 `#fffaeb`, 100 `#fff1c4`, 200 `#ffe488`, 300 `#ffd750`, **400 `#fcca21`**, 500 `#efb40c`, 600 `#ce8d04`, 700 `#a46a08`, 800 `#87550f`, 900 `#724711`
- Duck orange (small spark accent only) `--orange-500 #f5851f` · 300 `#ffb867`, 400 `#fa9b3c`, **500 `#f5851f`**, 600 `#e06d10`, 700 `#ba560c`

**Neutrals (cool, blue-gray):** 0 `#ffffff`, 50 `#f6f8fb`, 100 `#eef1f6`, 200 `#e0e5ee`, 300 `#c8d0de`, 400 `#9aa6bd`, 500 `#6b7891`, 600 `#4d5870`, 700 `#39435a`, 800 `#262e42`, 900 `#161c2d`

**Semantic:** success `#2e9e6b` (tint `#d6f1e3`, dark `#1d6b46`), danger `#d8463c`, warning `#e8a317`, info `#2f97d4`

**Common aliases used throughout:** page bg `--color-bg #f6f8fb`, surface/card `#ffffff`, text-heading `#0e1438`, text-body `#39435a`, text-muted `#6b7891`, border `#e0e5ee`, border-strong `#c8d0de`, focus ring `#49ade4`.

### Typography
- **Display:** `Outfit` (Google Fonts, weights 300–800) — headings & eyebrows. Body fallback stack: `system-ui, -apple-system, 'Segoe UI', sans-serif`.
- **Body:** `Figtree` (Google Fonts, weights 300–800).
- **Mono:** `ui-monospace, 'SFMono-Regular', Menlo, monospace` (only used for gallery placeholder labels).
- Google Fonts import: `https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Figtree:wght@300;400;500;600;700;800&display=swap`
- **Scale (px):** 11, 12, 14, 16, 18, 22, 28, 36, 46, 60, 76. Hero H1 ~58px/800; page H1 ~46–50px/800; section H2 ~34–42px/800; card H3 ~18–22px/700; body 14.5–18px/400–500.
- **Headlines:** weight 700–800, sentence case, letter-spacing `-0.02em` (tight). **Eyebrows/labels:** uppercase Outfit 700, 13px, letter-spacing `0.12–0.14em`, colored navy on light / spring-300 or sun-400 on navy. **Line-heights:** headings 1.05–1.22, body 1.5–1.7.

### Spacing (4px base)
4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 112. Section vertical padding 64–84px. Page max-width **1180px**, 24px gutters.

### Radius (rounded, friendly)
xs 4 · sm 8 · md 12 (inputs) · lg 18 (icon tiles) · xl 26 (cards) · 2xl 36 (large panels) · pill 999 (buttons, chips). Buttons are pills by default.

### Shadows (soft, navy-tinted — never flat gray)
- xs `0 1px 2px rgba(20,28,70,.06)` · sm `0 2px 6px rgba(20,28,70,.08)` · md `0 8px 20px rgba(20,28,70,.10)` · lg `0 16px 40px rgba(20,28,70,.14)` · xl `0 28px 64px rgba(20,28,70,.18)`
- accent (under yellow/orange CTAs) `0 10px 24px rgba(245,133,31,.28)`

### Motion
Durations 120 / 200 / 360ms. Easing: out `cubic-bezier(.16,.84,.44,1)`, spring `cubic-bezier(.34,1.56,.64,1)`. Subtle fades + small translateY; hover lifts cards `-3px`. Respect `prefers-reduced-motion`.

### Focus
3px spring-blue ring (`#49ade4`) + 2px offset.

---

## Reusable components (build these once)

- **Sticky header** — navy utility bar (county line + email) over a white blurred bar (`rgba(255,255,255,.92)` + `backdrop-filter: blur`). Logo left; nav: Water Problems / Products / Service Areas / About / Specials; right: phone link (navy pill icon) + **yellow "Free Water Test" pill button**. Collapses to a hamburger + slide-down panel at ≤1040px.
- **Footer** — navy-800, 4 columns: (1) logo + address/phone/email + trust-badge pills (Since 2008 · WQA Certified · Water-Right® Dealer · Made in USA) + italic tagline "We make one thing perfectly clear…"; (2) Solutions (problem links); (3) Products; (4) Service Areas (9 cities). Bottom utility row: About · Reviews · Gallery · FAQ · Financing · Contact + copyright.
- **Trust strip** — centered row: Since 2008 · WQA Certified · Water-Right® Dealer · Made in USA · We service all makes, separated by dots.
- **Problem picker** — responsive card grid (3-up → 2 → 1). Each card: tinted rounded icon tile + title + one-line blurb + "See the fix →". Hoverable (lift -3px). Links to the matching problem page.
- **How it works (3-step)** — Diagnose → Recommend → Install. Numbered cards (navy icon tile + ghost number).
- **Reviews block** — quote-mark, 5 filled stars (`#fcca21`), testimonial, avatar + name. 3-up grid; "Read all reviews" button. (Seed testimonials provided; production = Elfsight live Google reviews.)
- **Free Water Test form** — navy section, two columns: left pitch (perks + phone) / right white form card. Fields: Full name, Phone, ZIP, Email, "I'm concerned about" (select), "Describe your water concerns" (textarea), "How did you find us?" (select), Coupon code. Yellow submit "Book my free water test". Shows a success confirmation state on submit. (Production = POST to Zapier.)
- **Design-system primitives** used everywhere: Button (variants: primary=navy, accent=sun-yellow, water=spring, secondary, outline, ghost; sizes sm/md/lg; pill), Card (elevated/soft/outline/water/brand; hoverable), Badge (navy/water/sun/orange/success; soft|solid), Input, Select, Checkbox, Avatar, Alert.

## Page archetypes (templates — most pages are data-driven)

1. **Homepage** — Hero (navy, scrimmed photo right, decorative spring/orange "bubbles") → trust strip → problem picker (6) → 3-step → "Why Savanna Springs" (4 value cards + stats) → products grid (spring-tint band) → service-area band (navy, 9 city chips) → reviews → specials & financing band (sun-yellow) → free water test → footer.
2. **Problem page template** (×8, data: `problems-data.js`) — Hero (breadcrumb + H1 + lead + CTA/phone + big icon tile) → "The Problem" / "The Cause" two cards → "Diagnose → Recommend → Install" 3 steps → recommended-system spotlight (navy panel, cross-links to the product page) → optional payoff stats → related problems → free water test.
3. **Product page template** (×8, data: `products-data.js`) — Hero → optional intro band → model/series cards (badges, feature checklist, warranty callout, product-visual placeholder) → eco/value highlights band → optional "who we serve" / delivery info → "Problems this solves" cross-links → free water test. (Commercial variant: no models, segment grid + call-first CTA band.)
4. **City page template** (×9, data: `cities-data.js`) — Hero (county·ZIP eyebrow, localized H1+lead, map-pin tile) → "[City] water, explained" context + "Most common here" list → "What we fix in [City]" problem links → "Services in [City]" product links → 3-step → reviews → "Proudly serving [City] & nearby…" with 9-city chip rail (current highlighted) → free water test (ZIP prefilled).
5. **Content pages** — About (story + values + stats + credentials), Reviews (6 testimonials + Elfsight slot), Gallery (before/after, grouped by problem), FAQ (accordion + FAQ JSON-LD schema, each answer cross-linked), Specials (4 offer cards), Financing (5-tier table), Contact (info + hours + social + embedded Google map + message form).

## Interactions & behavior
- **Routing:** single-page client router in the prototype (`App.jsx`, `navigate(pageKey)` + `scrollTo(0)`). In production, use real routes/URLs (slugs from the brief, e.g. `/smelly-water/`, `/water-softeners/`, `/water-softeners-youngstown-oh/`).
- **Hover:** cards lift `translateY(-3px)` + deepen shadow; buttons darken same-hue; nav items get a navy-50 pill bg when active.
- **Forms:** client-side validation on required fields; on submit, swap the form for a success confirmation card. **Wire to Zapier** in production (Free Water Test, Contact).
- **FAQ:** accordion (one open at a time), chevron rotates 180°. Injects **FAQPage JSON-LD** schema into `<head>`.
- **Responsive:** header → hamburger ≤1040px; multi-column grids collapse 3→2→1 at ~980/600px; hero/split sections stack ≤860px.
- **Mobile menu:** slide-down panel with nav links, phone, and the yellow Free Water Test button.

## State management
Lightweight, per the prototype: current route/page; mobile-menu open/closed; per-form field state + submitted flag; FAQ open-index. In production these map to router state + local component state; form submissions go to Zapier.

## SEO
Each page has a meta title (provided in the source content files). Add per-page `<title>`/meta description, FAQ schema on the FAQ page, city pages keyed to their focus keyword, and cross-links (problems↔products↔cities, footer Service Areas column).

## Assets
- **Logo:** `logo-savanna-springs.png` (script wordmark + rubber-duck mark; transparent) — inlined in the bundle. Use the brand lockup, not a redrawn duck.
- **Hero photo:** `img-hero-people.png` (lifestyle, scrimmed under navy) — inlined in the bundle.
- **Icons:** single-weight 2px-round line set (Lucide-style), `currentColor` stroke. Filled stars are the one exception (`#fcca21`).
- **Product/gallery visuals:** styled placeholders in the prototype — replace with real product cut-outs and real before/after customer photos.
- **Map:** Contact page embeds Google Maps (`maps?q=875+River+Road,+Lowellville,+OH+44436&output=embed`).
- No emoji anywhere — the rubber duck is the only playful device.

## Files in this bundle
- `savanna-springs-site.html` — the complete, self-contained click-through prototype (open in a browser). All page templates, components, content data, tokens, fonts links, logo, and hero image are inlined.
- `screenshots/` — reference captures of the key page archetypes: `01-home`, `02-problem-rotten-egg`, `03-product-softeners`, `04-city-youngstown`, `05-faq`, `06-contact`.
- `README.md` — this document.

> The same source also lives un-bundled in the design-system project under `ui_kits/website/` (separate `.jsx` templates + `*-data.js` content files + `styles.css`/`tokens/` + `_ds_bundle.js`) if you have access and prefer to read the split source.

## Company facts (for copy accuracy)
Family owned since 2008 (named after the owners' daughter, Savannah) · Ohio EPA Licensed Operators, 35+ yrs combined experience · Authorized Water-Right® dealer · WQA Certified · Made in USA · serves Mahoning, Columbiana & Trumbull counties + Western PA · 875 River Road, Lowellville, OH 44436 · (877) 750-1420 · info@savannaspringswater.com · tagline "We make one thing perfectly clear…"
