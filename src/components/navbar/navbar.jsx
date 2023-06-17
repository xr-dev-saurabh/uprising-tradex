import {Link} from "react-router-dom"
import uprisingLogo from "../../assets/logo.png"
import { useState } from "react"
import Menu from "./menu"
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)

  function handleOpenMenu(){
    setIsOpen(!isOpen);
  }
  return (
    <nav className="">
      <div className="flex items-center justify-between">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}} className="flex flex-row items-center flex-shrink-0 font-bold tracking-wider">
          <img src={uprisingLogo} alt=""/>
          <div className="font-semibold">UPRISING</div>
        </Link>
        <div className="hidden md:block"><Menu/></div>
        <div className="sm:hidden">
          <button onClick={handleOpenMenu}  className="md:hidden bg-gray-900 inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"/></svg>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        {isOpen && <Menu/>}
      </div>
    </nav>
  )
}

export default Navbar