import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-[#FBEBB5]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-0 ">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
      Rocket single 
        <br className="hidden lg:inline-block" />
        seater
      </h1>
     
      <div className="flex justify-center">
        <Link href={'/shop'}><button className="inline-flex text-[#000000] border-0 py-2 px-6 focus:outline-none hover:bg-[#FBEBB5] rounded text-lg underline">
        Shop Now
        </button></Link>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="/image/seater1.png"
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero