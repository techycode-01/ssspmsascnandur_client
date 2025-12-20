import React, { useEffect } from "react";
import AcademicBan from "../../components/otherBanners/AcademicBan";

// 📄 Import PDFs
import PeerTeamReport from "../../assets/iqac/peer_team_report.pdf";
import InstitutionalGradeSheet from "../../assets/iqac/Institutional_Grade_Sheet.pdf";

/* 🔴 Reusable red outlined forward arrow */
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

const iqacData = [
  {
    title: "Peer Team Report",
    link: PeerTeamReport,
  },
  {
    title: "Institutional Grade Sheet",
    link: InstitutionalGradeSheet,
  },
  { title: "NAAC Certificate" },
  { title: "AQAR (Annual Quality Assurance Report)" },
  { title: "College Development Committee" },
  { title: "SSR (Self Study Report)" },
  { title: "MRP (Minor Research Projects)" },
  { title: "IIQA (Institutional Information for Quality Assessment)" },
  { title: "Institutional Distinctiveness" },

  // ✅ Newly added items
  { title: "Best Practices" },
  { title: "Feedback" },
  { title: "Program Course Outcome" },
  { title: "Meeting Minutes and ATR" },
];

const Iqac = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AcademicBan />

      <section className="max-w-6xl px-4 py-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">
          IQAC
        </h2>

        <ul className="divide-y divide-gray-200">
          {iqacData.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 py-3 text-[14px] text-[#003366]"
            >
              {/* Number */}
              <span className="w-6 text-black">
                {index + 1}.
              </span>

              {/* Arrow */}
              <ArrowIcon />

              {/* Link or Text */}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#003366]"
                >
                  {item.title}
                </a>
              ) : (
                <span>{item.title}</span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Iqac;
