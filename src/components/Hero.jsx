import { useEffect, useRef } from "react";
import Magnetic from "./Magnetic";

export default function Hero() {
  const imgRef = useRef(null);
  const lineRefs = useRef([]);
  lineRefs.current = [];

  const addLineRef = (el) => {
    if (el && !lineRefs.current.includes(el)) lineRefs.current.push(el);
  };

  useEffect(() => {
    lineRefs.current.forEach((el, i) => {
      setTimeout(() => el.classList.add("in"), 1200 + i * 110);
    });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (imgRef.current && y < window.innerHeight) {
        imgRef.current.style.transform = `translateY(${y * 0.15}px) scale(${
          1.03 + y * 0.00006
        })`;
      }
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src="/assets/images/background.png"
          alt="Rafa, de Rotthem Pizzas, tirando una masa napolitana"
          className="hero-img hero-photo w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-grad"></div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center">
        <div
          ref={addLineRef}
          className="hero-line inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border-2 border-brand bg-ink/40 text-[11px] tracking-[0.25em] uppercase text-white font-semibold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
          Fernando de la Mora · Paraguay
        </div>

        <h1
          ref={addLineRef}
          className="hero-line hero-title font-display text-white leading-[0.92] tracking-tight mb-2"
        >
          ROTTH<span className="text-brand">E</span>M
        </h1>

        <p ref={addLineRef} className="hero-line font-display text-white/80 text-2xl md:text-4xl tracking-tight mb-6">
          Pizza Napolitana
        </p>

        <p ref={addLineRef} className="hero-line hero-tagline text-brand text-lg md:text-xl mb-9">
          Fatte a Mano
        </p>

        <div ref={addLineRef} className="hero-line flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <a
              href="#carta"
              className="btn-brand inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold px-8 py-4"
            >
              Ver la carta
            </a>
          </Magnetic>
          <a
            href="#nosotros"
            className="btn-outline-w inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold px-8 py-4"
          >
            Conocé Rotthem
          </a>
        </div>
      </div>

      <a
        href="#carta"
        aria-label="Descubrí más, desplazate hacia abajo"
        className="hero-scroll-cue absolute z-10 text-white/70 hover:text-white transition-colors"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 4v15M12 19l-6-6M12 19l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </header>
  );
}
