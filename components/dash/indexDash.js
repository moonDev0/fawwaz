import React, { useEffect, useState } from 'react';
import { FaBell } from "react-icons/fa";
import Image from 'next/image';
import { FaFileAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Statistics from '@/components/chart/chart';

const IndexDash = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);


    
  return (
    <div className='  pt-10 pl-[300px]  h-[100vh]  w-full bg-[#EFEFEF]'>    
                {/* main body begins here*/}
            <div className=' pl-[00px] xl:pr-[100px] mr-5 pt-14 text-black'>
               <div className=' mx-auto w-full flex justify-between'>
                    <h1 className=' text-[26px] font-semibold font-KumbhSan'>Dashboard</h1>
                    <div className=' flex items-center'>
                        <i className=' mr-[-30px] text-[20px] font-bold text-slate-500 z-10'><IoSearch /></i>
                        <input type="text" className=' pl-8  outline-none rounded-full py-2' name="" id="" />
                    </div>
               </div>

               <div className=' font-KumbhSan grid grid-cols-3 py-10 px-5 w-full bg-white mt-10'>
                    <div className=' flex justify-center items-center gap-2'>
                        <div className=' bg-primary p-6 text-white rounded-full'>
                            <FaFileAlt />
                        </div>

                        <div>
                            <h3 className=' font-medium text-[14px] mt-[-8px] text-[#999999]'>Total <br/> Staffs</h3>
                            <h1 className=' leading-8 text-primary text-[32px] font-extrabold '>20</h1>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center gap-2'>
                        <div className=' bg-[#F16529] p-6 text-white rounded-full'>
                            <FaFileAlt />
                        </div>

                        <div>
                            <h3 className=' font-medium text-[14px] mt-[-8px] text-[#999999]'>Total <br/> Students</h3>
                            <h1 className=' leading-8 text-primary text-[32px] font-extrabold '>20</h1>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center gap-2'>
                        <div className=' bg-[#FFA800] p-6 text-white rounded-full'>
                            <FaFileAlt />
                        </div>

                        <div>
                            <h3 className=' font-medium text-[14px] mt-[-8px] text-[#999999]'>Pending <br/> Appointments</h3>
                            <h1 className=' leading-8 text-primary text-[32px] font-extrabold '>20</h1>
                        </div>
                    </div>

               </div>


                <div className=' bg-white mt-5 p-5'>
                    <Statistics/>
                </div>



               <div className=' w-full bg-white font-poppins mt-5 px-10 py-5'>
                <h2 className=' font-semibold text-[16px]'>Pending Appointments </h2>

                <hr className=' my-2' />
                <div>
                    <div className=' text-[14px] font-medium grid grid-cols-4'>
                        <h1>name</h1>
                        <h1>Due date</h1>
                        <h1>Assigned to</h1>
                        <h1 className=' justify-self-end'>Status</h1>
                    </div>

                    <div className=''>
                        <div className=' h-[30px] w-full bg-[#EFEFFE] mt-2'></div>
                        <div className=' bg-white w-full h-[30px]'></div>
                        <div className=' h-[30px] w-full bg-[#EFEFFE] mt-2'></div>
                        <div className=' bg-white w-full h-[30px]'></div>
                    </div>
                </div>

               </div>


            </div>
            
        </div>
  )
}

export default IndexDash