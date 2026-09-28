"use client";

import { useEffect, useRef } from "react";
import CountUp from "@/components/ui/CountUp";
import { IMPACT_STATS, SDG_BADGES } from "@/lib/constants";

export default function ImpactNumbers() {
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
      id="impact"
      ref={sectionRef}
      aria-labelledby="impact-heading"
      style={{ backgroundColor: "#FFF5DC" }}
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="fade-in-up text-[11px] font-medium tracking-[0.2em] uppercase text-chilla-amber mb-3">
            Verified impact
          </p>
          <h2
            id="impact-heading"
            className="fade-in-up font-display font-bold text-[#1A1200]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Cold chain as infrastructure, not equipment.
          </h2>
        </div>

        {/* 2×3 stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1A1200]/10 rounded-2xl overflow-hidden mb-12">
          {IMPACT_STATS.map((stat, i) => (
            <article
              key={i}
              className="fade-in-up flex flex-col items-center text-center px-6 py-8 bg-[#FFF5DC] gap-2"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                className="font-mono font-bold leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "#FFB800" }}
              >
                {stat.value === 0 ? (
                  <span>{stat.prefix}</span>
                ) : (
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={Number.isInteger(stat.value) ? 0 : 1}
                  />
                )}
              </span>
              <p className="text-[#1A1200]/70 text-sm leading-snug max-w-[160px]">{stat.label}</p>
            </article>
          ))}
        </div>

        {/* SDG badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <p className="w-full text-center text-xs text-[#1A1200]/40 font-mono uppercase tracking-widest mb-2">
            Aligned SDGs
          </p>
          {SDG_BADGES.map((sdg) => (
            <div
              key={sdg.number}
              className="fade-in-up flex items-center gap-1.5 rounded-lg px-3 py-1.5 bg-[#1A1200]/5 border border-[#1A1200]/10 text-xs text-[#1A1200]/70"
            >
              <span className="font-mono font-bold text-chilla-amber">SDG {sdg.number}</span>
              <span className="text-[#1A1200]/40">·</span>
              <span>{sdg.label}</span>
            </div>
          ))}
        </div>

        {/* DFI pill */}
        <div className="fade-in-up flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-chilla-accent text-chilla-accent text-sm font-medium">
            <span aria-hidden="true">✦</span>
            Eligible for DFI grant co-financing
          </span>
        </div>
      </div>
    </section>
  );
}
