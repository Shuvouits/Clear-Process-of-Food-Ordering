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
import AnotherLoader from '../../components/loader/AnotherLoader'




function Home({handleCart, allCart, loading, setLoading}) {
  const [vopen, setVopen] = useState(false);

  const handleVideo = () => {
    setVopen(!vopen)
  } 


  return (

    <>

    {loading && (

<div style={{position : 'absolute', top: '50%', left: '50%'}}>
<AnotherLoader />
</div>

    )}

  

<main style={{opacity: `${loading ? '0.4' : ''}`}}>
      <Banner handleVideo={handleVideo} />
      <Category setLoading={setLoading} />

      <Traditional handleCart={handleCart} />
      <Process />
      <Popular handleCart={handleCart} />
      <FAQ />
      <Customer />
      <Latest />
      <Resturent />

      {vopen && (

        <Video handleVideo={handleVideo} />

      )}


    </main>
    
    </>
   
  )
}

export default Home