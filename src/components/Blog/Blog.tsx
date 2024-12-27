import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";
import { TbTagFilled } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";


const Blog = () => {
  return (
<div className="w-full">
  <div className="flex flex-col md:flex-row justify-around">
    {/* Blog Section */}
    <div className="flex flex-col gap-10 w-full md:w-2/3 px-4">
      {[
        {
          img: '/image/blog_8.png',
          title: 'Exploring new ways of decorating',
          para:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde omnis ipsa praesentium! Libero vel voluptatum, provident exercitationem, eius incidunt delectus voluptates dicta laudantium obcaecati, vitae mollitia nisi ullam repellat.',
        },
        {
          img: '/image/blog_7.png',
          title: 'Exploring new ways of decorating',
          para:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde omnis ipsa praesentium! Libero vel voluptatum, provident exercitationem, eius incidunt delectus voluptates dicta laudantium obcaecati, vitae mollitia nisi ullam repellat.',
        },
        {
          img: '/image/blog_6.png',
          title: 'Handmade pieces that took time to make',
          para:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde omnis ipsa praesentium! Libero vel voluptatum, provident exercitationem, eius incidunt delectus voluptates dicta laudantium obcaecati, vitae mollitia nisi ullam repellat.',
        },
      ].map((item, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={item.img}
            alt="blogimage"
            className="w-full rounded-lg"
          />
          <div className="flex items-center text-gray-400 gap-2 mt-4">
            <FaUser />
            <p className="font-Poppins text-[14px]">Admin</p>
            <IoCalendarClear />
            <p className="font-Poppins text-[14px]">14 Oct 2022</p>
            <TbTagFilled />
            <p className="font-Poppins text-[14px]">Wood</p>
          </div>
          <h2 className="font-Poppins font-medium text-xl mt-4">
            {item.title}
          </h2>
          <p className="font-Poppins text-[14px] text-gray-500 mt-2">
            {item.para}
          </p>
          <p className="font-Poppins text-[14px] text-blue-500 underline mt-4">
            Read more
          </p>
        </div>
      ))}
    </div>

    {/* Sidebar Section */}
    <div className="w-full md:w-1/3 px-4">
      {/* Search Input */}
      <div className="flex items-center border-2 rounded-lg overflow-hidden w-full p-2">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 border-none outline-none px-2 text-[14px]"
        />
        <CiSearch className="text-gray-500 text-lg" />
      </div>

      {/* Categories */}
      <div className="mt-10">
        <h2 className="font-Poppins font-medium text-xl mb-4">Categories</h2>
        <div>
          <ul>
            {[
              { name: 'Crafts', count: '2' },
              { name: 'Design', count: '8' },
              { name: 'Handmade', count: '7' },
              { name: 'Interior', count: '1' },
              { name: 'Wood', count: '6' },
            ].map((category, idx) => (
              <li
                key={idx}
                className="flex justify-between font-Poppins text-[14px] text-gray-500 mt-7"
              >
                <span>{category.name}</span>
                <span>{category.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="mt-10">
        <h2 className="font-Poppins font-medium text-xl mb-4">
          Recent Posts
        </h2>
        <div className="flex flex-col gap-4">
          {[
            {
              img: 'image/blog_5.png',
              title: 'Going all-in with millennial design',
              date: '03 Aug 2022',
            },
            {
              img: 'image/bog_4.png',
              title: 'Exploring new ways of decorating',
              date: '03 Aug 2022',
            },
            {
              img: 'image/blog_3.png',
              title: 'Handmade pieces that took time to make',
              date: '03 Aug 2022',
            },
            {
                img: 'image/blog_2.png',
                title: 'Modern home in Milan',
                date: '03 Aug 2022',
              },
              {
                img: 'image/blog_1.png',
                title: 'Colourful office redesign',
                date: '03 Aug 2022',
              },
            
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-center">
              <img
                src={item.img}
                alt="recent-post"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <p className="font-Poppins text-[14px]">{item.title}</p>
                <p className="font-Poppins text-[12px] text-gray-400">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="flex gap-3 justify-center mt-10">
  {['1', '2', '3', 'Next'].map((item, idx) => (
    <button
      key={idx}
      className={`px-6 py-2 rounded-md ${
        item === '1' ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
      }`}
    >
      {item}
    </button>
  ))}
</div>
</div>


  )
}

export default Blog