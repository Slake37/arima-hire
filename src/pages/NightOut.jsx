import React from 'react'
import { Link } from 'react-router-dom'
import nightOut from '../assets/night-out.jpg'

function NightOut() {
  return (
    <div className='pt-[5rem] max-w-[1690px] m-auto'>
         <h2 className='text-[#F0A04B] font-bold text-3xl drop-shadow-lg m-6 md:text-5xl '>Night out</h2>
         <div className='p-2 flex flex-col justify-center items-center  md:flex-row w-full overflow-hidden'>
            <img src={nightOut} alt="Concert" className='w-full md:w-1/3 rounded-lg drop-shadow-2xl' />
            <p className='p-2 text-xl md:text-2xl m-2'>
                Looking for a reliable and convenient way to travel for your night out? Look no further than Arima Hire's night out transport service! Our private hire taxi is the perfect choice for a safe and comfortable ride to your destination. Whether you're heading to a club, bar, restaurant, or any other night-time hotspot, our experienced and professional driver will get you there in style. With our competitive rates and easy booking process, Arima Hire is the go-to choice for all your night out transport needs. Book with us today and enjoy a hassle-free and enjoyable night out experience!
                <Link to='/services'>
                    <p className='font-bold border-2 border-black mx-5 my-5 py-2 px-5 rounded-lg text-center md:w-fit cursor-pointer bg-[#183A1D] text-[#FEFBE9]'>More services</p>
                </Link>
            </p>
         </div>
    </div>
  )
}

export default NightOut