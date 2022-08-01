import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
    
    const divRef = React.useRef(null);
    useEffect(() => {
      const el = divRef.current;

      gsap.to(el, {
        value: 100,
        ease: 'none',
        scrollTrigger: { scrub: 0.3 }
      });
    }, [])

    return (
        <div>
          <progress ref={divRef} max="100" value="0"></progress>
          <div className='container mx-auto'>
            <div className='flex items-center justify-center h-screen'>
              Navbar
            </div>
          </div>
        </div>
      )
  }
  
  export default Navbar
  