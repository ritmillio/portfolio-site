import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../reveal'
import { logos } from '../About/about-logos'
 
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
          <div className="h-screen flex flex-col items-center bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] dark:bg-happyhues_4-background-secondary bg-happyhues_11-background-secondary">
            <div id="about"></div>
            <div className='py-20 px-4'>
              <h2 className='w-fit uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl dark:text-happyhues_4-text-headline text-happyhues_11-text-headline' ref= {headingRef}>About
              </h2>
              <h6 className='underline pt-2 pl-[1px] italic'>
                Who am I ?
              </h6>
              <div className='flex flex-row-reverse items-center justify-center'>
                <div className='flex flex-col ml-12'>
                  <p className='text-white text-xl max-w-xl text-justify tracking-wider lg:mr-20 md:leading-relaxed lg:leading-relaxed'>
                    I met Computer Science during a high school competition about building a company. We created a business idea/plan on the idea of a mobile application, the only problem was that nobody knew how to code so I started learning to code by myself. During my university years, I decided that I am going to pursue a career in the Frontend Development field since I loved and love using the browser as a canvas. <span className='font-bold font-mono italic'>Today I am focusing on helping companies to build a better UI experience, from small companies like a pizza shops to a big E-commerce giants such as Nespresso.</span> I am also interested in animating the web so I am constantly learning new things such as Locomotive Scroll, GSAP, and Three.js.
                  </p>
                  <p className='pt-4 text-2xl italic'>Some tools/libraries/frameworks/technologies I like to use</p>
                  <div className='flex pt-2'>
                    {logos.map(( logo: string ) => {
                      return (
                        <div className='mx-2'>
                          <Image src={logo} width={32} height={32}/>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div ref={imageRef} className='relative h-[400px] w-[250px] mr-auto hidden lg:block mt-12 ml-20'>
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