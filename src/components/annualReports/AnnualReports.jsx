import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'

const AnnualReports = () => {
  const reports = [
    {
      year: '2024-25',
      title: 'Annual Report 2024-25',
      description: 'Educational Programs, Women\'s Skill Development Programs, and comprehensive impact analysis.',
      highlights: [
        'Enhanced literacy and digital learning programs',
        'Women\'s skill development with sewing machine distribution',
        'Entrepreneurship and financial literacy workshops',
        'Total Income: ₹25,86,174.50'
      ],
      downloadUrl: '#'
    },
    {
      year: '2023-24',
      title: 'Annual Report 2023-24',
      description: 'Educational Programs, Environmental Protection & Awareness Programs with significant community impact.',
      highlights: [
        '1,000+ individuals gained literacy and digital skills',
        '2,000+ saplings planted across communities',
        '400+ women empowered through adult education',
        'Total Income: ₹24,60,360'
      ],
      downloadUrl: '#'
    },
    {
      year: '2022-23',
      title: 'Annual Report 2022-23',
      description: 'Foundation year achievements in educational programs and community development initiatives.',
      highlights: [
        '800+ literacy beneficiaries reached',
        '150+ school dropouts reintegrated',
        '200+ youth received career counseling',
        'Total Income: ₹4,45,000'
      ],
      downloadUrl: '#'
    }
  ]

  return (
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
            Annual Reports & Financial Transparency
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to transparency is reflected in our detailed annual reports, 
            showcasing our programs, achievements, and financial accountability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <FiFileText size={32} />
                  <span className="text-2xl font-bold">{report.year}</span>
                </div>
                <h3 className="text-xl font-bold">{report.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {report.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {report.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                  onClick={() => window.open(report.downloadUrl, '_blank')}
                >
                  <FiDownload size={18} />
                  Download Report
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Financial Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-lg shadow-md p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Financial Growth Overview
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">2022-23</h4>
              <p className="text-2xl font-bold text-orange-600">₹4,45,000</p>
              <p className="text-sm text-gray-600">Total Income</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">2023-24</h4>
              <p className="text-2xl font-bold text-orange-600">₹24,60,360</p>
              <p className="text-sm text-gray-600">Total Income</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">2024-25</h4>
              <p className="text-2xl font-bold text-orange-600">₹25,86,174</p>
              <p className="text-sm text-gray-600">Total Income</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-orange-50 rounded-lg">
            <p className="text-center text-gray-700">
              <span className="font-semibold">Growth Rate:</span> Our organization has shown consistent growth, 
              with a <span className="font-bold text-orange-600">450% increase</span> in funding from 2022-23 to 2023-24, 
              enabling us to expand our community impact significantly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnnualReports