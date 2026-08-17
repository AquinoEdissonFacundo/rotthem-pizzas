import { useState } from "react";
import PageTransition from "../components/PageTransition";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { waLink, WA_DISPLAY, EMAIL, ADDRESS_FULL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../constants";
import { IconMessage, IconMail, IconPin, IconClock, IconCamera } from "../components/Icons";

const motivos = ["Reserva", "Evento", "Delivery", "Otro"];

const igShots = ["pizza-1.webp", "rafa-salsa.webp", "rafa-trabajando.webp"];

export default function Contacto() {
  useScrollReveal();
  const [motivo, setMotivo] = useState("Reserva");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola! Soy ${nombre || "—"} (${telefono || "sin teléfono"}). Motivo: ${motivo}. ${mensaje}`;
    window.open(waLink(text), "_blank", "noopener");
  };

  return (
    <PageTransition>
      <section className="section-marmol px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12">
          <div>
            <span className="eyebrow">Contacto</span>
            <h1 className="text-4xl md:text-5xl mb-6">Hablemos</h1>
            <p className="text-sm md:text-base leading-relaxed mb-10 max-w-md" style={{ color: "var(--gris)" }}>
              Escribinos por lo que sea: una fecha para festejar, un presupuesto, una reserva para cuando abramos el local, un antojo a las once de la noche. Del otro lado no atiende un bot: atendemos nosotros, muchas veces con harina en las manos.
            </p>

            <div className="flex flex-col">
              <InfoRow icon={<IconMessage className="w-4 h-4" />} label="WhatsApp" value={`${WA_DISPLAY} — respuesta en el día`} />
              <InfoRow icon={<IconMail className="w-4 h-4" />} label="Email" value={EMAIL} />
              <InfoRow icon={<IconPin className="w-4 h-4" />} label="Dirección" value={ADDRESS_FULL} />
              <InfoRow icon={<IconClock className="w-4 h-4" />} label="Horario" value="Horarios a confirmar — abrimos próximamente" />
              <InfoRow icon={<IconCamera className="w-4 h-4" />} label="Instagram" value={INSTAGRAM_HANDLE} last />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card-flat">
            <h2 className="text-2xl mb-6">Dejanos tu mensaje</h2>

            <label className="eyebrow" style={{ color: "var(--ink)", opacity: 0.6 }}>Motivo</label>
            <div className="flex flex-wrap gap-2 mb-5">
              {motivos.map((m) => (
                <button type="button" key={m} onClick={() => setMotivo(m)} className={`form2-motivo ${motivo === m ? "active" : ""}`}>
                  {m}
                </button>
              ))}
            </div>

            <label className="eyebrow" style={{ color: "var(--ink)", opacity: 0.6 }}>Nombre</label>
            <input
              className="form2-field mb-5"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <label className="eyebrow" style={{ color: "var(--ink)", opacity: 0.6 }}>Teléfono</label>
            <input
              className="form2-field mb-5"
              placeholder="09xx xxx xxx"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />

            <label className="eyebrow" style={{ color: "var(--ink)", opacity: 0.6 }}>Mensaje</label>
            <textarea
              className="form2-field mb-6"
              placeholder="Contanos qué necesitás: fecha, cantidad de personas, dirección…"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />

            <button type="submit" className="btn2 btn2-primary btn2-block">Enviar mensaje</button>
          </form>
        </div>
      </section>

      <section className="section-niebla px-6 md:px-10 py-16 md:py-20 text-center">
        <IconPin className="w-7 h-7 mx-auto mb-3" style={{ color: "var(--brand)" }} />
        <h2 className="text-2xl mb-2">Capitán Pedro Carpinelli, Asunción</h2>
        <p className="text-sm" style={{ color: "var(--gris)" }}>
          En la web publicada, acá se embebe el mapa interactivo de Google Maps.
        </p>
      </section>

      <section className="section-marmol px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <span className="eyebrow">Redes sociales</span>
          <h2 className="text-3xl md:text-4xl mb-10">Rotthem en redes</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="card-flat">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold flex items-center gap-2">
                  <IconCamera className="w-4 h-4" /> {INSTAGRAM_HANDLE}
                </span>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>
                  Seguir →
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {igShots.map((img) => (
                  <div key={img} className="card-media" style={{ aspectRatio: "1/1" }}>
                    <img src={`/assets/images/${img}`} alt="Rotthem en Instagram" />
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: "var(--gris)" }}>Feed real embebido en la web publicada</p>
            </div>

            <div className="card-flat p-0 overflow-hidden">
              <img src="/assets/images/rrss-pilar.webp" alt="Última publicación de Rotthem" className="w-full h-56 object-cover" />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--terracota)" }}>Última publicación</span>
                <p className="text-sm mt-2" style={{ color: "var(--gris)" }}>
                  Rotthem en Pilar — volvemos con el horno a la ciudad que nos vio arrancar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function InfoRow({ icon, label, value, last }) {
  return (
    <div className={`flex items-start gap-3 py-4 ${last ? "" : "border-b"}`} style={{ borderColor: "rgba(19,27,77,.1)" }}>
      <div className="icon-circle" style={{ width: "2.25rem", height: "2.25rem", minWidth: "2.25rem" }}>{icon}</div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "var(--gris)" }}>{label}</div>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  );
}
