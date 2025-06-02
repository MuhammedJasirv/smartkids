import React from 'react'
import { Outlet } from 'react-router-dom'
import useLoading from '../hooks/useLoading'
import Preloader from '../components/common/Preloader'
const CommonLayout = () => {
    const[loading]=useLoading()

  return (
    <>
    {loading&&<Preloader/>}
    <Outlet/>
    </>
  )
}

export default CommonLayout
