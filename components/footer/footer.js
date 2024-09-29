import React, { useState, useEffect } from 'react';
// import icon from '../../public/assets/icon.png';
import Image from 'next/image';
import { AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter, FaFacebookF, FaInstagram, FaMap, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  const [showCompanyLinks, setShowCompanyLinks] = useState(false);
  const [showServicesLinks, setShowServicesLinks] = useState(false);
  const [showAddressLinks, setShowAddressLinks] = useState(true);

  useEffect(() => {

    const screenWidth = window.innerWidth;

    
    if (screenWidth <= 768) {
      setShowCompanyLinks(false);
      setShowServicesLinks(false);
      setShowAddressLinks(true);
    } else {
      setShowCompanyLinks(true);
      setShowServicesLinks(true);
      setShowAddressLinks(true);
    }
  }, []); 


  return (
    <footer data-aos="fade-up" className="">
    <div className='bg-dark px-5 md:px-0  min-h-[40vh] text-white  pt-12'>
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo on the right 
        <div className="mb-6 md:mb-0">
          <Image src={icon} alt="Logo" className=" h-16" />
        </div>
        */}

        {/* Grid 1 */}
        <div className="block">
        <hr className='mt-5 md:hidden'/>
          <div className=''>
            <button
              className='text-[18px] md:text-[24px] mt-5 md:mt-0 font-[700]'
              onClick={() => setShowCompanyLinks(!showCompanyLinks)}
            >
            Counselor
            </button>
          </div>
          <hr className='mt-5 md:hidden'/>
          
          {showAddressLinks && (
            <div className='text-[13px] md:text-[16px] w-[200px] text-white'>
              <h1 className='leading-[35px] mt-5 md:mt-0 font-bold'></h1>
              <p className='leading-[35px] mt-5 opacity-60'>
              Discover the path to a better life.
              </p>

              <div className='flex gap-4 mt-2'>
                <div className='rounded-full w-[50px] h-[50px] bg-secondary flex items-center justify-center'> <FaTwitter />  </div>
                <div className='rounded-full w-[50px] h-[50px] bg-secondary flex items-center justify-center'> <FaFacebookF />  </div>
                <div className='rounded-full w-[50px] h-[50px] bg-secondary flex items-center justify-center'> <FaInstagram /> </div>
              </div>
            </div>
          )}
        </div>

        {/* Grid 1 */}
        <div className="block">
        <hr className='mt-5 md:hidden'/>
          <div className=''>
            <button
              className='text-[18px] mt-5 md:mt-0 font-[700]'
              onClick={() => setShowCompanyLinks(!showCompanyLinks)}
            >
            Explore
            </button>
          </div>
          <hr className='mt-5 md:hidden'/>
          
          {showCompanyLinks && (
            <div className='mt-5'>
            <div className='pt-2 flex items-center'>
              <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
              <a href="/aboutUs/partner" className="hover:underline opacity-60">About</a>
            </div>

            <div className='pt-5 flex items-center'>
              <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
                <a href="/privacy_policy" className="hover:underline opacity-60">Contact</a>
            </div>
            
            <div className='pt-5 flex items-center'>
              <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
                <a href="/aboutUs/career" className="hover:underline opacity-60">What We Do</a>
            </div>

            <div className='pt-5 flex items-center'>
              <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
              <a href="/portfolio" className="hover:underline opacity-60">Plans & Pricing</a>
            </div>
            </div>
          )}
        </div>

          {/* Grid 1 */}
        <div className="block">
        <hr className='mt-5 md:hidden'/>
          <div className=''>
            <button
              className='text-[18px] mt-5 md:mt-0 font-[700]'
              onClick={() => setShowCompanyLinks(!showCompanyLinks)}
            >
            Legal
            </button>
          </div>
          <hr className='mt-5 md:hidden'/>
          
          {showCompanyLinks && (
            <div className='mt-5'>
            <div className='pt-2 flex items-center'>
             <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
              <a href="/aboutUs/partner" className="hover:underline opacity-60">Join us</a>
            </div>

            <div className='pt-5 flex items-center'>
              <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
                <a href="/privacy_policy" className="hover:underline opacity-60">Blog</a>
            </div>
            
            <div className='pt-5 flex items-center'>
            <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
              <a href="/aboutUs/career" className="hover:underline opacity-60">Privacy & Policy</a>
            </div>

            <div className='pt-5 flex items-center'>
              <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
              <a href="/portfolio" className="hover:underline opacity-60">Term & Conditions</a>
            </div>
            </div>
          )}
        </div>

        {/* Grid 2 */}
        <div className="block">
          <div>
            <button
              className='text-[18px] font-[700] mt-5 md:mt-0'
              onClick={() => setShowServicesLinks(!showServicesLinks)}
            >
            Company
            </button>
          </div>
          <hr className='mt-5 md:hidden'/>
          
          {showServicesLinks && (
            <div className='block mt-5'>
            <div className='pt-2 flex items-center'>
              <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
              <a href="/services/web" className="hover:underline opacity-60">About Us</a>
            </div>

            <div className='pt-5 flex items-center'>
            <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
              <a href="/services/process" className="hover:underline opacity-60">Blog</a>
            </div>

            <div className='pt-5 flex items-center'>
            <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
              <a href="/services/itconsult" className="hover:underline opacity-60">Contact</a>
            </div>

            <div className='pt-5 flex items-center'>
            <i className='text-white text-[20px] font-[700]'><IoIosArrowForward /></i>
              <a href="/services/uiux" className="hover:underline opacity-60">Careers</a>
            </div>
            </div>
          )}
        </div>

        {/* Grid 3 */}
        <div className="block">
          <div>
            <button
              className='text-[18px] md:text-[18px] font-[700] text-white mt-5 md:mt-0'
              onClick={() => setShowAddressLinks(!showAddressLinks)}
            >
            Have a Questions?
            </button>
            
          </div>
          <hr className='mt-5 md:hidden'/>
          {showAddressLinks && (
            <div className='text-[13px] md:text-[16px] w-[200px] mt-5 '>

              <div className='flex '>
                <i className='text-white mt-2 text-[20px] font-[700] mr-5'><FaMap /></i>
                  <p className='leading-[35px] opacity-60'>
                  203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
              </div>
              <div className='pt-5 flex items-center'>
              <i className='text-white text-[20px] font-[700] mr-5'><FaPhoneAlt /></i>
                <a href="/services/uiux" className="hover:underline opacity-60">+234 803 058 6765</a>
              </div>

              <div className='pt-5 flex items-center'>
              <i className='text-white text-[20px] font-[700] mr-5'><FaTelegramPlane /></i>
                <a href="/services/uiux" className="hover:underline opacity-60">a.adeniji@abmocounselling.com</a>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
      <div className='bg-black bottom-0 px-5 md:px-0 flex items-center h-[90px]'>
        <div className='container mx-auto  md:flex justify-between'>
          <p className='text-[#FFFFFF80]'>
            Copyright ©2023 Abmo Counselling
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
