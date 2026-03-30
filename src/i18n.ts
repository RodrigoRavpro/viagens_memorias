export type Locale = "pt" | "es" | "en";

export const translations = {
  pt: {
    badge: "Rafa & Deah | Sid & Paula",
    heroTitle1: "Viagens e",
    heroTitle2: "Memórias",
    heroDescription:
      "Dois casais unidos pela paixão por estradas, motos e a liberdade de explorar o mundo juntos. Cada quilômetro rodado é uma história nova.",
    aboutTitle: "Quem somos",
    aboutP1: "Somos {strong1} unidos pela mesma paixão: estradas, motos e a liberdade de explorar o mundo juntos.",
    aboutP1Strong: "dois casais de amigos",
    aboutP2: "Cada viagem é uma nova aventura — e queremos {strong2} dessa jornada com você.",
    aboutP2Strong: "compartilhar cada momento",
    channelsLabel: "Nossos canais",
    youtubeName: "Canal do YouTube",
    youtubeSub: "Vlogs de viagem & aventuras de moto",
    instagramName: "Instagram",
    instagramSub: "@viagensememorias_oficial",
    footerBrand: "Viagens e Memórias",
    footerCopy: "© 2026 · Viagens e Memórias · Todos os direitos reservados",
    shareLabel: "Compartilhar",
    shareCopied: "Link copiado!",
  },
  es: {
    badge: "Rafa & Deah · Sid & Paula",
    heroTitle1: "Viajes y",
    heroTitle2: "Memorias",
    heroDescription:
      "Dos parejas unidas por la pasión por los caminos, las motos y la libertad de explorar el mundo juntos. Cada kilómetro recorrido es una historia nueva.",
    aboutTitle: "Quiénes somos",
    aboutP1: "Somos {strong1} unidos por la misma pasión: caminos, motos y la libertad de explorar el mundo juntos.",
    aboutP1Strong: "dos parejas de amigos",
    aboutP2: "Cada viaje es una nueva aventura — y queremos {strong2} de este camino con vosotros.",
    aboutP2Strong: "compartir cada momento",
    channelsLabel: "Nuestros canales",
    youtubeName: "Canal de YouTube",
    youtubeSub: "Vlogs de viajes & aventuras en moto",
    instagramName: "Instagram",
    instagramSub: "@viagensememorias_oficial",
    footerBrand: "Viajes y Memorias",
    footerCopy: "© 2026 · Viagens e Memórias · Todos los derechos reservados",
    shareLabel: "Compartir",
    shareCopied: "¡Enlace copiado!",
  },
  en: {
    badge: "Rafa & Deah · Sid & Paula",
    heroTitle1: "Travels &",
    heroTitle2: "Memories",
    heroDescription:
      "Two couples united by a shared passion for open roads, motorcycles, and the freedom to explore the world together. Every mile ridden is a brand new story.",
    aboutTitle: "About us",
    aboutP1: "We are {strong1} brought together by the same passion: open roads, motorcycles, and the freedom to explore the world.",
    aboutP1Strong: "two couples of friends",
    aboutP2: "Every journey is a new adventure — and we want to {strong2} of this ride with you.",
    aboutP2Strong: "share every moment",
    channelsLabel: "Our channels",
    youtubeName: "YouTube Channel",
    youtubeSub: "Travel vlogs & motorcycle adventures",
    instagramName: "Instagram",
    instagramSub: "@viagensememorias_oficial",
    footerBrand: "Travels & Memories",
    footerCopy: "© 2026 · Viagens e Memórias · All rights reserved",
    shareLabel: "Share",
    shareCopied: "Link copied!",
  },
} satisfies Record<Locale, Record<string, string>>;

export type TranslationKeys = keyof typeof translations.pt;

export function detectLocale(): Locale {
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("en")) return "en";
  return "pt";
}
