import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getProgThunk } from "../../features/programme/programmeSlice";
import { Link } from "react-router-dom";
import eventBg from "../../assets/eventBg.png";

// const events = new Array(15).fill(0).map((_, i) => ({
//   id: i + 1,
//   title: 'Manager Disapproved of the Most Recent Work.',
//   description:
//     'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.',
//   date: '29',
//   month: 'July',
//   venue: '350 5th AveNew York, NY 118 United States',
//   image: `https://charitics.temptics.com/assets/img/event-img.jpg`,
// }));

const stripHtmlAndTruncate = (html, length) => {
  if (!html) return "";
  const text = html.replace(/<[^>]+>/g, "");
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length) + "...";
};

const EventCard = ({ event, index }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="group relative flex flex-col md:flex-row bg-white/30 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-2xl"
  >
    {/* Image Section */}
    <div className="relative w-full md:w-1/3 h-64 md:h-auto z-10 overflow-hidden">
      <img
        src={
          event?.images && event.images.length > 0
            ? event.images[0]?.url
            : "/placeholder-image.jpg"
        }
        alt={event.heading}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute text-center p-2 top-2 left-2 bg-teal-500 text-white font-semibold text-sm px-3 py-1 rounded-md shadow">
        {event.date} <br />
        {event.month}
      </div>
    </div>

    {/* Text Section */}
    <div
      className="p-4 md:w-2/3 text-white z-10 flex flex-col"
      style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
    >
      <h3 className="font-bold text-lg truncate">{event?.heading}</h3>
      <p className="text-sm my-2 border-b border-b-white/30 pb-3 flex-grow h-24 overflow-hidden">
        {stripHtmlAndTruncate(event?.content, 150)}
      </p>
      <p className="text-sm text-cyan-300 font-semibold">Venue</p>
      <p className="text-sm mb-4 leading-6 truncate">{event.address}</p>
      <Link
        to={`/read-prog/${event?._id}`}
        className="mt-auto flex items-center text-white bg-cyan-600 px-4 py-2 rounded-full hover:bg-cyan-700 transition text-sm w-fit"
      >
        <span className="mr-2 bg-white rounded-full p-1 ">
          <MdKeyboardDoubleArrowRight
            style={{ color: "#0891b2", fontSize: "22px" }}
          />
        </span>{" "}
        Event Details
      </Link>
    </div>
  </motion.div>
);

const Pagination = ({ totalPages, currentPage, setPage }) => (
  <div className="flex justify-center items-center gap-2 mt-6">
    <button
      onClick={() => setPage((p) => Math.max(p - 1, 1))}
      disabled={currentPage === 1}
      className="p-2 border bg-white rounded-full cursor-pointer hover:bg-gray-200"
    >
      <ChevronLeft size={16} />
    </button>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => setPage(i + 1)}
        className={`w-8 h-8 rounded-full text-sm font-semibold ${
          currentPage === i + 1 ? "bg-[#00AFAD] text-white" : "bg-gray-200"
        }`}
      >
        {i + 1}
      </button>
    ))}
    <button
      onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="p-2 border bg-white rounded-full cursor-pointer hover:bg-gray-200"
    >
      <ChevronRight size={16} />
    </button>
  </div>
);

const EventPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProgThunk());
  }, []);

  const events = useSelector((state) => state?.programme?.programme) || [];

  const eventsPerPage = 6;
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + eventsPerPage);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <>
      <section
        className="bg-no-repeat bg-cover bg-center"
        style={{
          background: `url(${eventBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
          <motion.h3
            className="text-lg text-center text-[#00AFAD] font-semibold mb-2"
            style={{ textShadow: "2px 2px 2px #000" }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Programs
          </motion.h3>
          <motion.h2
            className="text-3xl text-center sm:text-4xl font-bold text-white mb-12 leading-tight"
            style={{ textShadow: "2px 2px 2px #000" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Initiatives That Make a Difference
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {[...currentEvents]?.reverse()?.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default EventPage;
