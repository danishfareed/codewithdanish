
# CodeWithDanish.dev – Developer Portfolio

A modern, fast, and animated developer portfolio for **Danish Mohammed**, showcasing real-world projects built with React, Next.js, Astro, WordPress, Shopify, and more. The site focuses on performance, clean UI, and a developer‑first experience.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript / JavaScript (ESNext)
- **Styling:** Tailwind CSS
- **Deployment:** Cloudflare Pages
- **Data:** JSON‑driven sections (skills, experience, projects)
- **Animations:** CSS keyframes + React hooks (`useState`, `useEffect`)

---

## 📁 Project Structure

.
├── app/
│ ├── layout.(tsx|jsx) # Root layout & metadata
│ ├── page.(tsx|jsx) # Home page
│ ├── icon.png # Favicon/app icon
│ └── ... # Additional routes if needed
├── src/
│ ├── components/
│ │ ├── Header.jsx # Logo + navigation
│ │ ├── Intro.jsx # “Hello World” / terminal-style intro
│ │ ├── SignatureDanish.jsx# Animated signature SVG
│ │ ├── Logo.jsx # { Code With Danish } animated logo
│ │ ├── Skills.jsx # Category-based skills grid
│ │ ├── Experience.jsx # Experience + highlights + tech stack
│ │ └── Projects.jsx # Portfolio grid
│ └── data/
│ ├── skills.json # Frontend / backend / CMS / SEO skills
│ ├── experience.json # Work history + highlights + stack
│ └── projects.json # Portfolio projects
├── public/
│ ├── skills/ # Optional custom icons for skills
│ └── ... # Other static assets
├── next.config.js
├── package.json
└── README.md

text

All content (skills, experience, projects) is driven from JSON so updates don’t require JSX changes.

---
