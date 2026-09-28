"use client";

import { useEffect, useRef } from "react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const steps = sectionRef.current?.querySelectorAll(".step-card");
    if (!steps) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    steps.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      aria-labelledby="how-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-chilla-amber mb-3">
            How it works
          </p>
          <h2
            id="how-heading"
            className="font-display font-bold text-[#1A1200]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Installed in a day. Running for years.
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="timeline-line absolute top-10 left-[calc(10%+20px)] right-[calc(10%+20px)] h-0.5"
          />

          <ol className="relative grid grid-cols-5 gap-4" role="list">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <li
                key={step.number}
                className="step-card fade-in-up flex flex-col items-center text-center gap-4"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Number circle */}
                <div
                  className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-chilla-amber bg-white font-mono text-sm text-chilla-amber font-bold shrink-0"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#1A1200] text-base mb-1">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8A6600" }}>
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical connector */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-10 bottom-10 w-0.5 timeline-line"
            style={{
              background: "repeating-linear-gradient(to bottom, #FFB800 0, #FFB800 8px, transparent 8px, transparent 16px)",
            }}
          />

          <ol className="relative flex flex-col gap-10" role="list">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <li
                key={step.number}
                className="step-card fade-in-up flex gap-6 items-start"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div
                  className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-chilla-amber bg-white font-mono text-sm text-chilla-amber font-bold shrink-0"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-display font-bold text-[#1A1200] text-base mb-1">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8A6600" }}>
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
