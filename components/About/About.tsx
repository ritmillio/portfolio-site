import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../reveal'
import AboutLogos from './AboutLogos'
 
const About: React.FC = () => {

    const headingRef = useRef<HTMLHeadingElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      async function animate() {
        const sr = (await require("scrollreveal")).default(reveal)
        if (headingRef.current) {
          sr.reveal(headingRef.current)
        }
        if (imageRef.current) {
          sr.reveal(imageRef.current, {
            origin: 'left',
            distance: '40px'
          })
        }
      }
      animate()

    }, [])

    return (
          <div className="min-h-screen flex flex-col items-center bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] dark:bg-happyhues_4-background-secondary bg-happyhues_11-background-primary">
            <div id="about"></div>
            <div className='py-20 px-2 sm:px-4'>
              <h2 className='w-fit uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl dark:text-happyhues_4-text-headline text-happyhues_11-text-headline' ref= {headingRef}>About
              </h2>
              <h6 className='underline pt-2 pl-[1px] italic'>
                Who am I ?
              </h6>
              <div className='flex flex-row-reverse items-center justify-center'>
                <div className='flex flex-col lg:ml-12 pt-4 lg:pt-0'>
                  <p className='dark:text-happyhues_4-text-headline text-happyhues_11-text-headline text-lg md:text-xl max-w-xl text-left lg:text-justify tracking-wider lg:mr-20 md:leading-relaxed lg:leading-relaxed'>
                  I was introduced to Computer Science during a high school competition when I had the opportunity to build a successful company from scratch. My team and I created a business plan based on the idea of a mobile application. The main difficulty that we faced as a team was the lack of knowledge about coding, which motivated me to learn how to code so I started to master it by myself to overcome that obstacle. During my studies at the university, I decided that I am going to pursue a career in the Frontend Development field since I always loved using the browser as a canvas. <span className='italic'>Currently, I am focusing on helping companies, from small companies such as local pizza shops to big E-commerce giants like Nespresso, to build a better UI experience.</span> I am also interested in animating the web, and I am constantly developing myself and learning new things such as Locomotive Scroll, GSAP, and Three.js.
                  </p>
                  <p className='pt-4 text-lg md:text-xl lg:text-2xl italic'>Some tools/libraries/frameworks/technologies I like to use</p>
                  <AboutLogos />
                </div>
                <div ref={imageRef} className='relative h-[400px] w-[250px] mr-auto hidden lg:block ml-20'>
                  <Image 
                      className='absolute rounded-md'
                      src='https://zoltanfodor.b-cdn.net/zoltan-fodor-resi-prof.jpeg'
                      layout='fill'
                      loading='lazy'
                      alt='Zoltan Fodor - Creative Developer'
                  />
                </div>
              </div>
            </div>
          </div>
      )
  }
  
  export default About