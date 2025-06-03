import React, { useState } from "react";
import Man from "../../../assets/images/contact/landing/man.png";
import Whatsapp from "../../../assets/images/contact/landing/whatsapp.png";
import Mail from "../../../assets/images/contact/landing/mail.png";
import Phone from "../../../assets/images/contact/landing/phone.png";
import Home from '../../../assets/images/contact/landing/Bg.png'
import useImagePreloader from "../../../hooks/useImagePreloader";
import ArrowImg from '../../../assets/images/contact/landing/Arrow.png'
import { motion, useScroll, useTransform } from 'framer-motion';
const Landing = () => {
      const [isDomReady, setIsDomReady] = useState(false);
  const isHomeLoaded = useImagePreloader(Home); 

  // Wait for DOM to be ready and image to load
  const isLoading = !isDomReady || !isHomeLoaded;

  // Set DOM ready after initial render
  React.useEffect(() => {
    setIsDomReady(true);
  }, []);
  const data = [
    { title: "Chat with our team", button: "Chat with Us", icon: Whatsapp },
    {
      title: "Chat with our sales team",
      button: "Chat with sales",
      icon: Mail,
    },
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
    <div
      className="bg-no-repeat bg-cover  overflow-y-hidden relative"
      style={{ backgroundImage: `url(${Home})` }}
    >
      <div className="flex flex-col-reverse md:flex-row  w-full">
        {/* Left Section */}
        <div className=" w-full md:w-[60%]   px-30 flex justify-end  items-center">
          <div className="text-white">
            <p className="font-kufi font-bold text-5xl ">HEY, iVT SMRAT KIDS</p>
            <p className="font-sans font-semibold text-xl mt-4">
              You’ve got some Q’s and we’ve got tons and tons of A’s. Ask us
              about Card order, Coin Purchase or anything you name it ... we can
              help with! Don’t be shy - we promise we’re really nice.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className=" w-full md:w-[40%] flex justify-center items-center py-10 md:py-0 overflow-hidden ">
          <div className="relative  flex justify-center items-center w-[80vw] max-w-[300px] aspect-square mt-24">
            {/* Green Circle Border */}
            <div className=" aspect-square rounded-full border-[10vw]  md:border-[90px] border-[#8CBE3E] flex justify-center items-center w-[491px] h-[488px] ">
              {/* Positioned image inside container */}
              <div className="w-[240%] aspect-square absolute flex  ">
                <img
                  src={Man}
                  alt="Man pointing"
                  className="absolute -left-[16%] top-5 z-10 w-full h-auto object-contain"
                />
                <div className="bg-[#8CBE3E] h-24 w-1/2 rounded-full left-[28%] absolute bottom-[28%] z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="flex flex-col md:flex-row justify-between mx-auto w-[90%] gap-10  mt-5">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
     <div className="w-[10%] mx-auto mt-10 mb-10">
        <Arrow/>
      </div>
    </div>
    </>
  );
};

const Card = ({ item }) => {
  return (
    <div className="bg-gradient-to-b from-[#3E89C8] to-[#95C83E] p-[2px] rounded-3xl w-full ">
      <div className="bg-[#012C3B] rounded-3xl p-5 h-full relative flex items-end ">
        {/* Image Positioned */}
        <img
          src={item.icon}
          alt=""
          className="absolute -left-3 -top-10  object-contain"
        />

        {/* Text Content (70% width) */}
        <div className="flex flex-col justify-between h-full gap-4  ml-[30%]">
          <p className="font-semibold font-sans text-xl text-center text-white ">
            {item.title}
          </p>
          <p className="px-5 py-3 bg-[#8CBE3E] text-lg text-black rounded-full text-center">
            {item.button}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;


const Arrow = () => {
  return (
    <div className="bg-gradient-to-b from-[#3E89C8] to-[#95C83E] p-[2px] rounded-4xl w-full">
      <div className=" flex justify-center bg-[#034952] rounded-4xl p-2 items-center  ">
        <img 
          src={ArrowImg} 
          alt="Scroll indicator" 
  
        />
      </div>
    </div>
  );
};

