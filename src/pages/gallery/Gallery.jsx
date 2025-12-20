import React, { useEffect, useState } from "react";
import GalBan from "../../components/otherBanners/GalBan";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { getAll } from "../../features/gallery/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllYoutubeThunk } from "../../features/youtube/youtubeSlice";
// import gal from "../../assets/gal.mp4";
// import gal1 from "../../assets/gal1.mp4";

// Required by react-modal for accessibility
Modal.setAppElement("#root");

/**
 * Converts a standard YouTube URL (watch or youtu.be) into an embeddable URL.
 * @param {string} url The original YouTube URL.
 * @returns {string} The embeddable URL.
 */
const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";

  let videoId = "";
  // Handles URLs like: https://www.youtube.com/watch?v=VIDEO_ID
  if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  }
  // Handles URLs like: https://youtu.be/VIDEO_ID
  else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("photos");
  const dispatch = useDispatch();

  const openModal = (img) => {
    setSelectedImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    dispatch(getAll());
    dispatch(getAllYoutubeThunk());
  }, [dispatch]);

  const galleryState = useSelector((state) => state?.gallery?.gallery || []);
  const ytState = useSelector((state) => state?.youtube?.youtube || []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GalBan />

      <section className="py-16 bg-white px-4 sm:px-8 mx-auto max-w-8xl">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-6 py-2 text-lg font-medium border-b-2 transition cursor-pointer ${
              activeTab === "photos"
                ? "text-gray-600 hover:text-gray-600"
                : "border-transparent text-gray-600 hover:text-gray-600"
            }`}
            style={
              activeTab === "photos"
                ? { borderColor: "#00AFAD", color: "#00AFAD" }
                : {}
            }
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-2 text-lg font-medium border-b-2 transition cursor-pointer ${
              activeTab === "videos"
                ? "text-gray-600 hover:text-gray-600"
                : "border-transparent text-gray-600 hover:text-gray-600"
            }`}
            style={
              activeTab === "videos"
                ? { borderColor: "#00AFAD", color: "#00AFAD" }
                : {}
            }
          >
            Videos
          </button>
        </div>

        {/* Photo Tab */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...galleryState]?.reverse()?.map((img, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(img?.images[0]?.url)}
              >
                <img
                  src={img?.images[0]?.url}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}

         {/* This code is for YouTube video gallery */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {[...ytState]?.reverse()?.map((url, index) => (
              <div
                key={index}
                className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg"
              >
                <iframe
                  src={getYouTubeEmbedUrl(url?.link)}
                  title={`YouTube video ${index + 1}`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {/* This code is for manual video gallery */}
        {/* {activeTab === "videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
              <video
                src={gal}
                controls
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

           
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
              <video
                src={gal1}
                controls
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        )} */}
      </section>

      {/* Fullscreen Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
        className="relative flex items-center justify-center outline-none"
      >
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={closeModal}
            className="absolute cursor-pointer top-4 right-4 text-white text-3xl font-bold z-50"
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />
        </div>
      </Modal>
    </>
  );
};

export default Gallery;
