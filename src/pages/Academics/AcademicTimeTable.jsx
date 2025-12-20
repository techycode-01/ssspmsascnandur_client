import React, { useEffect } from "react";
import AcademicBan from "../../components/otherBanners/AcademicBan";

/* 🔴 Custom red outlined forward arrow */
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#d10000"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 12H15M15 12L12 9M15 12L12 15"
      stroke="#d10000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const timeTableData = [
  "Academic Time-Table 2022–23",
  "Academic Time-Table 2023–24",
  "Academic Time-Table 2024–25",
  "Academic Time-Table 2025–26",
];

const AcademicTimeTable = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 🔹 Academic Banner */}
      <AcademicBan />

      {/* 🔹 Academic Time-Table Section */}
      <section className="max-w-6xl px-4 py-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">
          Academic Time-Table
        </h2>

        <ul className="divide-y divide-gray-200">
          {timeTableData.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 py-3 text-[14px] text-[#003366]"
            >
              <span className="w-6 text-black">
                {index + 1}.
              </span>

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

export default AcademicTimeTable;
