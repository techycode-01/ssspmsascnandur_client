import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSingleProgramme } from '../../features/programme/programmeSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ReadEvent = () => {

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const dispatch = useDispatch();
  const location = useLocation();
  const getReadId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getSingleProgramme(getReadId));
  }, []);

  const event = useSelector((state) => state?.programme);

  if (!event) {
    return <div className="text-center text-red-500 mt-20">Event not found</div>;
  }

  return (
    <section className="px-4 sm:px-8 lg:px-24 py-20 bg-white">
      {/* Event Images Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg overflow-hidden shadow-md"
      >
        {event?.progImages && event.progImages.length > 0 ? (
          event.progImages.length === 1 ? (
            // Single image - no carousel needed
            <img
              src={event.progImages[0]?.url}
              alt="Event"
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
              {event.progImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image?.url}
                    alt={`Event ${index + 1}`}
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
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 flex flex-col lg:flex-row gap-8"
      >
        {/* Date Card */}
        <div className="bg-orange-100 text-center h-32 p-6 rounded-lg w-full lg:w-1/4 shadow-sm">
          <h2 className="text-5xl font-bold text-orange-500">{event?.progDate}</h2>
          <p className="text-md mt-2 font-medium">{event?.progMonth}</p>
        </div>

        {/* Main Info */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            {event?.progHeading}
          </h1>

          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-orange-500" />
              <span>{event?.progMonth}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>{event?.progAddress}</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: event?.progContent }}>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ReadEvent;
