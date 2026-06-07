import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import DeliverySection from "@/components/DeliverySection";
import MenuSection from "@/components/MenuSection";
import BurgerBuilder from "@/components/BurgerBuilder";
import AppSection from "@/components/AppSection";
import LoyaltySection from "@/components/LoyaltySection";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

function Divider({ color = "gold" }: { color?: string }) {
  const colors: Record<string, string> = {
    gold: "from-transparent via-amber-400 to-transparent",
    red: "from-transparent via-red-400 to-transparent",
    green: "from-transparent via-emerald-400 to-transparent",
    blue: "from-transparent via-blue-400 to-transparent",
    orange: "from-transparent via-orange-400 to-transparent",
    purple: "from-transparent via-purple-400 to-transparent",
    pink: "from-transparent via-pink-400 to-transparent",
    teal: "from-transparent via-teal-400 to-transparent",
  };
  return (
    <div className="relative">
      <div className={`w-full h-[2px] bg-gradient-to-r ${colors[color] || colors.gold}`} />
      <div className={`absolute inset-0 w-full h-3 bg-gradient-to-r ${colors[color] || colors.gold} opacity-20 blur-sm`} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Categorías - amber - LIGHT */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f5f2ed 0%, #fef9ef 30%, #fef9ef 70%, #f5f2ed 100%)" }}>
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.15), transparent 55%)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.1), transparent 55%)", transform: "translate(30%, 30%)" }} />
        <Categories />
      </section>

      <Divider color="red" />

      {/* Destacados - rojo - DARK */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #1a0808 30%, #1a0808 70%, #0a0a0a 100%)" }}>
        <div className="absolute top-1/2 right-0 w-[700px] h-[700px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(239,68,68,0.2), transparent 55%)", transform: "translate(40%, -50%)" }} />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(239,68,68,0.12), transparent 55%)" }} />
        <FeaturedProducts dark />
      </section>

      <Divider color="green" />

      {/* Delivery - esmeralda - DARK */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #041a10 30%, #041a10 70%, #0a0a0a 100%)" }}>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.2), transparent 55%)", transform: "translateY(30%)" }} />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12), transparent 55%)", transform: "translateX(30%)" }} />
        <DeliverySection dark />
      </section>

      <Divider color="blue" />

      {/* Menú - azul - DARK */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #050a18 30%, #050a18 70%, #0a0a0a 100%)" }}>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2), transparent 55%)", transform: "translateX(40%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12), transparent 55%)", transform: "translate(-20%, 20%)" }} />
        <MenuSection dark />
      </section>

      <Divider color="orange" />

      {/* Builder - naranja - DARK */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #1a0c04 30%, #1a0c04 70%, #0a0a0a 100%)" }}>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.2), transparent 55%)", transform: "translate(-30%, 30%)" }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12), transparent 55%)" }} />
        <BurgerBuilder dark />
      </section>

      <Divider color="purple" />

      {/* App - púrpura - DARK */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #100620 30%, #100620 70%, #0a0a0a 100%)" }}>
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.2), transparent 55%)", transform: "translateX(-50%) translateY(-30%)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12), transparent 55%)", transform: "translate(20%, 20%)" }} />
        <AppSection dark />
      </section>

      <Divider color="gold" />

      {/* Fidelización - dorado - DARK */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #15100a 30%, #15100a 70%, #0a0a0a 100%)" }}>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.2), transparent 55%)", transform: "translate(30%, 30%)" }} />
        <LoyaltySection dark />
      </section>

      <Divider color="pink" />

      {/* Testimonios - rosa - DARK */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #180812 30%, #180812 70%, #0a0a0a 100%)" }}>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(236,72,153,0.2), transparent 55%)", transform: "translate(-40%, -50%)" }} />
        <Testimonials dark />
      </section>

      <Divider color="teal" />

      {/* Ubicación - teal - LIGHT */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f5f2ed 0%, #f0fdfa 30%, #f0fdfa 70%, #f5f2ed 100%)" }}>
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(20,184,166,0.12), transparent 55%)", transform: "translateX(-50%) translateY(30%)" }} />
        <LocationSection />
      </section>

      <Divider color="gold" />
      <CTA />
      <Footer />
    </main>
  );
}
