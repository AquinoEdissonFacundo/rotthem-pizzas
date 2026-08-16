import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import PageTransition from "../components/PageTransition";
import { PIZZAS, formatGs } from "../data/pizzas";

export default function Carta() {
  useScrollReveal();

  return (
    <PageTransition>
      <div className="page-top bg-ink">
        <div className="checker"></div>
      </div>

      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-ink overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/background.png"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="reveal font-display text-white text-5xl md:text-7xl tracking-tight leading-[0.95] mb-4">
            LA CARTA
            <br />
            COMPLETA.
          </h1>
          <p className="reveal text-white/60 max-w-md mx-auto">
            Todas nuestras pizzas, hechas a la leña. Tocá una para ver ingredientes y pedirla por WhatsApp.
          </p>
        </div>
      </section>

      <section className="relative pt-4 pb-24 md:pb-32 px-6 md:px-10 bg-ink">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 stagger">
            {PIZZAS.map((pizza, i) => (
              <Link
                key={pizza.slug}
                to={`/carta/${pizza.slug}`}
                className="menu-card reveal block rounded-sm overflow-hidden bg-ink border-2 border-white/15"
                style={{ "--i": i % 3 }}
              >
                <div className="relative aspect-[4/5] w-full">
                  <img
                    src={pizza.img}
                    alt={`Pizza ${pizza.name} — Rotthem Pizzas`}
                    className="w-full h-full object-cover"
                  />
                  <div className="menu-card-overlay absolute inset-0"></div>

                  <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 bg-ink/75 rounded-full px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-white font-semibold">
                    Ver detalle
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="absolute left-5 right-5 bottom-5">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h2 className="font-display text-white text-2xl">{pizza.name}</h2>
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
        </div>
      </section>
    </PageTransition>
  );
}
