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
    <div className="relative mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 mb-16">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-10"
      >
        <h2 className="bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-center font-karantina text-4xl font-bold tracking-[4px] text-transparent drop-shadow-md sm:text-5xl md:text-6xl uppercase">
          FEATURED ARTISTS
        </h2>
      </motion.div>

      <div className="relative w-full">
        {/* Navigation positioned top right of grid */}
        <div className="mb-6 flex justify-end gap-3 px-2">
            <button
              type="button"
              onClick={showPrev}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              aria-label="Previous artists"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNext}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              aria-label="Next artists"
            >
              ›
            </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {visibleArtists.map((artist, index) => (
            <motion.article
              key={`${artist.name}-${startIndex}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-black/20 backdrop-blur-sm shadow-xl"
            >
              <div className="aspect-3/4 w-full overflow-hidden">
                <img
                  src={artist.link}
                  alt={artist.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-md truncate">
                  {artist.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>

        {maxStartIndex > 0 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
              <button
                key={`artist-dot-${idx}`}
                type="button"
                onClick={() => setStartIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === startIndex
                    ? 'w-8 bg-purple-400'
                    : 'w-2 bg-white/30 hover:bg-white/60'
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