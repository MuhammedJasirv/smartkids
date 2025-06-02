import React from 'react'
import Navigation from '../components/common/navigation/Navigation'
import Image from '../assets/images/about/navigation/Bg.png'
import Landing from '../components/about/landing/Landing'
const About = () => {
  return (
    <div>
        <div >
            <Navigation image={Image} />
        </div>
        <div>
            <Landing/>
        </div>
    </div>
  )
}

export default About