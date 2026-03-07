import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import artistsData from './Artist';

const getCardsPerView = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1280) return 2;
  return 3;
};

const ArtistGallery = () => {
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxStartIndex = Math.max(0, artistsData.length - cardsPerView);
  const visibleArtists = artistsData.slice(startIndex, startIndex + cardsPerView);
  const visibleStart = startIndex + 1;
  const visibleEnd = Math.min(startIndex + cardsPerView, artistsData.length);

  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, maxStartIndex));
  }, [maxStartIndex]);

  const showNext = () => {
    setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  };

  const showPrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  };

  return (
    <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6">
      <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full  blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-4 h-44 w-44 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-200/10 via-transparent to-sky-200/10" />

      <div className="relative rounded-3xl border border-amber-300/30 bg-slate-950/75 p-5 shadow-2xl backdrop-blur-xl md:p-8">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            

            <h2 className="bg-linear-to-r from-rose-200 via-amber-100 to-sky-200 bg-clip-text text-left font-karantina text-5xl tracking-[2px] text-transparent md:text-6xl">
              Previous Artists
            </h2>

            
            
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            
            

            <button
              type="button"
              onClick={showPrev}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-linear-to-r from-amber-200 to-rose-200 text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:from-rose-300 hover:to-amber-300"
              aria-label="Previous artists"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNext}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-linear-to-r from-amber-200 to-rose-200 text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:from-rose-300 hover:to-amber-300"
              aria-label="Next artists"
            >
              ›
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {visibleArtists.map((artist, index) => (
            <motion.article
              key={`${artist.name}-${startIndex}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5"
            >
              <div className="aspect-3/4 w-full overflow-hidden">
                <img
                  src={artist.link}
                  alt={artist.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm">
                  <h3 className="text-sm md:text-base font-semibold text-slate-100/90 truncate">
                    {artist.name}
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {maxStartIndex > 0 && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
              <button
                key={`artist-dot-${idx}`}
                type="button"
                onClick={() => setStartIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === startIndex
                    ? 'w-8 bg-amber-200'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to artist slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistGallery;