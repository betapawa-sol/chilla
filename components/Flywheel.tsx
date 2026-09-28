"use client";

import { useEffect, useRef } from "react";
import { FLYWHEEL_STEPS } from "@/lib/constants";

export default function Flywheel() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".fade-in-up");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="flywheel-heading"
      className="bg-white py-20 sm:py-28 border-t border-[#1A1200]/8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: copy */}
          <div className="w-full lg:w-[45%]">
            <p className="fade-in-up text-[11px] font-medium tracking-[0.2em] uppercase text-chilla-amber mb-3">
              The network effect
            </p>
            <h2
              id="flywheel-heading"
              className="fade-in-up font-display font-bold text-[#1A1200] mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              The more nodes we deploy, the smarter the network gets.
            </h2>
            <p className="fade-in-up text-[#1A1200]/60 text-base leading-relaxed mb-6">
              Every storage transaction generates cold-chain data. That data improves utilisation, pricing and maintenance. Better economics justify more nodes. More nodes attract more customers and logistics partners.
            </p>
            <p className="fade-in-up text-[#1A1200]/60 text-base leading-relaxed">
              This is not a refrigerator business. It is infrastructure that compounds.
            </p>
          </div>

          {/* Right: flywheel diagram */}
          <div className="fade-in-up w-full lg:w-[55%] flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Central circle */}
              <div className="mx-auto w-32 h-32 rounded-full border-2 border-chilla-amber flex items-center justify-center mb-6 bg-[#FFF8E8]">
                <span className="font-display font-bold text-[#1A1200] text-sm text-center leading-tight px-2">Chilla°<br/>Network</span>
              </div>

              {/* Steps as a vertical list with connecting line */}
              <div className="relative space-y-0">
                <div
                  aria-hidden="true"
                  className="absolute left-5 top-3 bottom-3 w-0.5"
                  style={{ background: "repeating-linear-gradient(to bottom, #FFB800 0, #FFB800 8px, transparent 8px, transparent 16px)" }}
                />
                {FLYWHEEL_STEPS.filter(s => s.icon !== "↓").map((step, i) => (
                  <div key={i} className="flex items-center gap-4 py-3">
                    <div className="relative z-10 w-10 h-10 rounded-full border-2 border-chilla-amber bg-white flex items-center justify-center shrink-0">
                      <span className="text-chilla-amber font-mono font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-[#1A1200] font-medium text-sm">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
