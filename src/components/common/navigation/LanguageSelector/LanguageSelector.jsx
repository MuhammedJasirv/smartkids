import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  {
    code: "EN",
    label: "English",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1024px-Flag_of_the_United_States.png",
  },
  {
    code: "HI",
    label: "Hindi",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png",
  },
  {
    code: "AR",
    label: "Arabic",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1024px-Flag_of_Saudi_Arabia.svg.png",
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelect = (lang) => {
    setSelectedLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center gap-1 text-white cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.code} Flag`}
          className="w-10 h-10 border-3 border-white rounded-full"
        />
        <span className="text-lg font-medium">{selectedLanguage.code}</span>
        <svg
          className={`w-5 h-5 fill-white transition-transform duration-200 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 320 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M96 192h128c17.7 0 26.7 21.5 14.1 34.1l-64 64c-7.8 7.8-20.5 7.8-28.3 0l-64-64C69.3 213.5 78.3 192 96 192z" />
        </svg>
      </div>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            key="dropdown"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-3 w-40 bg-white text-black rounded shadow-md"
          >
            {languages.map((lang) => (
              <div
                key={lang.code}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(lang)}
              >
                <img
                  src={lang.flag}
                  alt={lang.code}
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm">{lang.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
