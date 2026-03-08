import React, { useState } from "react";
import { motion } from "framer-motion";

const FlipCard = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  const tshirtDetails = {
    black: {
      title: "Black T-Shirt",
      details: [
        "100% Premium Cotton",
        "Classic Unisex Fit",
        "Available in XS to 2XL",
        "Premium Quality Stitching",
      ],
      image:
        "https://i.postimg.cc/MT9wsgV4/black-tee.png",
    },
    white: {
      title: "White T-Shirt",
      details: [
        "Exclusive Premium Design",
        "Breathable Cotton Fabric",
        "Machine Washable",
        "Tailored Perfect Fit",
      ],
      image: "https://i.postimg.cc/bJy89qDk/white-tee.png",
    },
  };

  const colors = ["black", "white"];

  return (
    <section className="relative w-full max-w-7xl px-4 py-16 sm:px-6 mx-auto mb-16">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-2 bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text font-cinzel text-3xl font-bold tracking-widest text-transparent drop-shadow-md sm:text-4xl md:text-5xl uppercase">
          MERCHANDISE
        </h2>
        <p className="mt-2 text-sm text-slate-300 font-semibold uppercase tracking-widest drop-shadow-md">
          ₹250/- · First 50 Orders
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
        {colors.map((color, index) => {
          const product = tshirtDetails[color];
          const isSelected = selectedColor === color;

          return (
            <motion.button
              key={color}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedColor(color)}
              className={`group overflow-hidden rounded-3xl border bg-black/20 text-left shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                isSelected
                  ? "border-purple-400/50 ring-2 ring-purple-400/50"
                  : "border-white/10"
              }`}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
                  loading="lazy"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                  Limited Drop
                </span>

                {isSelected && (
                  <span className="absolute right-3 top-3 rounded-full bg-purple-400/90 px-2.5 py-1 text-xs font-bold text-white shadow-md">
                    Selected
                  </span>
                )}
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl">
                  {product.title}
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-slate-200 sm:text-base">
                  {product.details.map((detail) => (
                    <li key={`${product.title}-${detail}`} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.button>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-col items-center gap-3"
      >
        <a
          href="https://forms.gle/PDNFEp92rBMiLqxQ8"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-8 py-3 text-base font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:px-12 sm:py-4 sm:text-xl"
        >
          Buy Now
        </a>

        <p className="text-xs text-slate-400 sm:text-sm">
          Redirects to the official order form.
        </p>
      </motion.div>
    </section>
  );
};

export default FlipCard;
