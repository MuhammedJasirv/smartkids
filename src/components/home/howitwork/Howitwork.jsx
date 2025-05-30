import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Home from "../../../assets/images/ui/home.png";
import Hand from '../../../assets/images/home/how it work/HandImg.png';
import ImgOne from '../../../assets/images/home/how it work/OneImg.png';
import ImgTwo from '../../../assets/images/home/how it work/TwoImg.png';
import { RiDeleteBin6Line } from "react-icons/ri";
import Student from '../../../assets/images/home/how it work/Student.png';
import Histroy from '../../../assets/images/home/how it work/History.png';
import Transaction from '../../../assets/images/home/how it work/Transaction.png';
import TransactionSilver from '../../../assets/images/home/how it work/TransactionSilverCard.png';
import IdCard from '../../../assets/images/home/how it work/IdCard.png'
const Howitwork = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
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
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  // Use inView hooks for different sections
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [parentSectionRef, parentSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [childSectionRef, childSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
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
          className="text-white font-kufi font-bold text-4xl"
          variants={textVariants}
        >
          How does it work?
        </motion.p>
        <motion.p 
          className="text-white font-sans font-normal text-lg w-1/2 mt-3 pr-2"
          variants={textVariants}
        >
          To understand the working of the pocket money solution it's important
          to bifurcate its workflow into two i.e. for parents and for children.
        </motion.p>
      </motion.div>

      {/* Parent section */}
      <motion.div
        ref={parentSectionRef}
        className="flex justify-center mb-10"
        initial="hidden"
        animate={parentSectionInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="relative w-1/2 flex justify-end pr-20">
          <motion.div 
            className="bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] w-48 h-[350px] absolute rounded-4xl -top-3 z-0 right-16"
            variants={imageVariants}
          />
          
          <motion.div 
            className="   absolute z-20 -right-36 flex justify-center  items-center "
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >

            <img src={IdCard} alt="" />
          </motion.div>
          
          <motion.div 
            className="absolute left-[22%] z-20 top-36"
            variants={imageVariants}
          >
            <img src={Histroy} alt="" />
          </motion.div>
          
          <motion.img 
            src={ImgOne} 
            className="z-10" 
            alt=""
            variants={imageVariants}
          />
        </div>
        
        <motion.div 
          className="w-1/2 pr-32 -ml-10 text-white flex flex-col justify-center items-center"
          variants={textVariants}
        >
          <p className="font-sans text-2xl font-normal">For parents</p>
          <p className="font-sans text-lg w-11/12 mt-5">
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
        className="flex justify-center mb-10"
        initial="hidden"
        animate={childSectionInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="w-1/2 text-white flex flex-col justify-center items-center"
          variants={textVariants}
        >
          <p className="font-sans text-2xl font-normal">For children</p>
          <p className="font-sans text-lg w-11/12 mt-5">
            Firstly, the parents add a child to the solution. They can either
            add one or multiple children in the solution. After that parents set
            allowance amount to be given to children. Parents can also set
            limits to the allowances as per their wish. Moreover, they can also
            impose interest rates on the allowances. At last, parents can
            monitor and track their children's spending on the app itself.
          </p>
        </motion.div>
        
        <div className="relative w-[30%] flex justify-center pr-20">
          <motion.div 
            className="bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] w-48 h-[350px] absolute rounded-4xl -ml-40 -top-4 z-0"
            variants={imageVariants}
          />
          
          <motion.img 
            src={ImgTwo} 
            className="z-10 max-w-80" 
            alt=""
            variants={imageVariants}
          />
          
          <motion.img 
            src={Transaction} 
            className="absolute z-20 -left-46 -top-3" 
            alt=""
            initial={{ y: -20, opacity: 0 }}
            animate={childSectionInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          />
          
          <motion.img 
            src={TransactionSilver} 
            className="absolute z-20 -bottom-12 right-0" 
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






            {/* <div>
              <img src={Student} alt="" />
            </div>
            <div>
              <p className="text-md font-semibold">Ancy James</p>
              <p className="font-sans text-xs">Admisssion Number :5434</p>
              <p className="font-sans text-xs">Kv School</p>
            </div> */}
            {/* <div>
              <RiDeleteBin6Line size={20} color="blue"/>
            </div> */}