import React from 'react'
import { FaCheck } from "react-icons/fa";

const Price = () => {
  return (
    <div className='md:h-screen bg-grey py-[50px] md:mt-0 px-5  md:px-0 flex items-center bg-[#eee]'>
        <div className='container mx-auto' data-aos="fade-up">
            <div className='w-full mb-20'>
                <h3 className='text-center text-[12px] text-secondary'>PRICE & PLANS</h3>
                <h1 className='text-center text-[24px] mt-3 md:mt-0 md:text-[40px] text-[#494949] font-[500]'>Affordable Packages</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-4 lg:gap-8'>
                <div className='bg-white p-[30px] md:h-[475px] shadow-xl rounded-md'>
                    <div className='text-center mt-4 h-[100px] flex justify-center'>
                        <span className='text-[24px] mt-4 text-[gray]'>$</span>
                        <h1 className='text-[60px] text-secondary font-[500]'>49</h1>
                        <span className='text-[gray] mt-[50px] text-[13px]'>/mon</span>
                    </div>
                    <h2 className='text-center py-3 font-[500] text-[18px]'>For Adults</h2>
                    <hr className='py-2' />
                    <ul className='w-full text-[15px] lg:text-[18px] text-center'>
                        <li className='py-3 flex items-center justify-center'> <i className=' text-secondary pr-2'><FaCheck /> </i> <span className='text-[grey]'>Individual Counseling</span> </li>
                        <li className='py-3 flex items-center justify-center'> <i className=' text-secondary pr-2'><FaCheck /> </i> <span className='text-[grey]'>Couples Therapy</span> </li>
                        <li className='py-3 flex items-center justify-center'> <i className=' text-secondary pr-2'><FaCheck /> </i> <span className='text-[grey]'>Family Therapy</span> </li>
                    </ul>
                    <div className='pt-10'>
                        <button className='w-full rounded-sm text-[15px] py-3 bg-secondary text-white'>GET STARTED</button>
                    </div>
                </div>


                <div className='bg-white p-[30px] md:h-[475px] shadow-xl rounded-md'>
                    <div className='text-center mt-4 h-[100px] flex justify-center'>
                        <span className='text-[24px] mt-4 text-[gray]'>$</span>
                        <h1 className='text-[60px] text-secondary font-[500]'>79</h1>
                        <span className='text-[gray] mt-[50px] text-[13px]'>/mon</span>
                    </div>
                    <h2 className='text-center py-3 font-[500] text-[18px]'>For Children</h2>
                    <hr className='py-2' />
                    <ul className='w-full text-[15px] lg:text-[18px] text-center'>
                        <li className='py-3 flex items-center justify-center'> <i className=' text-secondary pr-2'><FaCheck /> </i> <span className='text-[grey]'>Counseling for Children</span> </li>
                        <li className='py-3 flex items-center justify-center'> <i className=' text-secondary pr-2'><FaCheck /> </i> <span className='text-[grey]'>Behavioral Management</span> </li>
                        <li className='py-3 flex items-center justify-center'> <i className=' text-secondary pr-2'><FaCheck /> </i> <span className='text-[grey]'>Educational Counseling</span> </li>
                
                    </ul>
                    <div className='pt-10'>
                        <button className='w-full rounded-sm text-[15px] py-3 bg-secondary text-white'>GET STARTED</button>
                    </div>
                </div>


                <div className='bg-white p-[30px] md:h-[475px] shadow-xl rounded-md'>
                    <div className='text-center mt-4 h-[100px] flex justify-center'>
                        <span className='text-[24px] mt-4 text-[#906f6f]'>$</span>
                        <h1 className='text-[60px] text-secondary font-[500]'>100</h1>
                        <span className='text-[gray] mt-[50px] text-[13px]'>/mon</span>
                    </div>
                    <h2 className='text-center font-[500] py-3 text-[18px]'>For Buiness</h2>
                    <hr className='py-2' />
                    <ul className='w-full text-[15px] lg:text-[18px] text-center'>
                        <li className='py-3 flex items-center justify-center'> <i className=' text-secondary pr-2'><FaCheck /> </i> <span className='text-[grey]'>Counseling for Children</span> </li>
                        <li className='py-3 flex items-center justify-center'> <i className=' text-secondary pr-2'><FaCheck /> </i> <span className='text-[grey]'>Employee Counseling</span> </li>
                        <li className='py-3 flex  items-center justify-center'> <i className=' text-secondary pr-2'><FaCheck /> </i> <span className='text-[grey]'>Psychological Assessment</span> </li>
                       
                    </ul>
                    <div className='pt-10'>
                        <button className='w-full rounded-sm text-[15px] py-3 bg-secondary text-white'>GET STARTED</button>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Price