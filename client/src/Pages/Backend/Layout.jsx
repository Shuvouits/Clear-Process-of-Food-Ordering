import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div class="sherah-body-area">
        <Sidebar />
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout