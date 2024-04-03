import React from 'react'
import Fancy from '../../assets/Rectangle 46.png';

export default function FirstSection() {
    return (
        <>

            <div className='p-24 flex w-full'>
                <div className='w-[20%] flex items-center text-lg font-semibold'>
                    <h3 className='w-20'>About-us our team</h3>
                </div>
                <div className='w-[80%]'>
                    <h1 className='text-5xl mb-10'>About-us</h1>
                    <p className='text-lg text-justify'>
                        Founded in 2015, Uprising Tradex LLP aims to become the leading super dealer/distributor of FMCG products in Gujarat, extending its reach to other western states in India. To achieve this goal, Uprising Tradex LLP critical success factors will be to identify emerging trends and integrate them into our company operations, respond quickly to customers, provide high-quality services, invest time and money in marketing and advertising, and stay ahead of the "technology curve."
                        <br />
                        <br />
                        The Uprising Tradex LLP have been formed by Mr. Satish Upadhyay after working for a decade in Africa with its head office in Surat, Gujarat, and associate offices in Tanzania (East Africa) and UK. Company have diversified its operations into Technology, Textile and FMCG by positioning themselves amidst renowned players and create a niche market for its product and services.
                        <br />
                        <br />
                        The company has grown magnificently well in the leadership of its founders and is still rising at a rapid pace growth in Information Technology services, Import/ Export of agro based products, Textile and Minerals with its presence and associate companies in UK and Tanzania (East Africa ). Holding Export rights of various renowned brand likes Bhikharam Chandmal (Dealing in Namkeens & Sweets) and Yummy ( Wafers biscuits ). Our export and domestic portfolio include of exotics range flavoured and non-flavoured Cashew, Almonds, Raisins. We manufacture Khari Sing(Roasted Peanuts) and 10 different types of its flavours.
                    </p>
                </div>
            </div>
            <img src={Fancy} alt="" className='w-full mb-10' />
        </>
    )
}
