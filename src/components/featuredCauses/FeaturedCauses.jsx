import React from "react";
import { motion } from "framer-motion";

const causes = [
  {
    id: 1,
    title: "Let's be Kind For The Poor Children",
    desc:
      "Charity is the heartbeat of compassion, a force that bridges the gaps between abundance and scarcity, privilege and need.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
    raised: 139462.1,
    goal: 100000.0,
  },
  {
    id: 2,
    title: "Changing a lives one meal at a time.",
    desc:
      "Every day is a journey for nourishment; a pilgrimage across the unforgiving terrain, where food equals hope.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
    raised: 27523.55,
    goal: 198000.0,
  },
  {
    id: 3,
    title: "Changing a lives one meal at a time.",
    desc:
      "Every day is a journey for nourishment; a pilgrimage across the unforgiving terrain, where food equals hope.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
    raised: 27523.55,
    goal: 198000.0,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

const Progress = ({ percent, raised, goal }) => (
  <div className="w-full mt-4">
    <div className="relative h-2 w-full rounded-full bg-gray-200 overflow-hidden">
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"
        style={{ width: `${percent}%` }}
      />
    </div>
    <div className="mt-2 flex justify-between text-xs font-medium text-gray-600">
      <span>Raised: {raised.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
      <span>Goal: {goal.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
    </div>
  </div>
);

const FeaturedCauses = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Headings */}
        <p className="text-center text-md font-semibold tracking-wide text-[#EEA22C]">
          Featured Cause
        </p>
        <h2 className="mt-2 text-center text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
          Find the popular cause
        </h2>

        {/* Grid */}
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {causes?.slice(0, 2)?.map((cause, i) => {
            const percent = Math.min(
              100,
              ((cause.raised || 0) / (cause.goal || 1)) * 100
            ).toFixed(1);

            // The first card is highlighted – spans two rows on medium+ screens
            const highlightClasses =
              i === 0 ? "md:row-span-2 md:col-span-2" : "";

            return (
              <motion.div
                key={cause.id}
                custom={i}
                variants={cardVariants}
                className={`sm:h-[500px] h-[420px] flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ${highlightClasses}`}
              >
                {/* Image */}
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="h-48 w-full object-cover sm:h-56 md:h-64 lg:h-72"
                />

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cause.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-gray-600">
                    {cause.desc}
                  </p>
                  <Progress
                    percent={percent}
                    raised={cause.raised}
                    goal={cause.goal}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCauses