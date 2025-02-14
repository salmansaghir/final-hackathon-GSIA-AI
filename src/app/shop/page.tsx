import React from 'react'


import Header2 from '@/components/Shop/Header2';
import Common from '@/components/Shop/Common';
import Filter from '@/components/Shop/Filter';
import Products from '@/components/Shop/Products';
import Footer from '@/components/Footer';
import Delivery from'@/components/Shop/Delivery';

function page() {

  return (
    <div>
      <Header2 />
      <Common title='Shop' subtitle='Shop' />
      <Filter />
      <Products />
      <Delivery />
      <Footer />


    </div>
  );
}

export default page