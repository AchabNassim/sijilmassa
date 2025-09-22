import React from "react";
import WhatsappButton from "./whatsappButton";

const Header = () => {
  return (
    <div
      id="top"
      className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden"
    >
      <img
        src="imgs/bannerHeader.webp"
        alt="خلفية المسجد"
        className="absolute inset-0 w-full h-full object-cover md:object-fill xl:object-cover object-center z-0 scale-100 brightness-[.95]"
        style={{ minHeight: "80vh" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/30 z-10" />
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
        <WhatsappButton buttonText={'احجز الآن'} className={'text-xl px-12 py-4 rounded-4xl'} />
      </div>
    </div>
  );
};

export default Header;
