import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import Abhyudaya from "../../assets/Logo-images/Abhyudaya-combined.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Hero2Section() {
  const user = useSelector((state) => state.user);

  return (
    <section className="scene-content flex flex-col justify-center relative mx-2 my-3 sm:mx-4 sm:my-6 md:mx-auto md:w-[70%] md:h-[80vh] max-h-none overflow-hidden rounded-lg sm:rounded-2xl md:rounded-3xl border border-amber-300/30 bg-slate-950/75 p-4 sm:p-6 md:p-10 shadow-2xl backdrop-blur-xl">

      {/* background */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <div className="relative z-10 flex flex-col h-full w-full text-center">

        {/* LOGO 30% */}
        <div className="h-[30%] flex items-center justify-center">
          <img
            src={Abhyudaya}
            alt="Abhyudaya logo"
            className="max-h-full max-w-[80%] object-contain drop-shadow-2xl"
          />
        </div>

        {/* TITLE 20% */}
        <div className="h-[20%] flex items-center justify-center">
          <h2 className="font-extrabold tracking-tight bg-linear-to-r from-rose-200 via-amber-100 to-sky-200 bg-clip-text text-transparent text-xl sm:text-1xl md:text-2xl lg:text-4xl sm:mb-10">
            Abhyudaya: Enchanted Escapade
          </h2>
        </div>

        {/* TEXT 30% */}
        <div className="h-[30%] flex items-center justify-center px-2">
          <p className="max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-100/90">
            Where the veil between reality and wonder grows thin, Abhyudaya unfolds
            as a gateway to realms forgotten and dreams awakened.

            Within this enchanted world, ancient spirits, wandering stars, and
            whispers of forgotten magic intertwine. Here, every moment is a
            journey and every heartbeat an adventure waiting to be discovered.
          </p>
        </div>

        {/* INFO + BUTTON 20% */}
        <div className="h-[20%] flex flex-col sm:flex-row items-center justify-center gap-4 sm:mt-10">

          <div className="flex gap-4">

            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <p className="flex items-center gap-2 text-sm font-semibold text-amber-100">
                <CalendarDays className="h-4 w-4" />
                4 Apr - 6 Apr 2025
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <p className="flex items-center gap-2 text-sm font-semibold text-amber-100">
                <MapPin className="h-4 w-4" />
                MMMUT Gorakhpur
              </p>
            </div>

          </div>

          {!user && (
            <Link
              to="/profile"
              className="rounded-full bg-linear-to-r from-amber-200 to-rose-200 px-6 py-2 font-semibold text-gray-900 shadow-lg hover:scale-105 transition"
            >
              Register Now
            </Link>
          )}

        </div>

      </div>
    </section>
  );
}