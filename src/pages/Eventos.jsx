import PageTransition from "../components/PageTransition";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { waLink } from "../constants";
import { IconCheck, IconParty, IconBriefcase } from "../components/Icons";

const tiers = [
  {
    tag: "Evento íntimo",
    range: "20 – 30",
    unit: "personas",
    desc: "Cumpleaños en casa, juntadas y aniversarios. Un horno, pizza libre y todas las variedades de la carta.",
    items: ["2 horas de pizza libre", "Hasta 6 variedades a elección", "Horno y pizzaiolo en vivo"],
  },
  {
    tag: "Evento grande",
    range: "70 – 90",
    unit: "personas",
    desc: "Fiestas, casamientos y eventos corporativos. El formato más grande que ya servimos, con equipo completo.",
    items: ["3 horas de pizza libre", "Carta completa + opciones veggie", "Equipo de servicio incluido"],
  },
];

const tipos = [
  {
    icon: <IconParty className="w-5 h-5" />,
    title: "Eventos sociales",
    desc: "Cumpleaños, aniversarios, casamientos, despedidas y juntadas. La pizza en vivo convierte cualquier reunión en fiesta.",
    tags: ["Cumpleaños", "Aniversarios", "Casamientos", "Juntadas"],
  },
  {
    icon: <IconBriefcase className="w-5 h-5" />,
    title: "Eventos empresariales",
    desc: "Fin de año, lanzamientos, aniversarios de empresa y after office. Un catering distinto que la gente recuerda.",
    tags: ["Fin de año", "Lanzamientos", "After office", "Team building"],
  },
];

const steps = [
  { n: "01", title: "Contanos tu evento", desc: "Fecha, lugar, cantidad de invitados y tipo de evento. Por WhatsApp." },
  { n: "02", title: "Recibí tu presupuesto", desc: "Te armamos una propuesta a medida en menos de 48 horas, sin compromiso." },
  { n: "03", title: "Nosotros hacemos el resto", desc: "Llegamos con el horno, la masa y el equipo. Vos solo disfrutá con tus invitados." },
];

const BUDGET_TEXT = "Hola! Quiero pedir un presupuesto para un evento con Rotthem 🍕";

export default function Eventos() {
  useScrollReveal();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="section-brand grid md:grid-cols-2 items-center">
        <div className="px-6 md:px-16 py-16 md:py-24">
          <span className="eyebrow" style={{ color: "rgba(255,255,255,.7)" }}>Eventos privados</span>
          <h1 className="text-3xl md:text-5xl mb-5 max-w-md" style={{ color: "#fff" }}>Pizza libre en tu fiesta, hecha en vivo.</h1>
          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: "rgba(255,255,255,.8)" }}>
            Pizza libre napolitana, hecha en vivo, para cumpleaños, aniversarios y eventos de empresa. Vos ponés la gente; nosotros, la masa, el fuego y el show.
          </p>
          <a href={waLink(BUDGET_TEXT)} target="_blank" rel="noopener" className="btn2 btn2-white w-fit">
            Pedir presupuesto
          </a>
        </div>
        <img src="/assets/images/entregando-pizza-2.webp" alt="Pizza margarita Rotthem" className="w-full h-72 md:h-[520px] object-cover" />
      </section>

      {/* Formatos */}
      <section className="section-marmol px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <span className="eyebrow">Formatos</span>
          <h2 className="text-3xl md:text-4xl mb-10 max-w-2xl">Del encuentro familiar al evento de empresa</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {tiers.map((t) => (
              <div key={t.tag} className="card-flat reveal">
                <span className="eyebrow">{t.tag}</span>
                <div className="mb-4">
                  <span className="tier-num">{t.range}<sup>{t.unit}</sup></span>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--gris)" }}>{t.desc}</p>
                <ul className="checklist">
                  {t.items.map((it) => (
                    <li key={it}><IconCheck /> {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de evento */}
      <section className="section-niebla px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
          {tipos.map((t) => (
            <div key={t.title} className="card-flat reveal">
              <div className="icon-circle icon-circle-accent mb-4">{t.icon}</div>
              <h3 className="text-2xl mb-3">{t.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--gris)" }}>{t.desc}</p>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="tag-soft">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="section-marmol px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12">Cómo funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="step-rule"></div>
                <span className="step-num">{s.n}</span>
                <h3 className="text-xl mt-2 mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gris)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-ink px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "#fff" }}>Llevamos el horno a tu fiesta</h2>
        <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,.7)" }}>
          Contanos fecha, lugar y cuántos son: horneamos delante de tu gente, pizza por pizza, y tu presupuesto llega antes de que la masa termine de fermentar.
        </p>
        <a href={waLink(BUDGET_TEXT)} target="_blank" rel="noopener" className="btn2 btn2-accent">
          Pedir presupuesto
        </a>
      </section>
    </PageTransition>
  );
}
