import React from 'react'
import airplane from '../assets/airplane.jpg'
import dayOut from '../assets/day_out.jpg'
import nightOut from '../assets/night-out.jpg'
import wedding from '../assets/wedding.jpg'
import event from '../assets/event.jpg'
import {FiMoreHorizontal} from 'react-icons/fi'

function Services() {
  return (
    <div className='mt-10'>
        <h2 className='text-[#F0A04B] font-bold text-4xl drop-shadow-lg m-6 md:text-5xl'>Services</h2>
        <div className='flex flex-col md:flex-row justify-center p-5'>
            <div className='flex flex-col justify-center items-center text-center m-3 shadow-2xl bg-[#FEFBE9] p-3 rounded-xl'>
                <img src={airplane} className='w-full md:w-[200px]  rounded-md' alt="Airplane landing" />
                <div className='flex justify-between items-center mt-3 w-full'>
                    <p className='font-medium text-lg'>Airport transfer</p>
                    <FiMoreHorizontal className='text-3xl self-center border-2 p-1 border-black rounded-md cursor-pointer'/>
                </div>
            </div>
             <div className='flex flex-col justify-center items-center text-center m-3 shadow-2xl bg-[#FEFBE9] p-3 rounded-xl'>
                <img src={dayOut} className='w-full md:w-[200px]   rounded-md' alt="People having fun at day out"  />
                <div className='flex justify-between items-center mt-3 w-full'>
                    <p className='font-medium text-lg'>Day out</p>
                    <FiMoreHorizontal className='text-3xl self-center border-2 p-1 border-black rounded-md cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center m-3 shadow-2xl bg-[#FEFBE9] p-3 rounded-xl'>
                <img src={nightOut} className='w-full md:w-[200px] rounded-md' alt="People having fun at night out" />
                <div className='flex justify-between items-center mt-3 w-full'>
                    <p className='font-medium text-lg'>Night out</p>
                    <FiMoreHorizontal className='text-3xl self-center border-2 p-1 border-black rounded-md cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center m-3 shadow-2xl bg-[#FEFBE9] p-3 rounded-xl'>
                <img src={wedding} className='w-[250px] md:w-[200px]  rounded-md' alt="People attending at a wedding"  />
                <div className='flex justify-between items-center mt-3 w-full'>
                    <p className='font-medium text-lg'>Wedding</p>
                    <FiMoreHorizontal className='text-3xl self-center border-2 p-1 border-black rounded-md cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center m-3 shadow-2xl bg-[#FEFBE9] p-3 rounded-xl'>
                <img src={event} className='w-[250px] md:w-[200px]  rounded-md' alt="People attending at an event" />
                <div className='flex justify-between items-center mt-3 w-full'>
                    <p className='font-medium text-lg'>Event</p>
                    <FiMoreHorizontal className='text-3xl self-center border-2 p-1 border-black rounded-md cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services