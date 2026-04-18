# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Chinmay Pillai ([chinmaypillai.com](https://www.chinmaypillai.com)). React 18 + TypeScript SPA built with Vite, using MUI 5 (global dark theme), Bootstrap 5 (navbar collapse + dropdown JS only), framer-motion, and react-router-dom v6. Deployed via Vercel — `vercel.json` rewrites all paths to `/` so client-side routes survive hard reloads.

## Commands

- `npm run dev` — Vite dev server.
- `npm run build` — `tsc` then `vite build`. The build will fail on any TS error; `tsconfig.json` has `strict`, `noUnusedLocals`, and `noUnusedParameters` on.
- `npm run lint` — ESLint over `src/**/*.{ts,tsx}` with `--max-warnings 0`. Treat warnings as errors.
- `npm run preview` — serve the built `dist/` locally.

There is no test suite.

## Architecture

### Routing & layout
`src/main.tsx` mounts `<App />` inside `<BrowserRouter>` and a single `<ThemeProvider>` + `<CssBaseline />` (theme from `src/theme/theme.ts`). Bootstrap CSS+JS is also imported globally for the navbar collapse/dropdown behaviour. `src/App.tsx` mounts `<ScrollToTop />` once (resets scroll on route change) and defines the routes: a layout route at `/` rendered by `components/NavBar/NavBar.tsx` (renders the nav and an `<Outlet />`), with nested children `Home`, `Work`, `Interns`, `Projects`, `Skills`, `About`, `Test`.

### Design tokens & theme
- `src/components/Utilities/colors.tsx` exports a single typed `tokens` object: `bg`, `border`, `text`, `accent`, `accentMuted`, `radius`, `shadow`, `transition`. Use it for any styling that the global theme doesn't already cover. Don't hardcode hex values.
- `src/theme/theme.ts` builds the MUI dark theme from `tokens` (palette, typography with Inter, MuiCard/Button/Container/CssBaseline overrides). It also augments `Palette` with a `border` slot so `sx={{ borderColor: 'border.subtle' }}` etc. are typed.
- Page components do **not** create their own `ThemeProvider` — they consume the global one. The body bg is flat `tokens.bg.base`.

### `<SurfaceCard>` primitive
`src/components/Utilities/SurfaceCard.tsx` is the single card primitive used by every list page. Replaces what used to be four separate cards. Props: `selected`, `href` (external — renders `<a target="_blank" rel="noopener noreferrer">`), `to` (internal — `RouterLink`), `onClick`, `media`, `orientation` (`vertical` default, `horizontal` for the Home navigation cards), `title`, `subtitle`, `description`, `actions`. Hover, selected ring/glow and elevation are pure CSS — no per-instance `useState` or `createTheme`.

### Selectable-detail pattern (Interns & Projects)
`Interns.tsx` and `Projects.tsx` share the same pattern, and changes to one usually need to be mirrored in the other:

1. A list of items (`InternList` / `ProjectList`, `promiment_projects`) hardcoded at the top of the page file.
2. A `name → React.FC` map (`internMap` / `projectMap`) wires each item to a detail component in `./Details/`.
3. The page holds the selected item in `useState` and passes `selected={current === item.name}` into the corresponding `<SurfaceCard>`. **No Context, no `useContext`** — selection is a plain prop.

Adding a new intern or prominent project: list entry + `Details/<Name>.tsx` component built with `<DetailLayout>` + entry in the `*Map`. Keys must match exactly between the list `name`/`title` and the map.

### Detail components
`src/components/Utilities/DetailLayout.tsx` exports `DetailLayout` (heading + bulleted body) and `Strong` (accent-coloured emphasis). Every file under `Interns/Details/` and `Projects/Details/` is a thin wrapper: a title string and an array of `<>...<Strong>...</Strong>...</>` JSX bullets. The shell renders semantic `<ul>`/`<li>` outside any `<Typography>` paragraph (avoiding the `<ul>`-in-`<p>` HTML invalidity that the old shell had).

### Animations
`Utilities/Reveal.tsx` wraps children in a framer-motion fade/scale-in that fires once when scrolled into view. Wrap new sections in `<Reveal>` to match the existing entrance behavior.

### Bootstrap usage
Bootstrap is intentionally kept for the navbar's responsive collapse and dropdown JS (`navbar-*`, `dropdown-*`, `nav-*`, `data-bs-toggle`). Don't add new Bootstrap utility classes inside MUI components — use `sx` props with `tokens` or theme palette references instead.

### Static assets
Images referenced as `/intern/*`, `/project/*`, `/pages/*`, `/techStack/*` resolve to files in `public/`. New cards expecting an `img` prop need a corresponding file there.

## Conventions

- Line endings: enforced LF via `.gitattributes` (`* text=auto eol=lf` plus explicit `binary` markings for images, fonts, xcf, pdf).
- The `react-refresh/only-export-components` rule fires on uppercase-acronym component names like `DP`, `IITK`, `ACL`, `MERN` (heuristic mistakes them for constants). These four files have a single-line `// eslint-disable-next-line` instead of being renamed — keeps the route/map keys stable.
