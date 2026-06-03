"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShoppingBag,
  MapPin,
  User,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Menú", href: "#menu" },
  { label: "Combos", href: "#destacados" },
  { label: "Arma tu Burger", href: "#builder" },
  { label: "Delivery", href: "#delivery" },
  { label: "Locales", href: "#ubicacion" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-lg shadow-gold/20 group-hover:shadow-gold/40 transition-shadow">
                <Image src="/logo.png" alt="Burger House" fill className="object-cover" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg md:text-xl font-black tracking-tight text-foreground">
                  BURGER
                </span>
                <span className="text-lg md:text-xl font-black tracking-tight text-gradient-gold ml-1">
                  HOUSE
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-foreground transition-colors rounded-lg hover:bg-black/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-zinc-500 hover:text-foreground transition-colors rounded-lg hover:bg-black/5">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Salta, Argentina</span>
              </button>

              <button className="relative p-2.5 rounded-xl bg-black/5 hover:bg-black/10 transition-colors">
                <ShoppingBag className="w-5 h-5 text-zinc-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red to-red-dark rounded-full text-[10px] font-bold flex items-center justify-center text-white shadow-lg shadow-red/30">
                  3
                </span>
              </button>

              <button className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-white font-bold text-sm hover:shadow-lg hover:shadow-gold/25 transition-all active:scale-95">
                <User className="w-4 h-4" />
                Ingresar
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-black/5 hover:bg-black/10 transition-colors"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 bg-background/98 backdrop-blur-xl"
          >
            <nav className="max-w-lg mx-auto px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl bg-surface hover:bg-surface-light transition-colors group"
                >
                  <span className="text-lg font-semibold text-foreground">
                    {link.label}
                  </span>
                  <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-gold transition-colors" />
                </motion.a>
              ))}

              <div className="mt-6 flex flex-col gap-3">
                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-white font-bold text-lg active:scale-98 transition-transform">
                  Pedir Ahora
                </button>
                <button className="w-full py-4 rounded-2xl bg-surface border border-border text-foreground font-semibold text-lg active:scale-98 transition-transform">
                  Iniciar Sesión
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-3 text-zinc-500">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-sm">Salta, Argentina</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
