import React, { useState } from "react";
import { motion } from "framer-motion";

// ── Variants defined outside the component ──────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
// ────────────────────────────────────────────────────────────────────────────

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
      image: "https://i.postimg.cc/MT9wsgV4/black-tee.png",
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

  return (
    <div className="min-h-screen w-90% flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-black p-10">
      <motion.div
        className="w-full flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10"
        >
          Join us <span className="text-cyan-100">&apos;The ABH Community&apos;</span>
        </motion.h2>

        {/* T-shirt cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-[1500px]">
          {["black", "white"].map((color) => (
            <motion.div
              key={color}
              variants={itemVariants}
              className={`rounded-2xl overflow-hidden shadow-2xl p-2 sm:w-full bg-gradient-to-br from-gray-800 to-gray-700 hover:scale-105 transition-transform duration-500 ${
                selectedColor === color ? "ring-2 sm:ring-3 ring-purple-400" : ""
              }`}
              onClick={() => setSelectedColor(color)}
            >
              <img
                src={tshirtDetails[color].image}
                alt={tshirtDetails[color].title}
                className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">
                {tshirtDetails[color].title}
              </h3>
              <div className="text-center flex justify-center gap-4">
                <span className="text-yellow-400 text-center text-lg sm:text-xl font-bold mt-2">
                  ₹250/-(first 50 orders)
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buy Now button */}
        <motion.a
          variants={itemVariants}
          href="https://forms.gle/PDNFEp92rBMiLqxQ8"
          target="_blank"
          rel="noreferrer"
          className="mt-12 py-2 sm:py-4 px-5 sm:px-10 bg-white text-gray-900 text-lg sm:text-xl font-bold rounded-xl shadow-lg hover:bg-gray-800 hover:text-gray-100 transition-transform transform hover:scale-105"
        >
          Buy Now
        </motion.a>
      </motion.div>
    </div>
  );
};

export default FlipCard;
