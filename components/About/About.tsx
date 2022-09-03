import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

const About: React.FC = () => {

    const headingRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
      async function animate() {
          const sr = (await require("scrollreveal")).default({
            origin: "top",
            distance: "50px",
            duration: 1500,
            delay: 400,
            reset: false,
        })
        if (headingRef.current) {
          sr.reveal(headingRef.current, {})
        }
      }
      animate()

    }, [])

    return (
          <div className="h-screen flex flex-col items-center bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] dark:bg-happyhues_4-background-secondary bg-happyhues_11-background-secondary">
            <div id="about"></div>
            <div className='container mx-auto py-20 px-4'>
              <h2 className='w-fit uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl dark:text-happyhues_4-text-headline text-happyhues_11-text-headline' ref= {headingRef}>About
              </h2>
              <p className='underline pt-2 pb-6 pl-[1px]'>
                Who am I ?
              </p>
              <div className='flex flex-row-reverse items-start justify-center'>
                <p className='text-white text-xl max-w-lg text-justify tracking-wider lg:mt-14 lg:mr-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit libero quisquam accusantium ipsam quidem, excepturi ipsa aut, modi, est cupiditate enim amet earum tenetur nostrum corrupti id quo ab. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente magni dolorum consequuntur quos at cum accusantium velit, perspiciatis fugiat voluptatum odit, obcaecati quae autem, aliquid praesentium blanditiis consectetur voluptas vero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fugiat aliquam voluptatibus alias excepturi dolores qui explicabo expedita, architecto reiciendis suscipit iste minima sed molestias quas ex numquam ullam magnam!</p>
                <div className='relative h-[450px] w-[300px] mr-auto hidden lg:block mt-12 ml-20'>
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