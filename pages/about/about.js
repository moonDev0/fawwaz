import Contact from '@/components/common/contact'
import Experience from '@/components/common/experience'
import Header from '@/components/common/header'
import Footer from '@/components/footer/footer'
// import Testimonials from '@/components/main/testimonials'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const Aboutpage = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <Header bgImage="/assets/bg_5.jpg" title="About Us" link="About"/>
        </div>
        
        <div>
            <Experience/>
        </div>

        <div>
            <Contact/>
        </div>
        
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Aboutpage