"use client";

import { cn } from "@/lib/utils";

interface FoodBadgeProps {
  emoji: string;
  size?: "sm" | "md" | "lg" | "xl";
  accentColor: string;
  className?: string;
}

const sizes = {
  sm: "w-14 h-14 text-2xl",
  md: "w-20 h-20 text-4xl",
  lg: "w-28 h-28 text-5xl",
  xl: "w-36 h-36 text-7xl",
};

export default function FoodBadge({ emoji, size = "md", accentColor, className }: FoodBadgeProps) {
  return (
    <div className={cn("relative flex items-center justify-center", sizes[size], className)}>
      {/* Outer glow */}
      <div
        className="absolute inset-[-8px] rounded-full blur-xl"
        style={{ background: `radial-gradient(circle, ${accentColor}30, transparent 70%)` }}
      />

      {/* Badge border - dashed outer ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke={accentColor}
          strokeWidth="2"
          strokeDasharray="5 3"
          opacity="0.5"
        />
        <circle
          cx="50"
          cy="50"
          r="41"
          fill="none"
          stroke={accentColor}
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>

      {/* Inner fill */}
      <div
        className="absolute inset-2 rounded-full"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${accentColor}20, ${accentColor}08 70%)`,
          border: `2px solid ${accentColor}30`,
        }}
      />

      {/* Corner accents - 4 dots */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ background: accentColor, opacity: 0.8, boxShadow: `0 0 6px ${accentColor}` }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ background: accentColor, opacity: 0.8, boxShadow: `0 0 6px ${accentColor}` }} />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ background: accentColor, opacity: 0.8, boxShadow: `0 0 6px ${accentColor}` }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ background: accentColor, opacity: 0.8, boxShadow: `0 0 6px ${accentColor}` }} />

      {/* Emoji */}
      <span className="relative z-10 drop-shadow-lg">{emoji}</span>

      {/* "BR" watermark */}
      <span
        className="absolute bottom-1 right-2 text-[6px] font-black opacity-30 z-10"
        style={{ color: accentColor }}
      >
        BR
      </span>
    </div>
  );
}
