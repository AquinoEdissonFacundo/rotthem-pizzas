import { waLink } from "../constants";

const ORDER_TEXT = "Hola! Quiero hacer un pedido en Rotthem 🍕";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-10 pt-16 pb-10 bg-[#070A12]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-14">
          <div>
            <div className="font-display text-white text-2xl mb-3">ROTTHEM</div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Tradición napolitana hecha en Paraguay.
              <br />
              Fernando de la Mora.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-white/55 text-xs tracking-[0.25em] uppercase mb-2 font-semibold">Enlaces</span>
            <a
              href="https://www.instagram.com/rotthempizzas"
              target="_blank"
              rel="noopener"
              className="text-white/60 hover:text-brand transition-colors w-fit"
            >
              Instagram
            </a>
            <a
              href={waLink(ORDER_TEXT)}
              target="_blank"
              rel="noopener"
              className="text-white/60 hover:text-brand transition-colors w-fit"
            >
              WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/4UcHyK9oMBm61Tov8"
              target="_blank"
              rel="noopener"
              className="text-white/60 hover:text-brand transition-colors w-fit"
            >
              Google Maps
            </a>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-white/55 text-xs tracking-[0.25em] uppercase mb-2 font-semibold">Contacto</span>
            <span className="text-white/60">Confuso esq. Muñoz, Fdo. de la Mora</span>
            <span className="text-white/60">+595 974 962 373</span>
          </div>
        </div>
        <div className="checker mb-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/55 text-xs">
          <span>© 2026 Rotthem Pizzas. Todos los derechos reservados.</span>
          <span>Napolitana a la leña · Fernando de la Mora, Paraguay</span>
        </div>
      </div>
    </footer>
  );
}
