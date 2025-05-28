import React, { useState } from "react";
import Home from "../../../assets/images/ui/home.png";
import { color, motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
const Priceing = () => {
  const data = [
    {
      Title: "Basic",
      Price: "$345",
      potis:
        "15 000 words/month, Write in 10 languages ,Image generation (40/month) ,25+ languages ,Unlimited projects ,Unlimited Marvel Chat ,New experimental feature",
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
        "15 000 words/month, Write in 10 languages ,Image generation (40/month) ,25+ languages ,Unlimited projects ,Unlimited Marvel Chat ,New experimental feature",
      color: "#8CBE3E",
      borderType: "solid",
      borderColor: "#8CBE3E",
      textColor: "black",
    },
    {
      Title: "Premium",
      Price: "$385",
      potis:
        "15 000 words/month, Write in 10 languages ,Image generation (40/month) ,25+ languages ,Unlimited projects ,Unlimited Marvel Chat ,New experimental feature",
      color: "#134E6B",
      borderType: "gradient",
      borderColors: ["#3E89C8", "#95C83E"],
      textColor: "white",
    },
  ];
  const [isOne, setIsOn] = useState(false);
  return (
    <div
      className="bg-no-repeat bg-cover bg-center pb-12   relative  "
      style={{ backgroundImage: `url(${Home})` }}
    >
      <div className="pt-20 flex flex-col items-center ">
        <p className="text-5xl font-bold font-kufi text-white">
          Money well Invested
        </p>
        <div className="flex  items-center gap-10 mt-10">
          <p className="text-white text-xl font-sans font-bold">Monthly</p>
          <ToggleSwitch isOn={isOne} setIsOn={setIsOn} />
          <p className="text-white text-xl font-sans font-bold">Yearly</p>
        </div>
      </div>
      <div className="flex  justify-center gap-10 mt-18">
        <Card data={data[0]} />
        <Card data={data[1]} />
        <Card data={data[2]} />
      </div>
    </div>
  );
};

export default Priceing;

const ToggleSwitch = ({ isOn, setIsOn }) => {
  return (
    <div className="flex items-center gap-3">
      <div
        onClick={() => setIsOn(!isOn)}
        className={`w-40 h-12 flex items-center  border border-[#3E89C8] rounded-full p-1 cursor-pointer transition-colors duration-300`}
      >
        <div
          className={`w-16 h-9  rounded-full shadow-md transform transition-transform duration-300 ${
            isOn
              ? "translate-x-22 bg-gradient-to-t from-[#3E89C8] to-[#95C83E]"
              : "translate-x-0 bg-gradient-to-b from-[#3E89C8] to-[#95C83E]"
          }`}
        ></div>
      </div>
    </div>
  );
};

const Card = ({ data }) => {
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
    <div className="flex justify-center mt-5">
      {/* Outer border wrapper */}
      <div className="p-[2px] rounded-4xl " style={getBorderStyle()}>
        <div
          style={{ backgroundColor: data.color, color: data.textColor }}
          className="rounded-4xl  flex flex-col items-center gap-10 p-6"
        >
          {/* Title Badge */}
          <div className="relative -mt-12">
            <div
              className="p-[2px] rounded-br-full rounded-tl-full w-fit mx-auto"
              style={getBorderStyle()}
            >
              <div className="w-48 h-14 bg-[#002732] rounded-br-full rounded-tl-full flex justify-center flex-col items-center">
                <p className="text-xl font-semibold text-white">{data.Title}</p>
                <p className="bg-gradient-to-t from-[#3E89C8] to-[#95C83E] bg-clip-text text-transparent">
                  {data?.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Price */}
          <p className="text-4xl font-bold">{data.Price}</p>

          {/* Features */}
          <div className="text-start text-sm">
            {data.potis.split(",").map((item, idx) => (
              <div className="flex items-center gap-3 mt-3">
            <div className={`${data.textColor === "black" ? "bg-black" : "bg-[#8CBE3E]"} h-4 w-4 rounded-full flex justify-center items-center`}>
                  <TiTick color={`${data.textColor === "black" ? "#8CBE3E" : "#134E6B"}`} size={20}/>
                </div>
              <p key={idx} className="mt-1 font-semibold font-sans text-lg">
                {item.trim()}
              </p>
              </div>  
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
