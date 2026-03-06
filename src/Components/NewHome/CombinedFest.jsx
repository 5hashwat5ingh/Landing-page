import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// ── Shared typography helpers (web-typography skill) ─────────────────────────
const hs = { textShadow: "0 2px 14px rgba(0,0,0,0.95), 0 0 32px rgba(0,0,0,0.8)" };
const bs = { textShadow: "0 1px 8px rgba(0,0,0,0.9)" };
const CINZEL = "'Cinzel', Georgia, serif";
const INTER  = "'Inter', system-ui, sans-serif";
const TIM    = "'TimBurton', serif";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

// ── Gallery images ────────────────────────────────────────────────────────────
const GALLERY_IMGS = [
  { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop", alt: "Cultural Performance" },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop", alt: "Concert Stage" },
  { src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop", alt: "Festival Crowd" },
  { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop", alt: "Dance Performance" },
  { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop", alt: "Music Event" },
  { src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop", alt: "Live Concert" },
];

// ── Merch data ────────────────────────────────────────────────────────────────
const TEES = {
  black: { title: "Black T-Shirt", img: "https://i.postimg.cc/MT9wsgV4/black-tee.png" },
  white: { title: "White T-Shirt", img: "https://i.postimg.cc/bJy89qDk/white-tee.png" },
};

export default function CombinedFest() {
  const [selectedTee, setSelectedTee] = useState("black");

  return (
    <div className="scene-content w-full h-full overflow-y-auto flex flex-col items-center justify-start px-4 py-6 gap-8">

      {/* ══ GALLERY ══════════════════════════════════════════════════════════ */}
      <motion.section
        className="w-full max-w-4xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2
          variants={item}
          style={{ fontFamily: CINZEL, letterSpacing: "0.18em", ...hs }}
          className="text-[#c084fc] text-lg md:text-2xl font-bold text-center mb-4"
        >
          GALLERY
        </motion.h2>

        {/* Compact 3-column photo strip */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {GALLERY_IMGS.map((img, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.04 }}
              className="overflow-hidden rounded-xl"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[90px] md:h-[130px] object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ══ MERCHANDISE ══════════════════════════════════════════════════════ */}
      <motion.section
        className="w-full max-w-4xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2
          variants={item}
          style={{ fontFamily: CINZEL, letterSpacing: "0.18em", ...hs }}
          className="text-[#c084fc] text-lg md:text-2xl font-bold text-center mb-1"
        >
          MERCHANDISE
        </motion.h2>
        <motion.p
          variants={item}
          style={{ fontFamily: INTER, ...bs }}
          className="text-white/70 text-xs text-center mb-4 tracking-widest uppercase"
        >
          ₹250/- · First 50 orders
        </motion.p>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {["black", "white"].map((color) => (
            <motion.div
              key={color}
              variants={item}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedTee(color)}
              className="cursor-pointer rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: selectedTee === color
                  ? "1.5px solid rgba(192,132,252,0.7)"
                  : "1px solid rgba(255,255,255,0.1)",
                background: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(8px)",
                boxShadow: selectedTee === color
                  ? "0 0 20px rgba(192,132,252,0.25)"
                  : "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={TEES[color].img}
                alt={TEES[color].title}
                className="w-full h-[120px] md:h-[170px] object-cover"
                loading="lazy"
              />
              <p
                className="text-center py-2 text-sm font-semibold"
                style={{ fontFamily: INTER, color: "#fff", ...bs }}
              >
                {TEES[color].title}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="flex justify-center mt-3">
          <a
            href="https://forms.gle/PDNFEp92rBMiLqxQ8"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold px-8 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: INTER,
              background: "rgba(192,132,252,0.12)",
              border: "1px solid rgba(192,132,252,0.5)",
              color: "#c084fc",
              backdropFilter: "blur(6px)",
              ...bs,
            }}
          >
            Buy Now →
          </a>
        </motion.div>
      </motion.section>

      {/* ══ JOIN THE COMMUNITY ════════════════════════════════════════════════ */}
      <motion.section
        className="w-full max-w-4xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2
          variants={item}
          style={{ fontFamily: CINZEL, letterSpacing: "0.16em", ...hs }}
          className="text-[#c084fc] text-lg md:text-2xl font-bold text-center mb-2"
        >
          JOIN THE COMMUNITY
        </motion.h2>

        <motion.p
          variants={item}
          style={{ fontFamily: INTER, lineHeight: 1.65, maxWidth: "52ch", margin: "0 auto", ...bs }}
          className="text-white text-sm text-center mb-4"
        >
          Step into{" "}
          {/* "An Enchanted Escapade" — TimBurton font, black colour as requested */}
          <span style={{ fontFamily: TIM, color: "#000", textShadow: "0 1px 6px rgba(255,255,255,0.35)" }}>
            An Enchanted Escapade
          </span>{" "}
          — the magical journey of Abhyudaya. Stay tuned for updates, event
          announcements, and exclusive behind-the-scenes moments.{" "}
          <strong style={{ display: "block", marginTop: 6 }}>Your escapade begins here!</strong>
        </motion.p>

        <motion.div variants={item} className="flex justify-center">
          <a
            href="https://whatsapp.com/channel/0029VaGSSJQGJP8AijZRD62j"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: INTER,
                border: "1.5px solid rgba(255,100,120,0.7)",
                color: "#ff6478",
                background: "rgba(255,100,120,0.08)",
                backdropFilter: "blur(6px)",
                ...bs,
              }}
            >
              <FaWhatsapp className="text-lg" />
              Join WhatsApp Channel
            </button>
          </a>
        </motion.div>
      </motion.section>

    </div>
  );
}
