import React from "react";


const ConnectWithUs = () => (
  <section className="w-full flex items-center justify-center py-24">
    <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-6xl min-h-[420px] rounded-3xl shadow-2xl border border-[color:var(--color-green-700)] overflow-hidden bg-[color:var(--color-green-800)]">
      <div className="flex flex-col justify-center items-start px-6 md:px-8 py-8 w-full md:w-2/5 max-w-md md:max-w-xs">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Follow Us</h2>
        <h3 className="text-lg md:text-xl font-bold text-gold-500 mb-4">Connect with Us</h3>
        <p className="text-base text-white/90 mb-6">
          Stay up-to-date with our latest news, offers, and insights from the Kaaba Mecca travel community. Follow us on social media and be the first to know about our exclusive travel opportunities.
        </p>
        <a
          href="mailto:sijilmassa@gmail.com"
          className="px-6 py-2 rounded-full text-white font-bold text-base bg-gradient-to-r from-[color:var(--color-gold-500)] to-yellow-400 hover:from-yellow-400 hover:to-[color:var(--color-gold-500)] transition-all shadow-lg ring-2 ring-[color:var(--color-gold-500)]/20 mb-4"
        >
          Email Us
        </a>
        <div className="text-white text-sm mt-2">
          <strong>Address:</strong><br />
          RES PANORAMA IMM N 2 ETG 3 N B-09 BD ABOUBAKER EL KA DIRI,<br />
          Casablanca 20280
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:w-3/5 h-72 md:h-auto bg-gray-200">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=RES%20PANORAMA%20IMM%20N%202%20ETG%203%20N%20B-09%20BD%20ABOUBAKER%20EL%20KA%20DIRI,%20Casablanca%2020280&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '280px', minWidth: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default ConnectWithUs;
