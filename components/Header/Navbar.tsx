import React from 'react'
import ProgressBar from './ProgressBar'

const Navbar: React.FC = () => {
    return (
        <div>
          <ProgressBar />
          <div className='container mx-auto'>
            <div className='flex items-center justify-center h-screen'>
              Navbar
            </div>
          </div>
        </div>
      )
  }
  
  export default Navbar
  