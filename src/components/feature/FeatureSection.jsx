import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

// const features = [
//   {
//     title: "Become a volunteer",
//     description: "Volunteer: Share time, make impact for communities.",
//     icon: "🙋‍♂️",
//     bg: "from-cyan-400 to-blue-500",
//     textBg: "bg-[#F5FDFF]",
//     link: "/contact-us",
//   },
//   {
//     title: "Our School Programs",
//     description: "Explore how our school initiatives shape young minds.",
//     icon: "🏫",
//     bg: "from-yellow-400 to-orange-400",
//     textBg: "bg-[#FFFCF4]",
//     link: "/program",
//   },
//   {
//     title: "Start donating",
//     description: "Alone, I can do little. Together, we can do anything.",
//     icon: "💰",
//     bg: "from-green-500 to-teal-600",
//     textBg: "bg-green-50",
//     link: "/donate-us",
//   },
// ];

const features = [
  {
    title: "Under Graduate Courses",
    description:
      "B.A., B.Com. & B.Sc. degrees affiliated to Dr. Babasaheb Ambedkar Marathwada University.",
    icon: "🎓",
    bg: "from-[#00AFAD] to-[#00AFAD]",
    link: "/program",
  },
  {
    title: "Post Graduate Courses",
    description: "M.A. in English and Hindi via Yeshwantrao Chavan Maharashtra Open University (YCMOU).",
    icon: "📚", // Updated: Books for education
    bg: "from-purple-500 to-indigo-600",
    link: "/program",
  },
  {
    title: "Student Support",
    description:
      "NSS, Sports, Career Counselling, and Women Redressal Cell for holistic development.",
    icon: "🤝", // Updated: Heart for giving/care
    bg: "from-orange-500 to-amber-500",
    link: "/donate-us",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const FeatureSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Link to={feature.link}>
              <Tilt
                tiltEnable={false}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.02}
                transitionSpeed={2500}
                className="w-full"
              >
                <div
                  className={`relative flex flex-col items-center text-center p-8 rounded-2xl shadow-lg bg-gradient-to-br ${feature.bg} text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105`}
                >
                  <div className="mb-4 text-5xl bg-white/20 p-4 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/90">
                    {feature.description}
                  </p>
                </div>
              </Tilt>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
