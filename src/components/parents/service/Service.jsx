import React, { useEffect } from "react";
import Main from "../../../assets/images/parents/service/Main.png";
import Transaction from "../../../assets/images/parents/service/Transaction.png";
import Card from "../../../assets/images/parents/service/Card.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (imageInView) imageControls.start("visible");
    if (textInView) textControls.start("visible");
  }, [imageInView, textInView, imageControls, textControls]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex justify-center">
      {/* Left Side - Images */}
      <div className="w-[90%] flex flex-col md:flex-row  md:gap-6 justify-between mt-10 px-4 md:px-0">

     
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageControls}
        variants={fadeVariants}
        className="md:w-1/2 w-full flex md:justify-end  p-4 md:p-10"
      >
        <div className="relative w-full max-w-md">
          <img
            src={Transaction}
            alt=""
            className="absolute -left-4 -top-4 md:-top-10 w-36 md:w-auto"
          />
          <img src={Main} alt="" className="w-full" />
          <img
            src={Card}
            alt=""
            className="absolute bottom-0 -right-3 md:-right-16 w-36 md:w-auto"
          />
        </div>
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textControls}
        variants={fadeVariants}
        className="md:w-1/2 w-full flex justify-center items-center"
      >
        <p className="text-base md:text-lg font-sans px-2 md:px-5 md:pr-20 text-justify">
          Pellentesque mollis urna vel semper egestas. Duis ac dictumr lacus.
          Sed sagittis non nunc ac malesuada. Quisque athe oftr ut eleifend
          urna. Etiam nec porttitor erat, vel ullamcorperddn erat. Fusce euismod
          ipsum eget nunc pulvinar feugiat.Pellentesque mollis urna vel semper
          egestas. Duis ac dictumr lacus. Sed sagittis non nunc ac malesuada.
          Quisque athe oftr ut eleifend urna. Etiam nec porttitor erat, vel
          ullamcorperddn erat. Fusce euismod ipsum eget nunc pulvinar
          feugiat.Pellentesque mollis urna vel semper egestas. Duis ac dictumr
          lacus. Sed sagittis non nunc ac malesuada. Quisque athe oftr ut
          eleifend urna. Etiam nec porttitor erat, vel ullamcorperddn erat.
          Fusce euismod ipsum eget nunc pulvinar feugiat.Pellentesque mollis
          urna vel semper egestas. Duis ac dictumr lacus. Sed sagittis non nunc
          ac malesuada. Quisque athe oftr ut eleifend urna. Etiam nec porttitor
          erat, vel ullamcorperddn erat. Fusce euismod ipsum eget nunc pulvinar
          feugiat.
        </p>
      </motion.div>
       </div>
    </div>
  );
};

export default Service;
