"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, Clock, Star } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1205] via-[#0a0a0a] to-[#120505]" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-red/10 blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
            <Truck className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-white/80">
              Envío gratis en tu primer pedido
            </span>
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
            <span className="text-white">¿Qué estás</span>
            <br />
            <span className="text-gradient-gold">esperando?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10">
            Pedí ahora y recibí tu hamburguesa favorita en minutos.
            Sin complicaciones. Solo sabor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#menu"
              className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-gold/25 transition-all active:scale-95"
            >
              Pedir Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/549387123456"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/15 backdrop-blur-md transition-all active:scale-95"
            >
              WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              25 min entrega
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gold" />
              4.9 rating
            </span>
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-gold" />
              Envío gratis
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
