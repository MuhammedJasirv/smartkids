import React from "react";
import Bg from "../../../assets/images/parents/header/Bg.png";
import dots from "../../../assets/images/parents/dots.png";

const Heder = () => {
  return (
    <div
      className="relative pt-20 pb-16 bg-no-repeat bg-cover  bg-left-top text-white flex flex-col justify-center items-center px-4 "
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Dots overlay */}
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center  z-10"
        style={{
          backgroundImage: `url(${dots})`,
        }}
      />  */}
      <img src={dots} alt="" className="absolute" />

      {/* Text content */}
      <div className="relative z-20 text-center">
        <p className="font-kufi font-bold text-5xl">Parents</p>
        <p className="w-full md:w-1/3 font-sans text-lg mt-4 mx-auto">
          You’ve got some Q’s and we’ve got tons and tons of A’s. Ask us about
          Card order, Coin Purchase or anything you name it ... we can help
          with! Don’t be shy - we promise we’re really nice.
        </p>
      </div>
    </div>
  );
};

export default Heder;
