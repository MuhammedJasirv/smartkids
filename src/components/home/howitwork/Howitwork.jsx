import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Home from "../../../assets/images/home/how it work/Bg.png";
import Hand from "../../../assets/images/home/how it work/HandImg.png";
import ImgOne from "../../../assets/images/home/how it work/OneImg.png";
import ImgTwo from "../../../assets/images/home/how it work/TwoImg.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import Student from "../../../assets/images/home/how it work/Student.png";
import Histroy from "../../../assets/images/home/how it work/History.png";
import Transaction from "../../../assets/images/home/how it work/Transaction.png";
import TransactionSilver from "../../../assets/images/home/how it work/TransactionSilverCard.png";
import IdCard from "../../../assets/images/home/how it work/IdCard.png";
const Howitwork = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  // Use inView hooks for different sections
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [parentSectionRef, parentSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [childSectionRef, childSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="bg-no-repeat bg-cover bg-center pb-10 relative"
      style={{ backgroundImage: `url(${Home})` }}
    >
      {/* Hand image with animation */}
      <motion.img
        src={Hand}
        className="absolute -top-8 right-[7%] z-20"
        alt=""
        initial={{ x: 100, opacity: 0 }}
        animate={headerInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }}
      />

      {/* Header section */}
      <motion.div
        ref={headerRef}
        className="w-full p-14 pl-32"
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.p
          className="text-white font-kufi font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          variants={textVariants}
        >
          How does it work?
        </motion.p>
        <motion.p
          className="text-white font-sans font-normal text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg w-full xs:w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 mt-2 xs:mt-3 sm:mt-4 pr-2"
          variants={textVariants}
        >
          To understand the working of the pocket money solution it's important
          to bifurcate its workflow into two i.e. for parents and for children.
        </motion.p>
      </motion.div>

      {/* Parent section */}
      <motion.div
        ref={parentSectionRef}
        className="flex flex-col lg:flex-row justify-center mb-10 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-0"
        initial="hidden"
        animate={parentSectionInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-20 mb-8 lg:mb-0 ">
          <motion.div
            className="bg-gradient-to-b from-[#3E89C8] to-[#95C83E] w-32 xs:w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 2xl:w-56 h-[250px] xs:h-[280px] sm:h-[320px] md:h-[350px] lg:h-[350px] absolute rounded-4xl -top-3 z-0 right-4 xs:right-6 sm:right-10 md:right-12 lg:right-16"
            variants={imageVariants}
          />

          <motion.div
            className="absolute z-20 -right-8 xs:-right-10 sm:-right-16 md:-right-24 lg:-right-0 xl:-right-32 flex justify-center items-center"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <img
              src={IdCard}
              alt=""
              className="w-24 xs:w-28 sm:w-32 md:w-36 lg:w-40 xl:w-auto xl:max-w-[342px] hidden"
            />
          </motion.div>

          <motion.div
            className="absolute left-[10%] xs:left-[12%] sm:left-[15%] md:left-[18%] lg:left-[22%] z-20 top-20 xs:top-24 sm:top-28 md:top-32 lg:top-36"
            variants={imageVariants}
          >
            <img
              src={Histroy}
              alt=""
              className="w-20 xs:w-24 sm:w-28 md:w-32 lg:w-36 xl:w-auto"
            />
          </motion.div>

          <motion.img
            src={ImgOne}
            className="z-10 w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 xl:w-auto"
            alt=""
            variants={imageVariants}
          />
        </div>

        <motion.div
          className="w-full lg:w-1/2  lg:pr-32 lg:-ml-10 text-white flex flex-col justify-center items-center lg:items-center px-4 xs:px-6 sm:px-8 md:px-10 lg:px-0"
          variants={textVariants}
        >
          <p className="font-sans text-xl xs:text-2xl text-center mx-auto sm:text-3xl font-normal">
            For parents
          </p>
          <p className="font-sans text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg w-full lg:w-11/12 mt-3 xs:mt-4 sm:mt-5 text-center lg:text-left">
            Firstly, the parents add a child to the solution. They can either
            add one or multiple children in the solution. After that parents set
            allowance amount to be given to children. Parents can also set
            limits to the allowances as per their wish. Moreover, they can also
            impose interest rates on the allowances. At last, parents can
            monitor and track their children's spending on the app itself.
          </p>
        </motion.div>
      </motion.div>

      {/* Child section */}
      <motion.div
        ref={childSectionRef}
        className="flex flex-col lg:flex-row justify-center mb-10 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-0 "
        initial="hidden"
        animate={childSectionInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="w-full lg:w-1/2  text-white flex flex-col justify-center items-center lg:items-start order-2 lg:order-1 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-0 mt-8 lg:mt-0"
          variants={textVariants}
        >
          <p className="font-sans text-xl xs:text-2xl sm:text-3xl font-normal text-center w-full">
            For children
          </p>
          <p className="font-sans text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg w-full lg:w-11/12 mt-3 xs:mt-4 sm:mt-5 text-left">
            Firstly, the parents add a child to the solution. They can either
            add one or multiple children in the solution. After that parents set
            allowance amount to be given to children. Parents can also set
            limits to the allowances as per their wish. Moreover, they can also
            impose interest rates on the allowances. At last, parents can
            monitor and track their children's spending on the app itself.
          </p>
        </motion.div>

        <div className="relative w-full lg:w-[30%] flex justify-center lg:pr-20 order-1 lg:order-2">
          <motion.div
            className="bg-gradient-to-b from-[#3E89C8] to-[#95C83E] w-32 xs:w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 h-[250px] xs:h-[280px] sm:h-[320px] md:h-[350px] lg:h-[350px] absolute rounded-4xl -ml-20 xs:-ml-24 sm:-ml-28 md:-ml-32 lg:-ml-40 -top-4 z-0"
            variants={imageVariants}
          />

          <motion.img
            src={ImgTwo}
            className="z-10 w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-w-full"
            alt=""
            variants={imageVariants}
          />

          <motion.img
            src={Transaction}
            className="absolute z-20 -left-8 xs:-left-10 sm:-left-12 md:-left-16 lg:-left-20 xl:-left-36 -top-3 w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 xl:w-auto"
            alt=""
            initial={{ y: -20, opacity: 0 }}
            animate={childSectionInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          />

          <motion.img
            src={TransactionSilver}
            className="absolute z-20 -bottom-6 xs:-bottom-8 sm:-bottom-10 md:-bottom-12 right-0 w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 xl:w-auto"
            alt=""
            initial={{ y: 20, opacity: 0 }}
            animate={childSectionInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Howitwork;

{
  /* <div>
              <img src={Student} alt="" />
            </div>
            <div>
              <p className="text-md font-semibold">Ancy James</p>
              <p className="font-sans text-xs">Admisssion Number :5434</p>
              <p className="font-sans text-xs">Kv School</p>
            </div> */
}
{
  /* <div>
              <RiDeleteBin6Line size={20} color="blue"/>
            </div> */
}
