// Navbar.js

import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import {  MdPermContactCalendar } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-f8f9fb md:mt-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className=" md:w-[80%] w-[90%] flex items-center py-1 justify-between bg-[#110537] rounded-full text-white">
          <div className={`flex-shrink-0 ${isOpen ? 'hidden' : ''}`}>
            <h1 style={{fontFamily: '"Calistoga", serif'}} className='ml-5'> Uprising Tradex</h1>
          </div>
          <div className="hidden md:block">
            <ul className="bg-[#110537] rounded-full text-white md:flex cursor-pointer">
              <li className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <IoMdHome size={24} className="mr-2" />
                Home
              </li>
              <li className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <RiTeamFill size={22} className="mr-2" />
                About
              </li>
              <li className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <MdPermContactCalendar size={22} className="mr-2" />
                Contact
              </li >
              <li  className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"><FaShoppingCart size={19} className="mr-2" />
                Order Now</li>
            </ul>
          </div>
          
          <div className={`md:hidden ${isOpen ? 'block fixed top-4 right-4 z-50' : ''}`}>
            <button onClick={toggleMenu} type="button" className="bg-gray-800 inline-flex rounded-full items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 mr-2`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 mr-2`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 absolute z-100 w-full h-screen bg-white mt-12">
          <ul className="flex flex-col space-y-10">
            <li className="gap-3 border-b border-black text-3xl text-black font-bold flex items-center hover:text-gray-500">
              <IoMdHome size={40} className="mr-2" />
              Home
            </li>  
            <li className=" gap-3 border-b border-black text-3xl text-black font-bold flex items-center hover:text-gray-500">
              <RiTeamFill size={40} className="mr-2" />
              About
            </li>
            <li className="gap-3 border-b border-black text-3xl text-black font-bold flex items-center hover:text-gray-500">
              <MdPermContactCalendar size={40} className="mr-2" />
              Contact
            </li>
          </ul>
          <button className="bg-[#110537] hover:bg-[#a5a5a5] w-full mt-10 text-white px-3 py-3 rounded-md text-3xl font-medium flex items-center justify-center">
            <FaShoppingCart className="mr-2" />
            Order Now
          </button>
          <div className="flex justify-center gap-28 pt-10">
            <button  className="icon hover:text-gray-500">
              <FaXTwitter size={40} />
            </button>
            <button className="icon hover:text-gray-500">
              <FaFacebook size={40} />
            </button>
            <button className="icon hover:text-gray-500">
              <FaLinkedin size={40} />
            </button>
            <button className="icon hover:text-gray-500">
              <IoLogoInstagram size={40} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
