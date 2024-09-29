import Image from 'next/image'
import React, { useState } from 'react'
import vector from '../../public/assets/services-6.jpg'
import { services } from './serviceList'

const Services = () => {
    const [selectedService, setSelectedService] = useState(services[0]); 
  
    const handleServiceClick = (service) => {
      setSelectedService(service);
    };
  
    return (
      <div>
        <div data-aos="fade-up" className='container px-5 md:px-0 mx-auto my-20'>
          <div>
            <h3 className='text-center text-[12px] text-secondary font-[500]'>OUR SERVICES</h3>
            <h1 className='text-center font-[700] mb-5 lg:mb-10 text-primary text-[30px] lg:text-[40px]'>
              We Can Help You With This Situation
            </h1>
          </div>
  
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className=''>
              {services.map((service, id) => (
                <div
                  key={id}
                  onClick={() => handleServiceClick(service)}
                  className={`border rounded-md cursor-pointer border-gray mb-2 ${
                    selectedService.id === service.id ? 'bg-secondary' : ''
                  } ${
                    selectedService.id === service.id ? 'text-white' : 'text-black'
                  }`}
                >
                
                  <h1 className='pl-5 py-7 text-[17px] lg:text-[20px] font-[700]'>{service.title}</h1>
                
                </div>
              ))}
            </div>
            <div className='md:col-span-2'>
              <div className='w-full hidden md:flex'>
                <img src={selectedService.img} alt='dddd' className='h-[400px] w-full' />
              </div>
              <h1 className='my-5 text-black font-[700] text-[20px] lg:text-[28px]'>{selectedService.title}</h1>
              <p className='text-primary'>{selectedService.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;