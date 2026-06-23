# Savanna Springs Water Solutions — Design System

A modern, locked-down brand and component system for **Savanna Springs Water Solutions**, a family-owned water-treatment company serving Northeast Ohio & Western Pennsylvania since 2008. This system refreshes a dated WordPress-era look into a clean, friendly, trustworthy identity while keeping the beloved brand marks (the script wordmark + rubber-duck) front and center.

> **Consumers link one file:** `styles.css` (tokens + fonts). Components compile to `window.SavannaSpringsDesignSystem_15883b`.

---

## Company & product context

Savanna Springs sells, services and rents **custom-built, American-made water-treatment systems**. They are a proud **Water-Right® Authorized Dealer**, and their staff are **Ohio EPA-licensed operators**. Tagline: *"We make one thing perfectly clear…"*

**Products represented** (from the site + collateral):
- **Water Softeners** — Impression Plus Series®, Impression Plus® RC (Resin/Carbon), Crystal-Right/Carbon, Twin, Filter series.
- **Drinking Water** — Impression Series® reverse-osmosis (R.O.) systems.
- **Well Water** — iron / sulfur / sediment solutions.
- **Commercial Water** — larger custom systems.
- **Water Delivery** — bottled spring/distilled water.
- **Water Coolers** — rental & sales.
- **Salt Delivery** — free delivery + loading of softener salt ("Salt Delivery. The Better Way.").
- Plus: FAQ, Common Water Problems, Specials/financing, Free Water Analysis, Quick Quote, Apply for Credit, Blog, Testimonials.

**Contact:** 875 River Road, Lowellville, OH 44436 · (877) 750-1420.

### Sources provided (stored for reference — reader may not have access)
- `uploads/1–19 *.jpeg` — full-page screenshots of the current live website (Home, Welcome/About, Testimonials, each product page, FAQ, Common Water Problems, Specials, Free Water Analysis, Quick Quote, Apply for Credit, Blog).
- `uploads/SSWS-Logo-2022.png` — primary logo (script wordmark + rubber duck). **Now in `assets/logo-savanna-springs.png`.**
- `uploads/Savanna Springs Potential Brand Board.pdf` — an 8-option rebrand concept board the company explored but never shipped. **Note:** the board is lorem-ipsum placeholder layouts (low information value) and could not be reliably rasterized in this environment; this system is a fresh modern direction informed by the real collateral rather than a literal trace of any single board option.
- Numerous PDF/PNG/JPG **ads & flyers** (`SSWS-FB-Ad-2022.png`, `SS-Flyer-Summer-Special*.png`, `Savanna Springs Facebook R.O. Ad *.png`, `SS-Flyer-Salt-Bags.png`, salt/financing/RO/chlorine flyers, bottled-water wrapper, postcards). These were the primary basis for the locked color palette, photography vibe and headline style.

---

## CONTENT FUNDAMENTALS — how Savanna Springs writes

**Voice:** warm, plain-spoken, confident, local. A knowledgeable neighbor, not a corporation. Family-owned pride shows up often ("family-owned and operated," "since 2008," "made right here in America").

**Person:** speaks to **"you / your"** ("your home, your family, your budget"); refers to itself as **"we / Savanna Springs."** First-name, on-the-ground ("Steve worked with us…").

**Casing:**
- **Headlines:** sentence case in the refreshed system (e.g. *"Better water, made simple."*). The legacy site used ALL-CAPS section headers (*"HARD WATER CREATES PROBLEMS"*); ad headlines were bold uppercase (*"DO YOU WANT BETTER WATER?"*). Keep occasional uppercase for short **eyebrows/labels** only.
- **Eyebrows/labels:** UPPERCASE with wide tracking (e.g. *WE MAKE ONE THING PERFECTLY CLEAR*, *OUR SOLUTIONS*).
- **Body:** sentence case, generous, benefit-led.

**Tone & vibe:** reassuring and problem→solution. Lead with the pain ("Hauling salt bags a pain? Running out of soft water?"), then the friendly fix ("Salt Delivery. The Better Way."). Benefit-driven bullet lists (percent savings, eco-friendly, made in USA). Light optimism from the duck — friendly, never silly.

**Punctuation/quirks:** the ellipsis tagline "…perfectly clear…"; product names carry ® (Impression Plus Series®, Water-Right®, Crystal-Right®). Numbers stated as concrete benefits ("reduces detergents by 50%," "up to 47% more efficient").

**Emoji:** none. Don't use emoji. The **rubber duck** is the brand's single playful device — use the logo/mark, not emoji.

**Example copy that's on-brand:**
- Eyebrow: *We make one thing perfectly clear*
- H1: *Better water, made simple.*
- Sub: *Family-owned, American-made water treatment — custom-built for your home, your family and your budget.*
- CTA: *Get a free water test* · *Receive a quick quote* · *Salt Delivery. The Better Way.*

---

## VISUAL FOUNDATIONS

**Color (locked).** Four brand colors, pulled straight from the mark and ads:
- **Navy `#1F2B6E`** (`--navy-700`) — primary. Backgrounds, headlines, primary buttons, the wordmark outline. The anchor of trust.
- **Spring Blue `#49ADE4`** (`--spring-400`) — clean water / secondary. Links, water accents, info.
- **Sun Yellow `#FCCA21`** (`--sun-400`) — the duck / hero accent. High-impact CTAs, highlights, pills. (The brand's ad headlines literally alternate navy + yellow.)
- **Duck Orange `#F5851F`** (`--orange-500`) — the beak. A small spark accent only — never a large field.
Plus cool neutrals (slightly blue-gray) and standard semantic hues. Full ramps live in `tokens/colors.css`; reference **semantic aliases** (`--brand`, `--accent`, `--water`, `--surface-card`, `--text-body`…) in components.

**Type.** Display = **Outfit** (geometric, friendly, rounded — echoes the bubbly logo). Body = **Figtree** (humanist, warm, legible). Headlines are heavy (700–800), tight tracking, sentence case; eyebrows are uppercase Outfit with 0.12em tracking. The **script logo is a lockup image**, not a UI font — don't try to set type in the script style.

**Backgrounds.** Mostly clean white / off-white (`--neutral-50`) with **navy** and **spring-tint** section bands for rhythm. Decorative **soft circular "blobs"** (spring blue + a single orange dot) sit behind navy heroes — a nod to water bubbles. Real **photography** is bright, clean, fresh: water splashes, faucets, people drinking water, blue-and-white, naturally lit (warm-cool, never moody/grainy). No heavy gradients as a crutch; the one gradient that's allowed is a subtle navy→transparent scrim over hero photos.

**Spacing & layout.** 4px base scale. Max content width ~1180px, 24px gutters. Generous section padding (64–84px). Centered section heads with an eyebrow → H2 → sub pattern; left-aligned for split layouts.

**Corner radii — rounded & friendly.** Cards `--radius-xl` (26px), buttons are **pills** by default, inputs `--radius-md` (12px), small chips/pills everywhere. This roundness is core to the brand's approachability.

**Cards.** White surface, 1px hairline border (`--border`), soft **navy-tinted** shadow (`--shadow-md`), 26px radius. Variants: elevated (default), soft (navy tint), outline, water (spring tint), brand (navy w/ white text). Hoverable cards lift `-3px` and deepen the shadow.

**Shadows.** Soft and **cool/navy-tinted** (never flat gray): `rgba(20,28,70,…)`. A special **warm `--shadow-accent`** glows under yellow/orange CTAs.

**Borders.** Hairline `1px` neutral-200 for structure; `1.5px` neutral-300 for inputs/outline controls; focus uses a `3px` spring-blue ring + tint halo.

**Buttons & states.** Pill, Outfit 700. Variants: primary (navy), accent (sun yellow — the hero CTA), water (spring), secondary (navy tint), outline, ghost. **Hover** = darker shade of the same hue (navy→navy-800, yellow→sun-500). **Press** = `translateY(1px)` nudge. Disabled = neutral-200 fill / neutral-400 text. Focus = visible ring.

**Animation.** Subtle and quick. Durations 120/200/360ms. Easing: `--ease-out` for most, `--ease-spring` for toggles/playful lifts. Fades + small translateY rises; no bounce-heavy or infinite decorative loops. Respect `prefers-reduced-motion`.

**Transparency / blur.** Used sparingly: the sticky header is `rgba(255,255,255,0.92)` + `backdrop-filter: blur`. Navy bands use low-opacity white panels (`rgba(255,255,255,0.06)`) for nested cards.

**Imagery color vibe.** Warm-cool natural daylight, high-key, lots of white and sky-blue, crisp water. Avoid black-and-white, heavy grain, or dark/moody treatments.

---

## ICONOGRAPHY

- **System:** **Lucide** (MIT) — a clean, modern, single-weight (2px round) line set that matches the friendly-but-trustworthy tone and pairs well with Outfit. The legacy site used heavier FontAwesome-style glyphs; Lucide is the modern replacement.
- **Delivery:** to keep the kit self-contained and offline-safe, a curated subset of Lucide paths is inlined in `ui_kits/website/Icon.jsx` (`window.SSIcon`, used as `<Icon name="droplet" size={24} />`). When building new surfaces you may also load Lucide from CDN (`https://unpkg.com/lucide@latest`) — keep the **same 2px round stroke**. Add new glyphs to `SS_ICON_PATHS` as needed.
- **Style rules:** line icons (not filled) by default; stroke `currentColor` so they inherit text/brand color; sit in tinted rounded squares (`--radius-lg`) for feature/problem tiles. Stars in ratings are the one **filled** exception (filled `--sun-400`).
- **Emoji:** never. **Unicode glyphs as icons:** no. **The duck:** the rubber duck (in the logo) is the brand's mascot/spark — reach for the logo lockup rather than drawing a duck icon.
- **Logo/marks:** `assets/logo-savanna-springs.png` (transparent). Works on white, light tints and sun-yellow; on navy it's used with a soft drop-shadow (see footer). Clear space ≈ the duck's height on all sides.

---

## Index / manifest

**Root**
- `styles.css` — global entry (consumers link this). `@import`s the token files.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front-matter so the system can be used in Claude Code.

**`tokens/`** — `fonts.css` (Outfit + Figtree), `colors.css`, `typography.css`, `spacing.css` (spacing/radius/shadow/motion/z), `base.css` (element defaults + `.ss-eyebrow`).

**`assets/`** — `logo-savanna-springs.png` (primary), `img-hero-people.png` (cropped lifestyle), plus reference collateral (`img-water-faucet.png`, `img-people-drinking.png`, `product-ro-system.png`, `img-salt-softener.png`).

**`components/`** — reusable primitives (each: `.jsx`, `.d.ts`, `.prompt.md`, + one card per group):
- `actions/` — **Button**, **IconButton**
- `forms/` — **Input**, **Select**, **Checkbox**, **Switch**
- `display/` — **Card**, **Badge**, **Avatar**
- `feedback/` — **Alert**

**`guidelines/cards/`** — foundation specimen cards for the Design System tab (Colors ×6, Type ×3, Spacing ×3, Brand ×2).

**`ui_kits/website/`** — click-through marketing-site recreation (`index.html` + Header/Footer/Hero/HomePage/ProductsPage/QuotePage/SpecialsPage/App + `Icon.jsx`). See its `README.md`.

---

## Using the system
```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Badge } = window.SavannaSpringsDesignSystem_15883b;
  // <Button variant="accent">Get a free water test</Button>
</script>
```

---

## Previewing locally (live reload)

This is a **build-free** site: React + Babel load from a CDN and the `.jsx`
files compile in the browser. There's no Webpack/Vite step — you just need a
local web server (opening the HTML as a `file://` won't work, the browser
blocks the external scripts).

```bash
npm install   # one time — installs live-server
npm run dev    # serves at http://localhost:8080 and opens the marketing site
```

`npm run dev` starts a [live-server](https://www.npmjs.com/package/live-server)
that **auto-reloads the page whenever you save** a file in `ui_kits/`,
`components/`, `guidelines/`, `tokens/`, `assets/`, `styles.css` or
`_ds_bundle.js` — so you see changes the moment they're made. It opens the
full marketing site (`/ui_kits/website/index.html`); navigate to other pages
(e.g. component cards) from the same `http://localhost:8080/…` root.
