"use client";
import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and close icons
import { useState } from "react";
import Image from 'next/image';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
     <div>
      <header className="text-[#000000] bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#000000]">
        <Image src="/image/House_logos.png" alt="logo" width={50} height={50} />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#000000] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <HiX className="w-8 h-8" />
            ) : (
              <HiMenuAlt3 className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-5 md:gap-8 md:items-center w-full md:w-auto mt-5 md:mt-0`}
        >
          <Link href="/" className="hover:text-gray-900 text-base">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-900 text-base">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-900 text-base">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-900 text-base">
            Contact
          </Link>
        </nav>

        {/* Icon Section */}
        <div className="flex items-center gap-6">
         <Link href='/myaccount'> <CiUser
            className="w-[24px] h-[24px] text-[#000000]"
            aria-label="User"
          /></Link>
          <CiHeart
            className="w-[24px] h-[24px] text-[#000000]"
            aria-label="Favorites"
          />
          <CiSearch
            className="w-[24px] h-[24px] text-[#000000]"
            aria-label="Search"
          />
          <Link href='/cart'><IoCartOutline
            className="w-[24px] h-[24px] text-[#000000]"
            aria-label="Cart"
          /></Link>
        </div>
      </div>
    </header>
      

        </div>
  )
}

export default Header2

