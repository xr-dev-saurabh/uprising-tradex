import React from 'react';
import CoverImg from '../assets/CoverImage.png'; // Ensure the correct path to your image

export default function Services() {
    return (
        <div className="w-[80%] mx-auto h-[500px] px-40 my-40" style={{
           backgroundImage: `url(${CoverImg})`,
            // backgroundPosition: 'top',
            backgroundSize: 'contain', // Adjust according to your design
            backgroundRepeat: 'no-repeat', // Adjust according to your design
        }}>
            {/* Right Section */}
            <div className="p-12 px-16 top-10 relative bg-white w-[50%] shadow-[-5px_-5px_25px_1px_#ffffff,5px_5px_25px_1px_#33333350] drop-shadow-2xl ml-[600px] ">
                <h1 className="text-4xl font-bold mb-12">Fast moving consumer goods</h1>
                <ul className="list-disc pl-6 mb-10 text-lg">
                    <li>Uprising provides import and export services for fast moving consumer goods.</li>
                    <li>Export packaged foods including Indian sweets, Indian namkeens, Wafers, Commodities, etc.</li>
                    <li>Import and export of dry fruits, raisins, and peanuts.</li> {/* Corrected spelling of "raisins" */}
                    <li>We also export suits and sarees.</li>
                </ul>
            </div>
        </div>
    );
}
