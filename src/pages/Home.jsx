// import React from "react";
// import { motion } from "framer-motion";
// import ImgOne from "../assets/images/home/how it work/OneImg.png"; // girl image
// import History from "../assets/images/home/how it work/History.png"; // sample history card
// import IdCard from "../assets/images/home/how it work/IdCard.png"; // optional card detail

// const Home = () => {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="relative w-full flex justify-center items-center py-12 px-4 md:px-8 bg-white overflow-hidden">
//       {/* Container */}
//       <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-8">
//         {/* Left History Stack */}
//         <motion.div
//           className="flex flex-col gap-4 absolute left-3 -bottom-[35%] z-20"
//           variants={fadeIn}
//           initial="hidden"
//           animate="visible"
//         >
//           <img
//             src={History}
//             alt="History"
//             className="w-[220px] sm:w-[240px] md:w-[260px] rounded-xl"
//           />
//         </motion.div>

//         {/* Main Person Image */}
//         <motion.div
//           className="relative z-10 max-w-[400px] w-full"
//           variants={fadeIn}
//           initial="hidden"
//           animate="visible"
//         >
//           <img
//             src={ImgOne}
//             alt="Main"
//             className="w-full h-auto object-contain mx-auto"
//           />

//           {/* Floating ID Card */}
//           <motion.div
//             className="absolute top-2 -translate-x-[50%] md:top-4 md:-right-[50%] z-30 "
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//           >
//             <img
//               src={IdCard}
//               alt="ID Card"
//               className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[290px] xl:w-[300px] max-w-full"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Home;




import React from 'react'
import { motion } from 'framer-motion';
import ImgTwo from "../assets/images/home/how it work/TwoImg.png";
import Transaction from "../assets/images/home/how it work/Transaction.png";
import TransactionSilver from "../assets/images/home/how it work/TransactionSilverCard.png";
import { useInView } from 'react-intersection-observer';
const Home = () => {
 const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  const [childSectionRef, childSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section className="relative w-full flex justify-center items-center py-12 px-4 md:px-8 bg-white overflow-hidden">
  {/* Container */}
  <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-8">
    
    {/* Right Section with ImgTwo and Transactions */}
    <div className="relative w-full lg:w-[30%] flex justify-center lg:pr-20 order-1 lg:order-2">
      {/* Background Gradient Shape */}
      <motion.div
        className="absolute -top-4 -ml-20 xs:-ml-24 sm:-ml-28 md:-ml-32 lg:-ml-40 
                   w-32 xs:w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 
                   h-[250px] xs:h-[280px] sm:h-[320px] md:h-[350px] lg:h-[350px] 
                   bg-gradient-to-b from-[#3E89C8] to-[#95C83E] 
                   rounded-[2rem] z-0"
        variants={imageVariants}
      />

      {/* Main Image */}
      <motion.img
        src={ImgTwo}
        alt="Main"
        className="z-10 w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-w-full"
        variants={imageVariants}
      />

      {/* Top Left Floating Transaction Image */}
      <motion.img
        src={Transaction}
        alt="Transaction"
        className="absolute z-20 
                   -top-3 
                   -left-8 xs:-left-10 sm:-left-12 md:-left-16 lg:-left-20 xl:-left-36 
                   w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36"
        initial={{ y: -20, opacity: 0 }}
        animate={childSectionInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      />

      {/* Bottom Right Floating Silver Transaction Image */}
      <motion.img
        src={TransactionSilver}
        alt="Transaction Silver"
        className="absolute z-20 
                   -bottom-6 xs:-bottom-8 sm:-bottom-10 md:-bottom-12 
                   right-0 
                   w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36"
        initial={{ y: 20, opacity: 0 }}
        animate={childSectionInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      />
    </div>
  </div>
</section>
  )
}

export default Home
