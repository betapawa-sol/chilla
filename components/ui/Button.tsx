import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  children: ReactNode;
  href?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-chilla-amber text-chilla-night font-semibold hover:bg-amber-400 focus-visible:ring-2 focus-visible:ring-chilla-amber focus-visible:ring-offset-2 focus-visible:ring-offset-chilla-night",
  ghost:
    "bg-transparent text-white border border-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-chilla-night",
  outline:
    "bg-transparent text-chilla-amber border border-chilla-amber hover:bg-chilla-amber/10 focus-visible:ring-2 focus-visible:ring-chilla-amber",
};

export default function Button({
  variant = "primary",
  children,
  href,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm transition-colors duration-200 ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
