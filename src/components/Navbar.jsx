import { useState } from "react"

function Navbar() {
    const[toggle,setToggle] = useState(true)

    const toggelingNavBar = ()=>{
        setToggle(!toggle)
        console.log(toggle)
    }

  return (
    <div className="fixed bg-[#183A1D] w-full p-3 flex justify-between align-middle m-auto md:p-5 z-20 ">
        {/* Small screens navigation */}
        <div className="flex justify-start align-center  font-Roboto-Condensed text-xl uppercase">
            <h3 className="text-[#F0A04B] border-l-4 border-b-4 p-1 font-bold">Arima</h3>
            <h3 className="text-white border-t-4 border-r-4 border-[#F0A04B] font-bold pr-1">Hire</h3>
        </div>
        <div className="flex flex-col justify-center md:hidden cursor-pointer" onClick={toggelingNavBar}>
            <div className="bg-[#F0A04B] w-10 h-1 mb-2"></div>
            <div className="bg-[#F0A04B] w-10 h-1 mb-2"></div>
            <div className="bg-[#F0A04B] w-10 h-1"></div>
        </div>
        <div className={toggle ?"hidden":"absolute top-[100%] left-0 bg-[#E1EEDD] w-[75vw] h-[100vh] flex justify-center align-middle z-10 "}>
            <ul className="flex flex-col justify-center align-middle text-left text-[#183A1D] text-2xl  font-bold w-full">
                <li className="hover:bg-[#183A1D] hover:text-[#E1EEDD] p-2 w-full flex mb-5">About</li>
                <li className="hover:bg-[#183A1D] hover:text-[#E1EEDD] p-2 w-full flex mb-5">Services</li>
                <li className="hover:bg-[#183A1D] hover:text-[#E1EEDD] p-2 w-full flex mb-5">Contact</li>
                <li className="hover:bg-[#183A1D] hover:text-[#E1EEDD] p-2 w-full flex">Reviews</li>
            </ul>
        </div>
        {/* Big screens navigations */}
        <div className="md:flex hidden">
            <ul className="flex justify-center align-middle text-[#F0A04B]">
                <li className="m-2 hover:text-[#E1EEDD] cursor-pointer">About</li>
                <li className="m-2 hover:text-[#E1EEDD] cursor-pointer">Services</li>
                <li className="m-2 hover:text-[#E1EEDD] cursor-pointer">Contact</li>
                <li className="m-2 hover:text-[#E1EEDD] cursor-pointer">Reviews</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar