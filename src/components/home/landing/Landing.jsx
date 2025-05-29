import React from "react";
import { motion } from "framer-motion";
import Navigation from "../../common/navigation/Navigation";
import Home from "../../../assets/images/ui/home.png";
import PhoneCards from "../../../assets/images/ui/ladingPhoneCards.png";
import PlayStore from '../../../assets/images/ui/Google Play Black.png';
import AppStore from '../../../assets/images/ui/App Store Black.png';

const Landing = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "anticipate"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <div
      className="bg-no-repeat bg-cover bg-center max-h-screen overflow-y-hidden"
      style={{ backgroundImage: `url(${Home})` }}
    >
      <div>
        <Navigation />
      </div>
      
      <motion.div 
        className="flex"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-[65%] pl-32 pt-14 text-white">
          <motion.p 
            className="font-stretch-semi-condensed font-bold text-7xl"
            variants={textVariants}
          >
            Manage your children's finances efficiently
          </motion.p>
          
          <motion.p 
            className="font-sans font-semibold text-xl w-[70%] mt-5"
            variants={textVariants}
          >
            Cultivate smart spending habits in your child by tracking and
            managing their finances with a pocket money solution
          </motion.p>
          
          <motion.div 
            className="flex gap-6 mt-20"
            variants={containerVariants}
          >
            <motion.img 
              src={PlayStore} 
              alt="Google Play" 
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <motion.img 
              src={AppStore} 
              alt="App Store" 
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="w-[35%] h-full"
          variants={imageVariants}
        >
          <motion.img
            src={PhoneCards}
            alt="Phone Cards"
            className="max-w-7xl relative -left-96 -top-40"
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.5
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;