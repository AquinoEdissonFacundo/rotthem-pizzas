import { waLink } from "../constants";

const ORDER_TEXT = "Hola! Quiero hacer un pedido en Rotthem 🍕";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="relative py-24 md:py-32 px-6 md:px-10 bg-ink">
      <div className="max-w-7xl mx-auto">
        <h2 className="reveal font-display text-white text-5xl md:text-7xl tracking-tight mb-14 md:mb-16">
          ENCONTRANOS
          <br />
          EN FDO. DE LA MORA.
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="reveal order-2 lg:order-1 w-full aspect-[4/3] lg:aspect-auto min-h-[320px] overflow-hidden rounded-sm border-2 border-white/15">
            <iframe
              src="https://www.google.com/maps?q=Confuso+esquina+Mu%C3%B1oz,+Fernando+de+la+Mora,+Paraguay&output=embed"
              className="w-full h-full grayscale invert-[.92] contrast-125"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Rotthem Pizzas"
            ></iframe>
          </div>

          <div className="reveal order-1 lg:order-2 flex flex-col justify-center">
            <div className="space-y-7">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-white/40 mb-2 font-semibold">
                  Dirección
                </div>
                <div className="font-display text-white text-2xl">CONFUSO ESQ. MUÑOZ</div>
                <div className="text-white/55">Fernando de la Mora, Paraguay · junto a Black House Tattoo</div>
              </div>
              <div className="divider-w"></div>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-white/40 mb-2 font-semibold">
                  Horario
                </div>
                <div className="text-white/70">Todos los días — 19:00 a 23:30 hs</div>
                <div className="text-white/55 text-xs mt-1">*Horarios de referencia, pueden variar.</div>
              </div>
              <div className="divider-w"></div>
              <a
                href={waLink(ORDER_TEXT)}
                target="_blank"
                rel="noopener"
                className="btn-brand inline-flex w-fit items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold px-8 py-4"
              >
                Escribinos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
