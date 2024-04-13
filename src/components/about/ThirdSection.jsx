import React from 'react'
import TeamImg from '../../assets/team.jpg';
import WhyUs from '../../assets/why-us.png';
import WhyUsMobile from '../../assets/whyus-mobile.png';

export default function ThirdSection() {
    return (
        <div className='bg-[#f8f9fb]'>
            <div className='p-5 lg:p-24'>
                <div className=' '>
                    <h1 className='text-3xl lg:text-5xl font-serif uppercase text-center mb-10 lg:mb-20 mt-10 lg:mt-0'>Meet Our Dynamic Team</h1>
                    <div className='xl:flex  justify-between gap-5'>
                        <div className='mb-5 w-full xl:w-[25%]'>
                            <img src={TeamImg} alt="" />
                        </div>
                        <p className='text-lg text-justify xl:w-[75%]'>
                            At Uprising, our success is driven by our dedicated team of professionals who are passionate about delivering excellence in everything they do. We pride ourselves on having a diverse and talented team that drives innovation and excellence in everything we do. From machine learning engineers who harness the power of AI to cloud engineers who ensure the reliability and scalability of our infrastructure, each member brings a unique set of skills and expertise to the table. Our extended reality developers push the boundaries of technology, creating immersive experiences that captivate and inspire. Meanwhile, our 3D modelers bring creativity and precision to every project, crafting lifelike visuals that leave a lasting impression.
                            <br />
                            <br />
                            In addition, our AR filter developers create engaging experiences for social media platforms, while our web developers and UI/UX designers work tirelessly to deliver seamless and intuitive digital experiences for our customers. Together, our team collaborates seamlessly to deliver innovative solutions that exceed expectations and drive business growth.
                        </p>
                    </div>
                </div>
            </div>
            <img src={WhyUs} alt="" className='px-1 lg:px-24 w-full hidden sm:block' />
            <img src={WhyUsMobile} alt="" className='px-1 lg:px-24 w-full py-10 sm:hidden' />

        </div>
    )
}
