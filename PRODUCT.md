# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four confirmed audiences, all converting through the same WhatsApp funnel:

- Locals in Fernando de la Mora / Asunción deciding where to eat tonight, browsing the menu before reserving a table or ordering delivery.
- Families and friend groups organizing a get-together, checking hours and location before heading over.
- Event organizers (birthdays, weddings, corporate events) requesting a Pizza Corrida quote.
- Repeat customers who already know Rotthem and go straight to ordering delivery by WhatsApp.

## Product Purpose

A storefront for Rotthem Pizzas, a real wood-fired Neapolitan pizzeria in Fernando de la Mora, Paraguay. The site's only job is converting visits into a WhatsApp conversation: a table reservation, a delivery order, or an event quote. Success is measured in WhatsApp clicks, not on-site checkout. The main landing page (`/`) carries the full sales narrative; the menu (`/carta` and `/carta/:slug`) is a dedicated set of pages so each item can be linked and browsed on its own.

## Positioning

Two differentiators, held with equal weight, neither subordinate to the other:

- Authentic wood-fired Neapolitan pizza: long-fermentation dough, real wood fire, hand-thrown by Rafa.
- Pizza Corrida served live at events: Rotthem brings the oven and serves fresh pizza in front of guests, a format nearby pizzerias don't offer.

## Operating Context

- WhatsApp is the entire transaction layer. There is no cart, checkout, or payment processing on-site; every CTA (menu, reservation, event quote, delivery) opens a pre-filled WhatsApp message to +595 974 962 373.
- Physical location: Confuso esq. Muñoz, Fernando de la Mora, Paraguay, next to Black House Tattoo.
- Hours: daily 19:00–23:30 (posted as reference; may vary).
- Presence on Instagram (@rotthempizzas) and Google Maps.

## Capabilities and Constraints

- Static marketing site, no backend, client-side routed (React Router: `/`, `/carta`, `/carta/:slug`). The reservation and event forms only validate that a name was entered, then compose a WhatsApp deep link; nothing is persisted server-side.
- Menu pricing is decided and published: the home page previews 3 items, `/carta` lists all of them, and each has its own detail page. Prices are rounded to whole-menu numbers for display, not the exact figures from the internal costing sheet. Ordering itself still has no cart; clicking a menu item opens WhatsApp with that item pre-filled.

## Brand Commitments

- Name: Rotthem (stylized ROTTHEM in display type).
- Founder and pizzero Rafa is named explicitly as the face of the brand ("Rafa · Fundador & pizzero"); he is a real person, not a placeholder persona.
- Current tagline, shipped and treated as binding voice: "El arte de hacer pizza." (replaced the earlier "No es solo pizza." at the client's request).
- Logo mark: a real asset (`public/assets/images/logo-mark.png`), Michelangelo's David composited in front of a wood-fired pizza like a halo. Used alongside the ROTTHEM wordmark in the navbar and footer; not a placeholder, don't swap for a generic icon.
- Voice: direct, warm, colloquial Paraguayan Spanish ("vos" register), matching how a neighborhood pizzeria actually talks to its customers.

## Evidence on Hand

- 9 real photographs already in use (Rafa working the dough, finished pizzas, live event service, the storefront) at `public/assets/images/img-1.jpg` through `img-9.jpg`. These are real business photos, not stock, and should not be swapped for generic imagery.
- Real contact details: WhatsApp +595 974 962 373; address Confuso esq. Muñoz, Fernando de la Mora, next to Black House Tattoo; hours 19:00–23:30 daily (reference, may vary); Instagram @rotthempizzas; a Google Maps listing.
- Real menu: Muzzarela (Gs. 60.000), Napolitana (Gs. 70.000), Peperoni (Gs. 60.000), Vegetariana (Gs. 55.000), Cuatro Quesos (Gs. 50.000). Prices are rounded from the owner's internal costing sheet (exact figures and ingredient-level costs are not published; only the customer-facing rounded price and a short ingredient description per item).
- Absent, and not to be fabricated by future work: customer testimonials/reviews, press mentions, usage stats, or any menu item beyond the five listed above.

## Product Principles

1. Every path on the page funnels to a WhatsApp conversation — WhatsApp is the transaction layer, not an optional contact channel.
2. The two differentiators (wood-fired craft, live-served Pizza Corrida) get equal narrative weight; the page never lets one eclipse the other.
3. Real evidence only. Real photos, real contact details, real founder story. No fabricated reviews, prices, or stats.
4. One page serves four distinct intents (walk-in diners, groups, event organizers, repeat delivery customers) without forcing them to compete for the same slot: the hero carries the walk-in/reservation framing while Eventos and Delivery carry the other two.
5. Voice stays Paraguayan and conversational ("vos"), never generic marketing English-translated Spanish.
