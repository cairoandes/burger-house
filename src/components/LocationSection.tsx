"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink } from "lucide-react";

const schedule = [
  { day: "Lunes a Jueves", hours: "11:00 - 23:00" },
  { day: "Viernes y Sábado", hours: "11:00 - 01:00" },
  { day: "Domingos", hours: "12:00 - 22:00" },
];

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
            Encontranos
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-3 tracking-tight">
            Nuestra{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">Ubicación</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-border h-[400px] lg:h-full min-h-[400px]"
          >
            <div className="w-full h-full bg-surface relative">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-gold" />
                  </div>
                  <p className="text-foreground font-bold text-lg">Burger House</p>
                  <p className="text-zinc-500 text-sm mt-1">Av. San Martín 1234, Salta</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-gold/10 text-gold text-sm font-semibold hover:bg-gold/20 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Cómo llegar
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Address */}
            <div className="p-6 rounded-3xl bg-surface border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">Dirección</h3>
                  <p className="text-zinc-600">Av. San Martín 1234</p>
                  <p className="text-zinc-600">Salta, Argentina</p>
                  <p className="text-sm text-zinc-400 mt-2">A 3 cuadras de la Plaza 9 de Julio</p>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="p-6 rounded-3xl bg-surface border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg mb-3">Horarios</h3>
                  <div className="space-y-2">
                    {schedule.map((s, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-zinc-600">{s.day}</span>
                        <span className="text-foreground font-medium">{s.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+549387123456"
                className="p-5 rounded-3xl bg-surface border border-border flex flex-col items-center gap-3 hover:border-gold/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-foreground">Llamar</p>
                  <p className="text-xs text-zinc-500">+54 9 387 123-456</p>
                </div>
              </a>

              <a
                href="https://wa.me/549387123456"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-green-500/5 border border-green-500/20 flex flex-col items-center gap-3 hover:bg-green-500/10 hover:border-green-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-foreground">WhatsApp</p>
                  <p className="text-xs text-zinc-500">Mensaje directo</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
