import React from "react";
import Home from "../../../assets/images/ui/home.png";
import Hand from '../../../assets/images/home/how it work/HandImg.png'
import ImgOne from '../../../assets/images/home/how it work/OneImg.png'
import ImgTwo from '../../../assets/images/home/how it work/TwoImg.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import Student from '../../../assets/images/home/how it work/Student.png'
import Histroy from '../../../assets/images/home/how it work/History.png'
const Howitwork = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center  overflow-y-hidden "
      style={{ backgroundImage: `url(${Home})` }}
    >
      <div className=" w-full p-14 pl-32 ">
        <p className="text-white font-kufi font-bold text-4xl">
          How does it work?
        </p>
        <p className="text-white font-sans font-normal text-lg w-1/2 mt-3 pr-2">
          To understand the working of the pocket money solution it’s important
          to bifurcate its workflow into two i.e. for parents and for children.
        </p>
      </div>
      <div className=" flex justify-center mb-10">
        <div className="relative w-1/2 flex justify-end pr-20">
            <div className="bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] w-48 h-[350px] absolute rounded-4xl -top-3 z-0 right-16"></div>
            <div className="bg-[#E1EDF5] h-20 rounded-2xl border border-blue-400 shadow-md shadow-black/10 w-80 absolute z-20 -right-32 flex justify-center gap-10 items-center p-2">
            <div>
                <img src={Student} alt="" />
            </div>
            <div>
                <p className="text-md font-semibold">Ancy James</p>
                <p className="font-sans text-xs">Admisssion Number :5434</p>
                <p className="font-sans text-xs">Kv School</p>
            </div>
            <div>
                <RiDeleteBin6Line size={20} color="blue"/>
            </div>
            </div>
            <div className="absolute left-[22%] z-20 top-36"> <img src={Histroy} alt="" /></div>
            <img src={ImgOne} className="z-10" alt="" />
                    </div>
        <div   div className=" w-1/2 pr-32 -ml-10 text-white flex flex-col justify-center items-center">
          <p className="font-sans text-2xl font-normal">For parents</p>
          <p className="font-sans text-lg  w-11/12 mt-5 ">
            Firstly, the parents add a child to the solution. They can either
            add one or multiple children in the solution. After that parents set
            allowance amount to be given to children. Parents can also set
            limits to the allowances as per their wish. Moreover, they can also
            impose interest rates on the allowances. At last, parents can
            monitor and track their children’s spending on the app itself.
          </p>
        </div>
      </div>
      <div className=" flex justify-center mb-10">
        <div className=" w-1/2    text-white flex flex-col justify-center items-center">
          <p className="font-sans text-2xl font-normal">For parents</p>
          <p className="font-sans text-lg  w-11/12 mt-5 ">
            Firstly, the parents add a child to the solution. They can either
            add one or multiple children in the solution. After that parents set
            allowance amount to be given to children. Parents can also set
            limits to the allowances as per their wish. Moreover, they can also
            impose interest rates on the allowances. At last, parents can
            monitor and track their children’s spending on the app itself.
          </p>
        </div>
        <div className="relative w-[30%] flex justify-center pr-20 ">
            <div className="bg-[linear-gradient(to_bottom,#3E89C8,#95C83E)] w-48 h-[350px] absolute rounded-4xl -ml-40 -top-4 z-0 "></div>
            <img src={ImgTwo} className="z-10 max-w-80" alt="" />
                    </div>
      </div>
      
    </div>
  );
};

export default Howitwork;
