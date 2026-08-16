import { Link, Navigate, useParams } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import PageTransition from "../components/PageTransition";
import { getPizzaBySlug, formatGs } from "../data/pizzas";
import { waLink } from "../constants";

export default function CartaDetail() {
  const { slug } = useParams();
  const pizza = getPizzaBySlug(slug);
  useScrollReveal([slug]);

  if (!pizza) return <Navigate to="/carta" replace />;

  return (
    <PageTransition>
      <section className="page-top relative pb-24 md:pb-32 px-6 md:px-10 bg-ink">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/carta"
            className="back-link reveal text-xs tracking-[0.2em] uppercase font-bold text-white/55 hover:text-brand transition-colors mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver a la carta
          </Link>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-pop relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
                <img
                  src={pizza.img}
                  alt={`Pizza ${pizza.name} — Rotthem Pizzas`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="reveal">
              <h1 className="pizza-title font-display text-white tracking-tight leading-[0.95] mb-4">
                {pizza.name.toUpperCase()}
              </h1>
              <div className="font-display text-brand text-2xl md:text-3xl mb-6">{formatGs(pizza.price)}</div>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">{pizza.desc}</p>

              <div className="mb-10">
                <div className="text-xs tracking-[0.25em] uppercase text-white/55 font-semibold mb-3">
                  Ingredientes
                </div>
                <ul className="flex flex-wrap gap-2">
                  {pizza.ingredients.map((ing) => (
                    <li key={ing} className="ingredient-chip">
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={waLink(`Hola! Quiero pedir una Pizza ${pizza.name} 🍕`)}
                target="_blank"
                rel="noopener"
                className="btn-brand inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold px-8 py-4"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
