import React, { useState } from "react";
import packs from './packs.js';
import WhatsappButton from "../whatsappButton.jsx";

const ImageModal = ({ open, onClose, src, alt }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-[201] flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold z-[202] hover:scale-110 transition-transform"
          aria-label="إغلاق"
        >
          &times;
        </button>
        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-2xl border border-white"
        />
      </div>
    </div>
  );
};

const PacksModal = ({ open, onClose, pack }) => {
  const [current, setCurrent] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  if (!open || !pack) return null;
  const images = pack.images || [];

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm z-[101]"
          onClick={onClose}
        />
        {/* Modal */}
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-10 relative flex flex-col items-center z-[102]"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-8 text-gray-500 hover:text-red-500 text-3xl font-bold"
            aria-label="إغلاق"
          >
            &times;
          </button>
          <div className="relative w-full max-w-2xl flex items-center justify-center mb-8">
            {images.length > 0 && (
              <div className="relative w-full">
                <img
                  src={images[current]}
                  alt={pack.name + ' صورة ' + (current + 1)}
                  className="w-full max-h-[500px] object-contain rounded-xl border border-gray-200 cursor-pointer"
                  onClick={() => setShowImageModal(true)}
                  title="انقر لتكبير الصورة"
                  style={{ background: "#f8f8f8" }}
                />
                <button
                  onClick={() => setShowImageModal(true)}
                  className="absolute bottom-4 right-4 flex items-center gap-2 bg-gradient-to-r from-[color:var(--color-gold-500)] to-yellow-400 text-white px-5 py-2 rounded-full shadow-lg font-semibold text-base hover:from-yellow-400 hover:to-[color:var(--color-gold-500)] transition-all border-2 border-white/70 backdrop-blur-sm"
                  title="تكبير الصورة"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2" />
                  </svg>
                  تكبير الصورة
                </button>
              </div>
            )}
            {images.length > 1 && (
              <>
                <button
                  onClick={e => { e.stopPropagation(); prev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-4 shadow hover:bg-white text-2xl"
                  aria-label="الصورة السابقة"
                >
                  &#8592;
                </button>
                <button
                  onClick={e => { e.stopPropagation(); next(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-4 shadow hover:bg-white text-2xl"
                  aria-label="الصورة التالية"
                >
                  &#8594;
                </button>
              </>
            )}
            {/* Dots */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-3 h-3 rounded-full ${idx === current ? 'bg-[color:var(--color-gold-500)]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            )}
          </div>
          <WhatsappButton buttonText={'احجز عبر الواتساب'} className={'px-12 py-4 text-xl rounded-4xl'} />
        </div>
      </div>
      {/* Fullscreen Image Modal */}
      <ImageModal
        open={showImageModal}
        onClose={() => setShowImageModal(false)}
        src={images[current]}
        alt={pack.name + ' صورة ' + (current + 1)}
      />
    </>
  );
};

const PacksExplore = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState(null);

  const handleOpenModal = (pack) => {
    setSelectedPack(pack);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPack(null);
  };

  return (
    <section id="packs" className="w-full py-16 bg-white flex flex-col items-center relative overflow-hidden">
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-green-500">باقات السفر لدينا</h2>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-12 text-gray-900">
          اختر الباقة المثالية لرحلتك. جميع باقاتنا مصممة لتمنحك الراحة والسهولة وتجربة لا تُنسى.
        </p>
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl justify-center items-stretch">
          {packs.map(pack => (
            <div
              key={pack.name}
              className="flex-1 min-w-[320px] max-w-[420px] rounded-3xl shadow-xl flex flex-col items-center p-8 border border-gray-100 hover:shadow-2xl transition-shadow bg-[color:var(--color-gray-100)] cursor-pointer"
            >
              <img src={`icons/${pack.icon}`} alt={pack.name + ' أيقونة'} className="w-16 h-16 mb-4" />
              <h3 className="text-3xl font-bold mb-3 text-center text-[color:var(--color-gold-500)]">{pack.name}</h3>
              <ul className="mb-6 text-gray-900 text-lg list-disc list-inside w-full max-w-xs mx-auto">
                {pack.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p
                onClick={(e) => { e.stopPropagation(); handleOpenModal(pack); }}
                className="mt-auto px-8 py-3 rounded-full text-white font-bold text-lg bg-gradient-to-r from-[color:var(--color-gold-500)] to-yellow-400 hover:from-yellow-400 hover:to-[color:var(--color-gold-500)] transition-all shadow-lg ring-2 ring-[color:var(--color-gold-500)]/20"
              >
                التفاصيل
              </p>
            </div>
          ))}
        </div>
        <PacksModal open={modalOpen} onClose={handleCloseModal} pack={selectedPack} />
      </div>
    </section>
  );
};

export default PacksExplore;
