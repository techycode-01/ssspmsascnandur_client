import React, { useEffect } from "react";
import AcademicBan from "../../components/otherBanners/AcademicBan";
import AcademicData from "./AcademicData";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AcademicBan />
      <AcademicData />
    </>
  );
};

export default Academics;
