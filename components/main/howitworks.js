import React from 'react'
import { RxCalendar } from "react-icons/rx";
import { GoDiscussionClosed } from "react-icons/go";
import { BsClipboard2Check } from "react-icons/bs";

const Howitworks = () => {
  return (
    <div className=''>
        <div data-aos="fade-up" className='container mb-20 mt-[650px] md:mt-52 mx-auto'>
            <div className='text-center'>
                <h1 className='text-[12px] font-[500] mb-2 text-secondary'>SERVICES</h1>
                <h1 className='text-[30px] lg:text-[40px] text-primary font-[700] mb-10'>How It Works</h1>
            </div>

                <div className='grid px-5 md:px-0 grid-cols-1 md:grid-cols-3'>
                    
                    <div className='round-card justify-self-center'>
                        <div className='flex justify-center relative'>
                            <div className="round w-[150px] flex items-center justify-center  h-[150px] rounded-full bg-[#eee]">
                                <i className='z-10 text-[60px] opacity-70'><RxCalendar /></i>
                                <div className='inner-ball w-[30px] h-[30px] bg-secondary  mr-[-60px] mt-[2px] absolute rounded-full text-white flex items-center justify-center font-[500]'><h1></h1></div>
                       
                            </div>
                            <div className='outer-ball w-[40px] h-[40px] bg-secondary border-white border-4 mr-[-100px] mt-[2px] absolute rounded-full text-white flex items-center justify-center font-[500]'><h1>01</h1></div>
                        </div>
                        <div className='mt-5 text-center'>
                            <h1 className=' text-[20px] lg:text-[24px] text-primary font-[500]'>Make Schedule</h1>
                            <p className='text-[15px] px lg:text-[17px] text-[gray]'>Scheduling a session at your convenience. Choose a time that suits you best.</p>
                        </div>
                    </div>

                     
                    <div className='round-card justify-self-center my-10 md:my-0 relative'>
                        <div className='flex justify-center'>
                            <div className="round w-[150px] flex items-center justify-center  h-[150px] rounded-full bg-[#eee]">
                                <i className='z-10 text-[60px] opacity-70'><GoDiscussionClosed /></i>
                                <div className='inner-ball w-[30px] h-[30px] bg-secondary  mr-[-60px] mt-[2px] absolute rounded-full text-white flex items-center justify-center font-[500]'><h1></h1></div>
                       
                            </div>
                            <div className='outer-ball w-[40px] h-[40px] bg-secondary border-white border-4 mr-[-100px] mt-[2px] absolute  rounded-full text-white flex items-center justify-center font-[500]'><h1>02</h1></div>
                       
                        </div>
                        <div className='mt-5 text-center'>
                            <h1 className='text-[20px] lg:text-[24px] text-primary font-[500]'>Start Discussion</h1>
                            <p className='text-[15px] px lg:text-[17px] text-[gray]'>Initiate a conversation with our experienced counselors.</p>
                        </div>
                    </div>

                     
                    <div className='round-card justify-self-center relative'>
                        <div className='flex justify-center'>
                            <div className="round w-[150px] flex items-center justify-center  h-[150px] rounded-full bg-[#eee]">
                                <i className='z-10 text-[60px] opacity-70'><BsClipboard2Check /></i>
                                <div className='inner-ball w-[30px] h-[30px] bg-secondary  mr-[-60px] mt-[2px] absolute rounded-full text-white flex items-center justify-center font-[500]'><h1></h1></div>
                       
                            </div>
                            <div className='outer-ball w-[40px] h-[40px] bg-secondary border-white border-4 mr-[-100px] mt-[2px] absolute rounded-full text-white flex items-center justify-center font-[500]'><h1>03</h1></div>
                        </div>
                        <div className='mt-5 text-center'>
                            <h1 className='text-[20px] lg:text-[24px] text-primary font-[500]'>Enjoy Plan</h1>
                            <p className='text-[15px] px lg:text-[17px] lg:px-5 text-[gray]'>Choose a customized plan designed just for you.</p>
                        </div>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default Howitworks