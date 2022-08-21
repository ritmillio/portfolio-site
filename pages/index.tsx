import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

// Components ->
import Navbar from '../components/Header/Navbar'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'




const Home: NextPage = () => {

  return (
    <>
      <Navbar />
      <Intro />
      <Footer />
    </>
  )
}

export default Home
