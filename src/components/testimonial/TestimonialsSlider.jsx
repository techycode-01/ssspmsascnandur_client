import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import { getTestimonialThunk } from "../../features/testimonial/testimonialSlice";
import { useDispatch, useSelector } from "react-redux";
import clientBg from "../../assets/clientBg.webp";

// const testimonials = [
//   {
//     text: "Charius is a beacon of hope and change in the charitable organizations. Its commitment to comprehensive solutions, innovation, and community.",
//     name: "Elizabeth Joe",
//     title: "Founder of ADRF",
//     img: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     text: "I was impressed by the charius to keeping donors informed about the tangible outcomes of their contributions. Regular updates on projects.",
//     name: "Esther Howard",
//     title: "Fund Riser",
//     img: "https://randomuser.me/api/portraits/men/75.jpg",
//   },
//   {
//     text: "This comprehensive approach resonates with me, as it reflects Charius' dedication to creating lasting change across various facets of society.",
//     name: "Esther Howard",
//     title: "President of Sales",
//     img: "https://randomuser.me/api/portraits/men/76.jpg",
//   },
//   {
//     text: "Charius' work has left a deep impact. Their approach to social development is rooted in sustainability and transparency.",
//     name: "Sarah Wilson",
//     title: "Community Leader",
//     img: "https://randomuser.me/api/portraits/women/70.jpg",
//   },
// ];

const TestimonialsSlider = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestimonialThunk());
  }, []);

  const testimonials = useSelector((state) => state?.testimonial?.testimonial || []);

  return (
    <div className="px-4 md:px-8 bg-no-repeat  bg-cover py-15" 
      style={{background: `url(${clientBg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "",
      // backgroundAttachment:"fixed"
    }}>

    <motion.h2
        className="text-4xl text-center font-semibold mb-5 -mt-5"
        style={{ color: '#e4ececff' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Testimonials
      </motion.h2>
      {/* <motion.h2
        className="text-3xl text-center sm:text-4xl font-bold text-white mb-10 leading-tight"
        style={{textShadow:"2px 2px 2px #000"}}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      > 
       Voices from Our <br /> School Community
      </motion.h2> */}

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials?.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-3xl rounded-xl overflow-hidden border border-white/20 shadow-lg p-6 flex flex-col justify-between h-full relative"
              >
                {/* Shine overlay */}
                <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:-top-1/4 before:-left-1/4 before:w-[200%] before:h-[200%] before:bg-gradient-to-tr before:from-white/40 before:via-white/10 before:to-transparent before:rotate-12 before:animate-shine" />
                <div className="text-4xl text-orange-400 mb-4 leading-none">❝</div>
                <p className="text-white text-sm md:text-base leading-relaxed mb-8" style={{textShadow:"1px 1px 1px #000"}}>
                  {testimonial?.comment}
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <img
                    src={testimonial?.images[0]?.url}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <p className="font-semibold text-sm text-orange-400">{testimonial?.name}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
