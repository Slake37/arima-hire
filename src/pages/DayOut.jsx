import React from 'react'
import { Link } from 'react-router-dom'
import dayOut from '../assets/day_out.jpg'

function DayOut() {
  return (
    <div className='pt-[5rem] max-w-[1690px] m-auto'>
         <h2 className='text-[#F0A04B] font-bold text-3xl drop-shadow-lg m-6 md:text-5xl '>Day out</h2>
         <div className='p-2 flex flex-col justify-center items-center  md:flex-row w-full overflow-hidden'>
            <img src={dayOut} alt="Airplane landing" className='w-full md:w-1/3 rounded-lg drop-shadow-2xl' />
            <p className='p-2 text-xl md:text-2xl m-2'>
                Looking to explore the best attractions in town with your friends or family? Look no further than Arima Hire's day out transport service! Our reliable and comfortable private hire taxis are perfect for your day trip needs, whether you're planning a visit to a nearby attraction, a scenic drive in the countryside, or a fun day out at a theme park.

With our affordable rates and flexible scheduling options, you can enjoy a stress-free and convenient ride to your destination, without worrying about parking or navigating through traffic. Our friendly and experienced drivers are dedicated to providing you with a safe and enjoyable journey, and are always ready to answer any questions you may have about the area.

So why wait? Book your day out transport service with Arima Hire today and make your trip one to remember!
                <Link to='/services'>
                    <p className='font-bold border-2 border-black mx-5 my-5 py-2 px-5 rounded-lg text-center md:w-fit cursor-pointer bg-[#183A1D] text-[#FEFBE9]'>More services</p>
                </Link>
            </p>
         </div>
    </div>
  )
}

export default DayOut