import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { GrFormPrevious} from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

const More = () => {
  return (
    <div>
        <div className="container mt-5 mb-20 mx-auto">
        <div className=" w-full flex justify-center md:gap-4 text-secondary font-[500] px-6"> 
        <div className=' boder-secondary border  cursor-pointer rounded-full py-2 px-3 items-center flex justify-center'><i><GrFormPrevious /></i></div> 
        <div className=' boder-secondary border text-white bg-secondary cursor-pointer rounded-full py-2 px-4'> <h1>1</h1></div> 
        <div className=' boder-secondary border  cursor-pointer rounded-full py-2 px-4'><h1>2</h1></div> 
        <div className=' boder-secondary border cursor-pointer rounded-full py-2 px-4'>3</div> 
        <div className=' boder-secondary border cursor-pointer rounded-full py-2 px-4'>4</div> 
        <div className=' boder-secondary border cursor-pointer rounded-full py-2 px-4'>5</div> 
        <div className=' boder-secondary border cursor-pointer rounded-full font-bold py-2 px-3 items-center flex justify-center'><i><IoIosArrowForward /></i></div> 
      </div>
        </div>
    </div>
  )
}

export default More
