
import React from "react";


const Header = () => {
  return (
  <div id="top" className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
    <img
      src="/imgs/masjid.webp"
      alt="Masjid background"
      className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105 brightness-[.55]"
      style={{ minHeight: '80vh' }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/10 z-10" />
    <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 py-16">
  <h1 className="text-5xl md:text-7xl font-black text-center drop-shadow-2xl mb-6 tracking-tight leading-tight text-[color:var(--color-gold-500)]">
        Your Pilgrimage<br className="hidden md:inline" /> Starts Here
      </h1>
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 drop-shadow-lg text-gray-100">
        Experience the Journey of a Lifetime
      </h2>
      <p className="max-w-2xl text-lg md:text-2xl text-center font-medium mb-8 drop-shadow-md text-gray-100">
        Welcome to <span className="font-bold text-[color:var(--color-gold-500)]">Sijilmassa Travels</span> — where your spiritual adventure begins.<br className="hidden md:block" />
        Discover the wonders of Mecca and explore our exceptional, all-inclusive travel packages designed for your comfort and peace of mind.
      </p>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-4 rounded-full text-white font-bold text-xl bg-gradient-to-r from-[#D99A29] to-yellow-400 hover:from-yellow-400 hover:to-[#D99A29] transition-all shadow-2xl ring-2 ring-[#D99A29]/30"
      >
        Book Now
      </a>
    </div>
  </div>
  );
};

export default Header;