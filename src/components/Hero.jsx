import React from 'react';
// import HeroImg from '../assets/noBg-Rectangle-22-croped.png';
import { FaArrowRight } from 'react-icons/fa6';
// import Particle from './Particle';

export default function Hero() {


    return (
        <div className="flex items-center bg-white h-screen bg-cover"
        // style={{ 
        //     backgroundImage: `url(${HeroImg})`, 
        //     backgroundPosition: 'center',
        // }}
        >
            {/* <Particle /> */}
            <div className="  px-4 sm:px-6 lg:px-8 w-[600px] ml-10">
                <h1 className="font-bold tracking-wide text-gray-800 text-4xl md:text-6xl">
                    Workplace that inspires
                </h1>

                <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-5">
                    <p className="text-gray-700 text-lg md:text-xl">
                        We work for people and make their dreams come true in their life or home.
                    </p>
                </div>

                <button className='group border border-black px-3 py-2 mt-5 active:border-2 font-semibold tracking-wider mx-auto'>
                    Discover
                    <FaArrowRight className="hidden ml-2 group-hover:inline-block " />
                </button>
            </div>
        </div>
    );
}
