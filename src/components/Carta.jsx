import { Link } from "react-router-dom";
import { waLink } from "../constants";
import { PIZZAS, formatGs } from "../data/pizzas";

const CARTA_TEXT = "Hola! Quiero hacer un pedido en Rotthem 🍕";
const PREVIEW = PIZZAS.slice(0, 3);

export default function Carta() {
  return (
    <section id="carta" className="relative py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div>
            <h2 className="reveal font-display text-5xl md:text-7xl tracking-tight leading-[0.95]">
              HECHA A
              <br />
              LA LEÑA.
            </h2>
          </div>
          <p className="reveal text-ink/60 max-w-sm md:text-right">
            Seleccionamos lo mejor, para que cada bocado sea inolvidable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 stagger">
          {PREVIEW.map((pizza, i) => (
            <Link
              key={pizza.slug}
              to={`/menu/${pizza.slug}`}
              className="menu-card reveal block rounded-sm overflow-hidden bg-ink"
              style={{ "--i": i }}
            >
              <div className="relative aspect-[4/5] w-full">
                <img
                  src={pizza.img}
                  alt={`Pizza ${pizza.name} — Rotthem Pizzas`}
                  className="w-full h-full object-cover"
                />
                <div className="menu-card-overlay absolute inset-0"></div>
                <div className="absolute left-5 right-5 bottom-5">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display text-white text-2xl">{pizza.name}</h3>
                    <span className="font-display text-brand text-lg whitespace-nowrap">
                      {formatGs(pizza.price)}
                    </span>
                  </div>
                  <p className="text-white/65 text-sm leading-snug">{pizza.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal mt-14 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/menu"
            className="btn-outline-b inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold px-8 py-4"
          >
            Ver más de la carta
          </Link>
          <a
            href={waLink(CARTA_TEXT)}
            target="_blank"
            rel="noopener"
            className="btn-dark inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold px-8 py-4"
          >
            Pedí por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
