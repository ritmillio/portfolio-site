import type { NextPage } from 'next'
import Cursor from '../components/Cursor/Cursor'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Cursor />
      <div className='container mx-auto'>
        <div className='flex items-center justify-center h-screen'>
          Hola
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Home
