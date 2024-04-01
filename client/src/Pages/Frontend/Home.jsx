import React, { useState } from 'react'
import Banner from '../../components/Frontend/Banner'
import Category from '../../components/Frontend/Category'
import Traditional from '../../components/Frontend/Traditional'
import Process from '../../components/Frontend/Process'
import Popular from '../../components/Frontend/Popular'
import FAQ from '../../components/Frontend/FAQ'
import Customer from '../../components/Frontend/Customer'
import Latest from '../../components/Frontend/Latest'
import Resturent from '../../components/Frontend/Resturent'
import Video from '../../components/Frontend/Video'


function Home() {
  const [vopen, setVopen] = useState(false);

  const handleVideo = () => {
    setVopen(!vopen)
  }


  return (
    <main>
      <Banner handleVideo={handleVideo} />
      <Category />

      <Traditional />
      <Process />
      <Popular />
      <FAQ />
      <Customer />
      <Latest />
      <Resturent />

      {vopen && (

        <Video handleVideo={handleVideo} />

      )}


    </main>
  )
}

export default Home