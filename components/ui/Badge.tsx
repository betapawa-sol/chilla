import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "market" | "pharma" | "clinic" | "outline" | "sdg";
  className?: string;
}

const variantStyles: Record<string, string> = {
  market: "bg-chilla-green text-white",
  pharma: "bg-chilla-navy text-white",
  clinic: "bg-chilla-clinic text-white",
  outline: "border border-chilla-accent text-chilla-accent bg-transparent",
  sdg: "bg-white/10 text-white border border-white/20",
};

export default function Badge({ children, variant = "sdg", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
