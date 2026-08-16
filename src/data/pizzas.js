export const PIZZAS = [
  {
    slug: "muzzarela",
    name: "Muzzarela",
    price: 60000,
    desc: "Mozzarella, salsa de tomate, aceite de oliva y albahaca fresca. La base de siempre.",
    ingredients: ["Mozzarella", "Salsa de tomate", "Aceite de oliva", "Albahaca fresca"],
    img: "/assets/images/img-3.jpg",
  },
  {
    slug: "napolitana",
    name: "Napolitana",
    price: 70000,
    desc: "Mozzarella, salsa de tomate, tomate fresco, ajo y perejil. Sabor directo, sin vueltas.",
    ingredients: ["Mozzarella", "Salsa de tomate", "Tomate fresco", "Ajo", "Perejil"],
    img: "/assets/images/img-4.jpg",
  },
  {
    slug: "peperoni",
    name: "Peperoni",
    price: 60000,
    desc: "Mozzarella, salsa de tomate, peperoni y un toque picante, con albahaca.",
    ingredients: ["Mozzarella", "Salsa de tomate", "Peperoni", "Picante", "Albahaca"],
    img: "/assets/images/img-2.jpg",
  },
  {
    slug: "vegetariana",
    name: "Vegetariana",
    price: 55000,
    desc: "Tomates cherry, rúcula, aceitunas negras, almendras laminadas y albahaca sobre salsa de tomate.",
    ingredients: [
      "Tomates cherry",
      "Salsa de tomate",
      "Rúcula",
      "Aceitunas negras",
      "Almendras laminadas",
      "Albahaca",
    ],
    img: "/assets/images/img-3.jpg",
  },
  {
    slug: "cuatro-quesos",
    name: "Cuatro Quesos",
    price: 50000,
    desc: "Mozzarella y salsa cuatro quesos. Para los que no negocian con el queso.",
    ingredients: ["Mozzarella", "Salsa cuatro quesos"],
    img: "/assets/images/img-2.jpg",
  },
];

export function getPizzaBySlug(slug) {
  return PIZZAS.find((p) => p.slug === slug);
}

export function formatGs(n) {
  return `Gs. ${n.toLocaleString("es-PY")}`;
}
