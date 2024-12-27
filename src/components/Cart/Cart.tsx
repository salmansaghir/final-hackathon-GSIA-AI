'use client';
import { useState } from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

const Cart = () => {
  const initialItems = [
    {
      id: 1,
      img: "/image/sofa_2.png",
      name: "Asgaard sofa",
      price: 250000.0,
      quantity: 1,
    },
    {
      id: 2,
      img: "/image/sofa_1.png",
      name: "Odyssey Sofa",
      price: 175000.0,
      quantity: 2,
    },
  ];

  const [cartItems, setCartItems] = useState(initialItems);

  // Function to update quantity
  const updateQuantity = (id:number, quantity:number) => {
    if (quantity < 1) return; // Avoid negative quantities
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Function to remove item from cart
  const removeItem = (id:number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate subtotal, tax, and total
  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.18; // Example tax rate of 18%
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateTotals();

  return (
    <div className="flex flex-col md:flex-row gap-8 px-5 md:px-10 py-5">
      {/* Left: Product List Table */}
      <div className="w-full md:w-[65%]">
        <ul className="bg-[#FFF9E5] w-full flex justify-between items-center px-4 py-3 rounded-t-lg">
          <li className="font-medium font-Poppins text-[14px] md:text-[16px]">Image</li>
          <li className="font-medium font-Poppins text-[14px] md:text-[16px] flex-1">Product</li>
          <li className="font-medium font-Poppins text-[14px] md:text-[16px] flex-1">Price</li>
          <li className="font-medium font-Poppins text-[14px] md:text-[16px] flex-1">Quantity</li>
          <li className="font-medium font-Poppins text-[14px] md:text-[16px] flex-1">Subtotal</li>
          <li></li>
        </ul>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <ul
            key={item.id}
            className="flex justify-between items-center px-4 py-4 border-b"
          >
            <li className="w-[70px] md:w-[100px] flex-shrink-0">
              <Image
                src={item.img}
                alt="sofa image"
                width={70}
                height={70}
                className="rounded-md"
              />
            </li>
            <li className="font-normal font-Poppins text-[14px] md:text-[16px] text-[#9F9F9F] flex-1">
              {item.name}
            </li>
            <li className="font-normal font-Poppins text-[14px] md:text-[16px] text-[#9F9F9F] flex-1">
              Rs. {item.price.toLocaleString()}
            </li>
            <li className="flex items-center flex-1">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                className="border-2 border-gray-400 rounded w-[50px] h-[32px] text-center"
              />
            </li>
            <li className="font-Poppins font-medium text-[14px] md:text-[16px] flex-1">
              Rs. {(item.price * item.quantity).toLocaleString()}
            </li>
            <li>
              <MdDelete
                onClick={() => removeItem(item.id)}
                className="text-[#FBEBB5] w-[24px] h-[24px] cursor-pointer"
              />
            </li>
          </ul>
        ))}
      </div>

      {/* Right: Cart Totals Section */}
      <div className="w-full md:w-[35%] bg-[#FFF9E5] text-center p-6 rounded-lg mx-auto md:mx-0 mt-8 md:mt-0">
        <h2 className="font-Poppins font-semibold text-[24px] md:text-[32px]">Cart Totals</h2>
        <div className="mt-6">
          <p className="font-Poppins font-medium text-[14px] md:text-[16px]">
            Subtotal
            <span className="font-Poppins font-normal text-[14px] md:text-[16px] text-[#9F9F9F] ml-5">
              Rs. {subtotal.toLocaleString()}
            </span>
          </p>
          <p className="font-Poppins font-medium text-[14px] md:text-[16px] mt-4">
            Tax (18%)
            <span className="font-Poppins font-normal text-[14px] md:text-[16px] text-[#9F9F9F] ml-5">
              Rs. {tax.toLocaleString()}
            </span>
          </p>
          <p className="font-Poppins font-medium text-[14px] md:text-[16px] mt-4">
            Total
            <span className="font-Poppins font-normal text-[14px] md:text-[16px] text-[#B88E2F] ml-5">
              Rs. {total.toLocaleString()}
            </span>
          </p>
        </div>
        <Link href={'/checkout'}><button className="w-full md:w-[70%] h-[50px] bg-[#FFF9E5] text-orange-400 border-orange-400 border-2 rounded-lg mt-8 hover:bg-[#FCE4A2] transition">
          Check Out
        </button></Link>
      </div>
    </div>
  );
};

export default Cart;
