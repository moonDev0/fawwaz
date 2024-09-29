import Footer from '@/components/footer/footer'
import LoginComponent from '@/components/login'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>

        <div className=' pt-20'>
            <LoginComponent/>
        </div>
        
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Login