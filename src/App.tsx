import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loading from '@/components/loading'

const MainLayout = lazy(() => import('@/components/layout/landing'))
const Home = lazy(() => import('@/pages/home'))
const Login = lazy(() => import('@/pages/login'))
const Signup = lazy(() => import('@/pages/signup'))

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                </Route>

                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                <Route path='/dashboard' element={<p>Dashboard</p>} />
            </Routes>
        </Suspense>
    )
}

export default App
