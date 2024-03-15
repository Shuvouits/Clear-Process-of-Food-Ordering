import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
import ScrollTop from './components/Frontend/ScrollTop'

function App() {


  return (
    <>
      <ScrollTop />
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
      </Routes>









    </>
  )
}

export default App
