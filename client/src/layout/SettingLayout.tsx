import React from 'react'
import { FiUser } from 'react-icons/fi'
import { MdAlternateEmail } from 'react-icons/md'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { NavLink, Outlet } from 'react-router-dom'

const SettingLayout  : React.FC = () => {
  return (
    <div className='flex px-6 pt-8 gap-5 border-b-2 border-third'>
        <div className='px-4 min-w-[250px] border-r-2 border-third '>
            <h1 className='font-semibold text-xl px-5 '>Settings</h1>
            <div className='flex flex-col gap-1 justify-start mt-4'>
                <NavLink to='/setting/profile' className={(({isActive}) => `${isActive && "bg-third text-white"} text-gray-400 hover:bg-third py-1.5 px-5 rounded font-medium text-[15px] flex items-center gap-2`)}><FiUser /> Profile</NavLink>
                <NavLink to='/setting/email' className={(({isActive}) => `${isActive && "bg-third text-white"} text-gray-400 hover:bg-third py-1.5 px-5 rounded font-medium text-[15px] flex items-center gap-2`)}> <MdAlternateEmail />Email</NavLink>
                <NavLink to='/setting/stats' className={(({isActive}) => `${isActive && "bg-third text-white"} text-gray-400 hover:bg-third py-1.5 px-5 rounded font-medium text-[15px] flex items-center gap-2`)}><TbBrandGoogleAnalytics /> Stats</NavLink>
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default SettingLayout