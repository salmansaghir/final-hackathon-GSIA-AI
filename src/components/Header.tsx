import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';

const Header = () => {
  return (
     <div>
                <header className="text-[#000000] body-font bg-[#FBEBB5]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-5">
     <a className="mr-5 hover:text-gray-900"><Link href="/">Home</Link></a>
     <a className="mr-5 hover:text-gray-900"><Link href="./shop">Shop</Link></a>
      <a className="mr-5 hover:text-gray-900"><Link href="./about">About</Link> </a>
      <a className="mr-5 hover:text-gray-900"><Link href="./contact">Contact</Link></a>
    </nav>
    <div className='flex gap-8'>
        <CiUser  className='w-[24px] h-[19px] text-[#000000] font-bold'/>
        <CiHeart  className='w-[24px] h-[19px] text-[#000000] font-bold' />
        <CiSearch  className='w-[24px] h-[19px] text-[#000000] font-bold' />
        <IoCartOutline  className='w-[24px] h-[19px] text-[#000000] font-bold' />

        </div>
  </div>
</header>
        </div>
  )
}

export default Header

