import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Coin1 from "../../../assets/images/home/pricing/coins/1.png";
import { TiTick } from "react-icons/ti";
const PriceingYear = () => {
     const data = [
    {
      Title: "Basic",
      Price: "$950",
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
      Price: "$900",
      potis:
        "15 000 words/month, Write in 10 languages, Image generation (40/month), 25+ languages, Unlimited projects, Unlimited Marvel Chat, New experimental feature",
      color: "#8CBE3E",
      borderType: "solid",
      borderColor: "#8CBE3E",
      textColor: "black",
    },
    {
      Title: "Premium",
      Price: "$1100",
      potis:
        "15 000 words/month, Write in 10 languages, Image generation (40/month), 25+ languages, Unlimited projects, Unlimited Marvel Chat, New experimental feature",
      color: "#134E6B",
      borderType: "gradient",
      borderColors: ["#3E89C8", "#95C83E"],
      textColor: "white",
    },
  ];
      const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
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

  return (
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
  )
}

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


export default PriceingYear