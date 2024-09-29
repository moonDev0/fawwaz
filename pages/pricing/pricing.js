import Contact from '@/components/common/contact'
import Header from '@/components/common/header'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import Price from '@/components/prices/price'
import React from 'react'

const Pricing = () => {
  return (
    <div className='bg-[#eee]'>
        <div>
            <Navbar/>
            <Header bgImage="/assets/bg_5.jpg" link="Pricing" title="Pricing & Plans"/>
        </div>

        <div>
            <Price/>
            <Contact/>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Pricing