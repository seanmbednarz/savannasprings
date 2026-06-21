# Savanna Springs — BeBuilder Build Spec

A section-by-section guide to rebuild the Savanna Springs pages in **BeTheme's
BeBuilder** while matching the existing design exactly. Hand this to whoever builds
in BeBuilder (or use it yourself).

> **How it fits the theme:** turn ON **Layout → "Build this page in BeBuilder"** on a
> page, and the Savanna Springs **header and footer wrap it automatically** — so in
> BeBuilder you only build the **page body** (everything between the navy top bar and the
> footer). Don't rebuild the header/footer.

---

## 0. One-time global setup (BeTheme / BeBuilder)

1. **Fonts** — Theme Options → Typography:
   - Headings (H1–H6) + buttons + eyebrows: **Outfit** (weights 700/800).
   - Body text: **Figtree** (weights 400/500/600).
   - (Google Fonts; the theme already loads them, but set them here so BeBuilder previews match.)
2. **Site width** — set content width to **1180px**, side padding **24px**.
3. **Color palette** — add these as BeBuilder custom colors so they're one click away:

| Name | Hex | Use |
|------|-----|-----|
| Navy 700 | `#1f2b6e` | primary bg, headings, primary buttons |
| Navy 800 | `#161f54` | footer bg, hovers |
| Navy 900 | `#0e1438` | darkest headings, text on yellow |
| Navy 50 | `#eef0fa` | tinted icon tiles |
| Spring 400 | `#49ade4` | water accent, links |
| Spring 100 | `#d2edfb` | text on navy, tints |
| Spring tint band | `#ecf7fd` | light blue section background |
| Sun 400 | `#fcca21` | **accent CTA buttons**, eyebrows on navy, highlights |
| Sun 500 | `#efb40c` | accent button hover |
| Orange 500 | `#f5851f` | tiny spark accent only (the duck "bubble") |
| Page bg | `#f6f8fb` | off-white page background |
| Surface | `#ffffff` | cards |
| Text body | `#39435a` | paragraphs |
| Text muted | `#6b7891` | small/secondary text |
| Border | `#e0e5ee` | hairline card borders |
| Green 700 | `#1d6b46` | success check |

---

## 1. Design tokens (apply to elements)

**Type scale (px):** 11, 12, 13(eyebrow), 14.5(body-sm), 16(body), 18(lead), 22, 28, 34, 36, 42, 46, 50, 58(hero H1).

- **Eyebrow / label:** Outfit **700**, 13px, `letter-spacing: 0.13em`, **UPPERCASE**.
  Color = Navy `#1f2b6e` on light backgrounds, Sun `#fcca21` on navy.
- **Headings (H1/H2/H3):** Outfit **800** (cards 700), `letter-spacing: -0.02em`, sentence case.
  Line-height 1.05–1.15. Color Navy 900 `#0e1438` on light, `#ffffff` on navy.
- **Body:** Figtree **400–500**, 16–18px, line-height **1.6**, color `#39435a` (or `#d2edfb` on navy).
- **Buttons (pill):** radius **999px**, Outfit **700**, padding ~`14px 24px`.
  - **Accent (primary CTA):** bg `#fcca21`, text `#0e1438`, soft glow shadow `0 10px 24px rgba(245,133,31,.28)`. Hover bg `#efb40c`.
  - **Primary:** bg `#1f2b6e`, text `#fff`. Hover `#161f54`.
  - **Outline:** transparent, 1.5px border `#c8d0de`, text `#262e42`.
- **Cards:** bg `#fff`, border `1px #e0e5ee`, radius **26px**, padding **28–30px**,
  shadow `0 2px 6px rgba(20,28,70,.08)`; hover lift `translateY(-3px)` + deeper shadow.
- **Icon tiles:** square **56×56** (small 46–48), radius **18px**, tinted background, icon centered. Tints: water `#d2edfb`/icon `#1f7bb4`; navy `#eef0fa`/icon `#1f2b6e`; sun `#fff1c4`/icon `#a46a08`; orange `#ffe7d1`/icon `#e06d10`. On navy bands use a navy fill `#1f2b6e` tile with a **sun-yellow** icon.
- **Section padding:** vertical **64–84px** (use ~78px). Navy "hero" bands ~54–60px.
- **Icons:** Lucide line icons, 2px round stroke, `currentColor`. Rating stars are filled `#fcca21`.
- **Decorative bubbles:** large soft **spring-blue** circle (low opacity, blurred) + one small solid **orange** circle, behind navy heroes. Purely visual.

---

## 2. Reusable section patterns (build once, copy/paste)

### A. Section heading block (eyebrow → H2 → sub)
- Centered column, max-width 740px.
- Eyebrow (style above) → H2 (Outfit 800, 36–42px) → sub paragraph (18px, muted).

### B. Trust strip
- Full-width white band, 1px bottom border `#e0e5ee`, ~18px vertical padding.
- One centered row, items separated by a small dot `#c8d0de`:
  **Since 2008 · WQA Certified · Water-Right® Dealer · Made in USA · We service all makes**
- Each item = small spring-blue icon + Outfit 600 15px navy label. (Use BeBuilder Icon Box inline, or an Icon List.)

### C. "How it works" 3-step (navy-tile cards on spring-tint band)
- Band bg `#ecf7fd`, top/bottom border `#d2edfb`.
- Heading block: eyebrow **HOW IT WORKS**, H2 **Diagnose → Recommend → Install**, sub *"Three simple steps from problem water to water you love."*
- 3 columns, each a white card (radius 26): top row = navy 56px icon tile (sun icon) on the left + big ghost number (`01/02/03`, Outfit 800, 38px, color `#e0e5ee`) on the right; then H3 + body.
  1. **We diagnose** — *A free in-home water test for hardness, iron, pH and chlorine — so we treat the real problem, not a guess.*
  2. **We recommend** — *A custom system, right-sized to your water, your home and your budget. No upsell, no pressure.*
  3. **We install** — *Professional installation by our licensed team — and we service all makes and models for the long haul.*

### D. Reviews (3-up)
- Heading block: eyebrow **REVIEWS**, H2 *"What our neighbors say"*, sub *"Real homeowners across the Mahoning Valley and Western PA. Live Google reviews — here are a few favorites."*
- 3 white cards: quote mark icon (spring) → row of **5 filled sun-yellow stars** → testimonial (16px navy) → avatar circle (navy bg, white initial) + name (Outfit 700).
- Seed testimonials: Madison M., Margaret F., Brian F. (full text in the live Reviews page).
- Below: centered **"Read all reviews"** outline button → /reviews/.

### E. Free Water Test (navy band, 2-column) — appears at the bottom of most pages
- Full-width band bg `#1f2b6e`, large blurred spring circle + small orange circle behind.
- **Left column:** eyebrow **FREE WATER TEST** (sun) → H2 (white, 44px) → lead (spring-100) → 3 perks (each: 48px translucent-white rounded tile w/ sun icon + bold white title + spring-100 body):
  - **On-site water analysis** — *A licensed operator tests hardness, iron, pH and chlorine right at your tap.*
  - **Custom recommendation** — *We size the right system for your home, water and budget — no upsell, no pressure.*
  - **We call within 24 hours** — *A Savanna Springs operator follows up within 24 business hours to schedule.*
  - Then a translucent pill: *"Prefer to call? **(877) 750-1420**"*
- **Right column:** white card (radius 36, padding 34, big shadow) titled **"Book your free test"** → *"It only takes a minute."* Fields: Full name / Phone + ZIP (2-col) / Email / "I'm concerned about" (select) / "Describe your water concerns" (textarea) / "How did you find us?" + "Coupon code" (2-col) / **accent submit "Book my free water test"** / fine print *"No obligation. We'll never share your information."*
  - **Important:** use a **Contact Form 7** form here wired to your CRM/Zapier (BeBuilder's form element is fine too). The theme's built-in form is PHP; in a BeBuilder page use CF7 so it submits.

> Headings used repeatedly: **H1 hero** 46–58px/800; **H2 section** 34–42px/800; **H3 card** 18–22px/700.

---

## 3. Page-by-page

### 3.1 Home  (`/`)
1. **Hero** — navy band, lifestyle photo bleeding from the right with a left-to-right navy scrim; spring + orange bubbles.
   - Eyebrow (sun): **WE MAKE ONE THING PERFECTLY CLEAR…**
   - H1 (white, 58px): **Whatever's wrong with your water, we make it** `perfectly clear.` ← last 2 words in **sun-yellow**.
   - Lead (spring-100): *Smelly, hard, rusty, or bad-tasting water? Savanna Springs diagnoses the real problem and fixes it for good — for homes and businesses across Youngstown and Western PA.*
   - Buttons: **accent "Get my free water test →"** (/free-water-test/) + a phone link *(877) 750-1420* with a round icon.
   - Small trust row under buttons: Family owned since 2008 · Water-Right® authorized dealer · American-made equipment.
2. **Trust strip** (pattern B).
3. **Problem picker** — heading block (eyebrow **START WITH YOUR PROBLEM**, H2 *"What's wrong with your water?"*, sub *"Pick what sounds like your home — we diagnose the real cause, then fix it for good. Not sure? Start with a free in-home water test."*), then a **3-column grid of 6 hover cards**. Each card: tinted icon tile + H3 + one-line blurb + **"See the fix →"** link.
   - Rotten-egg smell (wind/sun) → *That sulfur odor in your tap and shower water.*
   - Hard water & scale (droplet/water) → *Spotty dishes, crusty faucets, dry skin, more soap.*
   - Rust & orange stains (flame/orange) → *Stains in sinks, tubs, toilets, and laundry.*
   - Bad-tasting water (beaker/navy) → *Cloudy, metallic, or chemical-tasting tap water.*
   - Well water problems (home/water) → *Iron, sulfur, sediment, and bacteria from a well.*
   - Chlorine taste & smell (flask/sun) → *That "pool water" smell from city water.*
   - Links → the matching `/water-problems/<slug>/` page.
4. **How it works** (pattern C).
5. **Why Savanna Springs** — heading block (eyebrow **WHY SAVANNA SPRINGS**, H2 *"A water team your neighbors actually trust"*, sub *"Not a faceless sales outfit — a family business that fixes the real problem and stands behind the work."*). **4-column** value cards (navy icon tile + H3 + body):
   - **Local & family owned** — *Named after our daughter Savannah — serving the Valley since 2008. You know who the owners are.*
   - **American-made equipment** — *A proud authorized Water-Right® dealer. Custom-built, made in the USA — built to last.*
   - **We service everything** — *All makes and models, plus salt and water delivery. We keep your system running for the long haul.*
   - **Honest & affordable** — *Right-sized systems and flexible financing — including 6 months no interest. No pressure, ever.*
   - Under the cards, a centered **stat row** (divider above): **2008** Family owned since · **35+ yrs** Combined experience · **20-yr** Warranties available · **EPA** Licensed operators. (Numbers Outfit 800 32px navy.)
6. **Products** — spring-tint band. Heading block (eyebrow **OUR PRODUCTS**, H2 *"American-made, built for your water"*, sub *"We only install equipment made in America, custom-built and sized to your home."*). **3-column** hover cards (icon tile + H3 + blurb + "Learn more →"):
   - Water softeners → *Impression Plus® softeners end hard-water scale, spots and dry skin.* (/products/water-softeners/)
   - Reverse osmosis → *Bottle-quality reverse-osmosis drinking water from your own tap.*
   - Iron & sulfur filters → *Self-sanitizing media clears iron, sulfur and the rotten-egg smell.*
   - Whole-house filtration → *Custom media systems for cleaner, safer water at every tap.*
   - Salt delivery → *We deliver and load Dura-Cube® softener salt — never haul a bag again.*
   - Equipment rentals → *Try soft water with no upfront cost — one month free rent.*
   - Centered **primary "See all products"** button.
7. **Service-area band** — navy, 2-column. Left: eyebrow **SERVICE AREA**, H2 *"Serving Youngstown, the Mahoning Valley & Western PA"*, sub, **accent "Find your town →"**. Right: wrap of 9 pill chips (translucent white, mapPin sun icon): Youngstown, Boardman, Poland, Canfield, Struthers, Lowellville, Austintown, Salem, South Range / N. Lima → each to its city page.
8. **Reviews** (pattern D).
9. **Specials & financing band** — **sun-yellow** band. Left: eyebrow **SPECIALS & FINANCING** (navy), H2 *"Better water, made affordable"*. Right: **primary "See all specials"** + **outline "Financing"**. Below, 4 translucent-white cards (navy icon tile + bold title + small body):
   - **One month free rent** — on Impression Plus® softeners
   - **One year of free salt** — with a Water-Right® softener
   - **RO for pennies a day** — bottle-quality drinking water
   - **6 months no interest** — flexible financing available
10. **Free Water Test** (pattern E) with heading *"Ready to make your water perfectly clear?"*

---

### 3.2 Water Problem page  (×8 — same layout, copy per post)
Slugs under `/water-problems/`. Copy for each is already written (it's in each post's fields). Layout:
1. **Hero** — navy split. Breadcrumb (Home › Water Problems › <label>) → eyebrow (sun, e.g. *Water problem · Odor*) → H1 → lead → **accent "Get my free water test →"** + phone. Right: either a **168px rounded tile with a big sun icon**, or the post's **Featured Image** as a scrimmed background.
2. **Problem + Cause** — 2 cards: left white card "**THE PROBLEM**" (orange mini-tile + alert icon), right navy-tint card "**THE CAUSE**" (navy mini-tile + flask icon). One paragraph each.
3. **How we fix it** — heading *"Diagnose → Recommend → Install"* + 3 numbered step cards (pattern C style, white).
4. *(optional)* **Payoff stats** — spring-tint rounded panel with 2–3 big spring-blue stats (e.g. 50% less laundry detergent).
5. **Recommended system spotlight** — navy rounded panel, 2-column: left = eyebrow **WHAT WE RECOMMEND** + H3 product name + description + badge pills (check + label) + **accent "Explore this solution →"** (→ the product page); right = navy gradient panel with a product-visual placeholder ("MADE IN USA").
6. **Related problems** — white band, "Other water problems we solve" + 3 small link cards.
7. **Free Water Test** (pattern E).

### 3.3 Product page  (×8 — copy per post) — under `/products/`
1. **Hero** — navy split (breadcrumb Home › Products › <label>, eyebrow, H1, lead, CTA+phone, icon tile or photo). *(Commercial variant uses a "Call (877) 750-1420" primary button.)* Bottled variant shows size chips (20 oz / 1 gallon / 5 gallon).
2. *(optional)* **Intro** — centered single paragraph.
3. **Models** — heading *"Choose the right system"*; **2-column** model cards: name + tag pill (sun tint) + blurb + **feature checklist** (spring checks) + optional **warranty** callout (spring-tint rounded strip).
4. *(optional)* **Highlights band** — spring-tint; eyebrow + H2 + 2-column checklist of benefits.
5. *(optional)* **Who we serve** (Commercial) — 3-col cards. **Delivery** (Bottled/Salt) — CTA card with title + body + button.
6. **Problems this solves** — white band, 3 small problem link cards.
7. **Free Water Test** (pattern E).

### 3.4 Service-Area (City) page  (×9 — copy per post) — under `/service-areas/`
1. **Hero** — navy split. Breadcrumb (Home › Service Areas › <city>) → eyebrow *<County> County · ZIP <zip>* → H1 → lead → CTA+phone → mapPin tile (or photo).
2. **Context + Most common** — 2-col: left eyebrow *"<City> water, explained"* + paragraph; right white card "**Most common here**" with a check list.
3. **What we fix in <City>** — white band, 3-col problem link cards (the city's top problems).
4. **Services in <City>** — 4-col product link cards (sized by water type).
5. **How it works** (pattern C).
6. **Reviews** (pattern D).
7. **Nearby city rail** — navy band, centered: eyebrow **PROUDLY LOCAL**, H2 *"Proudly serving <City> & nearby communities"*, then the 9-city chip rail (current city highlighted in sun-yellow).
8. **Free Water Test** (pattern E, ZIP prefilled).

---

### 3.5 About  (`/about/`)
1. **Hero** — navy, centered: eyebrow **ABOUT US**, H1 *"Your local, family-owned water team"*, sub *"Since 2008, Savanna Springs has helped families and businesses across the Mahoning Valley and Western PA get better water — diagnosed honestly and fixed for good."*
2. **Our story** — 2-col: left eyebrow **OUR STORY** + H2 *"Named after our daughter, run like a family"* + two paragraphs (see Home/About copy); right white card with the 4-stat row (2008 / 35+ yrs / 20-yr / EPA).
3. **What we stand for** — spring-tint band; heading block (eyebrow **WHAT WE STAND FOR**, H2 *"A few things we never compromise on"*); 4 value cards: **Family first**, **Built to last**, **Licensed & certified**, **Here for the long haul**.
4. **Reviews** (pattern D).
5. **Free Water Test** (pattern E).

### 3.6 Specials  (`/specials/`)
1. **Hero** — **sun-yellow** band, centered: eyebrow **SPECIALS & FINANCING** (navy), H1 *"Better water, made affordable"*, sub. (Text in navy for legibility.)
2. **Offers** — 2-col cards (navy icon tile + sun-tint tag pill + H3 + body):
   - **One month free rent** (tag *On softener rentals*) — *Rent an Impression Plus® softener and get your first month of rent free.*
   - **One year of free salt** (tag *With softener purchase*) — *Buy a qualifying Water-Right® softener and we'll deliver a year of salt — free.*
   - **RO for pennies a day** (tag *On RO rentals*) — *Bottle-quality reverse-osmosis drinking water — one month free for a limited time.*
   - **6 months no interest** (tag *Financing available*) — *Flexible financing to spread the cost of better water across your budget.*
3. **CTA card** (spring-tint, 2-col): *"Not sure which is right for you?"* + *"Start with a free in-home water test — we'll recommend the right system and the best offer for it."* + **accent "Get my free water test →"** + **outline "See financing"**.

### 3.7 Financing  (`/financing/`)
1. **Hero** — navy, centered: eyebrow **FINANCING**, H1 *"Flexible ways to pay"*, sub *"Better water shouldn't wait for the perfect month. Choose the option that fits your budget — including 6 months no interest."*
2. **Tiers** — 3-col cards, each: tag pill + H3 + body:
   - **6 months** → No interest · **12 months** → Low monthly · **24 months** → Special financing · **Rental** → One month free · **Custom** → Built to budget.
   - Plus a spring-tint "Ready to apply?" card with **accent "Get my free water test →"**.

### 3.8 Gallery  (`/gallery/`)
1. **Hero** — navy, centered: eyebrow **GALLERY**, H1 *"Before & after, around the Valley"*, sub.
2. **Groups** — for each group, a row: icon tile + H2, then a **3-column image grid** (4:3 images with a caption strip). Groups: **Rust & iron staining**, **Hard water & scale**, **Well water installs**. Swap in real before/after photos.
3. **Free Water Test** (pattern E).

### 3.9 Contact  (`/contact/`)
1. **Hero** — navy, centered: eyebrow **CONTACT**, H1 *"Let's talk about your water"*, sub.
2. **2-column:** left = info rows (navy tile + icon each): **Visit/mail** 875 River Road, Lowellville, OH 44436 · **Call** (877) 750-1420 · **Email** info@savannaspringswater.com · **Hours** Mon–Fri 9am–5pm, Sat–Sun by appointment · Facebook + Instagram tiles · an **embedded Google Map** (`maps?q=875+River+Road,+Lowellville,+OH+44436&output=embed`). Right = white card with a **Contact Form 7** message form (Name / Phone + Email / ZIP / message / accent submit).

### 3.10 Reviews  (`/reviews/`)
1. **Hero** — navy, centered: eyebrow **REVIEWS**, H1 *"What our neighbors say"*, sub.
2. **6 testimonial cards** (pattern D card style, 3-col × 2 rows).
3. **Elfsight** Google Reviews widget block (centered card) for live reviews.
4. **Free Water Test** (pattern E).

### 3.11 FAQ  (`/faq/`)
1. **Hero** — navy, centered: eyebrow **FAQ**, H1 *"Water questions, answered"*, sub.
2. **Accordion** (BeBuilder Accordion / Toggle element), one open at a time, chevron rotates. ~10 Q&As (text in the FAQ page), each answer ends with a cross-link (e.g. "Hard water & scale →").
3. **"Still have a question?"** spring-tint CTA card + **accent "Get my free water test →"**.
   - *SEO:* keep FAQ schema — easiest is to leave the templated `/faq/` page as-is (it already outputs FAQPage JSON-LD), or add a schema plugin if you rebuild it in BeBuilder.

### 3.12 Free Water Test  (`/free-water-test/`)
1. **Intro** — white band, centered: eyebrow **NO COST · NO PRESSURE**, H1 *"Your free in-home water test"*, sub.
2. **Free Water Test** (pattern E) — full form.

---

## 4. Tips for staying on-brand in BeBuilder
- Reuse a **saved BeBuilder template/section** for the Trust strip, How-it-works, Reviews, and Free Water Test so they're identical across pages.
- Set the **accent button** style once (sun-yellow pill) and reuse it for every primary CTA.
- Keep **one** decorative orange bubble per hero, max — it's the only playful accent besides the duck logo. No emoji.
- Headlines are **sentence case**; only eyebrows/labels are UPPERCASE.
- Every page should drive to **one action: the free water test** (or the phone number).
- For forms, use **Contact Form 7** (or your CRM's form) so submissions actually send; wire to Zapier if needed.

---

*Companion to the theme README. The 25 data-driven pages (problems/products/cities) are
best left on their templates + fields — this spec documents their layout for reference, but
rebuilding all 25 in BeBuilder by hand isn't recommended.*
