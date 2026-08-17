import { useSheetData } from "../hooks/useSheetData";
import { EVENTOS_SHEET_CSV_URL } from "../constants";

// Single source of truth for events — both Home ("Próximos eventos", top 3)
// and Agenda (full list) read from here, so they can never drift apart again.
const FALLBACK_EVENTOS = [
  {
    date: "22", month: "AGO", day: "Sábado", title: "Feria Palmear", cat: "Feria",
    place: "Palmear, Asunción",
    desc: "Nuestro punto fijo de siempre. Stand con horno en vivo, carta completa y merch de Rotthem.",
  },
  {
    date: "05", month: "SEP", day: "Sábado", title: "Feria de San Juan", cat: "Feria",
    place: "Cabildo de Asunción",
    desc: "Pizza napolitana entre tradición paraguaya, en el patio del Cabildo.",
  },
  {
    date: "20", month: "SEP", day: "Domingo", title: "Jornada solidaria", cat: "Solidario",
    place: "Asunción",
    desc: "Pizzas a beneficio: lo recaudado se dona para niños. Sumate comiendo rico.",
  },
  {
    date: "17", month: "OCT", day: "Fin de semana", title: "Rotthem en Pilar", cat: "Viaje",
    place: "Pilar",
    desc: "Volvemos a Pilar, donde nos conocen desde el primer día. Dos días de stand.",
  },
];

export function tagClassFor(cat) {
  return cat === "Solidario" ? "tag-accent" : "tag-brand";
}

// Expected sheet columns: Dia, Mes, DiaSemana, Titulo, Categoria, Lugar, Descripcion
function mapEventoRows(rows) {
  return rows
    .map((row) => {
      const title = (row.Titulo || row["Título"] || "").trim();
      if (!title) return null;
      return {
        date: (row.Dia || row["Día"] || "").trim(),
        month: (row.Mes || "").trim().toUpperCase(),
        day: (row.DiaSemana || row["Día semana"] || "").trim(),
        title,
        cat: (row.Categoria || row["Categoría"] || "Feria").trim(),
        place: (row.Lugar || "").trim(),
        desc: (row.Descripcion || row["Descripción"] || "").trim(),
      };
    })
    .filter(Boolean);
}

export function useEventos() {
  return useSheetData(EVENTOS_SHEET_CSV_URL, FALLBACK_EVENTOS, mapEventoRows);
}
