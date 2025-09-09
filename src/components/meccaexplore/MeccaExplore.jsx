import React from "react";
import ParticleBackground from "../ParticleBackground";
import cityCards from "./cities.js";


const MeccaExplore = () => (
  <section className="w-full py-16 bg-white flex flex-col items-center relative overflow-hidden">
    <ParticleBackground />
    <div className="relative z-10 w-full flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-green-500">Explore The holly city of Mecca</h2>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-12 text-gray-900">
        Discover the most iconic and sacred sites of Mecca, each with its own unique story and spiritual significance.
      </p>
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl justify-center items-stretch">
        {cityCards.map(card => (
          <a
            key={card.name}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[320px] max-w-[420px] rounded-3xl shadow-xl flex flex-col items-center p-8 border border-gray-100 hover:shadow-2xl transition-shadow focus:ring-2 focus:ring-[color:var(--color-gold-500)] outline-none"
            style={{ background: 'var(--color-gray-100)' }}
          >
            <img src={card.img} alt={card.name} className="w-64 h-64 object-cover rounded-2xl mb-8 shadow-lg" />
            <h3 className="text-3xl font-bold mb-3 text-center text-[color:var(--color-gold-500)]">{card.name}</h3>
            <p className="text-lg text-center text-gray-900">{card.desc}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default MeccaExplore;
