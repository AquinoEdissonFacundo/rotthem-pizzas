import PageTransition from "../components/PageTransition";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useMenu, formatGs } from "../data/pizzas";
import { waLink, ADDRESS_FULL, WA_DISPLAY } from "../constants";
import { IconPin, IconClock, IconChair } from "../components/Icons";

export default function Local() {
  useScrollReveal();
  const menuRows = useMenu();
  const col1 = menuRows.slice(0, Math.ceil(menuRows.length / 2));
  const col2 = menuRows.slice(Math.ceil(menuRows.length / 2));

  return (
    <PageTransition>
      {/* Hero */}
      <section className="grid md:grid-cols-2">
        <img src="/assets/images/pizza-entrando-horno.jpg" alt="Pizza entrando al horno" className="w-full h-72 md:h-auto object-cover" />
        <div className="flex flex-col justify-center px-6 md:px-16 py-14">
          <span className="pill-badge w-fit mb-4">Próximamente</span>
          <span className="eyebrow">El local</span>
          <h1 className="text-3xl md:text-5xl mb-5 max-w-md">Nuestra pizza va a tener casa. Y vos, tu mesa.</h1>
          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: "var(--gris)" }}>
            Imaginate: el horno a la vista, la mesa lista, la pizza esperándote. Estamos construyendo el lugar donde vas a querer quedarte de sobremesa. Dejá contacto y entrá antes que nadie.
          </p>
          <a href={waLink("Hola! Quiero reservar mesa en Rotthem para cuando abran 🍕")} target="_blank" rel="noopener" className="btn2 btn2-primary w-fit">
            Reservar mesa
          </a>
        </div>
      </section>

      {/* La carta */}
      <section className="section-marmol px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow">La carta</span>
          <h2 className="text-3xl md:text-4xl mb-10">Nuestra carta, una masa perfecta.</h2>

          <div className="grid md:grid-cols-2 gap-x-12">
            {[col1, col2].map((col, i) => (
              <div key={i} className="flex flex-col">
                {col.map((p) => (
                  <div key={p.slug} className="flex items-start justify-between gap-4 py-4 border-b" style={{ borderColor: "rgba(19,27,77,.1)" }}>
                    <div>
                      <h3 className="font-display text-lg">{p.name}</h3>
                      <p className="text-sm" style={{ color: "var(--gris)" }}>{p.desc}</p>
                    </div>
                    <span className="font-display text-lg whitespace-nowrap" style={{ color: "var(--brand)" }}>{formatGs(p.price)}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación / Horarios / Reservas */}
      <section className="section-niebla px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10">
          <div>
            <IconPin className="w-6 h-6 mb-3" style={{ color: "var(--brand)" }} />
            <h3 className="text-xl mb-2">Ubicación</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--gris)" }}>{ADDRESS_FULL}</p>
          </div>
          <div>
            <IconClock className="w-6 h-6 mb-3" style={{ color: "var(--brand)" }} />
            <h3 className="text-xl mb-2">Horarios</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--gris)" }}>A confirmar — abrimos próximamente. Ferias y eventos según agenda.</p>
          </div>
          <div>
            <IconChair className="w-6 h-6 mb-3" style={{ color: "var(--brand)" }} />
            <h3 className="text-xl mb-2">Reservas</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--gris)" }}>
              Preapertura: anotate por WhatsApp al {WA_DISPLAY} o desde el botón de reserva y te avisamos la fecha. Mesas de 2 a 12 personas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-brand px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "#fff" }}>Guardate un lugar cerca del fuego</h2>
        <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,.8)" }}>
          Dejanos tu contacto y sos de los primeros en saber la fecha, la dirección y el día de la primera hornada. Los que esperaron con nosotros entran primero.
        </p>
        <a href={waLink("Hola! Quiero anotarme para la apertura de Rotthem 🍕")} target="_blank" rel="noopener" className="btn2 btn2-white">
          Reservar por WhatsApp
        </a>
      </section>
    </PageTransition>
  );
}
