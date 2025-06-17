import React from "react";
import Bg from "../../../assets/images/about/vision/Bg.png";
import Flag from '../../../assets/images/about/vision/Flag.png'
import Idea from '../../../assets/images/about/vision/Idea.png'
import Think from '../../../assets/images/about/vision/Think.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Vision = () => {
  const Data=[
    {
      title:"Our Mission",
      description:"Parents have access to real-time transaction records, ensuring they can monitor their child’s spending habits and purchase history at school.",
      icon:Flag
    },
    {
      title:"Our Vison",
      description:"Parents have access to real-time transaction records, ensuring they can monitor their child’s spending habits and purchase history at school.",
      icon:Idea
    },
    {
      title:"Why Choose US",
      description:"Parents have access to real-time transaction records, ensuring they can monitor their child’s spending habits and purchase history at school.",
      icon:Think
    }
  ]
  return (
    <div
      className="w-full  bg-cover  bg-no-repeat  items-center justify-center text-white text-4xl font-bold pt-20 pb-20"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="text-center w-1/2 mt-20 mx-auto">
        <p className="text-5xl font-kufi font-bold">
          Empowering Your Child's Future with Financial Confidence
        </p>
        <p className="font-sans text-lg mt-6 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex mt-44 w-[80%] mx-auto gap-20">
      <Card data={Data[0]}/>
      <Card data={Data[0]} className="mt-10"/>
      <Card data={Data[0]}/>
      </div>
    </div>
  );
};

export default Vision;


const Card = ({ data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="relative bg-gradient-to-b from-[#3E89C8] to-[#95C83E] p-[2px] w-full sm:w-[90%] md:w-[45%] lg:w-[30%] rounded-2xl mx-auto"
    >
      {/* Icon */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-gradient-to-b from-[#3E89C8] to-[#95C83E] p-[2px] rounded-full">
          <div className="bg-[#156068] rounded-full p-3">
        <div className="bg-gradient-to-b from-[#3E89C8] to-[#95C83E] p-[2px] rounded-full">
          <div className="bg-[#156068] rounded-full p-4 flex items-center justify-center">
            <img
              src={data.icon}
              alt="Icon"
              className="object-contain w-10 h-10 sm:w-12 sm:h-12"
              />
          </div>
              </div>
        </div>
        </div>
      </div>

      {/* Card content */}
      <div className="bg-[#156068] pt-14 pb-6 px-6 flex flex-col gap-6 items-center justify-center rounded-2xl text-white text-center overflow-hidden">
        <p className="text-xl font-sans font-semibold">{data.title}</p>
        <p className="text-sm font-sans font-normal">{data.description}</p>
      </div>
    </motion.div>
  );
};


