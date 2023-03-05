import React from 'react'

function Contact() {
  return (
    <div className='py-20 px-3 flex flex-col justify-center my-auto items-center'>
        <h1 className='text-[#E1EEDD] font-bold text-xl md:text-4xl mt-3'>Booking form</h1>
        <p className='text-[#E1EEDD]'>Please fill in the form for a free quote</p>
        <form className='mt-4 flex flex-col w-full md:w-1/2 items-center justify-center my-auto'>
            <input type="text" name="Name" id="" placeholder='Your name' className='p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none' />
            <input type="text" name="Name" id="" placeholder='Your surname' className='p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none' />
            <input type="number" name="Name" id="" placeholder='Your phone number' className='p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none' />
            <input type="email" name="Name" id="" placeholder='Your email' className='p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none' />
            <input type="submit" value="Submit" className='bg-[#183A1D] py-2 w-full rounded-sm mt-3 text-[#FEFBE9] md:text-xl cursor-pointer' />
        </form>
    </div>
  )
}

export default Contact