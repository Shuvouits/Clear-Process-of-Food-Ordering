import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Frontend/Home'
import Menu from './Pages/Frontend/Menu'
import Layout from './Pages/Frontend/Layout'
import About from './Pages/Frontend/About'
import Contact from './Pages/Frontend/Contact'

function App() {


  return (
    <>

      <Routes>


        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
