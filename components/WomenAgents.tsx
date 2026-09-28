"use client";

import { useEffect, useRef } from "react";
import { AGENTS } from "@/lib/constants";

export default function WomenAgents() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".fade-in-up");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="agents"
      ref={sectionRef}
      aria-labelledby="agents-heading"
      style={{ backgroundColor: "#F0F4FA" }}
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="fade-in-up text-[11px] font-medium tracking-[0.2em] uppercase text-chilla-amber mb-3">
            Local operators
          </p>
          <h2
            id="agents-heading"
            className="fade-in-up font-display font-bold text-[#1A1200] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Every Chilla° node is run by a trained local operator.
          </h2>
          <p className="fade-in-up text-[#1A1200]/60 text-base leading-relaxed">
            She manages the node, onboards customers, and earns a recurring monthly commission tied to utilisation.
          </p>
        </div>

        {/* Agent cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AGENTS.map((agent, i) => (
            <article
              key={agent.name}
              className="fade-in-up rounded-2xl overflow-hidden bg-white border border-[#1A1200]/10 flex flex-col"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Coloured header strip */}
              <div
                className="h-2 w-full"
                style={{ backgroundColor: agent.headerColor }}
                aria-hidden="true"
              />

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Avatar + name */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white text-base shrink-0"
                    style={{ backgroundColor: agent.headerColor }}
                    aria-hidden="true"
                  >
                    {agent.initials}
                  </div>
                  <div>
                    <p className="font-display font-bold text-[#1A1200] text-sm">{agent.name}</p>
                    <p className="text-[#1A1200]/50 text-xs">{agent.location}</p>
                  </div>
                </div>

                {/* Role badge */}
                <span
                  className="self-start rounded-md px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-white"
                  style={{ backgroundColor: agent.headerColor }}
                >
                  {agent.role}
                </span>

                {/* Segment label */}
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#1A1200]/30">{agent.segment}</p>

                {/* Quote */}
                <blockquote className="text-[#1A1200]/70 text-sm leading-relaxed border-l-2 pl-3" style={{ borderColor: agent.headerColor }}>
                  &ldquo;{agent.quote}&rdquo;
                </blockquote>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="fade-in-up mt-12 text-center text-sm text-[#1A1200]/40 max-w-lg mx-auto">
          We prioritise operators from the communities each node serves.
        </p>
      </div>
    </section>
  );
}
