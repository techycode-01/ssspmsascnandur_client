import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getSocMediaThunk } from "../../features/socialMedia/socialSlice";
import { getPhone } from "../../features/phone/phoneSlice";
import { getEmail } from "../../features/emails/emailSlice";
import { getAddress } from "../../features/addressed/addressSlice";
import { Link } from "react-router-dom";

const Footer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSocMediaThunk());
    dispatch(getPhone());
    dispatch(getEmail());
    dispatch(getAddress());
  }, [dispatch]);

  const phState = useSelector((state) => state?.phone?.phone || []);
  const addState = useSelector((state) => state?.address?.address || []);
  const socState = useSelector((state) => state?.socMedia?.socMedia || []);
  const emailState = useSelector((state) => state?.email?.email || []);

  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white px-6 py-16 sm:px-12 md:px-20 lg:px-24"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Charius" className="w-22 h-22" />
              <h1 className="text-base font-bold">
                Shivsagar Sevabhavi Shikshan Prasarak Mandal College
              </h1>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Shivsagar Sevabhavi Shikshan Prasarak Mandal established Arts,
              Science and Commerce College, Nandur (Ghat) in 2000. We are
              dedicated to imparting higher education to economically and
              socially backward students from rural areas, living by our motto
              'from Ignorance to Knowledge.
            </p>
            <div className="flex gap-5">
              {socState?.map((soc, i) => (
                <div key={i} className="flex gap-5">
                  <Link
                    to={soc?.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaFacebookF size={20} />
                  </Link>
                  <Link
                    to={soc?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaTwitter size={20} />
                  </Link>
                  <Link
                    to={soc?.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#E4405F] transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaInstagram size={20} />
                  </Link>
                  <Link
                    to={soc?.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF0000] transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaYoutube size={20} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2 hover:text-[#00AFAD] transition-colors">
                <FaAngleDoubleRight className="text-[#00AFAD]" />
                <Link to="/">Home</Link>
              </li>

              <li className="flex items-center gap-2 hover:text-[#00AFAD] transition-colors">
                <FaAngleDoubleRight className="text-[#00AFAD]" />
                <Link to="/about-us">About</Link>
              </li>

              <li className="flex items-center gap-2 hover:text-[#00AFAD] transition-colors">
                <FaAngleDoubleRight className="text-[#00AFAD]" />
                <Link to="/course">Courses</Link>
              </li>

              <li className="relative group flex items-center gap-2 hover:text-[#00AFAD] transition-colors w-fit">
                <FaAngleDoubleRight className="text-[#00AFAD]" />
                <span className="cursor-pointer">Academics</span>
                <div className="absolute left-full top-[-4rem] ml-3 w-40 bg-gray-800 text-gray-300 shadow-xl rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-l-4 border-[#00AFAD]">
                  <ul className="space-y-0">
                    {[
                      { name: "Syllabus", path: "/syllabus" },
                      { name: "Academic Calendar", path: "/academic-calendar" },
                      { name: "Academic Time-Table", path: "/time-table" },
                      { name: "Facilities", path: "/facilities" },
                      { name: "IQAC", path: "/iqac" },
                    ].map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          to={sub.path}
                          className="block px-2 py-2 hover:bg-gray-700 hover:text-[#00AFAD] rounded-md text-xs font-medium transition-colors"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="flex items-center gap-2 hover:text-[#00AFAD] transition-colors">
                <FaAngleDoubleRight className="text-[#00AFAD]" />
                <Link to="/our-gallery">Gallery</Link>
              </li>

              <li className="flex items-center gap-2 hover:text-[#00AFAD] transition-colors">
                <FaAngleDoubleRight className="text-[#00AFAD]" />
                <Link to="/program">Program</Link>
              </li>

              <li className="flex items-center gap-2 hover:text-[#00AFAD] transition-colors">
                <FaAngleDoubleRight className="text-[#00AFAD]" />
                <Link to="/our-blog">Blog</Link>
              </li>

              <li className="flex items-center gap-2 hover:text-[#00AFAD] transition-colors">
                <FaAngleDoubleRight className="text-[#00AFAD]" />
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Contact Info
            </h2>
            <p className="text-sm mb-4 text-gray-400">
              Please feel free to contact us for any inquiries.
            </p>
            <ul className="space-y-3 text-sm">
              {phState?.map((ph, i2) => {
                return (
                  <li
                    key={i2}
                    className="flex items-center gap-3 text-gray-400 hover:text-[#00AFAD] transition-colors"
                  >
                    <MdPhone className="text-[#00AFAD]" size={18} />
                    <a href={`tel:+91${ph?.title}`}>(+91) {ph?.title}</a>
                  </li>
                );
              })}
              {addState?.map((add, i3) => {
                return (
                  <li key={i3} className="flex items-start gap-3 text-gray-400">
                    <MdLocationOn
                      className="text-[#00AFAD] mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span className="cursor-pointer hover:text-[#00AFAD]">
                      {add?.title}
                    </span>
                  </li>
                );
              })}
              {emailState?.map((em, i1) => (
                <li
                  key={i1}
                  className="flex items-start gap-3 text-gray-400 hover:text-[#00AFAD] transition-colors"
                >
                  <MdEmail
                    className="text-[#00AFAD] mt-1 flex-shrink-0"
                    size={18}
                  />
                  <a href={`mailto:${em?.title}`}>
                    <span>{em?.title.split("@")[0]}</span>
                    <span className="block min-[425px]:inline">
                      @{em?.title.split("@")[1]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Newsletter
            </h2>
            <p className="text-sm mb-4 text-gray-400">
              We’ll notify you whenever something new and exciting happens at
              our Sansthan.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address *"
                className="flex-grow px-4 py-3 rounded-l-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#00AFAD]"
              />
              <button
                type="submit"
                className="bg-[#00AFAD] hover:bg-[#037a78] text-white px-4 rounded-r-md flex items-center justify-center transition-colors"
              >
                <FaArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-sm mt-12 border-t text-gray-500 border-gray-700 pt-6">
          © Copyright {new Date().getFullYear()} | Shivsagar Sevabhavi Shikshan
          Prasarak Mandal College | All right reserved.
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
