# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Max Hope-Carter. Built with SvelteKit + Svelte 5 (runes mode enforced), mdsvex for Markdown content, and TypeScript.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run check` — svelte-check type checking
- `npm run lint` — prettier + eslint
- `npm run format` — auto-format with prettier

## Architecture

**Content system:** Blog posts live in `src/posts/*.md` and projects in `src/projects/*.md`. Both use mdsvex and are loaded via `import.meta.glob` in `+page.server.ts` files. Posts require `title`, `description`, `date` frontmatter and use `<!-- excerpt -->` markers for truncation. Projects require `title`, `description`, `index` frontmatter (sorted by `index` descending).

**Routing:**
- `/` — homepage, shows 3 most recent posts + all projects
- `/blog` — all posts with excerpts
- `/blog/[slug]` — individual post (slug = markdown filename without `.md`)
- `/projects` — all projects

**Key components in `src/lib/`:**
- `TextScramble.svelte` — animated text reveal with glitch CSS effect, used for the site heading
- `nav.svelte` — site header with audio player (plays `/static/helpless_chase.mp3`)

## Style Conventions

- Svelte config is in `vite.config.ts` (not a separate `svelte.config.js`) — SvelteKit options are passed to `sveltekit()` plugin directly
- Formatting: tabs, single quotes, no trailing commas (see `.prettierrc`)
- Global styles in `src/app.css` using CSS custom properties (`--light-green`, `--dark-green`, `--mid-green`, `--grid-green`, `--font-display`, `--font-body`)
- Fonts: Bebas Neue (display/headings) and Roboto Condensed (body)
