import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Main from "../../../assets/images/about/about/Main.png";

const AboutOne = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-10 w-[90%] flex flex-col lg:flex-row mx-auto"
    >
      {/* Left Column */}
      <motion.div
        variants={itemVariants}
        className="w-full lg:w-1/2 flex-col justify-center items-center flex gap-10 pb-10"
      >
        <motion.p
          variants={itemVariants}
          className="font-sans text-lg px-5 lg:px-5"
        >
          Pellentesque mollis urna vel semper egestas. Duis ac dictumr lacus.
          Sed sagittis non nunc ac malesuada. Quisque athe oftr ut eleifend
          urna. Etiam nec porttitor erat, vel ullamcorperddn erat. Fusce euismod
          ipsum eget nunc pulvinar feugiat.
        </motion.p>
        <motion.img
          variants={itemVariants}
          src={Main}
          alt=""
          className="w-full max-w-md"
        />
      </motion.div>

      {/* Right Column */}
      <motion.div
        variants={itemVariants}
        className="w-full lg:w-1/2 flex flex-col justify-between pb-10"
      >
        <motion.p
          variants={itemVariants}
          className="font-sans text-lg px-5 lg:pr-10"
        >
          Pellentesque mollis urna vel semper egestas. Duis ac dictumr lacus.
          Sed sagittis non nunc ac malesuada. Quisque athe oftr ut eleifend
          urna. Etiam nec porttitor erat, vel ullamcorperddn erat. Fusce euismod
          ipsum eget nunc pulvinar ppulvinar pu lvinar ulvinar
          feugiat.Pellentesque mollis urna vel semper eg estas. Duis ac dictumr
          lacus. Sed sagittis non nunc ac m alala lesuada. Quisque athe oftr ut
          eleifend urna. Etiam neccmsaj porttitor erat, vel ullamcorperddn erat.
          Fusce euismod ipsum eget nunc pulvinar feugiat.Pellentesque mollis
          urna vejsla;jnl semper egestas. Duis ac dictumr lacus. Sed sagittis
          non nunc
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.p
            variants={itemVariants}
            className="font-kufi mt-6 md:mt-0 text-3xl md:text-4xl lg:text-5xl font-bold px-6 lg:pr-10"
          >
            Empowering Your Child Future with Financial
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg px-5 mt-6"
          >
            Pellentesque mollis urna vel semper egestas. Duis ac dictumr lacus.
            Sed sagittis non nunc ac malesuada. Quisque athe oftr ut eleifend
            urna. Etiam nec porttitor erat, vel ullamcorperddn erat. Fusce
            euismod ipsum eget nunc pulvinar feugiat.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutOne;