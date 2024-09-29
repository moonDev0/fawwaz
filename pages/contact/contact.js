import Header from '@/components/common/header'
import Contactus from '@/components/contactus/contact'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#eee]'>
        <div>
            <Navbar/>
            <Header bgImage="/assets/bg_5.jpg" link="BLOG" title="Contact Us"/>
        </div>

        <div>
            <Contactus/>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Contact