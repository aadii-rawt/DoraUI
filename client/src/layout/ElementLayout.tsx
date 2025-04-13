import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const ElementLayout : React.FC = () => {
  return (
    <div className='flex relative'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default ElementLayout
