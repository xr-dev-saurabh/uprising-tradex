import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-around">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
          <span className="">UPRISING</span>
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