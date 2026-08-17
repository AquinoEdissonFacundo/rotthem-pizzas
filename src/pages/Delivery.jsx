import PageTransition from "../components/PageTransition";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useMenu, formatGs } from "../data/pizzas";
import { waLink, WA_DISPLAY, ADDRESS_SHORT, PEDIDOSYA_URL } from "../constants";
import { IconMessage, IconBike, IconMap, IconClock, IconFlame } from "../components/Icons";

const ORDER_TEXT = "Hola! Quiero hacer un pedido en Rotthem 🍕";

export default function Delivery() {
  useScrollReveal();
  const menuRows = useMenu();
  const col1 = menuRows.slice(0, Math.ceil(menuRows.length / 2));
  const col2 = menuRows.slice(Math.ceil(menuRows.length / 2));

  return (
    <PageTransition>
      {/* Hero */}
      <section className="section-marmol grid md:grid-cols-2 items-center">
        <div className="px-6 md:px-16 py-16 md:py-24 order-2 md:order-1">
          <span className="eyebrow">Delivery</span>
          <h1 className="text-3xl md:text-5xl mb-5 max-w-md">La napolitana, en tu puerta. Todavía humeando.</h1>
          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: "var(--gris)" }}>
            Esta noche no cocinás: te la merecés recién salida del horno. Pedila por WhatsApp o PedidosYa y en 40 minutos suena tu timbre. La caja sale cerrada, con el vapor adentro — abrila enseguida y comé con la mano, que para eso está el borde.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink(ORDER_TEXT)} target="_blank" rel="noopener" className="btn2 btn2-primary">Pedir por WhatsApp</a>
            <a href={PEDIDOSYA_URL} target="_blank" rel="noopener" className="btn2 btn2-accent">Pedir por PedidosYa</a>
          </div>
        </div>
        <img src="/assets/images/pizza-mesa-madera.jpg" alt="Pizza pepperoni Rotthem" className="w-full h-72 md:h-[520px] object-cover order-1 md:order-2" />
      </section>

      {/* Canales */}
      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          <div className="card-flat">
            <div className="icon-circle mb-4"><IconMessage className="w-5 h-5" /></div>
            <h3 className="text-2xl mb-3">Pedido directo</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--gris)" }}>
              Escribinos por WhatsApp al {WA_DISPLAY}. Atención directa de Rotthem, pago en efectivo, transferencia o QR.
            </p>
            <a href={waLink(ORDER_TEXT)} target="_blank" rel="noopener" className="btn2 btn2-primary">Pedir por WhatsApp</a>
          </div>
          <div className="card-flat">
            <div className="icon-circle mb-4"><IconBike className="w-5 h-5" /></div>
            <h3 className="text-2xl mb-3">PedidosYa</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--gris)" }}>
              Buscanos como &ldquo;Rotthem Pizza&rdquo; en la app. Sucursal en {ADDRESS_SHORT}. Promos y seguimiento del pedido en la app.
            </p>
            <a href={PEDIDOSYA_URL} target="_blank" rel="noopener" className="btn2 btn2-outline">Abrir PedidosYa</a>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="section-niebla px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10">
          <div className="flex items-start gap-3">
            <IconMap className="w-5 h-5 min-w-5 mt-0.5" style={{ color: "var(--terracota)" }} />
            <div>
              <h3 className="font-semibold mb-1">Zona de entrega</h3>
              <p className="text-sm" style={{ color: "var(--gris)" }}>Alrededores de Av. Choferes del Chaco y zonas cercanas de Asunción.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <IconClock className="w-5 h-5 min-w-5 mt-0.5" style={{ color: "var(--terracota)" }} />
            <div>
              <h3 className="font-semibold mb-1">Horario</h3>
              <p className="text-sm" style={{ color: "var(--gris)" }}>Martes a domingo, de 19:00 a 23:00.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <IconFlame className="w-5 h-5 min-w-5 mt-0.5" style={{ color: "var(--terracota)" }} />
            <div>
              <h3 className="font-semibold mb-1">En caliente</h3>
              <p className="text-sm" style={{ color: "var(--gris)" }}>Horneada al momento y en camino en menos de 40 minutos.</p>
            </div>
          </div>
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

      {/* CTA */}
      <section className="section-brand px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl mb-8" style={{ color: "#fff" }}>¿Hambre? Pedí ahora</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={waLink(ORDER_TEXT)} target="_blank" rel="noopener" className="btn2 btn2-white">Pedir por WhatsApp</a>
          <a href={PEDIDOSYA_URL} target="_blank" rel="noopener" className="btn2 btn2-outline-light">Pedir por PedidosYa</a>
        </div>
      </section>
    </PageTransition>
  );
}
