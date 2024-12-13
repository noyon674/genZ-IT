import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div className='bg-black text-white pt-32'>
      <div className='container flex flex-col px-5 gap-y-5 md:flex-row md:items-center md:justify-around'>
        <div className='md:basis-72' data-aos="zoom-in">
            <div>
              <Link href="">
                  <h1 className="text-2xl sm:text-4xl font-bold text-orange-700 mb-3">
                    gen<span className="text-white">Z</span>.IT
                  </h1>
                </Link>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />In voluptatem perspiciatis possimus similique! Ex temporibus ullam laborum obcaecati saepe provident?</p>
            </div>
          <div className='flex gap-x-3 mt-10'>
              <a href="" target='_blank' className='w-10 h-10 lg:w-14 lg:h-14 lg:text-xl bg-[#ff855326] transition-all transform hover:rotate-180 text-[#FF8553] flex justify-center items-center rounded-md'><FaFacebookF /></a>
              <a href="" target='_blank' className='w-10 h-10 lg:w-14 lg:h-14 lg:text-xl bg-[#ff855326] transition-all transform hover:rotate-180 text-[#FF8553] flex justify-center items-center rounded-md'><FaInstagram /></a>
              <a href="" target='_blank' className='w-10 h-10 lg:w-14 lg:h-14 lg:text-xl bg-[#ff855326] transition-all transform hover:rotate-180 text-[#FF8553] flex justify-center items-center rounded-md'><FaLinkedinIn /></a>
              <a href="" target='_blank' className='w-10 h-10 lg:w-14 lg:h-14 lg:text-xl bg-[#ff855326] transition-all transform hover:rotate-180 text-[#FF8553] flex justify-center items-center rounded-md'><FaGithub /></a>
              <a href="" target='_blank' className='w-10 h-10 lg:w-14 lg:h-14 lg:text-xl bg-[#ff855326] transition-all transform hover:rotate-180 text-[#FF8553] flex justify-center items-center rounded-md'><BsMedium /></a>
              <a href="" target='_blank' className='w-10 h-10 lg:w-14 lg:h-14 lg:text-xl bg-[#ff855326] transition-all transform hover:rotate-180 text-[#FF8553] flex justify-center items-center rounded-md'><SiLeetcode /></a>
              
          </div>
        </div>
        <div className='flex justify-between md:flex-col md:gap-y-3' data-aos="zoom-in">
          <button className='lg:px-10 px-5 py-2 border-2 rounded-full text-white transition-all hover:text-orange-500 lg:text-xl'>Download CV</button>
          <button className='lg:px-10 px-5 py-2 bg-orange-600 rounded-full transition-all text-white hover:bg-orange-700 lg:text-xl'>Let&apos;s Talk</button>
        </div>
      </div>
      <div className='mt-10'>
        <hr />
        <p className='text-center py-10'>
        Copyright ©2024 All rights reserved | This template is made with <span className='text-orange-500'>Noyon</span>
        </p>
      </div>
    </div>
  )
}

export default Footer