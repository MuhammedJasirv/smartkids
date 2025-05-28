import React, { useState } from 'react'
import Home from "../../../assets/images/ui/home.png";
import { color, motion } from 'framer-motion';
const Priceing = () => {

  const data=[
    {
      Title:"Basic",
      Price:'$345',
      potis:'15 000 words/month, Write in 10 languages ,Image generation (40/month) ,25+ languages ,Unlimited projects ,Unlimited Marvel Chat ,New experimental feature',
      color:'#002732',
      border:''
    }
  ]
  const [isOne,setIsOn]=useState(false)
  return (
    <div
          className="bg-no-repeat bg-cover bg-center pb-10   relative "
          style={{ backgroundImage: `url(${Home})` }}
        >
            <div className='pt-20 flex flex-col items-center '>
                <p className='text-5xl font-bold font-kufi text-white'>Money well Invested</p>
                <div className='flex  items-center gap-10 mt-10'>
                  <p className='text-white text-xl font-sans font-bold'>Monthly</p>
                  <ToggleSwitch isOn={isOne} setIsOn={setIsOn}/>
                  <p className='text-white text-xl font-sans font-bold'>Yearly</p>
                </div>
            </div>
        </div>
  )
}

export default Priceing

const ToggleSwitch = ({ isOn, setIsOn, }) => {
  return (
    <div className="flex items-center gap-3">

      <div
        onClick={()=>setIsOn(!isOn)}
        className={`w-40 h-12 flex items-center  border border-[#3E89C8] rounded-full p-1 cursor-pointer transition-colors duration-300`}
      >
        <div
          className={`w-16 h-9  rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? 'translate-x-22 bg-gradient-to-t from-[#3E89C8] to-[#95C83E]' : 'translate-x-0 bg-gradient-to-b from-[#3E89C8] to-[#95C83E]' 
          }`}
        ></div>
      </div>
    </div>
  );
};


const Card=()=>{
  return (
    <div></div>
  )
}