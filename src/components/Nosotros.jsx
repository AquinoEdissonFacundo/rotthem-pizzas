export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal-pop relative order-1">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
            <img
              src="/assets/images/img-8.jpg"
              alt="Rafa, fundador de Rotthem Pizzas"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="badge-spin absolute -bottom-10 -right-10 md:-bottom-12 md:-right-12 w-28 h-28 md:w-36 md:h-36 text-brand">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path id="circlePath" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
              </defs>
              <text
                fontSize="13.5"
                letterSpacing="2"
                fill="currentColor"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
              >
                <textPath href="#circlePath">
                  TRADICIONAL · NAPOLITANA · PARAGUAY · TRADICIONAL · NAPOLITANA · PARAGUAY ·
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand"></div>
            </div>
          </div>
        </div>

        <div className="reveal order-2">
          <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95] mb-6">
            ESTO ES
            <br />
            ROTTHEM.
          </h2>
          <p className="text-ink/60 text-lg leading-relaxed mb-4 max-w-md">
            Rotthem nació de la idea de llevar la pizza napolitana de verdad a Paraguay: masa de fermentación
            larga, horno a la leña y productos seleccionados.
          </p>
          <p className="text-ink/60 text-lg leading-relaxed mb-8 max-w-md">
            Detrás del horno está Rafa, tirando cada masa a mano. Gracias a cada persona que vino, que eligió
            nuestras pizzas y que fue parte de este sueño — esto recién empieza.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 bg-brand"></div>
            <span className="text-xs tracking-[0.25em] uppercase text-ink/50 font-semibold">
              Rafa · Fundador &amp; pizzero
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
