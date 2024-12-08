import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";


const page = () => {
  return (
    <div>
        <div>
        <header className="text-[#000000] body-font bg-white">
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
        <div>
        <div  className=" bg-[url('/image/bg-image2.png')] bg-cover bg-center h-[450px]">
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-28 items-center justify-center flex-col">
  <img
  className="lg:w-20 md:w-20 w-[77px] h-[77px]"
  alt="hero"
  src="/image/House_Logos.png"
/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-7xl text-3xl mb-4 font-bold text-gray-900">
      Shop
      </h1>
      <p className="mb-8 leading-relaxed">
      Home
      </p>
      
      <div className="flex justify-center">
      <IoIosArrowForward /> 

       
      </div>
    </div>
  </div>
</section>

        </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default page