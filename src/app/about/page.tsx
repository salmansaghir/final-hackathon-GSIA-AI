import React from 'react'
import Header2 from '@/components/Shop/Header2'
import Common from '@/components/Shop/Common'
import Blog from '@/components/Blog/Blog'
import Delivery from '@/components/Shop/Delivery'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Header2/>
      <Common title='Blog' subtitle='Blog'/>
      <Blog/>
      <Delivery/>
      <Footer/>
    </div>
  )
}

export default page