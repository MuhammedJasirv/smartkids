import React from "react";
import MainImage from "../../../assets/images/parents/header/aboutImg.png";
import Coin from "../../../assets/images/parents/coins/1.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="flex flex-col lg:flex-row px-[10%] py-14 items-center gap-10">
      {/* Left Text Block */}
      <div className="lg:w-3/5 w-full">
        <p className="text-4xl lg:text-5xl font-bold font-kufi pr-6">
          Empowering Your Child's Future with Financial Cards
        </p>
        <p className="text-base lg:text-xl mt-6 text-justify lg:text-start">
          Pellentesque mollis urna vel semper egestas. Duis ac dictumr lacus.
          Sed sagittis non nunc ac malesuada. Quisque athe oftr ut eleifend
          urna. Etiam nec porttitor erat, vel ullamcorperddn erat. Fusce euismod
          ipsum eget nunc pulvinar feugiat.Pellentesque mollis urna vel semper
          egestas. Duis ac dictumr lacus. Sed sagittis non nunc ac malesuada.
          Quisque athe oftr ut eleifend urna. Etiam nec porttitor erat, vel
          ullamcorperddn erat. Fusce euismod ipsum eget nunc pulvinar
          feugiat.Pellentesque mollis urna vel semper egestas. Duis ac dictumr
          lacus. Sed sagittis non nunc ac malesuada. Quisque athe oftr ut
          eleifend urna. Etiam nec porttitor erat, vel ullamcorperddn erat.
          Fusce euismod ipsum eget nunc pulvinar feugiat.Pellentesque mollis
          urna vel semper egestas. Duis ac dictumr lacus. Sed sagittis non nunc
          ac malesuada. Quisque athe oftr ut eleifend urna. Etiam nec porttitor
          erat, vel ullamcorperddn erat. Fusce euismod ipsum eget nunc pulvinar
          feugiat.{" "}
        </p>
      </div>

      {/* Right Image Block */}
      <div className="relative w-full lg:w-2/5 flex justify-center">
        <motion.div
          ref={ref}
          className="w-full max-w-md relative flex justify-center lg:justify-end mt-10 px-4 lg:px-0"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Gradient Background */}
          <motion.div
            className="bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] w-[95%] h-full absolute rounded-4xl top-4 z-0 -left-[5px] sm:-left-[10px] md:-left-[15px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          />

          {/* Image & Coin */}
          <div className="relative z-30 w-full max-w-full">
            <motion.img
              src={MainImage}
              alt="Main"
              className="w-full h-auto rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            />
            <div className="absolute -top-1 -right-1 bg-white rounded-full flex justify-center items-center p-1 sm:p-1.5 md:p-2">
              <img
                src={Coin}
                alt="Coin"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
