import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Loader />
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
