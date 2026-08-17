import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { waLink } from "../constants";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/historia", label: "Historia" },
  { to: "/local", label: "Local" },
  { to: "/eventos", label: "Eventos" },
  { to: "/delivery", label: "Delivery" },
  { to: "/agenda", label: "Agenda" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
];

const ORDER_TEXT = "Hola! Quiero hacer un pedido en Rotthem 🍕";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav id="nav2" className="sticky top-0 z-50 bg-[var(--marmol)]" style={{ background: "var(--marmol)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <img src="/assets/images/Logo Rotthem.webp" alt="Rotthem" className="h-7 md:h-8 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`nav2-link ${location.pathname === l.to ? "active" : ""}`}
                style={{ color: "var(--ink)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href={waLink(ORDER_TEXT)} target="_blank" rel="noopener" className="btn2 btn2-accent">
              Pedí ahora
            </a>
          </div>

          <button
            id="burger2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mmenu2"
            className="lg:hidden w-10 h-10 rounded-full border-2 flex flex-col items-center justify-center gap-[5px]"
            style={{ borderColor: "rgba(19,27,77,.25)" }}
          >
            <span
              className="block w-4 h-[2px]"
              style={{ background: "var(--ink)", transition: "transform .3s ease", transform: open ? "translateY(3.5px) rotate(45deg)" : "" }}
            ></span>
            <span
              className="block w-4 h-[2px]"
              style={{ background: "var(--ink)", transition: "transform .3s ease", transform: open ? "translateY(-3.5px) rotate(-45deg)" : "" }}
            ></span>
          </button>
        </div>
      </nav>

      <div
        id="mmenu2"
        className={`fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center gap-6 ${open ? "" : "hidden"}`}
        style={{ background: "var(--ink)" }}
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className="font-display text-3xl"
            style={{ color: location.pathname === l.to ? "#C8472F" : "#fff" }}
          >
            {l.label}
          </Link>
        ))}
        <a
          href={waLink(ORDER_TEXT)}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
          className="btn2 btn2-accent mt-4"
        >
          Pedí ahora
        </a>
      </div>
    </>
  );
}
