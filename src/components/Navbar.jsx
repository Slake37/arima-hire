import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import arimaHireLogo from "../assets/ARIMA HIRE2.png";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  const toggelingNavBar = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed bg-[#183A1D] w-full p-3 flex justify-between align-middle items-center m-auto md:p-5 z-20 top-0 ">
      {/* Small screens navigation */}
      <Link to="/" onClick={!toggle}>
        <img
          src={arimaHireLogo}
          alt="Arima Hire Logo"
          className="bg-transparent w-[80px] p-0"
        />
      </Link>
      <a
        href="https://www.facebook.com/profile.php?id=100088248557047"
        target="_blank"
      >
        <h1 className="text-[#F0A04B] flex justify-center items-center">
          Follow us on <BsFacebook className="mx-2" />{" "}
        </h1>
      </a>

      <div
        className="flex flex-col justify-center md:hidden cursor-pointer"
        onClick={toggelingNavBar}
      >
        <div className="bg-[#F0A04B] w-10 h-1 mb-2"></div>
        <div className="bg-[#F0A04B] w-10 h-1 mb-2"></div>
        <div className="bg-[#F0A04B] w-10 h-1"></div>
      </div>
      <div
        className={
          toggle
            ? "hidden"
            : "absolute top-[100%] left-0 bg-[#E1EEDD] w-[75vw] h-[100vh] flex justify-center align-middle z-10 "
        }
      >
        <ul className="flex flex-col justify-center align-middle text-left text-[#183A1D] text-2xl  font-bold w-full m-5">
          <Link to="aboutus" onClick={!toggle}>
            <li className="hover:bg-[#183A1D] hover:text-[#E1EEDD] p-2 w-full flex mb-5">
              About
            </li>
          </Link>
          <Link to="meetyourdriver" onClick={!toggle}>
            <li className="hover:bg-[#183A1D] hover:text-[#E1EEDD] p-2 w-full flex mb-5">
              Meet your driver
            </li>
          </Link>
          <Link to="services" onClick={!toggle}>
            <li className="hover:bg-[#183A1D] hover:text-[#E1EEDD] p-2 w-full flex mb-5">
              Services
            </li>
          </Link>
          <Link to="reviews" onClick={!toggle}>
            <li className="hover:bg-[#183A1D] hover:text-[#E1EEDD] p-2 w-full flex mb-5">
              Reviews
            </li>
          </Link>
          <Link to="contact" onClick={!toggle}>
            <li className="hover:bg-[#183A1D] hover:text-[#E1EEDD] p-2 w-full flex">
              Get a quote
            </li>
          </Link>
        </ul>
      </div>
      {/* Big screens navigations */}
      <div className="md:flex hidden">
        <ul className="flex justify-center align-middle text-[#F0A04B]">
          <Link to="aboutus">
            <li className="m-2 hover:text-[#E1EEDD] cursor-pointer">About</li>
          </Link>
          <Link to="meetyourdriver">
            <li className="m-2 hover:text-[#E1EEDD] cursor-pointer">
              Meet your driver
            </li>
          </Link>
          <Link to="services">
            <li className="m-2 hover:text-[#E1EEDD] cursor-pointer">
              Services
            </li>
          </Link>
          <Link to="reviews">
            <li className="m-2 hover:text-[#E1EEDD] cursor-pointer">Reviews</li>
          </Link>
          <Link to="contact">
            <li className="m-2 hover:text-[#E1EEDD] cursor-pointer">
              Get a quote
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
