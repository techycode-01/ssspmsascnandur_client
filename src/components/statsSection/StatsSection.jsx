import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import statsBg from "../../assets/statsBg.png";

const stats = [
  { value: 375000, label: "Project Poshan Beneficiaries" },
  { value: 2000, label: "Saplings Planted" },
  { value: 1000, label: "Literacy Beneficiaries" },
  { value: 13, label: "Years of Service" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const StatsSection = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="py-14 md:py-10 text-white w-full max-w-7xl mx-auto my-10 bg-no-repeat bg-center bg-cover px-12 sm:px-20 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
      style={{
        backgroundImage: isMediumScreen
          ? `url(${statsBg})`
          : "linear-gradient(to right, #f59e0b, #b45309)", // yellow-500 to yellow-700
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h3
              className="text-5xl font-bold mb-1"
              style={{
                textShadow:
                  "3px 3px 6px rgba(0,0,0,0.7), -5px -5px 4px rgba(255,255,255,0.3)",
              }}
            >
              <CountUp 
                end={stat.value} 
                duration={24} 
                separator={stat.value >= 1000 ? "," : ""}
              />
              {stat.value >= 1000 && stat.value < 1000000 && "+"}
            </h3>
            <p
              className="text-lg font-medium leading-tight"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.7), -5px -5px 4px rgba(255,255,255,0.2)",
              }}
            >
              {stat.label.split(" ").slice(0, 2).join(" ")}
              <br />
              {stat.label.split(" ").slice(2).join(" ")}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsSection;
