import React from 'react'
import { HiViewGrid } from "react-icons/hi";
import { MdOutlineViewDay } from "react-icons/md";

const Filter = () => {
  return (
    <div className='w-[1365px] h-[100px] top-[463px] bg-[#FAF4F4] flex justify-between mt-10'>
        <div className='flex gap-5 mt-8 ml-10'>
        <img src="/image/filter.png" width={19} height={16} className='w-[25px] h-[25px]'/><p className='w-[48px] h-[30px] font-Poppins font-normal text-[20px]'>filter</p> 
        <HiViewGrid className='w-[28px] h-[28px]' />
        <MdOutlineViewDay className='w-[24px] h-[24px]'  />
        <div className=""><img src="/image/line 5.png" alt="line"  width={2} height={0.5}/></div>
        <div className=''>
          <p className='ml-5 w-[215px] h-[24px] text-[16px] font-Poppins font-normal text-[#000000]'>Showing 1–16 of 32 results</p>
        </div>

        </div>

        <div className='flex gap-4 mt-5 mr-11'>
            <p className='w-[54px] h-[30px] text-[20px] font-normal font-Poppins mt-2'>Show</p>
            <input type="text" placeholder='16' className='w-[55px] h-[55px] bor text-center' />
            <p className='w-[83px] h-[30px] text-[20px] font-normal font-Poppins mt-2'>Short by</p>
            <input type="text" placeholder='Default' className='w-[188px] h-[55px] text-center'  />
        </div>

    </div>
  )
}

export default Filter