import React, { useRef } from 'react';
import { motion, useAnimation, stagger } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Coin1 from '../../../assets/images/common/footerBanner/coins/1.png';
import Coin2 from '../../../assets/images/common/footerBanner/coins/2.png';
import PlayStore from '../../../assets/images/common/footerBanner/GooglePlayStore.png';
import AppStore from '../../../assets/images/common/footerBanner/AppStore.png';

const FooterBanner = ({ color, width }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.3,
    rootMargin: '-50px 0px'
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const coinVariants = {
    hidden: { opacity: 0, rotate: -180 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={`m-auto bg-[#${color}] lg:w-[${width}] overflow-hidden ${width==="80%"?'lg:rounded-3xl':''}`}
    >
      <div className="w-[90%] lg:w-[80%] flex flex-wrap justify-between items-center m-auto lg:p-4 p-2">
        <motion.img 
          src={Coin1} 
          alt="Coin 1" 
          className="w-16 sm:w-20 md:w-24 hidden lg:flex"
          variants={coinVariants}
        />

        <motion.p 
          className='text-xl font-bold font-sans m-auto lg:m-0 xs:text-3xl'
          variants={itemVariants}
        >
          Download The App Now
        </motion.p>

        <motion.div 
          className="flex gap-2 sm:gap-3 m-auto mt-5 lg:m-0 lg:mt-0"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4
              }
            }
          }}
        >
          <motion.img 
            src={PlayStore} 
            alt="Play Store" 
            className="w-28 sm:w-32"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          />
          <motion.img 
            src={AppStore} 
            alt="App Store" 
            className="w-28 sm:w-32"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        <motion.img 
          src={Coin2} 
          alt="Coin 2" 
          className="w-16 sm:w-20 md:w-24 hidden lg:flex"
          variants={coinVariants}
        />
      </div>
    </motion.div>
  );
};

export default FooterBanner;