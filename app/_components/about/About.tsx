import Image from 'next/image'
import myphoto from '@/public/image/myself.png'

function About() {
  return (
    <div id='about'>
        <div className='container'>
            <h2 className='text-2xl sm:text-4xl md:text-5xl text-[#f56b35] text-center py-10 font-bold'>About ME</h2>
            <div className='sm:flex justify-around'>
              <div>
              </div>
              <div>text</div>
            </div>
        </div>
    </div>
  )
}

export default About