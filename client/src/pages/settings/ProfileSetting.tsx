import React from 'react'
import { FiTwitter, FiUser } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { LuPencilLine } from 'react-icons/lu'
import { RiBuilding2Line, RiLinkM } from 'react-icons/ri'

export const ProfileSetting  : React.FC = () => {
  return (
    <div className='w-full'>
      <h1 className='text-3xl font-semibold'>Personal Information</h1>
      <p className='text-gray-400 my-2'>This information will be displayed publicly on your profile.</p>

      <div className='mt-5'>
        <div className='grid grid-cols-2 w-full gap-10'>
          <div className='flex flex-col gap-0.5 '>
            <label htmlFor="" className='text-[15px] flex gap-1 items-center'> <FiUser /> Name</label>
            <input type="text" 
            className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            placeholder='Your name'
            />
          </div>
          <div className='flex flex-col gap-y-1' >
            <label htmlFor="" className='text-[15px] flex gap-1 items-center'><HiOutlineLocationMarker /> Location</label>
            <input type="text" 
            className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            placeholder='Your location'
            />
          </div>
        </div>

        <div className='grid grid-cols-2 w-full gap-10 mt-4'>
          <div className='flex flex-col gap-0.5 '>
            <label htmlFor="" className='text-[15px] flex gap-1 items-center'> <RiBuilding2Line /> Company</label>
            <input type="text" 
            className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            placeholder='Your Company'
            />
          </div>
          <div className='flex flex-col gap-y-1' >
            <label htmlFor="" className='text-[15px] flex gap-1 items-center'> <FiTwitter /> Twitter Handle</label>
            <input type="text" 
            className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            placeholder='Your Twitter handle (without @)'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 w-full gap-10 mt-4'>
          <div className='flex flex-col gap-0.5 '>
            <label htmlFor="" className='text-[15px] flex gap-1 items-center'> <RiLinkM /> Website</label>
            <input type="text" 
            className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            placeholder='Your website URL'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 w-full gap-10 mt-4'>
          <div className='flex flex-col gap-0.5 '>
            <label htmlFor="" className='text-[15px] flex gap-1 items-center'><LuPencilLine /> Bio</label>
            <textarea  rows={5}
            className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            placeholder='Write a few sentences about yourself'
            />
          </div>
        </div>

        <div className='flex justify-end items-center gap-5 my-5'>
          <button className='border-2 border-secondary px-3 py-1.5 font-medium rounded-md'>Cancel</button>
          <button className='bg-theme text-white px-3 py-2 font-medium rounded-md'>Save changes</button>
        </div>
      </div>
    </div>
  )
}
