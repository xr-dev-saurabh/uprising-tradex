import React from 'react'
import Fancy3 from '../../assets/Rectangle 48.png';
import Fancy4 from '../../assets/Rectangle 49.png';
import Fancy5 from '../../assets/Rectangle 50.png';
import WhyUs from '../../assets/why-us.png';

export default function ThirdSection() {
    return (
        <div className='bg-[#fbf9f9]'>
            <div className='p-5 lg:p-24'>
                <div className='flex flex-col items-center  lg:flex-row justify-between '>
                    <div className='flex items-center justify-center lg:justify-start  gap-10 w-full lg:w-[35%]'>
                        <div className='flex flex-col w-[10rem] gap-5'>
                            <img src={Fancy3} alt="" className='' />
                            <img src={Fancy5} alt="" />
                        </div>
                        <img src={Fancy4} alt="" />
                    </div>
                    <div className='lg:w-[60%]'>
                        <h1 className='text-3xl lg:text-5xl uppercase text-center mb-10 lg:mb-20 mt-10 lg:mt-0'>Meet Our Dynamic Team</h1>
                        <p className='text-lg text-justify'>
                            At Uprising, our success is driven by our dedicated team of professionals who are passionate about delivering excellence in everything they do. We pride ourselves on having a diverse and talented team that drives innovation and excellence in everything we do. From machine learning engineers who harness the power of AI to cloud engineers who ensure the reliability and scalability of our infrastructure, each member brings a unique set of skills and expertise to the table. Our extended reality developers push the boundaries of technology, creating immersive experiences that captivate and inspire. Meanwhile, our 3D modelers bring creativity and precision to every project, crafting lifelike visuals that leave a lasting impression.
                            <br />
                            <br />
                            In addition, our AR filter developers create engaging experiences for social media platforms, while our web developers and UI/UX designers work tirelessly to deliver seamless and intuitive digital experiences for our customers. Together, our team collaborates seamlessly to deliver innovative solutions that exceed expectations and drive business growt
                        </p>
                    </div>
                </div>
            </div>
            <img src={WhyUs} alt="" className='px-1 lg:px-24 w-full' />
        </div>
    )
}
