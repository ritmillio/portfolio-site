import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedCursor: any = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

const Cursor: React.FC = () => {
  return <AnimatedCursor
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
}

export default Cursor
