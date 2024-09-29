import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Blogposts } from '@/components/blogs/bogposts';
import Head from 'next/head';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Header from '@/components/common/header';
import Contact from '@/components/common/contact';

const Blogss = () => {
 
  const router = useRouter();
  const { id } = router.query;
  const post = Blogposts.find((post) => post.id === parseInt(id));
 
  if (!post) {
    return <div>Post not found.</div>;
  }


  return (
    <div className=''>
    <Head>
    <title>{post.title}</title>
    </Head>
    <div>
        <Navbar/>
    </div>
    <div className=' md:pt-32'>
        <Header bgImage={post.image} link="Blog" titleAlt={post.title}/>
    </div>

    <div>
    <div data-aos="fade-up" className="container mb-10 bg-[#eee] mt-10 w-full mx-auto ">
            
            
            <div className='p-8 lg:p-10 bg-[#eee]'>
                <div>
                    <h3 className='text-[12px] text-secondary font-[500] pb-5'>Blog</h3>
                    <h1 className='text-[26px] lg:text-[30px] font-[500] text-primary pb-5'>{post.title}</h1>
                </div>
                <div>
                    <p className='text-[15px] lg:text-[17px] text-primary pb-2 lg:pb-5'>{post.content}</p>
                </div>
                
                

            </div>
        </div>
    </div>

    <div>
        <Contact/>
        <Footer/>
    </div>


      
    </div>
  );
};

export default Blogss;