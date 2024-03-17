import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import ScrollTop from '../../components/Frontend/ScrollTop';


function AdminLayout() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <div class="sherah-body-area">
      <ScrollTop />
        <Sidebar handleSidebar={handleSidebar} sidebar={sidebar} />
        <Navbar handleSidebar={handleSidebar} />
        <Outlet />
    </div>
  )
}

export default AdminLayout