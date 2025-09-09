import React from "react";

const AyaBanner = () => (
  <div className="w-full flex items-center justify-center py-16 bg-[#F5F7F8]">
  <div className="bg-[color:var(--color-green-800)] rounded-3xl shadow-2xl px-8 md:px-28 py-14 flex flex-col items-center max-w-6xl w-full border border-[color:var(--color-green-700)]">
      <p className="text-3xl md:text-4xl text-center text-white font-semibold leading-relaxed mb-4" dir="rtl" style={{ fontFamily: 'Amiri, serif' }}>
        وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِنْ كُلِّ فَجٍّ عَمِيقٍ
      </p>
      <span className="text-lg text-gold-400 font-bold tracking-wide">(سورة الحج: 27)</span>
    </div>
  </div>
);

export default AyaBanner;
