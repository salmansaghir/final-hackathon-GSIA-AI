import Cart from '@/components/Cart/Cart'
import Common from '@/components/Shop/Common'
import Header2 from '@/components/Shop/Header2'
import React from 'react'
import Delivery from '@/components/Shop/Delivery'
import Footer from '@/components/Footer'

function page() {
  return (
    <div>
        <Header2/>
        <Common title='Cart' subtitle='Cart'/>
        <Cart/>
        <Delivery/>
        <Footer/>


    </div>
  )
}

export default page