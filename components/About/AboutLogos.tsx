import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../reveal'
 
const AboutLogos: React.FC = () => {
    const logoRefHTML = useRef<HTMLDivElement>(null)
    const logoRefCSS = useRef<HTMLDivElement>(null)
    const logoRefJavascript = useRef<HTMLDivElement>(null)
    const logoRefTypescript = useRef<HTMLDivElement>(null)
    const logoRefTailwindcss = useRef<HTMLDivElement>(null)
    const logoRefReact = useRef<HTMLDivElement>(null)
    const logoRefExpo = useRef<HTMLDivElement>(null)
    const logoRefGit = useRef<HTMLDivElement>(null)
    const logoRefNode = useRef<HTMLDivElement>(null)
    const logoRefNext = useRef<HTMLDivElement>(null)
    const logoRefTRPC = useRef<HTMLDivElement>(null)
    const logoRefPrisma = useRef<HTMLDivElement>(null)
    const logoRefPlanetscale = useRef<HTMLDivElement>(null)
    const logoRefVercel = useRef<HTMLDivElement>(null)

    useEffect(() => {
        async function animate() {
        const sr = (await require("scrollreveal")).default(reveal)

        if (logoRefHTML.current) {
            sr.reveal(logoRefHTML.current, {
            origin: "left",
            })
        }
        if (logoRefCSS.current) {
            sr.reveal(logoRefCSS.current, {
            origin: "left",
            delay: 50,
            })
        }
        if (logoRefJavascript.current) {
            sr.reveal(logoRefJavascript.current, {
            origin: "left",
            delay: 100,
            })
        }
        if (logoRefTypescript.current) {
            sr.reveal(logoRefTypescript.current, {
            origin: "left",
            delay: 150
            })
        }
        if (logoRefTailwindcss.current) {
            sr.reveal(logoRefTailwindcss.current, {
            origin: "left",
            delay: 200
            })
        }
        if (logoRefReact.current) {
            sr.reveal(logoRefReact.current, {
            origin: "left",
            delay: 250
            })
        }
        if (logoRefExpo.current) {
            sr.reveal(logoRefExpo.current, {
            origin: "left",
            delay: 300
            })
        }
        if (logoRefGit.current) {
            sr.reveal(logoRefGit.current, {
            origin: "left",
            delay: 350
            })
        }
        if (logoRefNode.current) {
            sr.reveal(logoRefNode.current, {
            origin: "left",
            delay: 400
            })
        }
        if (logoRefNext.current) {
            sr.reveal(logoRefNext.current, {
            origin: "left",
            delay: 450
            })
        }
        if (logoRefTRPC.current) {
            sr.reveal(logoRefTRPC.current, {
            origin: "left",
            delay: 500
            })
        }
        if (logoRefPrisma.current) {
            sr.reveal(logoRefPrisma.current, {
            origin: "left",
            delay: 550
            })
        }
        if (logoRefPlanetscale.current) {
            sr.reveal(logoRefPlanetscale.current, {
            origin: "left",
            delay: 600
            })
        }
        if (logoRefVercel.current) {
            sr.reveal(logoRefVercel.current, {
            origin: "left",
            delay: 650
            })
        }
        }
        animate()
    }, [])

    return (
        <div className='max-w-lg mt-2 flex flex-wrap items-center justify-center'>
            <div className='m-2' ref={logoRefHTML}>
                <Image 
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/html5-128.png"
                    alt="HTML5"
                    width={40}
                    height={40}
                    loading='lazy'
                />
            </div>
            <div className='m-2' ref={logoRefCSS}>
                <Image 
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/css3-128.png"
                    alt="CSS3"
                    width={40}
                    height={40}
                    loading='lazy'
                />
            </div>
            <div className='m-2' ref={logoRefJavascript}>
                <Image 
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/javascript-128.png"
                    alt="Javascript"
                    width={40}
                    height={40}
                    loading='lazy'
                />
            </div>
            <div className='m-2' ref={logoRefTypescript}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/typescript-128.png"
                    alt="Typescript"
                    width={40}
                    height={40}
                    loading='lazy'
                />
            </div>
            <div className='m-2' ref={logoRefTailwindcss}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/tailwind-css-icon.png"
                    alt="TailwindCSS"
                    width={55}
                    height={30}
                    loading='lazy'
                />
            </div>
            <div className='m-2' ref={logoRefReact}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/react-128.png"
                    alt="React"
                    width={40}
                    height={40}
                    loading='lazy'
                />
            </div>
            <div className='m-2' ref={logoRefExpo}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/expo.png"
                    alt="Expo - React Native"
                    width={90}
                    height={45}
                    loading='lazy'
                />
            </div>
            <div className='m-2' ref={logoRefGit}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/git-128.png"
                    alt="Git"
                    width={40}
                    height={40}
                    loading='lazy'
                />
            </div>
            <div className='m-2' ref={logoRefNode}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/node-js-128.png"
                    alt="Node.js"
                    width={40}
                    height={40}
                    loading='lazy'
                />
            </div>
            <div className='m-2 dark:bg-white bg-transparent dark:px-2 px-0' ref={logoRefNext}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/nextjs-icon.png"
                    alt="Next.js"
                    width={65}
                    height={50}
                    loading='lazy'
                />
            </div>
            <div className='m-2' ref={logoRefTRPC}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/trpc.png"
                    alt="trpc"
                    width={40}
                    height={40}
                    loading='lazy'
                />
            </div>
            <div className='m-2 dark:bg-white bg-transparent dark:px-2 dark:pt-2 pt-0 px-0' ref={logoRefPrisma}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/prisma.png"
                    alt="Prisma"
                    width={40}
                    height={40}
                    loading='lazy'
                />
            </div>
            <div className='m-2' ref={logoRefPlanetscale}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/planetscale.jpeg"
                    alt="Planetscale"
                    width={90}
                    height={45}
                    loading='lazy'
                />
            </div>
            <div className='m-2 dark:bg-white bg-transparent' ref={logoRefVercel}>
                <Image
                    src="https://zoltanfodor.b-cdn.net/new-dev-logos/Vercel.png"
                    alt="Vercel"
                    width={90}
                    height={45}
                    loading='lazy'
                />
            </div>
        </div>
      )
  }
  
  export default AboutLogos