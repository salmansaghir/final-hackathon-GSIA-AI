import React from 'react'
import Common from '@/components/Shop/Common'
import Header2 from '@/components/Shop/Header2'
import Myaccount from '@/components/Myaccount/Myaccount'
import Delivery from '@/components/Shop/Delivery'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div>
        <Header2/>
        <Common title='My Account' subtitle='My Account'/>
        <Myaccount/>
        <Delivery/>
        <Footer/>


    </div>
  )
}

export default page