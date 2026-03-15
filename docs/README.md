# Soft Synergy Systems — Developer Documentation

> Corporate website for Soft Synergy Systems Pvt Ltd
> Built with **React 19 + Vite + Tailwind CSS v4**

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/rohith95023/SOFT-SYNERGY-SYSTEMS.git
cd SOFT-SYNERGY-SYSTEMS

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and fill in your values

# 4. Start development server
npm run dev

# 5. Build for production
npm run build
```

---

## Environment Variables

Copy `.env.example` → `.env` and fill in real values.

| Variable | Required | Description |
|---|---|---|
| `VITE_BASE_URL` | No | Production base URL |
| `VITE_CONTACT_EMAIL` | Yes | Contact email address |
| `VITE_CONTACT_PHONE` | No | Contact phone number |
| `VITE_EMAILJS_SERVICE_ID` | For email | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | For email | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | For email | EmailJS public key |
| `VITE_GA_MEASUREMENT_ID` | For analytics | Google Analytics 4 ID |

---

## Project Structure

```
src/
├── config/         ← App configuration & feature flags
├── constants/      ← All static data (named, frozen constants)
├── components/
│   ├── common/    ← Navbar, Footer, SEO, CookieBanner, etc.
│   ├── layout/    ← MainLayout, Container, Section
│   └── ui/        ← Button, Card, Badge, Modal, Accordion, etc.
├── pages/          ← One file per route (max 80 lines each)
├── sections/       ← Reusable page sections (Hero, Stats, etc.)
├── hooks/          ← Custom React hooks
├── services/       ← API / external service calls
├── validators/     ← Zod schemas (input validation)
├── utils/          ← Pure helper functions (no side effects)
├── context/        ← React Context providers (ThemeContext)
├── routes/         ← AppRouter.jsx — all route definitions
├── styles/         ← global.css, variables.css, animations.css
├── assets/         ← Images, icons, SVGs
├── App.jsx         ← Thin wrapper: providers + AppRouter
└── main.jsx        ← React DOM bootstrap

tests/
├── unit/           ← Mirror of src/ (unit tests per file)
└── integration/    ← Integration tests

docs/
└── README.md       ← This file
```

---

## Code Quality Rules (RULES PRD)

- ✅ No `process.env` / `import.meta.env` outside `src/config/`
- ✅ No magic strings — use named constants in `src/constants/`
- ✅ No `console.log` — use `src/utils/logger.js`
- ✅ No DB/API calls in components — use `src/services/`
- ✅ No inline validation — use `src/validators/`
- ✅ All public functions have JSDoc comments
- ✅ Controllers (pages) max ~80 lines; components max 200 lines

---

## Feature Flags

Feature toggles live in `src/config/features.config.js`. To disable/enable a feature:

```js
// src/config/features.config.js
const featuresConfig = Object.freeze({
  darkMode: true,     // Navbar dark mode toggle
  newsletter: true,   // Footer newsletter strip
  scrollProgressBar: true,
  // ...
});
```

Some flags can also be controlled via `.env`:
```
VITE_FEATURE_LIVE_CHAT=true
```

---

## Pages

| Route | Page File | PRD Section |
|---|---|---|
| `/` | `Home.jsx` | §6.1 |
| `/about` | `About.jsx` | §6.2 |
| `/services` | `Services.jsx` | §6.3 |
| `/portfolio` | `Portfolio.jsx` | §6.4 |
| `/blog` | `Blog.jsx` | §6.5 |
| `/blog/:slug` | `BlogDetail.jsx` | §6.5 |
| `/contact` | `Contact.jsx` | §6.6 |
| `/faq` | `FAQ.jsx` | §6.7 |
| `/careers` | `Careers.jsx` | — |
| `/privacy-policy` | `LegalPages.jsx` | §6.8 |
| `/terms` | `LegalPages.jsx` | §6.8 |
| `/cookies` | `LegalPages.jsx` | §6.8 |
| `/support` | `LegalPages.jsx` | — |
| `*` | `NotFound.jsx` | §5.1 |
