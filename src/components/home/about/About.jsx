import React from "react";
import { motion } from "framer-motion";
import Dots from "../../../assets/images/home/about/donts.png";
import HandOne from "../../../assets/images/home/about/handOne.png";
import Time from "../../../assets/images/home/about/time.png";
import Notes from "../../../assets/images/home/about/notes.png";
import Money from "../../../assets/images/home/about/money.png";
import CardBgOne from "../../../assets/images/home/about/CardBgOneAndFour.png";
import CardBgTwo from "../../../assets/images/home/about/CardBgSecountAndTherd.png";
import Coin1 from '../../../assets/images/home/about/coins/1.png'
import Coin2 from '../../../assets/images/home/about/coins/2.png'
const About = () => {
  const data = [
    {
      title: "Control Over Spending",
      contents:
        "Through the Smart Kid Parent App, parents can top up the card with specific coin values (e.g., 50 or 100 rupees), giving them control over how much their ",
      color: "#008FFF1A",
      icon: HandOne,
      bg: CardBgOne,
      iconBg: "#3E89C8",
    },
    {
      title: "Real-Time Tracking",
      contents:
        "Parents have access to real-time transaction records, ensuring they can monitor their child's spending habits and purchase history at school.",
      color: "#b6ca955d",
      icon: Time,
      bg: CardBgTwo,
      iconBg: "#95C83E",
    },
    {
      title: "Budget Management",
      contents:
        "By setting top-up amounts, parents can teach their children about budgeting and financial responsibility in a controlled environment.",
      color: "#b6ca955d",
      icon: Notes,
      bg: CardBgTwo,
      iconBg: "#95C83E",
    },
    {
      title: "Control Over Spending",
      contents:
        "Through the Smart Kid Parent App, parents can top up the card with specific coin values (e.g., 50 or 100 rupees), giving them control over how much their ",
      color: "#008FFF1A",
      icon: Money,
      bg: CardBgOne,
      iconBg: "#3E89C8",
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

  const cardVariants = {
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
      className="bg-white relative flex justify-center pb-10 xl:flex-row flex-col mt-10 xl:mt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div>
        <img src={Coin1} className="absolute z-0 hidden left-[10%] top-2  lg:flex" alt="" />
        <img src={Coin2} className="absolute z-0 hidden  bottom-[10%] left-[40%] lg:flex" alt="" />
      </div>
      <div className="xl:w-[50%] w-full xl:pl-[7%] text-center xl:text-start relative">
        <motion.img
          src={Dots}
          className="hidden xl:block absolute left-[7%] top-0"
          alt=""
          variants={textVariants}
        />

        <div className="h-full flex flex-col justify-center px-8 xl:pr-[10%] m-auto z-10 ">
          <motion.p
            className="text-5xl font-kufi font-bold"
            variants={textVariants}
          >
            A safe, simple, and smart way of managing your children's finances
          </motion.p>
          <motion.p
            className="font-normal text-lg lg:pr-12 pt-7"
            variants={textVariants}
          >
            simply dummy text of the printing and typesetting industry. tt has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and the of th best un nd
            scrambled it to make a type specimen book. It has be to the
            hbsurvived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unc hange deesim ply
            dummy text of the printing and typesetting industry. Lor em Ipsum
            has been the indushsntry's standard dummy text{" "}
            <span className="text-blue-400">Read more..</span>
          </motion.p>
        </div>
      </div>
      <div className="xl:w-[50%] xl:pr-[1%] z-10">
        <div className="xl:gap-10  w-full flex flex-wrap  lg:p-10 xl:p-0">
          <div className="mt-8  lg:pt-12 flex flex-col gap-10 m-auto xl:m-0 ">
            <motion.div variants={cardVariants}>
              <Card data={data[0]} />
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card data={data[1]} />
            </motion.div>
          </div>
          <div className="flex flex-col gap-10 m-auto xl:m-0">
            <motion.div variants={cardVariants}>
              <Card data={data[2]} />
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card data={data[3]} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Card = ({ data }) => {
  const cardContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="rounded-xl shadow-md w-full max-w-[18rem] mx-auto text-black mt-10 border border-[#3E89C8]/30 hover:shadow-lg transition-all duration-300"
      style={{ backgroundColor: data.color }}
      whileHover={{ y: -5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardContentVariants}
    >
      <div className={`relative p-6 flex flex-col justify-between`}>
        <motion.div
          className="p-2 w-20 h-20 flex justify-center items-center rounded-full absolute -top-7 border-8 border-white -left-8"
          style={{ backgroundColor: data.iconBg }}
          variants={iconVariants}
        >
          <img src={data.icon} alt="" />
        </motion.div>

        <img
          src={data.bg}
          className="absolute top-0 right-0 h-full"
          alt="Decoration"
        />

        <motion.div
          className="relative z-10 flex mt-6 h-full flex-col justify-center"
          variants={cardContentVariants}
        >
          <h3 className="font-bold text-xl mb-3">{data.title}</h3>
          <p className="text-sm leading-relaxed">
            {data.contents.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
