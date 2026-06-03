"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, type Product } from "@/data/menu";
import { formatPrice, cn } from "@/lib/utils";
import {
  Star,
  Plus,
  X,
  Minus,
  ShoppingCart,
  Flame,
  Sparkles,
  Leaf,
} from "lucide-react";
import FoodBadge from "./FoodBadge";

const categoryColorMap: Record<string, string> = {
  hamburguesas: "#f59e0b",
  papas: "#f97316",
  bebidas: "#3b82f6",
  pollo: "#ef4444",
  especiales: "#a855f7",
  postres: "#ec4899",
};

const categoryEmoji: Record<string, string> = {
  hamburguesas: "🍔",
  papas: "🍟",
  bebidas: "🥤",
  pollo: "🍗",
  postres: "🍰",
  especiales: "🌭",
};

function ProductCard({ product, onSelect }: { product: Product; onSelect: (p: Product) => void }) {
  const color = categoryColorMap[product.category] || "#f5a623";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-surface rounded-3xl border border-border transition-all duration-500 overflow-hidden card-hover"
      style={{ borderColor: `${color}10` }}
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden flex items-center justify-center" style={{ background: `radial-gradient(circle at 50% 50%, ${color}08, transparent 70%)` }}>
        <FoodBadge emoji={categoryEmoji[product.category] || "🍔"} size="xl" accentColor={color} />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isNew && (
            <span className="px-3 py-1 rounded-full bg-blue-500/90 text-white text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Nuevo
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-3 py-1 rounded-full bg-gold/90 text-black text-xs font-bold flex items-center gap-1">
              <Flame className="w-3 h-3" /> Top
            </span>
          )}
          {product.tags.includes("veggie") && (
            <span className="px-3 py-1 rounded-full bg-green-500/90 text-white text-xs font-bold flex items-center gap-1">
              <Leaf className="w-3 h-3" /> Veggie
            </span>
          )}
          {product.tags.includes("picantes") && (
            <span className="px-3 py-1 rounded-full bg-red/90 text-white text-xs font-bold">
              🌶️ Picante
            </span>
          )}
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-gold text-sm">
            <Star className="w-3.5 h-3.5 fill-gold" />
            {product.rating}
          </div>
        </div>

        <p className="text-sm text-zinc-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-black text-foreground">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => onSelect(product)}
            className="p-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-black hover:shadow-lg hover:shadow-gold/25 transition-all active:scale-90"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const toggleExtra = (name: string) => {
    setSelectedExtras((prev) =>
      prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]
    );
  };

  const extrasTotal =
    product.extras
      ?.filter((e) => selectedExtras.includes(e.name))
      .reduce((sum, e) => sum + e.price, 0) ?? 0;

  const total = (product.price + extrasTotal) * quantity;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/70 backdrop-blur-sm p-0 md:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-surface border border-border rounded-t-3xl md:rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Header image */}
        <div className="relative h-56 flex items-center justify-center" style={{ background: `radial-gradient(circle at 50% 50%, ${categoryColorMap[product.category] || "#f5a623"}12, transparent 70%)` }}>
          <FoodBadge emoji={categoryEmoji[product.category] || "🍔"} size="xl" accentColor={categoryColorMap[product.category] || "#f5a623"} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Product info */}
          <div className="flex items-center gap-2 mb-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-semibold text-zinc-600 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-black text-foreground mb-2">
            {product.name}
          </h3>
          <p className="text-zinc-600 mb-4">{product.description}</p>

          <div className="flex items-center gap-4 mb-6 text-sm text-zinc-500">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-gold fill-gold" />
              {product.rating} ({product.reviews} reseñas)
            </span>
            {product.calories && <span>{product.calories} kcal</span>}
          </div>

          {/* Extras */}
          {product.extras && product.extras.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                Extras
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {product.extras.map((extra) => (
                  <button
                    key={extra.name}
                    onClick={() => toggleExtra(extra.name)}
                    className={cn(
                      "p-3 rounded-xl border text-left transition-all text-sm",
                      selectedExtras.includes(extra.name)
                        ? "border-gold bg-gold/10 text-foreground"
                        : "border-border bg-surface-light text-zinc-600 hover:border-zinc-600"
                    )}
                  >
                    <span className="font-semibold">{extra.name}</span>
                    <span className="block text-xs text-gold mt-0.5">
                      +{formatPrice(extra.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Add */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-surface-light rounded-2xl p-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-zinc-600 hover:text-foreground transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-bold text-foreground text-lg">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-zinc-600 hover:text-foreground transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-black font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/25 transition-all active:scale-98">
              <ShoppingCart className="w-5 h-5" />
              Agregar · {formatPrice(total)}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featured = products.filter(
    (p) => p.isBestSeller || p.isNew
  );

  return (
    <section id="destacados" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">
            Los favoritos
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-3 tracking-tight">
            Productos{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p className="text-zinc-500 text-lg mt-4 max-w-xl mx-auto">
            Los pedidos que más se repiten. Probá por qué.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
