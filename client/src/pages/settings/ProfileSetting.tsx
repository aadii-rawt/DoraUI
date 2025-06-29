import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react'
import { FiTwitter, FiUser } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { LuPencilLine } from 'react-icons/lu'
import { RiBuilding2Line, RiLinkM } from 'react-icons/ri'
import useAuthContext from '../../context/userContext'

export const ProfileSetting: React.FC = () => {
  const { user, setUser } = useAuthContext()
  const [formData, setFormData] = useState({
    displayName: user?.displayName || '',
    location: user?.location || '',
    company: user?.company || '',
    twitter: user?.twitter ||  '',
    website: user?.website ||  '',
    bio: user?.bio ||  ''
  })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/me", {
          withCredentials: true, // ✅ Required to send cookies
        });
        console.log(res);

      } catch (err) {
        console.log("User not logged in");
        // setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.put('/user/update', {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()
      if (response.ok) {
        alert('Profile updated successfully!')
      } else {
        alert(`Error: ${result.message}`)
      }
    } catch (error) {
      console.error('Update error:', error)
    }
  }

  return (
    <div className='w-full'>
      <h1 className='text-3xl font-semibold'>Personal Information</h1>
      <p className='text-gray-400 my-2'>This information will be displayed publicly on your profile.</p>

      <div className='mt-5'>
        <div className='grid grid-cols-2 w-full gap-10'>
          <div className='flex flex-col gap-0.5 '>
            <label className='text-[15px] flex gap-1 items-center'><FiUser /> Name</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              placeholder='Your name'
              className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            />
          </div>
          <div className='flex flex-col gap-y-1'>
            <label className='text-[15px] flex gap-1 items-center'><HiOutlineLocationMarker /> Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder='Your location'
              className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            />
          </div>
        </div>

        <div className='grid grid-cols-2 w-full gap-10 mt-4'>
          <div className='flex flex-col gap-0.5 '>
            <label className='text-[15px] flex gap-1 items-center'><RiBuilding2Line /> Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder='Your Company'
              className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            />
          </div>
          <div className='flex flex-col gap-y-1'>
            <label className='text-[15px] flex gap-1 items-center'><FiTwitter /> Twitter Handle</label>
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              placeholder='Your Twitter handle (without @)'
              className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 w-full gap-10 mt-4'>
          <div className='flex flex-col gap-0.5 '>
            <label className='text-[15px] flex gap-1 items-center'><RiLinkM /> Website</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder='Your website URL'
              className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 w-full gap-10 mt-4'>
          <div className='flex flex-col gap-0.5 '>
            <label className='text-[15px] flex gap-1 items-center'><LuPencilLine /> Bio</label>
            <textarea
              rows={5}
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder='Write a few sentences about yourself'
              className='bg-transparent border-2 border-secondary rounded-md px-3 py-1 text-[15px] outline-none focus-within:border-theme'
            />
          </div>
        </div>

        <div className='flex justify-end items-center gap-5 my-5'>
          <button className='border-2 border-secondary px-3 py-1.5 font-medium rounded-md'>Cancel</button>
          <button
            onClick={handleSubmit}
            className='bg-theme text-white px-3 py-2 font-medium rounded-md'
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  )
}
