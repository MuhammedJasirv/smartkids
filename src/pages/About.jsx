import React from 'react'
import Navigation from '../components/common/navigation/Navigation'
import Image from '../assets/images/about/navigation/Bg.png'
import Header from '../components/about/header/Header'
import AboutOne from '../components/about/about/AboutOne'
import Vision from '../components/about/vision/Vision'
import FooterBanner from '../components/common/footerBanner/FooterBanner'
import Footer from '../components/common/footer/Footer'
const About = () => {
  return (
    <div>
        <div >
            <Navigation image={Image} className="relative z-20" />
        </div>
        <div >
          <Header/>
        </div>
        <div>
          <AboutOne/>
        </div>
        <div>
          <Vision/>
        </div>
        <div className="w-full">
        <FooterBanner color={"8CBE3E"} width={"100%"} />
      </div>
      <div className="z-10">
        <Footer Colour="#001830" />
      </div>
    </div>
  )
}

export default About