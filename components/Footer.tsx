import { NAV_LINKS } from "@/lib/constants";

const QUICK_LINKS = NAV_LINKS;
const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];
const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Twitter / X", href: "#", icon: "𝕏" },
  { label: "WhatsApp Business", href: "#", icon: "W" },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{ backgroundColor: "#120D00" }}
      className="border-t-2 border-chilla-amber/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <a href="/" aria-label="Chilla° homepage" className="text-[22px] font-medium">
              <span style={{ color: "#FFB800" }}>Ch</span>
              <span className="text-white">illa°</span>
            </a>
            <p className="text-white/50 text-sm italic">Stay cold. Stay open.</p>
            <p className="text-white/30 text-xs">Lagos, Nigeria</p>
          </div>

          {/* Col 2: Quick links */}
          <nav aria-label="Quick links">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Navigation</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-chilla-amber rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Legal */}
          <nav aria-label="Legal">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Legal</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-chilla-amber rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Social */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Connect</p>
            <ul className="flex flex-col gap-3" role="list">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    className="inline-flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-chilla-amber rounded"
                  >
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white/10 text-xs font-bold"
                      aria-hidden="true"
                    >
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © 2025 Chilla° by ReadyWatts · Lagos, Nigeria
          </p>
          <p className="text-white/20 text-xs">
            chilla.africa
          </p>
        </div>
      </div>
    </footer>
  );
}
