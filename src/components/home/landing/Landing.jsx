import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../../common/navigation/Navigation";
import Home from "../../../assets/images/ui/home.png";
import PhoneCards from "../../../assets/images/ui/ladingPhoneCards.png";
import PlayStore from "../../../assets/images/ui/Google Play Black.png";
import AppStore from "../../../assets/images/ui/App Store Black.png";
import Coin1 from "../../../assets/images/home/landing/coins/1.png";
import Coin2 from "../../../assets/images/home/landing/coins/2.png";
import Coin3 from "../../../assets/images/home/landing/coins/3.png";
import Coin4 from "../../../assets/images/home/landing/coins/4.png";
import Coin5 from "../../../assets/images/home/landing/coins/5.png";
import useImagePreloader from "../../../hooks/useImagePreloader";
const Landing = () => {
   const [isDomReady, setIsDomReady] = useState(false);
  const isHomeLoaded = useImagePreloader(Home); 

  // Wait for DOM to be ready and image to load
  const isLoading = !isDomReady || !isHomeLoaded;

  // Set DOM ready after initial render
  React.useEffect(() => {
    setIsDomReady(true);
  }, []);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const phoneVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate",
      },
    },
  };

  const scaleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };
  const coinVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      rotate: 0,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotate: [0, 10, -10, 0], // subtle wiggle rotation
      transition: {
        delay: i * 0.3,
        duration: 1.5,
        ease: "easeInOut",
        rotate: {
          yoyo: Infinity,
          duration: 4,
          delay: 2,
        },
      },
    }),
    float: {
      y: ["0%", "-20%", "0%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };


  return (
    <>
     {isLoading && (
        <div className="fixed inset-0 bg-gray-100 z-50 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          />
        </div>
      )}
    <div
      className="bg-no-repeat bg-cover bg-center lg:max-h-[110vh] overflow-y-hidden relative"
      style={{ backgroundImage: `url('/images/home.png')` }}
    >
      <div>
        <Navigation />
      </div>
      <div className=" ">
        <motion.img
          src={Coin1}
          alt=""
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          className="absolute left-[20%] z-0 hidden lg:flex"
        />
        <motion.img
          src={Coin2}
          alt=""
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          className="absolute right-3 z-0 hidden lg:flex"
        />
        <motion.img
          src={Coin3}
          alt=""
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          className="absolute top-1/2 left-2 z-0 hidden lg:flex"
        />
        <motion.img
          src={Coin4}
          alt=""
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          className="absolute bottom-[10%] left-[30%] z-0 hidden lg:flex"
        />
        <motion.img
          src={Coin5}
          alt=""
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          className="absolute bottom-0 right-[10%] z-0 hidden lg:flex"
        />
      </div>

      <motion.div
        className="flex lg:flex-row flex-col overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="lg:w-[65%] lg:pl-32 pt-3 lg:pt-40 text-white z-10">
          <motion.p
            className="font-stretch-semi-condensed font-bold text-4xl text-center lg:text-start lg:text-7xl"
            variants={itemVariants}
          >
            Manage your children's finances efficiently
          </motion.p>

          <motion.p
            className="font-sans font-semibold text-center lg:text-start m-auto lg:m-0 lg:text-xl w-[90%] lg:w-[70%] mt-5"
            variants={itemVariants}
          >
            Cultivate smart spending habits in your child by tracking and
            managing their finances with a pocket money solution
          </motion.p>

          <motion.div
            className="justify-center lg:justify-start flex lg:gap-6 gap-2 lg:mt-20 mt-4"
            variants={scaleVariants}
          >
            <motion.img
              src={PlayStore}
              alt="Google Play Store"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <motion.img
              src={AppStore}
              alt="App Store"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
        </div>

        <motion.div className="lg:w-[35%]" variants={phoneVariants}>
          <motion.img
            src={PhoneCards}
            alt="Phone Cards"
            className="max-w-7xl z-10 w-md mx-auto lg:mx-0 sm:w-xl xs:w-lg lg:w-3xl static lg:relative lg:-left-64 overflow-hidden md:w-xl xl:w-4xl md:-left-44  -left-96 lg:-top-24 xl:-top-40"
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            transition={{
              yoyo: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 0],
          y: [20, 0, -20],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-white rounded-full relative">
          <motion.div
            className="w-1 h-2 bg-white rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default Landing;
