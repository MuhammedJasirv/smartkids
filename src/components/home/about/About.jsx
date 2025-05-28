import React from "react";
import Dots from "../../../assets/images/home/about/donts.png";
import { color } from "framer-motion";
import HandOne from "../../../assets/images/home/about/handOne.png";
import Time from "../../../assets/images/home/about/time.png";
import Notes from "../../../assets/images/home/about/notes.png";
import Money from "../../../assets/images/home/about/money.png";
import CardBgOne from "../../../assets/images/home/about/CardBgOneAndFour.png";
import CardBgTwo from "../../../assets/images/home/about/CardBgSecountAndTherd.png";
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
        "Parents have access to real-time transaction records, ensuring they can monitor their child’s spending habits and purchase history at school.",
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
  return (
    <div className="bg-white flex  justify-center pb-10  ">
      <div className="w-[50%] pl-[7%] ">
        <img src={Dots} className="absolute left-[7%] " alt="" />
        <div className=" h-full  flex flex-col justify-center pr-[10%] m-auto ">
          <p className="text-5xl font-kufi  font-bold">
            A safe, simple, and smart way of managing your children’s finances
          </p>
          <p className="font-normal text-lg  pr-12 pt-7">
            simply dummy text of the printing and typesetting industry. tt has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and the of th best un nd
            scrambled it to make a type specimen book. It has be to the
            hbsurvived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unc hange deesim ply
            dummy text of the printing and typesetting industry. Lor em Ipsum
            has been the indushsntry's standard dummy text{" "}
            <span className="text-blue-400">Read more..</span>
          </p>
        </div>
      </div>
      <div className=" w-[50%] pr-[1%]">
        <div className=" gap-10 w-full flex flex-wrap">
            <div className=" mt-8 flex flex-col gap-10">
          <div>
            <Card data={data[0]} />
          </div>
          <div className="">
            <Card data={data[1]} />
          </div>
            </div>
            <div className=" flex flex-col gap-10">
          <div className="">
            <Card data={data[2]} />
          </div>
          <div className="">
            <Card data={data[3]} />
          </div>
          </div>
        </div>
      </div>
      //{" "}
    </div>
  );
};

export default About;

const Card = ({ data }) => {
  return (
    <div
      className="rounded-xl shadow-md w-full max-w-[18rem] mx-auto text-black mt-10 border border-[#3E89C8]/30 hover:shadow-lg transition-all duration-300"
      style={{ backgroundColor: data.color }}
    >
      <div className={`relative  p-6 flex flex-col justify-between `}>
        <div
          className=" p-2  w-20 h-20 flex justify-center items-center rounded-full absolute -top-7 border-8  border-white -left-8"
          style={{ backgroundColor: data.iconBg }}
        >
          <img src={data.icon} alt="" />
        </div>
        {/* Background image (positioned absolutely) */}
        <img
          src={data.bg}
          className="absolute  top-0 right-0  h-full "
          alt="Decoration"
        />

        {/* Content */}
        <div className="relative z-10 flex mt-6  h-full flex-col justify-center">
          <h3 className="font-bold text-xl  mb-3">{data.title}</h3>
          <p className=" text-sm leading-relaxed">
            {data.contents.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
