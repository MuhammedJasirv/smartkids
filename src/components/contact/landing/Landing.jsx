import React, { useState } from "react";
import Man from "../../../assets/images/contact/landing/man.png";
import Whatsapp from "../../../assets/images/contact/landing/whatsapp.png";
import Mail from "../../../assets/images/contact/landing/mail.png";
import Phone from "../../../assets/images/contact/landing/phone.png";
import Home from '../../../assets/images/contact/landing/Bg.png';
import useImagePreloader from "../../../hooks/useImagePreloader";
import ArrowImg from '../../../assets/images/contact/landing/Arrow.png';
import { useInView } from 'react-intersection-observer'; 
import { motion } from 'framer-motion';   

const Landing = () => {
  const [isDomReady, setIsDomReady] = useState(false);
  const isHomeLoaded = useImagePreloader(Home); 
  const isLoading = !isDomReady || !isHomeLoaded;

  React.useEffect(() => {
    setIsDomReady(true);
  }, []);

  const data = [
    { title: "Chat with our team", button: "Chat with Us", icon: Whatsapp },
    { title: "Chat with our sales team", button: "Chat with sales", icon: Mail },
    { title: "Call us directly", button: "+91 9099 9999 99", icon: Phone },
  ];

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-gray-100 z-50 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          />
        </div>
      )}
      
      <div className="bg-no-repeat bg-cover overflow-y-hidden relative" style={{ backgroundImage: `url(${Home})` }}>
        <div className="flex flex-col-reverse md:flex-row w-full">
          {/* Left Section */}
          <LeftSection />
          
          {/* Right Section */}
          <RightSection />
        </div>
        
        <CardsSection data={data} />
        
        <ArrowSection />
      </div>
    </>
  );
};

const LeftSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full md:w-[60%] px-5 lg:px-30 flex justify-end items-center"
    >
      <div className="text-white">
        <motion.p 
          className="font-kufi font-bold text-2xl text-center lg:text-start lg:text-5xl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          HEY, iVT SMRAT KIDS
        </motion.p>
        <motion.p 
          className="font-sans font-semibold text-sm text-center lg:text-start lg:text-xl mt-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          You've got some Q's and we've got tons and tons of A's. Ask us
          about Card order, Coin Purchase or anything you name it ... we can
          help with! Don't be shy - we promise we're really nice.
        </motion.p>
      </div>
    </motion.div>
  );
};

const RightSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full md:w-[40%] flex justify-center items-center py-10 md:py-0 overflow-hidden"
    >
      <div className="relative flex justify-center items-center w-[80vw] max-w-[300px] aspect-square mt-24">
        <motion.div 
          className="aspect-square rounded-full border-[10vw] bg-[#8CBE3E] lg:bg-transparent md:border-[90px] border-[#8CBE3E] flex justify-center items-center w-[400px] h-[400px] lg:w-[491px] lg:h-[488px]"
          initial={{ rotate: 10 }}
          animate={inView ? { rotate: 0 } : {}}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="lg:w-[240%] w-[200%] aspect-square absolute flex">
            <motion.img
              src={Man}
              alt="Man pointing"
              className="absolute -left-[12%] lg:-left-[16%] top-5 z-10 w-full h-auto object-contain"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.div 
              className="bg-[#8CBE3E] h-24 w-1/2 rounded-full left-[28%] absolute bottom-[28%] hidden lg:flex z-0"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const CardsSection = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto w-[90%] lg:gap-10 gap-14 lg:mt-5 mt-8">
      {data.map((item, index) => (
        <Card key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const Card = ({ item, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="bg-gradient-to-b from-[#3E89C8] to-[#95C83E] p-[2px] rounded-3xl w-full"
    >
      <div className="bg-[#012C3B] rounded-3xl p-5 h-full relative flex items-end">
        <motion.img
          src={item.icon}
          alt=""
          className="absolute -left-3 -top-10 object-contain"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
        />
        <div className="flex flex-col justify-between h-full gap-4 ml-[30%]">
          <motion.p 
            className="font-semibold font-sans text-xl text-center text-white"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            {item.title}
          </motion.p>
          <motion.p 
            className="px-5 py-3 bg-[#8CBE3E] text-lg text-black rounded-full text-center"
            initial={{ scale: 0.8 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.4, type: "spring" }}
          >
            {item.button}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const ArrowSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      className="w-[10%] mx-auto mt-10 mb-10"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <Arrow />
    </motion.div>
  );
};

const Arrow = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      className="bg-gradient-to-b from-[#3E89C8] to-[#95C83E] p-[2px] rounded-4xl w-full"
      initial={{ scale: 0.8 }}
      animate={inView ? { scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <motion.div 
        className="flex justify-center bg-[#034952] rounded-4xl p-2 items-center"
        animate={inView ? { 
          y: [0, -5, 0],
          transition: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }
        } : {}}
      >
        <motion.img 
          src={ArrowImg} 
          alt="Scroll indicator"
          animate={inView ? {
            rotate: [0, 10, 0, -10, 0],
            transition: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }
          } : {}}
        />
      </motion.div>
    </motion.div>
  );
};

export default Landing;