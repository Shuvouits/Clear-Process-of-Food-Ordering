import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import Router from './Pages/Backend/Router'

function App() {


  return (
    <>
      
      <Routes>
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
        <Route path='/' element={<UserLayout/>}>
          <Route path='/user/dashboard' element={<DashboardPage />} />
          <Route path='/user/edit-profile' element={<ProfilePage />} />
          <Route path='/user/address' element={<AddressPage />} />
          <Route path='/user/order' element={<OrderPage />} />
          <Route path='/user/wishlist' element={<WishlistPage />} />
          <Route path='/user/change-password' element={<ChangePasswordPage />} />

        </Route>
        <Route path='/login' element={<Login />} />

      </Routes>

      <Router />









    </>
  )
}

export default App
