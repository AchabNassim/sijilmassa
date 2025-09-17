import React, { useState } from "react";
import packs from './packs.js';

const PacksModal = ({ open, onClose, pack }) => {
  const [current, setCurrent] = useState(0);
  if (!open || !pack) return null;
  const images = pack.images || [];
  const tarifs = pack.tarifs || {};

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm z-[101]"
        onClick={onClose}
      />
      {/* Modal */}
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative flex flex-col items-center z-[102]"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          aria-label="إغلاق"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center text-[color:var(--color-gold-500)]">{pack.name}</h2>
        <div className="relative w-full max-w-lg flex items-center justify-center mb-6">
          {images.length > 0 && (
            <img
              src={images[current]}
              alt={pack.name + ' صورة ' + (current + 1)}
              className="w-full h-64 object-cover rounded-xl border border-gray-200"
            />
          )}
          {images.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); prev(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow hover:bg-white"
                aria-label="الصورة السابقة"
              >
                &#8592;
              </button>
              <button
                onClick={e => { e.stopPropagation(); next(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow hover:bg-white"
                aria-label="الصورة التالية"
              >
                &#8594;
              </button>
            </>
          )}
        </div>
        <div className="w-full max-w-md mx-auto mb-4">
          <table className="w-full text-lg border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[color:var(--color-gold-100)]">
                <th className="py-2 px-3 text-left">الغرفة</th>
                <th className="py-2 px-3 text-right">السعر</th>
              </tr>
            </thead>
            <tbody>
              {['quad', 'triple', 'double', 'single'].map((key) => (
                tarifs[key] && (
                  <tr key={key} className="border-t border-gray-100">
                    <td className="py-2 px-3 capitalize">
                      {key === 'quad' && 'غرفة رباعية'}
                      {key === 'triple' && 'غرفة ثلاثية'}
                      {key === 'double' && 'غرفة مزدوجة'}
                      {key === 'single' && 'غرفة فردية'}
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-[color:var(--color-gold-500)]">{tarifs[key]}</td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
                onClick={(e) => { e.stopPropagation();
                  handleOpenModal(pack)}
                }
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
