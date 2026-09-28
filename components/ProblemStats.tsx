"use client";

import { useEffect, useRef } from "react";
import CountUp from "@/components/ui/CountUp";
import { PROBLEM_STATS } from "@/lib/constants";

export default function ProblemStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".fade-in-up");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Cold chain problem statistics"
      style={{ backgroundColor: "#FFF8E8" }}
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1A1200]/10 divide-y lg:divide-y-0">
          {PROBLEM_STATS.map((stat, i) => (
            <article
              key={i}
              className="fade-in-up flex flex-col items-center text-center px-6 py-8 lg:py-4 gap-2"
            >
              <span
                className="font-mono font-bold leading-none"
                style={{ fontSize: "clamp(36px, 5vw, 48px)", color: "#FFB800" }}
                aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix}`}
              >
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix}
                  decimals={0}
                />
              </span>
              <p className="text-[#1A1200] font-medium text-sm leading-snug">{stat.label}</p>
              <p className="text-xs leading-snug" style={{ color: "#8A6600" }}>
                {stat.sublabel}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
