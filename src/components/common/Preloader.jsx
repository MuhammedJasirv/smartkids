import React from 'react';
import { motion } from 'framer-motion';
import coinImage from '../../assets/images/home/how it work/coins/1.png';

const flipVariants = {
  animate: {
    rotateY: [0, 180, 360],
    transition: {
      duration: 1.2,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <motion.div
        className="w-20 h-20"
        variants={flipVariants}
        animate="animate"
      >
        <img
          src={coinImage}
          alt="Loading Coin"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default PreLoader;
