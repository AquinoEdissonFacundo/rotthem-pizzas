import { useSheetData } from "../hooks/useSheetData";
import { slugify } from "../lib/slugify";
import { PIZZAS_SHEET_CSV_URL } from "../constants";

// Fallback data — shown instantly and used whenever the sheet is empty,
// unreachable, or PIZZAS_SHEET_CSV_URL isn't configured yet.
const FALLBACK_MENU = [
  { name: "Muzzarella", price: 50000, desc: "Salsa de tomate, albahaca, muzzarella y aceite de oliva extra virgen." },
  { name: "Margarita", price: 55000, desc: "Salsa de tomate, albahaca, fiordilatte y aceite de oliva extra virgen." },
  { name: "Pepperoni", price: 60000, desc: "Salsa de tomate, albahaca, queso muzzarella y pepperoni." },
  { name: "Napolitana", price: 60000, desc: "Salsa de tomate, albahaca, queso muzzarella, ajo, tomate, perejil y aceite de oliva extra virgen." },
  { name: "Chopy", price: 60000, desc: "Salsa de tomate, albahaca, queso muzzarella, choclo y queso catupiry." },
  { name: "Mestiza", price: 65000, desc: "Salsa de tomate, albahaca, queso muzzarella y salsa de quesos." },
  { name: "Cinco Mejor", price: 70000, desc: "Salsa de quesos de la casa (queso crema, ricotta, azul), muzzarella y parmesano." },
  { name: "Ktupollo", price: 75000, desc: "Salsa de tomate, albahaca, queso muzzarella, pollo y queso catupiry." },
  { name: "Serrana", price: 80000, desc: "Salsa de tomate, albahaca, queso muzzarella, rúcula y jamón serrano." },
  { name: "De la Tierra", price: 85000, desc: "Salsa de tomate, albahaca, queso muzzarella, jamón cocido, champiñones y aceite de oliva extra virgen." },
  { name: "Top", price: 105000, desc: "Salsa de quesos, albahaca, queso muzzarella, champiñones y pepperoni." },
  { name: "Calzoni", price: 35000, desc: "El Clásico, Di Pepperoni o Cinco Quesos." },
].map(withSlug());

function withSlug() {
  const used = new Set();
  return (item) => {
    let slug = slugify(item.name);
    let n = 2;
    while (used.has(slug)) slug = `${slugify(item.name)}-${n++}`;
    used.add(slug);
    return { ...item, slug };
  };
}

function parsePrice(raw) {
  const digits = String(raw ?? "").replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}

// Expected sheet columns: Nombre, Precio, Descripcion
function mapMenuRows(rows) {
  const withSlugFn = withSlug();
  return rows
    .map((row) => {
      const name = (row.Nombre || "").trim();
      if (!name) return null;
      return {
        name,
        price: parsePrice(row.Precio),
        desc: (row.Descripcion || row["Descripción"] || "").trim(),
      };
    })
    .filter(Boolean)
    .map(withSlugFn);
}

export function useMenu() {
  return useSheetData(PIZZAS_SHEET_CSV_URL, FALLBACK_MENU, mapMenuRows);
}

export function formatGs(n) {
  return `₲ ${n.toLocaleString("es-PY")}`;
}
