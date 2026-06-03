export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  rating: number;
  reviews: number;
  calories?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  extras?: { name: string; price: number }[];
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
  gradient: string;
}

export const categories: Category[] = [
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    emoji: "🍔",
    description: "Carne premium, pan artesanal",
    gradient: "from-amber-500 to-red-600",
  },
  {
    id: "papas",
    name: "Papas",
    emoji: "🍟",
    description: "Crujientes por fuera, suaves por dentro",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: "bebidas",
    name: "Bebidas",
    emoji: "🥤",
    description: "Refrescantes y naturales",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    id: "pollo",
    name: "Pollo",
    emoji: "🍗",
    description: "Crujiente y jugoso",
    gradient: "from-orange-400 to-red-500",
  },
  {
    id: "especiales",
    name: "Especiales",
    emoji: "🌭",
    description: "Creaciones exclusivas del chef",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "postres",
    name: "Postres",
    emoji: "🍰",
    description: "El final perfecto",
    gradient: "from-pink-400 to-rose-500",
  },
];

export const products: Product[] = [
  {
    id: "classic-burger",
    name: "Classic Smash",
    description: "Doble carne smash, queso cheddar, lechuga, tomate, salsa especial de la casa",
    price: 8500,
    image: "/products/classic.svg",
    category: "hamburguesas",
    tags: ["más vendidos"],
    rating: 4.9,
    reviews: 342,
    calories: 650,
    isBestSeller: true,
    extras: [
      { name: "Extra queso", price: 800 },
      { name: "Bacon", price: 1200 },
      { name: "Jalapeños", price: 600 },
      { name: "Huevo frito", price: 900 },
    ],
  },
  {
    id: "smoky-bbq",
    name: "Smoky BBQ",
    description: "Carne angus, bacon crocante, aros de cebolla, salsa BBQ ahumada, queso gouda",
    price: 9800,
    image: "/products/bbq.svg",
    category: "hamburguesas",
    tags: ["más vendidos", "picantes"],
    rating: 4.8,
    reviews: 256,
    calories: 780,
    isBestSeller: true,
    extras: [
      { name: "Extra bacon", price: 1200 },
      { name: "Doble carne", price: 3500 },
    ],
  },
  {
    id: "truffle-burger",
    name: "Truffle Deluxe",
    description: "Carne premium, queso gruyère, rúcula, tomates confitados, salsa de trufa negra",
    price: 12500,
    image: "/products/truffle.svg",
    category: "hamburguesas",
    tags: ["nuevos"],
    rating: 4.9,
    reviews: 128,
    calories: 720,
    isNew: true,
  },
  {
    id: "veggie-garden",
    name: "Veggie Garden",
    description: "Medallón de lentejas, palta, tomate, brotes, salsa de yogur y hierbas",
    price: 7800,
    image: "/products/veggie.svg",
    category: "hamburguesas",
    tags: ["veggie"],
    rating: 4.7,
    reviews: 89,
    calories: 420,
  },
  {
    id: "spicy-inferno",
    name: "Spicy Inferno",
    description: "Doble carne, queso pepper jack, jalapeños frescos, habanero, salsa chipotle",
    price: 10200,
    image: "/products/spicy.svg",
    category: "hamburguesas",
    tags: ["picantes"],
    rating: 4.8,
    reviews: 195,
    calories: 740,
  },
  {
    id: "crispy-chicken",
    name: "Crispy Chicken",
    description: "Pechuga empanizada, lechuga, tomate, mayo casera, pan brioche",
    price: 8200,
    image: "/products/chicken.svg",
    category: "pollo",
    tags: ["más vendidos"],
    rating: 4.8,
    reviews: 210,
    calories: 580,
    isBestSeller: true,
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    description: "Papas fritas, queso cheddar fundido, bacon, verdeo, salsa especial",
    price: 5500,
    image: "/products/fries.svg",
    category: "papas",
    tags: ["más vendidos"],
    rating: 4.9,
    reviews: 312,
    calories: 520,
    isBestSeller: true,
  },
  {
    id: "sweet-potato-fries",
    name: "Sweet Potato Fries",
    description: "Papas batata crujientes con salsa de chipotle mayo",
    price: 4800,
    image: "/products/sweet-fries.svg",
    category: "papas",
    tags: ["nuevos", "veggie"],
    rating: 4.7,
    reviews: 76,
    calories: 380,
    isNew: true,
  },
  {
    id: "milkshake-choco",
    name: "Choco Shake",
    description: "Batido de chocolate belga con crema y chips de chocolate",
    price: 4200,
    image: "/products/shake.svg",
    category: "bebidas",
    tags: ["más vendidos"],
    rating: 4.9,
    reviews: 289,
    calories: 450,
  },
  {
    id: "lemonade-mint",
    name: "Mint Lemonade",
    description: "Limonada natural con menta fresca y jengibre",
    price: 2800,
    image: "/products/lemonade.svg",
    category: "bebidas",
    tags: ["nuevos"],
    rating: 4.6,
    reviews: 54,
    calories: 120,
    isNew: true,
  },
  {
    id: "combo-royal",
    name: "Combo Royal",
    description: "Classic Smash + Papas + Bebida. El combo perfecto.",
    price: 11500,
    image: "/products/combo.svg",
    category: "especiales",
    tags: ["combos", "más vendidos"],
    rating: 4.9,
    reviews: 445,
    calories: 980,
    isBestSeller: true,
  },
  {
    id: "choco-lava",
    name: "Choco Lava Cake",
    description: "Bizcochuelo de chocolate con corazón fundido, helado de vainilla",
    price: 4500,
    image: "/products/lava-cake.svg",
    category: "postres",
    tags: ["más vendidos"],
    rating: 4.9,
    reviews: 178,
    calories: 380,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "María González",
    avatar: "MG",
    rating: 5,
    text: "La mejor hamburguesa que probé en mi vida. La Truffle Deluxe es increíble. El delivery llegó en 20 minutos, perfecto.",
    date: "Hace 2 días",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    avatar: "CR",
    rating: 5,
    text: "Vengo todas las semanas. El sistema de puntos es genial, ya llegué a nivel Oro. Las papas loaded son adictivas.",
    date: "Hace 5 días",
  },
  {
    id: 3,
    name: "Ana Martínez",
    avatar: "AM",
    rating: 5,
    text: "Pedimos para toda la familia. Los combos son excelentes y la app funciona perfecto. Muy recomendable.",
    date: "Hace 1 semana",
  },
  {
    id: 4,
    name: "Diego López",
    avatar: "DL",
    rating: 4,
    text: "El armador de hamburguesas es una genialidad. Arma tu propia creación y te la llevan. Calidad premium real.",
    date: "Hace 1 semana",
  },
  {
    id: 5,
    name: "Luciana Pérez",
    avatar: "LP",
    rating: 5,
    text: "La versión veggie es riquísima. No soy vegetariana y la pido igual. El local tiene una onda increíble.",
    date: "Hace 2 semanas",
  },
  {
    id: 6,
    name: "Martín Silva",
    avatar: "MS",
    rating: 5,
    text: "Spicy Inferno + Choco Shake = combinación perfecta. Los mejores sabores de la ciudad sin dudas.",
    date: "Hace 2 semanas",
  },
];

export const builderOptions = {
  pan: [
    { id: "clasico", name: "Pan Clásico Brioche", price: 0, emoji: "🍞" },
    { id: "integral", name: "Pan Integral", price: 0, emoji: "🌾" },
    { id: "pretzel", name: "Pan Pretzel", price: 500, emoji: "🥨" },
    { id: "sin-pan", name: "Sin Pan (Lettuce Wrap)", price: 0, emoji: "🥬" },
  ],
  carne: [
    { id: "simple", name: "Carne Simple (120g)", price: 0, emoji: "🥩" },
    { id: "doble", name: "Doble Carne (240g)", price: 3500, emoji: "🥩🥩" },
    { id: "angus", name: "Angus Premium (150g)", price: 2000, emoji: "🐄" },
    { id: "pollo", name: "Pechuga de Pollo", price: 500, emoji: "🍗" },
    { id: "veggie", name: "Medallón Veggie", price: 0, emoji: "🌱" },
  ],
  quesos: [
    { id: "cheddar", name: "Cheddar", price: 0, emoji: "🧀" },
    { id: "gouda", name: "Gouda", price: 300, emoji: "🧀" },
    { id: "gruyere", name: "Gruyère", price: 800, emoji: "🧀" },
    { id: "pepper-jack", name: "Pepper Jack", price: 500, emoji: "🌶️" },
    { id: "azul", name: "Queso Azul", price: 600, emoji: "🧀" },
  ],
  vegetales: [
    { id: "lechuga", name: "Lechuga", price: 0, emoji: "🥬" },
    { id: "tomate", name: "Tomate", price: 0, emoji: "🍅" },
    { id: "cebolla", name: "Cebolla", price: 0, emoji: "🧅" },
    { id: "jalapeños", name: "Jalapeños", price: 600, emoji: "🌶️" },
    { id: "palta", name: "Palta", price: 900, emoji: "🥑" },
    { id: "rúcula", name: "Rúcula", price: 400, emoji: "🥬" },
    { id: "bacon", name: "Bacon Crocante", price: 1200, emoji: "🥓" },
    { id: "huevo", name: "Huevo Frito", price: 900, emoji: "🍳" },
  ],
  salsas: [
    { id: "especial", name: "Salsa Especial", price: 0, emoji: "✨" },
    { id: "bbq", name: "BBQ Ahumada", price: 0, emoji: "🔥" },
    { id: "mayo", name: "Mayonesa Casera", price: 0, emoji: "🥛" },
    { id: "ketchup", name: "Ketchup", price: 0, emoji: "🍅" },
    { id: "mostaza", name: "Mostaza Dijón", price: 0, emoji: "🟡" },
    { id: "trufa", name: "Salsa de Trufa", price: 1500, emoji: "🍄" },
    { id: "chipotle", name: "Chipotle", price: 600, emoji: "🌶️" },
  ],
};

export const loyaltyTiers = [
  {
    name: "Bronce",
    minPoints: 0,
    color: "from-amber-700 to-amber-900",
    icon: "🥉",
    benefits: ["1 punto por cada $100", "Ofertas exclusivas"],
  },
  {
    name: "Plata",
    minPoints: 500,
    color: "from-gray-300 to-gray-500",
    icon: "🥈",
    benefits: [
      "1.5 puntos por cada $100",
      "Envío gratis 1 vez/mes",
      "Acceso a promociones anticipadas",
    ],
  },
  {
    name: "Oro",
    minPoints: 1500,
    color: "from-yellow-400 to-amber-600",
    icon: "🥇",
    benefits: [
      "2 puntos por cada $100",
      "Envío gratis siempre",
      "Acceso VIP a nuevos productos",
      "Cumpleaños: hamburguesa gratis",
    ],
  },
];
