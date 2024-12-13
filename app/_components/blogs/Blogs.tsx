import React from 'react'
import {blogs} from '@/app/data'
import Image from 'next/image'
import img from '@/public/image/food.jpg'
import Link from 'next/link'

function Blogs() {
    const sliceDesc = (str: string)=>{
        if(str.length > 150){
            return str.slice(0, 150)+"..."
        }else return str
    }
  return (
    <div id='blogs' className='px-10 lg:pt-20'>
        <div className='container py-20'>
            <div className='text-center'>
                <p className='font-bold text-xs sm:text-sm uppercase text-orange-800'>our blogs</p>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800'>Recent From Blogs</h2>
            </div>
            <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-14 lg:grid-cols-4 gap-y-10 lg:mt-20 mt-10'>
                {
                    blogs.map(item=>(
                        <div key={item.id} className='shadow-md shadow-gray-200 rounded-md pb-2' data-aos={item.id % 2 == 0 ? "zoom-in" : "flip-left"} >
                            <div className='relative h-[40vh]'>
                                <Image src={item.image} fill alt='photo' className='rounded-md rounded-b-none'/>
                            </div>
                            <div className='p-5'>
                                <h2 className='text-xl lg:text-2xl hover:text-blue-600'><Link href={item.link} target='_blank'>{item.title}</Link></h2>
                                <p className='flex divide-x-4 divide-orange-400'>
                                    <span className='text-gray-400'>{item.author}</span>
                                    <span className='ml-5 pl-5 text-gray-400'>{item.time}</span>
                                </p>
                                <p className='text-lg lg:text-xl text-gray-800 mt-5'>{sliceDesc(item.desc)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs