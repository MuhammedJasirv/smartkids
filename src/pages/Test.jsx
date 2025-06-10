import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainImage from "../assets/images/parents/header/aboutImg.png";
import Coin from "../assets/images/home/about/coins/1.png";

const Test = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="flex justify-center items-center px-4 py-16 bg-red-100 min-h-screen">
      <motion.div
        ref={ref}
        className="w-full lg:w-[35%] relative flex justify-center lg:justify-end mt-10 max-h-[560px] px-4 lg:px-0"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] w-[50%] left-[25%] lg:w-1/2 h-full absolute rounded-4xl top-4 z-0 lg:left-10 md:left-1/3 transform -translate-x-1/2 lg:translate-x-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        />
        <div className="relative z-30 w-full max-w-md">
          <motion.img
            src={MainImage}
            alt="Main"
            className="w-full rounded-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          />
          <div className="absolute -top-1 -right-1 bg-white rounded-full flex justify-center items-center p-1">
          <img src={Coin} alt="Coin" className=" w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 lg:w-auto lg:h-auto" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Test;
