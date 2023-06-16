import {Link} from "react-router-dom"
import uprisingLogo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}} className="flex flex-row justify-center items-center">
          <div>
            <img src={uprisingLogo} alt=""/>
          </div>
          <div className="font-semibold">UPRISING</div>
        </Link>
        <div className="flex flex-row space-x-4">
          <button className="">HOME</button>
          <button className="">SERVICES</button>
          <button className="">ABOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar