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
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

/* ======= Aftermovies Component ======= */
export default function Aftermovies() {
  const [selectedYear, setSelectedYear] = useState(2023);

  const links = {
    2025: "https://www.youtube.com/embed/ziAZfHGa270",
    2024: "https://www.youtube.com/embed/ziAZfHGa270",
    2023: "https://www.youtube.com/embed/5pzCzYzePjw",
  };

  const stats = [
    { value: "50+", label: "INSTITUTES" },
    { value: "4L+", label: "PRIZE POOL" },
    { value: "45+", label: "EVENTS" },
    { value: "45K+", label: "FOOTFALL" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
        
        {/* LEFT SIDE: ABOUT ABHYUDAYA SECTION */}
        <div className="flex w-full flex-col text-center lg:w-1/2 lg:text-left">
          <AnimatedDiv>
            <h2 className="mb-6 bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-4xl font-karantina font-bold tracking-[4px] text-transparent drop-shadow-md sm:text-5xl md:text-6xl uppercase">
              ABOUT ABHYUDAYA
            </h2>
          </AnimatedDiv>
          
          <AnimatedDiv delay={0.2}>
            <p className="text-sm leading-7 text-slate-100/90 drop-shadow-md sm:text-base sm:leading-8 md:text-lg font-mooli">
              Abhyudaya is the annual Art, Cultural & Literary fest of MMMUT, Gorakhpur — 
              a vibrant confluence of creativity and passion where art breathes, culture
              thrives, and literature resonates. This year's theme: <span className="text-purple-300 font-semibold drop-shadow-md tracking-widest">AN ENCHANTED ESCAPADE.</span>
            </p>
          </AnimatedDiv>

          {/* STATS */}
          <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ value, label }, index) => (
              <AnimatedDiv key={label} delay={0.3 + index * 0.1}>
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/20 bg-linear-to-br from-orange-400/50 to-red-400/50 p-4 shadow-lg backdrop-blur-md transition-transform hover:scale-105 sm:p-5">
                  <p className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl">
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

        {/* RIGHT SIDE: AFTERMOVIE SECTION */}
        <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-end">
          <AnimatedDiv delay={0.2}>
            <div className="flex w-full flex-col gap-6">
              
              <div className="flex flex-col items-center lg:items-end gap-4">
                <h3 className="bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-2xl font-karantina font-bold tracking-[3px] text-transparent drop-shadow-md sm:text-3xl uppercase">
                  AFTERMOVIE
                </h3>
                
                <div className="flex flex-wrap justify-center lg:justify-end gap-3">
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
              </div>

              {/* VIDEO EMBED */}
              <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-white/20 bg-black shadow-[0_0_26px_rgba(255,255,255,0.16)] backdrop-blur-md">
                <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute left-3 top-3 z-20 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  Official Aftermovie {selectedYear}
                </p>

                <iframe
                  width="100%"
                  height="100%"
                  src={links[selectedYear]}
                  title="ABHYUDAYA Aftermovie"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

            </div>
          </AnimatedDiv>
        </div>

      </div>
    </div>
  );
}
