import React from "react";
import Bg from "../../../assets/images/parents/features/Bg.png";
import Dots from "../../../assets/images/parents/features/Dots.png";
import Flag from "../../../assets/images/parents/features/Flag.png";
import Idea from "../../../assets/images/parents/features/Idea.png";
import Think from "../../../assets/images/parents/features/Think.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Features = () => {
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (headingInView) {
      headingControls.start("visible");
    }
  }, [headingInView, headingControls]);

  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const Data = [
    {
      Title: "Dummy Data student",
      description:
        "Parents have access to real-time transaction records, ensuring they can  as monitor their child’s spending habits and purchase history at school.Parents have access to rea a l-time transaction records, ensuring they s monitor their child’s spending habits and purchase is history at school.",
      icon: Flag,
    },
    {
      Title: "Dummy Data student",
      description:
        "Parents have access to real-time transaction records, ensuring they can  as monitor their child’s spending habits and purchase history at school.Parents have access to rea a l-time transaction records, ensuring they s monitor their child’s spending habits and purchase is history at school.",
      icon: Idea,
    },
    {
      Title: "Dummy Data student",
      description:
        "Parents have access to real-time transaction records, ensuring they can  as monitor their child’s spending habits and purchase history at school.Parents have access to rea a l-time transaction records, ensuring they s monitor their child’s spending habits and purchase is history at school.",
      icon: Think,
    },
  ];

  return (
    <div
      className="relative  bg-no-repeat bg-cover bg-left-top text-white flex flex-col justify-center items-center px-4 pb-12 "
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="absolute left-0 top-0">
        <img src={Dots} alt="" />
      </div>
      <div className="px-10 py-8">
        <motion.p
          ref={headingRef}
          initial="hidden"
          animate={headingControls}
          variants={headingVariants}
          className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center leading-snug"
        >
          Empowering Your Child's Future with Financial Cards
        </motion.p>
      </div>
      <div className="md:flex-row flex flex-col justify-center md:p-10 gap-14 md:gap-10">
        <Card data={Data[0]} />
        <Card data={Data[1]} />
        <Card data={Data[2]} />
      </div>
    </div>
  );
};

export default Features;

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
      className="relative bg-gradient-to-b from-[#3E89C8] to-[#95C83E] p-[2px] w-full sm:w-[90%] md:w-[45%] lg:w-[30%] rounded-tl-[60px] rounded-br-[60px] rounded-bl-lg mx-auto"
    >
      <div className="bg-[#05343B] py-10 px-6 flex flex-col gap-10 items-center justify-center rounded-tl-[55px] rounded-br-[55px] rounded-bl-lg text-white text-center overflow-hidden">
        <div>
          <p className="text-xl font-sans font-semibold">{data.Title}</p>
        </div>
        <div className="text-sm font-sans">
          <p>{data.description}</p>
        </div>
        <div className="bg-gradient-to-b from-[#3E89C8] to-[#95C83E] absolute p-[2px] rounded-full -right-2 -top-12">
          <div className="bg-[#012C3B] rounded-full p-5 h-full relative flex items-end">
            <img
              src={data.icon}
              alt=""
              className="object-contain w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
