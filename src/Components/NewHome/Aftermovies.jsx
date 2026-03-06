import { useState, useEffect } from "react";
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

export default function Aftermovies() {
  const [selectedYear, setSelectedYear] = useState(2023);

  const links = {
    2025: "https://www.youtube.com/embed/ziAZfHGa270",
    2024: "https://www.youtube.com/embed/ziAZfHGa270",
    2023: "https://www.youtube.com/embed/5pzCzYzePjw",
  };

  useEffect(() => {
    const interval = setInterval(() => {}, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-[95%] md:w-[90%] rounded-2xl border border-white/20 bg-black/70 shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-lg overflow-hidden">
      <motion.div
        className="flex flex-col-reverse lg:flex-row justify-center items-start gap-8 px-6 md:px-12 lg:px-16 py-12 text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end border-t-0 lg:border-r-4 border-white/40 pr-0 lg:pr-8">
          <motion.p
            variants={itemVariants}
            className="text-[#FF8888] text-3xl md:text-4xl font-karantina font-bold tracking-[2px] mb-6"
          >
            AFTERMOVIES
          </motion.p>

          {/* Year Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {Object.keys(links).map((year) => {
              const isActive = selectedYear === Number(year);
              return (
                <div
                  key={year}
                  onClick={() => setSelectedYear(Number(year))}
                  className={`cursor-pointer px-4 py-2 rounded-md border transition-all text-base md:text-lg shadow-md ${
                    isActive
                      ? "border-[#FF8888] shadow-[#ff8888] text-white translate-y-[-3px]"
                      : "border-white hover:-translate-y-1"
                  }`}
                >
                  {year}
                </div>
              );
            })}
          </motion.div>

          {/* Video Frame */}
          <motion.div
            variants={itemVariants}
            className="w-full aspect-video rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-4"
          >
            <iframe
              width="100%"
              height="100%"
              src={links[selectedYear]}
              title="ABHYUDAYA Aftermovie"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.p
            variants={itemVariants}
            className="text-[#FF8888] text-3xl md:text-4xl font-karantina font-bold tracking-[2px] mb-6"
          >
            ABOUT ABHYUDAYA
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-white/90 text-[1.1rem] leading-8 font-mooli mb-8"
          >
            Abhyudaya, the annual Art, Cultural, and Literary fest of Madan
            Mohan Malaviya University of Technology, Gorakhpur, is a vibrant
            confluence of creativity and passion. It is where art breathes,
            culture thrives, and literature resonates, crafting unforgettable
            experiences. This year, Abhyudaya &apos;25 unfolds its theme
            &ldquo;An Enigmatic Ensemble&rdquo;, a fusion of colors, rhythms,
            and stories.
          </motion.p>

          {/* Stats in Gradient Boxes */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8"
          >
            {[
              { value: "50+", label: "Institutes" },
              { value: "4L+", label: "Prize Pool" },
              { value: "45+", label: "Events" },
              { value: "45K+", label: "Footfall" },
            ].map(({ value, label }, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#FFC370] to-[#FF8888] rounded-lg p-4 md:p-6 text-center min-w-[120px]"
              >
                <p className="text-2xl md:text-3xl font-semibold text-black">
                  {value}
                </p>
                <p className="text-sm md:text-base text-black/80 font-medium">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
