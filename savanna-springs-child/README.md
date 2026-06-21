# Savanna Springs — BeTheme Child Theme

A custom **BeTheme child theme** that reproduces the high-fidelity Savanna Springs
Water Solutions marketing design (the Claude design handoff) as a real WordPress site:
branded header/footer chrome, the locked design tokens, and data-driven templates for
the **Water Problems**, **Products** and **Service-Area** page archetypes — plus Home,
FAQ, About, Reviews, Gallery, Specials, Financing, Free Water Test and Contact.

It runs **on top of BeTheme** (declared `Template: betheme`), so you keep BeTheme and
the Muffin Builder for any pages you want to build visually — they render inside the
Savanna Springs header and footer.

---

## What you get

| Area | How it's built | Where to edit |
|------|----------------|---------------|
| Design tokens (colors, type, spacing, shadows) | CSS variables in `style.css` | `style.css` → `:root` |
| Header & footer chrome | `header.php` / `footer.php` | those files |
| Homepage | `front-page.php` | that file + `inc/data.php` |
| Water Problems (×8) | CPT `ss_problem` + `single-ss_problem.php` | **Water Problems** in WP admin + copy in `inc/data.php` |
| Products (×8) | CPT `ss_product` + `single-ss_product.php` | **Products** in WP admin + copy in `inc/data.php` |
| Service Areas (×9) | CPT `ss_city` + `single-ss_city.php` | **Service Areas** in WP admin + copy in `inc/data.php` |
| FAQ / About / Reviews / Gallery / Specials / Financing / Contact / Free Test | Page templates `template-*.php` | the matching WP page + template file |
| Lead form submissions | `admin-post.php` handler → **Water Test Leads** + email | `functions.php` |

The page **copy** for the data-driven archetypes lives in `inc/data.php`. The post you
edit in WP admin controls the title/slug/URL (and an optional body); the rich layout copy
is pulled from `inc/data.php` keyed by the post slug. Change a headline there and every
matching page updates.

---

## Install

1. **Make sure the parent BeTheme is installed** under `wp-content/themes/betheme`
   (the folder must be named exactly `betheme`). This child declares `Template: betheme`.
2. Copy the `savanna-springs-child/` folder into `wp-content/themes/`.
3. In **Appearance → Themes**, activate **“Savanna Springs (BeTheme Child)”**.
4. On activation the theme automatically:
   - registers the 3 custom post types and seeds all Problem / Product / City posts,
   - creates the Home, FAQ, About, Reviews, Gallery, Specials, Financing, Free Water
     Test and Contact pages (with their templates assigned),
   - sets **Home** as the static front page,
   - flushes permalinks.
5. Go to **Settings → Permalinks** and click **Save** once (belt-and-suspenders for the
   CPT URLs).

If you ever need to re-run the seeding (e.g. you deleted a page), visit
`/wp-admin/?ss_reseed=1` while logged in as an administrator. Seeding is idempotent —
it never overwrites or duplicates existing posts/pages.

---

## URLs

| Page | URL |
|------|-----|
| Home | `/` |
| Water Problems hub | `/water-problems/` |
| Problem page | e.g. `/water-problems/rotten-egg-smell/` |
| Products hub | `/products/` |
| Product page | e.g. `/products/water-softeners/` |
| Service Areas hub | `/service-areas/` |
| City page | e.g. `/service-areas/water-softeners-youngstown-oh/` |
| FAQ / About / etc. | `/faq/`, `/about/`, `/reviews/`, `/gallery/`, `/specials/`, `/financing/`, `/free-water-test/`, `/contact/` |

---

## Forms (Free Water Test & Contact)

Submissions are handled by `functions.php`:
- stored as **Water Test Leads** (a private post type, visible in WP admin), and
- emailed to your site admin address (**Settings → General → Administration Email**).

To send to **Zapier** instead (per the brief), point the form `action` at your Zapier
catch-hook URL, or hook into `ss_handle_free_water_test()` and `wp_remote_post()` the
payload. The front-end already submits via AJAX and shows the success card with no reload.

---

## Customizing

- **Brand colors / fonts / spacing** → `style.css` `:root` tokens. Everything references
  these variables, so changes cascade site-wide.
- **Page copy for problems/products/cities** → `inc/data.php`.
- **Reviews / FAQ / specials / homepage value props** → helper arrays in `inc/data.php`.
- **Icons** → `inc/helpers.php` (`ss_icon_paths()`), Lucide-style 2px line set.
- **Live Google reviews** → drop your Elfsight widget into `template-reviews.php`
  (placeholder marked in the file).
- **Logo / hero image** → `assets/logo-savanna-springs.png`, `assets/img-hero-people.png`.
  Product/gallery visuals are styled placeholders — swap in real product cut-outs and
  before/after customer photos.

---

## Note on the header/footer

This child theme **replaces BeTheme’s global header and footer** (`header.php` /
`footer.php`) with the branded Savanna Springs chrome so every page — including pages you
build in Muffin Builder — shares one consistent header and footer. The branded markup is
wrapped in BeTheme’s `#Wrapper` for compatibility. If you’d rather use BeTheme’s own
header/footer on some pages, delete `header.php` / `footer.php` from the child theme (the
custom templates can be adapted to call BeTheme’s instead).

---

## Company facts (kept accurate in the copy)

Family owned since 2008 (named after the owners’ daughter, Savannah) · Ohio EPA Licensed
Operators · Authorized Water-Right® dealer · WQA Certified · Made in USA · serves Mahoning,
Columbiana & Trumbull counties + Western PA · 875 River Road, Lowellville, OH 44436 ·
(877) 750-1420 · info@savannaspringswater.com · *“We make one thing perfectly clear…”*
