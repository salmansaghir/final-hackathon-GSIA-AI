import React from 'react'

function Delivery() {
  return (
    <div className="w-full bg-[#FAF4F4] py-10 mt-10">
    <div className='w-full flex flex-col md:flex-row items-center gap-5 justify-evenly px-4 md:px-10'>
      {/* First Card */}
      <div className='w-full md:w-[376px] h-auto text-center bg-white p-5 rounded-lg shadow-lg'>
        <h2 className='font-Poppins font-medium text-[24px] sm:text-[28px] md:text-[32px]'>
          Free Delivery
        </h2>
        <p className='font-Poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#9F9F9F]'>
          For all orders over $50, consectetur adipim scing elit.
        </p>
      </div>
  
      {/* Second Card */}
      <div className='w-full md:w-[376px] h-auto text-center bg-white p-5 rounded-lg shadow-lg'>
        <h2 className='font-Poppins font-medium text-[24px] sm:text-[28px] md:text-[32px]'>
          90 Days Return
        </h2>
        <p className='font-Poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#9F9F9F]'>
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
  
      {/* Third Card */}
      <div className='w-full md:w-[376px] h-auto text-center bg-white p-5 rounded-lg shadow-lg'>
        <h2 className='font-Poppins font-medium text-[24px] sm:text-[28px] md:text-[32px]'>
          Secure Payment
        </h2>
        <p className='font-Poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#9F9F9F]'>
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </div>
  </div>
  
  

  
  
  )
}

export default Delivery