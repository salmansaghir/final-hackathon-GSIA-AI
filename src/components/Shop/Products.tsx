import React from 'react'
import Image from 'next/image';
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

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/sofa_1.png"
            alt="content"
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
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/dining_table.png"
            alt="content"
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
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/bar_table.png"
            alt="content"
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
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/mirror.png"
            alt="content"
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
<div>
    {/* section 2 */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/5.png"
            alt="content"
          />
          
          <p className="leading-relaxed text-base">
          Grain coffee table
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 15,000.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/4.png"
            alt="content"
          />
          
          <p className="leading-relaxed text-base">
          Kent coffee table
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 225,000.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/3.png"
            alt="content"
          />
          
          <p className="leading-relaxed text-base">
          Round coffee table_color 2
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 251,000.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/2.png"
            alt="content"
          />
          
         
          <p className="leading-relaxed text-base">
          Reclaimed teak coffee table
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 25,200.00
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* section 3 */}
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/6.png"
            alt="content"
          />
          
          <p className="leading-relaxed text-base">
          Plain console_
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 258,200.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/7.png"
            alt="content"
          />
          
          <p className="leading-relaxed text-base">
          Reclaimed teak Sideboard
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 20,000.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/1.png"
            alt="content"
          />
          
          <p className="leading-relaxed text-base">
          SJP_0825
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 200,000.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/8.png"
            alt="content"
          />
          
         
          <p className="leading-relaxed text-base">
          Bella chair and table
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 100,000.00
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
 {/* section 4 */}
 <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/table.png"
            alt="content"
          />
          
          <p className="leading-relaxed text-base">
          Plain console_
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 258,200.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/sofa_2.png"
            alt="content"
          />
          
          <p className="leading-relaxed text-base">
          Reclaimed teak Sideboard
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 20,000.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/9.png"
            alt="content"
          />
          
          <p className="leading-relaxed text-base">
          SJP_0825
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 200,000.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/image/10.png"
            alt="content"
          />
          
         
          <p className="leading-relaxed text-base">
          Bella chair and table
          </p>
          <p className="text-lg text-gray-900 font-medium title-font mb-4">
          Rs. 100,000.00
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
</div>
  )
}

export default Products