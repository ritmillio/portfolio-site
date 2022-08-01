import React, { useRef, useEffect, useState } from 'react'
import { Tween, ScrollTrigger, } from 'react-gsap';
import { gsap } from 'gsap';

const Intro: React.FC = () => {

    const refToComponent = useRef<HTMLHeadingElement>(null)
    const secondRefToComponent = useRef<HTMLHeadingElement>(null)

    // useEffect(() => {
    //   const el = divRef.current;

    //   gsap.fromTo(el, {rotation: 0}, {rotation: 180, duration:3})
    // }, [])


    useEffect(() => {
      async function animate() {
          const sr = (await require("scrollreveal")).default({
            origin: "top",
            distance: "60px",
            duration: 2500,
            delay: 400,
            reset: true,
        })
        if (refToComponent.current) {
          sr.reveal(refToComponent.current, {})
        }
        if (secondRefToComponent.current) {
          sr.reveal(secondRefToComponent.current, {})
        }
      }
      animate()
    }, [])

    return (
        <div className='dark:bg-green-900 bg-red-200'>  
          <div className='py-48 dark:bg-green-500 dark:text-white h-screen flex flex-col items-center justify-center'>
            <h1 className="headline text-center" ref={refToComponent}>
              Widget Inc.
            </h1>
            <div className='text-center pt-60' ref={secondRefToComponent}>
              asdasdasdas
            </div>
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
  


//   import React, { useRef } from "react";

// const Child = React.forwardRef((props, ref) => {
//   const { ref1, ref2 } = ref.current;
//   console.log(ref1, ref2);

//   return (
//     <>
//       <p ref={ref1}>foo</p>
//       <p ref={ref2}>bar</p>
//     </>
//   );
// });

// export default function App() {
//   const ref1 = useRef();
//   const ref2 = useRef();
//   const ref = useRef({ ref1, ref2 });

//   return <Child ref={ref} />;
// }