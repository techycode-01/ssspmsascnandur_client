import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaFlask, FaUserGraduate, FaRunning } from "react-icons/fa";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: <FaBook className="text-4xl text-blue-500" />,
    title: "Arts Courses (B.A.)",
    description:
      "Offering subjects like Marathi, Hindi, English, History, Sociology, and Political Science to foster critical thinking.",
    bgGif: "/kids.gif", // Placeholder
    link: "/program",
  },
  {
    icon: <FaFlask className="text-4xl text-green-500" />,
    title: "Science & Commerce",
    description:
      "Providing B.Sc. (Physics, Chemistry, Maths) and B.Com. courses to build a strong academic foundation.",
    bgGif: "/medical.gif",
    link: "/program",
  },
  {
    icon: <FaUserGraduate className="text-4xl text-purple-500" />,
    title: "Post-Graduate Studies",
    description:
      "Offering M.A. in English and Hindi through our Y.C.M.O.U., Nashik study center.",
    bgGif: "/Post-Graduate.gif",
    link: "/program",
  },
  {
    icon: <FaRunning className="text-4xl text-yellow-500" />,
    title: "Student Development",
    description:
      "Focusing on holistic growth with facilities like a Library, Sports, N.S.S., and Career Counselling.",
    bgGif: "/student_development.gif",
    link: "/program",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WeDo = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="font-semibold uppercase tracking-wider"
            style={{ color: "#00AFAD" }}
          >
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
            Our Academic Programs
          </h2>
        </div>

        {/* Departments and Courses Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Departments List */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">
              Our Departments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Marathi",
                "Hindi",
                "English",
                "Geography",
                "Psychology",
                "Physical Education",
                "History",
                "Economics",
                "Public Administration",
                "Political Science",
                "Sociology",
              ].map((dept, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-gray-700 font-medium"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                  {dept}
                </div>
              ))}
            </div>
          </div>

          {/* Courses List */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#00AFAD] pl-4">
              Courses Offered
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaBook className="text-[#00AFAD]" /> Under Graduate
                </h4>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="list-disc">B.A. (Bachelor of Arts)</li>
                  <li className="list-disc">B.Com. (Bachelor of Commerce)</li>
                  <li className="list-disc">B.Sc. (Bachelor of Science)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaUserGraduate className="text-[#00AFAD]" /> Post Graduate
                  (YCMOU)
                </h4>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="list-disc">M.A. English</li>
                  <li className="list-disc">M.A. Hindi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-80 rounded-2xl shadow-lg overflow-hidden"
            >
              <Link to={card.link || "#"} className="block w-full h-full">
                {/* Background GIF */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.bgGif})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-end text-white">
                  <div className="mb-3">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WeDo;
