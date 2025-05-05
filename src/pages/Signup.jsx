import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";




const Signup = () => {
  const [hidepassword, setHidePassword] = useState(true);
  const [showpassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setHidePassword(!hidepassword)
};

const togPassword = () => {
  setShowPassword(!showpassword)
};
  

  return(
  <div className='min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center'>
    <div className="bg-gray-100 p-8 rounded-2xl shadow-2xl w-full max-w-md">
    <h1 className='text-4xl font-bold text-center text-indigo-800 mb-6'>Sign up</h1>
    <form action="" className='space-y-6'>
      <div>
        <input type="text"
          placeholder='Full Name'
          className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
      </div>

      <div>
        <input type="text"
          placeholder='Email Address'
          className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
      </div>

      <div className='relative'>
      {hidepassword ? <FaEyeSlash onClick={togglePassword} className='absolute right-5 top-5' /> : <FaEye className='absolute right-5 top-5'/>}
        <input type={hidepassword ? "password" : "text"}
          placeholder='Password'
          className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
      </div>

      <div className='relative'>
        {hidepassword ? <FaEyeSlash onClick={togglePassword} className='absolute right-5 top-5' /> : <FaEye className='absolute right-5 top-5'/>}
        
        <input type="password"
          placeholder='Confirm password'
          className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Create an Account
      </button>

    </form>

    <div className="text-center mt-4 text-sm text-gray-600">
          <a href="#" className="hover:underline">
            Sign up with Google
          </a>{" "}
          |
          <a href="#" className="hover:underline ml-2">
            Already Signup? Login
          </a>
        </div>
    </div>
    
  </div>
  )
}

export default Signup