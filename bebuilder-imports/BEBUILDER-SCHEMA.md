# BeBuilder import-JSON schema (reverse-engineered from real exports)

Reference for generating BeBuilder (BeTheme / Muffin "mcb") import data. Derived
from exports off the staging site. Used by `_generate-all.py`.

## Element nesting
```
[ section, section, ... ]            # top level = array of sections
section.wraps = [ wrap, wrap, ... ]  # a section holds wraps (columns)
wrap.items   = [ item, item, ... ]   # a wrap holds items (content elements)
```
Every element has: `uid` (random), `attr` (settings), plus size fields on
wraps/items: `size`, `tablet_size`, `laptop_size`, `mobile_size` (e.g. "1/1",
"1/2", "1/3", "1/4"), and `tablet_resized:"0"`.

- **section**: `{"icon":"section","jsclass":"section","title":"Section","ver":"default","attr":{...},"wraps":[...]}`
- **wrap**: `{"icon":"wrap","jsclass":"wrap","title":"Wrap","attr":{...},"items":[...]}`
- **item**: `{"type":"<type>","jsclass":"<type>","title":"...","icon":"...","attr":{...}}`

`attr` always carries boilerplate: `vb_postid`, `vb:1`, `rwd:"desktop"`, plus a
pile of `query_*` / `background_switcher*` defaults (harmless; copy as-is).

## Custom CSS class  ← KEY
Add a `classes` string to ANY element's `attr` to put a class on it:
- section: `"classes":"test-section-class"`  → `.test-section-class` on the section
- wrap:    `"classes":"test-wrap-class"`
- column/text item: `"classes":"test-column-class"`

This is the clean way to target an element from the theme stylesheet (no `:has()`
needed).

## Advanced CSS (css_advanced_*) — generic engine
Each entry: `{"val":<v>,"selector":"<sel>","style":"<css-prop>"}`. `mfnuidelement`
in the selector is replaced with the element's uid on import. `val` is a plain
string for color/opacity, or `{"desktop":...}` for most others (responsive).

Section selectors target `.mcb-section-mfnuidelement`:
- `css_advanced_background_color` → `{val:"#3F51B5", style:"background-color"}`
- `css_advanced_background_image` → `{val:{desktop:"URL#attachmentID"}, style:"background-image"}` (WP wraps val in `url()`; can't inject a gradient here)
- `css_advanced_background_repeat|position|size` → no-repeat / center / cover
- `css_advanced_background_overlay_background_color` → selector `.mcb-section-mfnuidelement .mcb-background-overlay`, `{val:"#000000", style:"background-color"}`
- `css_advanced_background_overlay_opacity` → same selector, `{val:"0.49", style:"opacity"}`
- `css_advanced_padding` / `css_advanced_margin` → `{val:{desktop:{top,right,bottom,left:"10px"}}, style:"padding"|"margin"}`
- `css_advanced_align_items` → selector `.mcb-section-mfnuidelement .section_wrapper`, `{val:{desktop:"flex-start"}, style:"align-items"}`

Wrap selectors target `.mcb-wrap-mfnuidelement > .mcb-wrap-inner` (confirmed for
bg-color/border/radius); inner grid uses `.mcb-wrap-grid.mcb-wrap-mfnuidelement > .mcb-wrap-inner`:
- `css_advanced_background_color`, `css_advanced_border_style` ("solid"),
  `css_advanced_border_color`, `css_advanced_border_radius` ({desktop:"18px 18px 18px 18px"})

Item selectors target `.mcb-item-mfnuidelement .mcb-column-inner` (e.g.
`css_advanced_margin` on an image item). Many widgets expose CSS custom props,
e.g. divider gap → selector `.mcb-item-mfnuidelement .mfn-divider-inner`,
style `--mfn-divider-gap-top`.

## Native element types (item `type` → key attrs)
Use these instead of hand-built HTML where possible.

| type | purpose | key attrs |
|------|---------|-----------|
| `column` | rich-text (TinyMCE) block | `content` (HTML), `classes` |
| `heading` | heading | `title`, `header_tag` ("h2") |
| `button` | button | `title`, `icon_position`, `size` ("2"), link fields |
| `icon_box_2` | icon + title + text (modern) | `title`, `title_tag`, `content`, `icon` ("icon-lamp"), `icon_position:{desktop:"top"}`, `icon_align:{desktop:"center"}` |
| `icon_box` | icon box (basic) | `title`, `title_tag`, `content`, `icon`, `icon_position`("top") |
| `image` | image | `src` ("URL#id"), `size`("full"), `mask_shape_*` |
| `divider_2` | divider | `align`, `type`("border-solid"), `css_divider_gap_top/bottom` |
| `fancy_divider` | shaped divider | `style`("circle up") |
| `spacer` | vertical space | (none) |
| `placeholder` | empty placeholder | (none) |
| `html` | raw HTML element | (content set in editor) |
| `list` | icon list (basic) | `icon`, `title`, `title_tag`, `content`, `style` |
| `list_2` | list | `tabs:[{content}]`, `starting`, `align`, `icon` |
| `feature_list` | feature list | `tabs:[{title,icon,link}]`, `columns` |
| `accordion` | accordion | `title`, `tabs:[{title,content}]`, `style`("accordion") |
| `faq` | FAQ | `title`, `tabs:[{title,content}]`, `style`("accordion") |
| `info_box` | info box | `title`, `tabs:[{content}]` |
| `call_to_action` | CTA band | `title`, `title_tag`, `icon`, `content` |
| `feature_box` | image + title + text | `image`, `title`, `content` |
| `flat_box` | image + icon + title + text | `image`, `icon`, `title`, `content` |
| `article_box` | image + slogan + title | `image`, `slogan`, `title` |
| `banner_box` | banner | `image`, `title`, `subtitle`, `link_title`, `order`, css width vars |
| `before_after` | before/after slider | `image_before`, `image_after`, `size` |
| `hover_box` | swap image on hover | `image`, `image_hover` |
| `hover_color` | color hover text | `content` |
| `blockquote` | quote | `content`, `author` |
| `fancy_heading` | styled heading | `title`, `content`, `style`("icon") |
| `counter` | animated number | `title`, `icon`, `number`, `duration`, `type` |
| `chart` | % chart | `title`, `percent`, `icon`, `line_width` |
| `countdown` / `countdown_2` | countdown | `date` ("12/30/2025 12:00:00") |
| `contact_box` | contact | `title`, `address` |
| `how_it_works` | step | `title`, `number`, `content` |
| `our_team_list` | team row | `image`, `title`, `subtitle` |
| `image_gallery` | gallery | `ids` ("123,122,124"), `columns`, `size` |
| `breadcrumbs` | breadcrumbs | `separator` (">") |
| `icon` / `icon_2` | single icon | `icon` |
| `table_of_contents`, `search_results`, `filters`, `hotspot`, `helper` | dynamic/advanced widgets | (see export) |

### More element types (batch 2)
| type | purpose | key attrs |
|------|---------|-----------|
| `visual` | rich-text (TinyMCE), same as `column` | `content` (HTML) |
| `plain_text` | plain text block | `content` |
| `tabs` | tabbed content | `title`, `tabs:[{title,content}]`, `type`("horizontal"), `padding` |
| `toggle` | toggles | `tabs:[{title,content}]`, `tag`, `icon`, `active_icon`, `open_first/all` |
| `timeline` | timeline | `tabs:[{title,date,content}]` |
| `progress_bars` | bars | `title`, `tabs:[{title,value,size,color}]` |
| `progress_icons` | icon meter | `icon`, `count`, `active` |
| `quick_fact` | big number fact | `heading`, `title`, `content`, `number` |
| `pricing_item` | pricing card | `image`, `title`, `price`, `tabs:[{title}]`, `icon_position`, `style`("box") |
| `opening_hours` | hours table | `title`, `tabs:[{days,hours}]`, `content` |
| `our_team` | team member | `heading`, `image`, `title`, `subtitle`, `style` |
| `photo_box` | photo + title + text | `image`, `title`, `content` |
| `promo_box` | promo (image + text, position) | `image`, `title`, `content`, `position`("left") |
| `story_box` | image + title + text | `image`, `title`, `content` |
| `sliding_box` | hover-slide box | `image`, `title` |
| `trailer_box` | slogan + title over image | `image`, `slogan`, `title` |
| `zoom_box` | zoom-on-hover | `image`, `content` |
| `media_carousel` | image carousel | `tabs:[{image,link,title,content}]`, `columns`, `custom_arrow_*` |
| `marquee_text` | scrolling ticker | `tabs:[{title,link}]`, `css_marque_speed`, `css_marque_item_gap` |
| `video` | video embed | `video` (YouTube id), `object_position`, `mask_shape_*` |
| `map` / `map_basic` | Google map | `lat`, `lng`, `zoom`, `type`("ROADMAP") / `zoom`, `height` |
| `opening_hours`, `contact_box` | local-business info | (above) |
| `share` | social share | `facebook/twitter/linkedin:"1"` + `*_icon`, `copy_link` |
| `livesearch` | live search box | `min_characters`, `container_height`, `featured_image` |
| `megamenu_menu` | nav menu widget | `menu_style`, `submenu*` |
| `sidebar_widget` | render a WP sidebar | `sidebar` ("footer-area-1") |
| `payment_methods` | payment icons | css opacity |
| `lottie` | Lottie animation | `source_switcher`, `trigger`, `speed`, `frame_*` |
| `our_team_list` | team row | `image`, `title`, `subtitle` |

### Icons
Widget `icon` values accept **two icon sets**:
- BeTheme/Mfn: `icon-lamp`, `icon-book`, `icon-bucket`, `icon-check`, `icon-dot`,
  `icon-facebook`, `icon-x-twitter`, `icon-linkedin`, …
- FontAwesome: `fas fa-plus`, `fas fa-minus`, `far fa-copy`, `fas fa-arrow-down`, …

(Not Lucide — our brand SVGs only exist in the theme via `ss_icon()`, so for
pixel-perfect brand icons we still embed SVG in `column`/`html` items.)

`button` supports a `button_function` (e.g. `mfn-read-more`,
`mfn-copy-to-clipboard`).

## Practical notes
- For brand-styled cards we use: a wrap with a `classes` hook + a native `image`
  item + a `column` text item, styled from the theme CSS (see `.ss-ncard-body`).
- Background image val keeps a `#<attachmentID>` suffix (WP strips it on render);
  a bare URL works too.
- A lone half-width wrap is awkward to select in the editor — pair `1/2` text
  with an empty `1/2` wrap.
