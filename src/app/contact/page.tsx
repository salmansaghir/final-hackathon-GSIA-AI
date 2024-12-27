import React from 'react'
import Header2 from '@/components/Shop/Header2'
import Common from '@/components/Shop/Common'
import Contactus,{Contactus2} from '@/components/Contact/Contactus'
import Delivery from '@/components/Shop/Delivery'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div>
      <Header2/>
      <Common title='Contact' subtitle='Contact'/>
      <Contactus/>
      <Contactus2/>
      <Delivery/>
      <Footer/>

    </div>
  )
}

export default page