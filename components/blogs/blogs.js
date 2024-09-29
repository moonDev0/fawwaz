import Image from 'next/image'
import React from 'react'
import blogImage from '../../public/assets/image_1.jpg'
import blog2 from '../../public/assets/image_2.jpg'
import blog3 from '../../public/assets/image_3.jpg'
import Link from 'next/link';
import { Blogposts } from './bogposts'

const Blogs = () => {
  return (
    <div>
        <div data-aos="fade-up" className='container px-5 md:px-0 mx-auto'>

            <div className='blogs grid gap-6 md:grid-cols-3 pb-10'>
                {
                  Blogposts.map((post, id)=>(
                  <div key={id}>
                    <Link href={`/blog/${post.id}`}>
                    <div>
                      <img src={post.image} alt='' className=''/>
                    </div>

                    <div className='flex justify-center mt-[-55px]'>
                      <div className='w-[100px] h-[100px] text-center rounded-full bg-[#eee]'>
                        <h1 className='text-[30px] pt-1 text-secondary font-bold'>18</h1>
                        <h1 className='text-[16px] font-bold'>APRIL</h1>
                        <h5 className='text-[11px] text-primary'>2020</h5>
                      </div>
                    </div>
                    
                    <div className=''>
                      <h1 className='text-[16px] text-center font-[500] mt-2'>{post.title}</h1>
                      <p className='text-[16px] px-2 text-justify font-[450] text-[grey]'>{post.content.slice(1,100)}</p>
                    </div>
                        
                    </Link>
                    </div>
                  ))
                }
                

            </div>
        </div>
    </div>
  )
}

export default Blogs