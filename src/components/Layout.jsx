import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Loader />
      <div className="checker"></div>
      <Navbar />
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (!location.hash) window.scrollTo(0, 0);
        }}
      >
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
