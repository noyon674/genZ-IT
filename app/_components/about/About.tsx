import Image from 'next/image'
import computer from '@/public/image/about.jpg'

function About() {
  return (
    <div id='about' className='py-10'>
        <div className='container'>
            <h2 className='text-2xl sm:text-4xl md:text-5xl text-gray-700 text-center py-10 font-bold' data-aos="fade-up" data-aos-duration="2000">About ME</h2>
            <div className='lg:flex justify-around lg:gap-x-10'>
              <div className='basis-1/2 mb-5' data-aos="fade-up">
                <Image className='w-[40]' src={computer} alt='computer'/>
              </div>
              <div className='basis-1/2 px-5 sm:px-0' data-aos="fade-up" data-aos-duration="2000">
              <h2 className="text-2xl font-bold text-gray-800 mb-5 sm:text-3xl">My Story</h2>
              <p className='text-lg sm:text-xl sm:text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit vel, voluptates perferendis quod modi nihil nemo, dolore distinctio velit accusamus itaque dolorum nobis. Quisquam ab similique rem earum odio quis eius illo sed magni ad nostrum nulla nobis aspernatur cumque aut, maiores accusamus praesentium sequi ratione quos pariatur.</p>
              <h2 className='text-2xl font-bold text-gray-800 my-5 sm:text-[#FF9064]'>I Do Web Design & Development since I was in the First Semester of University.</h2>
              <p className='text-lg sm:text-xl sm:text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laboriosam nulla vitae sunt esse minus optio autem unde voluptatum enim!</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About