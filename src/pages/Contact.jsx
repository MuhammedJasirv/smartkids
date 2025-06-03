import React from 'react'
import Navigation from '../components/common/navigation/Navigation'
import Landing from '../components/contact/landing/Landing'
import Image from '../assets/images/contact/navigation/Bg.png'
import Form from '../components/contact/form/Form'
import Footer from '../components/common/footer/Footer'
const Contact = () => {
  return (
    <div>
        <div >
            <Navigation image={Image} />
        </div>
        <div>
          <Landing/>
        </div>
        <div >
          <Form/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Contact


