import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PlayStore from "../../../assets/images/home/banner/playStore.png";
import AppStore from "../../../assets/images/home/banner/appStore.png";
import ImgOne from "../../../assets/images/home/banner/ImgTwo.png";

const Banner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "-50px 0px"
  });

  return (
    <div className="bg-white flex justify-center mt-10 mb-10">
      <motion.div 
        ref={ref}
        className="bg-[#95C83E] rounded-4xl w-[85%] flex "
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Text and buttons section */}
        <motion.div 
          className="p-7 w-[70%] flex-col flex items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <motion.p 
            className="font-bold font-sans text-4xl mt-10 text-black"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Download The App Now
          </motion.p>
          
          <motion.div 
            className="flex mt-10 mb-[1.8px] gap-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.img 
              src={PlayStore} 
              className="max-w-[234px] cursor-pointer" 
              alt="Google Play Store"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.img 
              src={AppStore} 
              className="max-w-[234px] cursor-pointer" 
              alt="Apple App Store"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </motion.div>
        </motion.div>

        {/* Image section */}
        <motion.div 
          className="w-[30%] relative"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-full h-full overflow-visible">
            <motion.img
              src={ImgOne}
              alt="App Illustration"
              className="absolute top-5 left-0 w-full object-contain -translate-y-1/4 h-[391px]"
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 60 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;