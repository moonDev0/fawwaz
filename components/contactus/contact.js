import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      
      });
      
    
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      const [captcha, setCaptcha] = useState(null);
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', subject: '', message: '' };
    
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
          isValid = false;
        }
    
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
          isValid = false;
        }
    
        if (!formData.message.trim()) {
          newErrors.message = 'Message is required';
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          try {
            const response = await fetch('/api/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
    
            const result = await response.json();
    
            if (result.success) {
              setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
              });
              // alert('Your message has been sent!');
              toast.success("Message sent successfully");
            } else {
              // alert('There was an error sending your message. Please try again later.');
              toast.error('Error sending your message');
            }
          } catch (error) {
            console.error('Error submitting form:', error);
            // alert('There was an error submitting the form. Please try again later.');
            toast.error('Error sending your message');
          }
        }
      };
  return (
    <div className='bg-[#eee]'>
        <div className="container mx-auto grid md:grid-cols-4  gap-6 mt-[-40px] py-10 justify-items-center">
            <div className=' flex flex-col items-center px-10 md:px-0 text-center'>
                <div className='rounded-full w-[100px] h-[100px] bg-secondary flex items-center justify-center text-white text-[30px]'><i><FaMapMarkerAlt /></i></div>
                <div className='mt-5'>
                    <p className='font-[500]'>ADDRESS: <span className='text-[grey]'> 4, Oladipo Sessi Close, Magodo, GRA</span></p>
                </div>
            </div>

            <div className=' flex flex-col items-center text-center'>
            <div className='rounded-full w-[100px] h-[100px] bg-secondary flex items-center justify-center text-white text-[28px]'><i><FaPhoneAlt /></i></div>
            <div className='mt-5'>
                    <p className='font-[500]'>Phone: <span className='text-[grey]'>+234 803 058 6765</span></p>
                </div>
            </div>

            <div className=' flex flex-col items-center text-center'>
             <div className='rounded-full w-[100px] h-[100px] bg-secondary flex items-center justify-center text-white text-[30px]'><i><FaTelegramPlane /></i></div>
                <div className='mt-5'>
                    <p className='font-[500]'>Email: <span className='text-[grey]'>a.adeniji@abmocounselling.com</span></p>
                </div>
            </div>

            <div className=' flex flex-col items-center text-center'>
                <div className='rounded-full w-[100px] h-[100px] bg-secondary flex items-center justify-center text-white text-[30px]'><i><IoEarthSharp /></i></div>
                <div className='mt-5'>
                    <p className='font-[500]'>Website: <span className='text-secondary'>www.abmocounselling.com</span></p>
                </div>
            </div>

            
            
        </div>

        <form onSubmit={handleSubmit} className="container mx-auto mt-10 shadow-lg mb-10 grid md:grid-cols-5">
            <div className=' col-span-2'></div>
            <div className='bg-white p-10 col-span-3'>
                    <h1 className='text-[30px] text-primary'>Contact Us</h1>
                <div className='mt-10'>
                  
                    <div className='md:flex justify-between gap-8'>
                        <div className='w-[100%] mb-3 md:mb-0'>
                            <label htmlFor="name" className='text-[12px] font-[500] text-secondary'>Full Name</label> <br />
                            <input onChange={handleChange} value={formData.name} type="text" placeholder='Name' name="name" id="" className={` w-full border-b text-[12px] border-gray-500 outline-none ${errors.name && 'border-red-500'}`} />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div className='w-[100%]'>
                            <label htmlFor="email" className='text-[12px] font-[500] text-secondary'>Email</label> <br />
                            <input onChange={handleChange} value={formData.email} type="text" placeholder='Email' name="email" id="" className={` w-full text-[12px] border-b border-gray-500 outline-none ${errors.email && 'border-red-500'}`} />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div className='my-10 w-full'>
                        <label htmlFor="subject" className='text-[12px] font-[500] text-secondary'>SUBJECT</label>
                        <input onChange={handleChange} value={formData.subject} type="text" placeholder='Subject' name="subject" id="" className='text-[12px] border-b border-gray-500 w-full outline-none' />
                        
                    </div>

                    <div className='mt-10 w-full'>
                        <label htmlFor="message" className='text-[12px] font-[500] text-secondary'>MESSAGE</label>
                        <textarea onChange={handleChange} value={formData.message} name="message" placeholder='Message' className={`${errors.message && 'border-red-500'} p-1 text-[12px] w-full outline-none border-b border-grey-500`} id="" cols="2" rows="3"></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                </div>
                <button className='bg-secondary text-[12px] text-white p-2 rounded-sm' disabled={!captcha}>Submit Message</button>

            </div>
        
        </form>
    </div>
  )
}

export default Contactus