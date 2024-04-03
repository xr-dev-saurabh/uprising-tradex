import React from "react";
import { MdWifiCalling2, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="px-20 pt-10  w-full h-full bg-gray-800  text-white">
      {/* Upper Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Uprising</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-2">
            <MdWifiCalling2 />
          </span>
          <span className="mr-4">8140xxxx84</span>
          <span className="mr-2">
            <MdEmail />
          </span>
          <span className="mr-4">ashish@gmail.com</span>
          <span>
            <FaLocationDot />
          </span>
          <span>axyz location</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="my-6 flex  justify-between text-justify ">
        <div>
          <h1 className="text-5xl font-semibold">Let's take your</h1>
          <h1 className=" text-4xl font-semibold text-red-600">
            {" "}
            business to the next level
          </h1>
        </div>
        <div className="mt-4   flex flex-col w-96 ">
          <input
            type="text" required
            placeholder="Name"
            className="  w-96  mr-4 m-2 rounded bg-gray-800 text-white border-b-2 border-sky-300  outline-offset-2 focus:outline-none"
          />
          <input
            type="email" required
            placeholder="Email"
            className="  w-96 mr-4 m-2 rounded bg-gray-800 text-white border-b-2 border-sky-300  outline-offset-2 focus:outline-none"
          />
          <input
            type="text" required
            placeholder="How can I help you?"
            className="  w-96  mr-4 m-2 rounded bg-gray-800 text-white border-b-2 border-sky-300  outline-offset-2 focus:outline-none"
          />
          <button className="bg-blue-500 w-68 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>

      {/* Lower Section */}
      <div className="footer_bottom text-center pb-4">             
              <h3 className='text-center '>© Uprising Tradex LLP. 2015 All rights reserved.</h3>
                       
        </div>
    </div>
  );
};

export default Footer;
