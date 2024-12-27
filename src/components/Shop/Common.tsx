import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface propstype {
  title: string;
  subtitle: string;
}

const Common: React.FC<propstype> = ({ title, subtitle }: propstype) => {
  return (
    <div className="w-full">
      <div className="bg-[url('/image/bg-image2.png')] bg-no-repeat bg-center bg-cover md:max-w-[1440px] h-[316px] flex justify-center items-center">
        <div className="w-full px-4 text-center">
          <Image
            className="mx-auto mb-4"
            alt="hero"
            src="/image/House_Logos.png"
            width={100}
            height={100}
          />
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-Poppins text-[#000000] font-medium">
              {title}
            </h1>
          </div>
          <div className="flex justify-center items-center gap-1 text-center mt-3">
            <Link href="/">
              <span className="text-sm sm:text-base font-medium font-Poppins text-[#000000]">
                Home
              </span>
            </Link>
            <span className="text-sm sm:text-base font-light font-Poppins text-[#000000]">
              &gt; {subtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Common;

