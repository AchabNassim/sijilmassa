import React from "react";

const Header = () => {
  return (
    <div
      id="top"
      className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden"
    >
      <img
        src="imgs/masjid.webp"
        alt="خلفية المسجد"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105 brightness-[.55]"
        style={{ minHeight: "80vh" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/10 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-black text-center drop-shadow-2xl mb-6 tracking-tight leading-tight text-[color:var(--color-gold-500)]">
          رحلتك المباركة<br className="hidden md:inline" /> تبدأ من هنا
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-center font-medium mb-8 drop-shadow-md text-gray-100">
          مرحبًا بك في{" "}
          <span className="font-bold text-[color:var(--color-gold-500)]">
            سجلماسة ترافلز
          </span>{" "}
          — حيث تبدأ رحلتك الروحية.<br className="hidden md:block" />
          اكتشف روائع مكة وتعرّف على باقاتنا الاستثنائية والشاملة المصممة
          لراحتك وطمأنينتك.
        </p>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 rounded-full text-white font-bold text-xl bg-gradient-to-r from-[#D99A29] to-yellow-400 hover:from-yellow-400 hover:to-[#D99A29] transition-all shadow-2xl ring-2 ring-[#D99A29]/30"
        >
          احجز الآن
        </a>
      </div>
    </div>
  );
};

export default Header;
