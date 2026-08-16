import { useRef } from "react";
import { waLink } from "../constants";
import ParallaxImage from "./ParallaxImage";

function shakeField(el) {
  el.classList.remove("shake");
  void el.offsetWidth;
  el.classList.add("shake");
  el.focus();
}

export default function Reservas() {
  const nombreRef = useRef(null);
  const personasRef = useRef(null);
  const fechaRef = useRef(null);
  const horaRef = useRef(null);

  const handleSubmit = () => {
    const nombre = nombreRef.current;
    if (!nombre.value.trim()) {
      shakeField(nombre);
      return;
    }
    const personas = personasRef.current.value || "A coordinar";
    const fecha = fechaRef.current.value || "A coordinar";
    const hora = horaRef.current.value || "A coordinar";
    const text = `Hola! Quiero reservar una mesa 🍽️\n\nNombre: ${nombre.value}\nPersonas: ${personas}\nFecha: ${fecha}\nHora: ${hora}`;
    window.open(waLink(text), "_blank", "noopener");
  };

  return (
    <section id="reservas" className="relative py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal-pop relative order-1">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
            <ParallaxImage
              src="/assets/images/img-7.jpg"
              alt="El local de Rotthem Pizzas en Fernando de la Mora"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-5 -left-5 md:-top-6 md:-left-6 bg-ink px-6 py-5 rotate-[2deg]">
            <div className="font-display text-white text-2xl md:text-3xl leading-none">
              MESA
              <br />
              LISTA
            </div>
          </div>
        </div>

        <div className="reveal order-2">
          <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95] mb-6">
            RESERVÁ
            <br />
            TU MESA.
          </h2>
          <p className="text-ink/60 text-lg leading-relaxed mb-8 max-w-md">
            Contanos cuándo venís y para cuántos, y te confirmamos por WhatsApp.
          </p>

          <form className="grid sm:grid-cols-2 gap-4 max-w-lg" noValidate onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="re-nombre" className="sr-only">
              Tu nombre
            </label>
            <input
              id="re-nombre"
              ref={nombreRef}
              required
              type="text"
              placeholder="Tu nombre"
              className="field rounded-sm px-4 py-3.5 text-sm col-span-2 sm:col-span-1"
            />
            <label htmlFor="re-personas" className="sr-only">
              Cantidad de personas
            </label>
            <input
              id="re-personas"
              ref={personasRef}
              type="number"
              min="1"
              placeholder="Cant. de personas"
              className="field rounded-sm px-4 py-3.5 text-sm col-span-2 sm:col-span-1"
            />
            <label htmlFor="re-fecha" className="sr-only">
              Fecha de la reserva
            </label>
            <input id="re-fecha" ref={fechaRef} type="date" className="field rounded-sm px-4 py-3.5 text-sm col-span-2 sm:col-span-1" />
            <label htmlFor="re-hora" className="sr-only">
              Hora de la reserva
            </label>
            <input id="re-hora" ref={horaRef} type="time" className="field rounded-sm px-4 py-3.5 text-sm col-span-2 sm:col-span-1" />
            <button
              type="button"
              onClick={handleSubmit}
              className="btn-brand col-span-2 text-xs tracking-[0.2em] uppercase font-bold px-8 py-4 justify-self-start"
            >
              Reservar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
