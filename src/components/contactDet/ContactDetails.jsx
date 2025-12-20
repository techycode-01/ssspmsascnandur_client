import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Tilt from "react-parallax-tilt";

const contactData = [
  {
    icon: <MapPin size={40} className="text-orange-500" />,
    title: "ADDRESS",
    lines: [
      "Shivsagar Sevabhavi Shikshan Prasarak Mandal, Chhatrapati Sambhajinagar’s Arts, Science and Commerce College, Nandur (Ghat) Taluka- Kaij, Dist. Beed- 431 126. M. S.",
    ],
    bg: "bg-[#16212A]",
  },
  {
    icon: <Mail size={40} className="text-white" />,
    title: "EMAIL US",
    lines: ["kmn_152@rediffmail.com", "Shankarmunde40@gmail.com"],
    bg: "bg-[#F18722]",
    textColor: "text-white",
  },
  {
    icon: <Phone size={40} className="text-orange-500" />,
    title: "CALL NOW",
    lines: ["02445 231577", "(+91) 7721961117"],
    bg: "bg-[#16212A]",
  },
];

const ContactCard = ({ icon, title, lines, bg, textColor = "text-white" }) => (
  <Tilt glareEnable glareMaxOpacity={0.15} scale={1.03} transitionSpeed={2000}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex flex-col justify-between ${bg} ${textColor} rounded-2xl p-8 md:p-10 text-center shadow-md hover:shadow-xl transition-all duration-300 h-full`}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="p-3 bg-white/10 rounded-full">{icon}</div>
        <p className="text-sm tracking-widest font-semibold opacity-90">
          {title}
        </p>
      </div>
      <div className="mt-5 space-y-2 w-full px-3">
        {lines.map((line, idx) => (
          <p
            key={idx}
            className="text-sm md:text-base leading-relaxed break-all text-center overflow-hidden text-ellipsis"
          >
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  </Tilt>
);

const ContactDetails = () => (
  <section className="w-full px-6 md:px-10 lg:px-24 py-16 bg-white">
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {contactData.map((card, idx) => (
        <ContactCard key={idx} {...card} />
      ))}
    </div>
  </section>
);

export default ContactDetails;
