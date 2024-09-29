import React from 'react'
import { RxCalendar } from "react-icons/rx";
import { GoDiscussionClosed } from "react-icons/go";
import { BsClipboard2Check } from "react-icons/bs";

const HowitworksALT = () => {
  return (
    <div>
        <div data-aos="fade-up" className='container mb-20  mt-10 mx-auto'>
            <div className='text-center'>
                <h1 className='text-[12px] font-[500] mb-2 text-secondary'>SERVICES</h1>
                <h1 className='text-[40px] text-primary font-[700] mb-10'>How It Works</h1>
            </div>

                <div className='grid md:grid-cols-3'>
                    
                    <div className='justify-self-center'>
                        <div className='flex justify-center relative'>
                            <div className="round w-[150px] flex items-center justify-center  h-[150px] rounded-full bg-[#eee]">
                            <i className='z-10 text-[60px] opacity-70'><RxCalendar /></i>
                            <div className='w-[30px] h-[30px] bg-secondary  mr-[-60px] mt-[2px] absolute rounded-full text-white flex items-center justify-center font-[500]'><h1></h1></div>
                   
                        </div>
                            <div className='w-[40px] h-[40px] bg-secondary border-white border-4 mr-[-100px] mt-[2px] absolute rounded-full text-white flex items-center justify-center font-[500]'><h1>01</h1></div>
                        </div>
                        <div className='mt-5 text-center'>
                            <h1 className=' text-[24px] text-primary font-[500]'>Make Schedule</h1>
                            <p className='text-[17px] px-5 text-[gray]'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>

                     
                    <div className='justify-self-center my-10 md:my-0 relative'>
                        <div className='flex justify-center'>
                             <div className="round w-[150px] flex items-center justify-center  h-[150px] rounded-full bg-[#eee]">
                                <i className='z-10 text-[60px] opacity-70'><RxCalendar /></i>
                            <div className='w-[30px] h-[30px] bg-secondary  mr-[-60px] mt-[2px] absolute rounded-full text-white flex items-center justify-center font-[500]'><h1></h1></div>
                    
                            </div>
                            <div className='w-[40px] h-[40px] bg-secondary border-white border-4 mr-[-100px] mt-[2px] absolute  rounded-full text-white flex items-center justify-center font-[500]'><h1>02</h1></div>
                       
                        </div>
                        <div className='mt-5 text-center'>
                            <h1 className=' text-[24px] text-primary font-[500]'>Start Discussion</h1>
                            <p className='text-[17px] px-5 text-[gray]'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>

                     
                    <div className='justify-self-center relative'>
                        <div className='flex justify-center'>
                            <div className="round w-[150px] flex items-center justify-center  h-[150px] rounded-full bg-[#eee]">
                                <i className='z-10 text-[60px] opacity-70'><RxCalendar /></i>
                               <div className='w-[30px] h-[30px] bg-secondary  mr-[-60px] mt-[2px] absolute rounded-full text-white flex items-center justify-center font-[500]'><h1></h1></div>
               
                           </div>
                            <div className='w-[40px] h-[40px] bg-secondary border-white border-4 mr-[-100px] mt-[2px] absolute rounded-full text-white flex items-center justify-center font-[500]'><h1>03</h1></div>
                        </div>
                        <div className='mt-5 text-center'>
                            <h1 className=' text-[24px] text-primary font-[500]'>Enjoy Plan</h1>
                            <p className='text-[17px] px-5 text-[gray]'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default HowitworksALT