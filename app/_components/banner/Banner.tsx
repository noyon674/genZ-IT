import Image from 'next/image'
import { clients } from '@/app/data'
import Count from '@/app/_components/common/Count'

function Banner() {
  return (
    <>
        <div className='bg-bannerBackground bg-cover bg-no-repeat bg-center w-full h-[40vh] lg:h-[30vh]'>
            <div className="bg-black opacity-90 h-full">
                <div className='container text-white h-full px-5 flex flex-col justify-center md:flex-row md:justify-around gap-y-5 sm:gap-y-0'>
                    {
                        clients.map(item=>(
                            <div className='flex gap-x-3 items-center' key={item.id}>
                        <div>
                            <Image
                            width={60}
                            height={60}
                             src={item.img}
                             alt='clints'
                             blurDataURL={item.blurImage}
                              />
                        </div>
                        <div>
                            <h3 className='text-2xl sm:text-2xl lg:text-3xl font-bold'>
                                <Count number={item.number}/>
                            </h3>
                            <p className='tex-xs font-semibold uppercase'>{item.smapleText}</p>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner