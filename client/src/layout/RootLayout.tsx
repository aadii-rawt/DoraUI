import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import React from 'react'

const RootLayout : React.FC = () =>  {
    return (
        <div className='bg-primary text-white w-full min-h-screen'>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default RootLayout
