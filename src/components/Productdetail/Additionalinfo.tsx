import React from 'react'
import Image from 'next/image'

const Additionalinfo = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="flex flex-wrap justify-center mt-10 text-black gap-5 sm:gap-10">
        <h2 className="font-Poppins font-normal text-lg sm:text-2xl">Description</h2>
        <h2 className="font-Poppins font-normal text-lg sm:text-2xl text-gray-500">Additional Information</h2>
        <h2 className="font-Poppins font-normal text-lg sm:text-2xl text-gray-500">Reviews [5]</h2>
      </div>

      {/* Description Text */}
      <div className="text-justify flex flex-col mx-5 sm:mx-10 md:mx-32 mt-10">
        <p className="font-Poppins font-normal text-sm sm:text-base text-gray-500">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <br />
        <p className="font-Poppins font-normal text-sm sm:text-base text-gray-500">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center sm:justify-between mt-10 gap-5 sm:gap-10">
        <div className="w-full sm:w-[48%]">
          <Image 
            src="/image/sofa.png" 
            alt="sofa" 
            width={605} 
            height={348} 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full sm:w-[48%]">
          <Image 
            src="/image/sofa11.png" 
            alt="sofa" 
            width={605} 
            height={348} 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Additionalinfo