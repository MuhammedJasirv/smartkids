import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MobileScreen from "../../../assets/images/home/paymentsApp/MobileScreen.png";
import KVector from "../../../assets/images/home/paymentsApp/KVector.png";
import Transfer from "../../../assets/images/home/paymentsApp/Transfer.png";
import Notification from "../../../assets/images/home/paymentsApp/notification.png";

const items = [
  {
    id: 1,
    title: "Instant Transfers",
    content: "Transfer money to your child's account anytime, anywhere. And avoid the panic of any emergency.",
    color: "#8CBE3E",
    icon: Transfer
  },
  {
    id: 2,
    title: "Real Time Notifications​",
    content: "Transfer money to your child's account anytime, anywhere. And avoid the panic of any emergency.",
    color: "#3E89C8",
    icon: Notification
  },
  {
    id: 3,
    title: "Real Time Notifications​",
    content: "Transfer money to your child's account anytime, anywhere. And avoid the panic of any emergency.",
    color: "#3E89C8",
    icon: Notification
  },
  {
    id: 4,
    title: "Instant Transfers",
    content: "Transfer money to your child's account anytime, anywhere. And avoid the panic of any emergency.",
    color: "#8CBE3E",
    icon: Transfer
  },
];

const PaymentsApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const pairsCount = Math.ceil(items.length / 2); 

  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inView]);

  const visibleItems = [
    items[currentIndex],
    items[(currentIndex + 1) % items.length],
  ];

  const activePair = currentIndex / 2;

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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
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

  const mobileVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="pb-10 flex justify-center pt-10"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Mobile Image */}
      <motion.div 
        className="w-[30%] flex justify-center items-center"
        variants={mobileVariants}
      >
        <img src={MobileScreen} alt="Mobile app screenshot" />
      </motion.div>

      {/* Content */}
      <div className="w-[50%] flex gap-20 flex-col">
        <motion.div 
          className="flex items-center flex-col"
          variants={textVariants}
        >
          <p className="text-5xl font-kufi font-bold w-2/3 text-center">
            Smartkids Card & Payments App
          </p>
          <p className="text-lg font-semibold font-sans mt-10">
            Help your child grow into a financially responsible adult
          </p>
        </motion.div>

        <div className="w-full max-w-5xl mx-auto">
          <div className="flex gap-4 transition-all duration-500">
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex-1 bg-[#003041] text-white rounded-lg shadow-lg p-4 relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Background Image */}
                <img
                  src={KVector}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
                />

                {/* Center-Top Circle */}
                <motion.div 
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3
                  }}
                >
                  <div className="bg-white p-2 rounded-full border-[18px] border-[#003041]">
                    <div
                      style={{ backgroundColor: item.color }}
                      className="w-28 h-28 rounded-full flex justify-center items-center"
                    >
                      <img src={item.icon} alt={item.title} />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="pt-32 text-center">
                  <p className="text-xl font-semibold font-sans">
                    {item.title}
                  </p>
                  <p className="text-sm font-sans">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <motion.div 
            className="flex justify-center gap-3 mb-6 mt-14"
            variants={textVariants}
          >
            {[...Array(pairsCount)].map((_, index) => (
              <div
                key={index}
                className={`w-14 h-2 rounded-full transition-all duration-300 ${
                  index === activePair ? 'bg-[#3E89C8]' : 'bg-[#9FCAEE]'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentsApp;