import { useRef, useState } from "react";
import { waLink } from "../constants";
import ParallaxImage from "./ParallaxImage";

function shakeField(el) {
  el.classList.remove("shake");
  void el.offsetWidth;
  el.classList.add("shake");
  el.focus();
}

const EVENT_TYPES = ["Cumpleaños", "Casamiento", "Evento corporativo", "Otro"];

export default function Eventos() {
  const nombreRef = useRef(null);
  const fechaRef = useRef(null);
  const invitadosRef = useRef(null);
  const mensajeRef = useRef(null);
  const [tipo, setTipo] = useState(EVENT_TYPES[0]);

  const handleSubmit = () => {
    const nombre = nombreRef.current;
    if (!nombre.value.trim()) {
      shakeField(nombre);
      return;
    }
    const fecha = fechaRef.current.value || "A coordinar";
    const invitados = invitadosRef.current.value || "A coordinar";
    const mensaje = mensajeRef.current.value || "-";
    const text = `Hola! Quiero pedir un presupuesto para un evento con Pizza Corrida 🍕🔥\n\nNombre: ${nombre.value}\nTipo de evento: ${tipo}\nFecha estimada: ${fecha}\nInvitados: ${invitados}\nDetalles: ${mensaje}`;
    window.open(waLink(text), "_blank", "noopener");
  };

  return (
    <section id="eventos" className="relative py-24 md:py-32 px-6 md:px-10 bg-ink overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/images/img-5.jpg" alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal order-2 lg:order-1">
          <h2 className="font-display text-white text-5xl md:text-6xl tracking-tight leading-[0.95] mb-6">
            PIZZA CORRIDA
            <br />
            ILIMITADA.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-4 max-w-md">
            Convertimos tu evento en una experiencia: llevamos el horno, preparamos y servimos en vivo una
            selección de nuestras mejores pizzas para tus invitados.
          </p>
          <p className="text-white/40 leading-relaxed max-w-md mb-8">
            Cumpleaños, casamientos, eventos corporativos o la excusa que quieras. Contanos los detalles y te
            armamos una propuesta a medida.
          </p>

          <form className="grid sm:grid-cols-2 gap-4 max-w-lg" noValidate onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="ev-nombre" className="sr-only">
              Tu nombre
            </label>
            <input
              id="ev-nombre"
              ref={nombreRef}
              required
              type="text"
              placeholder="Tu nombre"
              className="field-dark rounded-sm px-4 py-3.5 text-sm col-span-2"
            />
            <fieldset className="col-span-2 border-0 p-0 m-0">
              <legend className="sr-only">Tipo de evento</legend>
              <div className="evtype">
                {EVENT_TYPES.map((opt) => (
                  <label key={opt} className="evtype-option">
                    <input
                      type="radio"
                      name="ev-tipo"
                      value={opt}
                      checked={tipo === opt}
                      onChange={() => setTipo(opt)}
                    />
                    <span className="evtype-text">{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label htmlFor="ev-fecha" className="sr-only">
              Fecha estimada del evento
            </label>
            <input
              id="ev-fecha"
              ref={fechaRef}
              type="date"
              className="field-dark rounded-sm px-4 py-3.5 text-sm col-span-2 sm:col-span-1"
            />
            <label htmlFor="ev-invitados" className="sr-only">
              Cantidad de invitados
            </label>
            <input
              id="ev-invitados"
              ref={invitadosRef}
              type="number"
              min="1"
              placeholder="Cant. de invitados"
              className="field-dark rounded-sm px-4 py-3.5 text-sm col-span-2 sm:col-span-1"
            />
            <label htmlFor="ev-mensaje" className="sr-only">
              Detalles del evento (opcional)
            </label>
            <textarea
              id="ev-mensaje"
              ref={mensajeRef}
              placeholder="Contanos algo más sobre tu evento (opcional)"
              rows="3"
              className="field-dark rounded-sm px-4 py-3.5 text-sm col-span-2"
            ></textarea>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn-brand col-span-2 text-xs tracking-[0.2em] uppercase font-bold px-8 py-4 justify-self-start"
            >
              Solicitar presupuesto
            </button>
          </form>
        </div>

        <div className="reveal-pop order-1 lg:order-2 relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
            <ParallaxImage
              src="/assets/images/img-6.jpg"
              alt="Pizza corrida de Rotthem para eventos"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 bg-brand px-6 py-5 rotate-[-2deg]">
            <div className="font-display text-white text-2xl md:text-3xl leading-none">A LA LEÑA</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/80 mt-1">Servido en vivo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
