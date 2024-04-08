import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const CardIct = () => {
  return (
    <div className="justify-center items-center w-full   md:flex-row ">
      <div className="flex flex-wrap justify-center items-center px-5 gap-10 py-5">
        {/* First Card (ICT Section) */}
        <div className="bg-white rounded-lg shadow-lg p-8 px-10 max-w-md mb-8 md:mb-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Revolutionizing Business with Innovative ICT Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            We specialize in forward-thinking strategies and expert design,
            empowering clients with transformative IT solutions. Our team
            delivers cutting-edge experiences from conceptualization to
            implementation, redefining possibilities in Extended Reality.
            Through innovative thinking and tailored guidance, we navigate
            clients through IT transformation journeys, ensuring impactful
            outcomes.
          </p>
          <button className="mt-8 mx-auto md:mx-0 bg-sky-500 text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-sky-300">
            Learn More
          </button>
          {/* Follow Icons */}
          <div className="flex justify-center  items-center gap-16 my-10">
            <FaTwitter size={30} className=" transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaFacebook className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaLinkedin className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
            <FaInstagram className="w-6 h-6 transition-colors duration-300 ease-in-out hover:text-gray-500" />
          </div>
        </div>

        {/* Second Card (FMCG Section) */}
        <div className="bg-white rounded-lg shadow-lg p-8 px-10 max-w-md mb-8 md:mb-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Elevate Consumer Experiences with Premium FMCG Offerings
          </h2>
          <p className="text-gray-600 mb-6">
            Experience excellence in fast-moving consumer goods (FMCG) with
            Uprising's premium product offerings. We specialize in providing
            high-quality packaged foods, beverages, candies, clothing, and more
            to consumers around the globe. With a commitment to quality and
            competitive pricing, we ensure that our FMCG products exceed
            expectations, delighting customers worldwide and ensuring premium quality.
          </p>
          <button className="mt-8 mx-auto md:mx-0 bg-sky-500 text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-sky-300">
            Learn More
          </button>
          {/* Follow Icons */}
          <div className="flex justify-center  gap-16 items-center  my-10">
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
