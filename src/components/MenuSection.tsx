"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/menu";
import { formatPrice, cn } from "@/lib/utils";
import { Search, Star, Plus, Flame, Sparkles, Leaf, SlidersHorizontal } from "lucide-react";
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

const filters = [
  { id: "all", label: "Todos", icon: null },
  { id: "más vendidos", label: "Más Vendidos", icon: Flame },
  { id: "nuevos", label: "Nuevos", icon: Sparkles },
  { id: "combos", label: "Combos", icon: null },
  { id: "veggie", label: "Veggie", icon: Leaf },
  { id: "picantes", label: "Picantes", icon: null },
];

export default function MenuSection() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "all" || p.tags.includes(activeFilter);

      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;

      return matchesSearch && matchesFilter && matchesCategory;
    });
  }, [search, activeFilter, activeCategory]);

  return (
    <section id="menu" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">
            Menú Digital
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-3 tracking-tight">
            Explorá el{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Menú</span>
          </h2>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-10"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-2xl bg-surface border border-border text-foreground placeholder-zinc-400 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-surface-light hover:bg-surface-lighter transition-colors">
              <SlidersHorizontal className="w-4 h-4 text-zinc-500" />
            </button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2",
                activeFilter === f.id
                  ? "bg-gold text-black shadow-lg shadow-gold/20"
                  : "bg-surface text-zinc-600 hover:text-foreground hover:bg-surface-light border border-border"
              )}
            >
              {f.icon && <f.icon className="w-3.5 h-3.5" />}
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto gap-2 mb-12 pb-2 scrollbar-none -mx-4 px-4"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
              activeCategory === "all"
                ? "bg-white text-black"
                : "bg-surface text-zinc-500 hover:text-foreground border border-border"
            )}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2",
                activeCategory === cat.id
                  ? "bg-white text-black"
                  : "bg-surface text-zinc-500 hover:text-foreground border border-border"
              )}
            >
              <span>{cat.emoji}</span>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border transition-all cursor-pointer"
              style={{ borderColor: `${categoryColorMap[product.category] || "#f5a623"}10` }}
            >
              <FoodBadge emoji={categoryEmoji[product.category] || "🍔"} size="sm" accentColor={categoryColorMap[product.category] || "#f5a623"} />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-foreground text-sm group-hover:text-gold transition-colors truncate">
                  {product.name}
                </h4>
                <p className="text-xs text-zinc-500 truncate mt-0.5">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    {product.rating}
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>
              <button className="p-2 rounded-xl bg-gold/10 text-gold hover:bg-gold/20 transition-colors flex-shrink-0">
                <Plus className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-zinc-500 text-lg">
              No encontramos productos con esos filtros
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
