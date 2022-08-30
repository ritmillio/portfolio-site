import React, { useRef, useEffect, Fragment } from 'react'
import { chars } from '../../public/svg-intro'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

const Intro: React.FC = () => {
  const refTypewriter = useRef<HTMLDivElement>(null)
  const refScrollDown = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    async function animate() {
        const sr = (await require("scrollreveal")).default({
          origin: "bottom",
          distance: "40px",
          duration: 1500,
          delay: 1600,
          reset: true,
      })
      if (refTypewriter.current) {
        sr.reveal(refTypewriter.current)
      }
      if(refScrollDown.current){
        sr.reveal(refScrollDown.current, {
          delay: 7800
        })
      }
    }
    animate()
    }, [])

    return (
          <div className="h-screen bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] dark:bg-happyhues_4-background-primary bg-happyhues_11-background-primary">
            <div className='h-screen container mx-auto flex flex-col items-center justify-center'>
              
              {/* Framer SVG Animation Medium and Larger screens */}
              {/* Dark Mode Intro */}
              <div className='hidden dark:block'>
                  <svg
                    className="w-[312px] intro-svg sm:w-[620px] md:w-[740px] lg:w-[990px] h-auto z-10"
                    viewBox="0 0 690 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {chars.map((character, index) => (
                      <Fragment key={ character }>
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: index / 10, duration: 1 }}
                          d={ character }
                          fill="none"
                          stroke="#FFF"
                          strokeWidth="1"
                        ></motion.path>
                        <motion.path
                          initial={{ fill: "#ffffff00" }}
                          animate={{ fill: "#ffffff" }}
                          transition={{ delay: 0.7 + index / 10, duration: 0.6 }}
                          fill="none"
                          d={ character }
                        ></motion.path>
                      </Fragment>
                    ))}
                  </svg>
                </div>

              {/* Light Mode Intro */}
              <div className='dark:hidden block'>
                <svg
                  className="w-[312px] intro-svg sm:w-[620px] md:w-[740px] lg:w-[990px] h-auto z-10"
                  viewBox="0 0 690 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {chars.map((character, index) => (
                    <Fragment key={ character }>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: index / 10, duration: 1 }}
                        d={ character }
                        fill="none"
                        stroke="#000"
                        strokeWidth="1"
                      ></motion.path>
                      <motion.path
                        initial={{ fill: "#00000ff" }}
                        animate={{ fill: "#000" }}
                        transition={{ delay: 0.7 + index / 10, duration: 0.6 }}
                        fill="none"
                        d={ character }
                      ></motion.path>
                    </Fragment>
                  ))}
                </svg>
              </div>
              <div ref={ refTypewriter } className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl dark:text-happyhues_4-text-headline text-happyhues_11-text-headline'>
                <Typewriter
                  onInit={(typewriter) => {
                      typewriter.typeString('Creative Frontend Developer')
                      .changeDeleteSpeed(25)
                      .deleteChars(9)
                      .typeString('& Ecommerce Developer')
                      .pauseFor(2500)
                      .start();
                  }}
                />
              </div> 
              <a ref={ refScrollDown } href='#about' className="scroll-link mt-8 flex items-center justify-center text-base sm:text-lg md:text-xl dark:text-happyhues_11-background-button text-happyhues_11-background-button">
                <span>Scroll down</span>
                <svg className='-ml-[1px]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 64 64"><path d="M31.936 46.585L15.643 30.292l-1.414 1.562 17 17.146h1.414l17-17.146-1.414-1.488z"/><path d="M31.936 31.585L15.643 15.292l-1.414 1.562 17 17.146h1.414l17-17.146-1.414-1.488z"/></svg>
              </a>
            </div>
          </div>
      )
  }
  
export default Intro
  