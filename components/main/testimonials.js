import React from 'react'
import Testimonies from './testimonies'
import TestimoniesAlt from './testimoniesAlt'

const Testimonials = () => {
  return (
    <div className='h-[80vh]'  data-aos="fade-up">
        <div className='bg-testimonial relative bg-no-repeat bg-cover bg-center h-[50vh]'>
            <div className='w-full h-full bg-secondary opacity-80 flex justify-center items-center absolute'>
                <div className='text-center mb-20 md:mb-0'>
                    <h1 className='text-[12px] font-[600] text-white'>TESTIMONIAL</h1>
                    <h3 className='text-white text-[40px] font-[700]'>Happy Clients</h3>
                </div>
            </div>
        </div>

        <div className='container px-5 md:px-0 relative mt-[-150px] mx-auto left-0 right-0'>
            <div className='hidden md:block'>
              <Testimonies/>
            </div>

            <div className=' block md:hidden'>
              <TestimoniesAlt/>
            </div>
          </div>
    </div>
  )
}

export default Testimonials