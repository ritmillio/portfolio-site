import type { NextPage } from 'next'
import Navbar from '../components/Header/Navbar'
import Intro from '../components/Intro'
import Footer from '../components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Footer />
    </div>
  )
}

export default Home
