import React from 'react'
import BgVideo from '../../assets/video/ProductBgVideo.mp4';
import { FaArrowRight } from 'react-icons/fa6';


export default function
    () {
    return (
        <div className='h-screen '>
            <section className="flex justify-center items-center h-[100vh] ">
                <video className="w-full h-full absolute object-cover  blur-[1px]" src={BgVideo} type="video/mp4" autoPlay muted loop></video>
                <div className='z-10 w-full h-full bg-black opacity-20 absolute'></div>
                <div className="z-20 flex flex-col justify-center items-center mt-5">
                   <h1 className='text-8xl font-bold text-white '>You Order We Deliver</h1>
                   <a href='#products' className='group border px-3 py-2 mt-5 active:border-2  font-semibold tracking-wider scroll-smooth  text-white'>
                   Order Now
                   <FaArrowRight className="hidden ml-2 group-hover:inline-block " />
                   </a>
                </div>
            </section>
        </div>
    )
}
