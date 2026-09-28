import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      aria-label="Chilla° hero"
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16"
    >
      {/* Decorative concentric circles — top right, CSS only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px]"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full border border-chilla-amber/10"
            style={{ transform: `scale(${i * 0.18 + 0.1})`, transformOrigin: "center" }}
          />
        ))}
        <span className="absolute inset-0 rounded-full bg-chilla-amber/5" style={{ transform: "scale(0.12)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8 py-16 lg:py-24">

          {/* Left column — 55% */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            {/* Eyebrow label */}
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-chilla-amber">
              Distributed cold-chain network · Africa
            </p>

            {/* H1 */}
            <h1 className="font-display font-bold text-[#1A1200] leading-[1.05]"
              style={{ fontSize: "clamp(48px, 7vw, 72px)" }}>
              Keep your harvest longer.<br />Sell when<br />the price is right.
            </h1>

            {/* Subheading */}
            <p className="text-[18px] leading-relaxed" style={{ color: "#8A6600" }}>
              Chilla° connects farmers, traders and food businesses to affordable, monitored cold storage across Africa.
            </p>

            {/* Segment badges */}
            <div className="flex flex-wrap gap-2 mt-1" role="list" aria-label="Market segments">
              <span role="listitem" className="inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-chilla-green text-white">
                Farmers
              </span>
              <span role="listitem" className="inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold tracking-wider uppercase text-white" style={{ backgroundColor: "#B07800" }}>
                Traders
              </span>
              <span role="listitem" className="inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-chilla-navy text-white">
                Businesses
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Button href="#contact" className="text-base px-7 py-3">
                Find cold storage
              </Button>
              <Button variant="ghost" href="#how-it-works" className="text-base px-7 py-3">
                Partner with Chilla° →
              </Button>
            </div>
          </div>

          {/* Right column — 45% product image placeholder */}
          <div className="w-full lg:w-[45%] flex justify-center">
            {/* TODO: replace with /public/chilla-network.jpg */}
            <div
              role="img"
              aria-label="Chilla° Network map placeholder"
              className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-3xl flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: "#2D5A3D" }}
            >
              {/* Grid texture overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 40px)",
                }}
              />
              {/* Label */}
              <div className="relative z-10 text-center px-6">
                <p className="font-mono text-white/50 text-sm mb-1">[ placeholder ]</p>
                <p className="font-display font-bold text-white text-xl">Chilla° Network map</p>
                <p className="font-mono text-chilla-amber text-sm mt-3">4 nodes · Ibadan</p>
              </div>
              {/* Amber corner accent */}
              <div aria-hidden="true" className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-chilla-amber rounded-tr-lg" />
              <div aria-hidden="true" className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-chilla-amber rounded-bl-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#1A1200]/30 text-xs tracking-widest uppercase">scroll</span>
        <span className="block w-px h-10 bg-gradient-to-b from-chilla-amber/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
