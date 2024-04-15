import React from "react";
import { IoMdHome } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ModalHam = () => {
  return (
    <div className="w-full h-screen">
      <div className="p-5 mt-6">
        <ul className="flex flex-col justify-center items-center  space-y-10 w-full">
        <a href="#home" target="_blank" rel="noopener noreferrer">
          <li className="w-[190px] gap-2 text-[20px] text-white font-bold flex justify-center hover:text-gray-500">
            <IoMdHome size={26} className="" />
            Home
          </li>
          </a>
          <a href="#about" target="_blank" rel="noopener noreferrer">
          <li className="w-[190px] gap-2 text-[20px] text-white font-bold flex justify-center hover:text-gray-500">
            <RiTeamFill size={26} className="" />
            About
          </li>
          </a>
          <a href="#footer" target="_blank" rel="noopener noreferrer">
          <li className="w-[190px] gap-2 text-[20px] text-white font-bold flex justify-center hover:text-gray-500">
          <MdPermContactCalendar size={28} className="" />
            Contact
          </li>
          </a>
          <a href="#Order" target="_blank" rel="noopener noreferrer">
          <li className="w-[190px] gap-2 ml-3  text-[20px] text-white font-bold flex justify-center hover:text-gray-500">
             <FaShoppingCart size={26} className="" />
            Order Now
          </li>
          </a>
          
        </ul>
        <div className="place-content-center w-full flex mt-12 items-center">
        <div className="flex w-[500px] justify-evenly gap-5 border rounded-[5px] border-white p-2 ">
        <a href="https://twitter.com/uprisingtradex" target="_blank" rel="noopener noreferrer">
        <button className="hover:text-gray-500">
            <FaXTwitter size={30} color="#110537" fill="white" />
          </button>
          </a>
          <a href="https://www.facebook.com/uprisingtradexLLP/" target="_blank" rel="noopener noreferrer">
          <button className="hover:text-gray-500">
            <FaFacebook size={30} color="#110537" fill="white" />
          </button>
          </a>
          <a href="https://in.linkedin.com/in/uprising-tradex-llp-2a94b411b" target="_blank" rel="noopener noreferrer">
          <button className="hover:text-gray-500">
            <FaLinkedin size={30} color="#110537" fill="white" />
          </button>
          </a>
          <a href="https://www.instagram.com/reealtech/" target="_blank" rel="noopener noreferrer">
          <button className="hover:text-gray-500">
            <IoLogoInstagram size={30} color="#110537" fill="white" />
          </button>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHam;
