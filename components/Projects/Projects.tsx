import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

const Projects: React.FC = () => {
    const refToComponent = useRef<HTMLHeadingElement>(null)
    const secondRefToComponent = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        async function animate() {
            const sr = (await require("scrollreveal")).default({
            origin: "top",
            distance: "60px",
            duration: 2500,
            delay: 400,
            reset: false,
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
        <div className="min-h-screen flex flex-col items-center bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] dark:bg-happyhues_4-background-primary  bg-happyhues_11-background-secondary">
        <div className='container mx-auto py-20 px-4'>
          <h2 className='uppercase text-left sm:text-right text-5xl sm:text-6xl md:text-7xl lg:text-8xl dark:text-happyhues_4-text-headline text-happyhues_11-text-headline' ref= {refToComponent}>
            Projects
          </h2>
          <h6 className='underline pt-2 pb-6 pr-[1px] text-left sm:text-right italic'>
            Some of the biggest Projects I have been working on.
          </h6>
          <div className='flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-10 xl:gap-12 pt-6 lg:pt-12'>
            
              <a href="https://winwithme.hu" target="_blank" rel="noreferrer">
                <div className='relative h-[150px] w-[290px] md:h-[200px] md:w-[350px] hover:scale-110 transform-gpu transition-all'>
                  <Image 
                      className='absolute rounded-md'
                      src='https://zoltanfodor.b-cdn.net/projects/winwithme-intro.png'
                      layout='fill'
                      loading='lazy'
                      alt='Win With Me'
                  />
                </div>
              </a>
              <a href="https://www.nespresso.com/hu/hu" target="_blank" rel="noreferrer">
                <div className='relative h-[150px] w-[290px] md:h-[200px] md:w-[350px] hover:scale-110 transform-gpu transition-all'>
                  <Image 
                      className='absolute rounded-md'
                      src='https://zoltanfodor.b-cdn.net/projects/nespresso.png'
                      layout='fill'
                      loading='lazy'
                      alt='Nespresso Hungary'
                  />
                </div>
              </a>
              <a href="https://masterofmixes.dk/" target="_blank" rel="noreferrer">
                <div className='relative h-[150px] w-[290px] md:h-[200px] md:w-[350px] hover:scale-110 transform-gpu transition-all'>
                  <Image 
                      className='absolute rounded-md'
                      src='https://zoltanfodor.b-cdn.net/projects/masterofmixes-dk.png'
                      layout='fill'
                      loading='lazy'
                      alt='Master of Mixes Denmark'
                  />
                </div>
              </a>
              <a href="https://nailster.dk/" target="_blank" rel="noreferrer">
                <div className='relative h-[150px] w-[290px] md:h-[200px] md:w-[350px] hover:scale-110 transform-gpu transition-all'>
                  <Image 
                      className='absolute rounded-md'
                      src='https://zoltanfodor.b-cdn.net/projects/nailster-dk.png'
                      layout='fill'
                      loading='lazy'
                      alt='Nailster Denmark'
                  />
                </div>
              </a>
              <a href="https://pearlwax.dk/" target="_blank" rel="noreferrer">
                <div className='relative h-[150px] w-[290px] md:h-[200px] md:w-[350px] hover:scale-110 transform-gpu transition-all'>
                  <Image 
                      className='absolute rounded-md'
                      src='https://zoltanfodor.b-cdn.net/projects/pearlwax-dk.png'
                      layout='fill'
                      loading='lazy'
                      alt='Win With Me'
                  />
                </div>
              </a>
          </div>
        </div>
      </div>
    )
}

export default Projects