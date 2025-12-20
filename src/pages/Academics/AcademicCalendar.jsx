import React, { useEffect } from "react";
import AcademicBan from "../../components/otherBanners/AcademicBan";

/* 🔴 Custom red outlined forward arrow (same as syllabus) */
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

/* 📅 Academic Calendar Data (Semester-wise) */
const academicCalendarData = [
  {
    year: "2025–26",
    items: ["Odd Semester"],
  },
  {
    year: "2024–25",
    items: ["Even Semester", "Odd Semester"],
  },
  {
    year: "2023–24",
    items: ["Odd Semester"],
  },
  {
    year: "2022–23",
    items: [
      "Even Semester (2nd, 3rd, 4th Year)",
      "Odd Semester (2nd, 3rd, 4th Year)",
    ],
  },
];

/* 🎉 Holidays */
const holidayList = ["List of Holidays"];

const AcademicCalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AcademicBan />

      {/* 🔹 Academic Calendar Section */}
      <section className="max-w-6xl px-4 py-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">
          Academic Calendar
        </h2>

        <ul className="divide-y divide-gray-200">
          {academicCalendarData.map((yearBlock, index) =>
            yearBlock.items.map((item, subIndex) => (
              <li
                key={`${index}-${subIndex}`}
                className="flex items-center gap-3 py-3 text-[14px] text-[#003366]"
              >
                <span className="w-6 text-black">{index + subIndex + 1}.</span>

                <ArrowIcon />

                <span className="cursor-pointer hover:underline">
                  Academic Calendar {yearBlock.year} ({item})
                </span>
              </li>
            ))
          )}
        </ul>

        {/* 🔹 Holidays Section */}
        <h3 className="text-lg font-semibold text-gray-800 mt-10 mb-3">
          List of Holidays
        </h3>

        <ul className="divide-y divide-gray-200">
          {holidayList.map((holiday, index) => (
            <li
              key={index}
              className="flex items-center gap-3 py-3 text-[14px] text-[#003366]"
            >
              <span className="w-6 text-black">{index + 1}.</span>

              <ArrowIcon />

              <span className="cursor-pointer hover:underline">{holiday}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AcademicCalendar;
