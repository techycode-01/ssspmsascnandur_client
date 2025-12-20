

import React from 'react';
import { motion } from 'framer-motion';
import banImg from "../../assets/11.webp";

const Aboutban = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative w-full h-[50vh] pt-[20px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage || banImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4"> {title || `About Us` }</h1>
        <p className="text-md md:text-lg bg-black p-2 rounded-full">
        {subtitle || (
            <>
                <span className="text-gray-300">Shivsagar Sevabhavi Shikshan Prasarak Mandal College</span>{' '}
                <span className="text-red-500">/ About Us</span>
            </>
         )}
        </p>

      </motion.div>
    </div>
  );
};

export default Aboutban;
