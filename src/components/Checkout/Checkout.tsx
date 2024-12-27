import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"


const Checkout = () => {
  return (
<div className='md:flex flex-wrap justify-between mx-10 pt-10'>
  <div className='max-w-[608px] w-full h-auto'>
    <h1 className='font-Poppins font-semibold text-[36px] mb-10'>Billing details</h1>
    <div className='flex flex-col md:flex-row gap-7'>
      <div className='w-full md:w-[211px]'>
        <label htmlFor="fullName" className='font-Poppins font-medium text-[16px]'>Full Name</label>
        <br />
        <input type="text" className='w-full h-[75px] rounded-lg border-2 border-[#9F9F9F]' />
      </div>
      <div className='w-full md:w-[211px]'>
        <label htmlFor="lastName" className='font-Poppins font-medium text-[16px]'>Last Name</label>
        <br />
        <input type="text" className='w-full h-[75px] rounded-lg border-2 border-[#9F9F9F]' />
      </div>
    </div>
    <div className='mt-10'>
      <label htmlFor="companyName" className='font-Poppins font-medium text-[16px]'>Company Name (Optional)</label>
      <br />
      <input type="text" className='w-full md:w-[453px] h-[75px] rounded-lg border-2 border-[#9F9F9F]' />
    </div>
    <div className='mt-10'>
      <label htmlFor="country" className='font-Poppins font-medium text-[16px]'>Country / Region</label>
      <br />
      <Select>
        <SelectTrigger className="w-full md:w-[453px] h-[75px]">
          <SelectValue placeholder="Pakistan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Pakistan</SelectItem>
          <SelectItem value="dark">India</SelectItem>
          <SelectItem value="system">America</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className='mt-10'>
      <label htmlFor="address" className='font-Poppins font-medium text-[16px]'>Street address</label>
      <br />
      <input type="text" className='w-full md:w-[453px] h-[75px] rounded-lg border-2 border-[#9F9F9F]' />
    </div>
    <div className='mt-10'>
      <label htmlFor="city" className='font-Poppins font-medium text-[16px]'>Town / City</label>
      <br />
      <input type="text" className='w-full md:w-[453px] h-[75px] rounded-lg border-2 border-[#9F9F9F]' />
    </div>
    <div className='mt-10'>
      <label htmlFor="province" className='font-Poppins font-medium text-[16px]'>Province</label>
      <br />
      <Select>
        <SelectTrigger className="w-full md:w-[453px] h-[75px]">
          <SelectValue placeholder="Province" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Sindh</SelectItem>
          <SelectItem value="dark">Ablochistan</SelectItem>
          <SelectItem value="system">Punjab</SelectItem>
          <SelectItem value="system">KPK</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className='mt-10'>
      <label htmlFor="zipCode" className='font-Poppins font-medium text-[16px]'>ZIP code</label>
      <br />
      <input type="text" className='w-full md:w-[453px] h-[75px] rounded-lg border-2 border-[#9F9F9F]' />
    </div>
    <div className='mt-10'>
      <label htmlFor="phone" className='font-Poppins font-medium text-[16px]'>Phone</label>
      <br />
      <input type="text" className='w-full md:w-[453px] h-[75px] rounded-lg border-2 border-[#9F9F9F]' />
    </div>
    <div className='mt-10'>
      <label htmlFor="email" className='font-Poppins font-medium text-[16px]'>Email address</label>
      <br />
      <input type="text" className='w-full md:w-[453px] h-[75px] rounded-lg border-2 border-[#9F9F9F]' />
    </div>
    <div className='mt-10'>
      <input type="text" placeholder='Additional Information' className='w-full md:w-[453px] h-[75px] rounded-lg border-2 border-[#9F9F9F]' />
    </div>
  </div>
  
  {/* Summary and Payment Section */}
  <div className='max-w-[608px] w-full h-auto'>
    <div className='flex justify-between border-b-2 border-gray-300 pb-5'>
      <ul>
        <li className='font-Poppins font-medium text-[24px]'>Product</li>
        <li className='font-Poppins font-normal text-[16px] text-[#9F9F9F]'>Asgaard sofa x 1</li>
        <li className='font-Poppins font-normal text-[16px]'>Subtotal</li>
        <li className='font-Poppins font-normal text-[16px]'>Total</li>
      </ul>
      <ul>
        <li className='font-Poppins font-medium text-[24px]'>Subtotal</li>
        <li className='font-Poppins font-light text-[16px]'>Rs. 250,000.00</li>
        <li className='font-Poppins font-light text-[16px]'>Rs. 250,000.00</li>
        <li className='font-Poppins font-bold text-[24px] text-[#B88E2F]'>Rs. 250,000.00</li>
      </ul>
    </div>
    
    <div className='mt-10'>
      <p className='font-Poppins font-normal text-[16px] mb-5'>Direct Bank Transfer</p>
      <p className='font-Poppins font-light text-[16px] text-[#9F9F9F] mb-5'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
      
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one" className='font-Poppins font-medium text-[16px] text-[#9F9F9F]'>Direct Bank Transfer</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two" className='font-Poppins font-medium text-[16px] text-[#9F9F9F]'>Cash On Delivery</Label>
        </div>
      </RadioGroup>
      
      <p className='font-Poppins font-light text-[16px] mt-5 text-justify'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-Poppins font-semibold text-[16px]'>privacy policy.</span></p>
    </div>
    
    <div className='text-center mt-5'>
      <Button variant="outline" className='w-full md:w-[318px] h-[64px]'>Place order</Button>
    </div>
  </div>
</div>

  )
}

export default Checkout