import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import Header2 from '@/components/Shop/Header2';
import Common from '@/components/Shop/Common';
import Filter from '@/components/Shop/Filter';
import Products from '@/components/Shop/Products';
import Footer from '@/components/Footer';

const page= () => {
  const imgUrl='/image/sofa.png';
  return (
    <div>
        <Header2/>
        <Common title='Shop' subtitle='Shop' />
        <Filter/>
        <Products/>
        <Footer/>
      
        
    </div>
  )
}

export default page