import React from "react";
import {  MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 pt-5 w-full bg-gray-800 justify-center flex flex-col items-center text-white">
      <div className={`flex flex-wrap md:w-[90%] gap-5 justify-center ${window.innerWidth > 1078 ? "justify-between" : ""} px-5`}>
        {/* Upper Section */}
        <div className="w-full md:w-[400px] text-center md:text-left mb-4">
          <div className="mb-5">
            <h1 className="text-2xl sm:text-3xl font-bold">Uprising Tradex LLP</h1>
          </div>
          <div className="mb-4 sm:mb-0">
            <h1 className="text-base sm:text-lg font-semibold">Let's take your business to the next level</h1>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-[400px] mb-10 text-center md:text-left">
          <div className="flex flex-wrap items-center gap-2 sm:w-auto md:w-96">
            <div className="flex items-center mb-2 sm:mb-0">
            <FaPhone  size={25} className="mr-2"/>
              <span className="text-xs sm:text-base mr-4">+91 9265893860</span>
            </div>
            <div className="flex items-center mb-2 sm:mb-0">
              <MdEmail size={30} className="mr-2" />
              <span className="text-xs sm:text-base mr-4">
                satish@uprisingtradex.com
              </span>
            </div>
            <div className="flex">
              <FaLocationDot size={30} className="mr-2" />
              <span className="text-xs sm:text-base text-left">
                Office No. 18, Ashirwad Shopping, Ashirwad Township 1, Udhna,
                Surat, Gujarat 394210, INDIA
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full mt-5 md:w-auto">
            <input
              type="text"
              required
              placeholder="Name"
              className="w-full mb-4 rounded bg-gray-800 text-white border-b-2 border-sky-300 outline-offset-2 focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full mb-4 rounded bg-gray-800 text-white border-b-2 border-sky-300 outline-offset-2 focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="How can I help you?"
              className="w-full mb-4 rounded bg-gray-800 text-white border-b-2 border-sky-300 outline-offset-2 focus:outline-none"
            />
            <button className="bg-blue-500 font-semibold w-full text-white py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* Lower Section */}
      <div className="text-center pb-4">
        <h3 className="text-center text-xs">
          © Uprising Tradex LLP. 2015 All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
