import React from 'react';
import CoverImg from '../assets/CoverImage.png'; // Ensure the correct path to your image

export default function Services() {
    return (
        <div className="w-[80%] mx-auto h-[500px] px-40 my-40" style={{
           backgroundImage: `url(${CoverImg})`,
            // backgroundPosition: 'center',
            backgroundSize: 'contain', // Adjust according to your design
            backgroundRepeat: 'no-repeat', // Adjust according to your design
        }}>
            {/* Right Section */}
            <div className="p-12 px-16 top-10 relative bg-white w-[70%] shadow-[-5px_-5px_25px_1px_#ffffff,5px_5px_25px_1px_#33333350] drop-shadow-2xl ml-[350px] ">
                <h1 className="text-4xl font-bold mb-12">Fast moving consumer goods</h1>
                <ul className="list-disc pl-6 mb-1 text-lg text-gray-600">
                    <li><b>Export of Packaged Foods:</b> We specialize in exporting a variety of packaged foods, including Indian sweets, namkeens, wafers, and other commodities, showcasing the rich flavors and diverse culinary traditions of India to global markets.</li>
                    <li><b>Export of Dry Fruits, Resins, and Peanuts:</b> Our import and export services extend to dry fruits, resins, and peanuts, providing access to high-quality products sourced from around the world to meet the demands of our clients.</li>
                    <li><b>Export of Suits and Sarees:</b> We also cater to the fashion industry by exporting traditional Indian attire, including suits and sarees, renowned for their craftsmanship, quality, and elegance, making a style statement globally.</li> {/* Corrected spelling of "raisins" */}
                    {/* <li>We also export suits and sarees.</li> */}
                </ul>
            </div>
        </div>
    );
}
