import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BgHome from "../../../assets/images/home/faq/bg.png";
import ImgOne from "../../../assets/images/home/faq/ImgOne.png";
import Coin1 from "../../../assets/images/home/faq/coins/1.png";
import Coin2 from "../../../assets/images/home/faq/coins/2.png";
const Faq = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
    <div
      className="bg-no-repeat bg-cover bg-center md:pb-14 bg-[#F4FFE2] relative "
      style={{ backgroundImage: `url(${BgHome})` }}
    >
      {/* Title remains unchanged */}
      <motion.div
        ref={titleRef}
        className="flex justify-center pt-7 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="font-kufi font-bold text-3xl lg:text-5xl px-4 lg:mt-5 z-10">
          Some FAQs about our ivt Smart kids
        </p>
      </motion.div>
      <div>
        <motion.img
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          src={Coin1}
          alt=""
          className="absolute right-[10%] top-6 z-0 hidden lg:flex"
        />
      </div>

      <div className="flex justify-center flex-col lg:flex-row mt-0 lg:mt-10 ">
        {/* Responsive Image Section */}
        <motion.div
          ref={imageRef}
          className="w-full lg:w-[35%] relative flex justify-center lg:justify-end mt-10 max-h-[560px] px-4 lg:px-0  "
          initial={{ opacity: 0, x: -100 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] w-[50%] lg:w-1/2 h-full lg:h-full absolute rounded-4xl top-4 z-0 lg:left-10 left-1/3 transform lg:transform-none -translate-x-1/2 lg:-translate-x-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={imageInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          />
          <div className="relative z-30 w-full max-w-md ">
            <motion.img
              src={ImgOne}
              alt="Offer"
              className="w-full rounded-xl "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={imageInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            />

            {/* Badge or corner image */}
            <img src={Coin2} alt="Coin" className="absolute -top-1 -right-1 " />
          </div>
        </motion.div>

        {/* FAQ cards section remains unchanged */}
        <div className="lg:w-[55%] lg:p-10 pt-5 lg:pt-0 p-3">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Card
              key={index}
              question="What is Pocket Money ?"
              content="Firstly, the parents add a child to the solution. They can either add one or multiple children in the solution. After that parents set allowance amount to be given to children. Parents can also set limits"
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Card component remains exactly the same as in your original code
const Card = ({ question, content, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <motion.div
      ref={ref}
      className="relative max-w-4xl w-full mx-auto my-6 z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-[#3E89C8] relative z-20 rounded-full flex items-center justify-between p-2 md:p-4 cursor-pointer transition-colors duration-300 shadow-lg hover:shadow-sm"
        onClick={toggleOpen}
      >
        <div className="flex gap-2 items-center">
          <p className="text-[#95C83E] font-semibold font-sans text-3xl">Q.</p>
          <p className="text-white font-semibold font-sans text-sm md:text-3xl">
            {question}
          </p>
        </div>
        <motion.div
          className="bg-[#95C83E] h-8 w-8 rounded-full flex justify-center items-center text-white text-2xl"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? "−" : "+"}
        </motion.div>
      </motion.div>

      {/* Animated Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#F2F9FF] p-5 mt-[-16px] z-10 relative border-[#3E89C8] border-2 rounded-xl shadow-xl overflow-hidden"
          >
            <p className="text-gray-800 text-xs md:text-base font-medium leading-relaxed">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Faq;
