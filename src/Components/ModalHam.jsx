import React from 'react'
import { IoMdHome } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import {  MdPermContactCalendar } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ModalHam = () => {
  return (
    <div className='w-full h-screen'>
    <div className='p-5'>
    <ul className="flex flex-col space-y-10 w-full">
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
            <li className="bg-[#110537] hover:bg-[#a5a5a5] w-full mt-10 text-white px-3 py-3 rounded-md text-3xl font-medium flex items-center justify-center">
            <FaShoppingCart className="mr-2" />
            Order Now
          </li>
          </ul>
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
  )
}

export default ModalHam;
