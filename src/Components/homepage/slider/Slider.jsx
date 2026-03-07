import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import artistsData from './Artist';

const getCardsPerView = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
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
    <div className="w-full max-w-5xl">
      <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF8888] text-left">
            Previous Artists
          </h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={showPrev}
              className="h-9 w-9 rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-white hover:text-black"
              aria-label="Previous artists"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNext}
              className="h-9 w-9 rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-white hover:text-black"
              aria-label="Next artists"
            >
              ›
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {visibleArtists.map((artist, index) => (
            <motion.article
              key={`${artist.name}-${startIndex}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/30"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={artist.link}
                  alt={artist.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="rounded-lg border border-white/10 bg-black/65 px-3 py-2 backdrop-blur-sm">
                  <h3 className="text-sm md:text-base font-semibold text-white truncate">
                    {artist.name}
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-4 text-right text-xs md:text-sm text-gray-300">
          {startIndex + 1}-{Math.min(startIndex + cardsPerView, artistsData.length)} of {artistsData.length}
        </p>
      </div>
    </div>
  );
};

export default ArtistGallery;