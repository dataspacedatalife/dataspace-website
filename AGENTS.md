# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# OneHealth DataSpace web page

A Next.js 15 (App Router) marketing/informational site for the OneHealth DataSpace project (CESGA), fully trilingual (es/en/gl).

## Commands

Package manager is **pnpm** (pinned via `packageManager` in package.json; Node version pinned via `mise.toml` — run `mise install` if using mise).

- `pnpm dev` — start dev server (Turbopack)
- `pnpm build` — production build (`output: 'standalone'`, used by the Dockerfile)
- `pnpm start` — run the production build
- `pnpm lint` — ESLint (`eslint-config-next`)
- `pnpm exec biome check .` / `pnpm exec biome check --write .` — Biome lint+format (see `biome.jsonc`); this is the primary formatter/linter, ESLint is secondary
- There is no test suite/runner configured in this repo.

## Architecture

### Routing & i18n

All pages live under `src/app/[locale]/...` using `next-intl`. The locale layer is:

- `src/i18n/routing.ts` — defines supported locales (`es`, `en`, `gl`), default locale `es`, and augments `next-intl`'s `AppConfig` types from `messages/en.json` (so translation keys are typed).
- `src/i18n/navigation.ts` — re-exports `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname` wrapped with routing config. **Always import these from here, not from `next/navigation` or `next/link` directly** — this is enforced by a `biome.jsonc` lint rule (`noRestrictedImports`). Similarly, use the app's `Link` from `@/components/link.tsx` rather than `next-intl`'s `Link` — also enforced.
- `src/i18n/request.ts` — loads the right `messages/{locale}.json` file per request.
- `src/middleware.ts` — runs `next-intl`'s middleware on all paths except `/api`, `/trpc`, `/_next`, `/_vercel`, and static files.
- `src/app/[locale]/layout.tsx` — root layout; validates locale via `hasLocale`/`notFound()`, calls `setRequestLocale`, wraps children in `NextIntlClientProvider`.

Translation strings live in `messages/{es,en,gl}.json` (~4,400+ lines each) and must be kept in sync across all three files — missing keys in one locale silently render the raw key rather than falling back. When adding/removing a translation key, update all three files together.

### Content model

There is no CMS or markdown-based content pipeline in active use — blog posts, events, use cases, etc. are authored as **typed TypeScript data structures** per locale (e.g. `src/app/[locale]/blog/posts.tsx` defines `blogPosts: Record<Locale, Post[]>` with a custom rich-text node union type (`HeadingNode`, `BoldNode`, `LinkNode`, ...) rather than raw HTML/markdown strings). Follow this pattern for new content-heavy sections rather than introducing markdown files. Static images referenced by content live in `public/` and are imported directly as `StaticImageData`.

Note: `gray-matter`, `remark-gfm`, and `rehype-*` are dependencies but currently unused anywhere in `src/` — don't assume a markdown pipeline exists without checking first.

### Pages

Each top-level section is a directory under `src/app/[locale]/` (e.g. `about`, `blog`, `catalog`, `dataspace`, `events`, `faq`, `how`, `kitEdD`, `team`, `what`, plus one-off survey pages `survey19junio`/`survey26junio`). Pages needing client interactivity split into a server `page.tsx` (handles metadata/translations via `getTranslations`) plus a co-located `*Client.tsx` component (uses `useTranslations`).

### API routes

`src/app/api/survey/route.ts` is the only API route: accepts POST submissions from the survey pages, validates required fields, checks a simple arithmetic captcha, sanitizes input, and writes each response as a CSV file under `data/<survey-name>/` on the server filesystem (capped at 100 responses per survey, with an in-memory per-survey write lock). There is no database — survey data is just flat files on disk.

### Shared UI

Reusable components live flat under `src/components/` (not further nested) — e.g. `navbar.tsx`, `footer.tsx`, `button.tsx`, `card.tsx`, `container.tsx`, `link.tsx`, `logo-cloud.tsx`, `map.tsx`, `review-calendar.tsx`. Styling is Tailwind CSS v4 (`src/styles/tailwind.css`, configured via `@tailwindcss/postcss`), with Google Fonts (Roboto, Barlow Condensed) loaded via `<link>` tags in the root layout rather than `next/font`.

### Deployment

`Dockerfile` is a multi-stage build (deps → builder → runner) producing a standalone Next.js server run as a non-root `nextjs` user; expects `pnpm build`'s `.next/standalone` + `.next/static` output. `NEXT_TELEMETRY_DISABLED=1` is the only documented env var (`.env.example`).
