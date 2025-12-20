import React from "react";
import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import aboutImg from "../../assets/aboutImg.webp";
import topRightCorner from "../../assets/topRight.png";
import bottomLeftCorner from "../../assets/bottomleft.png";

const HomeAbout = () => {
  const location = useLocation();
  const isAboutUsPage = location.pathname === "/about-us";

  return (
    <div className="bg-white mx-auto max-w-screen-xl py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left - Image with Animated Backgrounds */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Background Animation Images */}
            <motion.img
              src={topRightCorner}
              alt="Decoration Top Right"
              className="absolute top-[55px] right-[35px] w-24 sm:w-32 md:w-40 z-0"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            <motion.img
              src={bottomLeftCorner}
              alt="Decoration Bottom Left"
              className="absolute bottom-[25px] left-0 w-24 sm:w-32 md:w-40 z-0"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            {/* Main Image */}
            <img
              src={aboutImg}
              alt="Kid with globe"
              className="w-full h-auto lg:h-[500px] object-contain rounded-lg relative z-10"
            />
          </div>
        </motion.div>

        {/* Right - Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="font-semibold text-sm sm:text-base uppercase tracking-wider"
            style={{ color: '#00AFAD' }}
          >
            Welcome To Shivsagar Sevabhavi Shikshan Prasarak Mandal College
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 leading-tight mb-4 h-24 sm:h-20"
          >
            <TypeAnimation
              sequence={[
                "Empowering Rural Youth...",
                1500,
                "Quality Higher Education...",
                1500,
                "Arts, Science, Commerce...",
                1500,
                "Building Future Leaders...",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-sm md:text-base leading-relaxed text-justify"
          >
            Shivsagar Sevabhavi Shikshan Prasarak Mandal established Arts, Science
            and Commerce College, Nandur (Ghat) in June 2000. We are dedicated to
            imparting higher education to the economically and socially backward
            students from rural areas.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-600 text-sm md:text-base leading-relaxed mt-4 text-justify"
          >
            Our college started with the motto ‘from Ignorance to Knowledge’ to
            eradicate backwardness in education. We aim to bring students from
            rural areas into the mainstream of higher education and prepare them
            for future challenges.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <div className="flex items-start gap-4 p-4 rounded-lg w-full sm:w-1/2">
              <div className="flex-shrink-0 p-3 rounded-full" style={{ backgroundColor: '#00AFAD20', color: '#00AFAD' }}>
                <FiTarget className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-md sm:text-lg">Our Goal</h4>
                <p className="text-sm text-gray-600">
                  To provide quality education to rural students and make them responsible citizens.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg w-full sm:w-1/2">
              <div className="flex-shrink-0 p-3 rounded-full" style={{ backgroundColor: '#00AFAD20', color: '#00AFAD' }}>
                <GiReceiveMoney className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-md sm:text-lg">Our Vision</h4>
                <p className="text-sm text-gray-600">
                  Reformation of Rural Masses through Higher Education.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.5 },
              y: { duration: 0.7, delay: 0.5 },
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            className="mt-8"
          >
            <Link
              to={isAboutUsPage ? "/contact-us" : "/about-us"}
              className="inline-block px-8 py-3 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ background: '#00AFAD' }}
            >
              {isAboutUsPage ? "Contact Us" : "More About Us"}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeAbout;
