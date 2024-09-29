import Blogs from '@/components/blogs/blogs'
import More from '@/components/blogs/more'
import Header from '@/components/common/header'
import Footer from '@/components/footer/footer'
import Blog from '@/components/main/blog'
import Howitworks from '@/components/main/howitworks'
import Navbar from '@/components/navbar/navbar'

const Bloger = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <Header bgImage="/assets/bg_5.jpg" link="BLOG" title="Our Blog"/>
        </div>

        <div>
            <Blogs/>
           
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Bloger