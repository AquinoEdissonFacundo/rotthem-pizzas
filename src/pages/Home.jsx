import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Carta from "../components/Carta";
import Eventos from "../components/Eventos";
import Reservas from "../components/Reservas";
import Delivery from "../components/Delivery";
import Nosotros from "../components/Nosotros";
import Ubicacion from "../components/Ubicacion";
import CtaFinal from "../components/CtaFinal";

export default function Home() {
  const location = useLocation();
  useScrollReveal();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const timeout = setTimeout(scrollToTarget, 100);
    return () => clearTimeout(timeout);
  }, [location.hash]);

  return (
    <PageTransition>
      <Hero />
      <Marquee />
      <Carta />
      <div className="checker"></div>
      <Eventos />
      <Reservas />
      <div className="checker"></div>
      <Delivery />
      <Nosotros />
      <div className="checker"></div>
      <Ubicacion />
      <CtaFinal />
    </PageTransition>
  );
}
