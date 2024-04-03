import React from 'react'
import BgVideo from '../../assets/video/ProductBgVideo.mp4';

export default function
    () {
    return (
        <div className='h-screen '>
            <section className="flex justify-center items-center h-[100vh] ">
                <video className="w-full h-full absolute object-cover  blur-[1px]" src={BgVideo} type="video/mp4" autoPlay muted loop></video>
                <div className='z-10 w-full h-full bg-black opacity-20 absolute'></div>
                <div className="z-20">
                   <h1 className='text-9xl font-bold text-white '>You Order We Deliver</h1>
                </div>
            </section>
        </div>
    )
}
