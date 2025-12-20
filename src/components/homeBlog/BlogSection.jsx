import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import { getBlogThunk } from "../../features/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import bgVideo from "../../assets/bgVideo.mp4";

const BlogSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogThunk());
  }, [dispatch]);

  const blogState = useSelector((state) => state?.blog?.blog || []);

  return (
    <div className="relative py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/32 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <p
            className="text-md font-semibold"
            style={{ textShadow: "2px 2px 2px #000", color: '#00AFAD' }}
          >
            From The Blog
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mt-2 leading-tight"
            style={{ textShadow: "2px 2px 2px #000" }}
          >
            Our Latest News <br /> and Articles
          </h2>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Autoplay]}
        >
          {[...blogState]?.reverse()?.map((blog, index) => (
            <SwiperSlide key={blog.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/10 border border-[#ccc] shadow-xl rounded-xl overflow-hidden text-white relative"
              >
                <div className="relative w-full h-60 border-b border-white">
                  <img
                    src={blog.images[0]?.url}
                    alt={blog.heading}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 relative z-10">
                  <div className="text-sm bg-yellow-400 text-black font-semibold rounded px-3 py-1 inline-block mb-3 shadow-md">
                    {blog.date}
                  </div>
                  <div
                    className="flex items-center gap-3 text-sm text-gray-200 mb-2"
                    // style={{ textShadow: "2px 2px 2px #000" }}
                  >
                    <span>👤 admin</span>
                  </div>
                  <h3
                    className="font-semibold text-lg text-white mb-2"
                    // style={{ textShadow: "2px 2px 2px #000" }}
                  >
                    {blog.heading?.slice(0, 50) + "..."}
                  </h3>
                  <p className="text-sm text-gray-100">{blog.description}</p>
                  <Link
                    to={`/read-blog/${blog?._id}`}
                    className="mt-4 text-sm text-yellow-400 hover:underline flex items-center gap-1"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSection;
