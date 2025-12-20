import React from "react";
import Aboutban from "./Aboutban"; // Make sure the path is correct
import banImg from "../../assets/11.webp";

const CourseBan = () => {
  return (
    <Aboutban
      title="Our Programs"
      subtitle={
        <>
          <span className="text-gray-300">
            Shivsagar Sevabhavi Shikshan Prasarak Mandal College
          </span>
          <span className="text-red-500"> / Courses</span>
        </>
      }
      backgroundImage={banImg}
    />
  );
};

export default CourseBan;
