import React, { useEffect } from "react";
import CourseBan from "../../components/otherBanners/CourseBan";
import CoursePrograms from "./CoursePrograms";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CourseBan />
      <CoursePrograms />
    </>
  );
};

export default Courses;
