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
          <li className="w-[150px] gap-2 text-[20px] text-white font-bold flex justify-start hover:text-gray-500">
            <IoMdHome size={28} className="" />
            Home
          </li>
          <li className="w-[150px] gap-2 text-[20px] text-white font-bold flex justify-start hover:text-gray-500">
            <RiTeamFill size={28} className="" />
            About
          </li>
          <li className="w-[150px] gap-2 text-[20px] text-white font-bold flex justify-start hover:text-gray-500">
          <MdPermContactCalendar size={28} className="" />
            Contact
          </li>
          <li className="w-[150px] gap-2  text-[20px] text-white font-bold flex justify-start hover:text-gray-500">
             <FaShoppingCart size={26} className="" />
            Order Now
          </li>
          
        </ul>
        <div className="place-content-center w-full flex mt-12 items-center">
        <div className="flex w-[500px] justify-evenly gap-5 border rounded-[5px] border-white p-2 ">
          <button className="hover:text-gray-500">
            <FaXTwitter size={30} color="#110537" fill="white" />
          </button>
          <button className="hover:text-gray-500">
            <FaFacebook size={30} color="#110537" fill="white" />
          </button>
          <button className="hover:text-gray-500">
            <FaLinkedin size={30} color="#110537" fill="white" />
          </button>
          <button className="hover:text-gray-500">
            <IoLogoInstagram size={30} color="#110537" fill="white" />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHam;
