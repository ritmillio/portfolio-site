import React, { useRef, useEffect, Fragment } from 'react'
import { chars } from '../../public/svg-intro'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

const Intro: React.FC = () => {

    const refToComponent = useRef<HTMLHeadingElement>(null)
    const secondRefToComponent = useRef<HTMLHeadingElement>(null)

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
          sr.reveal(secondRefToComponent.current, {delay:700})
        }
      }
      animate()
    }, [])

    return (
          <div className="h-screen pt-8 flex flex-col items-center justify-center bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] bg-[#f9f4ef] dark:bg-[#16161a] dark:text-white text-black">
            
            <svg
              className="h-20 z-[1]"
              viewBox="0 0 276 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {chars.map((character, index) => (
                <Fragment key={character}>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: index / 10, duration: 1 }}
                    d={character}
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="3"
                  ></motion.path>
                  <motion.path
                    initial={{ fill: "#ffffff00" }}
                    animate={{ fill: "#ffffff" }}
                    transition={{ delay: 0.7 + index / 10, duration: 0.6 }}
                    fill="none"
                    d={character}
                  ></motion.path>
                </Fragment>
              ))}
            </svg>

            <div className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black'>
              <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Hi, my name is Zoltan')
                    .changeDeleteSpeed(25)
                    .deleteChars(21)
                    .typeString('Creative Developer')
                    .pauseFor(2500)
                    .callFunction(() => {
                      console.log('All strings were deleted');
                    })
                    .start();
                }}
              />
            </div>
            <div className="scroll-link mt-8 flex items-center justify-center">Scroll down</div>
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