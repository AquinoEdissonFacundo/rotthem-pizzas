import { useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useEventos } from "../data/eventos";
import { waLink, INSTAGRAM_HANDLE, INSTAGRAM_URL, ADDRESS_FULL } from "../constants";
import { IconPin, IconClock, IconChair } from "../components/Icons";

const cards = [
  {
    img: "pizza-mesa-2.webp",
    title: "El Local",
    desc: "El primer local está en camino. Falta poco y falta tu nombre en una mesa.",
    cta: "Reservar mesa",
    to: "/local",
  },
  {
    img: "pizza-1.webp",
    title: "Eventos privados",
    desc: "De 20 a 90 invitados, el horno se adapta a la fiesta.",
    cta: "Pedir presupuesto",
    to: "/eventos",
  },
  {
    img: "entregando-pizza.webp",
    title: "Delivery",
    desc: "El horno a tu puerta sin perder el humo. Delivery propio o PedidosYa.",
    cta: "Pedir ahora",
    to: "/delivery",
  },
  {
    img: "chica-gorra-pizza-v2.webp",
    title: "Ferias & agenda",
    desc: "Palmear, el Cabildo, Pilar: cada mes armamos el puesto en otra parte.",
    cta: "Ver agenda",
    to: "/agenda",
  },
];

const igShots = ["pizza-entrando-horno.webp", "rafa-salsa.webp", "rafa-trabajando.webp", "rafa-queso.webp"];

export default function Home() {
  useScrollReveal();
  const eventos = useEventos().slice(0, 3);
  const [videoOk, setVideoOk] = useState(
    () => typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "min(640px, 90vh)" }}>
        <img
          src="/assets/images/rafa-restaurante.webp"
          alt="Rafa, fundador de Rotthem, en la cocina"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {videoOk && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            onError={() => setVideoOk(false)}
          >
            <source src="/videohero.webm" type="video/webm" />
            <source src="/videohero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(19,27,77,.88) 0%, rgba(19,27,77,.55) 45%, rgba(19,27,77,.15) 75%)" }}></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-xl">
            <span className="eyebrow" style={{ color: "#fff", opacity: 0.75 }}>Pizza napoletana — Asunción, Paraguay</span>
            <h1 className="text-white text-4xl md:text-6xl leading-[1.05] mb-6">
              Pizzas de verdadero estilo napolitano. Dejate enamorar.
            </h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Masa fermentada 48 horas, tomate italiano y fuego vivo. Hechas a mano por Rafa, que le dedica el tiempo que se le dedica a lo que se ama.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/local" className="btn2 btn2-white">Reservar mesa</Link>
              <Link to="/delivery" className="btn2 btn2-outline-light">Pedir delivery</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Elegí tu momento */}
      <section className="section-marmol px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow">Elegí tu momento</span>
          <h2 className="text-3xl md:text-4xl mb-10">¿De qué tenés ganas hoy?</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {cards.map((c) => (
              <Link key={c.title} to={c.to} className="card-media reveal" style={{ aspectRatio: "3/4" }}>
                <img src={`/assets/images/${c.img}`} alt={c.title} />
                <div className="card-media-overlay"></div>
                <div className="card-media-text">
                  <h3 className="text-xl mb-1" style={{ color: "#fff" }}>{c.title}</h3>
                  <p className="text-white/75 text-sm leading-snug mb-3">{c.desc}</p>
                  <span className="text-xs font-semibold uppercase tracking-wide inline-flex items-center gap-1">
                    {c.cta} <IconArrowSmall />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-8 border-t" style={{ borderColor: "rgba(19,27,77,.1)" }}>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--gris)" }}>
              <IconFlameSmall /> Dos años de horno en Asunción
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--gris)" }}>
              <IconHeartSmall /> Más de 5.000 seguidores en {INSTAGRAM_HANDLE}
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--gris)" }}>
              <IconTagSmall /> Todos los meses en la feria Palmear
            </div>
          </div>
        </div>
      </section>

      {/* Historia teaser */}
      <section className="section-niebla grid md:grid-cols-2">
        <img src="/assets/images/rafa-iga-bn.webp" alt="Rafa Toloza" className="w-full h-64 md:h-full object-cover" />
        <div className="flex flex-col justify-center px-6 md:px-16 py-14 md:py-0">
          <span className="eyebrow">La historia</span>
          <h2 className="text-3xl md:text-4xl mb-4 max-w-md">Conocé al creador de tu próxima pizza favorita.</h2>
          <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: "var(--gris)" }}>
            Rafa dejó la facultad y la batería cuando aceptó lo que su abuela y su mamá le enseñaron en Pilar: que cocinar para otros es una forma de dar amor. Hoy esa forma de querer sale del horno — para vos.
          </p>
          <Link to="/historia" className="btn2 btn2-outline w-fit">Conocé la historia</Link>
        </div>
      </section>

      {/* Próximos eventos */}
      <section className="section-ink px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div>
              <span className="eyebrow">Próximos eventos</span>
              <h2 className="text-3xl md:text-4xl" style={{ color: "#fff" }}>Vení a buscarnos este mes</h2>
            </div>
            <Link to="/agenda" className="btn2 btn2-outline-light">Ver agenda completa</Link>
          </div>

          <div className="flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
            {eventos.map((e) => (
              <div key={e.title + e.date} className="flex items-center justify-between gap-4 py-5">
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-xs font-bold tracking-widest" style={{ color: "var(--terracota)" }}>
                    {e.day.slice(0, 3).toUpperCase()} {e.date} {e.month}
                  </span>
                  <div>
                    <div className="text-white font-display text-lg">{e.title}</div>
                    <div className="text-white/50 text-sm">{e.desc}</div>
                  </div>
                </div>
                <span className="text-white/50 text-sm hidden sm:block">{e.place}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="section-marmol px-6 md:px-10 py-20 md:py-24 text-center">
        <span className="eyebrow">Seguinos en Instagram</span>
        <h2 className="text-3xl md:text-4xl mb-10" style={{ color: "var(--brand)" }}>{INSTAGRAM_HANDLE}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-6">
          {igShots.map((img) => (
            <a key={img} href={INSTAGRAM_URL} target="_blank" rel="noopener" className="card-media" style={{ aspectRatio: "1/1" }}>
              <img src={`/assets/images/${img}`} alt="Rotthem en Instagram" />
            </a>
          ))}
        </div>
        <p className="text-xs max-w-md mx-auto" style={{ color: "var(--gris)" }}>
          El feed se embebe en la web publicada — acá se muestran fotos reales de la marca.
        </p>
      </section>

      {/* Ubicación próximamente */}
      <section className="section-brand px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="pill-badge mb-4">Próximamente</span>
            <span className="eyebrow" style={{ color: "rgba(255,255,255,.7)" }}>Ubicación &amp; horarios</span>
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "#fff" }}>Capitán Pedro Carpinelli, Asunción</h2>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3 text-white/85 text-sm">
                <IconPin className="w-5 h-5 min-w-5 mt-0.5" /> {ADDRESS_FULL}
              </li>
              <li className="flex items-start gap-3 text-white/85 text-sm">
                <IconClock className="w-5 h-5 min-w-5 mt-0.5" /> Horarios a confirmar — abrimos próximamente.
              </li>
              <li className="flex items-start gap-3 text-white/85 text-sm">
                <IconChair className="w-5 h-5 min-w-5 mt-0.5" /> Ferias y eventos según agenda.
              </li>
            </ul>
            <a href={waLink("Hola! Quiero reservar una mesa en Rotthem cuando abran 🍕")} target="_blank" rel="noopener" className="btn2 btn2-white">
              Reservar mesa
            </a>
          </div>
          <div className="card-flat" style={{ background: "var(--niebla)" }}>
            <div className="flex flex-col items-center text-center py-10">
              <IconPin className="w-8 h-8 mb-3" style={{ color: "var(--brand)" }} />
              <div className="font-display text-lg mb-2">Capitán Pedro Carpinelli, Asunción</div>
              <p className="text-sm" style={{ color: "var(--gris)" }}>
                En la web publicada, acá se embebe el mapa interactivo de Google Maps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function IconArrowSmall() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function IconFlameSmall() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--terracota)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 min-w-4">
      <path d="M12 22c4 0 7-2.7 7-6.8 0-3-1.8-4.9-3-6.5.1 2-1 3-1 3 .3-3.5-1.5-6.4-3.7-7.7.4 2.1-.2 4-1.6 5.7C8.3 11.2 7 12.8 7 15.2 7 19.3 8.5 22 12 22Z" />
    </svg>
  );
}
function IconHeartSmall() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--terracota)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 min-w-4">
      <path d="M12 21s-7-4.5-9.5-9C.6 8.4 2 5 5.3 5c1.9 0 3.3 1 4.7 2.7C11.4 6 12.8 5 14.7 5 18 5 19.4 8.4 21.5 12c-2.5 4.5-9.5 9-9.5 9Z" />
    </svg>
  );
}
function IconTagSmall() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--terracota)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 min-w-4">
      <path d="m20.6 12.6-8 8a2 2 0 0 1-2.8 0l-6.4-6.4a2 2 0 0 1 0-2.8l8-8A2 2 0 0 1 12.8 3H19a2 2 0 0 1 2 2v6.2a2 2 0 0 1-.4 1.4Z" />
      <circle cx="15.5" cy="8.5" r="1.5" />
    </svg>
  );
}
