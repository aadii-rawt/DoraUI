import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import React from 'react'
import SignupModal from '../components/SignupModal'
import useAuthContext from "../context/userContext";

const RootLayout: React.FC = () => {
    const { showSigninModal, setShowSigninModal } = useAuthContext()
    return (
        <div className='bg-primary text-white w-full min-h-screen'>
            <header className='bg-gradient-to-r from-purple-500 to-indigo-500 text-center'>
                <h1 className='font-medium'>🚧 Site Under Construction 🚧 </h1>
                <p className='text-sm'>Some features are still being built. </p>
            </header>
            <Header />
            <Outlet />
            <Footer />

            {showSigninModal && <SignupModal setShowSigninModal={setShowSigninModal} />}
        </div>
    )
}

export default RootLayout
