import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ======= AnimatedDiv ======= */
const AnimatedDiv = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

/* ======= Aftermovies Component ======= */
export default function Aftermovies() {
  const [selectedYear, setSelectedYear] = useState(2023);

  const links = {
    2025: "https://www.youtube.com/watch?v=ziAZfHGa270",
    2024: "https://www.youtube.com/watch?v=ziAZfHGa270",
    2023: "https://www.youtube.com/watch?v=5pzCzYzePjw",
  };

  const stats = [
    { value: "50+", label: "INSTITUTES" },
    { value: "4L+", label: "PRIZE POOL" },
    { value: "45+", label: "EVENTS" },
    { value: "45K+", label: "FOOTFALL" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      
      {/* ABOUT ABHYUDAYA SECTION */}
      <div className="mb-16 flex flex-col items-center text-center">
        <AnimatedDiv>
          <h2 className="mb-6 bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-4xl font-karantina font-bold tracking-[4px] text-transparent drop-shadow-md sm:text-5xl md:text-6xl uppercase">
            ABOUT ABHYUDAYA
          </h2>
        </AnimatedDiv>
        
        <AnimatedDiv delay={0.2}>
          <p className="mx-auto max-w-5xl text-sm leading-7 text-slate-100/90 drop-shadow-md sm:text-base sm:leading-8 md:text-lg font-mooli">
            Abhyudaya is the annual Art, Cultural & Literary fest of MMMUT, Gorakhpur — 
            a vibrant confluence of creativity and passion where art breathes, culture
            thrives, and literature resonates. This year's theme: <span className="text-purple-300 font-semibold drop-shadow-md tracking-widest">AN ENCHANTED ESCAPADE.</span>
          </p>
        </AnimatedDiv>

        {/* STATS */}
        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map(({ value, label }, index) => (
            <AnimatedDiv key={label} delay={0.3 + index * 0.1}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/20 bg-linear-to-br from-orange-400/50 to-red-400/50 p-4 shadow-lg backdrop-blur-md transition-transform hover:scale-105 sm:p-5">
                <p className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl lg:text-4xl">
                  {value}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-widest text-white/90 drop-shadow-md sm:text-sm">
                  {label}
                </p>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>

      {/* AFTERMOVIE SECTION */}
      <div className="flex flex-col items-center">
        <AnimatedDiv delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <h3 className="bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-2xl font-karantina font-bold tracking-[3px] text-transparent drop-shadow-md sm:text-3xl uppercase">
              AFTERMOVIE
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {Object.keys(links).map((year) => {
                const isActive = selectedYear === Number(year);
                return (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setSelectedYear(Number(year))}
                    className={`shrink-0 rounded-md border px-4 py-1.5 text-sm font-semibold transition-all duration-300 sm:text-base ${
                      isActive
                        ? "border-white/40 bg-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] backdrop-blur-md"
                        : "border-white/10 bg-black/20 text-slate-300 backdrop-blur-sm hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
            
            <a 
              href={links[selectedYear]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white sm:text-base"
            >
              Watch <span className=" transition-transform group-hover:translate-x-1">›</span>
            </a>
          </div>
        </AnimatedDiv>
      </div>

    </div>
  );
}
