import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';
import GalBan from '../../components/otherBanners/GalBan';

Modal.setAppElement('#root');

const certificates = [
  { title: '12A', pdfUrl: '/certificates/12A Aknowledgement Hareram.pdf', imgUrl: '/certificates/12A certificate.png' },
  { title: '80G', pdfUrl: '/certificates/80G Aknowledgement Hareram.pdf', imgUrl: '/certificates/80G certificate.png' },
  { title: '10AB', pdfUrl: '/certificates/Form 10AB.pdf', imgUrl: '/certificates/10AB certificate.png' },
  { title: 'MOA Certificate', pdfUrl: '/certificates/MOA.pdf', imgUrl: '/certificates/MOA certificate.png' },
  { title: 'Darpan Certificate', pdfUrl: '/certificates/Darpan Certificate HARERAM_BHAGAT_SHIKSHAN_SANSTHAN.pdf', imgUrl: '/certificates/Darpan certificate.png' },
  { title: 'Society Registration', pdfUrl: '/certificates/Society Registration Certificate.pdf', imgUrl: '/certificates/soociety registration.png' },
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <GalBan />
      <div className="pt-16 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#00AFAD]">Our Certificates</h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Image container */}
              <div className="relative w-full h-52 bg-white p-2">
                <img
                  src={cert.imgUrl}
                  alt={cert.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content container */}
              <div className="p-4 text-center bg-gray-50 border-t border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h2>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 rounded-full px-5 py-2 cursor-pointer transition-all duration-300"
                >
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCert && (
            <Modal
              isOpen={!!selectedCert}
              onRequestClose={() => setSelectedCert(null)}
              className="max-w-5xl w-full mx-auto my-10 outline-none"
              overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-2xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              >
                <div className="flex justify-between items-center border-b pb-4 mb-5">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedCert.title}</h2>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-500 hover:text-red-600 text-3xl font-bold leading-none cursor-pointer"
                  >
                    &times;
                  </button>
                </div>

                <div className="w-full h-[70vh] mb-4">
                  <iframe
                    src={selectedCert.pdfUrl}
                    title={selectedCert.title}
                    className="w-full h-full rounded-lg border shadow-inner"
                  />
                </div>

                <div className="text-right">
                  <a
                    href={selectedCert.pdfUrl}
                    download
                    className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-sm font-medium px-4 py-1.5 rounded-full cursor-pointer transition"
                  >
                    Download PDF
                  </a>
                </div>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Certificates;
