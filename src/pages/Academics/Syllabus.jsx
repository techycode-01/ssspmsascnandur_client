import React, { useEffect } from "react";
import AcademicBan from "../../components/otherBanners/AcademicBan";

/* 🔴 Custom screenshot-style arrow */
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    {/* Circle border */}
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#d10000"
      strokeWidth="2"
      fill="none"
    />

    {/* Forward arrow with longer shaft */}
    <path
      d="M8 12H15M15 12L12 9M15 12L12 15"
      stroke="#d10000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const syllabusData = [
  "B.A. (Bachelor of Arts) – Semester Pattern – As per Dr. Babasaheb Ambedkar Marathwada University",
  "B.A. Syllabus: English, Hindi, Marathi, History, Sociology, Political Science, Geography, Economics, Public Administration, Psychology, Physical Education",

  "B.Com. (Bachelor of Commerce) – Semester Pattern – As per Dr. Babasaheb Ambedkar Marathwada University",
  "B.Com. Syllabus: English (Compulsory), Marathi / Hindi (Second Language), All Commerce Subjects Compulsory",

  "B.Sc. (Bachelor of Science) – Semester Pattern – As per Dr. Babasaheb Ambedkar Marathwada University",
  "B.Sc. Syllabus: English (Compulsory), Marathi / Hindi (Second Language), Optional Subjects – Physics, Chemistry, Mathematics, Botany, Zoology, Computer Science",
];

const Syllabus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AcademicBan />

      {/* LEFT-aligned layout */}
      <section className="max-w-6xl px-4 py-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">
          Syllabus
        </h2>

        <ul className="divide-y divide-gray-200">
          {syllabusData.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 py-3 text-[14px] text-[#003366]"
            >
              <span className="w-6 text-black">
                {index + 1}.
              </span>

              {/* Exact screenshot arrow */}
              <ArrowIcon />

              <span className="cursor-pointer hover:underline">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Syllabus;
