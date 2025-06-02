import React from "react";
import Navigation from "../components/common/navigation/Navigation";
import SlidingText from "../components/home/slidingText/SlidingText";
import Footer from "../components/common/footer/Footer";
import Landing from "../components/home/landing/Landing";
import About from "../components/home/about/About";
import Howitwork from "../components/home/howitwork/Howitwork";
import PaymentsApp from "../components/home/paymentsApp/PaymentsApp";
import Priceing from "../components/home/priceing/Priceing";
import Faq from "../components/home/faq/Faq";
import Banner from "../components/home/banner/Banner";
import PriceingYear from "../components/home/priceing/PriceingYear";

const Test = () => {
  return (
    <>
      <Landing />
      <SlidingText />
      <About />
      <Howitwork />
      <PaymentsApp />
      <Priceing />
      <Faq />
      <Banner />
    </>
  );
};

export default Test;
