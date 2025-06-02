import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MobileScreen from "../../../assets/images/home/paymentsApp/MobileScreen.png";
import KVector from "../../../assets/images/home/paymentsApp/KVector.png";
import Transfer from "../../../assets/images/home/paymentsApp/Transfer.png";
import Notification from "../../../assets/images/home/paymentsApp/notification.png";
import Home from "../../../assets/images/home/paymentsApp/Bg.png";
import Coin1 from "../../../assets/images/home/paymentsApp/coins/1.png";
import Coin2 from "../../../assets/images/home/paymentsApp/coins/2.png";
const items = [
  {
    id: 1,
    title: "Instant Transfers",
    content:
      "Transfer money to your child's account anytime, anywhere. And avoid the panic of any emergency.",
    color: "#8CBE3E",
    icon: Transfer,
  },
  {
    id: 2,
    title: "Real Time Notifications​",
    content:
      "Transfer money to your child's account anytime, anywhere. And avoid the panic of any emergency.",
    color: "#3E89C8",
    icon: Notification,
  },
  {
    id: 3,
    title: "Real Time Notifications​",
    content:
      "Transfer money to your child's account anytime, anywhere. And avoid the panic of any emergency.",
    color: "#3E89C8",
    icon: Notification,
  },
  {
    id: 4,
    title: "Instant Transfers",
    content:
      "Transfer money to your child's account anytime, anywhere. And avoid the panic of any emergency.",
    color: "#8CBE3E",
    icon: Transfer,
  },
];

const PaymentsApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
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

  const mobileVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "backOut",
      },
    },
  };
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
    <motion.div
      ref={ref}
      className="pb-10 flex flex-col relative lg:flex-row justify-center pt-10 px-4 lg:px-0 bg-no-repeat bg-cover bg-center "
      initial="hidden"
      style={{ backgroundImage: `url(${Home})` }}
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* <div
            className="bg-no-repeat bg-cover bg-center pb-10 relative"
            style={{ backgroundImage: `url(${Home})` }}
          ></div> */}
      {/* Mobile Image */}
      <motion.div
        className="w-[30%] flex justify-center items-center m-auto mb-5 lg:m-0 lg:mb-0"
        variants={mobileVariants}
      >
        <img src={MobileScreen} alt="Mobile app screenshot" />
      </motion.div>

      {/* Content */}
      <div className="w-full lg:w-[50%] flex gap-6 lg:gap-20 flex-col relative">
        <motion.div
          className="flex items-center flex-col"
          variants={textVariants}
        >
          <p className="text-2xl lg:text-5xl font-kufi font-bold w-full lg:w-2/3 text-center px-4">
            Smartkids Card & Payments App
          </p>
          <p className="text-base lg:text-lg font-semibold font-sans mt-4 lg:mt-10 text-center px-4">
            Help your child grow into a financially responsible adult
          </p>
        </motion.div>
        <div>
          <motion.img
            src={Coin1}
            alt=""
            initial="hidden"
            animate={["visible", "float"]}
            variants={coinVariants}
            className="z-0 absolute hidden top-[5%] lg:flex"
          />
          <motion.img
            src={Coin2}
            alt=""
            initial="hidden"
            animate={["visible", "float"]}
            variants={coinVariants}
            className="z-0 absolute hidden right-0  top-[20%] lg:flex"
          />
        </div>
        <div className="w-full max-w-5xl mx-auto px-4 ">
          <div className="flex flex-col md:flex-row md:gap-4 gap-14 transition-all duration-500 mt-8 md:mt-0">
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex-1 bg-[#003041] text-white rounded-lg shadow-lg p-4 relative min-h-[250px] md:min-h-[300px]"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Background Image */}
                <img
                  src={KVector}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
                />

                {/* Center-Top Circle - Smaller on mobile */}
                <motion.div
                  className="absolute -top-8 md:-top-10 left-1/2 transform -translate-x-1/2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3,
                  }}
                >
                  <div className="bg-white p-2 rounded-full border-[12px] md:border-[18px] border-[#003041]">
                    <div
                      style={{ backgroundColor: item.color }}
                      className="w-16 h-16 md:w-28 md:h-28 rounded-full flex justify-center items-center"
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-8 h-8 md:w-14 md:h-14"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Content - Adjusted for mobile */}
                <div className="pt-24 md:pt-32 text-center px-2">
                  <p className="text-lg md:text-xl font-semibold font-sans">
                    {item.title}
                  </p>
                  <p className="text-xs md:text-sm font-sans mt-1">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators - Smaller on mobile */}
          <motion.div
            className="flex justify-center gap-2 md:gap-3 mb-6 mt-8 md:mt-14"
            variants={textVariants}
          >
            {[...Array(pairsCount)].map((_, index) => (
              <div
                key={index}
                className={`w-8 md:w-14 h-1 md:h-2 rounded-full transition-all duration-300 ${
                  index === activePair ? "bg-[#3E89C8]" : "bg-[#9FCAEE]"
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
