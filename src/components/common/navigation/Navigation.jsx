import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../assets/images/common/LogoNaviagation.png";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import { Link } from "react-router-dom";

const Navigation = ({image}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Parents", path: "/parents" },
  { label: "Student", path: "/student" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact" },
];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(62, 137, 200, 0.4)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      boxShadow: "0px 2px 5px rgba(62, 137, 200, 0.4)",
    },
  };

  return (
    <div  style={image ? { backgroundImage: `url(${image})` } : {}}>
      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex lg:w-[90%] xl:w-[85%] pt-2 mx-auto xl:text-base lg:px-6 justify-between md:px-8 items-center text-white"
      >
        <motion.img
          src={Logo}
          alt="Logo"
          className="h-full p-2 object-contain"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />

        <motion.div
          className="flex items-center md:space-x-4 lg:space-x-8 xl:space-x-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              onHoverStart={() => setHoveredItem(item.label)}
              onHoverEnd={() => setHoveredItem(null)}
              className="relative"
            >
              <Link to={item.path}>
                <span className="font-sans font-semibold md:text-sm lg:text-base xl:text-lg hover:text-gray-200 cursor-pointer">
                  {item.label}
                </span>
              </Link>
              {hoveredItem === item.label && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center lg:space-x-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <LanguageSelector />
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] py-3 xl:h-14 xl:px-10 px-3 rounded-4xl font-sans font-semibold md:text-sm lg:text-lg text-black shadow-[-4px_4px_0px_rgb(255,255,255)] hover:opacity-90"
          >
            Download the App
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden flex justify-between items-center text-white p-4"
      >
        <motion.img
          src={Logo}
          alt="Logo"
          className="h-16 object-contain"
          whileTap={{ scale: 0.9 }}
        />
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <motion.button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
          </motion.button>
        </div>
      </motion.div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden w-full overflow-hidden"
          >
            <motion.div
              className="px-6 py-4 space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.p
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-sans font-semibold text-lg text-white hover:text-gray-200 cursor-pointer block py-2"
                >
                  {item.label}
                </motion.p>
              ))}
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] h-14 px-10 rounded-4xl font-sans font-semibold text-lg text-black shadow-[-4px_4px_0px_rgb(255,255,255)] mb-2"
              >
                Download the App
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
