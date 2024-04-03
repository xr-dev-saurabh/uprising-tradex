import React from "react";
import logo from "../assets/Uprising logo.jpg";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className=" p-4 flex justify-between items-center">
      {/* Logo Section */}
      
      <div className="p-2">
        <img src={logo} alt="Logo" className="h-14 mr-2" />
      </div>

      {/* Menu Section */}
      <div className="flex items-center space-x-10 backdrop-blur-md bg-gray-300/30 rounded-2xl px-4 ">
      <ul className="flex   space-x-10 px-s ">
        <NavItem link="/" icon={<IoMdHome />} text="Home" className="flex flex-col" />
        <NavItem link="/" icon={<RiTeamFill />} text="About" />
        <NavItem link="/" icon={<MdMiscellaneousServices />} text="Services" />
        <NavItem link="/" icon={<MdPermContactCalendar />} text="Contact" />
      </ul>

      </div>

      {/* Order Button */}
      <div className="flex items-center space-x-4">
        <button className="order-btn bg-sky-500 hover:bg-sky-300 text-white font-bold py-2 px-10 rounded cursor-pointer transition duration-300">
          Order
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, text }) => {
  return (
    <div className="flex items-center text-black mr-1">
      {icon && (
        <span className="mr-1 hover:text-sky-500">{icon}</span>
      )}
      <span className="px-1 py-2 font-semibold font-sans hover:underline-offset-4 hover:text-sky-500 cursor-pointer transition duration-300">{text}</span>
    </div>
  );
};



export default Navbar;