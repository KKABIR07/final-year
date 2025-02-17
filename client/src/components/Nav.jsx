import { RiMenuUnfold3Line } from "react-icons/ri";
import { RiMenuFold3Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Nav = ({side , setSide}) => {
  return (
    <div className=" flex justify-between p-2 items-center Nav">
      <div className="logo h-10 w-10 rounded-lg"></div>
      <h2 className="text-black font-semibold text-xl">PRECISION AGRICULTURE FRAMEWORK</h2>
      <div className="flex gap-2">
        <div className="search flex gap-2  items-center">
          <input type="text" className="rounded-md p-1 focus:outline-none"/>
          <FaSearch />
          <div className="ml-4 flex">
        
        {side ? <RiMenuFold3Line className="text-black text-xl cursor-pointer" onClick={()=>{setSide(false)}}/> : <RiMenuUnfold3Line className="text-black text-xl cursor-pointer" onClick={()=>{setSide(true)}}/>}
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Nav
