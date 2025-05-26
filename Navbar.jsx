import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { IoMdArrowDropdown } from "react-icons/io";

import { IoIosArrowDropdown } from "react-icons/io";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 
 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="flex justify-between h-16 md:w-[1050px] w-[410px] lg:w-[1250px] z-10">
        <div className="flex items-center">
          
          <h6 className="mt-5 ml-1">Canada</h6>
          
          <IoMdArrowDropdown
            className="text-xl cursor-pointer mt-6 "
          />
        </div>
        <IoIosArrowDropdown
            className="text-2xl cursor-pointer ml-auto mr-5 hover:accent-[#CA8E00] lg:hidden mt-6 m" onClick={toggleDropdown}/>

        {/* Main navigation links */}
        <ul className="hidden lg:flex gap-4 mr-5 mt-7">
          <li>
            <Link to="/" className="hover:text-[#CA8E00] text-lg">Home</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#CA8E00] text-lg">Visa</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#CA8E00] text-lg whitespace-nowrap" >Safari Tours</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#CA8E00] text-lg whitespace-nowrap">Combo Deals</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#CA8E00] text-lg whitespace-nowrap">Sea Adventure</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#CA8E00] text-lg whitespace-nowrap">City Tours</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#CA8E00] text-lg">others</Link>
          </li>
          <div className='flex '>
          <Link to="/SignIn">
              <button className="w-20 h-8 border  rounded-lg bg-[#D9D9D9] mr-2">Log in</button>
            </Link>
            <Link to="/SignUp">
              <button className="w-20 text-white h-8 border rounded-lg bg-[#CA8E00]">Sign Up</button>
            </Link>
            </div> 
         
        </ul>
{/* 
       FOR SMALL SCREENS */}
        <div
          className={`dropdown-menu absolute z-1 md:flex-col lg:static lg:flex-row lg:justify-between top-16 bg-[#CA8E00] w-full text-white gap-6 text-lg font-semibold flex flex-col items-center ${
            isDropdownOpen ? '' : 'hidden'
          }`}
          ref={dropdownRef}
        >
          <ul className="flex flex-col gap-3 md:flex-row lg:flex-row">
            <li>
              <Link to="/" className="hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200">Visa</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200">Safari Tour</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200">Combo Deals</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200">Sea Adventure</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200">City Tour</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200">Others</Link>
              <IoMdArrowDropdown/>
            </li> 
            
          </ul>
          <div className="-ml-10 flex flex-col gap-6">
            <Link to="/SignIn">
              <button className="w-20 h-8 border rounded-lg bg-[#D9D9D9]">Log in</button>
            </Link>
            <Link to="/SignUp">
              <button className="w-20 text-white h-8 border rounded-lg bg-[#CA8E00]">Sign Up</button>
              
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}