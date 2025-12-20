
import React from 'react';
import Aboutban from './Aboutban'; // Make sure the path is correct
import banImg from "../../assets/11.webp";

const BlogBan = () => {
  return (
    <Aboutban
      title="Our Blogs"
      subtitle={
        <>
          <span className="text-gray-300">Shivsagar Sevabhavi Shikshan Prasarak Mandal College</span>
          <span className="text-red-500"> / Blogs</span>
        </>
      }
      backgroundImage={banImg}
    />
  );
};

export default BlogBan;
