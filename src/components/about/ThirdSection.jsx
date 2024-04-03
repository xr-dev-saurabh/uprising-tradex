import React from 'react'
import Fancy3 from '../../assets/Rectangle 48.png';
import Fancy4 from '../../assets/Rectangle 49.png';
import Fancy5 from '../../assets/Rectangle 50.png';
import WhyUs from '../../assets/whyUs.png';

export default function ThirdSection() {
    return (
        <div className='p-24 flex flex-col justify-center'>
            <div className='flex gap-52'>
                <div className='flex items-center gap-10'>
                    <div className='flex flex-col w-[300px] gap-5'>
                        <img src={Fancy3} alt="" className='' />
                        <img src={Fancy5} alt="" />
                    </div>
                    <img src={Fancy4} alt="" />
                </div>
                <div>
                    <h1 className='text-5xl uppercase text-center mb-20'>The team</h1>
                    <p className='text-lg text-justify'>
                        Backed with a pool of energetic individuals working together to bring forth the exceptional range of products; the responsible staff sternly supervise the offered range. Our team includes Supervisors, Quality Auditors, Skilled employees, Warehouse Keepers, Packaging employees, Web Developers, UI/UX Designers, Machine Learning Engineers and Cloud Engineers.
                        <br />
                        <br />
                        Backed with a pool of energetic individuals working together to bring forth the exceptional range of products; the responsible staff sternly supervise the offered range. Our team includes Supervisors, Quality Auditors, Skilled employees, Warehouse Keepers, Packaging employees, Web Developers, UI/UX Designers, Machine Learning Engineers and Cloud Engineers.
                    </p>
                </div>
            </div>
            <img src={WhyUs} alt="" className='mt-10'/>
        </div>
    )
}
