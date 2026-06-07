"use client";

import { motion } from "framer-motion";
import { loyaltyTiers } from "@/data/menu";
import { Crown, ArrowRight, Gift, TrendingUp } from "lucide-react";

export default function LoyaltySection({ dark = false }: { dark?: boolean }) {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
            Fidelización
          </span>
          <h2 className={`text-4xl md:text-6xl font-black mt-3 tracking-tight ${dark ? "text-white" : "text-foreground"}`}>
            Programa de{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Puntos</span>
          </h2>
          <p className={`text-lg mt-4 max-w-xl mx-auto ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
            Cada compra te acerca a más beneficios
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
        >
          {[
            { value: "50K+", label: "Miembros activos" },
            { value: "$2.5M", label: "Puntos canjeados" },
            { value: "98%", label: "Satisfacción" },
          ].map((stat, i) => (
            <div key={i} className={`text-center p-4 rounded-2xl ${dark ? "bg-white/5 border border-white/10" : "bg-surface border border-border"}`}>
              <p className="text-2xl md:text-3xl font-black text-gradient-gold">{stat.value}</p>
              <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6">
          {loyaltyTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-6 md:p-8 rounded-3xl overflow-hidden card-hover ${
                i === 2 ? "border-gold/30 glow-gold" : ""
              } ${dark ? "bg-white/5 border border-white/10" : "bg-surface border border-border"}`}
            >
              {/* Background gradient */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${tier.color} opacity-5 rounded-full blur-3xl`} />

              {/* Icon */}
              <div className="text-5xl mb-4">{tier.icon}</div>

              <h3 className={`text-2xl font-black mb-1 ${dark ? "text-white" : "text-foreground"}`}>{tier.name}</h3>
              <p className={`text-sm mb-6 ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
                Desde {tier.minPoints} puntos
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {tier.benefits.map((benefit, j) => (
                  <li key={j} className={`flex items-center gap-3 text-sm ${dark ? "text-zinc-300" : "text-zinc-600"}`}>
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold text-xs">✓</span>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>

              {i === 2 && (
                <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                  <Crown className="w-4 h-4" />
                  Tu nivel actual
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress bar demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-3xl max-w-3xl mx-auto ${dark ? "bg-white/5 border border-white/10" : "bg-surface border border-border"}`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className={`font-bold ${dark ? "text-white" : "text-foreground"}`}>Tu progreso</p>
                <p className="text-xs text-zinc-500">1,247 / 1,500 puntos</p>
              </div>
            </div>
            <div className={`flex items-center gap-2 ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
              <span className="text-sm">🥈 Plata</span>
              <ArrowRight className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold font-semibold">🥇 Oro</span>
            </div>
          </div>
          <div className={`w-full h-3 rounded-full overflow-hidden ${dark ? "bg-white/10" : "bg-surface-light"}`}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "83%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-gold to-gold-dark"
            />
          </div>
          <p className={`text-xs mt-3 text-center ${dark ? "text-zinc-500" : "text-zinc-500"}`}>
            Te faltan 253 puntos para alcanzar el nivel Oro
          </p>
        </motion.div>
      </div>
    </section>
  );
}
