import Image from 'next/image';
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import img from '../../public/assets/person_1.jpg'

const Card = () => {
  return (
    <div className='relative'>
           <div className='w-[40px] absolute mt-[-20px] ml-5 flex justify-center items-center z-50 h-[40px] bg-secondary rounded-full'>
                    <i className=' text-white'><FaQuoteLeft /></i>
            </div>
        <div className='h-[210px] mt-10 shadow-lg w-[350px] rounded-md bg-white mb-10 p-5'>  
            <p className='text-[grey] font-[500] mt-2'>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className='mt-5 items-center flex'>
                <div className='h-[70px] w-[70px] rounded-full'>
                    <Image src={img} alt='img' className='rounded-full'/>
                </div>
                <div className='ml-4'>
                    <h1 className=' font-[500] text-[20px]'>Roger Scott</h1>
                    <p className='text-[grey] font-[500]'>Marketting Manager</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card