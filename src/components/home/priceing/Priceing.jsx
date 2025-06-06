import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TiTick } from "react-icons/ti";
import Home from "../../../assets/images/home/pricing/Bg.png";
import Coin1 from "../../../assets/images/home/pricing/coins/1.png";
import Hand from "../../../assets/images/home/pricing/Hand.png";
import PriceingYear from "./PriceingYear";
const Pricing = () => {
  const [isOne, setIsOn] = useState(false);
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const data = [
    {
      Title: "Basic",
      Price: "$345",
      potis:
        "15 000 words/month, Write in 10 languages, Image generation (40/month), 25+ languages, Unlimited projects, Unlimited Marvel Chat, New experimental feature",
      color: "#134E6B",
      borderType: "gradient",
      borderColors: ["#3E89C8", "#95C83E"],
      textColor: "white",
    },
    {
      Title: "Standard",
      subtitle: "Most Popular",
      Price: "$335",
      potis:
        "15 000 words/month, Write in 10 languages, Image generation (40/month), 25+ languages, Unlimited projects, Unlimited Marvel Chat, New experimental feature",
      color: "#8CBE3E",
      borderType: "solid",
      borderColor: "#8CBE3E",
      textColor: "black",
    },
    {
      Title: "Premium",
      Price: "$385",
      potis:
        "15 000 words/month, Write in 10 languages, Image generation (40/month), 25+ languages, Unlimited projects, Unlimited Marvel Chat, New experimental feature",
      color: "#134E6B",
      borderType: "gradient",
      borderColors: ["#3E89C8", "#95C83E"],
      textColor: "white",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut",
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
    <div
      className="bg-no-repeat bg-cover  pb-10 pt-10 relative"
      style={{ backgroundImage: `url(${Home})` }}
    >
      <div>
        <motion.img
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          src={Coin1}
          alt=""
          className="absolute z-0 hidden lg:flex left-[25%]"
        />
        <motion.img
          src={Hand}
          alt=""
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="absolute right-[10%] -top-11 lg:flex hidden"
        />
      </div>
      {/* Header section with title and toggle */}
      <motion.div
        ref={containerRef}
        className=" flex flex-col items-center"
        initial="hidden"
        animate={containerInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.p
          className="md:text-5xl font-bold font-kufi text-white m-auto text-center text-2xl mt-0 lg:mt-10"
          variants={textVariants}
        >
          Money well Invested
        </motion.p>

        <motion.div
          className="flex items-center gap-6 md:gap-10 md:mt-10 mt-5"
          variants={textVariants}
        >
          <p className="text-white text-sm md:text-xl font-sans font-bold">
            Monthly
          </p>
          <ToggleSwitch isOn={isOne} setIsOn={setIsOn} />
          <p className="text-white text-sm md:text-xl font-sans font-bold">
            Yearly
          </p>
        </motion.div>
      </motion.div>

      {/* Pricing cards section */}
      {isOne?<PriceingYear/>:(
      <motion.div
        ref={cardsRef}
        className="flex justify-center gap-10 lg:gap-20 mt-10 md:mt-18 px-4 flex-wrap"
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {data.map((item, index) => (
          <motion.div
            key={item.Title}
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -10 }}
            className="mb-10"
          >
            <Card data={item} inView={cardsInView} index={index} />
          </motion.div>
        ))}
      </motion.div>
      )}
    </div>
  );
};

const ToggleSwitch = ({ isOn, setIsOn }) => {
  const [xOffset, setXOffset] = useState(0);

  useEffect(() => {
    const calculateOffset = () => {
      const width = window.innerWidth;
      if (width >= 1440) return 85;
      if (width >= 1024) return 85;
      if (width >= 768) return 30;
      if (width >= 480) return 30;
      return 30;
    };

    const handleResize = () => {
      setXOffset(calculateOffset());
    };

    // Set initial offset
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.div className="flex items-center gap-3" whileTap={{ scale: 0.95 }}>
      <div
        onClick={() => setIsOn(!isOn)}
        className={`md:w-40 md:h-12 w-14 h-6 flex items-center border border-[#3E89C8] rounded-full p-1 cursor-pointer transition-colors duration-500`}
      >
        <motion.div
          className={`md:w-16 md:h-9 h-4 w-4 rounded-full shadow-md ${
            isOn
              ? "bg-gradient-to-t from-[#3E89C8] to-[#95C83E]"
              : "bg-gradient-to-b from-[#3E89C8] to-[#95C83E]"
          }`}
          animate={{
            x: isOn ? xOffset : 0,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>
    </motion.div>
  );
};

const Card = ({ data, inView, index }) => {
  const isGradient = data.borderType === "gradient";

  const getBorderStyle = () => {
    if (isGradient) {
      return {
        background: `linear-gradient(to bottom, ${data.borderColors[0]}, ${data.borderColors[1]})`,
      };
    } else {
      return {
        background: data.borderColor,
      };
    }
  };

  return (
    <div className="flex justify-center mt-5 relative">
      {/* Outer border wrapper */}
      {/* <div style={getBorderStyle()}  className=" bg-transparent border p-2  absolute -bottom-11 rounded-full -right-10 ">
      
      </div> */}
      <div
        style={getBorderStyle()}
        className="p-[3px] rounded-full absolute -bottom-11 z-20 -right-10"
      >
        <div className="bg-transparent rounded-full ">
          <img src={Coin1} alt="" />
        </div>
      </div>
      <motion.div
        className="p-[2px] rounded-4xl"
        style={getBorderStyle()}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div
          style={{ backgroundColor: data.color, color: data.textColor }}
          className="rounded-4xl flex flex-col items-center gap-10 p-6 max-w-sm"
        >
          {/* Title Badge */}
          <motion.div
            className="relative -mt-12"
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div
              className="p-[2px] rounded-br-full rounded-tl-full w-fit mx-auto"
              style={getBorderStyle()}
            >
              <div className="w-48 h-14 bg-[#002732] rounded-br-full rounded-tl-full flex justify-center flex-col items-center">
                <p className="text-xl font-semibold text-white">{data.Title}</p>
                {data.subtitle && (
                  <p className="bg-gradient-to-t from-[#3E89C8] to-[#95C83E] bg-clip-text text-transparent text-sm">
                    {data.subtitle}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Price */}
          <motion.p
            className="text-4xl font-bold"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.4 + index * 0.1 }}
          >
            {data.Price}
          </motion.p>

          {/* Features */}
          <div className="text-start text-sm w-full">
            {data.potis.split(",").map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 mt-3"
                initial={{ x: -20, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
              >
                <div
                  className={`${
                    data.textColor === "black" ? "bg-black" : "bg-[#8CBE3E]"
                  } h-4 w-4 rounded-full flex justify-center items-center mt-1 flex-shrink-0`}
                >
                  <TiTick
                    color={`${
                      data.textColor === "black" ? "#8CBE3E" : "#134E6B"
                    }`}
                    size={12}
                  />
                </div>
                <p className="font-semibold font-sans text-lg">{item.trim()}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
