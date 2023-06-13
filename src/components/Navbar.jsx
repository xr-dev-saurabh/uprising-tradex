import logo from '../assets/images/logo.png';



const Navbar = () => {
   
    return (
        <div className='navbar ml-7 mt-4 flex flex-wrap items-center   w-10/12'>
                <div className="logo w-[180px]  flex flex-row items-center relative cursor-pointer">
                    <img className='w-[44px] sm:w-[67px] h-[32px] sm:h-[48px]' src={logo} alt='brand-logo' />
                    <p className='sm:h-[28px] h-[18px] sm:w-[105px] w-[70px]  font-roboto sm:text-[24px] text-[16px] font-normal sm:leading-7 leading-[18px] sm:m-0 my-auto absolute sm:top-[20px] bottom-0 top-[0px] sm:left-[75px] left-[50px] '>UPRISING</p>
                </div>
                <div className="navbar-links ml-auto font-roboto">
                    <ul className='flex mt-5 sm:mt-0 text-[14px] sm:text-[18px] gap-x-8 font-light leading-[21px]'>
                        <li className='cursor-pointer'>HOME</li>
                        <li className='cursor-pointer'>SERVICES</li>
                        <li className='cursor-pointer'>ABOUT</li>
                    </ul>
                </div>
        </div>
    )
}
export default Navbar;