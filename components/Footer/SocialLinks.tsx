import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

const SocialLinks: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function animate() {
        const sr = (await require("scrollreveal")).default({
          origin: "left",
          distance: "40px",
          duration: 1500,
          delay: 400,
          reset: false,
      })
      if (divRef.current) {
        sr.reveal(divRef.current, {
          interval: 100
        })
      }
    }
    animate()
    }, [])

    return (
        <>
         <div className="h-36 sm:h-40 bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] dark:bg-happyhues_4-background-secondary bg-happyhues_11-background-primary md:mt-20 lg:mt-24">
            <div ref={divRef} className="h-full flex items-center justify-center">
              <a className="mx-2 sm:mx-4  lg:mx-6" href="#" target="_blank">
                <Image
                        loading="lazy"
                        src="https://zoltanfodor.b-cdn.net/youtube-icon.png"
                        width={50}
                        height={50}
                        alt="Follow me on YouTube"
                />
              </a>
              <a className="mx-2 sm:mx-4  lg:mx-6" href="https://www.linkedin.com/in/zoltan-fodor-007/" target="_blank" >
                <div className="hidden lg:block">
                    <Image
                            loading="lazy"
                            src="https://zoltanfodor.b-cdn.net/linkedin-long-log.svg"
                            width={165}
                            height={100}
                            alt="Follow me on LinkedIn"
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                            loading="lazy"
                            src="https://zoltanfodor.b-cdn.net/linkedin-short.svg"
                            width={50}
                            height={50}
                            alt="Follow me on LinkedIn"
                    />
                </div>
              </a>
              <a className="mx-2 sm:mx-4  lg:mx-6" href="https://github.com/ritmillio" target="_blank">
                <Image
                        loading="lazy"
                        src="https://zoltanfodor.b-cdn.net/github-logo-octopus.png"
                        width={50}
                        height={50}
                        alt="Follow me on github and check out my work"
                />
              </a>
              <a className="mx-2 sm:mx-4  lg:mx-6" href="https://medium.com/@zoltan_fodor_" target="_blank">
                <Image
                        loading="lazy"
                        src="https://zoltanfodor.b-cdn.net/medium-logo.png"
                        width={50}
                        height={50}
                        alt="Follow me on Medium"
                />
              </a>
              <a className="mx-2 sm:mx-4  lg:mx-6" href="https://open.spotify.com/playlist/1DgMS1ijBNF6DXwFYEkqYf?si=3b0c4efa9524498f&pt=5438e1fb9ecb79520abae9fc20085d26" target="_blank">
                <Image
                        loading="lazy"
                        src="https://zoltanfodor.b-cdn.net/spotify-3771073-3147690.png"
                        width={50}
                        height={50}
                        alt="Listen my dev music chanel on spotify"
                />
              </a>

              <a className="mx-2 sm:mx-4 lg:mx-6" href="https://www.buymeacoffee.com/zoltanfodor" target="_blank">
                <div className="hidden lg:block">
                    <Image
                            loading="lazy"
                            src="https://zoltanfodor.b-cdn.net/bmac-logo-long.svg"
                            width={165}
                            height={100}
                            alt="Support me via Buymeacoffee.com but just if you like my content"
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                            loading="lazy"
                            src="https://zoltanfodor.b-cdn.net/bmac-logo-small.svg"
                            width={50}
                            height={50}
                            alt="Support me via Buymeacoffee.com but just if you like my content"
                    />
                </div>
              </a>
            </div>
          </div>
        </>
      )
  }
  
  export default SocialLinks
  