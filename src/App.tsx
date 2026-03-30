import React, { useState, useEffect } from "react";
import { useTranslation } from "./useTranslation";
import type { Locale } from "./i18n";
import logoImg from "./assets/logo.jpg";
import bgImg from "./assets/img_01.png";

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LOCALES: { code: Locale; flag: string; label: string }[] = [
  { code: "pt", flag: "🇧🇷", label: "PT" },
  { code: "es", flag: "🇦🇷", label: "ES" },
  { code: "en", flag: "🇺🇸", label: "EN" },
];

function PillButton({ href, icon, label }: { href: string; icon: React.ReactElement; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        width: "100%",
        maxWidth: 360,
        padding: "15px 24px",
        borderRadius: 999,
        border: "1.5px solid rgba(255,255,255,0.55)",
        background: hovered ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.25)",
        backdropFilter: "blur(12px)",
        color: "#fff",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: 700,
        letterSpacing: "0.02em",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        transition: "all 0.18s ease",
        cursor: "pointer",
      }}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function ShareButton({ label, copiedLabel }: { label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Viagens e Memórias",
      text: "Dois casais de moto explorando o mundo!",
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "10px 24px",
        borderRadius: 999,
        border: "1.5px solid rgba(255,255,255,0.3)",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        color: copied ? "#86efac" : "rgba(255,255,255,0.7)",
        fontSize: "0.82rem",
        fontWeight: 600,
        letterSpacing: "0.04em",
        cursor: "pointer",
        transition: "all 0.2s ease",
        marginTop: 24,
      }}
    >
      {copied ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}

export default function App() {
  const { t, locale, changeLocale } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "hidden",
      fontFamily: "'Inter', sans-serif",
      color: "#fff",
    }}>
      {/* Background image */}
      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: `center ${50 + scrollY * 0.25}%`,
        transform: `translateY(${scrollY * 0.15}px)`,
        willChange: "transform",
        zIndex: 0,
      }} />
      {/* Dark overlay */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.7) 100%)",
        zIndex: 1,
      }} />

      {/* Language switcher */}
      <div style={{ position: "fixed", top: 16, right: 16, zIndex: 100, display: "flex", gap: 6 }}>
        {LOCALES.map(({ code, flag, label }) => (
          <button
            key={code}
            onClick={() => changeLocale(code)}
            style={{
              display: "flex", alignItems: "center", gap: 4,
              padding: "5px 10px", borderRadius: 99,
              background: locale === code ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.3)",
              border: `1px solid ${locale === code ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)"}`,
              backdropFilter: "blur(8px)",
              color: "#fff",
              fontSize: "0.72rem", fontWeight: 600,
              cursor: "pointer", transition: "all 0.18s ease",
            }}
          >
            <span>{flag}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 420,
        padding: "60px 24px 48px",
        gap: 0,
      }}>
        {/* Avatar */}
        <div style={{
          width: 180, height: 180,
          borderRadius: "50%",
          padding: 3,
          background: "linear-gradient(135deg, #e8a838, #c0392b 50%, #e8a838)",
          boxShadow: "0 0 48px rgba(232,168,56,0.6)",
          marginBottom: 16,
          flexShrink: 0,
          transform: `translateY(${-scrollY * 0.18}px) scale(${1 + scrollY * 0.0003})`,
          willChange: "transform",
          transition: "box-shadow 0.2s ease",
        }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "#111" }}>
            <img src={logoImg} alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.7rem",
          fontWeight: 900,
          margin: "0 0 6px",
          textAlign: "center",
          textShadow: "0 2px 12px rgba(0,0,0,0.6)",
        }}>
          {t("heroTitle1")} {t("heroTitle2")}
        </h1>

        {/* Badge */}
        <p style={{
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.65)",
          marginBottom: 12,
          letterSpacing: "0.04em",
          textAlign: "center",
        }}>
          {t("badge")}
        </p>

        {/* Bio */}
        <p style={{
          fontSize: "0.88rem",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.65,
          textAlign: "center",
          marginBottom: 32,
          maxWidth: 320,
          textShadow: "0 1px 8px rgba(0,0,0,0.5)",
        }}>
          {t("heroDescription")}
        </p>

        {/* Link buttons */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%" }}>
          <PillButton
            href="https://youtube.com/@viagensememorias4a?si=Ul9klEuf5DxcnuVR"
            icon={<YouTubeIcon />}
            label={t("youtubeName")}
          />
          <PillButton
            href="https://www.instagram.com/viagensememorias_oficial?igsh=MTVjejNodXg4d2t0dQ=="
            icon={<InstagramIcon />}
            label={t("instagramName")}
          />
        </div>

        <ShareButton label={t("shareLabel")} copiedLabel={t("shareCopied")} />

        {/* Footer */}
        <p style={{
          marginTop: 40,
          fontSize: "0.62rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.3)",
          textAlign: "center",
        }}>
          {t("footerCopy")}
        </p>
      </div>
    </main>
  );
}
