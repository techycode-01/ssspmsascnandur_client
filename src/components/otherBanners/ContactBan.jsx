import React from 'react';
import Aboutban from './Aboutban'; // Make sure the path is correct
import banImg from "../../assets/11.webp";

const ContactBan = () => {
  return (
    <Aboutban
      title="Connect With Us"
      subtitle={
        <>
          <span className="text-gray-300">Shivsagar Sevabhavi Shikshan Prasarak Mandal College</span>
          <span className="text-red-500"> / Contact Us</span>
        </>
      }
      backgroundImage={banImg}
    />
  );
};

export default ContactBan;
