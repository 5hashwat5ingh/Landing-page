import React, { useState } from "react";
import { motion } from "framer-motion";
import artistsData from "./Artist";

// ── Typography-aware variants ─────────────────────────────────────────────────
// Per web-typography skill: stagger aids scanning hierarchy
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
// ─────────────────────────────────────────────────────────────────────────────

// Triple for seamless infinite loop (-33.333% = one full copy)
const LOOP_ARTISTS = [...artistsData, ...artistsData, ...artistsData];

const links = {
  2025: "https://www.youtube.com/embed/ziAZfHGa270",
  2024: "https://www.youtube.com/embed/ziAZfHGa270",
  2023: "https://www.youtube.com/embed/5pzCzYzePjw",
};

// Strong drop-shadow so text stays readable over ANY background colour
const headingShadow = {
  textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.8)",
};
const bodyShadow = {
  textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)",
};

export default function ArtistsAbout() {
  const [selectedYear, setSelectedYear] = useState(2023);

  return (
    <div className="scene-content w-full h-full flex flex-col items-center justify-center px-4 overflow-hidden">
      <motion.div
        className="w-full flex flex-col items-center gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* ── ABOUT ABHYUDAYA ─────────────────────────────────────────────── */}
        {/* Display heading: Cinzel — enchanted Roman serif, strong personality */}
        <motion.h2
          variants={itemVariants}
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            letterSpacing: "0.2em",
            lineHeight: 1.2,
            ...headingShadow,
          }}
          className="text-[#FFD6A5] text-xl md:text-3xl font-bold text-center"
        >
          ABOUT ABHYUDAYA
        </motion.h2>

        {/* Body text: Inter — neutral workhorse, highly readable at small sizes */}
        {/* web-typography: 16px min, line-height 1.6, max-width 65ch */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            lineHeight: 1.65,
            maxWidth: "58ch",
            ...bodyShadow,
          }}
          className="text-white text-sm md:text-base text-center font-medium"
        >
          Abhyudaya is the annual Art, Cultural &amp; Literary fest of MMMUT,
          Gorakhpur — a vibrant confluence of creativity and passion where art
          breathes, culture thrives, and literature resonates. This year&apos;s theme:{" "}
          <em style={{ fontFamily: "'Cinzel', serif", color: "#FFD6A5" }}>
            An Enchanted Escapade
          </em>
          .
        </motion.p>

        {/* Stats: Inter bold with strong readable contrast */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { value: "50+", label: "Institutes" },
            { value: "4L+",  label: "Prize Pool" },
            { value: "45+",  label: "Events"     },
            { value: "45K+", label: "Footfall"   },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-lg px-4 py-2 text-center min-w-[72px]"
              style={{
                background: "linear-gradient(135deg, rgba(255,195,112,0.85), rgba(255,100,100,0.80))",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,220,160,0.3)",
              }}
            >
              <p
                className="text-lg font-bold text-white"
                style={{ fontFamily: "'Inter', sans-serif", ...headingShadow }}
              >
                {value}
              </p>
              <p
                className="text-[11px] font-medium text-white/90 uppercase tracking-widest"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Compact aftermovie year picker ──────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 flex-wrap justify-center">
          <span
            className="text-[#FFD6A5] text-[11px] font-bold tracking-[0.2em] mr-1"
            style={{ fontFamily: "'Inter', sans-serif", ...bodyShadow }}
          >
            AFTERMOVIE
          </span>
          {Object.keys(links).map((year) => {
            const isActive = selectedYear === Number(year);
            return (
              <button
                key={year}
                onClick={() => setSelectedYear(Number(year))}
                className="text-xs px-3 py-1 rounded transition-all"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  border: isActive ? "1px solid #FFD6A5" : "1px solid rgba(255,255,255,0.3)",
                  color: isActive ? "#FFD6A5" : "rgba(255,255,255,0.65)",
                  background: isActive ? "rgba(255,214,165,0.15)" : "transparent",
                  textShadow: "0 1px 6px rgba(0,0,0,0.8)",
                }}
              >
                {year}
              </button>
            );
          })}
          <a
            href={links[selectedYear]}
            target="_blank"
            rel="noreferrer"
            className="text-xs transition hover:opacity-100 opacity-75 ml-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#a5c8ff",
              textShadow: "0 1px 6px rgba(0,0,0,0.8)",
            }}
          >
            Watch ↗
          </a>
        </motion.div>

        {/* ── FEATURED ARTISTS divider ─────────────────────────────────────── */}
        {/* Cinzel again to match heading hierarchy */}
        <motion.div variants={itemVariants} className="w-full text-center">
          <h3
            className="text-[#FFD6A5] text-base md:text-lg font-semibold tracking-[0.18em]"
            style={{ fontFamily: "'Cinzel', Georgia, serif", ...headingShadow }}
          >
            FEATURED ARTISTS
          </h3>
          <div className="h-px w-20 mx-auto mt-1.5" style={{ background: "rgba(255,214,165,0.5)" }} />
        </motion.div>

        {/* ── Infinite horizontal marquee ───────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="artist-marquee flex gap-3 w-max">
            {LOOP_ARTISTS.map((artist, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-24 md:w-28 flex flex-col items-center group"
              >
                <div
                  className="w-full aspect-[3/4] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105"
                  style={{
                    border: "1px solid rgba(255,214,165,0.25)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  <img
                    src={artist.link}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Artist name: Inter, high-contrast with shadow */}
                <p
                  className="mt-1.5 text-[10px] md:text-xs text-center w-full px-1 truncate font-semibold"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#fff",
                    ...bodyShadow,
                  }}
                >
                  {artist.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}