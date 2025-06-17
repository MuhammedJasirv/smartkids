import React, { useEffect, useState } from "react";
import Bg from "../../../assets/images/about/landing/Bg.png";
import Dots from "../../../assets/images/about/landing/dots.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imageData from "../../../data/ImageData";

const Header = () => {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const textControls = useAnimation();

  const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true });
  const cardsControls = useAnimation();

  useEffect(() => {
    if (textInView) textControls.start({ opacity: 1, y: 0 });
    if (cardsInView) cardsControls.start({ opacity: 1, y: 0 });
  }, [textInView, cardsInView]);

  return (
    <div className="relative overflow-hidden">
      {/* Background and Dots */}
      <div className="absolute top-0 left-0 w-full z-0">
        <img
          src={Bg}
          alt="Background"
          className="w-full md:h-auto object-cover h-[400px] md:max-h-[400px]"
        />
        <img
          src={Dots}
          alt="Dots"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 max-h-[800px] z-0 pointer-events-none"
        />
      </div>

      {/* Text section */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={textControls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-white z-10 text-center px-4 sm:px-6"
      >
        <p className="font-kufi font-bold text-3xl sm:text-4xl lg:text-5xl mt-16 sm:mt-20">
          Get to Know Us
        </p>
        <p className="w-full sm:w-4/5 md:w-2/3 lg:w-1/3 font-sans text-base sm:text-lg mt-4 mx-auto">
          You’ve got some Q’s and we’ve got tons and tons of A’s. Ask us about
          Card order, Coin Purchase or anything you name it ... we can help
          with! Don’t be shy - we promise we’re really nice.
        </p>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        ref={cardsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={cardsControls}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative w-full mt-6 z-10 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-16 px-4"
      >
        <Card images={imageData.left} variant="portrait" />
        <Card images={imageData.center} variant="landscape" />
        <Card images={imageData.right} variant="portrait" />
      </motion.div>

      {/* Bottom text */}
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-kufi text-center mt-10 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-96">
        Empowering Your Child's Future with Financial Confidence
      </p>
    </div>
  );
};

export default Header;

const Card = ({ images = [], variant = "landscape" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const aspectClass =
    variant === "portrait"
      ? "w-[260px] h-[280px] sm:w-[299px] sm:h-[311px]"
      : "w-[320px] h-[260px] sm:w-[461px] sm:h-[311px]";

  return (
    <div className="w-full sm:w-auto flex flex-col items-center py-6 px-2 sm:px-4">
      <div className="relative">
        <motion.div
          key={currentIndex}
          className={`rounded-xl overflow-hidden shadow-lg bg-white ${aspectClass} ${
            variant === "landscape" ? "mt-8 sm:mt-14" : "mt-0"
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={images[currentIndex]}
            alt={`carousel-${currentIndex}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};
