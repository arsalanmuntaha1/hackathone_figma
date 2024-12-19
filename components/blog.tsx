import { greatVibes } from '@/app/layout'
import React from 'react'
import BlogCard from './blogCard'

function Blog() {
  return (
    <div className='my-[120px]'>
        <div className="place-items-center">
                <h1 className={`${greatVibes.className} text-primary3 text-[32px]`}>Blog Post</h1>
                <h2 className="text-primary3 font-bold text-5xl mb-14 mt-2">
                La<span className="text-textColor">test News & Blog</span>
                </h2>
            </div>
            <div className='flex gap-6 justify-center'>
                <BlogCard image='/assets/burger.svg' date='10 February 2022' details='Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'/>
                <BlogCard image='/assets/pizza.svg' date='10 February 2022' details='Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A'/>
                <BlogCard image='/assets/wraps.svg' date='10 February 2022' details='Curabitur rutrum velit ac congue malesuada'/>
            </div>
    </div>
  )
}

export default Blog
