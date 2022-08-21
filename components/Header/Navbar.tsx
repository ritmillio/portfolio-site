import React, { useRef, useEffect, useState } from 'react'
import ProgressBar from './ProgressBar';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  
    return (
        <>
          <ProgressBar />
          <ThemeToggle />
        </>
      )
  }
  
  export default Navbar
  