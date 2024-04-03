import React from "react";
import reliableIcon from "../assets/reliable.svg";
import solutionsIcon from "../assets/solutions.svg";
import affordableIcon from "../assets/affordable.svg";
import experienceIcon from "../assets/experience.svg";

const WhyUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Us?
          </h2>
        </div>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:space-x-8">
            {/* Reliable */}
            <div className="bg-gray-100 p-4 rounded-md md:w-[225px] h-[300px] text-justify px-5 shadow-2xl drop-shadow-2xl ">
              <h3 className="text-lg font-semibold mb-2">Reliable</h3>
              <div className="text-justify">
                <p>
                  We believe in building and maintaining long-term relationships
                  with all our clients.
                </p>
                {/* SVG Image for Reliable */}
                <img
                  src={reliableIcon}
                  alt="Reliable Icon"
                  className="w-40 h-40 ml-20"
                />
              </div>
            </div>
            {/* Solutions */}
            <div className="bg-gray-100 p-4 rounded-md md:w-[225px] h-[300px] text-justify px-5 shadow-2xl drop-shadow-2xl">
              <h3 className="text-lg font-semibold mb-2">Solutions</h3>
              <div className="text-justify">
                <p>
                  We strive to provide optimal solutions to ensure your utmost
                  satisfaction.
                </p>
                {/* SVG Image for Solutions */}
                <img
                  src={solutionsIcon}
                  alt="Solutions Icon"
                  className="w-40 h-36 ml-20 mb-10"
                />
              </div>
            </div>
            {/* Affordable */}
            <div className="bg-gray-100 p-4 rounded-md md:w-[225px] h-[300px] text-justify px-5 shadow-2xl drop-shadow-2xl">
              <h3 className="text-lg font-semibold mb-2">Affordable</h3>
              <div className="text-justify">
                <p>
                  We provide the best plus affordable services to our customers.
                </p>
                {/* SVG Image for Affordable */}
                <img
                  src={affordableIcon}
                  alt="Affordable Icon"
                  className="w-40 h-40 ml-20"
                />
              </div>
            </div>
            {/* Experience */}
            <div className="bg-gray-100 p-4 rounded-md md:w-[225px] h-[300px] text-justify px-8 shadow-2xl drop-shadow-2xl">
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <div className="text-justify">
                <p>
                  Our team specializes in cutting-edge technologies including
                  Artificial Intelligence, Deep Learning, 3D Modeling, UI/UX,
                  and Web Development.
                </p>
              </div>
              {/* SVG Image for Experience */}
              <img
                src={experienceIcon}
                alt="Experience Icon"
                className=" mx-20 mb-24"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
