"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { builderOptions } from "@/data/menu";
import { formatPrice, cn } from "@/lib/utils";
import { ChevronRight, RotateCcw, ShoppingCart } from "lucide-react";

const steps = [
  { key: "pan", label: "Elegí tu pan", emoji: "🍞" },
  { key: "carne", label: "Elegí la carne", emoji: "🥩" },
  { key: "quesos", label: "¿Qué queso?", emoji: "🧀" },
  { key: "vegetales", label: "Vegetales y extras", emoji: "🥬" },
  { key: "salsas", label: "Las salsas", emoji: "🍅" },
] as const;

type StepKey = (typeof steps)[number]["key"];

export default function BurgerBuilder({ dark = false }: { dark?: boolean }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<StepKey, string[]>>({
    pan: [],
    carne: [],
    quesos: [],
    vegetales: [],
    salsas: [],
  });

  const currentKey = steps[currentStep].key as StepKey;
  const currentOptions = builderOptions[currentKey];

  const toggleOption = (id: string) => {
    setSelections((prev) => {
      const current = prev[currentKey];
      const isSelected = current.includes(id);
      // For pan and carne, only allow single selection
      if (currentKey === "pan" || currentKey === "carne") {
        return { ...prev, [currentKey]: isSelected ? [] : [id] };
      }
      return {
        ...prev,
        [currentKey]: isSelected
          ? current.filter((s) => s !== id)
          : [...current, id],
      };
    });
  };

  const totalPrice = useMemo(() => {
    let total = 6500; // base price
    for (const [key, ids] of Object.entries(selections)) {
      const opts = builderOptions[key as keyof typeof builderOptions];
      for (const id of ids) {
        const opt = opts.find((o) => o.id === id);
        if (opt) total += opt.price;
      }
    }
    return total;
  }, [selections]);

  const allSelected = Object.values(selections).some((v) => v.length > 0);

  const reset = () => {
    setSelections({ pan: [], carne: [], quesos: [], vegetales: [], salsas: [] });
    setCurrentStep(0);
  };

  // Build burger visual stack
  const burgerStack = useMemo(() => {
    const stack: string[] = ["🍞"]; // top bun
    const sel = selections;
    if (sel.quesos.length) sel.quesos.forEach((id) => { const o = builderOptions.quesos.find(q => q.id === id); if (o) stack.push(o.emoji); });
    if (sel.carne.length) sel.carne.forEach((id) => { const o = builderOptions.carne.find(c => c.id === id); if (o) stack.push(o.emoji); });
    if (sel.vegetales.length) sel.vegetales.forEach((id) => { const o = builderOptions.vegetales.find(v => v.id === id); if (o) stack.push(o.emoji); });
    if (sel.salsas.length) stack.push("💧");
    if (sel.pan.length) { const o = builderOptions.pan.find(p => p.id === sel.pan[0]); if (o) stack.push(o.emoji); }
    else stack.push("🍞"); // bottom bun
    return stack;
  }, [selections]);

  return (
    <section id="builder" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">
            Personalizá
          </span>
          <h2 className={`text-4xl md:text-6xl font-black mt-3 tracking-tight ${dark ? "text-white" : "text-foreground"}`}>
            Armá tu{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Hamburguesa</span>
          </h2>
          <p className={`text-lg mt-4 max-w-xl mx-auto ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
            Creá tu obra maestra. Elegí cada ingrediente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Builder UI */}
          <div>
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
              {steps.map((step, i) => (
                <button
                  key={step.key}
                  onClick={() => setCurrentStep(i)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap",
                    i === currentStep
                      ? "bg-gold text-black"
                      : i < currentStep || selections[step.key as StepKey].length > 0
                      ? "bg-gold/10 text-gold border border-gold/20"
                      : dark
                      ? "bg-white/10 text-zinc-400 border border-white/10"
                      : "bg-surface text-zinc-400 border border-border"
                  )}
                >
                  <span>{step.emoji}</span>
                  <span className="hidden sm:inline">{step.label}</span>
                </button>
              ))}
            </div>

            {/* Current step title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={`text-2xl font-bold mb-6 ${dark ? "text-white" : "text-foreground"}`}>
                  {steps[currentStep].emoji} {steps[currentStep].label}
                </h3>

                {/* Options grid */}
                <div className="grid grid-cols-1 gap-3">
                  {currentOptions.map((option) => {
                    const isSelected = selections[currentKey].includes(option.id);
                    return (
                      <motion.button
                        key={option.id}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleOption(option.id)}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-2xl border text-left transition-all",
                          isSelected
                            ? "border-gold bg-gold/10 shadow-lg shadow-gold/10"
                            : dark
                      ? "border-white/10 bg-white/5 hover:border-white/20"
                      : "border-border bg-surface hover:border-zinc-600"
                        )}
                      >
                        <span className="text-2xl">{option.emoji}</span>
                        <div className="flex-1">
                          <span className={cn("font-semibold", isSelected ? (dark ? "text-white" : "text-foreground") : "text-zinc-600")}>
                            {option.name}
                          </span>
                        </div>
                        {option.price > 0 && (
                          <span className={cn("text-sm font-bold", isSelected ? "text-gold" : "text-zinc-500")}>
                            +{formatPrice(option.price)}
                          </span>
                        )}
                        {isSelected && (
                          <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                            <span className="text-black text-xs font-bold">✓</span>
                          </div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3 mt-8">
                  <button
                    onClick={reset}
                    className="p-3 rounded-xl bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                  {currentStep < steps.length - 1 ? (
                    <button
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-black font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/25 transition-all active:scale-98"
                    >
                      Siguiente
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-black font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/25 transition-all active:scale-98">
                      <ShoppingCart className="w-5 h-5" />
                      Agregar · {formatPrice(totalPrice)}
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right - Visual preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-32"
          >
            <div className={`p-8 rounded-3xl text-center ${dark ? "bg-white/5 border border-white/10" : "bg-surface border border-border"}`}>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-6 ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
                Tu hamburguesa
              </h4>

              {/* Burger visual */}
              <div className="flex flex-col-reverse items-center gap-1 min-h-[200px] justify-center mb-8">
                {burgerStack.map((emoji, i) => (
                  <motion.div
                    key={`${emoji}-${i}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="text-4xl md:text-5xl"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>

              {/* Selection summary */}
              <div className="space-y-2 text-left mb-6">
                {steps.map((step) => {
                  const sel = selections[step.key as StepKey];
                  if (sel.length === 0) return null;
                  const names = sel.map((id) => {
                    const opt = builderOptions[step.key as keyof typeof builderOptions].find((o) => o.id === id);
                    return opt?.name ?? id;
                  });
                  return (
                    <div key={step.key} className="flex justify-between text-sm">
                      <span className={dark ? "text-zinc-400" : "text-zinc-500"}>{step.emoji} {step.label}</span>
                      <span className={`font-medium ${dark ? "text-white" : "text-foreground"}`}>{names.join(", ")}</span>
                    </div>
                  );
                })}
              </div>

              {/* Price */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className={dark ? "text-zinc-400" : "text-zinc-500"}>Total</span>
                  <span className="text-3xl font-black text-gradient-gold">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
