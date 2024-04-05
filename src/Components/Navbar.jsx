import React, { useState } from "react";
import Image from "../assets/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { MdMiscellaneousServices, MdPermContactCalendar } from "react-icons/md";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex justify-between items-center left-0 w-screen h-20 px-4 relative">
      {/* Logo */}
      <div
        className={`flex items-start ${
          logo ? "hidden" : "block"
        } bg-[#110537] md:block`}
        onClick={handleNav}
      >
        <img src={Image} alt="logo" className="h-[45px] w-[100px] relative" />
      </div>

      {/* Menu for medium and large screens */}
      <ul className="hidden bg-[#110537] rounded-2xl px-4 text-white py-2 space-x-10 md:flex cursor-pointer">
        <li className="flex items-center hover:text-gray-500">
          <IoMdHome size={20} />
          <span>Home</span>
        </li>
        <li className="flex items-center hover:text-gray-500">
          <RiTeamFill size={20} />
          <span>About Us</span>
        </li>
        <li className="flex items-center hover:text-gray-500">
          <MdMiscellaneousServices size={20} />
          <span>Services</span>
        </li>
        <li className="flex items-center hover:text-gray-500">
          <MdPermContactCalendar size={20} />
          <span>Contact</span>
        </li>
      </ul>

      {/* Search and User Icons */}
      <div className="px-4 hidden text-white sm:flex">
        <button className="order-btn flex items-center gap-2 bg-[#110537] hover:bg-[#a5a5a5] text-white font-bold py-2 px-10 rounded cursor-pointer transition duration-300">
          <FaShoppingCart size={20} style={{ color: "white" }} /> Order
        </button>
      </div>

      {/* Menu Icon for small screens */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenu size={20} />
        )}
      </div>

      {/* Responsive Navigation Menu */}
      <div
        onClick={handleNav}
        className={`relative top-0 w-full md:w-auto md:relative bg-gray-100/90 md:bg-transparent px-4 py-7
         md:flex md:flex-row md:items-center md:space-x-4 ${
          nav ? "left-0" : "-left-full"
        } ${nav ? "block" : "hidden"} md:hidden z-40`}
      >
        <ul className="mt-10">
          <li className={`flex items-start mt-5 w-[100px] bg-[#110537] md:block`} onClick={handleNav}>
            <img src={Image} alt="logo" className="h-[45px] w-[100px]" />
          </li>
          <li className="border-b border-black mt-6 text-black font-bold flex items-center hover:text-gray-500">
            <IoMdHome size={20} className="mr-2" />
            <span>Home</span>
          </li>
          <li className="border-b border-black mt-5 text-black font-bold flex items-center hover:text-gray-500">
            <RiTeamFill size={20} className="mr-2" />
            <span>About Us</span>
          </li>
          <li className="border-b border-black mt-5 text-black font-bold flex items-center hover:text-gray-500">
            <MdMiscellaneousServices size={20} className="mr-2" />
            <span>Services</span>
          </li>
          <li className="border-b border-black mt-5 text-black font-bold flex items-center hover:text-gray-500">
            <MdPermContactCalendar size={20} className="mr-2" />
            <span>Contact</span>
          </li>

          <div className="flex flex-col">
            <button className="order-btn flex justify-center items-center gap-2 mt-7 bg-[#110537] hover:bg-[#a5a5a5] text-white font-bold py-2 px-10 rounded cursor-pointer transition duration-300">
              <FaShoppingCart size={20} style={{ color: "white" }} /> Order
            </button>
          </div>
          <div className="flex justify-between my-6">
            <button className="icon hover:text-gray-500">
              <FaFacebook />
            </button>
            <button className="icon hover:text-gray-500">
              <FaTwitter />
            </button>
            <button className="icon hover:text-gray-500">
              <IoLogoInstagram />
            </button>
            <button className="icon hover:text-gray-500">
              <FaYoutube />
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
