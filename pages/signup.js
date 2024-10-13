
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import Navbar2 from '@/components/navbar/navbar 2'
import RegistrationComponent from '@/components/regForm'
// import SignupHeader from '@/components/sigup/signupHeader'
import React, { useState } from 'react'

const Signup = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (data) => {
    console.log('Form submitted with data:', data);
    // add logic to submit data 
  };


  return (
    <div>
        <div>
            <Navbar2/>
        </div>

        <div>        
        <RegistrationComponent/>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Signup