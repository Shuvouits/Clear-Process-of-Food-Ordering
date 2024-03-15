import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Layout from './Layout'
import AllOrder from './order/AllOrder'

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/admin/login' element={<Login />} />
                <Route path='/' element={<Layout />}>
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/all-order' element={<AllOrder />} />
                </Route>


            </Routes>
        </div>
    )
}

export default Router