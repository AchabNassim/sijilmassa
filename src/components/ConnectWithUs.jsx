import React from "react";

const ConnectWithUs = () => (
  <section className="w-full flex items-center justify-center py-24">
  <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-6xl min-h-[420px] rounded-3xl shadow-2xl border border-[color:var(--color-green-700)] overflow-hidden bg-[color:var(--color-green-800)]">
      <div className="flex flex-col justify-center items-start px-8 md:px-16 py-10 w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Follow Us</h2>
        <h3 className="text-xl md:text-2xl font-bold text-gold-500 mb-4">Connect with Us</h3>
        <p className="text-lg text-white/90 mb-8">
          Stay up-to-date with our latest news, offers, and insights from the Kaaba Mecca travel community. Follow us on social media and be the first to know about our exclusive travel opportunities
        </p>
        <a
          href="mailto:sijilmassa@gmail.com"
          className="px-8 py-3 rounded-full text-white font-bold text-lg bg-gradient-to-r from-[color:var(--color-gold-500)] to-yellow-400 hover:from-yellow-400 hover:to-[color:var(--color-gold-500)] transition-all shadow-lg ring-2 ring-[color:var(--color-gold-500)]/20"
        >
          Email Us
        </a>
      </div>
        <div className="flex items-center justify-center w-full max-w-md h-60 md:h-full mx-auto md:mx-0">
          <img src="./imgs/connect.jpg" alt="Connect with us" className="h-full w-auto max-h-60 md:max-h-none object-cover rounded-none shadow-none border-0" />
      </div>
    </div>
  </section>
);

export default ConnectWithUs;
