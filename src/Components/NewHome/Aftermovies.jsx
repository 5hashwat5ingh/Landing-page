
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ======= AnimatedDiv ======= */
const AnimatedDiv = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

/* ======= AftermoviesMob Component ======= */
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
      <div className="relative mx-auto w-[95%] overflow-hidden rounded-3xl border border-amber-300/30 bg-slate-950/75 shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:w-[94%] lg:w-[90%]">
        <div className="pointer-events-none absolute -left-14 top-6 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-14 bottom-8 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-200/10 via-transparent to-sky-200/10" />

        <div className="relative flex flex-col gap-8 px-4 py-8 text-slate-100/90 sm:px-6 sm:py-10 md:px-10 lg:flex-row lg:items-start lg:gap-12 lg:px-14 lg:py-12">
          {/* LEFT SIDE */}
          <div className="flex w-full flex-col items-center border-b border-white/15 pb-8 lg:w-1/2 lg:items-end lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <p className="mb-2 inline-flex rounded-full border border-amber-100/40 bg-amber-100/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-100">
              Festival Rewind
            </p>

            <p className="mb-2 bg-linear-to-r from-rose-200 via-amber-100 to-sky-200 bg-clip-text text-4xl font-karantina font-bold tracking-[3px] text-transparent sm:text-5xl">
              AFTERMOVIES
            </p>

           

            {/* Year Buttons */}
            <div className="mb-6 flex w-full max-w-full gap-3 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center lg:justify-end">
              {Object.keys(links).map((year) => {
                const isActive = selectedYear === Number(year);
                return (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setSelectedYear(Number(year))}
                    className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold shadow-md transition-all duration-300 sm:text-base md:text-lg ${
                      isActive
                        ? "-translate-y-1 border-white/15 bg-linear-to-r from-amber-200 to-rose-200 text-gray-900 shadow-[0_8px_24px_rgba(252,211,77,0.35)] hover:from-rose-300 hover:to-amber-300"
                        : "border-white/15 bg-white/5 text-slate-100/90 hover:-translate-y-1 hover:border-amber-100/70 hover:bg-white/10"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>

            {/* Video Frame */}
            <div className="group relative mb-4 aspect-video w-full max-w-190 overflow-hidden rounded-xl border border-white/15 bg-black shadow-[0_0_26px_rgba(255,255,255,0.16)]">
              <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute left-3 top-3 z-20 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-amber-100 backdrop-blur-sm">
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

          {/* RIGHT SIDE */}
          <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
            

            <p className="mb-5 bg-linear-to-r from-rose-200 via-amber-100 to-sky-200 bg-clip-text text-4xl font-karantina font-bold tracking-[3px] text-transparent sm:text-5xl">
              ABOUT ABHYUDAYA
            </p>

            <p className="mb-6 text-sm leading-7 text-slate-100/90 sm:text-base sm:leading-8 md:text-[1.05rem] font-mooli">
              Abhyudaya, the annual Art, Cultural, and Literary fest of Madan
              Mohan Malaviya University of Technology, Gorakhpur, is a vibrant
              confluence of creativity and passion. It is where art breathes,
              culture thrives, and literature resonates, crafting unforgettable
              experiences. This year, Abhyudaya '25 unfolds its theme "An
              Enigmatic Ensemble", a fusion of colors, rhythms, and stories.
              This multi-faceted carnival of boundless energy and artistic
              brilliance invites you to immerse yourself in a spectacle of
              music, dance, and literature, crafting moments that will echo far
              beyond the final curtain call.
            </p>

            <div className="mb-8 w-full rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
              <p className="font-mooli text-sm italic text-amber-100/95 sm:text-base">
                "Where rhythm meets imagination, and stories become experiences."
              </p>
            </div>

            {/* Stats in Gradient Boxes */}
            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:max-w-130">
              {stats.map(({ value, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-xl border border-white/15 bg-linear-to-br from-amber-200 to-rose-200 p-3 text-center shadow-md transition-all duration-300 hover:from-rose-300 hover:to-amber-300 sm:p-4 md:p-5"
                >
                  <p className="text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl">
                    {value}
                  </p>
                  <p className="text-xs font-medium text-gray-800 sm:text-sm md:text-base">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}
