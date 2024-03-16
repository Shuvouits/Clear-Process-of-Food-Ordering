import { useEffect, useState } from 'react'
import './App.css'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Frontend/Home'
import Menu from './Pages/Frontend/Menu'
import Layout from './Pages/Frontend/Layout'
import About from './Pages/Frontend/About'
import Contact from './Pages/Frontend/Contact'
import Blog from './Pages/Frontend/Blog'
import BlogDetails from './Pages/Frontend/BlogDetails'
import Cart from './Pages/Frontend/Cart'
import CheckOut from './Pages/Frontend/CheckOut'
import UserLayout from './Pages/Frontend/user/UserLayout'
import DashboardPage from './Pages/Frontend/user/DashboardPage'
import ProfilePage from './Pages/Frontend/user/ProfilePage'
import AddressPage from './Pages/Frontend/user/AddressPage'
import OrderPage from './Pages/Frontend/user/OrderPage'
import WishlistPage from './Pages/Frontend/user/WishlistPage'
import ChangePasswordPage from './Pages/Frontend/user/ChangePasswordPage'
import Login from './Pages/Frontend/Login'
import AdminLogin from './Pages/Backend/AdminLogin'

//frontend css import
import './Pages/Frontend/assets/style.css'
import './Pages/Frontend/assets/bootstrap.css'
import './Pages/Frontend/assets/responsive.css'

import './Pages/Frontend/assets/toastr.css'
import './Pages/Frontend/assets/venobox.css'
import AdminLayout from './Pages/Backend/AdminLayout'
import AdminDashboard from './Pages/Backend/AdminDashboard'
import AllOrder from './Pages/Backend/order/AllOrder'

//backend css import
const currentPath = window.location.pathname;

if (currentPath.startsWith('/admin')) {
  import('./Pages/Backend/admin-assets/style.css');
  import('./Pages/Backend/admin-assets/bootstrap.css');
  import('./Pages/Backend/admin-assets/chart.css');
  import('./Pages/Backend/admin-assets/datatable.css');
  import('./Pages/Backend/admin-assets/fontawesome.css');
  import('./Pages/Backend/admin-assets/jquery.css');
  import('./Pages/Backend/admin-assets/map.css');
  import('./Pages/Backend/admin-assets/reset.css');
  import('./Pages/Backend/admin-assets/slickslider.css');
  import('./Pages/Backend/admin-assets/toast.css');
 
}


function App() {


  return (
    <>
      
      <Routes>
        {/* Frontend route */}
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:title' element={<BlogDetails />} />
          <Route path='/cartlist' element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
          

        </Route>
        <Route path='/user/' element={<UserLayout/>}>
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='edit-profile' element={<ProfilePage />} />
          <Route path='address' element={<AddressPage />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='wishlist' element={<WishlistPage />} />
          <Route path='change-password' element={<ChangePasswordPage />} />

        </Route>
        <Route path='/login' element={<Login />} />

        {/* Backend route */}

        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='all-order' element={<AllOrder />} />
        </Route>
        

      </Routes>
     

      

    

      









    </>
  )
}

export default App
