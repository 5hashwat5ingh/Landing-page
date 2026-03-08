import React from "react";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import Abhyudaya from "../../assets/Logo-images/Abhyudaya-combined.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero2Section() {
  const user = useSelector((state) => state.user);

  return (
    <section className="scene-content relative mx-auto my-6 max-w-6xl p-6 md:p-10">

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        {/* Festival identity */}
        <img
          src={Abhyudaya}
          alt="Abhyudaya logo"
          className="mx-auto mb-2 h-auto w-4/5 max-w-xl animate-ease-out drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] md:w-3/5"
        />

        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6 font-enchanted text-5xl tracking-[4px] text-zinc-900 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          AN ENCHANTED ESCAPADE
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-4xl text-base leading-7 text-slate-100/90 drop-shadow-md sm:text-lg sm:leading-8 font-mooli"
        >
          Step into a vibrant celebration where India's timeless heritage meets modern style.
          <br />
          <br />
          Abhyudaya, <span className="font-semibold text-purple-300">AN ENIGMATIC ENSEMBLE</span> is a kaleidoscopic fusion of tradition and
          innovation, where ancient rhythms, contemporary beats, and vibrant colors come alive.
          <br />
          <br />
          Join us on this mesmerizing journey of discovery and creativity!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-2"
        >
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-amber-100">
              <CalendarDays className="h-4 w-4" />
              Dates
            </p>
            <p className="text-sm text-slate-100/90 sm:text-base">
              4 April - 6 April, 2025
            </p>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-amber-100">
              <MapPin className="h-4 w-4" />
              Venue
            </p>
            <p className="text-sm text-slate-100/90 sm:text-base">
              MMMUT, Gorakhpur
            </p>
          </div>
        </motion.div>

        {!user && (
          <div className="mt-8 flex items-center justify-center">
            <Link
              to="/profile"
              className="rounded-full bg-linear-to-r from-amber-200 to-rose-200 px-7 py-3 text-sm font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:from-rose-300 hover:to-amber-300 sm:text-base"
            >
              Register Now
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
}
