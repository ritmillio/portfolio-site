import type { NextPage } from 'next'
import Cursor from '../components/cursor'

const Home: NextPage = () => {
  return (
    <div>
      <Cursor />
      <div className='container mx-auto'>
        <div className='flex items-center justify-center h-screen'>
          Hola
        </div>
      </div>
    </div>
  )
}

export default Home
