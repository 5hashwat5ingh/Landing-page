import React from "react";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import Abhyudaya from "../../assets/Logo-images/Abhyudaya-combined.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Hero2Section() {
  const user = useSelector((state) => state.user);

  return (
    <section className="scene-content relative mx-4 my-6 max-w-6xl overflow-hidden rounded-3xl border border-amber-300/30 bg-slate-950/75 p-6 shadow-2xl backdrop-blur-xl md:mx-8 md:p-10">
      {/* Atmospheric background layers */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-200/10 via-transparent to-sky-200/10" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        

        {/* Festival identity */}
        <img
          src={Abhyudaya}
          alt="Abhyudaya logo"
          className="mx-auto mb-6 h-auto w-4/5 max-w-xl animate-ease-out drop-shadow-2xl md:w-3/5"
        />

        <h2 className="mb-4 bg-linear-to-r from-rose-200 via-amber-100 to-sky-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-7xl">
          Abhyudaya: Enchanted Escapade
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-slate-100/90 sm:text-lg sm:leading-8">
          Where the veil between reality and wonder grows thin, Abhyudaya unfolds
          as a gateway to realms forgotten and dreams awakened.
          <br />
          <br />
          Within this enchanted world, ancient spirits, wandering stars, and
          whispers of forgotten magic intertwine. Here, every moment is a
          journey and every heartbeat an adventure waiting to be discovered.
          <br />
          <br />
          Performers become storytellers of the arcane; dancers trace spells in
          the air; musicians summon worlds with their melodies. Art no longer
          remains an expression, it becomes a portal.
          <br />
          <br />
          As dusk descends, the realm deepens. Mystical paths open, guiding all
          who enter into an escapade of wonder, courage, and creation. Legends
          are not read, they are lived.
          <br />
          <br />
          This year, Abhyudaya does not merely arrive, it <em>enchants</em>. The
          escapade begins for those brave enough to step beyond the ordinary.
        </p>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
          <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-amber-100">
              <CalendarDays className="h-4 w-4" />
              Dates
            </p>
            <p className="text-sm text-slate-100/90 sm:text-base">
              4 April - 6 April, 2025
            </p>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-amber-100">
              <MapPin className="h-4 w-4" />
              Venue
            </p>
            <p className="text-sm text-slate-100/90 sm:text-base">
              MMMUT, Gorakhpur
            </p>
          </div>
        </div>

        {!user && (
          <div className="mt-8 flex items-center justify-center">
            <Link
              to="/profile"
              className="rounded-full bg-linear-to-r from-amber-200 to-rose-200 px-7 py-3 text-sm font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:from-rose-300 hover:to-amber-300 sm:text-base"
            >
              Register Now
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
