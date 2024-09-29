import Image from 'next/image'
import React from 'react'
import { FaPlay, FaClipboardList } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { PiClipboardTextThin } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { BsUmbrella } from "react-icons/bs";


const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <div className='bg-hero bg-cover bg-no-repeat bg-top w-full h-screen'>
            <div className='container mx-auto grid backdrop-blur-sm md:backdrop-blur-0 md:grid-cols-2 w-full h-full items-center'>
                <div data-aos="fade-up" className=' px-5 md:px-0'>
                    <h1 className='text-[35px] md:text-[40px] lg:text-[60px] text-white font-[700] md:font-[500] mt-20 md:mt-0 pb-[40px] md:pb-[24px] md:leading-12'>Counseling <br /> For Better Living</h1>
                    <p className='text-[18px] pb-[24px] text-white font-[500]'>Discover the path to a better education through counseling. Book expert guidance is your compass for positive change.</p>
                    <div>
                    <button className='bg-secondary text-white text-[15px] px-[24px] py-[16px] font-md'>Contact Us</button>
                    <button className='bg-white ml-2 text-black text-[15px] px-[24px] py-[16px] font-md'>Read more</button>
                    </div>
                </div>   
                
                <div className='md:justify-self-end relative px-5 md:px-0'>
                    <div className='pulse bg-white w-[90px] left-0 right-0 md:left-auto flex items-center justify-center h-[90px] rounded-[100px]'>
                         <i className='text-[purple] text-[25px]'><FaPlay /></i>
                    </div>
                </div>
            </div>
        </div>


        <div className='relative md:mt-[-100px]'>
            <div className='w-full grid grid-cols-6'>
                <div className='h-[250px] opacity-0 md:opacity-100 bg-secondary col-span-2 '></div> <div></div> <div></div> <div></div> <div></div> <div></div>
            </div>
            <div className='h-[600px] md:h-[250px] absolute grid grid-cols-1 md:grid-cols-3 top-0 left-0 right-0 container mx-auto bg-secondary'>
                <div className='flex bg-[purple] p-5 items-center gap-3'>
                    <div className='w-[150px mt-[-40px]'>
                        <i className='text-white text-[40px] lg:text-[60px] opacity-70'><PiClipboardTextThin /></i>
                    </div>

                    <div>
                        <h1 className='text-white font-bold text-[20px] lg:text-[24px] pb-2'>100% Confidential</h1>
                        <p className='text-[17px] text-white opacity-70'>Your privacy matters. Our counseling services ensure 100% confidentiality, providing secure space for your personal growth and well-being.</p>
                    </div>
                </div>

                <div className='flex bg-[purple] p-5 items-center gap-3'>
                    <div className='w-[150px] mt-[-40px]'>
                        <i className='text-white text-[40px] lg:text-[60px] opacity-70'><RiTeamLine /></i>
                    </div>

                    <div>
                        <h1 className='text-white font-bold md:text-[20px] lg:text-[24px] pb-2'>Qualified Team</h1>
                        <p className='text-[17px] text-white opacity-70'>Expert guidance, compassionate support. Our qualified team of counselors are dedicated to helping you navigate life`s challenges with skill and understanding.</p>
                    </div>
                </div>

                <div className='flex p-5 items-center gap-3'>
                    <div className='w-[100px] mt-[-40px]'>
                        <i className='text-white text-[40px] lg:text-[60px] opacity-70'><BsUmbrella /></i>
                    </div>

                    <div>
                        <h1 className='text-white font-bold text-[18px] lg:text-[24px] pb-2'>Individual Approach</h1>
                        <p className='text-[17px] text-white opacity-70'>Tailored for you. Our counseling takes a personalized approach, addressing your unique needs and goals for a more meaningful journey.</p>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Hero