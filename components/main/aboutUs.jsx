import React from 'react'
import pic from '../../public/assets/abmo_about_us.webp'
import Image from 'next/image'
import { CiYoutube } from "react-icons/ci";

const AboutUS = () => {
  return (
    <div>
        <div data-aos="fade-up" className="container  bg-[#eee] mt-10 w-full mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className=' bg-about bg-center hidden md:block'>
               
            </div>
            
            <div className='p-8 lg:p-10 bg-[#eee]'>
                <div>
                    <h3 className='text-[12px] text-secondary font-[500] pb-5'>WELCOME</h3>
                    <h1 className='text-[26px] lg:text-[40px] font-[500] text-primary pb-5'>Best Counseling Funding Network Worldwide.</h1>
                </div>
                <div>
                    <p className='text-[15px] lg:text-[17px] text-primary pb-2 lg:pb-5'>Our team comprises dedicated counselors and experienced writers passionate about mental health and well-being. We bring a wealth of knowledge, empathy, and a commitment to helping others navigate life`s challenges.</p>
                    <p className='text-[15px] lg:text-[17px] text-primary pb-2 lg:pb-10'>As your trusted resource for mental health information, we strive to deliver well-researched, insightful articles that cater to various aspects of personal growth, relationship dynamics, and mental resilience.</p>
                </div>
                
                <div className='flex items-center'>
                 
                        <i className='z-10  text-[45px] text-secondary'>
                            <CiYoutube />
                        </i>
                    
                    
                    <button className='font-[14px] ml-2'> WATCH OUR CONSULTANT VIDEO</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutUS