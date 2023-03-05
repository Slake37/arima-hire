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
                Make your special day even more memorable with Arima Hire's wedding guests transport service. 
                We offer a reliable transportation option for your guests, ensuring they arrive at your wedding 
                venue in comfort and style. From intimate gatherings to grand celebrations, our private hire taxi 
                can accommodate up to 7 passengers, providing a seamless and stress-free experience for you and your guests. 
                Let us take care of the transportation details so you can focus on enjoying your special day. Contact us today 
                to learn more about our wedding guests transport service.
                <Link to='/services'>
                    <p className='font-bold border-2 border-black mx-5 my-5 py-2 px-5 rounded-lg text-center md:w-fit cursor-pointer bg-[#183A1D] text-[#FEFBE9]'>More services</p>
                </Link>
            </p>
         </div>
    </div>
  )
}

export default Wedding