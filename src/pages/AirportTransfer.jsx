import React from 'react'
import { Link } from 'react-router-dom'
import airplane from '../assets/airplane.jpg'

function AirportTransfer() {
  return (
    <div className='pt-[5rem] max-w-[1690px] m-auto'>
         <h2 className='text-[#F0A04B] font-bold text-3xl drop-shadow-lg m-6 md:text-5xl '>Airport transfers</h2>
         <div className='p-2 flex flex-col justify-center items-center  md:flex-row w-full overflow-hidden'>
            <img src={airplane} alt="Airplane landing" className='w-full md:w-1/3 rounded-lg drop-shadow-2xl' />
            <p className='p-2 text-xl md:text-2xl m-2'>
                Arima Hire offers reliable and professional airport transfer services for individuals, families, and groups. Our private hire taxis are equipped with comfortable seating and ample space for luggage, ensuring a comfortable journey to and from the airport. Our experienced drivers are knowledgeable about the best routes and traffic patterns, allowing you to arrive at your destination on time and in style. With competitive pricing and flexible scheduling options, Arima Hire is your go-to choice for airport transfers.
                <Link to='/services'>
                    <p className='font-bold border-2 border-black mx-5 my-5 py-2 px-5 rounded-lg text-center md:w-fit cursor-pointer bg-[#183A1D] text-[#FEFBE9]'>More services</p>
                </Link>
            </p>
         </div>
    </div>
  )
}

export default AirportTransfer