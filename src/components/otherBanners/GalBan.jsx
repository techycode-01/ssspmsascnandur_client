import React from 'react';
import { useLocation } from 'react-router-dom';
import Aboutban from './Aboutban'; // Make sure the path is correct
import banImg from "../../assets/11.webp";

const GalBan = () => {
  const location = useLocation();

  const isCertificatesPage = location.pathname.includes('/certificates');

  return (
    <Aboutban
      title={isCertificatesPage ? "Our Certificates" : "Our Gallery"}
      subtitle={
        <>
          <span className="text-gray-300">Shivsagar Sevabhavi Shikshan Prasarak Mandal College </span>
          <span className="text-red-500">
            {isCertificatesPage ? " / Certificates" : " / Gallery"}
          </span>
        </>
      }
      backgroundImage={banImg}
    />
  );
};

export default GalBan;
