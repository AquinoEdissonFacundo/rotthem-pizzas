const SEP = "  ·  ";
const WORDS = [
  "NAPOLITANA",
  "A LA LEÑA",
  "HECHA EN PARAGUAY",
  "CONFUSO ESQ. MUÑOZ",
  "PIZZA CORRIDA",
  "NAPOLITANA",
  "A LA LEÑA",
  "HECHA EN PARAGUAY",
  "CONFUSO ESQ. MUÑOZ",
  "PIZZA CORRIDA",
];
const TEXT = WORDS.join(SEP) + SEP;

export default function Marquee() {
  return (
    <div className="bg-brand overflow-hidden py-3 md:py-4">
      <div className="marquee-track flex whitespace-nowrap">
        <span className="font-display text-white text-lg md:text-2xl tracking-wide px-4">{TEXT}</span>
        <span className="font-display text-white text-lg md:text-2xl tracking-wide px-4" aria-hidden="true">
          {TEXT}
        </span>
      </div>
    </div>
  );
}
