import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

const Home: NextPage = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
      />
      <div className='container mx-auto'>
        <div className='flex items-center justify-center h-screen'>
          Hola
        </div>
      </div>
    </div>
  )
}

export default Home
