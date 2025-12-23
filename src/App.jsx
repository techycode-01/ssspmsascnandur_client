import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
// import Causes from "./pages/cause/Causes";
import Program from "./pages/program/Program";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Certificates from "./pages/gallery/Certificates";
import ReadEvent from "./pages/program/ReadEvent";
import Blog from "./pages/blog/Blog";
import ReadBlog from "./pages/blog/ReadBlog";
import ScrollToTop from "./components/scrollTop/Scrollontop";
import Donation from "./pages/donation/Donation";
import ProjectPoshan from "./pages/projectPoshan/ProjectPoshan";
import Courses from "./pages/Course/Courses";
// import Academics from "./pages/Academics/Academics";
import Syllabus from "./pages/Academics/Syllabus";
import AcademicCalendar from "./pages/Academics/AcademicCalendar";
import Facilities from "./pages/Academics/Facilities";
import AcademicTimeTable from "./pages/Academics/AcademicTimeTable";
import Iqac from "./pages/Academics/Iqac";
import FacultyAndStaff from "./pages/about/FacultyAndStaff";

function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faculty-and-staff" element={<FacultyAndStaff />} />
          {/* <Route path='/causes' element={<Causes />} /> */}
          <Route path="/program" element={<Program />} />
          <Route path="/read-prog/:id" element={<ReadEvent />} />
          <Route path="course" element={<Courses />} />

          {/* <Route path="academic" element={<Academics />} /> */}
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/time-table" element={<AcademicTimeTable />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/iqac" element={<Iqac />} />

          <Route path="/our-blog" element={<Blog />} />
          <Route path="/read-blog/:id" element={<ReadBlog />} />
          <Route path="/our-gallery" element={<Gallery />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/project-poshan" element={<ProjectPoshan />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/donate-us" element={<Donation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
