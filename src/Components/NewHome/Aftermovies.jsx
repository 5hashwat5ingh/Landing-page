import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* Animation Wrapper */
const AnimatedDiv = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Aftermovies() {
  const [selectedYear, setSelectedYear] = useState(2023);

  const links = {
    2025: "https://www.youtube.com/embed/ziAZfHGa270",
    2024: "https://www.youtube.com/embed/ziAZfHGa270",
    2023: "https://www.youtube.com/embed/5pzCzYzePjw",
  };

  const stats = [
    { value: "50+", label: "Institutes" },
    { value: "4L+", label: "Prize Pool" },
    { value: "45+", label: "Events" },
    { value: "45K+", label: "Footfall" },
  ];

  return (
    <AnimatedDiv>
      <section className="relative mx-auto w-[95%] md:w-[80%] rounded-3xl border border-amber-300/30 bg-slate-950/75 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.65)]">

        {/* Background glow */}
        <div className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl" />

        {/* MAIN FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row">

          {/* LEFT SIDE (50%) AFTERMOVIES */}
          <div className="w-full md:w-[50%] p-[4%] border-b md:border-b-0 md:border-r border-white/10">

            {/* Heading */}
            <h2 className="mb-4 bg-gradient-to-r from-rose-200 via-amber-100 to-sky-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              AFTERMOVIES
            </h2>

            {/* Year Buttons */}
            <div className="mb-6 flex flex-wrap gap-3">
              {Object.keys(links).map((year) => {
                const active = selectedYear === Number(year);

                return (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(Number(year))}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-gradient-to-r from-amber-200 to-rose-200 text-gray-900"
                        : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>

            {/* Video */}
            <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden border border-white/10">
              <iframe
                src={links[selectedYear]}
                title="Aftermovie"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT SIDE (50%) ABOUT */}
          <div className="w-full md:w-[50%] p-[4%] flex flex-col justify-between">

            {/* Heading */}
            <h2 className="mb-4 bg-gradient-to-r from-rose-200 via-amber-100 to-sky-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              ABOUT ABHYUDAYA
            </h2>

            {/* Text */}
            <p className="mb-6 text-sm leading-7 text-slate-100/90 sm:text-base sm:leading-8">
              Abhyudaya, the annual Art, Cultural, and Literary fest of Madan
              Mohan Malaviya University of Technology, Gorakhpur, is a vibrant
              confluence of creativity and passion. It is where art breathes,
              culture thrives, and literature resonates.

              The festival brings together music, dance, literature, and
              artistic expression into a grand celebration of talent and
              imagination.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="rounded-xl border border-white/15 bg-gradient-to-br from-amber-200 to-rose-200 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-800">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </AnimatedDiv>
  );
}