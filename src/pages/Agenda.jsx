import PageTransition from "../components/PageTransition";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { waLink } from "../constants";
import { IconPin } from "../components/Icons";

const eventos = [
  {
    date: "22", month: "AGO", title: "Feria Palmear", tag: "Feria", tagClass: "tag-brand",
    desc: "Nuestro punto fijo de siempre. Stand con horno en vivo, carta completa y merch de Rotthem.",
    day: "Sábado", place: "Palmear, Asunción",
  },
  {
    date: "05", month: "SEP", title: "Feria de San Juan", tag: "Feria", tagClass: "tag-brand",
    desc: "Pizza napolitana entre tradición paraguaya, en el patio del Cabildo.",
    day: "Sábado", place: "Cabildo de Asunción",
  },
  {
    date: "20", month: "SEP", title: "Jornada solidaria", tag: "Solidario", tagClass: "tag-accent",
    desc: "Pizzas a beneficio: lo recaudado se dona para niños. Sumate comiendo rico.",
    day: "Domingo", place: "Asunción",
  },
  {
    date: "17", month: "OCT", title: "Rotthem en Pilar", tag: "Viaje", tagClass: "tag-brand",
    desc: "Volvemos a Pilar, donde nos conocen desde el primer día. Dos días de stand.",
    day: "Fin de semana", place: "Pilar",
  },
];

export default function Agenda() {
  useScrollReveal();

  return (
    <PageTransition>
      {/* Intro */}
      <section className="section-marmol px-6 md:px-10 pt-20 pb-12 md:pt-24 text-center">
        <span className="eyebrow">Próximos eventos</span>
        <h1 className="text-3xl md:text-5xl mb-6 max-w-2xl mx-auto">Dónde encontrarnos</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed" style={{ color: "var(--gris)" }}>
          El horno de Rotthem nació en la calle y no lo olvida. Una vez al mes armamos el puesto en Palmear, volvemos al Cabildo para San Juan, nos sumamos a eventos solidarios que juntan donaciones para chicos, y cada tanto, la vuelta a Pilar. Buscanos entre el ruido de la feria: somos ese olor que llega antes que el cartel.
        </p>
      </section>

      {/* Lista */}
      <section className="section-marmol px-6 md:px-10 pb-20 md:pb-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {eventos.map((e) => (
            <div key={e.title + e.date} className="event-row reveal flex-col sm:flex-row items-start sm:items-center">
              <div className="date-box">
                <strong>{e.date}</strong>
                <span>{e.month}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-display text-xl">{e.title}</h3>
                  <span className={`tag-solid ${e.tagClass}`}>{e.tag}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--gris)" }}>{e.desc}</p>
              </div>
              <div className="text-right sm:text-right text-sm shrink-0">
                <div className="font-semibold uppercase tracking-wide text-xs mb-1" style={{ color: "var(--terracota)" }}>{e.day}</div>
                <div className="flex items-center gap-1 justify-end" style={{ color: "var(--gris)" }}>
                  <IconPin className="w-3.5 h-3.5" /> {e.place}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Somos de feria */}
      <section className="section-ink grid md:grid-cols-2 items-center">
        <div className="px-6 md:px-16 py-16 md:py-24">
          <span className="eyebrow" style={{ color: "var(--lino)" }}>Somos de feria</span>
          <h2 className="text-3xl md:text-4xl mb-5 max-w-md" style={{ color: "#fff" }}>Nacimos en la calle y volvemos todos los meses.</h2>
          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: "rgba(255,255,255,.7)" }}>
            Antes del delivery y de los eventos, Rotthem fue un puesto callejero en el centro de Asunción. Las ferias son nuestra casa desde el primer día — y todos los meses volvemos.
          </p>
          <div className="flex gap-8 flex-wrap">
            <div>
              <div className="font-display text-2xl" style={{ color: "#fff" }}>2 años</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,.55)" }}>de calle y ferias</div>
            </div>
            <div>
              <div className="font-display text-2xl" style={{ color: "#fff" }}>Palmear</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,.55)" }}>punto fijo mensual</div>
            </div>
            <div>
              <div className="font-display text-2xl" style={{ color: "#fff" }}>Pilar</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,.55)" }}>donde nos conocen</div>
            </div>
          </div>
        </div>
        <img src="/assets/images/rrss-pilar.jpg" alt="Rotthem en Pilar" className="w-full h-72 md:h-[460px] object-cover" />
      </section>

      {/* CTA */}
      <section className="section-marmol px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="text-2xl md:text-3xl mb-4">¿Organizás una feria o un evento solidario?</h2>
        <p className="mb-8" style={{ color: "var(--gris)" }}>Nos encanta sumarnos. Escribinos y coordinamos el stand.</p>
        <a href={waLink("Hola! Organizo una feria/evento solidario y quiero sumar a Rotthem 🍕")} target="_blank" rel="noopener" className="btn2 btn2-accent">
          Escribinos
        </a>
      </section>
    </PageTransition>
  );
}
