import Header from '@/components/common/header'
import CounselorAlt from '@/components/counselor/counselor'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import Price from '@/components/prices/price'
import React from 'react'

const Counselor = () => {
  return (
    <div className='bg-[#eee]'>
        <div>
            <Navbar/>
            <Header  bgImage="/assets/bg_5.jpg" link="COUNSELOR" title="Qualified Counselor" />
        </div>

        <div>
          <CounselorAlt/>
        </div>
        
        <div>
            <Price/>
        </div>
        
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Counselor