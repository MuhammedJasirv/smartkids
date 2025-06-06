import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PlayStore from "../../../assets/images/home/banner/playStore.png";
import AppStore from "../../../assets/images/home/banner/appStore.png";
import ImgOne from "../../../assets/images/home/banner/ImgTwo.png";
import Coin1 from "../../../assets/images/home/banner/coins/1.png";
import Coin2 from "../../../assets/images/home/banner/coins/2.png";
const Banner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "-50px 0px",
  });
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
    <div className="bg-white flex justify-center md:mt-10 mt-24 mb-10 px-2 md:px-0 ">
      <motion.div
        ref={ref}
        className="bg-[#95C83E] rounded-4xl w-full lg:w-[85%] flex flex-col md:flex-row "
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Text and buttons section */}
        <motion.div
          className="p-7 md:w-[70%] flex-col flex items-center order-2 md:order-1 relative "
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <motion.img
              src={Coin1}
              alt=""
              initial="hidden"
              animate={["visible", "float"]}
              variants={coinVariants}
              className="absolute z-10 left-[10%] hidden lg:flex"
            />
            <motion.img
              src={Coin2}
              alt=""
              initial="hidden"
              animate={["visible", "float"]}
              variants={coinVariants}
              className="absolute z-10 right-[5%] hidden lg:flex"
            />
          </div>
          <motion.p
            className="font-bold font-sans text-lg md:text-4xl md:mt-10 text-black text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Download The App Now
          </motion.p>

          <motion.div
            className="flex mt-3 md:mt-10 mb-[1.8px] md:gap-20 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.img
              src={PlayStore}
              className="max-w-[234px] w-[100px] md:w-auto cursor-pointer"
              alt="Google Play Store"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.img
              src={AppStore}
              className="max-w-[234px] w-[100px] md:w-auto cursor-pointer "
              alt="Apple App Store"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </motion.div>
        </motion.div>

        {/* Image section */}
        <motion.div
          className="md:w-[30%] relative md:mb-0 -mb-30  order-1 md:order-2 "
          // initial={{ x: 50, opacity: 0 }}
          // animate={inView ? { x: 0, opacity: 1 } : {}}
          // transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-full h-full overflow-visible">
            <motion.img
              src={ImgOne}
              alt="App Illustration"
              className="md:absolute top-5 left-0 w-full object-contain -translate-y-1/4 h-[391px]"
              // initial={{ y: 100, opacity: 0 }}
              // animate={inView ? { y: 0, opacity: 1 } : {}}
              // transition={{ delay: 0.5, type: "spring", stiffness: 60 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
