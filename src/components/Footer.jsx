import React from "react";

const Footer = () => (
  <footer className="w-full bg-[color:var(--color-green-800)] py-8 px-4 flex flex-col md:flex-row items-center justify-between border-t border-[color:var(--color-green-700)] mt-12">
    <div className="flex items-center mb-6 md:mb-0">
  <img src="imgs/logo.png" alt="Logo" className="h-14 w-auto" />
    </div>
    <div className="flex flex-col items-center gap-2 pr-8 md:pr-16">
      <span className="text-white font-semibold text-lg mb-2">Connect with us:</span>
      <div className="flex gap-7">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[color:var(--color-gold-500)] text-2xl" aria-label="Facebook">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          <span className="text-base md:text-lg font-medium">Facebook</span>
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[color:var(--color-gold-500)] text-2xl" aria-label="Instagram">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.608 1.385 2.557 2.436 2.351 3.548 2.293 4.829 2.235 6.109 2.223 6.519 2.223 12c0 5.481.012 5.891.07 7.171.058 1.281.264 2.393 1.315 3.444 1.051 1.051 2.163 1.257 3.444 1.315C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.264 3.444-1.315 1.051-1.051 1.257-2.163 1.315-3.444.058-1.28.07-1.69.07-7.171 0-5.481-.012-5.891-.07-7.171-.058-1.281-.264-2.393-1.315-3.444C19.341.334 18.229.128 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          <span className="text-base md:text-lg font-medium">Instagram</span>
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[color:var(--color-gold-500)] text-2xl" aria-label="WhatsApp">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.281 5.319.13 12 .13c3.17 0 6.167 1.233 8.413 3.479C22.659 5.855 23.87 8.802 23.87 12c0 6.627-5.373 12-12 12a11.87 11.87 0 0 1-5.938-1.59L.057 24zm6.597-3.807c1.735.995 3.276 1.591 5.346 1.591 5.448 0 9.886-4.438 9.886-9.884 0-2.64-1.033-5.122-2.905-6.994C16.114 3.934 14.119 3.13 12 3.13c-5.447 0-9.885 4.438-9.885 9.884 0 2.062.604 3.59 1.599 5.346l-.999 3.648 3.659-.999zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          <span className="text-base md:text-lg font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
