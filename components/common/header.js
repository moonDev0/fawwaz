import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Header = ({ bgImage, title, content, link, titleAlt }) => {
  const headerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  };

  return (
    <div  className="h-[50vh] bg-top bg-cover bg-header  md:h-[50vh] lg:h-[50vh] bg-no-repeat mb-10">
     <div className='bg-[#54876bb0] px-10 w-full flex items-end h-full'>
        <div  data-aos="zoom-in" className="container pb-10 w-full text-center mx-auto">
       
        <p className="md:text-[16px] text-[14px] lg:text-[20px] md:w-[60vw] font-[500] text-white">
          {content}
        </p>

            <ul data-aos="fade-up" className='flex font-[500] uppercase justify-center'>
                <li className='flex opacity-60 hover:text-secondary items-center'>
                <Link href="/">Home</Link>
                    <i className='flex items-center mr-2'>
                    <IoIosArrowForward />
                    </i>
                </li>

                <li className='flex font-[500] opacity-60 items-center'>
                <Link href="#">{link}</Link>
                <i className='flex mr-2 items-center'>
                    <IoIosArrowForward />
                </i>
                </li>
            </ul>

            <h1 data-aos="fade-up" className="md:text-[30px] text-[20px] mb-2 md:mb-0 lg:text-[48px] text-black font-[600]">{title}</h1>
            <h1 data-aos="fade-up" className="md:text-[30px] text-[20px] mb-2 md:mb-0 lg:text-[30px] text-black font-[600]">{titleAlt}</h1>
        </div>
    </div>
    </div>
  );
};

export default Header;