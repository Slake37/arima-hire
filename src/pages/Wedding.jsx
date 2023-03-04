import React from 'react'
import { Link } from 'react-router-dom'
import wedding from '../assets/wedding.jpg'

function Wedding() {
  return (
    <div className='pt-[5rem] max-w-[1690px] m-auto'>
         <h2 className='text-[#F0A04B] font-bold text-3xl drop-shadow-lg m-6 md:text-5xl '>Wedding</h2>
         <div className='p-2 flex flex-col justify-center items-center  md:flex-row w-full overflow-hidden'>
            <img src={wedding} alt="Wedding party" className='w-full md:w-1/3 rounded-lg drop-shadow-2xl' />
            <p className='p-2 text-xl md:text-2xl m-2'>
                Make your special day even more memorable with Arima Hire's premium wedding transport service. Our luxurious private hire taxis will ensure that you and your wedding party arrive in style and comfort. From the bride and groom's grand entrance to the reception party's transportation, we have got you covered.

Our wedding transport service includes a range of vehicles to choose from, all impeccably maintained and driven by our professional chauffeurs. We understand the importance of timing on your wedding day and will ensure that you arrive at your destination on time, every time.

With our wedding transport service, you can sit back and relax while we take care of the transportation logistics. Let us make your wedding day a stress-free and unforgettable experience. Contact us today to book your wedding transport service with Arima Hire.
                <Link to='/services'>
                    <p className='font-bold border-2 border-black mx-5 my-5 py-2 px-5 rounded-lg text-center md:w-fit cursor-pointer bg-[#183A1D] text-[#FEFBE9]'>More services</p>
                </Link>
            </p>
         </div>
    </div>
  )
}

export default Wedding