import Header from '@/components/common/header'
import Footer from '@/components/footer/footer'
import Howitworks from '@/components/main/howitworks'
import HowitworksALT from '@/components/main/howitworksAlt'
import Navbar from '@/components/navbar/navbar'
import ServiceAlt from '@/components/services/serivice'
import React from 'react'

const Services = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <Header bgImage="/assets/bg_5.jpg" link="SERVICES" title="Services"/>
        </div>

        <div>
            <HowitworksALT/>
            <ServiceAlt/>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Services