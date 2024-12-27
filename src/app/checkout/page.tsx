import Checkout from '@/components/Checkout/Checkout'
import Footer from '@/components/Footer'
import Common from '@/components/Shop/Common'
import Delivery from '@/components/Shop/Delivery'
import Header2 from '@/components/Shop/Header2'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header2/>
        <Common title='Check Out' subtitle='Check Out'/>
        <Checkout/>
        <Delivery/>
        <Footer/>

    </div>
  )
}

export default page