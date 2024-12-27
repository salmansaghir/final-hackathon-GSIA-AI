import React from 'react'
import { HiViewGrid } from "react-icons/hi";
import { MdOutlineViewDay } from "react-icons/md";

const Filter = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto bg-[#FAF4F4] flex flex-col md:flex-row justify-between items-center md:items-start mt-10 px-4 md:px-10 py-6">
    {/* Left Section */}
    <div className="flex gap-4 items-center mb-6 md:mb-0 w-full md:w-auto justify-between">
      <img src="/image/filter.png" width={19} height={16} className="w-[25px] h-[25px]" />
      <p className="text-[14px] sm:text-[16px] md:text-[18px] font-Poppins font-normal text-[#000000]">Filter</p>
      <HiViewGrid className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
      <MdOutlineViewDay className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" />
      <div>
        <img src="/image/line 5.png" alt="line" width={2} height={0.5} />
      </div>
      <div>
        <p className="ml-5 text-[12px] sm:text-[14px] md:text-[16px] font-Poppins font-normal text-[#000000]">
          Showing 1–16 of 32 results
        </p>
      </div>
    </div>
  
    {/* Right Section */}
    <div className="flex flex-wrap justify-between md:justify-end items-center gap-4 md:gap-6 w-full md:w-auto">
      {/* Show Input Section */}
      <div className="flex items-center gap-2">
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal font-Poppins">Show</p>
        <input
          type="text"
          placeholder="16"
          className="w-[60px] h-[40px] sm:w-[80px] sm:h-[45px] border text-center text-sm sm:text-base md:w-[100px] md:h-[50px] rounded-md"
        />
      </div>
  
      {/* Short by Input Section */}
      <div className="flex items-center gap-2">
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal font-Poppins">Short by</p>
        <input
          type="text"
          placeholder="Default"
          className="w-[140px] h-[40px] sm:w-[160px] sm:h-[45px] text-center border text-sm sm:text-base md:w-[200px] md:h-[50px] rounded-md"
        />
      </div>
    </div>
  </div>
  
  
  
  )
}

export default Filter