import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const CardIct = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex justify-between items-center space-x-36">
        {/* ICT Section */}
        <div className="bg-gray-100 p-4 rounded-md w-[400px] h-[350px] text-justify px-10 shadow-2xl drop-shadow-2xl transition-all duration-500 ease-in-out hover:shadow-lg">
          <h2 className="text-lg font-semibold mb-5">ICT</h2>
          <p>
            Providing innovative thinking, design thinking, and the right guidance for IT transformation, Uprising delivers cutting edge ICT solutions to clients
          </p>

          <button className="ml-48 bg-sky-500 text-white px-4 py-2 rounded-md mt-12 transition-colors 
          duration-300 ease-in-out hover:bg-sky-300">
            Learn More
          </button>
          <div className="flex justify-between items-center space-x-10 my-10">
            <FaTwitter className="w-6 h-6 mr-2 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaFacebook className="w-6 h-6 mr-2 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaLinkedin className="w-6 h-6 mr-2 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaInstagram className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
          </div>
        </div>

        {/* FMCG  Section */}
        <div className="bg-gray-100 p-4 rounded-md w-[400px] h-[350px] text-justify px-10 shadow-2xl 
        drop-shadow-2xl transition-all duration-500 ease-in-out hover:shadow-lg">
          <h2 className="text-lg font-semibold mb-5">FMCG</h2>
          <p>
            Uprising provides the best fast moving consumer goods around the globe with competitive pricing. We export different types of packaged foods, beverages, candies, clothing, etc.
          </p>

          <button className="ml-48 bg-sky-500 text-white px-4 py-2 rounded-md mt-5 transition-colors 
          duration-300 ease-in-out hover:bg-sky-300">
            Learn More
          </button>
          <div className="flex justify-between items-center space-x-10 my-10">
            <FaTwitter className="w-6 h-6 mr-2 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaFacebook className="w-6 h-6 mr-2 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaLinkedin className="w-6 h-6 mr-2 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaInstagram className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIct;
