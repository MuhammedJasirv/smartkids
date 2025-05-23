import React from "react";
import { motion } from "framer-motion";

const SlidingText = () => {
  const text = "A safe, simple, and smart way of managing your children’s finances";

  return (
    <div className="relative w-full overflow-hidden py-8 m-auto flex items-center #95C83E">
      <motion.div
        className="absolute flex items-center whitespace-nowrap text-white text-xl font-semibold space-x-10"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center  space-x-2">
            <div className="bg-[#3E89C8] h-5 w-5 rounded-full mt-1"></div>
            <span className="text-black font-sans font-bold text-2xl">{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingText;
