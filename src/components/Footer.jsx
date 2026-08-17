import { Link } from "react-router-dom";
import { WA_DISPLAY, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PEDIDOSYA_URL, ADDRESS_SHORT } from "../constants";

const secciones = [
  { to: "/historia", label: "Nuestra historia" },
  { to: "/local", label: "El Local" },
  { to: "/eventos", label: "Eventos privados" },
  { to: "/delivery", label: "Delivery" },
  { to: "/agenda", label: "Agenda" },
  { to: "/galeria", label: "Galería" },
];

export default function Footer() {
  return (
    <footer className="section-ink px-6 md:px-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 md:gap-8 mb-14">
          <div>
            <img src="/assets/images/Logo Rotthem - Blanco.webp" alt="Rotthem" className="h-9 mb-4" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs quote-serif">
              Del río de Pilar al fuego de Asunción.
              <br />
              Rotthem — Pizzas &amp; more.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-white/45 text-xs tracking-[0.2em] uppercase mb-1 font-semibold">Secciones</span>
            {secciones.map((s) => (
              <Link key={s.to} to={s.to} className="text-white/70 hover:text-white transition-colors w-fit">
                {s.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-white/45 text-xs tracking-[0.2em] uppercase mb-1 font-semibold">Contacto</span>
            <span className="text-white/70">{ADDRESS_SHORT} — local publicada próximamente</span>
            <span className="text-white/70">{WA_DISPLAY}</span>
            <a href={`mailto:${EMAIL}`} className="text-white/70 hover:text-white transition-colors w-fit">
              {EMAIL}
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-white/45 text-xs tracking-[0.2em] uppercase mb-1 font-semibold">Seguinos</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="text-white/70 hover:text-white transition-colors w-fit">
              Instagram · {INSTAGRAM_HANDLE}
            </a>
            <a href={PEDIDOSYA_URL} target="_blank" rel="noopener" className="text-white/70 hover:text-white transition-colors w-fit">
              PedidosYa · Rotthem Pizza
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/45 text-xs">
          <span>© 2026 Rotthem — Pizzas &amp; more. Asunción, Paraguay.</span>
          <span>{INSTAGRAM_HANDLE}</span>
        </div>
      </div>
    </footer>
  );
}
