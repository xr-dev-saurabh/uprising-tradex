import React from 'react'
import Img1 from '../assets/svg/Rectangle 33.svg';
import Img21 from '../assets/Image 1.jpg';
import Img22 from '../assets/Image 2.png';
import Img23 from '../assets/Image 3.png';
import Img24 from '../assets/Image 4.png';

export default function BigCard() {
    return (
        <>
            <div className='flex items-center justify-center gap-60 max-w-[1280px] mx-auto mt-20 z-10'>
                <div>
                    <img src={Img1} alt="" className='w-[500px]' />
                </div>
                <div className='mr-10 h-[400px] w-[300px] p-4 '>
                    <h1 className='text-4xl font-bold mb-8'>ICT Services</h1>
                    <ul className='list-disc ml-8 text-lg text-gray-600'>
                        <li>Augmented Realty for websites(WebAR)</li>
                        <li>Augmented Reality filters for Instagram, Facebook and Snapchat</li>
                        <li>Cloud Deployment Services for AWS, Microsoft, Google.</li>
                        <li>3D Product modelling</li>
                        <li>Portfolio Designing</li>
                        <li>NFC Tags.</li>
                    </ul>
                </div>
            </div>

            <div className='flex items-center justify-center gap-60 max-w-[1280px] mx-auto mt-20 mb-10'>
                <div className='mr-10 h-[400px] w-[400px] p-4'>
                    <h1 className='text-4xl font-bold mb-8'>Our Advantages</h1>
                    <ul className='list-decimal ml-8 text-lg text-gray-600'>
                        <li>Knowledge and Experience in Diverse Sectors
                            <ul className='list-disc ml-5'>
                                <li>One of the most useful skills to have is being able to understand and identify.</li>
                            </ul>
                        </li>
                        <li>Innovative Problem Solving
                            <ul className='list-disc ml-5'>
                                <li>Increase innovation and improve problem-solving at work by fostering creative abilities.</li>
                            </ul>
                        </li>
                        <li>Relationship Driven
                            <ul className='list-disc ml-5'>
                                <li>Provides automatic targets profiling capabilities.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='bg-white shadow-2xl'>
                    <div className='flex gap-4 mb-4 items-end'>
                        <img src={Img21} alt="" />
                        <img src={Img22} alt="" className='' />
                    </div>
                    <div className='flex gap-4 items-start'>
                        <img src={Img23} alt="" className='' />
                        <img src={Img24} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
