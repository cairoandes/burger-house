"use client";

import { motion } from "framer-motion";
import { Smartphone, Zap, History, Gift, Star, Download } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Pedidos rápidos",
    description: "Repetí tu pedido favorito en un toque",
  },
  {
    icon: History,
    title: "Historial",
    description: "Todos tus pedidos anteriores",
  },
  {
    icon: Gift,
    title: "Recompensas",
    description: "Acumulá puntos con cada compra",
  },
  {
    icon: Star,
    title: "Cupones",
    description: "Ofertas exclusivas en la app",
  },
];

export default function AppSection({ dark = false }: { dark?: boolean }) {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-72 h-[580px] rounded-[3rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-3 shadow-2xl shadow-black/50">
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-surface to-background overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />

                {/* Screen content */}
                <div className="pt-12 px-5">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs text-zinc-500">Hola, María 👋</p>
                      <p className="text-lg font-bold text-foreground">¿Qué pedimos hoy?</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-black font-bold text-sm">
                      MG
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {["🍔", "🍟", "🥤", "🍗"].map((emoji, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="p-3 rounded-2xl bg-surface-light text-center"
                      >
                        <span className="text-2xl">{emoji}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Order card */}
                  <div className="p-4 rounded-2xl bg-gold/10 border border-gold/20 mb-4">
                    <p className="text-xs text-gold font-semibold mb-1">Último pedido</p>
                    <p className="text-sm font-bold text-foreground">Classic Smash + Papas</p>
                    <p className="text-xs text-zinc-500 mt-1">Hace 3 días</p>
                    <button className="mt-3 w-full py-2 rounded-xl bg-gold text-black text-xs font-bold">
                      Repetir pedido
                    </button>
                  </div>

                  {/* Points */}
                  <div className="p-4 rounded-2xl bg-surface-light">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-zinc-500">Tus puntos</span>
                      <span className="text-xs text-gold font-semibold">Nivel Oro 🥇</span>
                    </div>
                    <p className="text-2xl font-black text-foreground mb-2">1,247 pts</p>
                    <div className="w-full h-2 rounded-full bg-surface overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "83%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-gold to-gold-dark"
                      />
                    </div>
                    <p className="text-[10px] text-zinc-400 mt-1">253 puntos para nivel Platino</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 top-20 p-3 rounded-2xl bg-surface border border-border shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500 text-sm">✓</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Pedido #4821</p>
                  <p className="text-[10px] text-zinc-500">En preparación</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-purple-500 font-semibold text-sm tracking-widest uppercase">
              App
            </span>
            <h2 className={`text-4xl md:text-5xl font-black mt-3 tracking-tight ${dark ? "text-white" : "text-foreground"}`}>
              Descargá la{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">App</span>
            </h2>
            <p className={`text-lg mt-4 max-w-lg ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
              Pedí más rápido, acumulá puntos y accedé a ofertas exclusivas.
              Todo desde tu celular.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`p-4 rounded-2xl group transition-colors ${dark ? "bg-white/5 border border-white/10 hover:border-gold/20" : "bg-surface border border-border hover:border-gold/20"}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                    <feat.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className={`font-bold text-sm ${dark ? "text-white" : "text-foreground"}`}>{feat.title}</h4>
                  <p className={`text-xs mt-0.5 ${dark ? "text-zinc-400" : "text-zinc-500"}`}>{feat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <button className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-[10px] font-medium leading-none">Descargá en</p>
                  <p className="text-sm font-bold leading-tight">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-[10px] font-medium leading-none">Disponible en</p>
                  <p className="text-sm font-bold leading-tight">Google Play</p>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
