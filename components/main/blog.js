import Image from 'next/image'
import React from 'react'
import blogImage from '../../public/assets/image_1.jpg'
import blog2 from '../../public/assets/image_2.jpg'
import blog3 from '../../public/assets/image_3.jpg'

const Blog = () => {
  return (
    <div>
        <div data-aos="fade-up" className='container px-5 md:px-0 my-10 mx-auto'>
            <div className='text-center'>
              <h1 className='text-[12px] font-[500] mb-2 text-secondary'>BLOG</h1>
              <h1 className='text-[40px] text-primary font-[700] mb-10'>Recent Blog</h1>
            </div>

            <div className='blogs grid gap-6 md:grid-cols-3 pb-20'>
                  
                <div>
                    <div>
                      <Image src={blogImage} alt='' className=''/>
                    </div>

                    <div className='flex justify-center mt-[-55px]'>
                      <div className='w-[100px] h-[100px] text-center rounded-full bg-[#eee]'>
                        <h1 className='text-[30px] pt-1 text-secondary font-bold'>18</h1>
                        <h1 className='text-[16px] font-bold'>APRIL</h1>
                        <h5 className='text-[11px] text-primary'>2020</h5>
                      </div>
                    </div>
                    
                    <div className='text-center'>
                      <h1 className='text-[18px] lg:text-[20px] font-[500] mt-2'>Social Media Risks To Mental Health</h1>
                      <p className='text-[15px] lg:text-[17px] px-2 font-[450] text-[grey]'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>


                <div>
                    <div>
                      <Image src={blog2} alt='' className=''/>
                    </div>

                    <div className='flex justify-center mt-[-55px]'>
                      <div className='w-[100px] h-[100px] text-center rounded-full bg-[#eee]'>
                        <h1 className='text-[30px] pt-1 text-secondary font-bold'>18</h1>
                        <h1 className='text-[16px] font-bold'>APRIL</h1>
                        <h5 className='text-[11px] text-primary'>2020</h5>
                      </div>
                    </div>
                    
                    <div className='text-center'>
                      <h1 className='text-[18px] lg:text-[20px] font-[500] mt-2'>Social Media Risks To Mental Health</h1>
                      <p className='text-[15px] lg:text-[17px] px-2 font-[450] text-[grey]'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>

                <div>
                    <div>
                      <Image src={blog3} alt='' className=''/>
                    </div>

                    <div className='flex justify-center mt-[-55px]'>
                      <div className='w-[100px] h-[100px] text-center rounded-full bg-[#eee]'>
                        <h1 className='text-[30px] pt-1 text-secondary font-bold'>18</h1>
                        <h1 className='text-[16px] font-bold'>APRIL</h1>
                        <h5 className='text-[11px] text-primary'>2020</h5>
                      </div>
                    </div>
                    
                    <div className='text-center'>
                      <h1 className='text-[18px] lg:text-[20px] font-[500] mt-2'>Social Media Risks To Mental Health</h1>
                      <p className='text-[15px] lg:text-[17px] px-2 font-[450] text-[grey]'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog