import React, { useState } from 'react'
import { Outlet,ScrollRestoration } from 'react-router-dom'
import useLoading from '../hooks/useLoading'
import Preloader from '../components/common/Preloader'
import Footer from '../components/common/footer/Footer'
const RootLayout = () => {
    const[loading]=useLoading()

  return (
    <>
    {loading&&<Preloader/>}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout