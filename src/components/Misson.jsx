import React from 'react'
import HeroImg from '../assets/Rectangle38.png';
import Person from '../assets/svg/Working Businessman on laptop.svg';

export default function Misson() {
    return (
        <div className='p-5'>
            <div
                className='h-[500px] bg-no-repeat relative bg-center my-20 justify-between px-[10%]  before:rounded-full before:w-20 before:scale-[2.8] before:py-5 before:absolute before:border-t-[40px] before:border-[#D5FAFC] before:bottom-[-90px] before:left-[25%]
                after:rounded-full after:h-20 after:scale-[2.8] after:px-5 after:absolute after:border-r-[40px] after:border-[#2EC5CE] after:right-[8.6rem] after:top-[39%] 
                hidden lg:flex'
                style={{
                    backgroundImage: `url(${HeroImg})`,
                    backgroundSize: '80% '
                }}>
                <div className='p-20 w-[40%]'>
                    <h1 className='text-4xl text-white font-bold tracking-wider'>Our Misson</h1>
                    <ul className='list-disc text-white ml-5 mt-10 text-lg'>
                        <li>Assist customers in achieving their goals through differentiated products and services. </li>
                        <li> Help real estate and hospitality businesses enhance customer experiences with compelling virtual reality solutions.</li>
                        <li> Drive innovation and excellence in the ICT industry through continuous improvement and collaboration.</li>
                    </ul>
                </div>
                <div className='w-[50%]'>
                    <img src={Person} alt="" className=' ml-20' />
                </div>
            </div>
            <div className='lg:hidden bg-[#fcc9c4] w-full pb-10 '>
                <div className='p-5'>
                    <h1 className='text-3xl text-white font-bold tracking-wider'>Our Misson</h1>
                    <ul className='list-disc text-white ml-5 mt-10 text-lg'>
                        <li>Assist customers in achieving their goals through differentiated products and services. </li>
                        <li> Help real estate and hospitality businesses enhance customer experiences with compelling virtual reality solutions.</li>
                        <li> Drive innovation and excellence in the ICT industry through continuous improvement and collaboration.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
