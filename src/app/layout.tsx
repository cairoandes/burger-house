import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BURGER HOUSE | Las mejores hamburguesas de la ciudad",
  description:
    "Ingredientes premium. Entrega rápida. Experiencia inolvidable. Pedí ahora las mejores hamburguesas artesanales.",
  keywords: [
    "hamburguesas",
    "delivery",
    "comida rápida",
    "premium",
    "burger",
    "fast food",
  ],
  openGraph: {
    title: "BURGER HOUSE | Las mejores hamburguesas de la ciudad",
    description:
      "Ingredientes premium. Entrega rápida. Experiencia inolvidable.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
