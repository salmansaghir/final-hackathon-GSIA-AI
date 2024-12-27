import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contactus = () => {
  return (
    <div>
        <div className="w-full mt-14 px-4 md:px-10">
  {/* Title */}
  <h2 className="font-Poppins text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-center">
    Get In Touch With Us
  </h2>

  {/* Description */}
  <p className="font-Poppins font-normal text-[14px] sm:text-[16px] md:text-[18px] text-center mt-4 max-w-screen-sm mx-auto">
    For more information about our product & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
  </p>
</div>

    </div>
  )
}

export default Contactus


export const Contactus2 = () =>{
    return(
        <div>
            <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
        
          <h2 className="title-font font-Poppins font-medium text-gray-900 tracking-widest text-2xl flex gap-2">
          <IoLocationSharp /> ADDRESS
          </h2>
          <p className="mt-1 text-[16px] font-Poppins font-normal">
          236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-medium font-Poppins text-gray-900 tracking-widest text-2xl flex gap-2">
          <MdAccessTimeFilled /> Working Time
          </h2>
          <a className="text-indigo-500 leading-relaxed">Monday-Friday: 9:00 - 22:00 <br/> Saturday-Sunday: 9:00 - 21:00</a>
          <h2 className="title-font font-medium font-Poppins text-gray-900 tracking-widest text-2xl flex gap-2 mt-2">
          <FaPhone /> PHONE
          </h2>
          <p className="leading-relaxed">Mobile: +(84) 546-6789 <br/> Hotline: +(84) 456-6789</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
     
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Abc'
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Abc@email.com'
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Subject
        </label>
        <input
          type="subject"
          id="subject"
          name="subject"
          placeholder='This is an optional'
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder='Hi! i’d like to ask about'
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-amber-500 bg-[#FFF9E5] border-amber-500 border-2 py-2 px-6 focus:outline-none rounded text-lg">
       Submit
      </button>
      
    </div>
  </div>
</section>

        </div>
    )
}