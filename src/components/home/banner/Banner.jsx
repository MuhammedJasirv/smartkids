import React from "react";
import PlayStore from "../../../assets/images/home/banner/playStore.png";
import AppStore from "../../../assets/images/home/banner/appStore.png";
import ImgOne from "../../../assets/images/home/banner/ImgTwo.png";
const Banner = () => {
  return (
    <div className="bg-white flex justify-center  mt-10 mb-10">
      <div className="bg-[#95C83E] rounded-4xl   w-[85%] flex">
        <div className="p-7 w-[70%] flex-col flex items-center">
          <p className="font-bold font-sans text-4xl mt-10">
            Download The App Now
          </p>
          <div className="flex mt-10 mb-[1.8px] gap-20">
            <img src={PlayStore} className="max-w-[234px]" alt="" />
            <img src={AppStore} className="max-w-[234px]" alt="" />
          </div>
        </div>
        <div className="w-[30%] relative">
          <div className=" relative w-full h-full overflow-visible">
            <img
              src={ImgOne}
              alt="App Illustration"
              className="absolute top-5 left-0 w-full  object-contain -translate-y-1/4 h-[391px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
