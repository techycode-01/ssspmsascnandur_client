import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaCalendarAlt, FaComment } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBlog } from '../../features/blog/blogSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
  

const ReadBlog = () => {

    useEffect(() => {window.scrollTo(0,0)}, []);

    const dispatch = useDispatch();    
    const location = useLocation();
    const getReadId = location.pathname.split("/")[2];  
  
    useEffect(() => {
      dispatch(getSingleBlog(getReadId));
    }, []);
  
    const blogPosts = useSelector((state) => state?.blog);

    if (!blogPosts) {
        return <div className="text-center text-red-500 mt-20">Blogs not found</div>;
    }

  return (
    <div className="bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-15 flex flex-col lg:flex-row gap-10">
          
          {/* Left - Blog Posts */}
          <div className="w-full space-y-10">
              <motion.div
                key={blogPosts._id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="pb-6"
              >
                {/* Blog Images Carousel */}
                <div className="rounded-lg overflow-hidden shadow-md mb-5">
                  {blogPosts?.blogImages && blogPosts.blogImages.length > 0 ? (
                    blogPosts.blogImages.length === 1 ? (
                      // Single image - no carousel needed
                      <img
                        src={blogPosts.blogImages[0]?.url}
                        alt="Blog"
                        className="w-full h-[280px] md:h-[400px] object-cover"
                      />
                    ) : (
                      // Multiple images - use Swiper carousel with responsive layout
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                          delay: 4000,
                          disableOnInteraction: false,
                        }}
                        breakpoints={{
                          640: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 15,
                          },
                          1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                          },
                        }}
                        className="w-full h-[280px] md:h-[400px]"
                      >
                        {blogPosts.blogImages.map((image, index) => (
                          <SwiperSlide key={index}>
                            <img
                              src={image?.url}
                              alt={`Blog ${index + 1}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )
                  ) : (
                    // Fallback for no images
                    <div className="w-full h-[280px] md:h-[400px] bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">No images available</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2 ml-4">
                  <span className="flex items-center gap-1"><FaUserAlt className='text-[#FF7350]' /> {blogPosts?.blogAuthor}</span>
                  <span className="flex items-center gap-1"><FaCalendarAlt className='text-[#FF7350]' /> {blogPosts?.blogDate}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 ml-4">{blogPosts?.blogHeading}</h2>
                <p className="text-sm text-gray-600 mb-8 ml-4" dangerouslySetInnerHTML={{__html: blogPosts?.blogContent}}></p>
              </motion.div>
          </div>
    

        </div>
   
  )
}

export default ReadBlog;