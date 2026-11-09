# Agent Guide — Debuggers Studio Website Rebuild

Welcome! This guide outlines the architectural rules, design standards, and constraints for any AI coding agent working on the Debuggers Studio website project.

---

## 1. Project Mission & Technology Stack

The objective is to create an **exact visual and functional replica** of the original WordPress website (`https://debuggersstudio.com/`) using **raw vanilla web technologies**:

- **HTML5:** Pure semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Native CSS with CSS custom properties (`:root` variables), modern reset, Flexbox, and CSS Grid.
- **JavaScript (ES6+):** Pure vanilla JavaScript for interactions.

### 🚫 Strict Technology Restrictions
- **NO Frameworks:** Do NOT use React, Vue, Svelte, Angular, etc.
- **NO CSS Preprocessors or Frameworks:** Do NOT use Tailwind, Bootstrap, Sass, Less, etc. (All styles must be authored in native CSS).
- **NO Bundlers or Build Tools:** Do NOT add Webpack, Vite, Parcel, Babel, or npm dependencies.
- **NO Over-engineering:** Keep code simple, readable, modular, and maintainable.

---

## 2. Mandatory References Before Any Implementation

Before writing or modifying any code, the agent MUST review:

1. **`design/design.md`**: The definitive design token and style extraction document. Every color, font size, border radius, shadow, and transition duration is cataloged here.
2. **`design/reference/homepage.png`**: The visual ground truth screenshot of the full original homepage. All layouts, proportions, alignments, and visual details must match this image.

---

## 3. Design System Rules

### A. Color Palette (Zero Tolerance for Invented Colors)
Always use the CSS custom properties defined in `css/style.css`:
- **Canvas (Background):** `var(--color-bg-canvas)` (`#ffffff`)
- **Surface (Cards & Panels):** `var(--color-bg-surface)` (`#fef6f6`)
- **Primary Text:** `var(--color-text-primary)` (`#181536`)
- **Secondary Text:** `var(--color-text-secondary)` (`#121029`)
- **Brand Accent:** `var(--color-accent)` (`#ea4338`) — interactive energy for buttons, links, and key highlights
- **Hover Blue:** `var(--color-hover-blue)` (`#0d99ff`)
- **Nav Hover:** `var(--color-nav-hover)` (`#282c6d`)
- **Supporting Blues & Grays:** `var(--color-blue-dark)` (`#2c2762`), `var(--color-gray-dark)` (`#69727d`), `var(--color-blue-dark-3)` (`#0901f8`)

### B. Typography & Copy
- **Font Family:** `Poppins, sans-serif` (weights: 400, 500, 600, 700).
- **Hierarchy:**
  - H1 Display: `56px` (line-height `1.43` / `80px`, weight 700)
  - H2 Section Titles: `40px` (line-height `1.5` / `60px`, weight 700)
  - H3 Card Headings: `30px` (line-height `1.2` / `36px`, weight 700)
  - H4 Sub-headings: `24px` (line-height `1.5` / `36px`, weight 600)
  - Body: `16px` (line-height `1.5` / `24px`, weight 400)
  - Caption: `13px` (line-height `1.4`, weight 400)
- **Heading Casing:** Strictly **Title Case** (e.g., *"Your Technology Partner for Building What's Next"*).

### C. Geometry & Signature Styling
- **Pill Buttons & Tags:** Signature fully-rounded geometry (`border-radius: 9999px` or `30px`).
- **Cards:** `border-radius: 20px`, surface padding `40px 20px`, shadow `var(--shadow-sm)` (`rgba(0, 0, 0, 0.2) 0px 0px 10px 0px`).
- **Elevations:** Soft and subtle. Do not stack excessive harsh drop shadows.

### D. Motion & Transitions
- Default UI interactions: `300ms ease`
- Link / button color hover tints: `200ms linear` or `200ms ease`
- Panels, drawers, and card hover effects: `400ms ease`
- Always respect `prefers-reduced-motion: reduce`.

---

## 4. File Organization & Asset Rules

```text
debuggersweb-html/
├── AGENTS.md                  # This agent guide
├── README.md                  # Project overview & running instructions
├── index.html                 # Main HTML entry point
├── css/
│   └── style.css              # Main global stylesheet with tokens, reset, utilities
├── js/
│   └── script.js              # Main vanilla JavaScript file
├── assets/                    # Static assets
│   ├── images/                # Raster images (WebP/PNG/AVIF)
│   ├── icons/                 # Icon assets
│   └── svgs/                  # Vector illustrations and SVGs
└── design/
    ├── design.md              # Extracted style reference
    ├── README.md              # Design directory notes
    └── reference/
        └── homepage.png       # Original visual reference screenshot
```

- Store all extracted images and SVGs under `assets/images/` or `assets/svgs/`.
- Use descriptive alt attributes for all `<img>` tags.
- Prefer modern WebP or SVG format for performance.

---

## 5. Accessibility & Quality Requirements

- **Semantic Landmarks:** Must maintain `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- **Keyboard Navigation:** Keep the `#skip-link` functional; never disable `:focus` outlines without an accessible visible ring (`outline: 2px solid var(--color-focus-ring)`).
- **Touch Targets:** Interactive targets (buttons, links, nav toggles) must meet the minimum 44×44px hit area.
- **Contrast:** Ensure all text passes WCAG AA contrast (minimum 4.5:1 ratio).

---

## 6. Execution Protocol for Future Steps

1. **Step-by-Step Approval:** Wait for the user's explicit instruction before beginning construction of any page section or component.
2. **Visual Verification:** Constantly compare newly built components against `design/reference/homepage.png`.
3. **No Guesswork:** If a specific measurement or asset is unclear, consult `design/design.md` or ask the user.
