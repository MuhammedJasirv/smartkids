import React from "react";
import Navigation from "../components/common/navigation/Navigation";
import Image from "../assets/images/about/navigation/Bg.png";
import dots from "../assets/images/parents/dots.png";
import Heder from "../components/parents/heder/Heder";
const Parents = () => {
  return (
        <div>
      <Navigation image={Image} />
      <div className="relative">
        {/* Background Dots
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left z-10"
          style={{
            backgroundImage: `url(${dots})`,
            backgroundSize: "cover",
          }}
        /> */}
        
        {/* Heder content should be above dots */}
        <div className="relative z-10">
          <Heder />
        </div>
      </div>
    </div>
  );
};

export default Parents;