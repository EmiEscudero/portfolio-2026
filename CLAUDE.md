# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server (default port 5173, hot reload)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the `dist/` build locally to sanity-check before deploying
- `npm run lint` — runs `oxlint`

There is no test suite in this project.

## Architecture

Single-page React portfolio site built with Vite (no router, no backend). Everything renders on one page via anchor-link navigation.

**Content is fully decoupled from components.** All copy — name, bio, experience, projects, skills, education, certifications, contact links — lives in `src/data/content.js` as plain exported objects/arrays. Components in `src/components/` are presentational only: they import from `content.js` and map over it. To update any text on the site, edit `content.js`; never hardcode copy inside a component.

`src/App.jsx` assembles one section component per site section, in page order, inside a single `<main>`. Each section's wrapping element has an `id` (e.g. `id="about"`) that must match the corresponding `href` in `navLinks` (also defined in `content.js`) — `Nav.jsx` renders links from `navLinks` and relies on the browser's native anchor scrolling, so adding/removing/reordering a section means keeping both the section `id` and the `navLinks` entry in sync.

Styling is one global stylesheet, `src/index.css`, using CSS custom properties defined in `:root` (light theme) with a `prefers-color-scheme: dark` block overriding the same variable names. No CSS modules, no Tailwind, no component-scoped styles — this is a deliberate constraint (plain HTML/CSS/React only), so new styles should extend the existing variables rather than introducing a separate styling approach. The mobile nav (hamburger toggle) is the only piece of interactive state in the app, held in `Nav.jsx` via `useState`; the corresponding breakpoint is at 640px in `index.css`.

## Deployment

Repo: `https://github.com/EmiEscudero/portfolio-2026` (main branch). Deployed on Vercel with auto-detected Vite settings (build command `npm run build`, output directory `dist`). Every push to `main` triggers an automatic redeploy — there is no separate manual deploy step.

## Other notes

`CONTEXT_ABOUT_ME/` is gitignored on purpose — it holds the repo owner's personal working notes for AI assistants (writing-style rules, background info), not portfolio content, and isn't meant to be public or referenced in the site itself.