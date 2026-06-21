---
name: savanna-springs-design
description: Use this skill to generate well-branded interfaces and assets for Savanna Springs Water Solutions, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/`, `components/`, `guidelines/cards/`, `ui_kits/website/`, `assets/`).

Savanna Springs is a family-owned, American-made water-treatment company (softeners, drinking water, well water, salt delivery) and a Water-Right® dealer. The brand is **navy + spring-blue + sun-yellow + duck-orange**, friendly and trustworthy, with a rounded look (Outfit display / Figtree body) and a script-wordmark + rubber-duck logo. Tagline: *"We make one thing perfectly clear…"* Never use emoji.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out of `assets/` and create static HTML files for the user to view, linking `styles.css` for tokens. If working on production code, copy assets and read the rules here to become an expert in designing with this brand. Compose the reusable primitives from `window.SavannaSpringsDesignSystem_15883b` (Button, Card, Badge, Input, Select, Checkbox, Switch, Avatar, Alert); see each component's `.prompt.md` for usage.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few clarifying questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
