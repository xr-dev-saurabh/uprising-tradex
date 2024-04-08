import React from 'react'
import Fancy from '../../assets/about2.jpg';

export default function FirstSection() {
    return (
        <>

            <div className='p-5 lg:p-24 flex w-full bg-[#fbf9f9]'>
                <div className='w-[20%] hidden lg:flex items-center text-lg font-semibold'>
                    <h3 className='w-20'>About-us our team</h3>
                </div>
                <div className='w-full lg:w-[80%]'>
                    <h1 className='text-3xl lg:text-5xl mb-10 text-center lg:text-left'>About-us</h1>
                    <p className='text-lg text-justify'>
                        Founded in 2015, Uprising Tradex LLP aims to become the leading super dealer/distributor of FMCG products in Gujarat, extending its reach to other western states in India. To achieve this goal, Uprising Tradex LLP's critical success factors will be to identify emerging trends and integrate them into our company operations, respond quickly to customers, provide high-quality services, invest time and money in marketing and advertising, and stay ahead of the "technology curve."
                        <br />
                        <br />
                        The Uprising Tradex LLP was formed by Mr. Satish Upadhyay after working for a decade in Africa with its head office in Surat, Gujarat, and associate offices in Tanzania (East Africa) and the UK. The company has diversified its operations into Technology, Textile, and FMCG by positioning itself among renowned players and creating a niche market for its products and services.
                        <br />
                        <br />
                        The company has grown magnificently well under the leadership of its founders and is still rising at a rapid pace growth in Information Technology services, Import/ Export of agro-based products, Textiles, and Minerals with its presence and associate companies in the UK and Tanzania (East Africa ). Holding Export rights of various renowned brands like Bhikharam Chandmal (Dealing in Namkeens & Sweets) and Yummy ( Wafers biscuits ). Our export and domestic portfolio includes an exotic range of flavored and non-flavored cashews, Almonds, and Raisins. We manufacture Khari Sing(Roasted Peanuts) and 10 different types of its flavors.
                    </p>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${Fancy})` }} className='w-full h-[400px] bg-fixed bg-center bg-cover'></div>
            {/* <img src={Fancy} alt="" className='w-full mb-10' /> */}
        </>
    )
}
