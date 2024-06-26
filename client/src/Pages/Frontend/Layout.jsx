import React, { useState, createContext } from 'react'
import Header from '../../components/Frontend/Header'
import Footer from '../../components/Frontend/Footer'
import { Outlet } from 'react-router-dom'

import './assets/bootstrap.css'
import './assets/responsive.css'
import './assets/style.css'
import './assets/toastr.css'
import './assets/venobox.css'

import MobileHeader from '../../components/Frontend/MobileHeader'
import ScrollTop from '../../components/Frontend/ScrollTop'
import Cart from '../../components/Frontend/Cart'

const HandleClickContext = createContext();


function Layout({handleCart, cartModal, productId, allCart}) {

  const [sidebar, setSidebar] = useState(false)
  const handleClick = () => {
    setSidebar(!sidebar)
  }


  return (
    

      <div>
        <ScrollTop />
        <Header allCart={allCart} />
        <MobileHeader handleClick={handleClick} sidebar={sidebar} />
        <Outlet handleCart={handleCart}  allCart={allCart} />
        <Footer />
        <Cart cartModal={cartModal} handleCart={handleCart} productId={productId} allCart={allCart}/>
      </div>



  )
}

export default Layout;
