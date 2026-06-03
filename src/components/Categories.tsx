"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/menu";
import { ArrowRight } from "lucide-react";
import FoodBadge from "./FoodBadge";

const categoryColors: Record<string, string> = {
  hamburguesas: "#f59e0b",
  papas: "#f97316",
  bebidas: "#3b82f6",
  pollo: "#ef4444",
  especiales: "#a855f7",
  postres: "#ec4899",
};

export default function Categories() {
  return (
    <section id="categorias" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
            Explorá
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-3 tracking-tight">
            Nuestras{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Categorías</span>
          </h2>
          <p className="text-zinc-500 text-lg mt-4 max-w-xl mx-auto">
            Encontrá exactamente lo que se te antoja
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => {
            const color = categoryColors[cat.id] || "#f5a623";
            return (
              <motion.a
                key={cat.id}
                href="#menu"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-surface border border-border transition-all duration-500 card-hover cursor-pointer"
                style={{
                  borderColor: `${color}10`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${color}10`;
                }}
              >
                <div className="p-6 md:p-8">
                  {/* Food Badge */}
                  <div className="mb-4">
                    <FoodBadge emoji={cat.emoji} size="lg" accentColor={color} />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-zinc-500 mb-4 line-clamp-1">
                    {cat.description}
                  </p>

                  {/* Arrow */}
                  <div
                    className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color }}
                  >
                    Ver todo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Colored gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 70% 70%, ${color}, transparent 70%)`,
                  }}
                />

                {/* Glow effect */}
                <div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `${color}10` }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
