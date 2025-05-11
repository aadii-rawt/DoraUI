import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const SettingLayout  : React.FC = () => {
  return (
    <div className='flex px-6 py-8 gap-5'>
        <div className='px-4 min-w-[250px] border-r-2 border-third '>
            <h1 className='font-semibold text-xl px-5 '>Settings</h1>
            <div className='flex flex-col gap-1 justify-start mt-4'>
                <NavLink to='/setting/profile' className={(({isActive}) => `${isActive && "bg-third text-white"} text-gray-400 hover:bg-third py-1.5 px-5 rounded font-medium text-[15px] `)}>Profile</NavLink>
                <NavLink to='/setting/mail' className={(({isActive}) => `${isActive && "bg-third text-white"} text-gray-400 hover:bg-third py-1.5 px-5 rounded font-medium text-[15px] `)}>Email</NavLink>
                <NavLink to='/setting/stats' className={(({isActive}) => `${isActive && "bg-third text-white"} text-gray-400 hover:bg-third py-1.5 px-5 rounded font-medium text-[15px] `)}>Stats</NavLink>
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default SettingLayout