import React from 'react'
import airplane from '../assets/airplane.jpg'
import dayOut from '../assets/day_out.jpg'
import nightOut from '../assets/night-out.jpg'
import wedding from '../assets/wedding.jpg'
import event from '../assets/event.jpg'
import {FiMoreHorizontal} from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className='mt-[4rem] md:mt-[5rem] pt-2 pb-20 px-3 mx-auto '>
        <h2 className='text-[#FEFBE9] font-Roboto-Condensed font-bold text-2xl md:text-3xl px-3'>Services</h2>
        <div className='flex flex-col md:grid grid-cols-3 justify-center p-5'>
            <div className='flex flex-col justify-center items-center text-center m-3 shadow-2xl bg-[#FEFBE9] p-3 rounded-xl'>
                <img src={airplane} className='w-full md:w-[400px]  rounded-md' alt="Airplane landing" />
                <div className='flex justify-between items-center mt-3 w-full md:justify-around'>
                    <p className='font-medium text-lg'>Airport transfer</p>
                    <Link to='airporttransfer'>
                         <FiMoreHorizontal className='text-3xl self-center border-2 p-1 border-black rounded-md cursor-pointer'/>
                    </Link>
                </div>
            </div>
             <div className='flex flex-col justify-center items-center text-center m-3 shadow-2xl bg-[#FEFBE9] p-3 rounded-xl'>
                <img src={dayOut} className='w-full md:w-[400px]   rounded-md' alt="People having fun at day out"  />
                <div className='flex justify-between items-center mt-3 w-full md:justify-around'>
                    <p className='font-medium text-lg'>Day out</p>
                    <Link to='dayout'>
                        <FiMoreHorizontal className='text-3xl self-center border-2 p-1 border-black rounded-md cursor-pointer'/>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center m-3 shadow-2xl bg-[#FEFBE9] p-3 rounded-xl'>
                <img src={nightOut} className='w-full md:w-[400px] rounded-md' alt="People having fun at night out" />
                <div className='flex justify-between items-center mt-3 w-full md:justify-around'>
                    <p className='font-medium text-lg'>Night out</p>
                    <Link to='nightout'>
                        <FiMoreHorizontal className='text-3xl self-center border-2 p-1 border-black rounded-md cursor-pointer'/>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center m-3 shadow-2xl bg-[#FEFBE9] p-3 rounded-xl'>
                <img src={wedding} className='w-full md:w-[400px]  rounded-md' alt="People attending at a wedding"  />
                <div className='flex justify-between items-center mt-3 w-full md:justify-around'>
                    <p className='font-medium text-lg'>Wedding</p>
                    <Link to='wedding'>
                        <FiMoreHorizontal className='text-3xl self-center border-2 p-1 border-black rounded-md cursor-pointer'/>
                    </Link>
                    
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center m-3 shadow-2xl bg-[#FEFBE9] p-3 rounded-xl'>
                <img src={event} className='w-full md:w-[400px]  rounded-md' alt="People attending at an event" />
                <div className='flex justify-between items-center mt-3 w-full md:justify-around'>
                    <p className='font-medium text-lg'>Event</p>
                    <Link to='event'>
                        <FiMoreHorizontal className='text-3xl self-center border-2 p-1 border-black rounded-md cursor-pointer'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services