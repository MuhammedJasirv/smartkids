import React, { useState } from "react";
import BgHome from "../../../assets/images/home/faq/bg.png";
import ImgOne from '../../../assets/images/home/faq/ImgOne.png'
import { motion, AnimatePresence } from 'framer-motion';
const Faq = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center pb-14 bg-[#F4FFE2] relative "
      style={{ backgroundImage: `url(${BgHome})` }}
    >
      <div className="flex justify-center pt-7">
        <p className="font-kufi font-bold text-5xl">Some FAQs about our ivt Smart kids </p>
      </div>
      <div className=" flex  justify-center">
        <div className=" w-[35%] relative flex justify-end mt-10 max-h-[560px]">
          <div className="bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] w-1/2 h-full absolute rounded-4xl top-4  z-0 left-10"></div>
          <img src={ImgOne} alt="" className="z-10"/>
        </div>
        <div className=" w-[55%] p-10">
          <Card question="What is Pocket Money ?" content="Firstly, the parents add a child to the solution. They can either add one or multiple children in the solution. After that parents set allowance amount to be given to children. Parents can also set limits"/>
          <Card question="What is Pocket Money ?" content="Firstly, the parents add a child to the solution. They can either add one or multiple children in the solution. After that parents set allowance amount to be given to children. Parents can also set limits"/>
          <Card question="What is Pocket Money ?" content="Firstly, the parents add a child to the solution. They can either add one or multiple children in the solution. After that parents set allowance amount to be given to children. Parents can also set limits"/>
          <Card question="What is Pocket Money ?" content="Firstly, the parents add a child to the solution. They can either add one or multiple children in the solution. After that parents set allowance amount to be given to children. Parents can also set limits"/>
          <Card question="What is Pocket Money ?" content="Firstly, the parents add a child to the solution. They can either add one or multiple children in the solution. After that parents set allowance amount to be given to children. Parents can also set limits"/>
        </div>
      </div>
    </div>
  );
};

export default Faq;


const Card = ({ question, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <motion.div
      className="relative max-w-4xl w-full mx-auto my-6 z-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="bg-[#3E89C8] relative z-20 rounded-full flex items-center justify-between p-4 cursor-pointer transition-colors duration-300 shadow-lg hover:shadow-sm"
        onClick={toggleOpen}
      >
        <div className="flex gap-2 items-center">
          <p className="text-[#95C83E] font-semibold font-sans text-3xl">Q.</p>
          <p className="text-white font-semibold font-sans text-3xl">{question}</p>
        </div>
        <div className="bg-[#95C83E] h-8 w-8 rounded-full flex justify-center items-center text-white text-2xl">
          {isOpen ? '−' : '+'}
        </div>
      </motion.div>

      {/* Animated Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="bg-[#F2F9FF] p-5 mt-[-16px] z-10 relative border-[#3E89C8] border-2 rounded-xl shadow-xl overflow-hidden"
          >
            <p className="text-gray-800 text-base font-medium leading-relaxed">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};