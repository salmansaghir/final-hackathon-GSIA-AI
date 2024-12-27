import React from 'react'



const Myaccount = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-10 px-6 py-10">
  {/* Login Section */}
  <div className="w-full md:w-[45%]">
    <h2 className="font-Poppins font-semibold text-[28px] md:text-[36px] mt-5 text-center md:text-left">Login</h2>
    <div className="mt-5">
      <label
        htmlFor="userName"
        className="font-Poppins font-medium text-[16px] flex flex-col"
      >
        Username or email address
      </label>
      <input
        type="text"
        placeholder="Enter your username or email"
        className="border-2 border-gray-400 rounded-lg mt-3 w-full h-[50px] px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
    <div className="mt-5">
      <label
        htmlFor="password"
        className="font-Poppins font-medium text-[16px] flex flex-col"
      >
        Password
      </label>
      <input
        type="password"
        placeholder="Enter your password"
        className="border-2 border-gray-400 rounded-lg mt-3 w-full h-[50px] px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
    <div className="flex items-center mt-5 space-x-3">
      <input type="checkbox" id="remember" className="w-4 h-4" />
      <label htmlFor="remember" className="font-Poppins font-normal text-[16px]">
        Remember me
      </label>
    </div>
    <div className="flex justify-between items-center mt-5">
      <button className="w-[150px] h-[50px] bg-[#FFF9E5] text-orange-400 border-orange-400 border-2 rounded-lg hover:bg-[#FCE4A2] transition">
        Login
      </button>
      <a
        href="#"
        className="font-Poppins font-light text-[14px] text-orange-400 underline"
      >
        Forgot Password?
      </a>
    </div>
  </div>

  {/* Register Section */}
  <div className="w-full md:w-[45%]">
    <h2 className="font-Poppins font-semibold text-[28px] md:text-[36px] mt-5 text-center md:text-left">Register</h2>
    <div className="mt-5">
      <label
        htmlFor="email"
        className="font-Poppins font-medium text-[16px] flex flex-col"
      >
        Email address
      </label>
      <input
        type="email"
        placeholder="Enter your email address"
        className="border-2 border-gray-400 rounded-lg mt-3 w-full h-[50px] px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
    <p className="font-Poppins font-light text-[14px] mt-5">
      A link to set a new password will be sent to your email address.
    </p>
    <p className="font-Poppins font-light text-[14px] mt-5 tracking-wide">
      Your personal data will be used to support your experience throughout this
      website, to manage access to your account, and for other purposes
      described in our{' '}
      <a href="#" className="font-Poppins font-bold text-[14px] text-orange-400">
        privacy policy
      </a>.
    </p>
    <button className="w-[150px] h-[50px] bg-[#FFF9E5] text-orange-400 border-orange-400 border-2 rounded-lg mt-16 hover:bg-[#FCE4A2] transition">
      Register
    </button>
  </div>
</div>

  )
}

export default Myaccount