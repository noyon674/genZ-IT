import React from 'react'
import TypeWriter from '../common/TypeWriter'
import Button from '../common/Button'
import { IoIosArrowForward } from "react-icons/io";
function Home() {
  return (
    <div className='bg-[#FF9064] h-[91vh]' id='home'>
        <div className='container flex flex-col sm:flex-row gap-10 justify-between items-center'>
            <div className='text-center sm:text-start' data-aos="fade-right">
                <p className='bg-white inline-block px-4 py-2 text-[#FF9064] font-bold rounded'>Hi There!</p>
                <h1 className='text-2xl sm:text-3xl lg:text-6xl font-bold text-white my-5'>I am Noyon Sarker <br />Software &nbsp;
                <span className='text-black'>
                  <TypeWriter items={['Designer', 'Developer', 'Engineer', 'Content Writer']}/>
                </span>
                </h1>
                    <Button style='w-30 m-auto sm:m-0 sm:text-xl px-5 py-3 rounded bg-black text-white hover:text-[#FF9064] hover:bg-white transition duration-300 ease-in-out flex gap-3 items-center'>HIRE ME <span className='animate-pulse'><IoIosArrowForward /></span></Button>
            </div>
            <div data-aos="fade-left" className='bg-heroBackground bg-cover bg-center w-full h-[64vh] md:w-1/3 sm:h-[91vh]'>
            </div>
        </div>
    </div>
  )
}

export default Home