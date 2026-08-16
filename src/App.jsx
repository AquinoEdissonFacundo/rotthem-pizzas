import { useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";

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
    // A hash means Home's own #anchor effect owns the landing spot.
    // Reset before the outgoing page's exit animation plays (not after,
    // via onExitComplete) so the browser never gets a chance to clamp
    // scrollY when a much shorter page mounts under a tall scroll offset --
    // that clamp is what landed users mid-page instead of at the top.
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
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:slug" element={<MenuDetail />} />
      </Route>
    </Routes>
  );
}
