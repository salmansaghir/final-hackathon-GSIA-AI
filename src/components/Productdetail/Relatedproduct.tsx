import React from 'react'
import Image from 'next/image'

const Relatedproduct = () => {
  return (
    <div>
        <div className='text-center mt-10'>
            <h2 className='font-Poppins font-medium text-[36px]'>Related Products</h2>
        </div>
        <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/sofa_1.png"
            alt="content"
            width={500}
            height={500}
          />
          
          <p className="leading-relaxed text-base">
          Trenton modular sofa_3
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 25,000.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/dining_table.png"
            alt="content"
            width={500}
            height={500}
          />
          
          <p className="leading-relaxed text-base">
          Granite dining table with dining chair
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 25,000.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/bar_table.png"
            alt="content"
            width={500}
            height={500}
          />
          
          <p className="leading-relaxed text-base">
          Outdoor bar table and stool
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 25,000.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/mirror.png"
            alt="content"
            width={500}
            height={500}
          />
          
         
          <p className="leading-relaxed text-base">
          Plain console with teak mirror
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 25,000.00
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<div className='text-center w-[100%] mb-10'>
    <h2 className='font-Poppins font-normal underline '>View More</h2>
</div>
        </div>
    </div>
  )
}

export default Relatedproduct