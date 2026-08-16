import { waLink } from "../constants";
import Magnetic from "./Magnetic";

const RESERVE_TEXT = "Hola! Quiero reservar una mesa 🍽️";

export default function CtaFinal() {
  return (
    <section className="relative py-40 md:py-56 px-6 md:px-10 overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="/assets/images/img-9.jpg"
          alt="Rotthem Pizzas"
          className="w-full h-full object-cover object-top reveal-pop"
        />
        <div className="absolute inset-0 bg-ink/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/70"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="reveal font-display text-white text-[13vw] md:text-8xl leading-[0.95] tracking-tight mb-10">
          ¿VENÍS A
          <br />
          COMER?
        </h2>
        <Magnetic>
          <a
            href={waLink(RESERVE_TEXT)}
            target="_blank"
            rel="noopener"
            className="reveal btn-brand inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-bold px-10 py-5"
          >
            Reservá tu mesa
          </a>
        </Magnetic>
        <p className="reveal mt-6 text-white/40 text-xs tracking-widest uppercase">
          WhatsApp · Confuso esq. Muñoz, Fdo. de la Mora
        </p>
      </div>
    </section>
  );
}
