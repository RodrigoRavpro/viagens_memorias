import { HeroGeometric } from "./components/ui/shape-landing-hero";

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const links = [
  {
    href: "https://youtube.com/@viagensememorias4a?si=Ul9klEuf5DxcnuVR",
    label: "Canal do YouTube",
    sub: "Vlogs de viagem & aventuras de moto",
    Icon: YouTubeIcon,
    hoverBorder: "hover:border-red-500/60",
    hoverGlow: "hover:shadow-[0_12px_40px_rgba(255,0,0,0.12)]",
    iconColor: "text-red-400",
  },
  {
    href: "https://www.instagram.com/viagensememorias_oficial?igsh=MTVjejNodXg4d2t0dQ==",
    label: "Instagram",
    sub: "@viagensememorias_oficial",
    Icon: InstagramIcon,
    hoverBorder: "hover:border-pink-500/60",
    hoverGlow: "hover:shadow-[0_12px_40px_rgba(225,48,108,0.12)]",
    iconColor: "text-pink-400",
  },
];

export default function App() {
  return (
    <main className="bg-[#030303]">
      <HeroGeometric
        badge="Rafa & Deah · Sid e Paula"
        title1="Viagens e"
        title2="Memórias"
        description="Dois casais unidos pela paixão por estradas, motos e a liberdade de explorar o mundo juntos. Cada quilômetro rodado é uma história nova."
      />

      <section className="relative px-5 pb-24 flex flex-col items-center -mt-16 z-10">
        {/* Avatar */}
        <div className="mb-8">
          <div
            className="w-36 h-36 rounded-full p-[3px]"
            style={{ background: "linear-gradient(135deg, #e8a838, #c0392b 50%, #e8a838)" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#111]">
              <img
                src="/assets/logo.jpg"
                alt="Viagens e Memórias"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* About card */}
        <div className="w-full max-w-sm mb-10 relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          <div className="px-6 py-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
                <CompassIcon />
              </div>
              <h2 className="text-sm font-semibold text-white/90 tracking-wide">Quem somos</h2>
            </div>
            <p className="text-sm text-white/45 leading-relaxed">
              Somos <span className="text-white/75 font-medium">dois casais de amigos</span> unidos pela mesma paixão: estradas, motos e a liberdade de explorar o mundo juntos.
            </p>
            <p className="text-sm text-white/45 leading-relaxed mt-2.5">
              Cada viagem é uma nova aventura — e queremos <span className="text-white/75 font-medium">compartilhar cada momento</span> dessa jornada com você.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-sm mb-5">
          <div className="flex-1 h-px bg-white/[0.07]" />
          <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/25 whitespace-nowrap">
            Nossos canais
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </div>

        {/* Links */}
        <div className="w-full max-w-sm flex flex-col gap-3 mb-16">
          {links.map(({ href, label, sub, Icon, hoverBorder, hoverGlow, iconColor }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl px-4 py-3.5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.05] ${hoverBorder} ${hoverGlow}`}
            >
              <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] flex-shrink-0 transition-colors duration-200 ${iconColor}`}>
                <Icon />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold leading-tight">{label}</p>
                <p className="text-xs text-white/35 mt-0.5">{sub}</p>
              </div>
              <div className="text-white/20 group-hover:text-white/55 group-hover:translate-x-1 transition-all duration-200">
                <ArrowRightIcon />
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center border-t border-white/[0.06] pt-7 w-full max-w-sm">
          <p className="font-serif italic text-white/25 text-sm mb-1">Viagens e Memórias</p>
          <p className="text-[0.62rem] uppercase tracking-widest text-white/15">
            © 2026 · Rafa & Deah · Todos os direitos reservados
          </p>
        </footer>
      </section>
    </main>
  );
}
