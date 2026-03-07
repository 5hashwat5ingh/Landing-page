
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
      {/* === Outer Black Shadow Box === */}
      <div className="relative mx-auto w-[95%] overflow-hidden rounded-2xl border border-white/20 bg-black/70 shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-lg sm:w-[94%] lg:w-[90%]">
        <div className="flex flex-col gap-8 px-4 py-8 text-white sm:px-6 sm:py-10 md:px-10 lg:flex-row lg:items-start lg:gap-10 lg:px-14 lg:py-12">
          {/* LEFT SIDE */}
          <div className="flex w-full flex-col items-center border-b border-white/30 pb-8 lg:w-1/2 lg:items-end lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <p className="mb-6 text-3xl font-karantina font-bold tracking-[2px] text-[#FF8888] sm:text-4xl">
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
                    className={`shrink-0 rounded-md border px-4 py-2 text-sm shadow-md transition-all sm:text-base md:text-lg ${
                      isActive
                        ? "-translate-y-0.75 border-[#FF8888] text-white shadow-[#ff8888]"
                        : "border-white hover:-translate-y-1"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>

            {/* Video Frame */}
            <div className="mb-4 aspect-video w-full max-w-190 overflow-hidden rounded-lg bg-black shadow-[0_0_20px_rgba(255,255,255,0.1)]">
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
            <p className="mb-6 text-3xl font-karantina font-bold tracking-[2px] text-[#FF8888] sm:text-4xl">
              ABOUT ABHYUDAYA
            </p>

            <p className="mb-8 text-sm leading-7 text-white/90 sm:text-base sm:leading-8 md:text-[1.05rem] font-mooli">
              Abhyudaya, the annual Art, Cultural, and Literary fest of Madan
              Mohan Malaviya University of Technology, Gorakhpur, is a vibrant
              confluence of creativity and passion. It is where art breathes,
              culture thrives, and literature resonates, crafting unforgettable
              experiences. This year, Abhyudaya '25 unfold it's theme "An
              Enigmatic Ensemble", a fusion of colors, rhythms, and stories.
              This multi-faceted carnival of boundless energy and artistic
              brilliance invites you to immerse yourself in a spectacle of
              music, dance, and literature, crafting moments that will echo far
              beyond the final curtain call.
            </p>

            {/* Stats in Gradient Boxes */}
            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:max-w-130">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-lg bg-linear-to-br from-[#FFC370] to-[#FF8888] p-3 text-center sm:p-4 md:p-5"
                >
                  <p className="text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                    {value}
                  </p>
                  <p className="text-xs font-medium text-black/80 sm:text-sm md:text-base">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}
