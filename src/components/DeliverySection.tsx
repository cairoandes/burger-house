"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Truck, CheckCircle2, Navigation } from "lucide-react";

const steps = [
  { icon: CheckCircle2, label: "Pedido confirmado", time: "0 min", active: true },
  { icon: Truck, label: "Preparando", time: "5 min", active: true },
  { icon: Navigation, label: "En camino", time: "15 min", active: false },
  { icon: MapPin, label: "Entregado", time: "25 min", active: false },
];

export default function DeliverySection({ dark = false }: { dark?: boolean }) {
  return (
    <section id="delivery" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-500 font-semibold text-sm tracking-widest uppercase">
              Delivery
            </span>
            <h2 className={`text-4xl md:text-6xl font-black mt-3 tracking-tight ${dark ? "text-white" : "text-foreground"}`}>
              Tu pedido en
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">25 minutos</span>
            </h2>
            <p className={`text-lg mt-6 max-w-lg ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
              Seguimiento en tiempo real. Delivery propio. Sin intermediarios.
              Tu comida llega caliente y a tiempo.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: Clock, title: "25 min promedio", desc: "Entrega rápida" },
                { icon: Truck, title: "Envío gratis", desc: "En pedidos +$15K" },
                { icon: MapPin, title: "Tracking GPS", desc: "En tiempo real" },
                { icon: Phone, title: "Soporte 24/7", desc: "WhatsApp directo" },
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-2xl group transition-colors ${dark ? "bg-white/5 border border-white/10 hover:border-gold/20" : "bg-surface border border-border hover:border-gold/20"}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                    <feat.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className={`font-bold text-sm ${dark ? "text-white" : "text-foreground"}`}>{feat.title}</h4>
                  <p className={`text-xs mt-0.5 ${dark ? "text-zinc-400" : "text-zinc-500"}`}>{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Tracking mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`relative p-6 md:p-8 rounded-3xl overflow-hidden ${dark ? "bg-white/5 border border-white/10" : "bg-surface border border-border"}`}>
              {/* Map placeholder */}
              <div className={`relative h-48 rounded-2xl mb-6 overflow-hidden ${dark ? "bg-white/5" : "bg-gradient-to-br from-surface-light to-surface"}`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      animate={{ x: [0, 30, 60, 90], y: [0, -10, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
                      className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/30"
                    >
                      <Truck className="w-5 h-5 text-black" />
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-gold/30"
                    />
                  </div>
                  {/* Route line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                    <motion.path
                      d="M 50 150 Q 100 50 150 100 Q 200 150 250 60"
                      fill="none"
                      stroke="rgba(245,166,35,0.3)"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </svg>
                  {/* Start & End points */}
                  <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red shadow-lg shadow-red/50" />
                </div>
              </div>

              {/* Order info */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className={`text-xs uppercase tracking-wider ${dark ? "text-zinc-500" : "text-zinc-500"}`}>
                    Pedido #4821
                  </p>
                  <h4 className={`text-lg font-bold ${dark ? "text-white" : "text-foreground"}`}>
                    En preparación
                  </h4>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500">Tiempo estimado</p>
                  <p className="text-2xl font-black text-gold">18 min</p>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.active
                          ? "bg-gold/20 text-gold"
                          : dark
                          ? "bg-white/10 text-zinc-500"
                          : "bg-surface-light text-zinc-400"
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${step.active ? (dark ? "text-white" : "text-foreground") : dark ? "text-zinc-500" : "text-zinc-400"}`}>
                        {step.label}
                      </p>
                    </div>
                    <span className={`text-xs ${step.active ? "text-gold" : "text-zinc-700"}`}>
                      {step.time}
                    </span>
                    {step.active && (
                      <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
