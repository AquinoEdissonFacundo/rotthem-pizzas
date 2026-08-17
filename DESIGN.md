---
name: Rotthem — Pizzas & more
description: Pizza napoletana hecha a mano por Rafa Toloza. Asunción, Paraguay (local próximamente).
colors:
  brand: "#2A42AB"
  ink: "#131B4D"
  lino: "#5B74DB"
  niebla: "#E9EDFB"
  marmol: "#F5F1E8"
  piedra: "#E8E2D3"
  terracota: "#C8472F"
  gris: "#6E6A5E"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Bodoni Moda, serif"
    fontWeight: 600
    letterSpacing: "-0.01em"
    note: "h1–h4 and .font-display. Sizes are set per-section (clamp/text-*), not a single fixed scale."
  body:
    fontFamily: "Work Sans, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.12em"
    textTransform: uppercase
    color: "{colors.terracota}"
rounded:
  card: "1.25rem"
  pill: "9999px"
spacing:
  gutter-mobile: "1.5rem"
  gutter-desktop: "2.5rem"
  section-y: "5rem–6rem"
  container-max: "80rem"
components:
  btn2-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.75rem"
  btn2-accent:
    backgroundColor: "{colors.terracota}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
  btn2-outline:
    backgroundColor: transparent
    borderColor: "{colors.ink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  card-flat:
    backgroundColor: "{colors.white}"
    border: "1px solid rgba(19,27,77,.1)"
    rounded: "{rounded.card}"
  card-media:
    rounded: "{rounded.card}"
    overlay: "linear-gradient(180deg, transparent 40%, rgba(19,27,77,.92) 100%)"
---

# Design System: Rotthem — Pizzas & more

## Overview

Rebuilt from a client-provided Figma export (`public/diseño/`) in August 2026, replacing the earlier "Cartel de la Esquina" wood-fire/amber system entirely. The new direction is calmer and more editorial: a marble/terracotta/blue palette, a serif display face (Bodoni Moda) paired with a clean grotesque (Work Sans), pill-shaped buttons, and rounded-corner cards — a step away from the old sharp-corner, high-contrast "street food" look.

## Colors

- `--brand` (#2A42AB, "Azul Rotthem") — primary CTAs, links, section backgrounds.
- `--ink` (#131B4D, "Azul tinta") — body text, dark section backgrounds (footer, quote blocks).
- `--lino` (#5B74DB) — secondary accents on dark backgrounds.
- `--niebla` (#E9EDFB, "Azul niebla") — light tinted section backgrounds, soft tags.
- `--marmol` (#F5F1E8, "Mármol") — the default warm off-white page background (not pure white).
- `--piedra` (#E8E2D3) — secondary warm neutral, used sparingly.
- `--terracota` (#C8472F) — the accent color: eyebrows, active nav underline, secondary CTA buttons ("Pedí ahora," "Pedir por PedidosYa"), event tags.
- `--gris` (#6E6A5E) — muted body copy on light backgrounds.

## Typography

- Headings (`h1`–`h4`, `.font-display`) use **Bodoni Moda**, a high-contrast serif — set per-section with `clamp()` or Tailwind text-size utilities rather than one fixed scale.
- Body copy, buttons, nav, and labels use **Work Sans**.
- `.eyebrow` is the small uppercase terracota label that precedes almost every section heading ("LA HISTORIA", "LA CARTA", "PRÓXIMOS EVENTOS" etc.) — a load-bearing pattern, keep it on new sections.
- `.quote-serif` is Bodoni Moda italic, used for pull-quotes and the footer tagline.

## Layout

- Page background defaults to `--marmol`, not white; alternating sections switch to `--niebla`, `--ink`, or `--brand` for rhythm (see any page for the pattern: marmol → niebla → ink → marmol → brand).
- Nav (`#nav2`) is `position: sticky`, always on a `--marmol` background — it does not float transparently over a hero like the previous design; it's a permanently visible bar with a shadow once scrolled.
- Container max-width is `max-w-7xl` (80rem) with `px-6 md:px-10` gutters.

## Shapes

- Buttons (`.btn2*`) are fully pill-shaped (`border-radius: 9999px`).
- Cards (`.card-flat`, `.card-soft`, `.card-media`) use a consistent `1.25rem` corner radius.
- Tags/badges (`.tag-solid`, `.tag-soft`, `.chip-outline`, `.pill-badge`, `.filter-pill`) are all pill-shaped too — there is no sharp-corner tag variant in this system, unlike the previous design.

## Components

- **Buttons**: `.btn2-primary` (brand blue), `.btn2-accent` (terracota — used for delivery/order actions specifically), `.btn2-outline` / `.btn2-outline-light`, `.btn2-white` / `.btn2-cream`. All lift 2px on hover.
- **Cards**: `.card-media` (full-bleed photo + bottom gradient + white text, used for the Home "elegí tu momento" hub and gallery), `.card-flat` (white card with border, used for info/pricing/step cards), `.card-soft` (niebla-tinted card).
- **Icon circle**: `.icon-circle` — a small niebla (or terracota-tinted `.icon-circle-accent`) circle behind a linear icon, used on Historia's "El camino" cards, Eventos' type cards, and info rows.
- **Date box**: `.date-box` — the square date badge used on `/agenda`'s event list.
- **Forms**: `.form2-field` (marmol background, brand focus ring) and `.form2-motivo` (pill toggle group), used on `/contacto`.
- Icons are hand-rolled inline SVGs in `src/components/Icons.jsx` — stroke-based, `currentColor`, no icon library dependency.

## Do's and Don'ts

- **Do** keep `.eyebrow` labels above section headings — it's the single most repeated pattern across all 8 pages of the source Figma.
- **Do** use terracota specifically for order/delivery-flavored CTAs and brand blue for everything else; the two are not interchangeable.
- **Do** treat `--marmol` as the true page background; don't default new sections to pure white.
- **Don't** reintroduce sharp corners, the old amber (`#F2A93B`) accent, or Bevan/Instrument Sans — those belong to the retired design.
- **Don't** add a floating/transparent nav — this system's nav is a solid, sticky bar.
- **Don't** rely on bare Tailwind utility classes assuming they're globally available without checking — see `README.md` / the Tailwind Vite plugin note below.

## Build note

This project now compiles Tailwind live via `@tailwindcss/vite` (added during the August 2026 rebuild) — `src/index.css` starts with `@import "tailwindcss";` followed by the custom component classes documented above. Earlier in this project's history there was no live compiler, only a static extracted CSS bundle; that constraint no longer applies, but the custom `.btn2-*` / `.card-*` / `.tag-*` component-class system above should still be preferred over ad-hoc utility chains for anything reused across pages.
