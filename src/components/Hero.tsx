"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star, Clock, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1920&q=80')",
          }}
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#f5f2ed] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
        {/* Warm color overlay */}
        <div className="absolute inset-0 bg-amber-900/20 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 mb-8"
        >
          <Star className="w-4 h-4 text-gold fill-gold" />
          <span className="text-sm font-medium text-white/90">
            #1 en delivery de la ciudad
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.15] mb-6"
        >
          <span className="block text-white drop-shadow-lg">Las mejores</span>
          <span className="block text-gradient-gold mt-2 drop-shadow-lg">hamburguesas</span>
          <span className="block text-white mt-2 drop-shadow-lg">de la ciudad</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light drop-shadow"
        >
          Ingredientes premium. Entrega rápida.
          <br className="hidden sm:block" />
          Experiencia inolvidable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#menu"
            className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-gold/25 transition-all active:scale-95"
          >
            Ver Menú
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#destacados"
            className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/15 border border-white/25 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/25 backdrop-blur-md transition-all active:scale-95"
          >
            Pedir Ahora
            <Truck className="w-5 h-5 text-gold" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { icon: Star, label: "4.9 Rating", sub: "+10K reseñas" },
            { icon: Clock, label: "25 min", sub: "Entrega promedio" },
            { icon: Truck, label: "Envío gratis", sub: "En pedidos +$15K" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">{stat.label}</div>
                <div className="text-xs text-white/60">{stat.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}
