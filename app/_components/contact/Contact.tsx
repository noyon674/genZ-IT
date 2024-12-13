import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import map from '@/public/image/map.jpg'
import Image from 'next/image';

function Contact() {
  return (
    <div className='bg-gray-100 pt-10' id='contact'>
        <div className='container py-20'>
            <h2 className='text-5xl text-center text-[#17B6E7] font-semibold' data-aos="fade-up">Contact Me</h2>
            <div className='flex flex-col mt-10 md:flex-row md:justify-between lg:justify-around text-center gap-y-5 md:gap-y-0'>
                <div data-aos="fade-up">
                    <FaLocationDot className='text-2xl lg:text-3xl w-full mb-2 text-center text-[#17B6E7]' />
                    <address className='text-gray-600 lg:text-xl'>House-19, Road-10, Block-H <br />Mirpur-2, Dhaka, BD</address>
                </div>
                <div data-aos="fade-up">
                    <FaPhone className='text-2xl lg:text-3xl w-full mb-2 text-center text-[#17B6E7]' />
                    <p className='text-[#17b6E7] lg:text-xl'>+880 1889010237</p>
                </div>
                <div data-aos="fade-up">
                    <MdEmail className='text-2xl lg:text-3xl w-full mb-2 text-center text-[#17B6E7]' />
                    <p className='text-[#17b6E7] lg:text-xl'>developernoyon9@gmail.com</p>
                </div>
            </div>
            <div className='lg:flex items-center gap-x-5 mt-10'>
                <div className='basis-2/5 hidden lg:block' data-aos="fade-right">
                <Image src={map} alt='map' className='rounded-md'/>
                </div>
                <div className='bg-white p-10 rounded-lg basis-3/5' data-aos="fade-left">
                    <form action="">
                        <div className='flex flex-col justify-between items-center gap-y-3 lg:flex-row lg:gap-x-5'>
                            <div className='w-full'>
                                <label className='w-full text-gray-500 lg:text-xl' htmlFor="fname">First Name<span className='text-[#17B6e7] font-bold'>*</span></label><br />
                                <input className='w-full rounded-md outline-none lg:h-14' type="text" id='fname'/>
                            </div>
                            <div className='w-full'>
                                <label className='w-full text-gray-500 lg:text-xl' htmlFor="lname">Last Name<span className='text-[#17B6e7] font-bold'>*</span></label><br />
                                <input className='w-full rounded-md outline-none lg:h-14' type="text" id='lname'/>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center gap-y-3 mt-3 lg:mt-5 lg:flex-row lg:gap-x-5'>
                            <div className='w-full'>
                                <label className='w-full text-gray-500 lg:text-xl' htmlFor="email">Email<span className='text-[#17B6e7] font-bold'>*</span></label><br />
                                <input className='w-full rounded-md outline-none lg:h-14' type="email" id='email'/>
                            </div>
                            <div className='w-full'>
                                <label className='w-full text-gray-500 lg:text-xl' htmlFor="subject">Subject<span className='text-[#17B6e7] font-bold'>*</span></label><br />
                                <input className='w-full rounded-md outline-none lg:h-14' type="text" id='subject'/>
                            </div>
                        </div>
                        <div className='mt-3'>
                        <label className='w-full text-gray-500 lg:text-xl' htmlFor="message">Message<span className='text-[#17B6e7] font-bold'>*</span></label><br />
                        <textarea name="" id="message" rows={5} className='w-full rounded-md lg:h-40'></textarea>
                        </div>
                        <div className='mt-3 md:mt-5 lg:mt-10 lg:text-center'>
                            <button className='w-full lg:w-1/2 bg-gray-800 py-3 lg:py5 lg:text-xl rounded-md text-white hover:text-gray-300' type='submit'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact