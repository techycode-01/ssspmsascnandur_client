import React from "react";
import banVideo from "../../assets/banVideo.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "../../assets/heroBgRight.png";
import ban1 from "../../assets/ban1.webp";
import ban2 from "../../assets/ban2.webp";
import ban3 from "../../assets/ban3.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full h-auto min-h-[850px] md:h-[800px] lg:min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={banVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-8 xl:gap-20">
          {/* Left Content */}
          <div className="space-y-5 text-center md:text-left xl:-ml-6">
            <img
              src="/university-logo.png"
              alt="Affiliated to Dr. Babasaheb Ambedkar Marathwada University"
              className="h-16 sm:h-20 mx-auto md:mx-0"
            />
            <h1 className="text-lg sm:text-xl md:text-3xl font-extrabold text-white leading-tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">
              Shivsagar Sevabhavi Shikshan Prasarak Mandal's Arts, Science and
              Commerce College
            </h1>
            {/* Short version for mobile */}
            <p className="text-gray-200 leading-relaxed text-base max-w-2xl mx-auto md:hidden [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
              Established in 2000 to impart higher education to the economically
              and socially backward students from rural areas.
            </p>
            {/* Full version for desktop */}
            <p className="hidden md:block text-gray-200 leading-relaxed text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
              Our college was started with the motto ‘from Ignorance to
              Knowledge’ to eradicate backwardness in education and prepare
              youngsters to accept the new challenges of the hours.
            </p>

            {/* Campaign CTA */}
            <div className="flex items-center gap-4 justify-center xl:justify-start">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={ban3}
                  alt="Campaign"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h3
                  className="font-bold text-xs sm:text-sm md:text-base lg:text-lg"
                  style={{ color: "#00AFAD" }}
                >
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white">
                  Reformation of Rural Masses through Higher Education.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
            {/* Rotating Background Image */}
            <motion.div
              className="absolute inset-0 bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${heroBg})`,
              }}
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Small overlapping image */}
            <motion.div
              className="absolute -top-2 -left-2 w-28 h-28 sm:w-32 sm:h-36 md:w-48 md:h-48 bg-white rounded-full z-10 overflow-hidden shadow-lg border-2 border-slate-300"
              animate={{ scale: [1, 1.02, 1], y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={ban1}
                alt="Distributing aid"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Main image */}
            <motion.div
              className="w-44 h-44 sm:w-60 md:w-72 lg:w-80 lg:h-80 border-2 border-slate-300 bg-white rounded-full overflow-hidden relative shadow-2xl"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={ban2}
                alt="Children"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Animated supporter box */}
            <motion.div
              className="absolute bottom-4 right-2 md:-bottom-8 md:-right-4 w-44 p-3 sm:w-56 sm:p-4 md:w-64 md:p-5 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[
                    "https://randomuser.me/api/portraits/women/5.jpg",
                    "https://randomuser.me/api/portraits/men/7.jpg",
                    "https://randomuser.me/api/portraits/women/8.jpg",
                  ].map((url, i) => (
                    <img
                      key={i}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm"
                      src={url}
                      alt={`supporter ${i + 1}`}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
                    100+
                  </p>
                  <p className="text-gray-600 text-[10px] sm:text-xs leading-tight">
                    Active Supporters
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
