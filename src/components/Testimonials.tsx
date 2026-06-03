"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/menu";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials({ dark = false }: { dark?: boolean }) {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
          <span className="text-pink-500 font-semibold text-sm tracking-widest uppercase">
            Testimonios
          </span>
          <h2 className={`text-4xl md:text-6xl font-black mt-3 tracking-tight ${dark ? "text-white" : "text-foreground"}`}>
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">clientes</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main card */}
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className={`p-8 md:p-12 rounded-3xl text-center ${dark ? "bg-white/5 border border-white/10" : "bg-surface border border-border"}`}
            >
              <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />

              <p className={`text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-2xl mx-auto ${dark ? "text-white/70" : "text-zinc-600"}`}>
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[current].rating
                        ? "text-gold fill-gold"
                        : dark
                        ? "text-white/20"
                        : "text-zinc-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-black font-bold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className={`font-bold ${dark ? "text-white" : "text-foreground"}`}>
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-zinc-500">
                    {testimonials[current].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className={`p-3 rounded-xl border transition-colors ${dark ? "bg-white/10 border-white/10 text-zinc-400 hover:text-white hover:border-white/20" : "bg-surface border-border text-zinc-600 hover:text-foreground hover:border-zinc-600"}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-gold"
                      : dark
                      ? "bg-white/20 hover:bg-white/30"
                      : "bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className={`p-3 rounded-xl border transition-colors ${dark ? "bg-white/10 border-white/10 text-zinc-400 hover:text-white hover:border-white/20" : "bg-surface border-border text-zinc-600 hover:text-foreground hover:border-zinc-600"}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Reviews badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-3"
        >
              <div className={`flex items-center gap-2 px-5 py-3 rounded-2xl ${dark ? "bg-white/5 border border-white/10" : "bg-surface border border-border"}`}>
            <span className="text-xl">⭐</span>
            <div>
              <p className={`text-sm font-bold ${dark ? "text-white" : "text-foreground"}`}>4.9 en Google</p>
              <p className="text-xs text-zinc-500">+2,500 reseñas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
