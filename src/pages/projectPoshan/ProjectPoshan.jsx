import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Aboutban from '../../components/otherBanners/Aboutban'

const ProjectPoshan = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const kitItems = [
        { name: 'Daliya', quantity: '1 kg', price: '₹150' },
        { name: 'Ragi Flour', quantity: '1 kg', price: '₹100' },
        { name: 'Moong Daal', quantity: '1 kg', price: '₹200' },
        { name: 'Soyabean', quantity: '1 kg', price: '₹200' },
        { name: 'Almonds', quantity: '500 gm', price: '₹450' },
        { name: 'Puffed Rice', quantity: '1 kg', price: '₹400' },
        { name: 'Milk Powder', quantity: '1 kg', price: '₹445' },
        { name: 'Sanitary Pads', quantity: '40 pcs', price: '₹300' }
    ]

    const locations = [
        { district: 'Deoria', state: 'Uttar Pradesh', camps: 50, beneficiaries: '1,25,000' },
        { district: 'Gorakhpur', state: 'Uttar Pradesh', camps: 50, beneficiaries: '1,25,000' },
        { district: 'East Champaran', state: 'Bihar', camps: 50, beneficiaries: '1,25,000' }
    ]

    const timeline = [
        {
            phase: 'Weeks 1-2: Preparation Phase',
            activities: [
                'Finalize beneficiary lists and distribution sites',
                'Procure and transport food items, sanitary pads, and IEC materials',
                'Assemble nutrition and wellness kits',
                'Conduct orientation and training sessions'
            ]
        },
        {
            phase: 'Weeks 3-4: Community Mobilization Phase',
            activities: [
                'Launch awareness and outreach campaigns',
                'Partner with schools, Anganwadi centers, and community groups',
                'Organize Nukkad Nataks (s      treet plays)',
                'Disseminate IEC materials'
            ]
        },
        {
            phase: 'Weeks 5-7: Distribution & Awareness Phase',
            activities: [
                'Conduct 150 distribution camps',
                'Distribute kits to 3,75,000 beneficiaries',
                'Conduct on-site health check-ups and awareness sessions'
            ]
        },
        {
            phase: 'Week 8: Monitoring & Reporting Phase',
            activities: [
                'Collect feedback from beneficiaries',
                'Document camp activities',
                'Analyze data to assess project outcomes',
                'Prepare and submit final report'
            ]
        }
    ]

    return (
        <>
            <Aboutban
                title="Project Poshan"
                subtitle={
                    <>
                        <span className="text-gray-300">Kit Distribution for a Healthier Tomorrow</span>
                        <span className="text-red-500"> / CSR Initiative 2025-26</span>
                    </>
                }
            />

            {/* Project Overview */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            A Large-Scale CSR Initiative for Health & Nutrition
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Shivsagar Sevabhavi Shikshan Prasarak Mandal College proposes "Project Poshan – Kit Distribution for a
                            Healthier Tomorrow," aimed at improving the nutritional status and menstrual health
                            of economically disadvantaged families in Deoria and Gorakhpur (Uttar Pradesh) and
                            East Champaran (Bihar).
                        </p>
                    </motion.div>

                    {/* Key Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center bg-orange-50 p-6 rounded-lg"
                        >
                            <h3 className="text-3xl font-bold text-orange-600 mb-2">3,75,000</h3>
                            <p className="text-gray-700">Total Beneficiaries</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center bg-orange-50 p-6 rounded-lg"
                        >
                            <h3 className="text-3xl font-bold text-orange-600 mb-2">150</h3>
                            <p className="text-gray-700">Distribution Camps</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center bg-orange-50 p-6 rounded-lg"
                        >
                            <h3 className="text-3xl font-bold text-orange-600 mb-2">3</h3>
                            <p className="text-gray-700">States Covered</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center bg-orange-50 p-6 rounded-lg"
                        >
                            <h3 className="text-3xl font-bold text-orange-600 mb-2">8</h3>
                            <p className="text-gray-700">Weeks Duration</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Goals */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Project Goals & Objectives
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Targeted Nutritional Support</h3>
                            <p className="text-gray-600">
                                Distribute 3,75,000 nutrition and wellness kits across 150 distribution camps
                                ensuring equitable access to nutrition support for women, children, and marginalized families.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Menstrual Health Improvement</h3>
                            <p className="text-gray-600">
                                Provide sanitary pads (40 pcs per beneficiary) to women and adolescent girls
                                and conduct awareness sessions for stigma-free menstrual health discussions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Health Education</h3>
                            <p className="text-gray-600">
                                Organize health and nutrition awareness sessions with doctors, conduct Nukkad Natak
                                (street plays), and distribute IEC materials in local languages.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Community Empowerment</h3>
                            <p className="text-gray-600">
                                Encourage active participation of beneficiaries and promote behavioral change
                                toward nutritious eating, hygiene maintenance, and preventive healthcare.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoring & Evaluation</h3>
                            <p className="text-gray-600">
                                Maintain detailed records of camp activities, assess impact through beneficiary
                                feedback, and ensure transparency in reporting CSR outcomes.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Nutrition Kit Contents */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Nutrition & Wellness Kit Contents
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Each beneficiary receives a specially curated kit containing essential nutrition items
                            and sanitary products designed to address protein and micronutrient deficiencies.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {kitItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg text-center border border-orange-100"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-orange-600 font-semibold mb-1">{item.quantity}</p>
                                <p className="text-gray-600 text-sm">{item.price}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center mt-8 bg-orange-100 p-6 rounded-lg"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Total Kit Value</h3>
                        <p className="text-2xl font-bold text-orange-600">₹2,245 per beneficiary</p>
                    </motion.div>
                </div>
            </section>

            {/* Project Locations */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Project Locations
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {locations.map((location, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-white p-8 rounded-lg shadow-md text-center"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.district}</h3>
                                <p className="text-orange-600 font-semibold mb-4">{location.state}</p>
                                <div className="space-y-2">
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Camps:</span> {location.camps}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Beneficiaries:</span> {location.beneficiaries}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Timeline */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Implementation Timeline
                        </h2>
                    </motion.div>

                    <div className="space-y-8">
                        {timeline.map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-gray-50 p-6 rounded-lg"
                            >
                                <h3 className="text-xl font-bold text-orange-600 mb-4">{phase.phase}</h3>
                                <ul className="space-y-2">
                                    {phase.activities.map((activity, actIndex) => (
                                        <li key={actIndex} className="flex items-start">
                                            <span className="text-orange-500 mr-2">•</span>
                                            <span className="text-gray-700">{activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expected Impact */}
            <section className="py-16 bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Expected Long-Term Impact
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Improved Nutrition</h3>
                            <p className="text-gray-600">
                                Long-term reduction in malnutrition and anemia among women and children
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Dignity</h3>
                            <p className="text-gray-600">
                                Sustained menstrual hygiene practices and reduced school/work absenteeism
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Behavioral Change</h3>
                            <p className="text-gray-600">
                                Positive changes in dietary habits and hygiene practices through education
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Women Empowerment</h3>
                            <p className="text-gray-600">
                                Greater confidence, health literacy, and participation in economic activities
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Community Collaboration</h3>
                            <p className="text-gray-600">
                                Strengthened community involvement fostering long-term health initiatives
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Economic Stability</h3>
                            <p className="text-gray-600">
                                Decreased spending on preventable health issues improving household economics
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ProjectPoshan