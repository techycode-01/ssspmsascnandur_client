import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aboutban from "../../components/otherBanners/Aboutban";

const FacultyAndStaff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ===================== DATA ===================== */

  const managementCommittee = [
    { sn: 1, name: "Smt. Bangar R. B.", designation: "President" },
    { sn: 2, name: "Hon’ble Santosh Sawargaonkar", designation: "Secretary" },
    {
      sn: 3,
      name: "Smt. Vaijanta Laxmanrao Misal",
      designation: "Joint-Secretary",
    },
    {
      sn: 4,
      name: "Prof. (Dr.) Shankarrao Laxmanrao Sawargaonkar",
      designation: "Treasurer",
    },
    { sn: 5, name: "Smt. Rahibai Ashruba Waybase", designation: "Member" },
  ];

  const cdc = [
    { sn: 1, name: "Hon’ble Santosh Sawargaonkar", designation: "Secretary" },
    { sn: 2, name: "Dr. Sirsat R. B.", designation: "Member" },
    { sn: 3, name: "Dr. Saruk C. U.", designation: "Member" },
    { sn: 4, name: "Dr. Jadhav B. K.", designation: "Member" },
    { sn: 5, name: "Dr. Watore S. M.", designation: "Member" },
    { sn: 6, name: "Smt. Patil S. V.", designation: "Member" },
    { sn: 7, name: "Smt. Bangar R. B.", designation: "Member" },
    { sn: 8, name: "Prof. Shankar Sawargaonkar", designation: "Member" },
    { sn: 9, name: "Yuvraj Ramrao Jadhav", designation: "Member" },
    { sn: 10, name: "Dr. Kamble S. R.", designation: "Member" },
    { sn: 11, name: "Dr. Munde S. S.", designation: "Member Secretary" },
  ];

  const staff = [
    {
      id: "dr-munde-ss",
      sn: 1,
      name: "Dr. Munde S. S.",
      designation: "Principal",
      department: "Marathi",
      mobile: "7721961117",
      subject: "Marathi",
    },
    {
      id: "dr-jadhav-bk",
      sn: 2,
      name: "Dr. Jadhav B. K.",
      designation: "Professor",
      department: "Marathi",
      mobile: "9423758123",
      subject: "Marathi",
    },
    {
      id: "dr-saruk-cu",
      sn: 3,
      name: "Dr. Saruk C. U.",
      designation: "Associate Professor",
      department: "Physical Director",
      mobile: "9765518395",
      subject: "Physical Director",
    },
    {
      id: "dr-gite-lb",
      sn: 4,
      name: "Dr. Gite L. B.",
      designation: "Professor",
      department: "Marathi",
      mobile: "9421560484",
      subject: "Marathi",
    },
    {
      id: "prof-gite-ds",
      sn: 5,
      name: "Prof. Gite D. S.",
      designation: "Professor",
      department: "Marathi",
      mobile: "9764183939",
      subject: "Marathi",
    },
    {
      id: "dr-khade-vb",
      sn: 6,
      name: "Dr. Khade V. B.",
      designation: "Associate Professor",
      department: "Hindi",
      mobile: "9405784135",
      subject: "Hindi",
    },
    {
      id: "dr-nagargoje-sl",
      sn: 7,
      name: "Dr. Nagargoje S. L.",
      designation: "Associate Professor",
      department: "History",
      mobile: "9764589277",
      subject: "History",
    },
    {
      id: "dr-munde-sm",
      sn: 8,
      name: "Dr. Munde S. M.",
      designation: "Professor",
      department: "Political Science",
      mobile: "9422606357",
      subject: "Political Science",
    },
    {
      id: "dr-tandale-ss",
      sn: 9,
      name: "Dr. Tandale S. S.",
      designation: "Assistant Professor",
      department: "Sociology",
      mobile: "9763813942",
      subject: "Sociology",
    },
    {
      id: "dr-sawargaonkar-sl",
      sn: 10,
      name: "Dr. Sawargaonkar S. L.",
      designation: "Professor",
      department: "Economics",
      mobile: "7588634005",
      subject: "Economics",
    },
    {
      id: "dr-hange-ss",
      sn: 11,
      name: "Dr. Hange S. S.",
      designation: "Professor",
      department: "Public Administration",
      mobile: "9851134135",
      subject: "Public Administration",
    },
    {
      id: "dr-watore-sm",
      sn: 12,
      name: "Dr. Watore S. M.",
      designation: "Professor",
      department: "Psychology",
      mobile: "7588586854",
      subject: "Psychology",
    },
    {
      id: "dr-sirsat-rb",
      sn: 13,
      name: "Dr. Sirsat R. B.",
      designation: "Professor",
      department: "Psychology",
      mobile: "9423157757",
      subject: "Psychology",
    },
    {
      id: "dr-ghodke-jv",
      sn: 14,
      name: "Dr. Ghodke J. V.",
      designation: "Professor",
      department: "Geography",
      mobile: "9860476246",
      subject: "Geography",
    },
    {
      id: "dr-wagh-ap",
      sn: 15,
      name: "Dr. Wagh A. P.",
      designation: "Associate Professor",
      department: "Geography",
      mobile: "9763545042",
      subject: "Geography",
    },
    {
      id: "dr-latpate-rr",
      sn: 16,
      name: "Dr. Latpate R. R.",
      designation: "Associate Professor",
      department: "Library",
      mobile: "9823611726",
      subject: "Librarian",
    },
    {
      id: "dr-kamble-sr",
      sn: 17,
      name: "Dr. Kamble S. R.",
      designation: "Assistant Professor",
      department: "English",
      mobile: "7875910615",
      subject: "English",
    },
  ];

  /* ===================== TABLE COMPONENT ===================== */

  const SimpleTable = ({ title, columns, data, isProfileTable }) => (
    <div className="mb-10">
      <h3 className="text-xl font-bold text-black mb-2 border-b border-gray-400">
        {title}
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-400 text-sm">
          <thead>
            <tr className="bg-[#c9a037] text-black">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="border border-gray-400 px-3 py-2 text-left font-bold"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="bg-[#f5f5f5] border-b border-dashed border-gray-400"
              >
                <td className="px-3 py-2">{row.sn}</td>
                <td className="px-3 py-2">{row.name}</td>
                <td className="px-3 py-2">{row.designation}</td>

                {isProfileTable ? (
                  <>
                    <td className="px-3 py-2">{row.department}</td>
                    <td className="px-3 py-2">{row.mobile}</td>
                    <td className="px-3 py-2">{row.subject}</td>
                    <td className="px-3 py-2">
                      <Link
                        to={`/faculty-profile/${row.id}`}
                        className="text-blue-700 font-semibold hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  /* ===================== RENDER ===================== */

  return (
    <>
      <Aboutban />

      <section className="bg-white min-h-screen">
        <div className="w-full bg-gray-100 border-b border-gray-300 px-4 py-3">
          <h2 className="text-3xl font-bold text-[#370617] text-center">
            Faculty And Staff
          </h2>
        </div>

        <div className="w-full px-2 md:px-4 lg:px-6 py-6">
          <SimpleTable
            title="Management Committee"
            columns={["S. No.", "Name", "Designation"]}
            data={managementCommittee}
          />

          <SimpleTable
            title="College Development Committee"
            columns={["S. No.", "Name", "Designation"]}
            data={cdc}
          />

          <SimpleTable
            title="Teaching Staff Profile"
            columns={[
              "S. No.",
              "Name",
              "Designation",
              "Department",
              "Mobile No.",
              "Subject",
              "Profile",
            ]}
            data={staff}
            isProfileTable
          />
        </div>
      </section>
    </>
  );
};

export default FacultyAndStaff;
