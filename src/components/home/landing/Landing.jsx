import React from "react";
import Navigation from "../../common/navigation/Navigation";
import Home from "../../../assets/images/ui/home.png"; // Image import
import PhoneCards from "../../../assets/images/ui/ladingPhoneCards.png";
import PlayStore from '../../../assets/images/ui/Google Play Black.png'
import AppStore from '../../../assets/images/ui/App Store Black.png'
const Landing = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center max-h-screen overflow-y-hidden "
      style={{ backgroundImage: `url(${Home})` }} // Correct usage
    >
      <div>
        <Navigation />
      </div>
      <div className=" flex">
        <div className="w-[65%] pl-32 pt-14 text-white">
          <p className="font-stretch-semi-condensed font-bold text-7xl">
            Manage your children’s finances efficiently
          </p>
          <p className="font-sans font-semibold text-xl w-[70%] mt-5">
            Cultivate smart spending habits in your child by tracking and
            managing their finances with a pocket money solution
          </p>
          <div className=" flex gap-6 mt-20">
            <img src={PlayStore} alt="" />
            <img src={AppStore} alt="" />
          </div>
        </div>
        <div className="w-[35%]  h-full">
          <img
            src={PhoneCards}
            alt="Phone Cards"
            className="max-w-7xl  relative -left-96 -top-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
