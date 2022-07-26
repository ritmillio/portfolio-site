import type { NextPage } from 'next'
import Navbar from '../components/Header/Navbar'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const {theme, setTheme} = useTheme()
  return (
    <div>
      <h1 className="text-3xl text-pink-500">
        Welcome to Your App
      </h1>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        toggle
      </button>
      <Navbar />
      <Intro />
      <Footer />
    </div>
  )
}

export default Home
