# AI Workspace - 66 Premium UI & AI Landing Page Templates

A premium, interactive portfolio showcasing **66 AI-focused templates** (34 built as interactive React components, and 32 built as responsive HTML landing pages). 

This workspace is designed to be hosted live on Vercel and supports direct API routing (`/:id`), category filtering, dark/light theme switching, and live source code inspection.

---

## 🚀 Quick Start

To run the portfolio explorer on your local machine:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Local Development Server**:
   ```bash
   npm run dev
   ```

3. **Build Production Bundle**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📂 Project Architecture

The templates are organized dynamically to isolate styles and enable high-performance page loads:

- **`/public/templates/`**: Contains the source code of all 66 templates (HTML and JSX). The 32 HTML landing pages are served directly here and rendered inside isolated, sandboxed `iframe` elements. This avoids global CSS/JS library and Tailwind configuration collisions.
- **`/src/templates/`**: Contains the JSX files of the 34 React templates.
- **`src/templates/registry.jsx`**: Maps React component IDs to lazy-loaded modules (`React.lazy`). This ensures that compiling and loading are highly performant—splitting code bundles so only the requested page's chunk is loaded.
- **`src/App.jsx`**: The main directory hub. Handles search, category tagging, aesthetic filters, light/dark theme filters, live iframe rendering, React component mounting, and dynamic source code retrieval.
- **`vercel.json`**: Configures rewrites for single-page application paths (routing `/1`, `/style/retro`, `/theme/dark`, etc. to `index.html`).

---

## 🧭 Routing Guide

The portfolio routes incoming requests dynamically:

- **`/`**: Previews the premium directory search engine.
- **`/:id`** (e.g. `/1` to `/66`): Opens that specific template full-screen. A collapsible control bar overlay provides info details, copy-code triggers, and back navigation.
- **`/style/:style`** (e.g. `/style/glassmorphism`): Filters the portfolio directly to that specific styling style.
- **`/theme/:theme`** (e.g. `/theme/dark`): Filters the portfolio to light or dark templates.
- **`/category/:category`** (e.g. `/category/Portfolio`): Filters to specific functional types.

---

## 🎨 Aesthetic & Design Styles Included

Templates are categorized using metadata scanners across these tags:
- **Styles**: Glassmorphism, Neomorphism, Retro/Pixel, Minimalist, Modern.
- **Themes**: Light Theme, Dark Theme.
- **Categories**: Landing Page, Portfolio, Dashboard, Interactive / Game, SaaS Product.
- **Technologies**: React, HTML.

---

## ⚡ Deployment to Vercel

This repository is ready for white-glove Vercel hosting:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Log in and deploy from your project root:
   ```bash
   vercel
   ```
3. Deploy to production:
   ```bash
   vercel --prod
   ```
# AllAi
