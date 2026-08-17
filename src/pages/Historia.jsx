import PageTransition from "../components/PageTransition";
import { useScrollReveal } from "../hooks/useScrollReveal";

const camino = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3v6a4 4 0 0 0 8 0V3M9 21a4 4 0 0 0 4-4v-2.5" />
        <circle cx="19" cy="9" r="2" />
      </svg>
    ),
    eyebrow: "El mandato",
    title: "Medicina",
    text: "Hijo de padre médico, el mandato me llevaba por ahí. Lo intenté en serio — pero ese camino no era el mío.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    eyebrow: "El escape",
    title: "La batería",
    text: "Fui por la música, la batería, como escape de lo que estaba escrito para mí. Tampoco era el destino, pero me enseñó a buscar el propio.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z" />
        <path d="M9 12V7a3 3 0 0 1 6 0M18 8c1.5 0 2.5 1 2.5 2.5" />
      </svg>
    ),
    eyebrow: "La vocación",
    title: "La cocina",
    text: "Y mientras tanto, la cocina aparecía como mi momento feliz: eso que hacía sin que nadie me lo pidiera. Ahí estaba la señal.",
  },
];

export default function Historia() {
  useScrollReveal();

  return (
    <PageTransition>
      {/* Sobre mí */}
      <section className="section-marmol px-6 md:px-10 py-20 md:py-28 text-center">
        <span className="eyebrow">Sobre mí</span>
        <h1 className="text-3xl md:text-5xl mb-6 max-w-3xl mx-auto">Sos lo que hacés cuando nadie te lo pide.</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed" style={{ color: "var(--gris)" }}>
          Me llamo Rafa Toloza. Crecí en Pilar, un pueblo chico del Paraguay. La cocina no fue mi sueño desde el inicio: me fue encontrando, en el disfrute de cocinar para otros. Esta es mi historia, con todas sus vueltas.
        </p>
      </section>

      {/* Las raíces */}
      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 md:px-16 py-14 order-2 md:order-1">
          <span className="eyebrow">Las raíces</span>
          <h2 className="text-2xl md:text-3xl mb-4 max-w-sm">La cocina como lenguaje de amor</h2>
          <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: "var(--gris)" }}>
            En casa, mi abuela paterna y mi mamá siempre tuvieron la cocina como lenguaje de amor: uno demuestra cariño cocinando para otros. Quizás esa herencia viene todo esto. Yo todavía no lo sabía, pero ahí ya estaba empezando mi camino.
          </p>
        </div>
        <img src="/assets/images/rafa-trabajando.webp" alt="Rafa trabajando" className="w-full h-72 md:h-full object-cover order-1 md:order-2" />
      </section>

      {/* El camino */}
      <section className="section-niebla px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow">El camino</span>
          <h2 className="text-3xl md:text-4xl mb-10 max-w-2xl">Casi médico. Casi baterista. Chef y Pizzero por elección.</h2>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {camino.map((c) => (
              <div key={c.title} className="card-flat reveal">
                <div className="icon-circle mb-4">{c.icon}</div>
                <span className="eyebrow mb-1">{c.eyebrow}</span>
                <h3 className="text-xl mb-2">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gris)" }}>{c.text}</p>
              </div>
            ))}
          </div>

          <p className="max-w-2xl mx-auto text-center text-sm md:text-base leading-relaxed" style={{ color: "var(--gris)" }}>
            Después de darle muchas vueltas, quise formalizarlo: estudié en el IGA, en Asunción, y al graduarme trabajé en distintos restaurantes de la ciudad, aprendiendo un poco de cada uno. En uno de ellos empezó todo lo que vino después.
          </p>
        </div>
      </section>

      {/* Mi obsesión */}
      <section className="grid md:grid-cols-2">
        <img src="/assets/images/rafa-estirando-bn.webp" alt="Rafa estirando la masa" className="w-full h-72 md:h-full object-cover" />
        <div className="flex flex-col justify-center px-6 md:px-16 py-14 gap-4">
          <h2 className="text-2xl md:text-3xl mb-2 max-w-sm">Mi obsesión: encontrar la receta perfecta.</h2>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--gris)" }}>
            En Mancusi Pizza Napolitana aprendimos el negocio, y ahí conocí a quien fue mi pareja y socia. Al renunciar decidimos abrir nuestra propia pizzería: trabajamos varios meses hasta perfeccionar la masa, encontrar los proveedores, probar cuanta pizza napolitana había en Asunción, hasta que un día lo conseguimos, encontramos la receta perfecta.
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--gris)" }}>
            Arrancamos vendiendo en la calle, en el centro de Asunción — las primeras ventas fueron una alegría enorme. Nos mudamos tres veces hasta encontrar dónde vender bien y ahí apareció la oportunidad de participar en la feria Palmear. Luego vinieron los eventos, a los que íbamos solos, y los viajes a Pilar, donde también disfruto mucho de compartir amor a través de mis pizzas.
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--gris)" }}>
            Ese vínculo no continuó. Pero mi amor por la pizza no disminuyó: se hizo cada vez más fuerte. Hoy sigo al frente de Rotthem, trabajando para abrir el nuevo local, con eventos en Asunción y en Pilar, y agasajando comensales a donde vaya en eventos públicos y privados. Ahora solo falta que la pruebes vos.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="section-brand px-6 md:px-10 py-24 md:py-28 text-center">
        <span className="quote-serif block text-3xl mb-6" style={{ color: "rgba(255,255,255,.35)" }}>&ldquo;</span>
        <p className="quote-serif text-2xl md:text-3xl max-w-2xl mx-auto mb-6" style={{ color: "#fff" }}>
          Uno demuestra cariño cocinando para otros.
        </p>
        <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,.6)" }}>
          Rafa Toloza — Fundador
        </span>
      </section>
    </PageTransition>
  );
}
