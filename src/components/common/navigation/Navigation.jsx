import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../assets/images/common/LogoNaviagation.png";
import LanguageSelector from "./LanguageSelector/LanguageSelector";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div >
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-[85%] pt-2 mx-auto justify-between md:px-8 items-center text-white ">
        <img src={Logo} alt="Logo" className="h-full p-2 object-contain" />
        <div className="flex items-center space-x-14">
          <p className="font-sans font-semibold text-lg hover:text-gray-200 cursor-pointer">
            Home
          </p>
          <p className="font-sans font-semibold text-lg hover:text-gray-200 cursor-pointer">
            About Us
          </p>
          <p className="font-sans font-semibold text-lg hover:text-gray-200 cursor-pointer">
            Parents
          </p>
          <p className="font-sans font-semibold text-lg hover:text-gray-200 cursor-pointer">
            Student
          </p>
          <p className="font-sans font-semibold text-lg hover:text-gray-200 cursor-pointer">
            FAQ
          </p>
          <p className="font-sans font-semibold text-lg hover:text-gray-200 cursor-pointer">
            Contact Us
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <LanguageSelector />
          <button className="bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] h-14 px-10 rounded-4xl font-sans font-semibold text-lg text-black shadow-[-4px_4px_0px_rgb(255,255,255)] hover:opacity-90">
            Download the App
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center text-white p-4">
        <img src={Logo} alt="Logo" className="h-16 object-contain" />
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden w-full px-6 py-4 space-y-4"
          >
            {[
              "Home",
              "About Us",
              "Parents",
              "Student",
              "FAQ",
              "Contact Us",
            ].map((item) => (
              <p
                key={item}
                className="font-sans font-semibold text-lg text-white hover:text-gray-200 cursor-pointer block py-2"
              >
                {item}
              </p>
            ))}
            <button className="w-full bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] h-14 px-10 rounded-4xl font-sans font-semibold text-lg text-black shadow-[-4px_4px_0px_rgb(255,255,255)] mb-2">
              Download the App
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
