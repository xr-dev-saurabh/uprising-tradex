import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const CardIct = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen my-60  md:m-auto">
      <div className="flex flex-col  md:flex-row justify-center items-center md:space-x-36">
        {/* ICT Section */}
        <div className="bg-gray-100 p-4 rounded-md  md:w-[400px]  px-10 shadow-2xl drop-shadow-2xl transition-all duration-500 ease-in-out hover:shadow-lg mb-10 md:mb-0">
          <h2 className="text-lg font-semibold mb-5 text-center md:text-left">
            Revolutionizing Business with Innovative ICT Solutions
          </h2>
          <p className="text-center md:text-left">
            We specialize in forward-thinking strategies and expert design,
            empowering clients with transformative IT solutions. Our team
            delivers cutting-edge experiences from conceptualization to
            implementation, redefining possibilities in Extended Reality.
            Through innovative thinking and tailored guidance, we navigate
            clients through IT transformation journeys, ensuring impactful
            outcomes.
          </p>

          <button
            className="mt-8 mx-auto md:mx-0 bg-sky-500 text-white px-4 py-2 rounded-md transition-colors 
            duration-300 ease-in-out hover:bg-sky-300"
          >
            Learn More
          </button>
          <div className="flex justify-center md:justify-start items-center space-x-16 my-10">
            <FaTwitter className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaFacebook className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaLinkedin className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaInstagram className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
          </div>
        </div>

        {/* FMCG Section */}
        <div className="bg-gray-100 p-4 rounded-md  md:w-[400px]  text-center md:text-left px-10 shadow-2xl drop-shadow-2xl transition-all duration-500 ease-in-out hover:shadow-lg">
          <h2 className="text-lg font-semibold mb-5">
            Elevate Consumer Experiences with Premium FMCG Offerings
          </h2>
          <p className="text-center md:text-left">
            Experience excellence in fast-moving consumer goods (FMCG) with
            Uprising's premium product offerings. We specialize in providing
            high-quality packaged foods, beverages, candies, clothing, and more
            to consumers around the globe. With a commitment to quality and
            competitive pricing, we ensure that our FMCG products exceed
            expectations, delighting customers worldwide.
          </p>

          <button
            className="mt-8 mx-auto  md:mx-0 bg-sky-500 text-white px-4 py-2 rounded-md transition-colors 
            duration-300 ease-in-out hover:bg-sky-300"
          >
            Learn More
          </button>
          <div className="flex justify-center md:justify-start items-center space-x-16 my-10">
            <FaTwitter className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaFacebook className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaLinkedin className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaInstagram className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIct;

