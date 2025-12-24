import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Aboutban from "../../components/otherBanners/Aboutban";
import principalImg from "../../assets/facultystaff/principal.webp";
import defaultProfileImg from "../../assets/staff-profile.webp";

const FacultyProfile = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ===================== STAFF DATA (SAME AS LIST PAGE) ===================== */

  const staff = [
    {
      id: "dr-munde-ss",
      name: "Dr. Munde S. S.",
      designation: "Principal",
      department: "Marathi",
      subject: "Marathi",
      mobile: "7721961117",
      email: "Shankarmunde40@gmail.com",
      qualification: "",
      experience: "",
      image: principalImg,
    },
    {
      id: "dr-jadhav-bk",
      name: "Dr. Jadhav B. K.",
      designation: "Professor",
      department: "Marathi",
      subject: "Marathi",
      mobile: "9423758123",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-saruk-cu",
      name: "Dr. Saruk C. U.",
      designation: "Associate Professor",
      department: "Physical Education",
      subject: "Physical Education",
      mobile: "9765518395",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-gite-lb",
      name: "Dr. Gite L. B.",
      designation: "Professor",
      department: "Marathi",
      subject: "Marathi",
      mobile: "9421560484",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "prof-gite-ds",
      name: "Prof. Gite D. S.",
      designation: "Professor",
      department: "Marathi",
      subject: "Marathi",
      mobile: "9764183939",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-khade-vb",
      name: "Dr. Khade V. B.",
      designation: "Associate Professor",
      department: "Hindi",
      subject: "Hindi",
      mobile: "9405784135",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-nagargoje-sl",
      name: "Dr. Nagargoje S. L.",
      designation: "Associate Professor",
      department: "History",
      subject: "History",
      mobile: "9764589277",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-munde-sm",
      name: "Dr. Munde S. M.",
      designation: "Professor",
      department: "Political Science",
      subject: "Political Science",
      mobile: "9422606357",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-tandale-ss",
      name: "Dr. Tandale S. S.",
      designation: "Assistant Professor",
      department: "Sociology",
      subject: "Sociology",
      mobile: "9763813942",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-sawargaonkar-sl",
      name: "Dr. Sawargaonkar S. L.",
      designation: "Professor",
      department: "Economics",
      subject: "Economics",
      mobile: "7588634005",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-hange-ss",
      name: "Dr. Hange S. S.",
      designation: "Professor",
      department: "Public Administration",
      subject: "Public Administration",
      mobile: "9851134135",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-watore-sm",
      name: "Dr. Watore S. M.",
      designation: "Professor",
      department: "Psychology",
      subject: "Psychology",
      mobile: "7588586854",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-sirsat-rb",
      name: "Dr. Sirsat R. B.",
      designation: "Professor",
      department: "Psychology",
      subject: "Psychology",
      mobile: "9423157757",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-ghodke-jv",
      name: "Dr. Ghodke J. V.",
      designation: "Professor",
      department: "Geography",
      subject: "Geography",
      mobile: "9860476246",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-wagh-ap",
      name: "Dr. Wagh A. P.",
      designation: "Associate Professor",
      department: "Geography",
      subject: "Geography",
      mobile: "9763545042",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-latpate-rr",
      name: "Dr. Latpate R. R.",
      designation: "Associate Professor",
      department: "Library",
      subject: "Library Science",
      mobile: "9823611726",
      email: "",
      qualification: "",
      experience: "",
    },
    {
      id: "dr-kamble-sr",
      name: "Dr. Kamble S. R.",
      designation: "Assistant Professor",
      department: "English",
      subject: "English",
      mobile: "7875910615",
      email: "",
      qualification: "",
      experience: "",
    },
  ];

  /* ===================== FIND FACULTY ===================== */

  const faculty = staff.find((item) => item.id === id);

  if (!faculty) {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Faculty Profile Not Found
          </h2>
          <Link to="/faculty-and-staff" className="text-blue-700 underline">
            Back to Faculty List
          </Link>
        </div>
      </section>
    );
  }

  /* ===================== RENDER ===================== */

  return (
    <>
      <Aboutban />

      <section className="bg-white min-h-screen">
        {/* PAGE HEADER */}
        <div className="w-full bg-gray-100 border-b border-gray-300 px-4 py-3">
          <h2 className="text-3xl font-bold text-[#370617] text-center">
            Faculty Profile
          </h2>
        </div>

        {/* PROFILE CARD */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              {/* PROFILE IMAGE */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={faculty.image || defaultProfileImg}
                  alt={faculty.name}
                  className="w-48 h-48 object-cover rounded-full border border-gray-300"
                />
              </div>

              {/* PROFILE DETAILS */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-[#370617] mb-4">
                  {faculty.name}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <p>
                    <b>Designation:</b> {faculty.designation}
                  </p>
                  <p>
                    <b>Department:</b> {faculty.department}
                  </p>
                  <p>
                    <b>Subject:</b> {faculty.subject}
                  </p>
                  <p>
                    <b>Qualification:</b>{" "}
                    {faculty.qualification || "Not Available"}
                  </p>
                  <p>
                    <b>Experience:</b> {faculty.experience || "Not Available"}
                  </p>
                  <p>
                    <b>Mobile:</b> {faculty.mobile}
                  </p>
                  <p>
                    <b>Email:</b> {faculty.email || "Not Available"}
                  </p>
                </div>

                {/* BACK BUTTON */}
                <div className="mt-6">
                  <Link
                    to="/faculty-and-staff"
                    className="inline-block bg-[#370617] text-white px-5 py-2 rounded hover:bg-[#5a0a22]"
                  >
                    ← Back to Faculty List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultyProfile;
