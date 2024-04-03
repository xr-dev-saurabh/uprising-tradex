import React from 'react'
import HeroImg from '../assets/noBg-Rectangle 22-croped.png'
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
    return (

            <div className="flex items-center  h-screen" 
            // style={{ backgroundImage: `url(${HeroImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: 'cover' }}
            >
                <div className=" z-10 ml-60">
                    <div className="lg:max-w-lg">
                    
                        <h1 className=" font-bold tracking-wide text-gray-800  text-6xl">
                            Worksplace that inspire
                        </h1>

                        <div className="mt-8 space-y-5">
                            <p className="flex items-center text-gray-700 mx-1 text-xl">
                                We work for people and make their dream come in to there life or in there home.
                            </p>
                        </div>

                        <button className='group  border border-black px-3 py-2 mt-5 font-semibold tracking-wider flex items-center'>
                            Discover <FaArrowRight className="hidden ml-2 group-hover:inline-block " />
                        </button>
                
                    </div>
                </div>

                {/* <div className="flex w-full absolute border  z-0  h-full"> */}
                    <img className=" w-[1000px] absolute right-0" src={HeroImg} alt="glasses photo" />
                {/* </div> */}
            </div>
    )
}
