import React from "react";
import { motion } from "framer-motion";

const SlidingText = () => {
  const text = "A safe, simple, and smart way of managing your children's finances";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slidingTextVariants = {
    hidden: { x: "0%" },
    visible: {
      x: "-50%",
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
        delay: 0.8 // Wait for container animation to finish
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div
      className="relative w-full z-10 overflow-hidden py-8 m-auto flex items-center bg-[#95C83E]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        className="absolute flex items-center whitespace-nowrap text-white text-xl font-semibold space-x-10"
        variants={slidingTextVariants}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <motion.div
              className="bg-[#3E89C8] h-5 w-5 rounded-full mt-1"
              variants={dotVariants}
              custom={i}
            />
            <motion.span 
              className="text-black font-sans font-bold text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.05 }}
            >
              {text}
            </motion.span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SlidingText;