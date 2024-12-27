import React from 'react'
import Image from 'next/image'

function Content() {
  return (
    <div className='bg-[#FAF4F4]'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  
    <div className="flex flex-wrap ">
      <div className="md:w-1/2 p-4">
        <div className="">
          <Image
            className="h-80  object-cover object-center "
            src="/image/table.png"
            alt="content"
            width={400}
            height={400}
          />
         
         <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          Side table
          </h2>
          <p className="leading-relaxed text-base underline">
        View More.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 p-4">
        <div className="">
          <Image
            className="h-80 rounded object-cover object-center mb-6"
            src="/image/sofa.png"
            alt="content"
            width={500}
            height={500}
          />
          
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          Side table
          </h2>
          <p className="leading-relaxed text-base underline">
        View More.
          </p>
        </div>
      </div>
      
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Content

export const Content2=()=>{
    return(
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center w-full mb-20">
      <div className="lg:w-auto w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-4xl font-medium title-font mb-2 text-gray-900">
        Top Picks For You
        </h1>
        <div className="h-1 w-20 " />
      </div>
      <p className=" w-full leading-relaxed text-gray-500 text-[16px]">
      Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
      </p>
    </div>
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
    )
}

export const Content3=()=>{
    return(
        <div className='bg-[#FFF9E5]'>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src="/image/sofa_2.png"
        width={500}
            height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      New Arrivals
       
      </h1>
      
      <h1 className="title-font sm:text-7xl text-3xl mb-4 font-medium text-gray-900">
      Asgaard sofa
       
      </h1>
      <div className="flex justify-center">
        <button className="inline-flex text-[#000000] bg-[#FFF9E5] border-0 py-2 px-6 focus:outline-none rounded text-lg">
        Order Now
        </button>
        
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export const Content4=()=>{
    return(
        <div>
            <div className="text-center w-full mt-20">
      <div className="lg:w-auto w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-4xl font-medium title-font mb-2 text-gray-900">
        Our Blogs
        </h1>
        <div className="h-1 w-20 " />
      </div>
      <p className=" w-full leading-relaxed text-gray-500 text-[16px]">
      Find a bright ideal to suit your taste with our great selection
      </p>
    </div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/image/Rectangle1.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">
           
            
            <p className="leading-relaxed mb-3">
            Going all-in with millennial design
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/image/Rectangle_2.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">
          
            <p className="leading-relaxed mb-3">
            Going all-in with millennial design
            </p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/image/Rectangle_3.png"
            alt="blog"
            width={500}
            height={500}
          />
          <div className="p-6">
           
            <p className="leading-relaxed mb-3">
            Going all-in with millennial design
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className='text-center w-[100%] mb-10'>
    <h2 className='font-Poppins font-normal underline '>View All Post</h2>
</div>


        </div>
    )
}

export const Content5=()=>{
    return(
        <div  className=" bg-[url('/image/bg-image1.png')] bg-cover bg-center h-[450px]">
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-28 items-center justify-center flex-col">
    
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-7xl text-3xl mb-4 font-bold text-gray-900">
      Our Instagram
      </h1>
      <p className="mb-8 leading-relaxed">
      Follow our store on Instagram
      </p>
      <div className="flex justify-center">
       
        <button className="ml-4 inline-flex text-gray-700 bg-[#FAF4F4] border-0 py-2 px-10 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
        Follow Us
        </button>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}