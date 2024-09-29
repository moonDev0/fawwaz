import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
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
    <div  className='h-[80vh] relative bg-contact bg-cover bg-center bg-no-repeat'>
        <div className='w-full h-full bg-secondary opacity-50'>
           
        </div>

        <div className='absolute px-5 md:px-0 flex items-center right-0 left-0 bottom-0 top-0 container mx-auto'>
            <div data-aos="fade-up" className='w-full container grid md:grid-cols-2 mx-auto'>
                <form onSubmit={handleSubmit} className='container mx-auto'>
                    <h1 className='text-white font-[700] md:font-[500] text-[24px] text-center md:text-left md:text-[32px] mb-5'>Send a Message & Get in touch!</h1>
                    <div className='flex gap-6 justify-between'>
                        <div className='w-full bg-white rounded-sm'>
                            <input onChange={handleChange} value={formData.name} required type="text" className='p-2  text-[12px] w-full bg-white text-black rounded-sm outline-none font-bold' placeholder='Your Name' name="name" id="" />
                        </div>
                        <div className='w-full bg-white rounded-sm'>
                            <input onChange={handleChange} value={formData.email} required type="text" className={` p-2 text-[12px] w-full bg-white outline-none rounded-sm ${errors.email && 'border-red-500'} font-bold`}  placeholder='Email' name="email" id="" />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div className='bg-white mt-5 rounded-sm'>
                        <select onChange={handleChange} value={formData.value} name="subject" id="" className='w-full text-[12px] font-bold bg-white px-2 py-4 outline-none rounded-sm'>
                             <option value="No service selected"> Choose a service</option>  
                            <option value="Relation Problem">Relation Problem</option>
                            <option value="Couples Counseling">Couples Counseling</option>
                            <option value="Depression treatment">Depression Treatment</option>
                            <option value="Family Problem">Family Problem</option>
                            <option value="Personal Problem">Personal Problem</option>
                            <option value="Business Problem">Business Problem</option>
                        </select>
                    </div>

                    <div className='w-full bg-white mt-5 rounded-sm'>
                        <textarea required onChange={handleChange} value={formData.message} name="message" className='w-full p-5 outline-none rounded-sm font-bold text-[12px]' id="" placeholder='Message' cols="2" rows="3"></textarea>       
                    </div>
                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={setCaptcha} className="my-2"/>
                    <button className='w-full bg-secondary text-white py-3 rounded-sm font-bold' disabled={!captcha}>Send Message</button>
                    
                </form>
            </div>

                </div>
                    </div>
  )
}

export default Contact