import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function ElementLayout() {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default ElementLayout
