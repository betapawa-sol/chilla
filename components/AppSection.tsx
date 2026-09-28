"use client";

import { useEffect, useRef } from "react";
import { APP_FEATURES } from "@/lib/constants";

function PhoneMockup() {
  return (
    <div
      aria-label="Chilla° app mockup"
      role="img"
      className="relative mx-auto w-[260px] sm:w-[280px] rounded-[2.5rem] border border-chilla-amber/60 bg-[#0D0800] shadow-2xl overflow-hidden"
      style={{ aspectRatio: "9/19" }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[10px] text-white/40 font-mono">9:41</span>
        <div className="w-16 h-4 bg-[#1A1200] rounded-full" aria-hidden="true" />
        <span className="text-[10px] text-white/40 font-mono">●●●</span>
      </div>

      {/* App header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
        <span className="font-display font-bold text-white text-base">Chilla°</span>
        <span className="font-mono text-xs" style={{ color: "#4ADE80" }}>● Ibadan-004</span>
      </div>

      {/* Main temp card */}
      <div className="mx-3 mt-3 rounded-xl bg-white/5 p-4 border border-white/10">
        <p className="text-white/50 text-[10px] mb-1 font-mono uppercase tracking-wider">Current temperature</p>
        <p className="font-mono font-bold text-white" style={{ fontSize: "42px", lineHeight: 1 }}>4.2°C</p>
        <p className="text-[11px] mt-2 font-mono" style={{ color: "#4ADE80" }}>Target: 2–10°C &nbsp;✓ Normal</p>
      </div>

      {/* Battery + Solar mini cards */}
      <div className="flex gap-2 mx-3 mt-2">
        <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3">
          <p className="text-[9px] text-white/40 font-mono uppercase tracking-wider mb-1">Battery</p>
          <p className="text-chilla-amber font-mono font-bold text-sm">86%</p>
          <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full bg-chilla-amber" style={{ width: "86%" }} />
          </div>
        </div>
        <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3">
          <p className="text-[9px] text-white/40 font-mono uppercase tracking-wider mb-1">Solar</p>
          <p className="font-mono font-bold text-sm" style={{ color: "#4ADE80" }}>ON</p>
          <p className="text-[9px] text-white/30 font-mono mt-1">142 W input</p>
        </div>
      </div>

      {/* Inventory row */}
      <div className="mx-3 mt-2 rounded-lg px-3 py-2 bg-white/5 border border-white/10 flex items-center justify-between">
        <p className="text-white/60 text-[10px] font-mono">Inventory</p>
        <p className="text-chilla-amber text-[10px] font-mono font-bold">320 kg tomatoes · Ade Farms</p>
      </div>

      {/* Alert bar */}
      <div className="mx-3 mt-2 rounded-lg px-3 py-2 bg-red-900/30 border border-red-500/30 flex items-center gap-2">
        <span className="text-red-400 text-xs">⚠</span>
        <p className="text-red-300 text-[10px] font-mono">Door opened 14 times today</p>
      </div>

      {/* Payment row */}
      <div className="mx-3 mt-2 rounded-lg px-3 py-2 bg-white/5 border border-white/10 flex items-center justify-between">
        <p className="text-white/60 text-[10px] font-mono">Next payment</p>
        <p className="text-chilla-amber text-[11px] font-mono font-bold">₦4,200 · Jul 1</p>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0D0800] border-t border-white/10 flex justify-around py-3 px-2">
        {["Home", "Temp", "Pay", "Support"].map((label, i) => (
          <button
            key={label}
            aria-label={label}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-mono focus-visible:outline-none ${
              i === 0 ? "text-chilla-amber" : "text-white/30"
            }`}
          >
            <span className="text-sm" aria-hidden="true">
              {["⌂", "🌡", "₦", "☎"][i]}
            </span>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function AppSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".fade-in-up");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="app"
      ref={sectionRef}
      aria-labelledby="app-heading"
      className="bg-[#FFF8E8] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Phone mockup — 40% */}
          <div className="fade-in-up w-full lg:w-[40%] flex justify-center">
            <PhoneMockup />
          </div>

          {/* Feature list — 60% */}
          <div className="w-full lg:w-[60%]">
            <p className="fade-in-up text-[11px] font-medium tracking-[0.2em] uppercase text-chilla-amber mb-3">
              Chilla° Intelligence
            </p>
            <h2
              id="app-heading"
              className="fade-in-up font-display font-bold text-[#1A1200] mb-10"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Every kilogram, monitored. Every transaction, recorded.
            </h2>

            <div className="flex flex-col gap-8">
              {APP_FEATURES.map((feature, i) => (
                <div
                  key={feature.title}
                  className="fade-in-up flex gap-4 items-start"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="shrink-0 mt-1 w-1 h-8 rounded-full"
                    style={{ backgroundColor: "#FFB800" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display font-bold text-chilla-amber mb-1">{feature.title}</h3>
                    <p className="text-[#1A1200]/70 text-sm leading-relaxed">{feature.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download badge placeholder */}
            <div className="fade-in-up mt-10">
              <div
                className="inline-flex items-center gap-3 rounded-xl px-5 py-3 border border-[#1A1200]/20 bg-[#1A1200]/5 hover:bg-[#1A1200]/8 transition-colors cursor-pointer"
                role="link"
                aria-label="Download Chilla° on Android (coming soon)"
                tabIndex={0}
              >
                <span className="text-2xl" aria-hidden="true">▶</span>
                <div>
                  <p className="text-[10px] text-[#1A1200]/50 font-mono uppercase tracking-widest">Available soon</p>
                  <p className="text-[#1A1200] font-semibold text-sm">Chilla° app — coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
