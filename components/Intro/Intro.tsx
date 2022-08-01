import React, { useRef, useEffect, useState } from 'react'
import { Tween, ScrollTrigger, } from 'react-gsap';
import { gsap } from 'gsap';

const Intro: React.FC = () => {
    const refToComponent = useRef(null)

    // useEffect(() => {
    //   const el = divRef.current;

    //   gsap.fromTo(el, {rotation: 0}, {rotation: 180, duration:3})
    // }, [])


    useEffect(() => {
      async function animate() {
        if (refToComponent.current) {
          const sr = (await require("scrollreveal")).default({
              origin: "top",
              distance: "60px",
              duration: 2500,
              delay: 400,
              reset: true,
          })
           sr.reveal(refToComponent.current, { delay: 600 }) 
        }
      }
      animate()
    }, [])

    return (
        <div className='dark:bg-green-900 bg-red-200'>  
          <div className='py-48 dark:bg-green-500 dark:text-white h-screen flex items-center justify-center'>
            <h1 className="headline text-center" ref={refToComponent}>
              Widget Inc.
            </h1>
          </div>
          <div className='py-30 dark:bg-red-400 dark:text-white'>
                <p className="text"> <span className="text__first"><span className="text__word">Hello </span><span className="text__first-bg"></span></span><br/><span className="text__second"><span className="text__word">World</span><span className="text__second-bg"></span></span></p>
              <button className="restart">repeat</button>
          </div>
          <ScrollTrigger start="-200px center" end="200px center" scrub={0.5} markers>
            <Tween from={{opacity:0}} to={{ opacity: '200px', rotation: 0 }}>
              <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
            </Tween>
          </ScrollTrigger>
          <div className='container mx-auto'>
            <div className='flex items-center justify-center h-screen'>Intro</div>
          </div>

          <ScrollTrigger start="-200px center" end="200px center" scrub={0.5} markers>
            <Tween
              from={{
                opacity:0
              }}
              to={{
                
                opacity: 1
              }}
            >
              <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
            </Tween>

              <Tween
                from={{
                  opacity:0
                }}
                to={{
                  
                  opacity: 1
                }}
              >
              <div className='text-center'>
                asdasd
              </div>
            </Tween>
          </ScrollTrigger>
        </div>
      )
  }
  
  export default Intro
  