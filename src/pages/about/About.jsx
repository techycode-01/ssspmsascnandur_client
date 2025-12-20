import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiEye,
  FiBookOpen,
  FiBriefcase,
  FiUsers,
  FiHeart,
  FiGlobe,
  FiHome,
} from "react-icons/fi";
import Aboutban from "../../components/otherBanners/Aboutban";
import HomeAbout from "../../components/homeAbout/HomeAbout";
import DonationHero from "../../components/donationHero/DonationHero";
import TestimonialsSlider from "../../components/testimonial/TestimonialsSlider";
import TeamSlider from "../../components/team/TeamSlider";
import WeDo from "../../components/weDo/WeDo";
import AnnualReports from "../../components/annualReports/AnnualReports";
import ImpactStories from "../../components/impactStories/ImpactStories";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const objectives = [
    {
      title: "Rural Education",
      icon: <FiBookOpen className="w-7 h-7" />,
      description:
        "To provide quality education for the rural students and bring them into the mainstream of higher education.",
    },
    {
      title: "Responsible Citizenship",
      icon: <FiUsers className="w-7 h-7" />,
      description:
        "To make students knowledgeable and responsible citizens, inculcating ethical and moral values.",
    },
    {
      title: "Competitiveness",
      icon: <FiTarget className="w-7 h-7" />,
      description:
        "To enable students to compete with urban students and face new challenges effectively.",
    },
    {
      title: "Innovation & Research",
      icon: <FiGlobe className="w-7 h-7" />,
      description:
        "To motivate students for innovation, creativity, and accelerate research culture among faculties.",
    },
    {
      title: "Gender Sensitization",
      icon: <FiHeart className="w-7 h-7" />,
      description:
        "To create gender sensitization among students and empower them in society through education.",
    },
    {
      title: "Social Upliftment",
      icon: <FiHome className="w-7 h-7" />,
      description:
        "To eradicate backwardness in the field of education and uplift economically backward students.",
    },
  ];

  const teamMembers = [
    { name: "Smt. Bangar R. B.", position: "President" },
    { name: "Adv. Santosh Sawargaonkar", position: "Secretary" },
    { name: "Smt. Vaijanta Misal", position: "Joint-Secretary" },
    { name: "Prof. Dr. Shankarrao Sawargaonkar", position: "Treasurer" },
    { name: "Smt. Rahibai Waybase", position: "Member" },
  ];

  return (
    <>
      <Aboutban />
      <HomeAbout />

      {/* Organization Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our College
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Shivsagar Sevabhavi Shikshan Prasarak Mandal established Arts,
              Science and Commerce College, Nandur (Ghat) in June 2000. Located
              in a remote village in Kaij Taluka of Beed District, we are
              dedicated to providing higher education to students from poor
              socio-economical backgrounds, living by our motto ‘from Ignorance
              to Knowledge’.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative flex flex-col p-8 rounded-2xl shadow-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-white overflow-hidden cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FiTarget className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
              </div>
              <div className="space-y-2 text-white/90">
                <div className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <p>
                    Quality Education for the Rural and Economically Backward
                    Students
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <p>
                    To provide opportunities that were once only available in
                    cities
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <p>To eradicate backwardness in the field of education</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative flex flex-col p-8 rounded-2xl shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white overflow-hidden cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FiEye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
              </div>
              <p className="text-white/90">
                Reformation of Rural Masses through Higher Education. We aim to
                bring students from rural areas into the mainstream of higher
                education and prepare them to accept the new challenges of the
                hour.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal’s Forewords Section */}
      <section className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Principal’s Forewords
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Message from the Principal of Arts, Science and Commerce College,
            Nandur (Ghat)
          </p>
        </motion.div>

        {/* FULL-WIDTH Container with side margins */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
      w-full 
      px-6 sm:px-10 lg:px-16 
      bg-white 
      py-10 
      shadow-lg 
      border border-gray-200
    "
        >
          <div className="flex flex-row max-lg:flex-col gap-6 items-start">
            {/* Photo inside container (top-left) */}
            <div className="w-full lg:w-[450px] xl:w-[520px] 2xl:w-[620px] shrink-0">
              <img
                src="/src/assets/principal.jpg" // 🔁 update path if needed
                alt="Principal"
                className="rounded-xl w-full object-cover shadow-md"
              />
              <p className="mt-3 font-semibold text-gray-800 text-center">
                Dr. Shankar Shivaji Munde
              </p>
              <p className="text-sm text-gray-500 text-center">Principal</p>
            </div>

            {/* Text content */}
            {/* Text content */}
            <div className="flex-1 text-gray-700 leading-relaxed space-y-4 text-justify">
              <p>
                The Honorable Secretary of Shivsagar Sevabhavi Shikshan Prasarak
                Mandal, Chhatrapati Sambhajinagar,{" "}
                <strong>Adv. Santosh Sawargaonkar</strong>, envisioned providing{" "}
                <strong>higher education</strong> to{" "}
                <strong>needy, poor and downtrodden students</strong> belonging
                to <strong>rural areas</strong>.
              </p>

              <p>
                With sincere and committed efforts, the management established
                the <strong>Arts, Science and Commerce College</strong> in{" "}
                <strong>2000</strong> to impart higher education to students
                from nearby rural regions.
              </p>

              <p>
                The institution is dedicated to offering{" "}
                <strong>quality education</strong>, especially to{" "}
                <strong>economically backward and girl students</strong>,
                enabling them to build a strong academic foundation.{" "}
                <strong>Undergraduate education</strong> plays a vital role in
                preparing students to face future challenges with confidence.
              </p>

              <p>
                In response to rapidly changing times, technology, and growing
                aspirations among youth, the college has consistently adopted{" "}
                <strong>
                  innovative, student-centric teaching and learning practices
                </strong>
                .
              </p>

              <p>
                The college was accredited with{" "}
                <strong>NAAC Cycle-I in 2021</strong>, which is viewed as an
                opportunity for <strong>self-evaluation</strong>,{" "}
                <strong>continuous improvement</strong>, and achievement of
                academic excellence.
              </p>

              <p>
                The institution remains committed to{" "}
                <strong>rural upliftment</strong>,{" "}
                <strong>women empowerment</strong>, and bringing economically
                disadvantaged students into the mainstream of society through
                inclusive higher education.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by our motto 'from Ignorance to Knowledge', we are
              committed to the holistic development of our students and the
              rural community we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="text-center bg-orange-50 p-8 rounded-lg cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Inclusivity
              </h3>
              <p className="text-gray-600">
                We believe in equal opportunities for all, regardless of gender,
                caste, or economic status, working to create an inclusive
                society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="text-center bg-orange-50 p-8 rounded-lg cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Quality
              </h3>
              <p className="text-gray-600">
                We strive to provide quality higher education that meets
                academic aspirations and prepares students for a bright future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="text-center bg-orange-50 p-8 rounded-lg cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Empowerment
              </h3>
              <p className="text-gray-600">
                We are dedicated to women empowerment and bringing economically
                poor students into the mainstream of society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Aims & Objectives Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Aims & Objectives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses multiple aspects of community
              development through targeted objectives and sustainable
              initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={`p-8 rounded-2xl shadow-lg text-gray-800 cursor-pointer ${
                  [
                    "bg-gradient-to-br from-blue-100 to-sky-200",
                    "bg-gradient-to-br from-green-100 to-emerald-200",
                    "bg-gradient-to-br from-red-100 to-rose-200",
                    "bg-gradient-to-br from-yellow-100 to-amber-200",
                    "bg-gradient-to-br from-pink-100 to-fuchsia-200",
                    "bg-gradient-to-br from-slate-100 to-gray-200",
                  ][index % 6]
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/50 p-3 rounded-full">
                    {objective.icon}
                  </div>
                  <h3 className="text-lg font-bold">{objective.title}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {objective.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TeamSlider />

      <DonationHero />
      <TestimonialsSlider />
    </>
  );
};

export default About;
