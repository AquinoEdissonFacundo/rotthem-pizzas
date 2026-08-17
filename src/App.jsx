import { useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Local from "./pages/Local";
import Eventos from "./pages/Eventos";
import Delivery from "./pages/Delivery";
import Agenda from "./pages/Agenda";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";

function useAnchorSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}

function useScrollToTopOnNavigate() {
  const location = useLocation();
  useLayoutEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
}

export default function App() {
  useAnchorSmoothScroll();
  useScrollToTopOnNavigate();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/local" element={<Local />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}
