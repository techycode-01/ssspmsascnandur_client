// const timeTableData = [
//   "Academic Time-Table 2022–23",
//   "Academic Time-Table 2023–24",
//   "Academic Time-Table 2024–25",
//   "Academic Time-Table 2025–26",
// ];

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AcademicBan from "../../components/otherBanners/AcademicBan";
import { getAcademicTimeTable } from "../../features/Academics/academicTimeTableSlice";

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

const AcademicTimeTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAcademicTimeTable());
  }, [dispatch]);

  /* ================= API DATA ================= */
  const timeTable =
    useSelector((state) => state?.academicTimeTable?.academicTimeTable) || [];

  return (
    <>
      <AcademicBan />

      <section className="max-w-6xl px-4 py-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">
          Academic Time-Table
        </h2>

        <ul className="divide-y divide-gray-200">
          {timeTable.length > 0 ? (
            timeTable.map((item, index) => (
              <li
                key={item?._id || index}
                className="flex items-center gap-3 py-3 text-[14px] text-[#003366]"
              >
                <span className="w-6 text-black">{index + 1}.</span>

                <ArrowIcon />

                <a
                  href={item?.fileUrl?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:underline"
                >
                  {item?.title}
                </a>
              </li>
            ))
          ) : (
            <li className="py-4 text-gray-500 text-sm">
              No academic time-table available
            </li>
          )}
        </ul>
      </section>
    </>
  );
};

export default AcademicTimeTable;
