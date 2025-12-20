import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaUniversity,
  FaUserGraduate,
  FaListUl,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";

const CoursePrograms = () => {
  // Data for courses
  const ugCourses = [
    {
      title: "Bachelor of Arts (B.A.)",
      description:
        "A 3-year program focusing on humanities and social sciences.",
      subjects: [
        "Compulsory: English",
        "Second Language: Marathi / Hindi (Any one)",
        "Optionals: History, Sociology, Political Science, Geography, Economics, Public Administration, Psychology, Physical Education",
      ],
      details: [
        { label: "Eligibility", value: "12th Arts Pass" },
        { label: "Intake", value: "240" },
        { label: "Admission", value: "Merit Basis" },
      ],
    },
    {
      title: "Bachelor of Commerce (B.Com.)",
      description:
        "A 3-year program designed to provide managerial skills and business understanding.",
      subjects: [
        "English (Compulsory)",
        "Second Language: Marathi / Hindi (Any one)",
        "All other commerce subjects are compulsory.",
      ],
      details: [
        { label: "Eligibility", value: "12th Commerce / Arts Pass" },
        { label: "Intake", value: "120" },
        { label: "Admission", value: "Merit Basis" },
      ],
    },
    {
      title: "Bachelor of Science (B.Sc.)",
      description:
        "A 3-year program for science enthusiasts. Students must opt for three optional subjects.",
      subjects: [
        "English (Compulsory)",
        "Second Language: Marathi / Hindi (Any one)",
        "Optionals: Physics, Chemistry, Mathematics, Zoology, Botany, Computer Science",
      ],
      details: [
        { label: "Eligibility", value: "12th Science Pass" },
        { label: "Intake", value: "120" },
        { label: "Admission", value: "Merit Basis" },
      ],
    },
  ];

  const pgCourses = [
    {
      title: "Master of Arts (M.A.) - YCMOU",
      description: (
        <>
          Post-graduate courses offered through{" "}
          <strong className="font-semibold text-purple-700">
            Yeshwantrao Chavan Maharashtra Open University, Nashik
          </strong>{" "}
          in the following subjects :-
        </>
      ),
      subjects: ["English", "Hindi"],
      eligibility: "Any Graduations.",
      fees: (
        <>
          As per{" "}
          <strong className="font-semibold text-purple-700">
            Y.C.M.O. University, Nasik
          </strong>{" "}
          Rules.
        </>
      ),
    },
  ];

  const departments = [
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
  ];

  const admissionSteps = [
    "The college provides a prospect which contains the admission form.",
    "The student has to fill up the application form and provide necessary documents along with application form.",
    "Admissions are given as per the University and Govt. guidelines.",
    "Any student who has passed the XII Standard or the Higher Secondary Examination with Arts, Commerce & Science of the Maharashtra State Board of Secondary Education or an equivalent examination of any recognized board will be eligible for admission to the courses of B. A., B. Com. & B. Sc.–first year.",
    "After the completion of admission process students are not allowed to change the subject/course that they are enrolled into.",
    "The admitted students are not allowed to cancel their admission after commencement of the classes. If need be, the student is not liable to refund fees.",
    "All the rights regarding the admission reserved to the Principal of the college.",
    "The applicants should complete the admission procedure within the given period of time after their names appears in the roll list.",
  ];

  const rules = [
    "Any act which will disturb the academic work of the college is strictly banned.",
    "Any act which leads to damage of the college building and property is banned.",
    "Strict discipline in the class-room during teaching is to be maintained.",
    "Decent behaviour with the teaching, Non-Teaching staff and girl students is expected.",
    "Smoking/chewing tobacco in the campus is strictly prohibited.",
    "In case of difficulties, student should consult respective heads of the departments.",
    "Student has to follow the rules set by the Library.",
    "Discipline is expected on the ground during sport activities.",
    "Student has to follow all the instructions given by the concerned teachers during visits for youth festival, sports events, debate competitions, study tour, NCC and NSS camps.",
    "The students have to park their vehicles in notified parking area.",
    "Inauguration of the student’s council will be a combined event of Arts, Commerce and Science Colleges.",
    "Students should attend their classes as per the division and subjects notified for them.",
    "Student should attend all the lecturers & functions in the college.",
    "Every student should have at least 80% attendance in the college.",
    "Students are not allowed to carry weapons with them. If found, are liable for legal action.",
    "Admission is cancelled if the student is absent without prior permission for the classes for more than a week except in case of medical reason.",
    "It is compulsory to attend each examination conducted by the college or by the teacher.",
    "If the students remain absent for unit tests or pre-annual examination, dues will be collected from them.",
    "Any sort of physical and mental torture (Ragging) is a crime. In case of any complaint, legal action will be taken.",
    "Students should read the sheet of rules and regulations. It is obligatory on the students to follow these rules.",
    "Student has to sign a guarantee bond with respect to the code of conduct and rules for discipline.",
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Academic Course Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students with quality education in Arts, Science, and
            Commerce. Affiliated to Dr. Babasaheb Ambedkar Marathwada
            University.
          </p>
        </motion.div>
        {/* Departments */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaListUl className="text-3xl text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-800">
              Our Departments
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-orange-50 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{dept}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Undergraduate Courses */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaUniversity className="text-3xl text-[#00AFAD]" />
            <h2 className="text-3xl font-bold text-gray-800">
              Under Graduate Courses
            </h2>
          </div>

          {/* ✅ FULL-WIDTH ALIGNED DESCRIPTION */}
          <p className="text-gray-600 text-justify leading-relaxed w-full mb-10">
            <strong className="text-gray-800">
              Arts, Science and Commerce College, Nandur (Ghat)
            </strong>{" "}
            offers three regular undergraduate programmes —
            <strong className="text-[#00AFAD]"> B.A., B.Com. and B.Sc.</strong>,
            which are affiliated to{" "}
            <strong className="text-gray-800">
              Dr. Babasaheb Ambedkar Marathwada University, Aurangabad
            </strong>
            . The eligibility criteria for these programmes are prescribed by
            the <strong>University</strong>. The college imparts instruction in{" "}
            <strong>Arts, Commerce and Science disciplines</strong>, leading to
            Bachelor’s degrees, through{" "}
            <strong>Marathi and English medium</strong>. Students who have
            passed the <strong>Higher Secondary (XII) Examination</strong> in
            Arts, Commerce or Science from the{" "}
            <strong>
              Maharashtra State Board of Secondary Education or any recognized
              equivalent board
            </strong>{" "}
            are eligible for admission to the{" "}
            <strong>First Year of B.A., B.Com. and B.Sc.</strong> The
            examination system follows a <strong>semester-based pattern</strong>
            , ensuring structured assessment and academic progression.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {ugCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#00AFAD] flex flex-col"
              >
                <div className="p-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {course.description}
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">
                      Subjects:
                    </h4>
                    <ul className="space-y-1 mb-4">
                      {course.subjects.map((subject, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#00AFAD]"></span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-auto p-6 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm">
                    {course.details.map((detail, idx) => (
                      <div key={idx}>
                        <p className="font-semibold text-gray-700">
                          {detail.label}
                        </p>
                        <p className="text-gray-600">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Post Graduate Courses */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaUserGraduate className="text-3xl text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Post Graduate Courses
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
            {pgCourses.map((course, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-3">
                  {course.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-800">
                      Eligibility:
                    </strong>{" "}
                    {course.eligibility}
                  </p>
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-800">
                      Admission and Fees Structure:
                    </strong>{" "}
                    {course.fees}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-18">
          {/* Admission Procedure */}
          <section>
            <div className="flex items-center gap-3">
              <FaBook className="text-2xl text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                Admission Procedure
              </h2>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 h-full border-t-4 border-blue-500">
              <ul className="space-y-4">
                {admissionSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xs font-bold mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Rules & Discipline */}
          <section>
            <div className="flex items-center gap-3">
              <FaInfoCircle className="text-2xl text-red-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                Rules & Discipline
              </h2>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 h-full border-t-4 border-red-500">
              <ul className="space-y-3">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle
                      className="flex-shrink-0 text-red-500 mt-1 mr-3"
                      size={16}
                    />
                    <span className="text-gray-700 text-sm">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CoursePrograms;
