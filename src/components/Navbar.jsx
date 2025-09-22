import React, { useState } from "react";
import { Link } from "react-router";
import WhatsappButton from "./whatsappButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gray-100 flex items-center justify-between px-4 py-4 relative">
      <button
        className="flex items-center justify-center p-2 rounded focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="فتح القائمة"
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <span className="mr-2 text-green-800 font-bold text-lg">اللائحة</span>
        <svg
          className="w-8 h-8 text-green-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          )}
        </svg>
      </button>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center pointer-events-none select-none">
        <img src="./icons/logo.svg" className="h-16 w-auto" alt="Logo" />
      </div>
      <WhatsappButton buttonText={'احجز الآن'} className={''} />
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 animate-fade-in">
          <ul className="flex flex-col items-start gap-2 p-4 text-lg">
            <li>
              <Link
                to="/sijilmassa/"
                className="block w-full py-2 text-green-700 font-semibold hover:text-yellow-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                الصفحة الرئيسية              
            </Link>
            </li>
            <li>
              <a
                href="#packs"
                className="block w-full py-2 text-green-700 font-semibold hover:text-yellow-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                الباقات
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block w-full py-2 text-green-700 font-semibold hover:text-yellow-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                الخدمات
              </a>
            </li>
            <li>
              <Link
                to="/sijilmassa/aboutUs"
                className="block w-full py-2 text-green-700 font-semibold hover:text-yellow-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                من نحن
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
