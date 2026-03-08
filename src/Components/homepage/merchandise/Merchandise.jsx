import React, { useState } from "react";

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
    <section className="relative w-[95%] md:w-[80%] rounded-3xl px-4 py-10 sm:px-6">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-10 top-4 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-8 h-48 w-48 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <div className="relative flex flex-col h-full rounded-3xl border border-amber-300/30 bg-slate-950/75 shadow-2xl backdrop-blur-xl">

        {/* ===== TOP HALF (50%) ===== */}
        <div className="h-[50%] flex flex-col items-center text-center p-[3%]">

          {/* Tagline */}
          <div className="h-[20%] flex items-center justify-center">
            <p className="rounded-full border border-amber-100/40 bg-amber-100/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-100">
              Official Merchandise
            </p>
          </div>

          {/* Main Heading */}
          <div className="h-[50%] flex items-center justify-center">
            <h2 className="bg-gradient-to-r from-rose-200 via-amber-100 to-sky-200 bg-clip-text font-karantina text-5xl text-transparent sm:text-6xl md:text-7xl">
              Join The ABH Community
            </h2>
          </div>

          {/* Subtitle */}
          
        </div>

        {/* ===== BOTTOM HALF (50%) ===== */}
        <div className="h-[50%] flex flex-col p-[3%]">

          {/* Cards Area */}
          <div className="h-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto">

            {colors.map((color) => {
              const product = tshirtDetails[color];
              const isSelected = selectedColor === color;

              return (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`group rounded-2xl border bg-white/5 p-2 text-left transition-all ${
                    isSelected
                      ? "ring-2 ring-amber-300/50 border-amber-300/30"
                      : "border-white/15"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {isSelected && (
                      <span className="absolute right-3 top-3 rounded-full bg-emerald-400 px-2 py-1 text-xs font-semibold text-black">
                        Selected
                      </span>
                    )}
                  </div>

                  <div className="p-3">
                    <h3 className="text-xl font-bold text-slate-100">
                      {product.title}
                    </h3>

                    <ul className="mt-2 text-xs text-slate-100/90">
                      {product.details.map((detail) => (
                        <li key={detail}>• {detail}</li>
                      ))}
                    </ul>

                    <p className="mt-2 text-lg font-bold text-amber-200">
                      ₹250/-
                    </p>
                  </div>
                </button>
              );
            })}

          </div>

          {/* Buy Button */}
          <div className="h-[30%] flex flex-col items-center justify-center gap-2 mt=5">
            <a
              href="https://forms.gle/PDNFEp92rBMiLqxQ8"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-amber-200 to-rose-200 px-10 py-3 font-bold text-gray-900 hover:scale-105 transition"
            >
              Buy Now
            </a>

            <p className="text-xs text-slate-100/90">
              Redirects to the official order form
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FlipCard;
