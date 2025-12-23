import React, { useEffect } from "react";
import Aboutban from "../../components/otherBanners/Aboutban";

const FacultyAndStaff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ===================== DATA (UNCHANGED) ===================== */

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
      sn: 1,
      name: "Dr. Munde S. S.",
      designation: "Principal",
      department: "Marathi",
      mobile: "7721961117",
      subject: "Marathi",
      profile: "View",
    },
    {
      sn: 2,
      name: "Dr. Jadhav B. K.",
      designation: "Professor",
      department: "Marathi",
      mobile: "9423758123",
      subject: "Marathi",
      profile: "View",
    },
    {
      sn: 3,
      name: "Dr. Saruk C. U.",
      designation: "Associate Professor",
      department: "Physical Director",
      mobile: "9765518395",
      subject: "Physical Director",
      profile: "View",
    },
    {
      sn: 4,
      name: "Dr. Gite L. B.",
      designation: "Professor",
      department: "Marathi",
      mobile: "9421560484",
      subject: "Marathi",
      profile: "View",
    },
    {
      sn: 5,
      name: "Prof. Gite D. S.",
      designation: "Professor",
      department: "Marathi",
      mobile: "9764183939",
      subject: "Marathi",
      profile: "View",
    },
    {
      sn: 6,
      name: "Dr. Khade V. B.",
      designation: "Associate Professor",
      department: "Hindi",
      mobile: "9405784135",
      subject: "Hindi",
      profile: "View",
    },
    {
      sn: 7,
      name: "Dr. Nagargoje S. L.",
      designation: "Associate Professor",
      department: "History",
      mobile: "9764589277",
      subject: "History",
      profile: "View",
    },
    {
      sn: 8,
      name: "Dr. Munde S. M.",
      designation: "Professor",
      department: "Poli. Science",
      mobile: "94226063576",
      subject: "Poli. Sci.",
      profile: "View",
    },
    {
      sn: 9,
      name: "Dr. Tandale S. S.",
      designation: "Assistant Professor",
      department: "Sociology",
      mobile: "9763813942",
      subject: "Sociology",
      profile: "View",
    },
    {
      sn: 10,
      name: "Dr. Sawargaonkar S. L.",
      designation: "Professor",
      department: "Economics",
      mobile: "7588634005",
      subject: "Economics",
      profile: "View",
    },
    {
      sn: 11,
      name: "Dr. Hange S. S.",
      designation: "Professor",
      department: "Pub. Admin",
      mobile: "9851134135",
      subject: "Pub. Admin.",
      profile: "View",
    },
    {
      sn: 12,
      name: "Dr. Watore S. M.",
      designation: "Professor",
      department: "Psychology",
      mobile: "7588586854",
      subject: "Psychology",
      profile: "View",
    },
    {
      sn: 13,
      name: "Dr. Sirsat R. B.",
      designation: "Professor",
      department: "Psychology",
      mobile: "9423157757",
      subject: "Psychology",
      profile: "View",
    },
    {
      sn: 14,
      name: "Dr. Ghodke J. V.",
      designation: "Professor",
      department: "Geography",
      mobile: "9860476246",
      subject: "Geography",
      profile: "View",
    },
    {
      sn: 15,
      name: "Dr. Wagh A. P.",
      designation: "Associate Professor",
      department: "Geography",
      mobile: "9763545042",
      subject: "Geography",
      profile: "View",
    },
    {
      sn: 16,
      name: "Dr. Latpate R. R.",
      designation: "Associate Professor",
      department: "Librarian",
      mobile: "9823611726",
      subject: "Librarian",
      profile: "View",
    },
    {
      sn: 17,
      name: "Dr. Kamble S. R.",
      designation: "Assistant Professor",
      department: "English",
      mobile: "7875910615",
      subject: "English",
      profile: "View",
    },
  ];

  /* ===================== TABLE ===================== */

  const SimpleTable = ({ title, columns, data }) => (
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
                {Object.values(row).map((val, i) => (
                  <td
                    key={i}
                    className="px-3 py-2 border-r border-dashed border-gray-400"
                  >
                    {val}
                  </td>
                ))}
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
        {/* HEADING BACKGROUND STRIP */}
        <div className="w-full bg-gray-100 border-b border-gray-300 px-4 py-3">
          <h2 className="text-3xl font-bold text-[#370617] text-center">
            Faculty And Staff
          </h2>
        </div>

        {/* CONTENT */}
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
          />
        </div>
      </section>
    </>
  );
};

export default FacultyAndStaff;
