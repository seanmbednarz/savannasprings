# Savanna Springs — Website UI Kit

A high-fidelity, click-through recreation of the Savanna Springs marketing site, rebuilt on the new design system. Open `index.html`.

## Screens
- **Home** (`HomePage.jsx` + `Hero.jsx`) — hero, Water-Right strip, product grid, value band, testimonial, common-problems band, CTA.
- **Products** (`ProductsPage.jsx`) — Water Softeners detail: problem framing, Impression Plus® series cards, eco/savings grid.
- **Specials** (`SpecialsPage.jsx`) — current offers grid + "not sure?" CTA.
- **Quote** (`QuotePage.jsx`) — interactive Free Water Analysis form with success state.
- About / FAQ / Blog route to a tasteful stub (not in scope for this kit).

## Architecture
- `App.jsx` — client-side router + shared `Header`/`Footer` chrome and a stub page.
- `Header.jsx`, `Footer.jsx` — site chrome (utility bar, nav, footer columns).
- `Icon.jsx` — Lucide-derived inline SVG icon set (`window.SSIcon`).
- All screens compose the design-system primitives from `window.SavannaSpringsDesignSystem_15883b` (Button, Card, Badge, Input, Select, Checkbox, Switch, Avatar, Alert).

## Notes
- Each component file attaches itself to `window.SS*`; `index.html` loads them via Babel and mounts `SSApp`.
- Imagery: `assets/img-hero-people.png` (cropped from brand collateral). Product "device" visuals are styled placeholders — swap in real product cut-outs when available.
