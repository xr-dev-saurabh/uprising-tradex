import React from 'react'
import HeroImg from '../assets/Rectangle38.png';
import Person from '../assets/svg/Working Businessman on laptop.svg';

export default function Misson() {
    return (
        <div className=' z-20 relative '>
            <div className='min-[930px]:block hidden'>
                <div className='w-full h-full'>
                    <img src={HeroImg} alt="" className='w-full h-[500px] p-5 object-cover absolute ' />
                </div>
                <div
                    className='h-[500px] relative p-10 justify-between flex flex-wrap'>
                    <div className='p-5 w-[45%]'>
                        <h1 className='text-4xl text-white font-bold tracking-wider font-serif'>Our Misson</h1>
                        <ul className='list-disc text-white ml-5 mt-2 text-lg'>
                            <li>Assist customers in achieving their goals through differentiated products and services. </li>
                            <li> Help real estate and hospitality businesses enhance customer experiences with compelling virtual reality solutions.</li>
                            <li> Drive innovation and excellence in the ICT industry through continuous improvement and collaboration.</li>
                        </ul>
                    </div>
                    <div className='w-[50%]'>
                        <img src={Person} alt="" className='absolute bottom-0 right-0 xl:right-10' />
                    </div>
                </div>
            </div>
            <div className='min-[930px]:hidden bg-[#fcc9c4] w-full  pb-5 mb-10'>
                <div className='p-10'>
                    <h1 className='text-3xl text-white font-bold tracking-wider font-serif'>Our Misson</h1>
                    <ul className='list-disc text-white ml-5 mt-5 text-lg'>
                        <li>Assist customers in achieving their goals through differentiated products and services. </li>
                        <li> Help real estate and hospitality businesses enhance customer experiences with compelling virtual reality solutions.</li>
                        <li> Drive innovation and excellence in the ICT industry through continuous improvement and collaboration.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
