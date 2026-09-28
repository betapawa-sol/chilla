"use client";

import { useState } from "react";
import { VARIANTS } from "@/lib/constants";

const tabColors: Record<string, string> = {
  market: "#2D5A3D",
  pharma: "#1A4A7A",
  clinic: "#5A3C00",
};

export default function Variants() {
  const [activeTab, setActiveTab] = useState("market");
  const variant = VARIANTS.find((v) => v.id === activeTab)!;

  return (
    <section
      id="variants"
      aria-labelledby="variants-heading"
      className="py-20 sm:py-28"
      style={{ backgroundColor: activeTab === "pharma" ? "#F0F7F2" : "#FFFFFF", transition: "background-color 0.3s" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-chilla-amber mb-3">
            Product variants
          </p>
          <h2
            id="variants-heading"
            className="font-display font-bold text-[#1A1200]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            One chassis. Three cold modules.
          </h2>
        </div>

        {/* Tab switcher */}
        <div role="tablist" aria-label="Kiosk variants" className="flex justify-center gap-2 mb-12 flex-wrap">
          {VARIANTS.map((v) => (
            <button
              key={v.id}
              role="tab"
              aria-selected={activeTab === v.id}
              aria-controls={`panel-${v.id}`}
              id={`tab-${v.id}`}
              onClick={() => setActiveTab(v.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border focus-visible:outline focus-visible:outline-2 focus-visible:outline-chilla-amber ${
                activeTab === v.id
                  ? "text-white border-transparent"
                  : "text-[#1A1200]/60 border-[#1A1200]/20 hover:text-[#1A1200] hover:border-[#1A1200]/40 bg-transparent"
              }`}
              style={activeTab === v.id ? { backgroundColor: tabColors[v.id], borderColor: tabColors[v.id] } : {}}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <div
          role="tabpanel"
          id={`panel-${variant.id}`}
          aria-labelledby={`tab-${variant.id}`}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Left: product placeholder + temp range */}
            <div className="w-full lg:w-[45%] flex flex-col items-center gap-4">
              <div
                role="img"
                aria-label={`${variant.label} kiosk placeholder`}
                className="relative w-full max-w-xs aspect-[3/4] rounded-2xl flex flex-col items-center justify-center overflow-hidden"
                style={{ backgroundColor: variant.color }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 32px)",
                  }}
                />
                <p className="relative z-10 font-display font-bold text-white text-lg">{variant.label}</p>
                <p className="relative z-10 font-mono text-chilla-amber text-sm mt-2">{variant.tempRange}</p>
              </div>

              {/* Temperature badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1200]/5 border border-[#1A1200]/10">
                <span className="text-xs text-[#1A1200]/50 font-mono">TEMP RANGE</span>
                <span className="font-mono text-chilla-amber font-bold">{variant.tempRange}</span>
              </div>
            </div>

            {/* Right: copy */}
            <div className="w-full lg:w-[55%]">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase mb-2" style={{ color: variant.color === "#2D5A3D" ? "#4ADE80" : variant.color === "#1A4A7A" ? "#60A5FA" : "#FCD34D" }}>
                {variant.audience}
              </p>
              <h3 className="font-display font-bold text-[#1A1200] text-3xl mb-4">{variant.label}</h3>
              <p className="text-[#1A1200]/70 text-base leading-relaxed mb-6">{variant.description}</p>
              <ul className="flex flex-col gap-3 mb-8" role="list">
                {variant.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-[#1A1200]/80">
                    <span className="mt-1 text-chilla-amber shrink-0" aria-hidden="true">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-chilla-amber text-sm font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-chilla-amber rounded"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
