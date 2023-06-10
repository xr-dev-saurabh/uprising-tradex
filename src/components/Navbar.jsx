import logo from '../assets/images/logo.png';



const Navbar = () => {
   
    return (
        <div className='navbar ml-7 mt-4'>
            <div className="  flex flex-wrap items-center   w-10/12">
                <div className="logo mb-5 flex flex-row items-center relative cursor-pointer">
                    <img src={logo} alt='brand-logo' />
                    <p className='absolute'>UPRISING</p>
                </div>
                <div className="navbar-links ml-auto">
                    <ul>
                        <li>HOME</li>
                        <li>SERVICES</li>
                        <li>ABOUT</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;