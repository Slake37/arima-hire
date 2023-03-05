import React from 'react'
import { Link } from 'react-router-dom'
import event from '../assets/event.jpg'

function Event() {
  return (
    <div className='pt-[5rem] max-w-[1690px] m-auto'>
         <h2 className='text-[#F0A04B] font-bold text-3xl drop-shadow-lg m-6 md:text-5xl '>Event    </h2>
         <div className='p-2 flex flex-col justify-center items-center  md:flex-row w-full overflow-hidden'>
            <img src={event} alt="People attending to a cooking event" className='w-full md:w-1/3 rounded-lg drop-shadow-2xl' />
            <p className='p-2 text-xl md:text-2xl m-2'>
                Make your next event a success with Arima Hire's premier event transport service. Whether you're hosting a corporate function, wedding, or other special occasion, our private hire taxis offer a comfortable and reliable transportation solution for you and your guests.

With our fleet of well-maintained vehicles and professional drivers, we'll get you to your destination on time and in style. From pre-planning to execution, our dedicated team will work with you every step of the way to ensure a seamless and stress-free transportation experience.

Trust Arima Hire to provide safe and comfortable event transport service that will leave a lasting impression on your guests. Contact us today to learn more about our services and to book your next event transport.
                <Link to='/services'>
                    <p className='font-bold border-2 border-black mx-5 my-5 py-2 px-5 rounded-lg text-center md:w-fit cursor-pointer bg-[#183A1D] text-[#FEFBE9]'>More services</p>
                </Link>
            </p>
         </div>
    </div>
  )
}

export default Event