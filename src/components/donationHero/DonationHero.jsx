// DonationHero.jsx
import React from "react";
import { motion } from "framer-motion";
import BG_IMAGE from "../../assets/donImg.webp";

const DonationHero = () => {
  return (
    <section className="relative isolate w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        aria-hidden
      />

{/* Smaller overlay inset from edges */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.82 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="absolute inset-2 sm:inset-4 md:inset-6 bg-[#114E41] rounded-xl"
/>

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto flex min-h-[350px] max-w-6xl flex-col items-center justify-center px-4 py-16 sm:min-h-[420px] md:py-24">
        {/* Tagline */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mb-4 flex items-center space-x-2 text-center"
        >
          {/* Heart icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400 md:h-8 md:w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.8 4.6a5.3 5.3 0 0 0-7.5 0L12 5.9l-1.3-1.3a5.3 5.3 0 0 0-7.5 7.5l1.3 1.3L12 21l7.5-7.5 1.3-1.3a5.3 5.3 0 0 0 0-7.6z" />
          </svg>
          <span className="text-lg font-semibold tracking-wide text-white md:text-xl">
            Help us raise them up.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.65, ease: "easeOut" }}
          className="mb-8 max-w-3xl px-2 text-center text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl"
        >
          Your donation means a lot to them.<br className="hidden sm:inline" />
          Donate what you can.
        </motion.h1>

        {/* CTA button */}
        <motion.a
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.4, ease: "easeOut" }}
          href="/donate-us"
          className="inline-block rounded-full bg-gradient-to-r from-orange-400 to-yellow-400  px-6 py-3 text-center text-base font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 md:px-8 md:py-4 md:text-lg"
        >
          Start Donating Them
        </motion.a>
      </div>
    </section>
  );
};

export default DonationHero;
