import React, { useRef, useEffect } from 'react'

const ContactMe: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function animate() {
        const sr = (await require("scrollreveal")).default({
          origin: "left",
          distance: "40px",
          duration: 1500,
          delay: 300,
          reset: false,
      })
      if (divRef.current) {
        sr.reveal(divRef.current)
      }
    }
    animate()
    }, [])

    return (
        <> 
          <div ref={divRef} className='container mx-auto flex flex-col items-center px-4 md:px-6 max-w-3xl min-h-[40vh] md:min-h-[50vh]'>
            <h2 className='py-3 md:py-5 uppercase text-justify text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed'>
              Want to reach out about a <span className='dark:text-happyhues_4-background-button text-red-700 text-[46px] sm:text-[56px] md:text-[66px] lg:text-[76px]'>project</span>, <span className='dark:text-happyhues_11-background-button text-purple-800 text-[48px] sm:text-[68px] md:text-[78px] lg:text-[88px]'>collobration</span> or just want to say friendly
              <span className='pl-6 sm:pl-8 md:pl-12 dark:text-pink-500 text-yellow-500 text-[48px] sm:text-[68px] md:text-[78px] lg:text-[88px]'>h</span><span className='dark:text-green-600 text-blue-300'>e</span><span className='dark:text-purple-700 text-pink-500 text-[42px] sm:text-[48px] md:text-[55px] lg:text-[64px]'>l</span><span className='dark:text-blue-400 text-green-500'>l</span><span className='dark:text-orange-600 text-orange-400'>o</span>
              &nbsp;?
            </h2>
            <a href='mailto:me@zoltanfodor.dev' className='py-4 md:pt-6 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:hover:text-happyhues_4-background-button hover:text-red-700'>me@zoltanfodor.dev</a>
          </div>
        </>
      )
  }
  
  export default ContactMe
  