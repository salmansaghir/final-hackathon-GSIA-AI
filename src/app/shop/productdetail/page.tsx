import React from 'react'
import Header2 from '@/components/Shop/Header2'
import Productdetail from '@/components/Productdetail/Productdetail'
import Additionalinfo from '@/components/Productdetail/Additionalinfo'
import Relatedproduct from '@/components/Productdetail/Relatedproduct'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div>
        <Header2/>
       < Productdetail/>
       <Additionalinfo/>
       <Relatedproduct/>
       <Footer/>

    </div>
  )
}

export default page