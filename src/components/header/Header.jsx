import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { getPhone } from "../../features/phone/phoneSlice";
import { useDispatch, useSelector } from "react-redux";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    // path: "/about-us",
    dropdown: [
      { name: "About Us", path: "/about-us" },
      { name: "Faculty And Staff", path: "/faculty-and-staff" },
    ],
  },
  { name: "Courses", path: "/course" },
  {
    name: "Academics",
    // path: "/academic",
    dropdown: [
      { name: "Syllabus", path: "/syllabus" },
      { name: "Academic Calendar", path: "/academic-calendar" },
      { name: "Academic Time-Table", path: "/time-table" },
      { name: "Facilities", path: "/facilities" },
      { name: "IQAC", path: "/iqac" },
    ],
  },

  { name: "Gallery", path: "/our-gallery" },
  // { name: "Certificates", path: "/certificates" },
  { name: "Program", path: "/program" },
  { name: "Blog", path: "/our-blog" },

  // { name: "NGO NEWS", path: "https://ngoguru.in/ngoguru--news" },
  { name: "Contact", path: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhone());
  }, [dispatch]);

  const phState = useSelector((state) => state?.phone?.phone);

  return (
    <>
      <header className="sticky w-full top-0 z-50 bg-[#1D2129]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex gap-4 items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="logo"
                className="w-16 h- lg:w-16 lg:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 lg:gap-6">
              {navLinks?.map((link, index) => (
                <div key={index} className="relative group">
                  <NavLink
                    to={link?.path}
                    className={({ isActive }) =>
                      `relative text-[11px] sm:text-xs md:text-sm font-medium text-white transition-colors hover:text-orange-500 flex items-center gap-1 ${
                        isActive ? "text-orange-500" : ""
                      }`
                    }
                  >
                    {link.name}
                    {link.dropdown && <FiChevronDown />}
                    <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </NavLink>

                  {link.dropdown && (
                    <div className="absolute left-0 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white rounded-lg shadow-xl py-2 border-t-4 border-orange-500 overflow-hidden">
                        {link.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-50 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right icons + Donate button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/donate-us"
              className="donate_btn text-xs md:text-sm text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-100 px-5 py-2 transition-all duration-300 ease-in-out"
              style={{ background: "#00AFAD" }}
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl text-[#EEA22C]">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30"
            onClick={toggleMenu}
          />
        )}
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-40 p-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="logo" className="w-10 h-10" />
              {/* <span className="text-lg font-bold text-[#0a0a32]">Charius</span> */}
            </div>

            {navLinks?.map((link, index) => (
              <div key={index}>
                <NavLink
                  to={link?.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between text-[#0a0a32] text-base hover:text-orange-500 transition-colors py-2 ${
                      isActive ? "font-bold text-orange-500" : ""
                    }`
                  }
                >
                  {link?.name}
                  {link.dropdown && <FiChevronDown />}
                </NavLink>
                {link.dropdown && (
                  <div className="pl-4 flex flex-col border-l-2 border-gray-100 ml-2">
                    {link.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-gray-600 hover:text-orange-500 py-2"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
