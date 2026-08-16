import { waLink } from "../constants";
import CountUp from "./CountUp";

const DELIVERY_TEXT = "Hola! Quiero pedir delivery de Rotthem 🍕🛵";

export default function Delivery() {
  return (
    <section id="delivery" className="relative py-24 md:py-28 px-6 md:px-10 bg-brand overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="reveal">
          <h2 className="font-display text-white text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6">
            PIZZA EN
            <br />
            TU CASA.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-md mb-8">
            Pedí por WhatsApp y te la llevamos recién salida del horno. También podés retirar en el local.
          </p>
          <a
            href={waLink(DELIVERY_TEXT)}
            target="_blank"
            rel="noopener"
            className="btn-dark inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold px-8 py-4"
          >
            Pedí por WhatsApp
          </a>
        </div>
        <div className="reveal-pop grid grid-cols-2 gap-4">
          <div className="bg-white/10 border-2 border-white/25 rounded-sm p-6 md:p-8">
            <div className="font-display text-white text-3xl md:text-4xl mb-1">19-23:30</div>
            <div className="text-white/70 text-xs tracking-[0.15em] uppercase">Horario del local</div>
          </div>
          <div className="bg-white/10 border-2 border-white/25 rounded-sm p-6 md:p-8">
            <div className="font-display text-white text-3xl md:text-4xl mb-1">
              <CountUp to={100} suffix="%" />
            </div>
            <div className="text-white/70 text-xs tracking-[0.15em] uppercase">A la leña</div>
          </div>
          <div className="bg-white/10 border-2 border-white/25 rounded-sm p-6 md:p-8 col-span-2">
            <div className="font-display text-white text-2xl md:text-3xl mb-1">RETIRO EN EL LOCAL</div>
            <div className="text-white/70 text-xs tracking-[0.15em] uppercase">
              Confuso esq. Muñoz, Fdo. de la Mora
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
