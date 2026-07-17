# Molar Mass Lab (v2)

Premium chemistry learning platform with a precision molar mass calculator.

## Product principles

- **Information gain first** — only compounds with unique educational profiles are indexable pages
- **Calculator for everything** — any valid formula can be calculated without creating thin pages
- **Teach, don’t template** — compound pages include properties, reactions, history, practice, and FAQs written for that substance

## Stack

- Next.js App Router (static generation)
- TypeScript
- Tailwind CSS v4
- Server Components by default; client islands for calculator, search, theme

## Key routes

| Route | Purpose |
| --- | --- |
| `/` | Educational homepage + calculator |
| `/calculator` | Full molar mass calculator |
| `/molar-mass-of-*` | Rich compound chemistry profiles |
| `/compounds` | Compound library |
| `/periodic-table` | Atomic mass reference |
| `/learn/*` | Concept guides |
| `/practice` | Practice hub |
| `/articles/*` | Educational articles |
| `/reference` | Quick-reference tables |

## Top 50 premium library

Indexed compound pages are capped at the curated Top 50 profiles in `data/compounds/`. Each profile includes compound-specific `uniqueTopics`, reactions, practice, and FAQs. Do **not** publish page 51 unless it meets or exceeds this quality bar. The calculator still handles any formula without creating a thin page.

## Scripts

```bash
npm run dev
npm run build
npm start
```
