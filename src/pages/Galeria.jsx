import { useState } from "react";
import PageTransition from "../components/PageTransition";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../constants";

const filters = ["Todo", "Eventos", "Ferias", "El Local"];

const photos = [
  { img: "pizza-entrando-horno.jpg", caption: "Margarita al horno", cat: "El Local" },
  { img: "chica-gorra-pizza-v2.jpg", caption: "El vuelo de la masa", cat: "Ferias" },
  { img: "entregando-pizza.jpg", caption: "Evento privado", cat: "Eventos" },
  { img: "rafa-salsa.jpg", caption: "Rafa en producción", cat: "El Local" },
  { img: "rafa-queso.jpg", caption: "", cat: "El Local" },
  { img: "pizza-horno.jpg", caption: "450 °C, 90 segundos", cat: "El Local" },
  { img: "entregando-pizza-2.jpg", caption: "", cat: "Eventos" },
  { img: "menu-1.jpg", caption: "La carta impresa", cat: "El Local" },
  { img: "pizza-mesa-madera.jpg", caption: "", cat: "Ferias" },
];

export default function Galeria() {
  useScrollReveal();
  const [active, setActive] = useState("Todo");

  const visible = active === "Todo" ? photos : photos.filter((p) => p.cat === active);

  return (
    <PageTransition>
      <section className="section-marmol px-6 md:px-10 pt-20 pb-16 md:pt-24 text-center">
        <span className="eyebrow">Galería</span>
        <h1 className="text-3xl md:text-5xl mb-8">La masa, el fuego y la gente</h1>
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)} className={`filter-pill ${active === f ? "active" : ""}`}>
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="section-marmol px-6 md:px-10 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto masonry">
          {visible.map((p) => (
            <div key={p.img} className="masonry-item reveal">
              <img src={`/assets/images/${p.img}`} alt={p.caption || "Rotthem"} />
              {p.caption && <div className="masonry-caption">{p.caption}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="section-niebla px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="text-2xl md:text-3xl mb-8">
          Hay más todos los días en <span style={{ color: "var(--brand)" }}>{INSTAGRAM_HANDLE}</span>
        </h2>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="btn2 btn2-outline">
          Seguinos en Instagram
        </a>
      </section>
    </PageTransition>
  );
}
