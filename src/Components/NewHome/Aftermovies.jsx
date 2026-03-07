
import { useState, useEffect, useRef } from "react";
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
  const [countKey, setCountKey] = useState(0);

  const links = {
    2025: "https://www.youtube.com/embed/ziAZfHGa270",
    2024: "https://www.youtube.com/embed/ziAZfHGa270",
    2023: "https://www.youtube.com/embed/5pzCzYzePjw",
  };

  const handleClick = () => {
    window.open(links[selectedYear], "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountKey((prev) => prev + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedDiv>
      {/* === Outer Black Shadow Box === */}
      <div className="relative mx-auto w-[95%] md:w-[90%] rounded-2xl border border-white/20 bg-black/70 shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-lg overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-start gap-8 px-6 md:px-12 lg:px-16 py-12 text-white">
              {/* LEFT SIDE */}
              <div className="lg:w-1/2 flex flex-col items-center lg:items-end border-t-0 lg:border-r-4 border-white/40 pr-0 lg:pr-8">
              <p className="text-[#FF8888] text-3xl md:text-4xl font-karantina font-bold tracking-[2px] mb-6">
                AFTERMOVIES
              </p>

              {/* Year Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
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
              </div>

              {/* Video Frame */}
              <div className="w-full background-black aspect-video rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-4">
                <iframe
                width="100%"
                height="100%"
                src={links[selectedYear]}
                title="ABHYUDAYA Aftermovie"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
              </div>

              
              </div>

              {/* RIGHT SIDE */}
              <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-[#FF8888] text-3xl md:text-4xl font-karantina font-bold tracking-[2px] mb-6">
                ABOUT ABHYUDAYA
              </p>

              <p className="text-white/90 text-[1.1rem] leading-8 font-mooli mb-8">
                Abhyudaya, the annual Art, Cultural, and Literary fest of Madan Mohan Malaviya University of Technology, Gorakhpur, is a vibrant confluence of creativity and passion. It is where art breathes, culture thrives, and literature resonates, crafting unforgettable experiences.
        This year, Abhyudaya '25 unfold it's theme "An Enigmatic Ensemble", a fusion of colors, rhythms, and stories. This multi-faceted carnival of boundless energy and artistic brilliance invites you to immerse yourself in a spectacle of music, dance, and literature, crafting moments that will echo far beyond the final curtain call.
              </p>

              {/* Stats in Gradient Boxes */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8">
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
                  <p className="text-2xl md:text-3xl font-semibold text-black">{value}</p>
                  <p className="text-sm md:text-base text-black/80 font-medium">{label}</p>
                </div>
                ))}
              </div>
              </div>
            </div>
      </div>
    </AnimatedDiv>
  );
}
