import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { CalendarDays, MapPin } from "lucide-react";
import { getUpcomingThunk } from "../../features/upcomingEvent/upcomingEventSlice";
import { useDispatch, useSelector } from "react-redux";

// const events = [
//   {
//     id: 1,
//     title: "Your Old Clothes are Their Happiness.",
//     date: "25 Jan",
//     time: "11:00 AM - 05:00 PM",
//     location: "UK",
//     image: "https://wpolive.com/charius/wp-content/uploads/2023/11/event-3.jpg",
//     tagColor: "bg-yellow-500",
//   },
//   {
//     id: 2,
//     title: "Solve the Water Problem of World",
//     date: "16 Feb",
//     time: "10:00 AM - 04:00 PM",
//     location: "Singapore",
//     image: "https://wpolive.com/charius/wp-content/uploads/2023/11/event-2.jpg",
//     tagColor: "bg-teal-500",
//   },
//   {
//     id: 3,
//     title: "School For African Poor Children",
//     date: "23 Jun",
//     time: "9:00 AM - 10:00 AM",
//     location: "New York",
//     image: "https://wpolive.com/charius/wp-content/uploads/2023/11/event-1.jpg",
//     tagColor: "bg-red-500",
//   },
//   {
//     id: 4,
//     title: "Solve the Water Problem of World",
//     date: "16 Feb",
//     time: "10:00 AM - 04:00 PM",
//     location: "Singapore",
//     image: "https://wpolive.com/charius/wp-content/uploads/2023/11/event-2.jpg",
//     tagColor: "bg-teal-500",
//   },
// ];

const UpcomingEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingThunk());
  }, []);

  const upcomingState = useSelector((state) => state?.upcoming?.upcoming || []);

  return (
    <section className="py-16 bg-white px-4 sm:px-8 mx-auto max-w-9xl">
      <motion.h3
        className="text-md text-center font-semibold mb-2"
        style={{ color: '#00AFAD' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Stand with Us to Support Them!
      </motion.h3>
      <motion.h2
        className="text-3xl text-center sm:text-4xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Come, Join Our Future Events
      </motion.h2>

      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {[...upcomingState]?.reverse()?.map((event) => (
          <SwiperSlide key={event.id}>
            <div
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={event?.images[0]?.url}
                alt={event?.title}
                className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`absolute top-0 left-0 m-3 px-3 py-1 text-white text-sm font-bold rounded-b-lg ${event.tagColor}`}
              >
                {event?.date}
              </div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                <h3 className="text-lg font-semibold mb-2">{event?.title}</h3>
                <div className="flex items-center text-sm space-x-3">
                  <div className="flex items-center space-x-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>{event?.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event?.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UpcomingEvents;
