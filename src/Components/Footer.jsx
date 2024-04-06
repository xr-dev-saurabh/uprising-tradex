import React from "react";
import { MdWifiCalling2, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-4 sm:px-10 md:px-18 pt-8 sm:pt-12 w-full bg-gray-800 text-white">
      {/* Upper Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-xl sm:text-3xl font-bold">Uprising</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex items-center mb-2 sm:mb-0">
            <MdWifiCalling2 className="mr-2" />
            <span className="text-sm sm:text-base mr-4">8140xxxx84</span>
          </div>
          <div className="flex items-center mb-2 sm:mb-0">
            <MdEmail className="mr-2" />
            <span className="text-sm sm:text-base mr-4">ashish@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaLocationDot className="mr-2" />
            <span className="text-sm sm:text-base">axyz location</span>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="my-6 flex flex-col sm:flex-row justify-between sm:text-justify ">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-5xl font-semibold">Let's take your</h1>
          <h1 className="text-xl sm:text-4xl font-semibold text-red-600">
            {" "}
            business to the next level
          </h1>
        </div>
        <div className="flex flex-col w-full sm:w-96">
          <input
            type="text"
            required
            placeholder="Name"
            className="w-full mb-2 rounded bg-gray-800 text-white border-b-2 border-sky-300 outline-offset-2 focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full mb-2 rounded bg-gray-800 text-white border-b-2 border-sky-300 outline-offset-2 focus:outline-none"
          />
          <input
            type="text"
            required
            placeholder="How can I help you?"
            className="w-full mb-2 rounded bg-gray-800 text-white border-b-2 border-sky-300 outline-offset-2 focus:outline-none"
          />
          <button className="bg-blue-500 font-semibold w-full text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>

      {/* Lower Section */}
      <div className="text-center pb-4">             
        <h3 className='text-center'>© Uprising Tradex LLP. 2015 All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
