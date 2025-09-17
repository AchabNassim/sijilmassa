import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-green-700 flex justify-between px-4">
        <img src="./imgs/logo.png" className="h-18 w-35" />
    <ul className="hidden sm:flex items-center gap-10 text-lg">
      <li>
        <a href="#top" className="text-white hover:text-yellow-300 transition-colors">Home</a>
      </li>
      <li>
        <a href="#services" className="text-white hover:text-yellow-300 transition-colors">Services</a>
      </li>
      <li>
        <a href="#packs" className="text-white hover:text-yellow-300 transition-colors">Packs</a>
      </li>
      <li>
        <a
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-2 px-4 py-2 rounded text-white font-semibold bg-gradient-to-r from-[#D99A29] to-yellow-400 hover:from-yellow-400 hover:to-[#D99A29] transition-all shadow"
        >
          Book Now
        </a>
      </li>
    </ul>
    </div>
  );
};

export default Navbar;