# Mohamed Khalifa — portfolio

Next.js (App Router, TypeScript, Tailwind v4) portfolio for a full-stack developer specializing in Arabic-language content platforms. English is the launch locale; Arabic ships in phase two at `/ar`.

## Design language

Dark, technical, restrained — a developer dashboard, not an agency site. Dark mode is the default. Hairline borders (0.5px) only, no gradients/shadows/glow/blur, accent covers ≤5% of any screen, only weights 400/500. Inter Tight for Latin text, JetBrains Mono for anything technical. Project index is a list of rows, not cards.

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4 (`@theme` in `app/globals.css`), `next/font/google`.

## Reference files (read directly — do not duplicate their content here)

- `brand/BRIEF.md` — design spec, page structure, component specs, build order.
- `brand/CONTENT.en.md` — all English copy (primary locale); `CONTENT.ar.md` phase two.
- `brand/projects.ts` — project data; source of truth for index/case studies/SEO.
- `brand/README.md` + `brand/brand-tokens.css` — logo rules, color/font tokens.
- `components/Logo.tsx` — logo component.

## Ground rule

`brand/BRIEF.md`, `brand/CONTENT.en.md`, and `brand/projects.ts` are the only sources of truth for copy, figures, and project data. Never invent content or metrics beyond what they contain — leave a `[bracketed]` placeholder as-is and flag it instead.
