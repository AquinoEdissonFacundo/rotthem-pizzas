export const PIZZAS = [
  {
    slug: "muzzarella",
    name: "Muzzarella",
    price: 50000,
    desc: "Salsa de tomate, albahaca, muzzarella y aceite de oliva extra virgen.",
  },
  {
    slug: "margarita",
    name: "Margarita",
    price: 55000,
    desc: "Salsa de tomate, albahaca, fiordilatte y aceite de oliva extra virgen.",
  },
  {
    slug: "pepperoni",
    name: "Pepperoni",
    price: 60000,
    desc: "Salsa de tomate, albahaca, queso muzzarella y pepperoni.",
  },
  {
    slug: "napolitana",
    name: "Napolitana",
    price: 60000,
    desc: "Salsa de tomate, albahaca, queso muzzarella, ajo, tomate, perejil y aceite de oliva extra virgen.",
  },
  {
    slug: "chopy",
    name: "Chopy",
    price: 60000,
    desc: "Salsa de tomate, albahaca, queso muzzarella, choclo y queso catupiry.",
  },
  {
    slug: "mestiza",
    name: "Mestiza",
    price: 65000,
    desc: "Salsa de tomate, albahaca, queso muzzarella y salsa de quesos.",
  },
  {
    slug: "cinco-mejor",
    name: "Cinco Mejor",
    price: 70000,
    desc: "Salsa de quesos de la casa (queso crema, ricotta, azul), muzzarella y parmesano.",
  },
  {
    slug: "ktupollo",
    name: "Ktupollo",
    price: 75000,
    desc: "Salsa de tomate, albahaca, queso muzzarella, pollo y queso catupiry.",
  },
  {
    slug: "serrana",
    name: "Serrana",
    price: 80000,
    desc: "Salsa de tomate, albahaca, queso muzzarella, rúcula y jamón serrano.",
  },
  {
    slug: "de-la-tierra",
    name: "De la Tierra",
    price: 85000,
    desc: "Salsa de tomate, albahaca, queso muzzarella, jamón cocido, champiñones y aceite de oliva extra virgen.",
  },
  {
    slug: "top",
    name: "Top",
    price: 105000,
    desc: "Salsa de quesos, albahaca, queso muzzarella, champiñones y pepperoni.",
  },
];

export const CALZONI = {
  name: "Calzoni",
  price: 35000,
  desc: "El Clásico, Di Pepperoni o Cinco Quesos.",
};

export function formatGs(n) {
  return `₲ ${n.toLocaleString("es-PY")}`;
}
