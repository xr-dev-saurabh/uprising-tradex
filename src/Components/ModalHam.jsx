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
        <ul className="flex flex-col space-y-10 w-full">
          <li className="gap-3 border-b border-black text-2xl text-black font-bold flex items-center hover:text-gray-500">
            <IoMdHome size={30} className="mr-2" />
            Home
          </li>
          <li className=" gap-3 border-b border-black text-2xl text-black font-bold flex items-center hover:text-gray-500">
            <RiTeamFill size={30} className="mr-2" />
            About
          </li>
          <li className="gap-3 border-b border-black text-2xl text-black font-bold flex items-center hover:text-gray-500">
            <MdPermContactCalendar size={30} className="mr-2" />
            Contact
          </li>
          <li className=" gap-3 border-b border-black text-2xl text-black font-bold flex items-center hover:text-gray-500">
            <FaShoppingCart className="mr-2" />
            Order Now
          </li>
          
        </ul>
        <div className="flex justify-center gap-11 pt-10">
          <button className="hover:text-gray-500">
            <FaXTwitter size={30} style={{ color: "black" }} />
          </button>
          <button className="hover:text-gray-500">
            <FaFacebook size={30} style={{ color: "black" }} />
          </button>
          <button className="hover:text-gray-500">
            <FaLinkedin size={30} style={{ color: "black" }} />
          </button>
          <button className="hover:text-gray-500">
            <IoLogoInstagram size={30} style={{ color: "black" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalHam;
