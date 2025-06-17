import React from 'react'
import Navigation from '../components/common/navigation/Navigation'
import Image from '../assets/images/about/navigation/Bg.png'
import Header from '../components/about/header/Header'
import AboutOne from '../components/about/about/AboutOne'
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
    </div>
  )
}

export default About