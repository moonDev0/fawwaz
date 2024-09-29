import Image from 'next/image'
import React from 'react'
import relation from '../../public/assets/relation.webp'
import couples from '../../public/assets/Couples.webp'
import depresion from '../../public/assets/depression.webp'
import family from '../../public/assets/family.webp'
import personal from '../../public/assets/personal.webp'
import business from '../../public/assets/business.webp'

const ServiceAlt = () => {
  return (
    <div className=' bg-[#eee] py-20'>
        <div className=' container mx-auto text-center'>
            <h3 className=' text-center text-secondary text-[12px] mb-5 font-bold'>SERVICES</h3>
            <h1 className='  text-[24px] md:text-[40px] text-primary font-[500] pb-10'>We Can Help You With This Situation</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex h-[300px]'>
                <div className='hidden md:block w-[50%] h-full'>
                    <Image src={relation} alt='image' className=' h-full w-full'/>
                </div>

                <div className='md:w-[50%] px-8 py-10 bg-white h-full'>
                    <h1 className=' text-[28px] text-primary text-center md:text-left font-[500]'>Relation Problem</h1>
                    <p className=' text-[17px] text-[grey] text-justify md:text-left leading-8'>Struggling with communication or facing challenges in your relationship? Our counseling services can provide a safe space to explore and address issues, fostering healthier and more fulfilling connections.</p>
                </div>
            </div>

            <div className='flex h-[300px]'>
                <div className='hidden md:block w-[50%] h-full'>
                    <Image src={couples} alt='image' className=' h-full w-full'/>
                </div>

                <div className='md:w-[50%] px-8 py-10 bg-white h-full'>
                    <h1 className=' text-[28px] text-center md:text-left text-primary font-[500]'>Couples Counseling</h1>
                    <p className=' text-[17px] text-[grey] text-justify md:text-left leading-8'>Our experienced therapists specialize in couples counseling, working with partners to enhance communication, rebuild trust, and strengthen the foundation of your relationship. Whether you`re navigating conflicts or seeking premarital guidance, we are here to support you.</p>
                </div>
            </div>
        </div>



        <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex h-[300px]'>
            <div className='md:w-[50%] px-8 py-10 bg-white h-full'>
                <h1 className=' text-[28px] text-center md:text-left text-primary font-[500]'>Depression Treatment</h1>
                <p className=' text-[17px] text-[grey] text-justify md:text-left leading-8'>If you or a loved one is dealing with depression, our compassionate therapists are here to help. We offer evidence-based treatments and personalized approaches to support you on your journey to mental well-being.</p>
            </div>
           <div className='hidden md:block w-[50%] h-full'>
            <Image src={depresion} alt='image' className=' h-full w-full'/>
        </div>
        </div>
        <div className='flex h-[300px]'>
            <div className='md:w-[50%] px-8 py-10 bg-white h-full'>
                <h1 className=' text-[28px] text-primary text-center md:text-center font-[500]'>Family Problem</h1>
                <p className=' text-[17px] text-[grey] text-justify md:text-left leading-8'>Family dynamics can be complex, and sometimes challenges arise. Our family counseling services aim to improve communication, understanding, and cohesion within the family unit, fostering a more supportive environment for everyone.</p>
            </div>
           <div className='hidden md:block w-[50%] h-full'>
            <Image src={family} alt='image' className=' h-full w-full'/>
        </div>
        </div>
        
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex h-[300px]'>
               <div className='hidden md:block w-[50%] h-full'>
                    <Image src={personal} alt='image' className=' h-full w-full'/>
                </div>

                <div className='md:w-[50%] px-8 py-10 bg-white h-full'>
                    <h1 className=' text-[28px] text-primary text-center md:text-left font-[500]'>Personal Problem</h1>
                    <p className=' text-[17px] text-[grey] text-justify md:text-left leading-8'>Facing personal challenges and seeking guidance? Our counselors provide one-on-one sessions to address a range of personal issues, offering a supportive and confidential space for self-exploration and growth.</p>
                </div>
            </div>
            <div className='flex h-[300px]'>
                <div className='hidden md:block w-[50%] h-full'>
                    <Image src={business} alt='image' className=' h-full w-full'/>
                </div>

                <div className='md:w-[50%] px-8 py-10 bg-white h-full'>
                    <h1 className=' text-[28px] text-center md:text-left text-primary font-[500]'>Business Problem</h1>
                    <p className=' text-[17px] text-[grey] text-justify md:text-left leading-8'>Balancing the demands of work and personal life can be challenging. Our counseling services extend to addressing business-related stress and challenges. We work with individuals to develop coping strategies and find a healthier work-life balance.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ServiceAlt