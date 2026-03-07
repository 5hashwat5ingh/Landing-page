/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";

const Gallery = () => {
  // Static gallery items with placeholder images
  const galleryItems = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
      alt: "Cultural Performance",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
      alt: "Concert Stage",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
      alt: "Festival Crowd",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
      alt: "Dance Performance",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
      alt: "Music Event",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
      alt: "Live Concert",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1516450360452-9312f5e2fe67?w=800&h=600&fit=crop",
      alt: "Festival Lights",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      alt: "Orchestra Performance",
    },
  ];

  const [img1, img2, img3, img4, img5, img6, img7, img8] = galleryItems;

  return (
    <div title="Gallery" className="flex flex-col items-center">
      <div className="p-6 rounded-lg max-w-7xl mx-5 mb-[5%] justify-center w-full pt-0">
        <div className="mt-8 px-4 grid grid-cols-2 gap-3 lg:gap-10 mb-8">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-3 lg:gap-10">
            <div className="w-full">
              <img
                className="w-full h-[180px] md:h-[400px] rounded-[16px] border-2 border-purple-400/30 overflow-hidden object-cover bg-white/5 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                src={img1.imageSrc}
                alt={img1.alt}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 lg:gap-5">
              <img
                className="w-full h-[154px] rounded-[16px] border-2 border-purple-400/30 overflow-hidden object-cover bg-white/5 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                src={img2.imageSrc}
                alt={img2.alt}
              />
              <img
                className="w-full h-[154px] rounded-[16px] border-2 border-purple-400/30 overflow-hidden object-cover bg-white/5 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                src={img3.imageSrc}
                alt={img3.alt}
              />
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col gap-3 lg:gap-10">
            <div className="grid grid-cols-2 gap-3 lg:gap-5">
              <img
                className="w-full h-[154px] rounded-[16px] border-2 border-purple-400/30 overflow-hidden object-cover bg-white/5 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                src={img4.imageSrc}
                alt={img4.alt}
              />
              <img
                className="w-full h-[154px] rounded-[16px] border-2 border-purple-400/30 overflow-hidden object-cover bg-white/5 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                src={img5.imageSrc}
                alt={img5.alt}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 lg:gap-5">
              <img
                className="w-full h-[154px] rounded-[16px] border-2 border-purple-400/30 overflow-hidden object-cover bg-white/5 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                src={img6.imageSrc}
                alt={img6.alt}
              />
              <img
                className="w-full h-[154px] rounded-[16px] border-2 border-purple-400/30 overflow-hidden object-cover bg-white/5 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                src={img7.imageSrc}
                alt={img7.alt}
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
