import type { NextPage } from 'next'
import { useTheme } from 'next-themes'

// Components ->
import Navbar from '../components/Header/Navbar'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'



const Home: NextPage = () => {
  const {theme, setTheme} = useTheme()
  return (
    <div>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        toggle
      </button>
      <Navbar />
      {/* <Articles /> */}
      <Intro />
      <Footer />
    </div>
  )
}

export default Home
