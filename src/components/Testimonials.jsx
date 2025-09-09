import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Amina B.",
    text: "An unforgettable experience! Everything was perfectly organized and the guides were so helpful.",
    pack: "Umrah Essentials"
  },
  {
    name: "Youssef K.",
    text: "The best travel agency for Hajj and Umrah. Highly recommended for their professionalism and care.",
    pack: "Premium Hajj"
  },
  {
    name: "Fatima Z.",
    text: "Our family felt safe and comfortable throughout the journey. The hotel and transport were top-notch!",
    pack: "Family & Youth"
  },
  {
    name: "Omar S.",
    text: "Excellent service and attention to detail. I will definitely book again for my next pilgrimage.",
    pack: "Umrah Essentials"
  },
];

const Testimonials = () => (
  <section className="w-full py-16 bg-white flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-green-500">What Our Travelers Say</h2>
    <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl justify-center items-stretch">
      {testimonials.map((t, i) => (
        <div key={i} className="flex-1 min-w-[260px] max-w-[340px] rounded-3xl shadow-xl flex flex-col items-center p-8 border border-gray-100 bg-[color:var(--color-gray-100)] hover:shadow-2xl transition-shadow">
          <p className="text-lg text-gray-900 text-center mb-6">“{t.text}”</p>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} className="text-yellow-400" size={22} />
            ))}
          </div>
          <span className="font-bold text-[color:var(--color-gold-500)] text-lg">{t.name}</span>
          <span className="text-sm text-gray-700 mt-1"><span className="font-semibold text-gray-600 mr-1">Pack:</span>{t.pack}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
