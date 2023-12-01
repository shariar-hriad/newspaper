import { Outlet } from 'react-router-dom'

import { Toaster } from '@/components/ui/toaster'
import Footer from './footer'
import Header from './header'

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Toaster />
            <Footer />
        </>
    )
}

export default index
