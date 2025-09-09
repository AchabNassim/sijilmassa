import React from "react";
import packs from './packs.js'

const PacksExplore = () => (
  <section id="packs" className="w-full py-16 bg-white flex flex-col items-center relative overflow-hidden">
    <div className="relative z-10 w-full flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-green-500">Our Travel Packs</h2>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-12 text-gray-900">
        Choose the perfect package for your journey. All our packs are designed for comfort, convenience, and a memorable experience.
      </p>
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl justify-center items-stretch">
        {packs.map(pack => (
          <div
            key={pack.name}
            className="flex-1 min-w-[320px] max-w-[420px] rounded-3xl shadow-xl flex flex-col items-center p-8 border border-gray-100 hover:shadow-2xl transition-shadow bg-[color:var(--color-gray-100)]"
          >
            <img src={`/icons/${pack.icon}`} alt={pack.name + ' icon'} className="w-16 h-16 mb-4" />
            <h3 className="text-3xl font-bold mb-3 text-center text-[color:var(--color-gold-500)]">{pack.name}</h3>
            <ul className="mb-6 text-gray-900 text-lg list-disc list-inside w-full max-w-xs mx-auto">
              {pack.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a
              href={pack.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-8 py-3 rounded-full text-white font-bold text-lg bg-gradient-to-r from-[color:var(--color-gold-500)] to-yellow-400 hover:from-yellow-400 hover:to-[color:var(--color-gold-500)] transition-all shadow-lg ring-2 ring-[color:var(--color-gold-500)]/20"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PacksExplore;
