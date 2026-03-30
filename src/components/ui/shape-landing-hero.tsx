"use client";

import React from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import logoImg from "../../assets/logo.jpg";

function ElegantShape({
  style: extraStyle,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  color = "rgba(99,102,241,0.15)",
}: {
  style?: React.CSSProperties;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number],
        opacity: { duration: 1.2 },
      }}
      style={{ position: "absolute", ...extraStyle }}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height, position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "9999px",
            background: `linear-gradient(90deg, ${color}, transparent)`,
            backdropFilter: "blur(2px)",
            border: "2px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 32px 0 rgba(255,255,255,0.1)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  description = "Crafting exceptional digital experiences through innovative design.",
  logo,
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
  logo?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
    }),
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        padding: "80px 0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#030303",
      }}
    >
      {/* Ambient gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(99,102,241,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(244,63,94,0.05) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating shapes */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} color="rgba(99,102,241,0.18)"
          style={{ left: "-10%", top: "20%" }} />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} color="rgba(244,63,94,0.18)"
          style={{ right: "0%", top: "75%" }} />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} color="rgba(139,92,246,0.18)"
          style={{ left: "10%", bottom: "10%" }} />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20} color="rgba(245,158,11,0.18)"
          style={{ right: "20%", top: "15%" }} />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} color="rgba(6,182,212,0.18)"
          style={{ left: "25%", top: "10%" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "700px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        {logo && (
          <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible"
            style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}
          >
            <div style={{
              width: 120, height: 120, borderRadius: "50%", padding: 3,
              background: "linear-gradient(135deg, #e8a838, #c0392b 50%, #e8a838)",
              boxShadow: "0 0 40px rgba(232,168,56,0.28), 0 0 80px rgba(232,168,56,0.10)",
            }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "#111" }}>
                <img src={logo ?? logoImg} alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          custom={1} variants={fadeUpVariants} initial="hidden" animate="visible"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "4px 14px", borderRadius: "9999px",
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "16px",
          }}
        >
          <Circle style={{ width: 8, height: 8, fill: "rgba(244,63,94,0.8)", stroke: "none" }} />
          <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em" }}>{badge}</span>
        </motion.div>

        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 5.5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            <span style={{ background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.82) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {title1}
            </span>
            <br />
            <span style={{ background: "linear-gradient(90deg, #a5b4fc 0%, rgba(255,255,255,0.92) 50%, #fda4af 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {title2}
            </span>
          </h1>
        </motion.div>

        <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
          <p style={{ fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)", color: "rgba(255,255,255,0.38)", lineHeight: 1.75, fontWeight: 300, letterSpacing: "0.02em", maxWidth: "480px", margin: "0 auto" }}>
            {description}
          </p>
        </motion.div>
      </div>

      {/* Top/bottom fade */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(3,3,3,0.8) 0%, transparent 25%, transparent 70%, rgba(3,3,3,1) 100%)", pointerEvents: "none" }} />
    </div>
  );
}

export { HeroGeometric };
