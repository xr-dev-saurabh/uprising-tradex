import React from 'react';
import { FaRegCirclePlay } from 'react-icons/fa6';
import Partcles from './Particles.jsx';


export default function Hero() {


    return (
        <div className="flex items-center bg-white w-full h-screen bg-cover">
            <div className='max-h-screen overflow-hidden absolute z-[-10px]'>
                <Partcles id="tsparticles" />
            </div>


            <div className="flex flex-col items-center  px-4 sm:px-6 lg:px-8 w-full ml-10 z-10">

                <h1 className=" tracking-wide text-gray-800 text-4xl md:text-8xl text-center" style={{fontFamily: "Bebas Neue"}}>
                    WORKPLACE THAT INSPIRE
                </h1>

                <div className="mt-3  space-y-4 sm:space-y-5">
                    <p className="text-gray-700 text-center text-lg md:text-xl">
                        We work for people and make their dreams come true.
                    </p>
                </div>

                <button className='group border text-gray-800 border-black px-3 py-2 mt-6 font-semibold tracking-wider mx-auto text-base md:text-[27px] bg-white flex items-center'>
                    <FaRegCirclePlay  />
                    <hr className='w-10 border-[1.85px] border-gray-800 mr-2'/>
                    Discover
                    
                </button>
            </div>
        </div>
    );
}
