import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollY } from "../hooks/useScrollY";
import { waLink } from "../constants";

const links = [
  { to: "/carta", label: "Carta" },
  { to: "/#eventos", label: "Eventos" },
  { to: "/#reservas", label: "Reservas" },
  { to: "/#delivery", label: "Delivery" },
  { to: "/#nosotros", label: "Nosotros" },
  { to: "/#ubicacion", label: "Ubicación" },
];

const ORDER_TEXT = "Hola! Quiero hacer un pedido en Rotthem 🍕";

export default function Navbar() {
  const scrollY = useScrollY();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isCartaActive = location.pathname.startsWith("/carta");
  const scrolled = isHome ? scrollY > 40 : true;
  const [open, setOpen] = useState(false);

  const navItemClass = (isActive) =>
    `nav-link nav-item transition-colors hover:text-brand ${
      isActive ? "active text-brand" : scrolled ? "text-ink" : "text-white"
    }`;
  const burgerLineStyle = { background: scrolled ? "#0A0E1A" : "#fff" };

  return (
    <>
      <nav id="nav" className={`fixed top-4 left-0 right-0 z-50 ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="nav-logo flex items-center gap-3">
            <img src="/assets/images/logo-mark.png" alt="" className="h-10 md:h-12" />
            <span
              className={`font-display text-2xl tracking-tight ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              ROTTH<span className="text-brand">E</span>M
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={navItemClass(l.to === "/carta" && isCartaActive)}>
                {l.label}
              </Link>
            ))}
            <a
              href={waLink(ORDER_TEXT)}
              target="_blank"
              rel="noopener"
              className="btn-brand text-xs tracking-widest uppercase font-bold px-5 py-3"
            >
              Pedí ahora
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <a
              href={waLink(ORDER_TEXT)}
              target="_blank"
              rel="noopener"
              aria-label="Pedí por WhatsApp"
              className="w-10 h-10 rounded-full bg-brand flex items-center justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M17.6 6.32A7.85 7.85 0 0 0 12.04 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.83.98h.003c4.38 0 7.94-3.56 7.95-7.94a7.9 7.9 0 0 0-2.38-5.62Zm-5.56 12.2h-.003a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 0 1-1.01-3.51 6.6 6.6 0 0 1 6.63-6.6 6.55 6.55 0 0 1 4.67 1.94 6.56 6.56 0 0 1 1.93 4.66c0 3.65-2.97 6.61-6.6 6.61Z"
                  fill="#fff"
                />
              </svg>
            </a>
            <button
              id="burger"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mmenu"
              className={`w-10 h-10 rounded-full border-2 flex flex-col items-center justify-center gap-[5px] burger-btn ${
                scrolled ? "border-ink/30" : "border-white/40"
              }`}
            >
              <span
                className="mline w-4 h-[2px]"
                style={{
                  ...burgerLineStyle,
                  transform: open ? "translateY(3.5px) rotate(45deg)" : "",
                }}
              ></span>
              <span
                className="mline w-4 h-[2px]"
                style={{
                  ...burgerLineStyle,
                  transform: open ? "translateY(-3.5px) rotate(-45deg)" : "",
                }}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mmenu"
        className={`fixed inset-0 z-40 bg-[#0A0E1A] lg:hidden flex flex-col items-center justify-center gap-7 ${
          open ? "open" : ""
        }`}
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className={`mnav-link font-display text-3xl ${
              l.to === "/carta" && isCartaActive ? "text-brand" : "text-white"
            }`}
          >
            {l.label}
          </Link>
        ))}
        <a
          href={waLink(ORDER_TEXT)}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
          className="btn-brand mt-4 text-sm tracking-widest uppercase font-bold px-8 py-4"
        >
          Pedí ahora
        </a>
      </div>
    </>
  );
}
