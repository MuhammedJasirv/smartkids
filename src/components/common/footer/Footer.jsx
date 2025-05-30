import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Logo from "../../../assets/images/common/LogoNaviagation.png";
import Store from '../../../assets/images/socail-media/footerStores.png'
import FaceBook from '../../../assets/images/socail-media/FaceBook.png'
import Instagram from '../../../assets/images/socail-media/Insatgram.png'
import LinkedIn from '../../../assets/images/socail-media/LinkedIn.png'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.footer 
      className="w-full bg-[#003041] text-white"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 } 
      } : {}}
    >
      <motion.div 
        className='flex flex-wrap justify-between px-12 py-4 md:px-24 sm:px-6 xs:px-4'
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
      >
        <motion.div 
          className='flex flex-col  items-center md:items-start gap-5 md:gap-10 sm:gap-8 xs:items-center xs:text-center w-full md:w-auto'
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <img src={Logo} className="w-[105px] h-[105px] xs:w-20 xs:h-20" alt="Logo" />
          <p className="text-lg md:text-xl font-sans  sm:text-sm">CALL US</p>
          <p className="text-lg md:text-2xl font-sans  sm:text-sm">+91 9099 990 999</p>
        </motion.div>

        <motion.div 
          className='flex flex-col justify-between md:gap-10 sm:gap-8 xs:items-center xs:text-center w-full md:w-auto items-center md:items-start mt-1 md:mt-0'
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <img src={Logo} className="max-w-[105px] hidden lg:block invisible lg:invisible" alt="Logo" />
          <p className="text-lg md:text-xl font-sans  sm:text-sm">MAIL US</p>
          <p className="text-lg md:text-2xl font-sans  sm:text-sm">pocketmoney@gmail.com</p>
        </motion.div>

        <motion.div 
          className='flex flex-col justify-end gap-2 md:gap-10 sm:gap-8 xs:items-center xs:text-center w-full md:w-auto items-center md:items-center'
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <p className="text-lg md:text-2xl font-sans  sm:text-sm">About</p>
          <p className="text-lg md:text-2xl font-sans  sm:text-sm">Contact</p>
          <p className="text-lg md:text-2xl font-sans   sm:text-sm">Privacy Policies</p>
        </motion.div>

        <motion.div 
          className='flex flex-col justify-end md:items-end gap-12 md:gap-1 sm:gap-8 xs:items-center xs:text-center w-full md:w-auto items-center '
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <p className="text-xl md:text-2xl sm:text-base font-sans">Download Our App</p>
          <motion.img 
            src={Store} 
            className="cursor-pointer  mb-[-36px] mt-[-46px] md:mt-0"
            alt="App Stores"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </motion.div>
      </motion.div>


      <div className="w-full h-px bg-gradient-to-r mt-2 bg-[#95C83E] z-10 pointer-events-none"></div>
      <motion.div 
        className='flex justify-between items-center px-16  py-8 relative flex-wrap gap-5 md:px-24 sm:px-8 xs:px-6 xs:justify-center xs:text-center'
        initial={{ opacity: 0 }}
        animate={isInView ? { 
          opacity: 1,
          transition: { duration: 0.6, delay: 0.5 }
        } : {}}
      >
        <p className="text-lg md:text-base sm:text-sm m-auto md:m-0">© 2024 Ivory technologies</p>
        <motion.div 
          className='flex items-center justify-between gap-4 m-auto md:m-0'
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6
              }
            }
          }}
        >
          <p className="text-lg md:text-base sm:text-sm">Follow Us</p>
          <motion.img 
            src={FaceBook} 
            className="cursor-pointer hover:scale-110 transition-transform"
            alt="Facebook"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
          />
          <motion.img 
            src={LinkedIn} 
            className="cursor-pointer hover:scale-110 transition-transform"
            alt="LinkedIn"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
          />
          <motion.img 
            src={Instagram} 
            className="cursor-pointer hover:scale-110 transition-transform"
            alt="Instagram"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
          />
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer