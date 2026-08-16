---
name: Rotthem Pizzas
description: Napolitana a la leña hecha en Fernando de la Mora, Paraguay.
colors:
  rotthem-blue: "#2F5FC4"
  lena-amber: "#F2A93B"
  whatsapp-green: "#25D366"
  negro-horno: "#0A0E1A"
  negro-carbon: "#070A12"
  white: "#FFFFFF"
  field-border: "#E4E7EF"
  field-error: "#E24444"
typography:
  display:
    fontFamily: "Bevan, serif"
    fontSize: "clamp(2.5rem, 16vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Bevan, serif"
    fontSize: "clamp(2rem, 7vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.2em"
rounded:
  sm: "2px"
  full: "9999px"
spacing:
  gutter-mobile: "1.5rem"
  gutter-desktop: "2.5rem"
  section-y-mobile: "6rem"
  section-y-desktop: "8rem"
  container-max: "80rem"
components:
  button-primary:
    backgroundColor: "{colors.rotthem-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-dark:
    backgroundColor: "{colors.negro-horno}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-outline-white:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.negro-horno}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
  field-dark:
    backgroundColor: "rgba(255,255,255,0.06)"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
---

# Design System: Rotthem Pizzas

## Overview

**Creative North Star: "El Cartel de la Esquina"**

Rotthem se lee como el cartel pintado a mano de una pizzería de barrio, no como una app. Tipografía Bevan en mayúsculas —una slab serif con raíz en la rotulación pintada a mano, gruesa y con carácter propio, no un "impact font" genérico— grita el nombre y las promesas ("NO ES SOLO PIZZA", "RESERVÁ TU MESA") con la contundencia de un cartel serigrafiado, no de un titular editorial ni de una landing hecha con IA. La franja a cuadros azul y blanco funciona como el borde de un toldo: divide secciones con la misma energía gráfica que separaría un mostrador del resto del local. Todo es plano y de bloques de color sólido; la única "textura" permitida es la fotografía real (el fuego, la masa, a Rafa) y el giro sutil de -2°/2° en insignias y hovers, el gesto que recuerda que esto lo hace una persona, no una máquina.

Cálido sin caer en el cliché rústico-artesanal (nada de madera clara, tipografía script ni paleta crema de panadería boutique): el calor viene del contenido real (fotos, la voz en "vos", el nombre de Rafa) y del ámbar puntual, no de un fondo pastel. Alto contraste y energía de cartel callejero por encima de cualquier curaduría genérica tipo SaaS: nada de grillas de tarjetas idénticas con ícono+título+texto, nada de sombra suave por defecto.

**Key Characteristics:**
- Tipografía display en mayúsculas, slab serif gruesa con raíz en rotulación pintada a mano, sin sutileza.
- Bloques de color plano (azul, negro-horno, blanco) en vez de gradientes o vidrio.
- Franja a cuadros azul/blanco como único motivo decorativo recurrente, siempre como divisor.
- Rotación de -2°/2° como firma de "hecho a mano", nunca decorativa fuera de insignias/hover.
- Fotografía real como única fuente de textura y calidez.

## Colors

Paleta restringida y funcional: un azul de marca que hace todo el trabajo de llamado a la acción, un ámbar que aparece solo como acento puntual, y un verde de WhatsApp que existe por reconocimiento de marca ajena, no por elección propia.

### Primary
- **Azul Rotthem** (#2F5FC4): el color de marca. Botones primarios, la franja a cuadros, el subrayado de nav-links activos, el "PIZZA." en el hero, foco de campos de formulario claros, selección de texto (`::selection`).

### Secondary
- **Ámbar Leña** (#F2A93B): acento cálido, deliberadamente raro. Aparece solo en el estado de foco de campos oscuros (formulario de Eventos), como contrapunto puntual al azul dominante. No es un color de fondo ni de botón.

### Tertiary
- **Verde WhatsApp** (#25D366): color funcional, no de marca. Reservado exclusivamente a los puntos de contacto de WhatsApp (ícono mobile, botón flotante). Es un requisito de reconocimiento externo, no una elección de paleta; no debe usarse fuera de esos dos contextos ni reinterpretarse como acento decorativo.

### Neutral
- **Negro Horno** (#0A0E1A): fondo de secciones oscuras (hero, Eventos, Ubicación, CTA final) y color de texto principal sobre fondo blanco (`text-ink`). Todas las variantes de opacidad (ink/50 a ink/60) para texto secundario sobre blanco.
- **Negro Carbón** (#070A12): un paso más oscuro que Negro Horno, reservado al footer. Marca el footer como el punto más denso de la página, no un fondo oscuro intercambiable con el resto.
- **Blanco** (#FFFFFF): fondo de secciones claras (Carta, Reservas, Nosotros) y texto sobre fondo oscuro. Variantes de opacidad (white/30 a white/90) para jerarquía de texto sobre negro.

### Named Rules
**La Regla del Azul Único.** El azul de marca es el único color que actúa como llamado a la acción. Nunca se introduce un segundo color "de acción" compitiendo por atención; el ámbar es acento de estado, no CTA, y el verde de WhatsApp vive solo en sus propios puntos de contacto.

## Typography

**Display Font:** Bevan (con serif de respaldo) — slab serif con raíz en rotulación pintada a mano, deliberadamente elegida para no sonar a "landing hecha con IA" (el par Anton/Inter que tenía el sitio antes es exactamente el tipo de elección genérica que un cliente reconoce y rechaza).
**Body Font:** Instrument Sans (con sans-serif de respaldo), pesos 400 a 700

**Character:** Bevan aporta la voz de cartel pintado a mano, con peso y textura propios en vez de la contundencia fría de un "impact font"; Instrument Sans en pesos medios a bold sostiene todo lo funcional (botones, formularios, cuerpo de texto) sin competir nunca en protagonismo con el display.

### Hierarchy
- **Display** (400, clamp(2.5rem, 16vw, 6rem), line-height 0.92): el H1 del hero. Único uso a esta escala.
- **Headline** (400, clamp(2rem, 7vw, 4.5rem), line-height 0.95): títulos de sección (H2), siempre en mayúsculas, siempre Bevan.
- **Title** (700, 1.5rem): subtítulos de tarjeta (nombres de pizza en Carta), cifras destacadas (horarios, "100%"), logo de navbar.
- **Body** (400–500, 1.125rem, line-height 1.625): párrafos descriptivos, acotados a `max-w-md` / `max-w-sm` (≈ 40–65ch en la práctica, nunca ancho completo).
- **Label** (700, 0.75rem, tracking 0.15em–0.3em, mayúsculas): texto de botón y el badge de ubicación del hero ("Fernando de la Mora · Paraguay"), que porta un dato real, no un rótulo de sección. Instrument Sans en bold, nunca Bevan.

### Named Rules
**La Regla de las Mayúsculas Ganadas.** Las mayúsculas se reservan a Display, Headline y Label (botones y el badge de ubicación). El cuerpo de texto nunca va en mayúsculas: a esta escala se vuelve ilegible y rompe el contraste entre "lo que grita" y "lo que explica".
**La Regla del Heading Solo.** Ningún H2 de sección lleva un eyebrow uppercase encima nombrando la sección ("Eventos", "Reservas", etc.). El heading ya dice lo que hay que decir; un rótulo repetido en cada sección es ruido, no jerarquía. El único texto pequeño-uppercase-tracked que sobrevive es el badge de ubicación del hero, porque porta un dato real (dónde queda el local), no el nombre de la sección que el H2 ya nombra.

## Layout

Contenedor único `max-w-7xl` (80rem) centrado, con gutter de 1.5rem en mobile y 2.5rem desde `md`. El ritmo vertical entre secciones es generoso y consistente: `py-24` (6rem) en mobile, `py-32` (8rem) en desktop para la mayoría de secciones, con variantes puntuales más altas (`py-40`/`py-56`) reservadas al CTA final para que se sienta como un cierre, no una sección más.

La grilla es de una o dos columnas casi siempre (`grid-cols-1` → `md:grid-cols-3` en Carta, `lg:grid-cols-2` en Eventos/Reservas/Nosotros/Ubicación), nunca más de tres columnas simultáneas. El orden de columnas se invierte deliberadamente en mobile vs. desktop (`order-1`/`order-2` + `lg:order-*`) para que la imagen o el formulario lidere según el dispositivo, no según el marcado.

Breakpoints estándar de Tailwind: `sm` 640px, `md` 768px, `lg` 1024px.

## Elevation & Depth

El sistema es plano en su gran mayoría: navbar, tarjetas de menú, campos de formulario y bloques de estadística no llevan sombra en reposo. La profundidad se comunica con superposición de bloques de color y con la rotación de -2°/2°, no con `box-shadow`.

La sombra existe hoy en tres puntos puntuales, todos ligados a estado o flotación, nunca a reposo: el navbar gana una sombra suave al hacer scroll (`#nav.scrolled`), el botón primario gana sombra en hover, y el botón flotante de WhatsApp lleva una sombra ambiente constante porque flota sobre el contenido. Esto no es una prohibición cerrada: el sistema puede incorporar más sombra a futuro si un componente lo justifica: la regla actual es que la sombra se gana por estado o por necesidad de flotar, no que esté vetada.

## Shapes

Dos radios, sin puntos intermedios: `2px` (`rounded-sm`, prácticamente recto) para todo bloque rectangular —botones, tarjetas, campos, badges rectangulares— y `9999px` (`rounded-full`) exclusivamente para círculos y píldoras —el botón de WhatsApp, el badge giratorio, el ícono mobile, la franja de "eyebrow" con borde—. Bordes de 2px de grosor en botones outline, campos y badges reforzados dan al sistema un trazo grueso y gráfico, consistente con la tipografía display.

La franja "checker" (conic-gradient de cuadros azul/blanco) es la forma decorativa recurrente del sistema; el menú mobile se revela con un `clip-path: circle()` que crece desde el botón de menú, el único uso de una forma no rectangular/circular como mecanismo de interacción.

## Components

### Buttons
- **Shape:** `rounded-sm` (2px), nunca `rounded-full` en botones rectangulares.
- **Primary (`btn-brand`):** fondo Azul Rotthem, texto blanco, padding 16px/32px (`px-8 py-4`), texto label (bold, uppercase, tracking ancho).
- **Dark (`btn-dark`):** fondo Negro Horno, texto blanco; usado como CTA secundario sobre fondo claro (ej. "Ver carta completa por WhatsApp").
- **Outline blanco (`btn-outline-w`):** borde blanco de 2px, fondo transparente, texto blanco; usado sobre imagen/fondo oscuro (hero).
- **Hover/Focus:** el primario se eleva 2px, gira -0.5° y gana sombra azul difusa; el dark se eleva 2px y cambia a Azul Rotthem; el outline blanco invierte a fondo blanco/texto negro.
- Existe una variante `btn-outline-b` (borde negro, mismo patrón que la blanca) definida en CSS pero sin uso actual en el marcado; queda disponible para fondos claros que necesiten un CTA terciario.

### Fields
- **Style (claro):** fondo blanco, borde 2px `#E4E7EF`, `rounded-sm`.
- **Style (oscuro, `field-dark`):** fondo blanco al 6% de opacidad, borde blanco al 18%, texto blanco, placeholder blanco al 40%.
- **Focus:** el campo claro resalta el borde en Azul Rotthem con halo suave; el oscuro resalta en Ámbar Leña (el único lugar del sistema donde el ámbar aparece) y aclara levemente el fondo.
- **Error:** animación `shake` (400ms) + borde rojo (`#E24444`) cuando falta el campo obligatorio.

### Menu Card
- **Corner Style:** `rounded-sm`, overflow oculto.
- **Background:** foto a sangre con overlay degradado (transparente → Negro Horno al 85%) para legibilidad del texto inferior.
- **Contenido:** nombre (Title, Bevan) y precio (mismo tratamiento, Azul Rotthem) en una línea arriba; descripción corta debajo. Cada tarjeta es un link directo a WhatsApp con esa pizza pre-cargada en el mensaje.
- **Hover:** la tarjeta se eleva y gira -0.6°, la imagen escala 1.08 y gira 0.8° dentro del recorte; textura "hecha a mano" vía movimiento, no vía sombra.
- **Disclosure:** la grilla muestra 3 tarjetas por defecto (`grid-cols-3` en desktop); un botón `btn-outline-b` ("Ver más de la carta") revela el resto sin recargar la página. Las tarjetas agregadas después del montaje no dependen del observer de scroll-reveal (que solo ve el DOM inicial): usan una animación de entrada propia (`.menu-card-enter`) para no quedar invisibles.
- **Fotografía repetida:** con solo 3 fotos reales de pizza disponibles para 5 ítems del menú, dos tarjetas reutilizan la foto de otra. Es una decisión consciente (evitar stock genérico) mientras no haya más fotos reales; actualizar cuando estén disponibles.

### Navigation
- **Desktop:** barra fija, transparente sobre el hero, gana fondo blanco translúcido + blur + sombra suave al hacer scroll (`#nav.scrolled`); los links cambian de blanco a negro-horno en el mismo punto. Subrayado azul animado en hover (`nav-link::after`).
- **Mobile:** botón hamburguesa circular de borde blanco/negro (según scroll) que se transforma en X; el menú se revela a pantalla completa con `clip-path: circle()` creciendo desde el botón, fondo Negro Horno, links en Bevan mayúscula.

### Checker Strip (signature)
Franja de 16px de alto con `conic-gradient` a cuadros azul/blanco (o blanco/azul invertido sobre fondo oscuro). Aparece solo como divisor entre secciones mayores, nunca como fondo decorativo de un bloque de contenido.

### WhatsApp Float (signature)
Botón circular verde WhatsApp (60px), fijo en la esquina inferior derecha, oculto hasta pasar los 400px de scroll y luego animado con fade + scale. Es el único elemento persistente en pantalla fuera del navbar.

### Badge Spin (signature)
Sello circular con texto curvo ("TRADICIONAL · NAPOLITANA · PARAGUAY") en rotación continua de 18s, con un punto azul sólido en el centro. Aparece una sola vez, en la sección Nosotros, como firma editorial puntual, no como recurso repetible.

## Do's and Don'ts

### Do:
- **Do** usar Bevan solo en mayúsculas para Display, Headline y logo; nunca para cuerpo de texto.
- **Do** mantener el azul de marca como único color de llamado a la acción; el ámbar es acento de foco, no CTA.
- **Do** usar la franja checker únicamente como divisor entre secciones, nunca como fondo de contenido.
- **Do** limitar la rotación decorativa a -2°/2° y solo en insignias, tarjetas en hover y botones en hover; es la única fuente de "imperfección hecha a mano" del sistema.
- **Do** usar fotografía real del negocio (Rafa, el local, las pizzas) como única fuente de textura; nunca stock genérico.
- **Do** dejar que el H2 de cada sección cargue solo su propio peso, sin eyebrow encima.

### Don't:
- **Don't** agregar un eyebrow/kicker uppercase repitiendo el nombre de la sección arriba de un H2, bajo ninguna circunstancia.
- **Don't** introducir un segundo color de acción compitiendo con el Azul Rotthem.
- **Don't** usar el verde de WhatsApp fuera de los puntos de contacto de WhatsApp.
- **Don't** aplicar `rounded-full` a elementos rectangulares ni radios intermedios (8px, 12px, etc.): el sistema es binario entre 2px y círculo completo.
- **Don't** caer en grillas de tarjetas idénticas con ícono+título+texto ni en sombra suave por defecto tipo SaaS.
- **Don't** derivar hacia la estética rústico-artesanal genérica (madera clara, script, paleta crema) que el proyecto descartó explícitamente.
