# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four confirmed audiences, all converting through the same WhatsApp funnel:

- People deciding where to eat once the Asunción local opens, browsing the menu before reserving a table.
- Delivery customers ordering tonight, via WhatsApp or PedidosYa.
- Event organizers (birthdays, corporate events, weddings) requesting a pizza-libre quote for 20–90 guests.
- Feria-goers who know Rotthem from Palmear, San Juan, or Pilar and want to know where the stand shows up next.

## Product Purpose

A storefront for Rotthem — Pizzas & more, a real Neapolitan pizzeria founded by Rafa Toloza, currently operating through delivery, private events, and street fairs (ferias) while its first sit-down local in Asunción is under construction. The site's job is converting visits into a WhatsApp conversation (delivery order, event quote, table reservation for the coming local) or a PedidosYa order. Success is measured in WhatsApp/PedidosYa clicks, not on-site checkout.

## Positioning

- Real Neapolitan technique: 48-hour fermented dough, Italian tomato, live fire — not a generic "artisanal" claim.
- A founder-led brand with a real, specific story (Rafa Toloza, Pilar → Mancusi Pizza Napolitana → Rotthem), not an anonymous storefront.
- Community presence: Rotthem shows up physically — ferias (Palmear monthly, San Juan, solidarity events, trips back to Pilar) — before it has a fixed address.

## Operating Context

- WhatsApp (+595 974 962 373) and PedidosYa ("Rotthem Pizza") are the transaction layer. There is no cart or on-site payment; every CTA opens a pre-filled WhatsApp message or the PedidosYa app/site.
- **The Asunción local (Capitán Pedro Carpinelli, entre Av. Choferes del Chaco y Guillermo Saraví) has not opened yet** — it is marked "Próximamente" everywhere on the site. Do not present it as open or give it fixed hours; hours are "a confirmar."
- Delivery operates now: Tuesday–Sunday, 19:00–23:00, around Av. Choferes del Chaco and nearby Asunción.
- Instagram: @rotthempizzas. Email: hola@rotthem.com.py.
- Ferias are a recurring, real part of the business (not a one-off promo): Palmear is a monthly fixed point; Rotthem also travels back to Pilar, the founder's hometown.

## Capabilities and Constraints

- Static marketing site, no backend, client-side routed (React Router): `/`, `/historia`, `/local`, `/eventos`, `/delivery`, `/agenda`, `/galeria`, `/contacto`. The contact form composes a WhatsApp deep link with the entered fields; nothing is persisted server-side.
- Menu is published and final for now: 11 pizzas + Calzoni (3 varieties sold as one menu line), prices in guaraníes. Sourced from the real printed menu (`public/diseño/images/menu-1.jpg`) — treat that photo as the authority if a description ever needs re-checking.
- The Google Maps embed and the live Instagram feed are both placeholders on the current build (cards say "en la web publicada, acá se embebe...") — wiring those up is a known follow-up, not a bug.

## Brand Commitments

- Name: Rotthem — Pizzas & more. Wordmark logo (arched "ROTTHEM PIZZAS" lockup) at `public/assets/images/Logo Rotthem.png` (navy, for light backgrounds) and `Logo Rotthem - Blanco.png` (white, for dark backgrounds/footer). This is the real client logo — never swap it for a generic mark.
- Founder Rafa Toloza is named explicitly and has a full, real origin story (see `/historia`): grew up in Pilar, pushed toward medicine, escaped into drumming, found his calling in his family's kitchen, studied at IGA Asunción, co-founded an earlier venture (Mancusi Pizza Napolitana) before starting Rotthem alone. This story is not to be shortened into a generic "passionate chef" bio.
- Visual system (rebuilt from the client-provided Figma in `public/diseño/`): palette is Mármol/Terracota/Azules (`--brand #2A42AB`, `--ink #131B4D`, `--terracota #C8472F`, `--marmol #F5F1E8`, `--niebla #E9EDFB`); typography is Bodoni Moda (headings) + Work Sans (body); buttons and cards are pill-shaped / rounded, not the earlier sharp-cornered system.
- Voice: warm, direct Paraguayan Spanish ("vos" register), first-person from Rafa on `/historia`.

## Evidence on Hand

- Real photography at `public/assets/images/` (Rafa working, finished pizzas, delivery hand-offs, feria shots, the printed menu) — sourced from the client's own Figma export, not stock.
- Real contact details: WhatsApp +595 974 962 373; email hola@rotthem.com.py; Instagram @rotthempizzas; PedidosYa listing "Rotthem Pizza"; future address Capitán Pedro Carpinelli, Asunción (unopened).
- Real, dated near-term events (as of the current build): Feria Palmear (22 Ago), Feria de San Juan (05 Sep, Cabildo de Asunción), a solidarity pizza day (20 Sep), and a return trip to Pilar (17 Oct). These are real commitments, not filler — update or remove them once they've passed rather than leaving stale dates live.
- Absent, and not to be fabricated: customer testimonials/reviews, press mentions, usage stats beyond what's already stated ("2 años de horno," "más de 5.000 seguidores").

## Product Principles

1. Every path funnels to WhatsApp or PedidosYa — there is no other transaction layer.
2. Never imply the Asunción local is open. "Próximamente" is load-bearing copy, not a placeholder to be cleaned up later.
3. Real evidence only: real photos, real founder story, real events with real dates. No fabricated reviews, prices, or stats.
4. The founder's story is a core asset, not filler — `/historia` should stay in Rafa's voice and keep the specific, non-generic details (Pilar, medicine, la batería, IGA, Mancusi).
5. Voice stays Paraguayan and conversational ("vos"), never generic marketing Spanish.
