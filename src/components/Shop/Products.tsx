import React from 'react'
import Link from 'next/link'

// interface Data{
//     id:number;
//     image:string;
//     title:string;
//     amount:string;
// }

const Products = () => {
    // const data:Data[]=[
    //     {
    //         id: 1,
    //         image:"/image/sofa_1.png",
    //          title:"Trenton modular sofa_3",
    //          amount:"Rs. 25,000.00"

    //     },
    //     {
    //         id: 2,
    //         image:"/image/sofa_1.png",
    //          title:"Trenton modular sofa_3",
    //          amount:"Rs. 25,000.00"

    //     },
    //     {
    //         id: 3,
    //         image:"/image/sofa_1.png",
    //          title:"Trenton modular sofa_3",
    //          amount:"Rs. 25,000.00"

    //     },
    //     {
    //         id: 4,
    //         image:"/image/sofa_1.png",
    //          title:"Trenton modular sofa_3",
    //          amount:"Rs. 25,000.00"

    //     }
    // ]
  return (
    <div>
        {/* {data.map((item)=>(
            <div className='w-[287] h-[372] ' key={item.id}>
                 <div> <Image src={item.image} alt={item.title} width={100} height={100}/></div>
                 <div><p>{item.title}</p>
                 <p>{item.amount}</p>
                 </div>
                 <div></div>
            </div>
           
        ))} */}

 <Link href={"shop/productdetail"}><section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[
        { img: '/image/sofa_1.png', title: 'Trenton modular sofa_3', price: 'Rs. 25,000.00' },
        { img: '/image/dining_table.png', title: 'Granite dining table with dining chair', price: 'Rs. 25,000.00' },
        { img: '/image/bar_table.png', title: 'Outdoor bar table and stool', price: 'Rs. 25,000.00' },
        { img: '/image/mirror.png', title: 'Plain console with teak mirror', price: 'Rs. 25,000.00' },
        { img: '/image/5.png', title: 'Grain coffee table', price: 'Rs. 15,000.00' },
        { img: '/image/4.png', title: 'Kent coffee table', price: 'Rs. 225,000.00' },
        { img: '/image/3.png', title: 'Round coffee table_color 2', price: 'Rs. 251,000.00' },
        { img: '/image/2.png', title: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00' },
        { img: '/image/6.png', title: 'Plain console_', price: 'Rs. 258,200.00' },
        { img: '/image/7.png', title: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00' },
        { img: '/image/1.png', title: 'SJP_0825', price: 'Rs. 200,000.00' },
        { img: '/image/8.png', title: 'Bella chair and table', price: 'Rs. 100,000.00' },
        { img: '/image/table.png', title: 'Plain console_', price: 'Rs. 258,200.00' },
        { img: '/image/sofa_2.png', title: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00' },
        { img: '/image/9.png', title: 'SJP_0825', price: 'Rs. 200,000.00' },
        { img: '/image/10.png', title: 'Bella chair and table', price: 'Rs. 100,000.00' },
      ].map((item, idx) => (
        <div key={idx} className="p-4">
          <div className="p-6 rounded-lg shadow-md bg-white">
            <img
              className="h-40 rounded w-full object-contain mb-4"
              src={item.img}
              alt="content"
            />
            <p className="leading-relaxed text-base">{item.title}</p>
            <p className="text-lg text-gray-900 font-medium">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section></Link>

{/* Pagination Buttons */}
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

export default Products