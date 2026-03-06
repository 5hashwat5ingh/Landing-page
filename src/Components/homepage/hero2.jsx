import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Abhyudaya from "../../assets/Logo-images/Abhyudaya-combined.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ── Variants defined outside the component ──────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
// ────────────────────────────────────────────────────────────────────────────

export default function Hero2Section() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <div className="scene-content max-w-3xl mx-auto text-center px-6">
      {/* Inner motion container — GSAP handles the outer scene-content */}
      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex justify-center" />

          {/* Logo */}
          <motion.img
            variants={itemVariants}
            src={Abhyudaya}
            alt="Abhyudaya Logo"
            className="w-2/5 m-auto h-auto drop-shadow-[0_0_24px_rgba(135,206,235,0.5)]"
          />

          {/* Festival Title */}
          <div className="text-center mb-3">
            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-4xl mb-2"
              style={{ fontFamily: "TimBurton", color: "#000" }}
            >
              An Enchanted Escapade
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-3 text-sm tracking-tight leading-6 text-indigo-200/80 max-w-xl mx-auto"
          >
            Step into a vibrant celebration where India's timeless heritage meets modern style.{" "}
            <strong>Abhyudaya</strong>,{" "}
            <span className="uppercase">{"An Enigmatic Ensemble"}</span> is a
            kaleidoscopic fusion of tradition and innovation, where ancient
            rhythms, contemporary beats, and vibrant colors come alive. Join us
            on this mesmerizing journey of discovery and creativity!
          </motion.p>

          {/* Register Button */}
          {!user && (
            <Link to="/profile">
              <motion.div
                variants={itemVariants}
                className="mt-4 flex items-center justify-center gap-x-6 md:hidden flex"
              >
                <span className="rounded-full bg-gradient-to-r from-purple-300 to-indigo-300 px-6 py-3 text-md text-gray-900 font-semibold shadow-sm hover:from-purple-600 hover:to-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-gray-100 focus-visible:outline-indigo-400 transition-all duration-300 cursor-pointer">
                  Register Now
                </span>
              </motion.div>
            </Link>
          )}

          <div className="mt-16">
            <div className="relative">
              <div className="relative flex justify-center" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
