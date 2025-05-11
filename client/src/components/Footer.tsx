import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <div className='flex items-start justify-between px-6 py-4 bg-primary'>
      <div>
        <Link to="/" className="text-white font-bold text-2xl">
          Dora<span className="text-[#7C3AED]">UI</span>
        </Link>

      </div>
      <div className='flex justify-between w-1/2'>
        <div>
          <h1 className='font-medium text-lg'>Resources</h1>
          <ul>
            <li className='text-gray-500 my-2'>CssButtons.io</li>
            <li className='text-gray-500 my-2'>Neumorphism.io</li>
          </ul>
        </div>
        <div>
          <h1 className='font-medium text-lg'>Information</h1>
          <ul>
            <li className='text-gray-500 my-2'>Blog</li>
            <li className='text-gray-500 my-2'>Post Guidelines</li>
          </ul>
        </div>
        <div>
          <h1 className='font-medium text-lg'>Legal</h1>
          <ul>
            <li className='text-gray-500 my-2'>Terms and Conditions</li>
            <li className='text-gray-500 my-2'>Privacy policy</li>
            <li className='text-gray-500 my-2'>Cookie policy</li>
            <li className='text-gray-500 my-2'>Disclaimer</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer