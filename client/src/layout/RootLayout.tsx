
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function RootLayout() {
    return (
        <div className='bg-primary text-white w-full min-h-screen'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout
