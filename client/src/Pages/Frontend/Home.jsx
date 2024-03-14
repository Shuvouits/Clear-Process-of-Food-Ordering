import React from 'react'
import Banner from '../../components/Frontend/Banner'
import Category from '../../components/Frontend/Category'
import Traditional from '../../components/Frontend/Traditional'
import Process from '../../components/Frontend/Process'
import Popular from '../../components/Frontend/Popular'
import FAQ from '../../components/Frontend/FAQ'
import Customer from '../../components/Frontend/Customer'
import Latest from '../../components/Frontend/Latest'
import Resturent from '../../components/Frontend/Resturent'


function Home() {
  return (
    <main>
      <Banner />
      <Category />
     
      <Traditional />
      <Process />
      <Popular />
      <FAQ />
      <Customer />
      <Latest />
      <Resturent />
    </main>
  )
}

export default Home