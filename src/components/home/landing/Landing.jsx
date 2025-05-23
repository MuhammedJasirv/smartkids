import React from "react";
import Navigation from "../../common/navigation/Navigation";
import Home from "../../../assets/images/ui/home.png"; // Image import
import PhoneCards from "../../../assets/images/ui/ladingPhoneCards.png";
const Landing = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${Home})` }} // Correct usage
    >
      <div>
        <Navigation />
      </div>
      <div className="h-96 flex">
        <div className="w-[65%] bg-red-600 h-full pl-32 pt-14">
          <p className="font-stretch-semi-condensed font-bold text-7xl">Manage your children’s finances efficiently</p>
        </div>
        <div className="w-[35%] bg-green-600 h-full">
          <img src={PhoneCards} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
