import Image from 'next/image'
import clients from '@/public/image/client.png'
import project from '@/public/image/files.png'
import coffee from '@/public/image/coffee2.png'
import Count from '../common/Count'

function Banner() {
  return (
    <>
        <div className='bg-bannerBackground bg-cover bg-no-repeat bg-center w-full h-[47vh] lg:h-[35vh]'>
            <div className='top-0 left-0 w-full h-full bg-gray-900 opacity-95 flex flex-col sm:flex-row justify-center text-start text-white sm:divide-x sm:divide-x-4 pl-10 sm:pl-0 gap-y-5 sm:gap-y-0 sm:px-2'>
                <div className='flex lg:justify-center items-center w-full gap-x-3' data-aos="fade-up">
                    <div>
                        <Image 
                        className='w-20 lg:w-32'
                         src={clients}
                         alt='clints'
                         blurDataURL='data:image/jpeg;base64,/yourBase64ImageString'
                          />
                    </div>
                    <div>
                        <h3 className='text-3xl sm:text-2xl lg:text-3xl font-bold'>
                            <Count number={100}/>
                        </h3>
                        <p className='tex-sm font-bold uppercase'>Happy Customers</p>
                    </div>
                </div>
                <div className='flex lg:justify-center items-center w-full gap-x-3' data-aos="fade-up">
                    <div>
                        <Image 
                        className='w-20 lg:w-32' 
                        src={project} 
                        blurDataURL='data:image/jpeg;base64,/yourBase64ImageString'
                        alt='clints'/>
                    </div>
                    <div>
                        <h3 className='text-3xl sm:text-2xl lg:text-3xl font-bold'>
                            <Count number={80}/>
                        </h3>
                        <p className='tex-sm font-bold uppercase'>Project completed</p>
                    </div>
                </div>
                <div className='flex lg:justify-center items-center w-full gap-x-3' data-aos="fade-up">
                    <div>
                        <Image 
                        className=' w-20 lg:w-32' 
                        src={coffee}
                        blurDataURL='data:image/jpeg;base64,/yourBase64ImageString' 
                        alt='clints'/>
                    </div>
                    <div>
                        <h3 className='text-3xl sm:text-2xl lg:text-3xl font-bold'>
                            <Count number={150}/>
                        </h3>
                        <p className='tex-sm font-bold uppercase'>Cups of coffee</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner