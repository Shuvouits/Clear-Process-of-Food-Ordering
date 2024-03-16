import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


function AdminLayout() {
  return (
    <div class="sherah-body-area">
        <Sidebar />
        <Navbar />
        <Outlet />
    </div>
  )
}

export default AdminLayout