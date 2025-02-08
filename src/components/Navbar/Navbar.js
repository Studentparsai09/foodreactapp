import React from "react";
import Profile from "../../assets/profile.png";
import { FaArrowDown } from "react-icons/fa6";
function Navbar(){
  return(
  <div className="py-4 lg:py-6">
    <div className="conatiner flex justify-between items-center">
        {/* logo section */}
        <div>
            <p className="text-3xl lg:text-4xl font-semibold">
                FOOD<span className= "text-red-500">EAT</span>
            </p>
        </div>
       
        {/* menu section */}
    
    <div className="flex justify-center items-center gap-10">
        <ul className=" gap-8 hidden sm:flex">
            <li className=" hover: border-b-2 border-primary uppercase">Home</li>
            <li className=" hover: border-b-2 border-primary uppercase">Menu</li>
            <li className=" hover: border-b-2 border-primary uppercase">About</li>
        </ul>
    
    {/* login section */}
    <div className="flex gap-4 items-center">
        <img src={Profile} alt="" className="w-10 rounded-full"/>
        <FaArrowDown />
    </div>
    </div>
  </div>
  </div>

  )
  
}
export default Navbar;