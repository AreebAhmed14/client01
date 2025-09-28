"use client"
import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';
import { Caveat } from 'next/font/google';
import Link from 'next/link';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ["400","700"]
});
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    function off(){
      setShowMenu(false)
    }
  return (
    <>
      <div className='w-full h-[80px] bg-[#E5C07B] flex justify-between items-center'>
        <h1 className={`ml-5 text-[2rem] font-[700] ${caveat.className} text-white px-3 rounded-lg max-[488px]:text-[1.5rem] max-[380px]:text-[1.3rem] max-[380px]:ml-3`}>LEATHER-TREND</h1>
        <div className='flex'>
        
        <ul className='flex mx-10 max-[965px]:mx-5 max-[770px]:hidden'>
            <Link href={"/"}><li className='mx-5 text-[1rem] font-sans font-[600] text-white hover:scale-105 transition-all duration-[1s] cursor-pointer max-[963px]:mx-3'>Home</li></Link>
            <Link href={"/About"}><li className='mx-5 text-[1rem] font-sans font-[600] text-white hover:scale-105 transition-all duration-[1s] cursor-pointer max-[963px]:mx-3'>About</li></Link>
            <Link href={"/Contact"}><li className='mx-5 text-[1rem] font-sans font-[600] text-white hover:scale-105 transition-all duration-[1s] cursor-pointer max-[963px]:mx-3'>Contact</li></Link>
            {/* <li className='mx-5 text-[1rem] font-sans font-[600] text-white hover:scale-105 transition-all duration-[1s] cursor-pointer max-[963px]:mx-3'>Privacy Policy</li> */}
        </ul>
        <HiMenuAlt3 onClick={toggleMenu}  className='hidden max-[770px]:block text-white text-[1.5rem] mx-10 max-[440px]:mx-3'/>
        </div>
      </div>
        <div className={`${showMenu ? "block" : "hidden" } w-full h-[90vh] flex flex-col justify-center items-center bg-[#E5C07B]`}>
            <Link href={"/"}><p onClick={off} className='text-[1.2rem] text-white font-[600] my-5 mt-10'>Home</p></Link>
            <Link href={"About"}><p onClick={off} className='text-[1.2rem] text-white font-[600] my-5'>About</p></Link>
            <Link href={"/Contact"}><p onClick={off} className='text-[1.2rem] text-white font-[600] my-5'>Contact</p></Link>
            {/* <p onClick={off} className='text-[1.2rem] text-white font-[600] my-5'>Privacy Policy</p> */}
        </div>
    </>
  )
}

export default Header