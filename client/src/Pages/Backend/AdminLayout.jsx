import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


function AdminLayout() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <div class="sherah-body-area">
        <Sidebar handleSidebar={handleSidebar} sidebar={sidebar} />
        <Navbar handleSidebar={handleSidebar} />
        <Outlet />
    </div>
  )
}

export default AdminLayout