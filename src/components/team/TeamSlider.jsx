import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getOurTeam } from "../../features/ourTeam/ourTeamSlice";

// const teamMembers = [
//   {
//     name: "Alicia Morgan",
//     position: "UI/UX Designer",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "James Clark",
//     position: "Frontend Developer",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Priya Sharma",
//     position: "Project Manager",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     name: "Carlos Rivera",
//     position: "Backend Developer",
//     image: "https://randomuser.me/api/portraits/men/58.jpg",
//   },
//   {
//     name: "Mei Lin",
//     position: "QA Engineer",
//     image: "https://randomuser.me/api/portraits/women/79.jpg",
//   },
// ];

const TeamSlider = () => {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);

  useEffect(() => {
    dispatch(getOurTeam());
  }, []);

  const teamState = useSelector((state) => state?.ourTeam?.ourTeam || []);

  return (
    <div className="pt-[20px] pb-[20px] bg-[#f1f1f1]">
      <div className="mx-auto px-4 mt-[20px] mb-[20px]">
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase text-[22px] text-[#00AFAD] tracking-[3px] font-bold font-poppins mb-3 flex justify-center items-center gap-2">
            OUR LEADERSHIP TEAM
          </span>
          <p className="text-[17px] text-[#535353] font-medium leading-7 font-poppins">
            Meet the dedicated leaders who inspire innovation, guide our vision,
            and work tirelessly to shape a better tomorrow.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6 md:px-10 font-Lora">
        {teamState.map((member, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 bg-[#072724]"
          >
            <div className="relative w-full h-96 overflow-hidden">
              <img
                src={
                  member.images?.[0]?.url || "https://via.placeholder.com/300"
                }
                alt={member.name}
                className="w-full h-full object-right-top transform group-hover:scale-105 transition-transform duration-300 object-cover"
              />

              <div className="absolute top-4 left-4 bg-[#BEFD95] text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                {member.position}
              </div>
            </div>

            <div className="py-4 px-3 text-center">
              <h3 className="text-xl font-bold text-[#D88E3C]">
                {member.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSlider;
