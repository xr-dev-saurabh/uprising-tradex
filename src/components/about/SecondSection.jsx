import React from 'react'
import Fancy2 from '../../assets/Rectangle 47.png';

export default function SecondSection() {
    return (
        <div className='lg:flex w-full flex-row-reverse p-5 lg:p-24 justify-between bg-[#fbf9f9]'>
            <div className='lg:w-[35%] flex justify-end '>
                <img src={Fancy2} alt="" className='mx-auto lg:mx-0 mb-5 ' />
            </div>
            <p className='text-lg text-justify lg:w-[60%]'>
                Reealtech, a division of Uprising established in 2022, stands as a beacon of innovation in the realm of Extended Reality (XR) and IT solutions. Spearheaded by Saurabh Upadhyay, Reealtech has garnered recognition for its excellence, including being selected as one of the top 40 startups in a prestigious Google networking event, chosen from over 14,000 startups in India. This achievement is a testament to our commitment to pushing the boundaries of technology and delivering cutting-edge solutions.
                <br />
                <br />
                Moreover, Reealtech is proud to be supported by Google Cloud and Microsoft Startup Hub for our infrastructure needs. This support not only validates our expertise and potential but also enables us to provide our clients with the highest level of service and innovation. With a focus on excellence and a drive for innovation, Reealtech is poised to lead the way in the exciting field of Extended Reality and IT solutions.
            </p>

        </div>
    )
}
