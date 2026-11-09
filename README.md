# Debuggers Studio Website — Vanilla HTML/CSS/JS

A clean, modern, and exact reproduction of the [Debuggers Studio](https://debuggersstudio.com/) website built entirely with raw, vanilla HTML5, CSS3, and JavaScript — with zero build tools, bundlers, or third-party framework dependencies.

---

## 📁 Project Structure

```text
debuggersweb-html/
├── AGENTS.md                  # Comprehensive guidelines for AI coding agents
├── README.md                  # Project overview & running instructions
├── index.html                 # Main HTML entry point (semantic skeleton)
├── css/
│   └── style.css              # Global styles, CSS tokens, reset, typography & utilities
├── js/
│   └── script.js              # Vanilla JavaScript entry point
├── assets/                    # Media assets (images, icons, SVGs)
│   └── README.md
└── design/                    # Design documentation & visual reference
    ├── design.md              # Complete extracted design token & style reference
    ├── README.md
    └── reference/
        └── homepage.png       # Original site visual reference screenshot
```

---

## 🚀 How to Preview Locally

No build step or `npm install` is required:

### Option 1: Direct in Browser
Double-click `index.html` or drag and drop it into any modern web browser.

### Option 2: Live Server (VS Code)
Right-click `index.html` and choose **"Open with Live Server"**.

### Option 3: Simple HTTP Server
Using Python:
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

---

## 🎨 Design Foundation
- **Font:** Google Fonts [Poppins](https://fonts.google.com/specimen/Poppins) (Weights 400, 500, 600, 700)
- **Icons:** [Font Awesome 5](https://fontawesome.com/)
- **Signature Geometry:** Pill-shaped interactive elements (border-radius `9999px` / `30px`)
- **Tokens:** Defined in `css/style.css` matching `design/design.md`
