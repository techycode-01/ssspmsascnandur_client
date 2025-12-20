import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiBookOpen, FiHeart, FiTrendingUp } from "react-icons/fi";

const ImpactStories = () => {
  const stories = [
    {
      icon: <FiTrendingUp className="text-4xl text-orange-500" />,
      title: "Our Vision",
      year: "Future Ready",
      description:
        "Reformation of Rural Masses through Higher Education. We aim to bring students from rural areas into the mainstream of higher education.",
      metrics: [
        "Rural Reformation",
        "Higher Education Access",
        "Mainstream Integration",
        "Future Readiness",
      ],
    },
    {
      icon: <FiBookOpen className="text-4xl text-orange-500" />,
      title: "Our Mission",
      year: "Quality Focus",
      description:
        "Quality Education for the Rural and Economically Backward Students. We strive to provide opportunities that were once only available in cities.",
      metrics: [
        "Quality Education",
        "Economic Support",
        "Rural Focus",
        "Skill Development",
      ],
    },
    {
      icon: <FiHeart className="text-4xl text-orange-500" />,
      title: "Our Objectives",
      year: "Holistic Growth",
      description:
        "To make students knowledgeable and responsible citizens, inculcate ethical values, and accelerate research culture among faculties and students.",
      metrics: [
        "Responsible Citizens",
        "Ethical Values",
        "Research Culture",
        "Gender Sensitization",
      ],
    },
    {
      icon: <FiUsers className="text-4xl text-orange-500" />,
      title: "Our Legacy",
      year: "Since 2000",
      description:
        "Established under the guidance of Hon’ble Adv. Santosh Sawargaonkar, we have been catering to the needs of rural students for over two decades.",
      metrics: [
        "Est. June 2000",
        "NAAC 'B' Grade",
        "Affiliated to Dr. BAMU",
        "Rural & Urban Reach",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Dr. Shankar Munde",
      location: "Principal",
      program: "Principal's Message",
      quote:
        "I sincerely wish a bright and prosperous future for the students taking education in this institution. I am confident that my students will outshine and glitter wherever they go hereafter either for higher education or employment.",
      impact: "Guiding Force",
    },
    {
      name: "Adv. Santosh Sawargaonkar",
      location: "Secretary",
      program: "Management Vision",
      quote:
        "Our main object is to eradicate backwardness in the field of education and prepare youngsters to accept new challenges. We are committed to providing higher education to the needy and downtrodden.",
      impact: "Visionary Leadership",
    },
    // {
    //   name: "Priya Sharma",
    //   location: "East Champaran, Bihar",
    //   program: "Environmental Awareness",
    //   quote:
    //     "The tree plantation drive in our community not only improved our environment but also brought us together. We learned about waste management and now our village is much cleaner.",
    //   impact: "50+ trees planted in village",
    // },
  ];

  return (
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
            Vision & Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated to the reformation of rural masses through quality higher education and empowering the economically backward students of the Marathwada region.
          </p>
        </motion.div>

        {/* Impact Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                {story.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {story.title}
                  </h3>
                  <p className="text-orange-600 font-semibold">{story.year}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {story.description}
              </p>

              <div className="space-y-2">
                {story.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-700">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-orange-100 p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-orange-600">
                    {testimonial.location}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.program}</p>
                </div>

                <blockquote className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-xs font-semibold text-orange-700">
                    Impact: {testimonial.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStories;
