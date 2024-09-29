import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/hero/hero'
import Footer from '@/components/footer/footer'
import Price from '@/components/prices/price'
import Portfolio from '@/components/main/portfolio'
import Services from '@/components/main/services'
// import Testimonials from '@/components/main/testimonials'
import Contact from '@/components/common/contact'
import Blog from '@/components/main/blog'
import Howitworks from '@/components/main/howitworks'

export default function Home() {
  return (
   <div>
      <div>
        <Navbar/>
      </div>
      <section>
        <Hero/>
      </section>
  
      <section>
        <Howitworks/>
        <Portfolio/>
        <Services/>
        
      </section>

      <section>
        <Contact/>
      </section>


      <section>
        <Footer/>
      </section>
   </div>
  )
}
