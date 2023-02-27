import React from 'react'
import airplane from '../assets/airplane.jpg'
import dayOut from '../assets/day_out.jpg'
import nightOut from '../assets/night-out.jpg'
import wedding from '../assets/wedding.jpg'
import event from '../assets/event.jpg'

function Services() {
  return (
    <div className='mt-10'>
        <h2 className='text-[#F0A04B] font-bold text-4xl drop-shadow-lg m-6 md:text-5xl'>Services</h2>
        <div className='flex flex-wrap justify-center p-5'>
            <div className='flex flex-col justify-center align-center text-center mx-3 drop-shadow-lg '>
                <img src={airplane} className='w-[150px] md:w-[200px]  rounded-md' alt="Airplane landing" />
                <p>Airport transfer</p>
            </div>
             <div className='flex flex-col justify-center align-center text-center mx-3 drop-shadow-lg'>
                <img src={dayOut} className='w-[150px] md:w-[200px]   rounded-md' alt="People having fun at day out"  />
                <p>Day out</p>
            </div>
            <div className='flex flex-col justify-center align-center text-center mx-3 drop-shadow-lg'>
                <img src={nightOut} className='w-[150px] md:w-[200px] rounded-md' alt="People having fun at night out" />
                <p>Night out</p>
            </div>
            <div className='flex flex-col justify-center align-center text-center mx-3 drop-shadow-lg'>
                <img src={wedding} className='w-[150px] md:w-[200px]  rounded-md' alt="People attending at a wedding"  />
                <p>Wedding</p>
            </div>
            <div className='flex flex-col justify-center align-center text-center mx-3 drop-shadow-lg'>
                <img src={event} className='w-[150px] md:w-[200px]  rounded-md' alt="People attending at an event" />
                <p>Event</p>
            </div>
        </div>
    </div>
  )
}

export default Services