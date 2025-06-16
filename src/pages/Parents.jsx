import React from "react";
import Navigation from "../components/common/navigation/Navigation";
import Image from "../assets/images/about/navigation/Bg.png";
import Heder from "../components/parents/heder/Heder";
import About from "../components/parents/about/About";
import Features from "../components/parents/features/Features";
import Service from "../components/parents/service/Service";
import FooterBanner from "../components/common/footerBanner/FooterBanner";
import Footer from "../components/common/footer/Footer";

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
      <div>
        <Service/>
      </div>
      <div className="relative h-24">
        <div className="w-full md:absolute mt-7">
        <FooterBanner color={"8CBE3E"} width={"80%"} />
        </div>
      </div>
      <div>
        <Footer Colour="#001830" />
      </div>
    </div>
  );
};

export default Parents;
