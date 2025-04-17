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
            <Header />
            <Outlet />
            {/* <Footer /> */}

            {showSigninModal && <SignupModal showSigninModal={showSigninModal} setShowSigninModal={setShowSigninModal} />}
        </div>
    )
}

export default RootLayout
