import React from "react";
import Navigation from "../components/common/navigation/Navigation";
import Image from "../assets/images/about/navigation/Bg.png";
import Heder from "../components/parents/heder/Heder";
import About from "../components/parents/about/About";
import Features from "../components/parents/features/Features";

const Parents = () => {
  return (
    <div className="relative z-0">
      <div className="relative z-20">
        <Navigation image={Image} />
      </div>

      <div className="relative z-10">
        <Heder />
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Features/>
      </div>
    </div>
  );
};

export default Parents;
