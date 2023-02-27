import MercedesImage from '../assets/mercedes.png'

function LandingPage() {
  return (
    <div className='pt-20 flex flex-col md:flex-row-reverse  justify-center text-center align-middle m-auto w-full min-h-screen'>
        <img src={MercedesImage} className=' md:w-1/2 self-center' alt="Mercedes Vito mini-bus picture" />
        <div className='flex flex-col text-center justify-center'>
            <div>
                <h1 className='font-Roboto-Condensed text-white font-bold text-7xl md:text-8xl text-center drop-shadow-md z-10'>Travel <span className='text-[#F0A04B]'>Big</span> at low prices</h1>
            </div>
            <div>
                <h2 className='text-white underline font-bold text-2xl mt-5 cursor-pointer'>Book a travel</h2>
                <p className='text-white '>or</p>
                <h3 className='text-white text-xl font-bold'>Give us a call or a text:</h3>
                <h3 className='text-white text-xl font-bold'>07564 881729</h3>
            </div>
        </div>
        
    </div>
  )
}

export default LandingPage