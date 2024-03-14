import React, { useState } from 'react'
import Header from '../../components/Frontend/Header'
import Footer from '../../components/Frontend/Footer'
import { Outlet } from 'react-router-dom'

import './assets/bootstrap.css'

import './assets/responsive.css'

import './assets/style.css'
import './assets/toastr.css'
import './assets/venobox.css'
import MobileHeader from '../../components/Frontend/MobileHeader'

function Layout() {

  const [sidebar, setSidebar] = useState(false)
  const handleClick = () => {
    setSidebar(!sidebar)
  }
  return (
    <div>
        <Header />
        <MobileHeader handleClick={handleClick} sidebar={sidebar} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout