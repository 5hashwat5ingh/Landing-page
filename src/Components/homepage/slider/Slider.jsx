import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import artistsData from './Artist';

const EditorialArtistCard = ({ artistName, bio, imageUrl, tags, trackName }) => {
  return (
    <div className="relative flex-none w-[85vw] sm:w-[320px] h-[400px] sm:h-[480px] rounded-[2rem] overflow-hidden group snap-center cursor-pointer shadow-2xl">
      
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={artistName}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Vignette Overlays for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/90"></div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>

      {/* Top Tag */}
      {tags && tags.length > 0 && (
        <div className="absolute top-5 right-5">
          <span className="px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-white uppercase bg-black/20 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
            {tags[0]}
          </span>
        </div>
      )}

      {/* Floating Glass Content Panel */}
      <div className="absolute bottom-5 left-5 right-5 p-5 sm:p-6 rounded-[1.5rem] backdrop-blur-xl bg-white/10 border border-white/20 transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/30 group-hover:-translate-y-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        
        <div className="flex justify-between items-start mb-3 gap-3">
          <div className="flex-1">
            <p className="text-white/70 text-[10px] tracking-widest uppercase mb-1 drop-shadow-md font-semibold">{trackName}</p>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none drop-shadow-md">
              {artistName}
            </h3>
          </div>
          
          {/* Circular Play Button */}
          <button className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)] group/play">
            <svg 
              className="w-4 h-4 ml-0.5 transition-transform group-hover/play:scale-110" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-2 font-mooli drop-shadow-md">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default function ArtistGallery() {
  const containerRef = useRef(null);

  return (
    <div className="relative mx-auto w-full max-w-[1800px] py-8 mb-4 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-6 px-4 sm:px-6 md:px-12 lg:px-16 text-center"
      >
        <h1 className="bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-center font-karantina text-4xl font-bold tracking-[4px] text-transparent drop-shadow-md sm:text-5xl md:text-6xl uppercase">
          PREVIOUS ARTISTS
        </h1>
        <p className="mt-2 text-white/70 text-sm sm:text-base font-mooli tracking-wide max-w-xl mx-auto">
          Swipe to explore the roster of brilliant artists who have graced our stage.
        </p>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full overflow-x-auto pb-8 pt-2 px-6 sm:px-12 md:px-16 snap-x snap-mandatory flex gap-4 sm:gap-6 hide-scrollbar relative z-10" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {artistsData.map((artist, i) => (
          <motion.div 
            key={`${artist.name}-${i}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <EditorialArtistCard 
              artistName={artist.name}
              trackName="Featured Artist"
              bio="Experience the magic of past performances that brought the festival to life."
              imageUrl={artist.link}
              tags={['Live Performance']}
            />
          </motion.div>
        ))}
        {/* Spacer for the end of the scroll */}
        <div className="flex-none w-4 sm:w-12"></div>
      </motion.div>

      {/* CSS to hide scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}