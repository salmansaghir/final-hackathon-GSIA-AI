import React from 'react'
import Link from 'next/link';
interface propstype{
    title:string;
    subtitle:string;
  }
  
  const Common:React.FC<propstype> = ({title,subtitle}:propstype) => {

  return (
    <div>
            <div  className=" bg-[url('/image/bg-image2.png')] bg-no-repeat bg-center md:max-w-[1440px] h-[316px]">
            
            <div className=" w-full pl-[43%] pt-10">
            <img
            className=" pl-4 "
            alt="hero"
            src="/image/House_Logos.png"/>
              <div className="  ">
                <h1 className="  font-medium text-5xl font-Poppins text-[#000000] w-[124px] h-[72px]  ">
                {title}
                </h1>
               </div>
               <div className='flex w-full gap-1 text-center'>
                <Link href="/"><span className='text-base font-medium w-[48px] h-[24px]  font-Poppins text-[#000000]'>Home</span></Link>&gt;
                <span className='text-base font-light  font-Poppins w-[41px] h-[24px]'>{subtitle}</span>
               </div>
            </div>
          
                  </div>
    </div>
  )
}

export default Common