import React, { useRef, useEffect } from 'react'
import Project from '../Projects/Project'

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
        <div className="h-screen flex flex-col items-center bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] dark:bg-happyhues_4-background-primary  bg-happyhues_11-background-secondary">
        <div className='container mx-auto py-20 px-4'>
          <h2 className='uppercase text-right text-5xl sm:text-6xl md:text-7xl lg:text-8xl dark:text-happyhues_4-text-headline text-happyhues_11-text-headline' ref= {refToComponent}>
            Projects
          </h2>
          <h6 className='underline pt-2 pb-6 pr-[1px] text-right italic'>
            Some of the biggest Projects I have been working on.
          </h6>
          <div className='flex md:flex-row flex-wrap items-center justify-center'>
            {/* <Project /> */}
          </div>
        </div>
      </div>
    )
}

export default Projects