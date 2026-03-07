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
    <section className="relative w-full max-w-7xl px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute -left-10 top-4 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-8 h-48 w-48 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-200/10 via-transparent to-sky-200/10" />

      <div className="relative overflow-hidden rounded-3xl border border-amber-300/30 bg-slate-950/75 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-amber-100/40 bg-amber-100/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-100">
            Official Merchandise
          </p>

          <h2 className="mt-4 bg-linear-to-r from-rose-200 via-amber-100 to-sky-200 bg-clip-text font-karantina text-5xl tracking-[2px] text-transparent sm:text-6xl md:text-7xl">
            Join The ABH Community
          </h2>

          <p className="mt-2 text-sm text-slate-100/90 sm:text-base">
            Pick your style, wear the festival spirit, and become part of the
            Abhyudaya story.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {colors.map((color) => {
            const product = tshirtDetails[color];
            const isSelected = selectedColor === color;

            return (
              <button
                key={color}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedColor(color)}
                className={`group overflow-hidden rounded-2xl border bg-linear-to-br p-2 text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  isSelected
                    ? "border-amber-300/30 from-white/5 to-white/5 ring-2 ring-amber-300/50"
                    : "border-white/15 from-white/5 to-white/5"
                }`}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
                    loading="lazy"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent" />

                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-100 backdrop-blur-sm">
                    Limited Drop
                  </span>

                  {isSelected && (
                    <span className="absolute right-3 top-3 rounded-full bg-emerald-400/90 px-2.5 py-1 text-xs font-semibold text-black">
                      Selected
                    </span>
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-2xl font-bold text-slate-100/90 sm:text-3xl">
                    {product.title}
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm text-slate-100/90 sm:text-base">
                    {product.details.map((detail) => (
                      <li key={`${product.title}-${detail}`} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <p className="text-2xl font-bold text-amber-200 sm:text-3xl">
                      ₹250/-
                    </p>
                    <p className="text-right text-xs uppercase tracking-wide text-slate-100/90 sm:text-sm">
                      First 50 Orders
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="https://forms.gle/PDNFEp92rBMiLqxQ8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-linear-to-r from-amber-200 to-rose-200 px-8 py-3 text-base font-bold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-rose-300 hover:to-amber-300 sm:px-12 sm:py-4 sm:text-xl"
          >
            Buy Now
          </a>

          <p className="text-xs text-slate-100/90 sm:text-sm">
            Redirects to the official order form.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlipCard;
