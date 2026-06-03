"use client";

import { motion } from "framer-motion";
import { Globe, Share2, Send, Rss, Mail, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";

const links = {
  menú: [
    { label: "Hamburguesas", href: "#menu" },
    { label: "Papas", href: "#menu" },
    { label: "Bebidas", href: "#menu" },
    { label: "Pollo", href: "#menu" },
    { label: "Postres", href: "#menu" },
    { label: "Combos", href: "#menu" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Franquicias", href: "#" },
    { label: "Trabaja con nosotros", href: "#" },
    { label: "Prensa", href: "#" },
    { label: "Blog", href: "#" },
  ],
  soporte: [
    { label: "Centro de ayuda", href: "#" },
    { label: "Términos y condiciones", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Contacto", href: "#ubicacion" },
  ],
};

const socials = [
  { icon: Globe, href: "#", label: "Instagram" },
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: Send, href: "#", label: "Twitter" },
  { icon: Rss, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-border">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              Unite a la familia
            </h3>
            <p className="text-zinc-500">
              Recibí ofertas exclusivas y novedades en tu mail
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 md:w-72 px-5 py-3.5 rounded-2xl bg-background border border-border text-foreground placeholder-zinc-400 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all"
            />
            <button className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-black font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/25 transition-all active:scale-95">
              <Mail className="w-4 h-4" />
              Suscribirme
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-gold/20">
                <Image src="/logo.png" alt="Burger House" fill className="object-cover" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-foreground">
                  BURGER
                </span>
                <span className="text-lg font-black tracking-tight text-gradient-gold ml-1">
                  HOUSE
                </span>
              </div>
            </a>
            <p className="text-sm text-zinc-500 mb-6 max-w-xs">
              Las mejores hamburguesas de la ciudad. Ingredientes premium, experiencia inolvidable.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-surface-light border border-border flex items-center justify-center text-zinc-500 hover:text-foreground hover:border-zinc-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400">
            © 2026 Burger House. Todos los derechos reservados.
          </p>
          <p className="text-xs text-zinc-500 flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-red fill-red" /> en Salta, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
