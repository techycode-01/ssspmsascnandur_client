import React from 'react'
import Aboutban from './Aboutban'; // Make sure the path is correct
import banImg from "../../assets/11.webp";

const CauseBan = () => {
  return (
    <Aboutban
        title="Causes"
        subtitle={
          <>
            <span className="text-gray-300">Shivsagar Sevabhavi Shikshan Prasarak Mandal College</span>
            <span className="text-red-500"> / Causes</span>
          </>
        }
        backgroundImage={banImg}
      />
    );
  };

export default CauseBan;