# Debuggers Studio | Your Go-To Web and Software Design Partner — Style Reference
> Extracted 2026-11-08 from https://debuggersstudio.com/

**Theme:** light

Debuggers Studio | Your Go-To Web and Software Design Partner (debuggersstudio.com) reads as a light, layered interface built on a Poppins/sans-serif type pairing. Structurally it relies on fully-rounded pill shapes as its signature geometry, and soft shadows lift key surfaces off the canvas — while brand accent (#ea4338) carries the interactive energy. Motion is measured and smooth, averaging 330ms on interactive transitions. Typography runs from 16px up to 100px across 8 steps, and the spacing system sits on a 4-unit base with 40px container padding.

## Contents

- [At a Glance](#at-a-glance)
- [Tokens — Colors](#tokens-colors)
- [Tokens — Typography](#tokens-typography)
- [Iconography](#iconography)
- [Tokens — Spacing & Shapes](#tokens-spacing-shapes)
- [Effects & Treatments](#effects-treatments)
- [Tokens — Motion](#tokens-motion)
- [Design Token System](#design-token-system)
- [Micro-interactions](#micro-interactions)
- [Component State Matrix](#component-state-matrix)
- [Overlays & Portals](#overlays-portals)
- [Components](#components)
- [Component Census](#component-census)
- [Component API Sketch](#component-api-sketch)
- [Starter Components](#starter-components)
- [Do's and Don'ts](#dos-and-donts)
- [Surfaces](#surfaces)
- [Elevation](#elevation)
- [Imagery](#imagery)
- [Assets & Media](#assets-media)
- [Layout](#layout)
- [Page Blueprint](#page-blueprint)
- [Grid & Composition](#grid-composition)
- [Landing Page Anatomy](#landing-page-anatomy)
- [Hero & Conversion](#hero-conversion)
- [Signature Devices](#signature-devices)
- [Content & Copy](#content-copy)
- [Accessibility Profile](#accessibility-profile)
- [Responsive](#responsive)
- [Responsive Behaviour](#responsive-behaviour)
- [Agent Prompt Guide](#agent-prompt-guide)
- [Quick Start](#quick-start)
- [Rebuild Checklist](#rebuild-checklist)
- [Extraction Coverage](#extraction-coverage)
- [Known Gaps](#known-gaps)

## At a Glance

The decisions that define this design. Everything below expands on these.

| Aspect | Value |
|--------|-------|
| Theme | light, comfortable density |
| Core colors | canvas `#ffffff`, surface `#fef6f6`, text `#181536` (17.5:1), accent `#ea4338` |
| Display type | Poppins 400, 100px / 1 |
| Body type | Poppins 400, 16px / 1.5 |
| Corner radius | 3px buttons, 6px cards, 8px, 10px buttons, pills (9999px) |
| Spacing | 4px base unit, 1140px container, 40px card padding |
| Elevation | 4 shadow tiers, most used `rgba(0, 0, 0, 0.2) 0px 0px 10px 0px` |
| Motion | 300ms default with `ease`, honours reduced motion |
| Breakpoints | 421px, 450px, 479px, 500px, 545px, 769px |
| Page flow | Content section → Hero → Footer |
| Built with | Tailwind CSS, WordPress, Google Fonts |

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Canvas | `#ffffff` | `--color-bg-canvas` | Page background — the base layer every other surface floats on · 41.52% of usage |
| Primary Text | `#181536` | `--color-text-primary` | Primary copy, headings, high-emphasis UI labels — 17.5:1 against canvas · 4.51% of usage |
| Secondary Text | `#121029` | `--color-text-secondary` | Supporting copy and descriptions — 18.6:1 against canvas · 3.07% of usage |
| Brand Accent | `#ea4338` | `--color-accent` | Primary interactive color — buttons, links, key fills carry the brand energy · 11.19% of usage |
| Surface | `#fef6f6` | `--color-bg-surface` | Elevated container fill — cards, nav bars, panels sitting on the canvas · 2.17% of usage |
| Border | `#ee6960` | `--color-border` | Hairline separators and card outlines · 2.17% of usage |
| Border Strong | `#d5d8dc` | `--color-border-strong` | Higher-emphasis outlines · 1.08% of usage |
| Blue Dark | `#2c2762` | `--color-blue-dark` | Supporting text or icon color · 14.8% of usage |
| Gray Dark | `#69727d` | `--color-gray-dark` | Supporting text or icon color · 5.42% of usage |
| Gray Dark 2 | `#33373d` | `--color-gray-dark-2` | Supporting text or icon color · 4.69% of usage |
| Blue Dark 2 | `#565281` | `--color-blue-dark-2` | Supporting text or icon color · 3.61% of usage |
| Blue Dark 3 | `#0901f8` | `--color-blue-dark-3` | Supporting text or icon color · 2.35% of usage |

**Gradients in use:**
- `linear-gradient(120deg, rgb(147, 56, 253) 0%, rgba(255, 255, 255, 0) 50%), linea` (2 uses)
- `linear-gradient(90deg, rgb(142, 54, 253) 0%, rgb(5, 122, 255) 100%)` (2 uses)

## Tokens — Typography

### Poppins — display+body family
- **Weights:** 400, 500, 600, 700
- **Sizes:** 100px, 90px, 80px, 75px, 56px, 40px, 30px, 24px
- **Role:** Workhorse family — used for both display headlines and body/UI text across weights 400/500/600/700.

### sans-serif — supporting family
- **Weights:** 400
- **Sizes:** 16px
- **Role:** Supporting family for accents and specialized text.

### system-ui — supporting family
- **Weights:** 400
- **Sizes:** 16px
- **Role:** Supporting family for accents and specialized text.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Weight | Family |
|------|------|-------------|----------------|--------|--------|
| display | 100px | 1 | — | 400 | Poppins |
| heading-xl | 56px | 1.43 | — | 700 | Poppins |
| heading-lg | 40px | 1.5 | — | 700 | Poppins |
| heading | 30px | 1.2 | — | 700 | Poppins |
| heading-sm | 24px | 1.5 | — | 600 | Poppins |
| subheading | 20px | 1 | — | 400 | Poppins |
| subheading-2 | 18px | 1 | — | 400 | Poppins |
| body | 16px | 1.5 | — | 400 | Poppins |

## Iconography

- **Style:** filled, 1.5px strokes
- **Size scale:** 16 / 17 / 20px (145 icons measured)
- **Delivery:** inline SVG
- **Illustration:** 24 larger vector graphics present (spot/ambient illustration is part of the language)

## Tokens — Spacing & Shapes

**Density:** comfortable

### Border Radius

| Context | Value | Usage |
|---------|-------|-------|
| button | 30px | 31 elements |
| card | 20px | 31 elements |
| other | 10px | 6 elements |
| tag | pill (fully rounded, 9999px) | 5 elements |
| image | 10px | 1 elements |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(0, 0, 0, 0.2) 0px 0px 10px 0px` | `--shadow-sm` |
| md | `rgba(0, 0, 0, 0.23) 0px 1px 2px 1px` | `--shadow-md` |
| lg | `rgba(204, 0, 255, 0.11) -6px 10px 20px 0px, rgba(157, 102, 250, 0.1) -4px 10px 10px 0px, rgba(147, 56, 252, 0.` | `--shadow-lg` |
| xl | `rgba(0, 0, 0, 0.25) 0px 0px 14px 0px` | `--shadow-xl` |

### Layout

- **Page max-width:** 1140px
- **Section gap:** not detected
- **Card padding:** 40px
- **Element gap:** 20px
- **Spacing base unit:** 4px

## Effects & Treatments

- **Gradients:** linear ×4
- **Masks & shapes:** 2 masked elements, 9 clip-paths
- **Blend modes:** background-normal, normal, normal, normal, normal, normal, normal ×2 (duotone/tinting treatment)
- **Filters:** 1 filtered elements

## Tokens — Motion

### Duration scale

| Token | Value | Use |
|-------|-------|-----|
| `--duration-fast` | 200ms | hover/color transitions (3 observed) |
| `--duration-base` | 300ms | default UI transitions (4 observed) |
| `--duration-moderate` | 400ms | panels, accordions, toasts (4 observed) |
| `--duration-slow` | 16520ms | hero reveals, page-level (2 observed) |

### Easing

| Token | Value | Character |
|-------|-------|-----------|
| `--ease-custom-1` | `ease` | used 341× |
| `--ease-custom-2` | `linear` | used 62× |

### Animation recipes (paste-ready)

```css
/* deensimc_marquee_vertical — trigger: on load; 16520ms linear, infinite */
@keyframes deensimc-marquee-vertical {
  from { transform: none; }
  to { transform: translateY(calc(-100% - 20px)); }
}
/* deensimc_marquee_vertical — trigger: on load; 24980ms linear, infinite */
@keyframes deensimc-marquee-vertical {
  from { transform: none; }
  to { transform: translateY(calc(-100% - 20px)); }
}
/* bbFadeInOpacity — trigger: entrance (on load / on scroll into view); 200ms linear */
@keyframes bbfadeinopacity {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Reduced motion:** the site defines `prefers-reduced-motion` overrides — replicate them.

## Design Token System

**Naming fingerprint:** bespoke — these 80 custom properties match no framework convention (Tailwind, shadcn/ui, MUI, Chakra, Bootstrap, Ant, Mantine, Material 3 and Open Props were all tested), and read as hand-authored: `--ast-bg-style-guide`, `--ast-blog-meta-weight`, `--ast-blog-title-font-weight`, `--ast-border-color`, `--ast-code-block-background`.

**Scopes captured:** `:root` → light (80 vars).

### Variable groups

| Group | Kind | Count | Examples |
|---|---|---|---|
| `--wp-preset-color` | color | 21 | `--wp--preset--col…: #0170B9` `--wp--preset…` |
| `--ast-global` | color | 15 | `--ast-global-colo…: #0170B9` `--ast-global…` |
| `--e-global-color` | color | 9 | `--e-global-color-…: #0170B9` `--e-global-c…` |
| `--ast-container` | space | 7 | `--ast-container-d…: 5.67em` `--ast-contain…` |
| `--wp-preset-aspect` | other | 7 | `--wp--preset--asp…: 16/9` `--wp--preset--a…` |
| `--wp-preset-gradient` | other | 4 | `--wp--preset--gra…: linear-gradie…` `--wp-…` |
| `--ast-blog` | mixed | 2 | `--ast-blog-meta-w…: inherit` `--ast-blog-t…` |
| `(ungrouped)` | mixed | 15 | `--ast-bg-style-gu…: #F5F5F5` `--ast-border…` |

### Detected numeric scales

- `--ast-global` — #0170B9 / #3a3a3a / #3a3a3a / #4B4F58 / #F5F5F5 / #FFFFFF / #E5E5E5 / #424242 / #000000 (9 steps, colour ramp)
- `--wp-preset-color` — #0170B9 / #3a3a3a / #3a3a3a / #4B4F58 / #F5F5F5 / #FFFFFF / #E5E5E5 / #424242 / #000000 (9 steps, colour ramp)
- `--wp-preset-aspect` — 3/2 / 2/3 / 4/3 / 3/4 / 16/9 / 9/16 px (6 steps, uneven — no single step size, so copy the values rather than a formula)

**Tokenised coverage:** 42% of the page's most-used colours resolve to a variable — variables exist, but most colour on the page is written literally, so treat the block below as a starting point rather than the source of truth.

### Paste-ready token block

```css
:root {
  /* color */
  --ast-global-color-5: #FFFFFF;
  --ast-global-color-2: #3a3a3a;
  --ast-global-color-7: #424242;
  --ast-global-color-4: #F5F5F5;
  --ast-global-color-0: #0170B9;
  --ast-global-color-1: #3a3a3a;
  --ast-global-color-3: #4B4F58;
  --ast-global-color-6: #E5E5E5;
  --ast-global-color-8: #000000;
  --ast-global-color-secondary: var(--ast-global-color-4);
  --ast-border-color: #dddddd;
  --ast-global-color-subtle-background: var(--ast-global-color-6);
  --wp--preset--color--ast-global-color-0: var(--ast-global-color-0);
  --wp--preset--color--ast-global-color-1: var(--ast-global-color-1);
  --wp--preset--color--ast-global-color-2: var(--ast-global-color-2);
  --wp--preset--color--ast-global-color-3: var(--ast-global-color-3);
  --wp--preset--color--ast-global-color-4: var(--ast-global-color-4);
  --wp--preset--color--ast-global-color-5: var(--ast-global-color-5);
  --wp--preset--color--ast-global-color-6: var(--ast-global-color-6);
  --wp--preset--color--ast-global-color-7: var(--ast-global-color-7);
  --wp--preset--color--ast-global-color-8: var(--ast-global-color-8);
  --wp--preset--color--black: #000000;
  --wp--preset--color--cyan-bluish-gray: #abb8c3;
  --wp--preset--color--light-green-cyan: #7bdcb5;
  --wp--preset--color--pale-cyan-blue: #8ed1fc;
  --wp--preset--color--pale-pink: #f78da7;
  --wp--preset--color--vivid-cyan-blue: #0693e3;
  --wp--preset--color--vivid-green-cyan: #00d084;
  --wp--preset--color--vivid-purple: #9b51e0;
  --wp--preset--color--vivid-red: #cf2e2e;
  --wp--preset--color--white: #ffffff;
  --wp--preset--color--luminous-vivid-amber: #fcb900;
  --wp--preset--color--luminous-vivid-orange: #ff6900;
  --ast-global-color-primary: var(--ast-global-color-5);
  --ast-bg-style-guide: var( --ast-global-color-secondary,var(--ast-global-color-5) );
  --ast-code-block-background: #EEEEEE;
  --ast-comment-inputs-background: #FAFAFA;
  --ast-gallery-block-color: #000;
  --ast-global-color-alternate-background: var(--ast-global-color-7);
  --ast-global-dark-bg-style: #fff;
  --ast-global-dark-lfs: #fbfbfb;
  --ast-lifter-hover-bg: #e6e6e6;
  --ast-search-border-color: #e7e7e7;
  --ast-title-layout-bg: #eeeeee;
  --ast-wc-container-head-bg-color: #fbfbfb;
  --ast-widget-bg-color: #fafafa;
  --e-global-color-astglobalcolor0: #0170B9;
  --e-global-color-astglobalcolor1: #3a3a3a;
  --e-global-color-astglobalcolor2: #3a3a3a;
  --e-global-color-astglobalcolor3: #4B4F58;
  --e-global-color-astglobalcolor4: #F5F5F5;
  --e-global-color-astglobalcolor5: #FFFFFF;
  --e-global-color-astglobalcolor6: #E5E5E5;
  --e-global-color-astglobalcolor7: #424242;
  --e-global-color-astglobalcolor8: #000000;
  --srfm-color-input-label: var(--ast-global-color-2);
  /* space */
  --ast-post-nav-space: 0;
  --ast-container-default-lg-padding: 5.67em;
  /* size */
  --ast-narrow-container-width: 750px;
  /* font */
  --ast-blog-title-font-weight: normal;
}
```

**Caveats:** 33 component/width-scoped var blocks skipped

## Micro-interactions

### Declared transitions

| Properties | Duration | Easing | Applies to |
|------------|----------|--------|------------|
| `background, border, border-radius, box-shadow, transform` | 400ms | `ease` | element (144 elements) |
| `background, border, box-shadow, transform` | 400ms | `ease` | element (69 elements) |
| `all` | 200ms | `linear` | link (59 elements) |
| `all` | 400ms | `ease` | link (53 elements) |
| `all` | 300ms | `ease` | button (41 elements) |
| `all` | 200ms | `ease` | element (20 elements) |
| `color, fill` | 300ms | `ease` | element (8 elements) |
| `background, color, border, box-shadow, text-shadow, stroke, ` | 300ms | `ease` | button (4 elements) |

### Hover states (from live stylesheets)

- `button:hover` (4 elements) → color: rgb(255, 255, 255)
- `a:hover` (162 elements) → color: rgb(25, 25, 112)
- `a:hover` (162 elements) → outline-width: 0px
- `a:hover` (162 elements) → color: rgb(40, 44, 109)
- `.elementor-widget-button .elementor-button:hover` (17 elements) → background-color: rgb(13, 153, 255); border-bottom-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255); color: rgb(255, 255, 255)
- `button:hover` (4 elements) → background-color: rgb(13, 153, 255); border-bottom-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255); color: rgb(255, 255, 255)
- `.elementor-button:hover` (17 elements) → color: rgb(255, 255, 255)
- `.elementor-icon:hover` (20 elements) → color: rgb(105, 114, 125)

### Active / pressed states

- `a:active` → outline-width: 0px
- `.ast-button:active` → outline-width: 0px
- `.button:active` → outline-width: 0px
- `button:active` → outline-width: 0px

### Interaction patterns

- **Hover language:** predominantly *tint* (77% of 60 hover rules)
- **Cursor language:** pointer

## Component State Matrix

### Actions

**Ghost button** — 11 instances · exemplar `a.elementor-button` · measured 186×24px

| State | Background | Text | Border | Other |
|---|---|---|---|---|
| **Base** | `#02010100` | `#ea4338` | `none` | radius 30px · padding 0px 0px |
| Hover | #0d99ff | #ffffff | bor… | outline outline-width:0px · decoration te… |
| Focus | #0d99ff | #ffffff | bor… | outline outline-width:thin · decoration t… |
| Active / pressed | — | — | — | outline outline-width:0px |

Transition recipe: `transition: all 0.3s ease`

_Also changed but not modelled here: `text-decoration-sty…`._

**Secondary button** — 2 instances · exemplar `a.btn-primary` · measured 369×56px

| State | Text | Other |
|---|---|---|
| **Base** | `#ffffff` | radius 30px · padding 16px 32px |
| Hover | #282c6d | outline outline-width:0px · decoration te… |
| Focus | #282c6d | outline outline-width:thin · decoration t… |
| Active / pressed | — | outline outline-width:0px |

Transition recipe: `transition: all 0.2s linear`

_Also changed but not modelled here: `text-decoration-sty…`._

**Ghost button** — 1 instance · exemplar `a.elementor-button` · measured 138×52px

| State | Background | Text | Border | Other |
|---|---|---|---|---|
| **Base** | `#ffffff` | `#181536` | `none` | radius 30px · padding 14px 32px |
| Hover | #0d99ff | #ffffff | bor… | outline outline-width:0px · decoration te… |
| Focus | #0d99ff | #ffffff | bor… | outline outline-width:thin · decoration t… |
| Active / pressed | — | — | — | outline outline-width:0px |

Transition recipe: `transition: all 0.3s ease`

_Also changed but not modelled here: `text-decoration-sty…`._

**Secondary button** — 1 instance · exemplar `a.elementor-button` · measured 165×52px

| State | Background | Text | Border | Other |
|---|---|---|---|---|
| **Base** | `#fef2f1` | `#181536` | `none` | radius 30px · padding 14px 32px |
| Hover | #0d99ff | #ffffff | bor… | outline outline-width:0px · decoration te… |
| Focus | #0d99ff | #ffffff | bor… | outline outline-width:thin · decoration t… |
| Active / pressed | — | — | — | outline outline-width:0px |

Transition recipe: `transition: all 0.3s ease`

_Also changed but not modelled here: `text-decoration-sty…`._

### Navigation

**Link** — 1 instance · exemplar `a.skip-link` · measured 1×1px

| State | Background | Text | Shadow | Other |
|---|---|---|---|---|
| **Base** | `#00000000` | `#0901f8` | `none` | radius 0px · padding 0px 0px |
| Hover | — | #282c6d | — | outline outline-width:0px · decoration te… |
| Focus | #f1f1f1 | #21759b | rgba(0, 0, 0, 0.6) 0px 0px 2px 2px | size 0.875rem · outline outline-width:thi… |
| Active / pressed | — | — | — | outline outline-width:0px |

Transition recipe: `transition: all 0.2s linear`

_Also changed but not modelled here: `text-decoration-sty…`, `display`, `height`, `left`._

**Tab** — 3 instances · exemplar `button#e-n-tab-title-178508092.e-…` · measured 310×124px

| State | Background | Text | Border | Other |
|---|---|---|---|---|
| **Base** | `#ffffff` | `#181536` | `1px solid` | radius 10px · padding 15px 20px |
| Hover | #ffffff | #192237 | bo… · bor… | — |
| Focus | #0d99ff | #ffffff | bor… | outline outline-width:initial |
| Active / pressed | — | — | — | outline outline-width:0px |
| Checked / selected | #ffffff | #192237 | bo… | — |

Transition recipe: `transition: background 0.3s ease, color 0.3s ease, border 0.3s ease, box-shadow 0.3s ease, text-shadow 0.3s ease, stroke … ease …, /* +1 more */`

_Also changed but not modelled here: `background-position…`, `background-position…`, `background-size`, `background-repeat`._

**Nav item** — 13 instances · exemplar `a.elementor-item` · measured 155×60px

| State | Text | Other |
|---|---|---|
| **Base** | `#ffffff` | radius 0px · padding 8px 0px |
| Hover | #282c6d | outline outline-width:0px · padding paddi… … |
| Focus | #282c6d | outline outline-width:thin · padding padd… … |
| Active / pressed | — | outline outline-width:0px |

Transition recipe: `transition: all 0.4s ease`

_Also changed but not modelled here: `text-decoration-sty…`, `line-height`._

**Tab** — 1 instance · exemplar `button#e-n-tab-title-178508091.e-…` · measured 307×124px

| State | Background | Text | Border | Other |
|---|---|---|---|---|
| **Base** | `#ffffff` | `#192237` | `1px solid` | radius 10px · padding 15px 20px |
| Hover | #0d99ff | #ffffff | bor… | — |
| Focus | #0d99ff | #ffffff | bor… | outline outline-width:initial |
| Active / pressed | — | — | — | outline outline-width:0px |
| Checked / selected | #ffffff | — | bo… | — |

Transition recipe: `transition: background 0.3s ease, color 0.3s ease, border 0.3s ease, box-shadow 0.3s ease, text-shadow 0.3s ease, stroke … ease …, /* +1 more */`

_Also changed but not modelled here: `background-position…`, `background-position…`, `background-size`, `background-repeat`._

**Nav item** — 1 instance · exemplar `a` · measured 146×38px

| State | Text | Other |
|---|---|---|
| **Base** | `#0901f8` | radius 0px · padding 0px 0px |
| Hover | #282c6d | outline outline-width:0px · decoration te… |
| Focus | #282c6d | outline outline-width:thin · decoration t… |
| Active / pressed | — | outline outline-width:0px |

Transition recipe: `transition: all 0.2s linear`

_Also changed but not modelled here: `text-decoration-sty…`._

### Surfaces

**Card** — 10 instances · exemplar `div.elementor-element` · measured 1030×229px

| State | Border |
|---|---|
| **Base** | `none` |
| Hover | bo… · bor… |

Transition recipe: `transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease, transform 0.4s ease`

_+1 further archetype were measured but not tabled._

### Interaction language

- **Hover language:** dominantly *color*. Of the 10 of 13 archetypes that respond to hover, 100% shift color, 70% shift textDecoration, 20% shift border (one archetype can move several at once); 3 archetypes change nothing on hover.
- **Focus policy:** a real `outline` on 9 of 13 archetypes, ring colour `#00000099`.
- **Warning:** 10 rules set `outline: none` — the design relies on its replacement ring existing. Never port the suppression without the ring.
- **Tap targets:** median 135×38px over 58 interactive elements; 31 (53%) fall under the 44px guidance — smallest: `a.skip-link` 1×1px, `a.elementor-icon` 17×17px.
- **Cursor language:** Card → `auto`, Ghost button → `pointer`, Icon button → `pointer`, Link → `pointer`, Nav item → `pointer`. 66 non-interactive elements also carry `cursor: pointer` — the page signals clickability broadly.

## Overlays & Portals

These surfaces are `display:none` at rest; they were temporarily forced measurable off-screen and restored. Every value below is real, not inferred.

| Kind | Background | Radius | Shadow | Padding | Width |
|---|---|---|---|---|---|
| Menu — Home Services MVP D… | `#00000000` | `0px` | `none` | `0px 0px` | `460px` |
| Menu — Menu Toggle | `#00000000` | `0px` | `none` | `0px 0px` | `0px` |
| Menu — MVP Development Pro… | `#192237` | `0px` | `none` | `0px 0px` | `0px` |
| Menu — Menu Toggle | `#00000000` | `0px` | `none` | `0px 0px` | `0px` |
| Menu — Marquee Addons Reel… | `#192237` | `0px` | `none` | `0px 0px` | `0px` |
| Menu — Home Services MVP D… | `#192237` | `0px` | `none` | `0px 0px` | `0px` |
| Menu — Menu Toggle | `#00000000` | `0px` | `none` | `0px 0px` | `0px` |
| Menu — MVP Development Pro… | `#192237` | `0px` | `none` | `0px 0px` | `0px` |

### Layer, backdrop & entry

- **Menu** — z-index 999, text `#2c2762`, 16px type, transitions `all`.
- **Menu** — text `#2c2762`, 16px type, transitions `all`.
- **Menu** — text `#2c2762`, 13px type, transitions `all`.
- **Menu** — text `#2c2762`, 16px type, transitions `all`.
- **Menu** — text `#2c2762`, 13px type, transitions `all`.
- **Menu** — z-index 9997, text `#2c2762`, 13px type, transitions `max-height, transform` over 0.3s, 0.3s.
- **Menu** — text `#ffffff`, 16px type, transitions `all`.
- **Menu** — text `#2c2762`, 13px type, transitions `all`.

## Components

### Filled #02010100 button
**Role:** primary action

#02010100 background, #ea4338 text, border-radius 30px, padding 0px 0px, Poppins 500 16px. Transitions: all 0.3s.

### Ghost / outline button
**Role:** secondary variant (5 instances)

#00000000 background, #2c2762 text, border-radius 0px, padding 0px 0px, Poppins 400 16px. Transitions: all 0s.

### Ghost / outline button
**Role:** secondary variant (5 instances)

#00000000 background, #1f1c46 text, border-radius 10px, padding 20px 20px, Poppins 400 16px, 1px solid rgb(213, 216, 220) border. Transitions: all 0s.

### Card — `.elementor-element` (19 instances)

#ffffff background, border-radius 20px, padding 40px 20px, `rgba(0, 0, 0, 0.2) 0px 0px 10px 0px` shadow.

### Card — `.elementor-widget-container` (9 instances)

#fef6f6 background, border-radius 6px, padding 12px 12px, 2px solid rgb(238, 105, 96) border, no shadow.

### Card — `.e-n-tab-title` (3 instances)

#ffffff background, border-radius 10px, padding 20px 15px, 1px solid rgb(249, 238, 225) border, no shadow.

### Text link (83 instances)

#ffffff text, no underline by default, Poppins 400 16px. Hover transition: all 0.4s.

### Heading stack

| Level | Sample | Font | Size | Line Height | Tracking |
|-------|--------|------|------|-------------|----------|
| H1 | Your {Technology} Partner for  | Poppins 700 | 56px | 80px | normal |
| H2 | AI-Powered Engineering for Hig | Poppins 700 | 40px | 60px | normal |
| H3 | Product Design (UI/UX) | Poppins 700 | 30px | 60px | normal |
| H4 | Featured By | Poppins 600 | 24px | 36px | normal |

## Component Census

Additional UI inventory detected on the page, with a measured exemplar per category:

| Component | Count | Measured exemplar |
|-----------|-------|-------------------|
| Tabs | 4 | bg rgb(255, 255, 255) · radius 10px · pad 15px 20px · 1px solid rgb(246, 203, 199) |
| Accordions / disclosures | 14 | pad 10px 15px |

## Component API Sketch

### Props, from the measured variants

```ts
// Every union member below was measured on this page. Nothing is invented.
type ButtonVariant = 'secondary' | 'ghost' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';  // measured heights: 24 / 33 / 52 / 56px

interface ButtonProps {
  variant?: ButtonVariant;   // "secondary" is the default — 14 instances
  size?: ButtonSize;
  iconOnly?: boolean;      // a square icon-only variant was measured
  children: React.ReactNode;
}

type CardVariant = 'elementor-element' | 'elementor-widget-contai-' | 'e-n-tab-title';
interface CardProps {
  variant?: CardVariant;
  interactive?: boolean;   // cards carry a measured hover state
  children: React.ReactNode;
}
```

### React + Tailwind, using the measured values

```jsx
// Primary button — measured: #02010100 fill, #ea4338 text, 30px radius, 0px 0px padding, Poppins 500 16px
export function Button({ children, ...props }) {
  return (
    <button
      className="inline-flex items-center justify-center font-medium text-base rounded-[30px] px-0 py-0 bg-[#02010100] text-[#ea4338] transition-colors duration-[300ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00000099]"
      {...props}
    >
      {children}
    </button>
  );
}

// Card — measured: #ffffff surface, 20px radius, 40px 20px padding, shadow rgba(0, 0, 0, 0.2) 0px 0px 10px 0px, 19 instances
export function Card({ children }) {
  return <div className="bg-[#ffffff] rounded-[20px] px-5 py-10 shadow-[rgba(0,_0,_0,_0.2)_0px_0px_10px_0px]">{children}</div>;
}
```

_Arbitrary values (`px-[18px]`, `bg-[#4f46e5]`) appear wherever the measured number has no Tailwind scale token — that is deliberate; rounding them to the nearest token changes the design._

## Starter Components

Working React + Tailwind v4 components built from the measured values — the same numbers as the tables above, already wired to the `@theme` tokens in Quick Start. Hover, focus and active classes come from the Component State Matrix. Start here instead of from a blank file.

```tsx
// Starter components generated by DesignMD from https://debuggersstudio.com/ on 2026-11-08.
// Every value below was measured on the page. Needs the Tailwind v4 @theme block from design.md.
import * as React from 'react';

const cx = (...parts: unknown[]) => parts.filter(Boolean).join(' ');

/* ---------------------------------------------------------------- Button */
type ButtonVariant = 'secondary' | 'ghost';

const buttonBase = 'inline-flex items-center justify-center gap-2 whitespace-nowrap font-display text-body font-normal rounded-lg p-5 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none';

const buttonVariants: Record<ButtonVariant, string> = {
  secondary: 'text-[#1f1c46] border border-border-strong',  // measured on “Can you help validate and pl”
  ghost: 'text-accent hover:bg-[#0d99ff] hover:text-bg-canvas hover:outline-2 hover:outline-offset-2 hover:outline-accent active:outline-2 active:outline-offset-2 active:outline-accent focus-visible:bg-[#0d99ff] focus-visible:text-bg-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',  // measured on “Learn More About Us”
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = 'secondary', className, ...props }: ButtonProps) {
  return <button className={cx(buttonBase, buttonVariants[variant], className)} {...props} />;
}

/* ------------------------------------------------------------------ Card */
const cardBase = 'bg-bg-canvas rounded-xl px-10 py-5 shadow-sm';
const cardInteractive = 'transition duration-200 ease-custom-1';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ interactive, className, ...props }: CardProps) {
  return <div className={cx(cardBase, interactive && cardInteractive, className)} {...props} />;
}

/* -------------------------------------------------------------- TextLink */
export function TextLink({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cx('text-bg-canvas font-normal no-underline hover:underline underline-offset-4 transition-colors', className)} {...props} />;
}

/* ------------------------------------------------------- Layout */
export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('mx-auto w-full max-w-[1140px] px-5', className)} {...props} />;
}

/* --------------------------------------------------------------- Heading */
const headingSizes = {
  1: 'text-display font-normal',
  2: 'text-heading-xl font-bold',
  3: 'text-heading-lg font-bold',
  4: 'text-heading font-bold',
} as const;

export function Heading({ level = 1, className, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { level?: 1 | 2 | 3 | 4 }) {
  const Tag = (["h1","h2","h3","h4"] as const)[level - 1];
  return <Tag className={cx('font-display text-balance', headingSizes[level], className)} {...props} />;
}
```

## Do's and Don'ts

### Do
- Use `#ffffff` as the canvas and build every surface from the token table above — never invent intermediate grays
- Use #ea4338 exclusively for interactive moments (buttons, links, key fills) — it is the energy of the system
- Snap all spacing to the 4px base unit grid
- Use fully-rounded (pill, 9999px) radii for buttons and tags
- Default interactive transitions to 300ms with the extracted easing tokens

### Don't
- Do not introduce colors outside the 12-token palette extracted above
- Do not add springy/bounce motion — the source uses the timing functions listed under Tokens — Motion
- Do not stack multiple shadows — keep elevation minimal and let whitespace separate content

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#ffffff` | Page background — the base layer |
| 1 | Surface | `#fef6f6` | Cards, nav bars, panels floating on the canvas |
| 2 | Accent fill | `#ea4338` | Filled CTAs, highlight containers, brand moments |

## Elevation

- **Low:** `rgba(0, 0, 0, 0.2) 0px 0px 10px 0px` (10 uses)
- **Mid:** `rgba(0, 0, 0, 0.23) 0px 1px 2px 1px` (9 uses)
- **High:** `rgba(204, 0, 255, 0.11) -6px 10px 20px 0px, rgba(157, 102, 250, 0.1) -4px 10px 10px 0px, rgba(147, 56, 252, 0.` (2 uses)
- **Highest:** `rgba(0, 0, 0, 0.25) 0px 0px 14px 0px` (1 uses)

## Imagery

102 raster images and 0 inline SVGs were found. Dominant aspect ratios: 1.87:1, 0.76:1, 1.86:1, 1:1. Media is rounded at ~10px or more. Photography or rendered imagery carries the visual weight.

## Assets & Media

### Image inventory

| Role | Rendered | Aspect | Fit | Loading | Alt |
|---|---|---|---|---|---|
| Content | 494×539px @2.3x · webp | 0.92:1 | — | lazy · srcset | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |
| Content | 380×500px @2x · avif | 0.76:1 | contain | lazy | **missing** |

_+70 further images on the page._

**Image pipeline:** 82 images (40 measured in detail); 98% ship a 2× source; 96% are lazy-loaded; 100% carry alt text; average aspect 1.5:1; formats webp ×51, avif ×20, png ×8, svg ×2, jpg ×1.

### Background images

- **Hero** on `div.elementor-element` — `Frame-21-min-scaled.webp` · `background-size: cover`, position 50% 50%
- **Section** on `div.elementor-element` — `Ellipse-10-min-scaled.webp` · `background-size: cover`, position 50% 50%
- **Hero** on `div.elementor-element` — `Frame-39891-min-scaled.webp` · `background-size: cover`, position 50% 50%
- **Card** on `div.elementor-custom-em…` — `Thumbnail-2-min.webp` · `background-size: cover`, position 50% 50%, repeat

### Icon system

The icons fingerprint as **font-awesome** (high confidence) — class:font-awesome-*, viewBox 0 0 20 20, stroke-width 1.5 round. Install that set rather than redrawing: the geometry will match for free. They are fill-first (only 2% of shapes are stroked) — solid glyphs, painted with `currentColor` on the fill.

| Icon property | Measured value |
|---|---|
| Icons sampled | 183 |
| Box sizes | 16 / 17 / 20px |
| Stroke width | 1.5 |
| Corners / caps | round |
| Delivery | mixed |
| Icon fonts | 172 glyphs (generic ×172) |

### Web fonts

| Family | Format | Weight | Display | Host |
|---|---|---|---|---|
| Font Awesome 5 Brands | woff2 | 400 | block | same-origin |
| Font Awesome 5 Free | woff2 | 400 | block | same-origin |
| Font Awesome 5 Free | woff2 | 900 | block | same-origin |
| swiper-icons | data | 400 | — | data: |
| Roboto | woff2 | 100 | — | same-origin |
| Roboto | woff2 | 200 | — | same-origin |
| Roboto | woff2 | 300 | — | same-origin |
| Roboto | woff2 | 400 | — | same-origin |

_280 `@font-face` rules in total (8 distinct families shown)._

The resolved fallback stacks — copy them verbatim; the fallbacks are what the page shows before the webfont lands:

```css
--font-body: Poppins, sans-serif;
--font-heading: Poppins, sans-serif;
```

_Headings and body share one family — the hierarchy is carried by weight and size alone._

**Font delivery:** mixed from `same-origin`, `fonts.googleapis.com`, `fonts.gstatic.com` (link fonts.googleapis.com; link fonts.googleapis.com). 200 faces registered, 0 actually loaded and 200 never used — do not ship the dead weights.

**Brand marks:** apple-touch-icon present.

### Rich media

- **Embeds:** 1 iframe (vimeo ×1).

_Asset notes: background-image hunt capped at 1200 elements · 65 stylesheets — @font-face harvest read the first 60 · 1 cross-origin stylesheet could not be read for @font-face rules._

## Layout

Content is centered in a ~1140px max-width container. Cards use ~40px padding. The hero heading is start-aligned.

## Page Blueprint

```text
┌──────────────────────────────────────────────────────────┐
│ HEADER                         78px · transparent on top │
├──────────────────────────────────────────────────────────┤
│ 1. HERO                               11108px · 1522% vh │
│   #fefbfb · 2 cols · 1095px container                    │
├──────────────────────────────────────────────────────────┤
│ FOOTER                                 4 columns · 658px │
└──────────────────────────────────────────────────────────┘
```

| # | Band | Height | Background | Container | Padding | Columns |
|---|---|---|---|---|---|---|
| 1 | Hero | 11108px (1522% vh) | `#fefbfb` | 1095px / 20px gutter | 0px | 2 |

### Band construction

All 1 bands are built on one shell — a 1095px centred container, 20px side gutters, and 0px of vertical padding. Height, background and column count are per band and sit in the table above; the bands below need something more.

- **1 · Hero** — inner surfaces use `#ffffff` on 100% of its elements; 2 columns at a 20px gap, items no narrower than 33px; text `#ffffff` at 1:1 against the band; set in Poppins 400 16px on 64% of its text and Poppins 400 16px on 32% of its text.

### Page chrome

- **Header** — 78px tall, `position: static`, transparent until scrolled, 1095px inner container, 0px side padding, overlaps the hero rather than pushing it down.
- **Footer** — 4 columns (row-cluster), column widths 272 / 175 / 175 / 252px, 658px tall, padding 0px / 0px, 970px inner container.

## Grid & Composition

**Container widths:** 1100px on 1 band. The widest measured column is 1100px — build the shell at that width and let narrower bands opt down.

### Grid recipes

| Where | Display | Columns | Gap | Align / justify |
|---|---|---|---|---|
| `div.elementor-element` | flex / row | 2 | 20px | center / space-between |
| `div.elementor-element` | flex / row | 2 | 20px | flex-start / space-between |
| `div.e-con-inner` | flex / row | 4 | 10px | stretch / space-between |

### Z-index layer stack

| z | Role | Position | Element |
|---|---|---|---|
| 99 | Badge | fixed | `div#ast-scroll-top.ast-…` · 42×42px · #090… |
| 1 | Badge | absolute | `div.e-icon-wrapper` · 20×20px |
| 1 | Badge | absolute | `div.e-icon-wrapper` · 20×20px |
| 1 | Badge | absolute | `div.e-icon-wrapper` · 20×20px |
| 1 | Badge | absolute | `div.e-icon-wrapper` · 20×20px |
| 1 | Badge | absolute | `div.e-icon-wrapper` · 20×20px |
| 1 | Badge | absolute | `div.e-icon-wrapper` · 20×20px |
| 1 | Badge | absolute | `div.e-icon-wrapper` · 20×20px |
| 1 | Badge | absolute | `div.e-icon-wrapper` · 20×20px |
| 1 | Badge | absolute | `div.e-icon-wrapper` · 20×20px |

**Z-index scale in use:** `1` · `99` — reuse exactly these 2 steps, do not invent intermediate values.

## Landing Page Anatomy

The page tells a conversion story in this order — rebuild sections in this sequence:

| Order | Section | Heading / evidence | Key elements |
|-------|---------|--------------------|--------------|
| 1 | Content section | Home Services MVP Development Product Design (UI/UX) Custom  | 14 images |
| 2 | Hero | Your {Technology} Partner for Building What's Next | CTA: "Get Your Custom Project Pr" + "Book a Free Consultation" + "Learn More" · 261 images |
| 3 | Footer | Debuggers Studio engineering practices follow internationall | 8 images |

**Section flow:** content → hero → footer

## Hero & Conversion

- **Headline:** "Your {Technology} Partner for Building What's Next"
- **Subheadline:** "With over a decade of experience, hundreds of successful website projects, and a 97% retention rate, we deliver real solutions that help bus"
- **Hero CTA pair:** "Get Your Custom Project Pr" + "Book a Free Consultation" + "10+  Years of Experience"
- **Hero visual:** photo/render (hero block ≈10482px tall)
- **Nav anatomy:** "Debuggers Studio Log" logo · 7 links ("Home", "Services", "MVP Development", "Product Design (UI/UX)", "Custom Web Development"…) · CTA: "Request for Quote"
- **CTA repetition:** "Learn More" ×10, "Request for Quote" ×2 — the same conversion ask returns at every scroll depth
- **Full CTA copy inventory:** "Learn More" · "Request for Quote" · "Book a Free Consultation" · "10+ Years of Experience" · "900+ Projects Completed" · "25+ Countries Served"

## Signature Devices

These patterns define the site's identity — repeat them across every new page:

1. **The Pill Button Language** — every interactive element is fully rounded (9999px radius) — buttons, tags, inputs and badges share one geometry
2. **Card-on-Canvas Contrast** — #fef6f6 surfaces float on a #ffffff canvas — separation comes from background contrast, not shadows

## Content & Copy

### Copy per band

| Band | Eyebrow | Heading | CTA |
|---|---|---|---|
| Hero | — | Your {Technology} Partner for Building What… | "Get Your Custom Proje…" + "Learn More" |
| Navigation | — | — | "Menu Toggle" |

_1 further band carried no headline copy._

### Footer columns

- **** — About, Contact, Career, Blog, Terms & Conditions, Privacy Policy
- **** — Website design packag…, Ecommerce Website, SEO Packages, Website Rebranding, Free Website Maintena…, Offshore Website Serv…, Business Website Host…
- **Also in the footer** — social: facebook, youtube, linkedin, twitter, dribbble; legal line "Copyright © 2026 All rights reserved by Debuggers Studio"

### FAQ

- "What types of projects do you work on?"
- "Can you help validate and plan my idea before development?"
- "Do you work with startups and early-stage founders?"
- "What technologies do you specialize in?"
- "Do you provide dedicated development teams?"
- "Does Debuggers Studio follow international security and compliance standards?"

_Built with `details` disclosures._

**Logo wall:** Debuggers Studio · Menu · Menu Toggle · Rated 5 out of 5 · Image gallery marquee — 5 marks shown as social proof.

### Voice & tone

- **Heading case:** Title Case — 11 sentence, 89 title, 0 upper across 100 headings. Match the dominant one exactly; mixing reads as a different brand.
- **Heading length:** 3.6 words on average over 27 headings — terse; write short declaratives.
- **Person:** second person — the copy addresses the reader directly (you ×63, we ×38).
- **Questions:** 4% of headlines are questions.
- **Reading level:** dense — 24.8 words per sentence, 6 letters per word.
- **Jargon:** medium (1% of words) — house terms: "scalable", "ai-powered".
- **CTA verbs:** "get" ×1, "learn" ×1 — every button starts with one of these.
- **Signature phrases:** "technology partner" ×2, "building what's" ×2, "what's next" ×2 — repeat them; they are the vocabulary of the brand.

**Document metadata:** title "Debuggers Studio | Your Go-To Web and Software Design Partner"; description "Build your own software development team with Debuggers Studio. We build custom software and websites that automate business processes and …"; heading hierarchy H1 ×1 · H2 ×14 · H3 ×11; lang `en-US`.

## Accessibility Profile

- **Contrast discipline:** 58% of measured text usage clears WCAG AA (4.5:1)
- **Focus design:** 60 :focus rules in stylesheets
- **Reduced motion:** `prefers-reduced-motion` overrides present
- **Skip link:** present (keyboard-first navigation)
- **Semantics:** 10 landmarks · 154 ARIA-carrying elements · 100% of images have alt text

## Responsive

Breakpoints declared in stylesheets: `420px`, `421px`, `450px`, `479px`, `500px`, `544px`, `545px`, `767px`, `767.98px`, `768px`, `769px`, `782px`, `880px`, `881px`, `921px`, `921.99px`, `922px`, `992px`, `993px`, `1024px`, `1025px`, `1200px`, `1201px`, `1366px`, `1367px`, `2399px`, `2400px`.

Current viewport analyzed at 1150×730 (desktop-scale view).

## Responsive Behaviour

**Strategy:** mixed — both `min-width` and `max-width` ladders are in play — 125 min-width rules, 236 max-width rules, 2 range rules.

**Ladder:** the 12 breakpoints match no standard scale — they are custom to this site.

### Breakpoint matrix

| Tier | Query | Layout | Spacing | Type | Hidden / shown |
|---|---|---|---|---|---|
| <xs | `≤420px` | width 50% | margin-bottom 1em | — | −1 nav |
| xs | `≥421px` | width 100% | — | — | +1 nav |
| sm | `≥544px` | max-width 100% | padding-bottom 0px | — | — |
| <sm | `≤544px` | width unset | space -53% | type -17% | — |
| sm | `≥545px` | — | margin-bottom 0px | — | — |
| <md | `≤767px` | 1 col | — | — | +2 mobile-only |
| md only | `768–921px` | float none | — | — | — |
| md | `≥768px` | width 33.3333% | margin-bottom auto | — | −1 nav |

Across the 12 stops the ladder rewrites 191 declarations in 159 rules, the heaviest being `<sm` at 45. Nothing else moves — anything not in the matrix above holds at every width.

### Mobile adaptation

- **Navigation:** is swapped by width rather than by a menu button — `'.single .post-navigation .ast-le…`, `'.single .post-navigation .nav-li…`.
- **Grid collapse:** 1 grid drops to a single column and 1 flex row turn into columns.
- **Spacing:** shifts -53% at mobile widths — padding and gaps shrink by roughly that much, not to an arbitrary smaller value.
- **Type:** shifts -17% at mobile widths — the whole scale moves, so keep the ratios.
- **Visibility:** 2 selectors hidden and 3 revealed by width (nav, mobile-only).

### Modern CSS in play

- **`aspect-ratio`** holds media boxes instead of padding hacks.
- **`prefers-reduced-motion`** is honoured by the page itself — replicate the override, do not drop it.
- A **print** stylesheet exists.
- **Feature queries:** `(prefers-reduced-motion: no-prefe…` · `(prefers-reduced-motion: reduce)` · `print` — progressive enhancement is deliberate here.

**Fluid type:** sizes interpolate with `clamp()` / viewport units rather than stepping at breakpoints.

_Caveats: 12 further width conditions were dropped past the 12-breakpoint cap. 9 declared breakpoint values had no capturable declarations (cross-origin or nested stylesheets). rem/em lengths were converted at the assumed 16px root font size._

## Agent Prompt Guide

**Quick Color Reference**
- canvas: #ffffff
- primary text: #181536
- secondary text: #121029
- brand accent: #ea4338
- surface: #fef6f6
- border: #ee6960
- border strong: #d5d8dc
- blue dark: #2c2762

**Example Component Prompts**

1. Rebuild the full landing page in exactly this order: content → hero → footer. Use the Hero & Conversion spec for the first screen, one component recipe per section, and the section rhythm from the Layout metrics.
2. Create the primary button: #02010100 background, #ea4338 text, border-radius 30px, padding 0px 0px, font Poppins 500 16px. On hover, transition all 0.3s.
3. Create a card: #ffffff background, border-radius 20px, padding 40px 20px, box-shadow `rgba(0, 0, 0, 0.2) 0px 0px 10px 0px`.
4. Create the display heading: Poppins weight 400, 100px, line-height 1, #181536 on #ffffff.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-bg-canvas: #ffffff;
  --color-text-primary: #181536;
  --color-text-secondary: #121029;
  --color-accent: #ea4338;
  --color-bg-surface: #fef6f6;
  --color-border: #ee6960;
  --color-border-strong: #d5d8dc;
  --color-blue-dark: #2c2762;
  --color-gray-dark: #69727d;
  --color-gray-dark-2: #33373d;
  --color-blue-dark-2: #565281;
  --color-blue-dark-3: #0901f8;

  /* Typography — Font Families (by role) */
  --font-display: Poppins, sans-serif;
  --font-body: Poppins, sans-serif;

  /* Typography — Scale */
  --text-display: 100px;
  --leading-display: 1;
  --text-heading-xl: 56px;
  --leading-heading-xl: 1.43;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.5;
  --text-heading: 30px;
  --leading-heading: 1.2;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1;
  --text-subheading-2: 18px;
  --leading-subheading-2: 1;
  --text-body: 16px;
  --leading-body: 1.5;

  /* Layout */
  --page-max-width: 1140px;
  --card-padding: 40px;
  --element-gap: 20px;
  --spacing-unit: 4px;

  /* Border Radius */
  --radius-xs: 3px; /* button */
  --radius-sm: 6px; /* card */
  --radius-md: 8px;
  --radius-lg: 10px; /* button, card */
  --radius-xl: 20px; /* card */
  --radius-2xl: 30px; /* button */
  --radius-full: 9999px; /* pills */

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
  --shadow-md: rgba(0, 0, 0, 0.23) 0px 1px 2px 1px;
  --shadow-lg: rgba(204, 0, 255, 0.11) -6px 10px 20px 0px, rgba(157, 102, 250, 0.1) -4px 10px 10px 0px, rgba(147, 56, 252, 0.;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 0px 14px 0px;

  /* Motion */
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-moderate: 400ms;
  --duration-slow: 16520ms;
  --ease-custom-1: ease;
  --ease-custom-2: linear;

  /* Iconography */
  --icon-stroke: 1.5;
  --icon-size: 17px;
}
```

### Tailwind v4

```css
@import "tailwindcss";

@theme {
  /* Colors → bg-*, text-*, border-* */
  --color-bg-canvas: #ffffff;
  --color-text-primary: #181536;
  --color-text-secondary: #121029;
  --color-accent: #ea4338;
  --color-bg-surface: #fef6f6;
  --color-border: #ee6960;
  --color-border-strong: #d5d8dc;
  --color-blue-dark: #2c2762;
  --color-gray-dark: #69727d;
  --color-gray-dark-2: #33373d;
  --color-blue-dark-2: #565281;
  --color-blue-dark-3: #0901f8;

  /* Fonts → font-display, font-body, font-mono */
  --font-display: Poppins, sans-serif;
  --font-body: Poppins, sans-serif;

  /* Type scale → text-display, text-body, … */
  --text-display: 100px;
  --text-display--line-height: 1;
  --text-heading-xl: 56px;
  --text-heading-xl--line-height: 1.43;
  --text-heading-xl--font-weight: 700;
  --text-heading-lg: 40px;
  --text-heading-lg--line-height: 1.5;
  --text-heading-lg--font-weight: 700;
  --text-heading: 30px;
  --text-heading--line-height: 1.2;
  --text-heading--font-weight: 700;
  --text-heading-sm: 24px;
  --text-heading-sm--line-height: 1.5;
  --text-heading-sm--font-weight: 600;
  --text-subheading: 20px;
  --text-subheading--line-height: 1;
  --text-subheading-2: 18px;
  --text-subheading-2--line-height: 1;
  --text-body: 16px;
  --text-body--line-height: 1.5;

  /* Radius → rounded-* */
  --radius-xs: 3px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 10px;
  --radius-xl: 20px;
  --radius-2xl: 30px;
  --radius-full: 9999px;

  /* Shadows → shadow-* */
  --shadow-sm: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
  --shadow-md: rgba(0, 0, 0, 0.23) 0px 1px 2px 1px;
  --shadow-lg: rgba(204, 0, 255, 0.11) -6px 10px 20px 0px, rgba(157, 102, 250, 0.1) -4px 10px 10px 0px, rgba(147, 56, 252, 0.;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 0px 14px 0px;

  /* Easing → ease-* */
  --ease-custom-1: ease;
  --ease-custom-2: linear;

  /* Breakpoints → sm:, md:, lg:, … (measured from the source) */
  --breakpoint-sm: 421px;
  --breakpoint-md: 450px;
  --breakpoint-lg: 479px;
  --breakpoint-xl: 500px;
  --breakpoint-2xl: 545px;
}

/* Durations have no Tailwind namespace — use as duration-(--duration-base) */
:root {
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-moderate: 400ms;
  --duration-slow: 16520ms;
}
```

## Rebuild Checklist

Build in this order. Every item carries the measured numbers it needs — nothing here requires going back to the page.

- [ ] Paste the `:root` block from **Design Token System** — 80 custom properties across 8 naming groups. Nothing below should hard-code a value that exists there.
- [ ] Set the type scale: 100 / 56 / 40 / 30 / 24 / 20 / 18 / 16px over 8 steps, Poppins + sans-serif.
- [ ] Set the spacing scale: 5 / 8 / 10 / 12 / 15 / 20 / 28 / 32px on a 4px base unit.
- [ ] Set the radius scale: 3px (button), 6px (card), 8px (other), 10px (button), 20px (card).
- [ ] Define 4 elevation steps, lightest first: `rgba(0, 0, 0, 0.2) 0px 0px 10px 0px`, `rgba(0, 0, 0, 0.23) 0px 1px 2px 1px`, `rgba(204, 0, 255, 0.11) -6px 10px 20px 0px,…`.
- [ ] Build the shell: a 1100px max-width centred container with 20px side gutters.
- [ ] Paint the canvas `#ffffff` and set the body text colour from the palette — this is a light page.
- [ ] Build the header: 78px tall.
- [ ] Band 1 — **Hero**: 11108px tall, `#fefbfb` background, 1095px container, 0px top padding, 2 columns. Headline: "Your {Technology} Partner for Building What's Next".
- [ ] Build the primary button: `#02010100` on `#ea4338` text, 30px radius, 0px 0px padding, Poppins 500 16px — 14 instances on the page.
- [ ] Build the secondary button: `#00000000` fill, 0px radius, 0px 0px padding, `#2c2762` text.
- [ ] Build the card: `#ffffff` surface, 20px radius, 40px 20px padding, no border, shadow `rgba(0, 0, 0, 0.2) 0px 0px 10px 0px` — 19 instances.
- [ ] Build the footer: 4 link columns, 658px tall, 5 social icons.
- [ ] Wire hover states in the page's own language — *color* on 10 of 13 archetypes. Copy the deltas from the state matrix; do not invent a lift where the page tints.
- [ ] Wire focus: outline, ring `#00000099`.
- [ ] Set the transition recipe: fast 200ms, base 300ms, moderate 400ms, easing `ease`.
- [ ] Add the breakpoint ladder: ≤420px / ≥421px / ≥544px / ≤544px / ≥545px / ≤767px / 768–921px / ≥768px / ≤768px / 769–921px / ≥769px / ≤782px, mixed.
- [ ] At mobile widths: collapse the nav; drop 1 grid to one column; shift spacing -53%; shift type -17%.
- [ ] Accessibility polish before shipping: 58% of text already clears 4.5:1 — fix the remainder rather than copying it; 31 tap targets sit under 44px — pad them out.

## Extraction Coverage

What was actually measured, and where the measurement stops. Read this before trusting a number above.

- **Scan:** 2074 elements styled · viewport 1150×730px · elapsed 5576ms.
- **Deep pass:** mode `full`, 21 scroll passes over 21 planned steps of 584px.
- **Page:** 11108px tall (15.2 viewports).
- **Lazy loading:** DOM went 2348 → 2634 nodes (286 newly revealed elements) — content below the fold only exists after scrolling, so a static fetch would have missed it.
- **Frames:** 1 iframe, 1 cross-origin and therefore unreadable.
- **Bands sampled:** 12 viewport-height slices — they do not cover the whole page.
- **Stylesheets:** 64 read, 1 blocked by CORS, 1 recovered by refetch — rules in the blocked sheets are invisible to every section above.
- **States & overlays:** 8 hidden surfaces revealed and measured; 13 component archetypes resolved from 428 indexed pseudo-state rules; 12 live focus probes.
- **Restoration:** verified — every injected style and attribute was removed after measuring.
- **Inventory:** 1 sections · 3 grid containers · 20 stacking layers · 40 images, 24 font faces · 3 copy bands · 80 custom properties · 12 breakpoints analysed.

### Limits reached during the scan

- 1 cross-origin iframe skipped
- 5 further stylesheets not indexed (cap 60)
- 17 further hidden overlays not measured (cap 8)
- background-image hunt capped at 1200 elements
- 33 component/width-scoped var blocks skipped
- 12 further width conditions were dropped past the 12-breakpoint cap.
- 9 declared breakpoint values had no capturable declarations (cross-origin or nested stylesheets).

## Known Gaps

- 1 cross-origin iframe skipped
- assets: background-image hunt capped at 1200 elements
- assets: 65 stylesheets — @font-face harvest read the first 60
- assets: 1 cross-origin stylesheet could not be read for @font-face rules
- assets: 280 @font-face rules declared — listing the first 24 unique faces
