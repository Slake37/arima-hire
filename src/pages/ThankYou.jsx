import { Link } from "react-router-dom"

function ThankYou() {
  return (
    <div className='pt-20 flex flex-col justify-center items-center min-h-screen leading-10'>
        <h1 className='text-white md:text-4xl text-3xl font-bold'>Thank you for your submision</h1>
        <h2 className="font-bold text-lg">Our driver will contact you for a free and fair quote</h2>
        <Link to='/'>   
            <p className="px-4 py-2 mt-5 text-lg font-bold bg-[#FEFBE9] rounded-md">Back to home</p>
        </Link>
    </div>
  )
}

export default ThankYou