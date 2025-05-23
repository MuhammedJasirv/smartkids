import React from 'react'
import { Outlet,ScrollRestoration } from 'react-router-dom'
import useLoading from '../hooks/useLoading'
import Preloader from '../components/common/Preloader'
const RootLayout = () => {
    const[loading]=useLoading()
  return (
    <>
    {loading&&<Preloader/>}
    <Outlet/>

    </>
  )
}

export default RootLayout