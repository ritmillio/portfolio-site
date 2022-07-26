import React, { lazy } from 'react'
import Image from 'next/image'


const SocialLinks: React.FC = () => {
    return (
        <div>
         <div className="h-36 sm:h-40 md:h-48 dark:bg-drk-bgSec bg-lght-main">
            <div className="h-full flex items-center justify-center">
              <a className="mx-2 sm:mx-4  lg:mx-6" href="#" target="_blank" rel="noreferrer">
                <Image
                        loading="lazy"
                        src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                        width={50}
                        height={50}
                        alt="Follow me on YouTube"
                />
              </a>
              <a className="mx-2 sm:mx-4  lg:mx-6" href="https://www.linkedin.com/in/zoltan-fodor-007/" target="_blank" rel="noreferrer">
                <div className="hidden lg:block">
                    <Image
                            loading="lazy"
                            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
                            width={165}
                            height={100}
                            alt="Follow me on LinkedIn"
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                            loading="lazy"
                            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                            width={50}
                            height={50}
                            alt="Follow me on LinkedIn"
                    />
                </div>
              </a>
              <a className="mx-2 sm:mx-4  lg:mx-6" href="https://github.com/ritmillio" target="_blank" rel="noreferrer">
                <Image
                        loading="lazy"
                        src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                        width={50}
                        height={50}
                        alt="Follow me on github and check out my work"
                />
              </a>
              <a className="mx-2 sm:mx-4  lg:mx-6" href="https://medium.com/@zoltanfodor" target="_blank" rel="noreferrer">
                <Image
                        loading="lazy"
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png"
                        width={50}
                        height={50}
                        alt="Follow me on Medium"
                />
              </a>
              <a className="mx-2 sm:mx-4  lg:mx-6" href="https://open.spotify.com/playlist/1DgMS1ijBNF6DXwFYEkqYf?si=3b0c4efa9524498f&pt=5438e1fb9ecb79520abae9fc20085d26" target="_blank" rel="noreferrer">
                <Image
                        loading="lazy"
                        src="https://cdn.iconscout.com/icon/free/png-128/spotify-3771073-3147690.png"
                        width={50}
                        height={50}
                        alt="Listen my dev music chanel on spotify"
                />
              </a>

              <a className="mx-2 sm:mx-4  lg:mx-6" href="https://www.buymeacoffee.com/zoltanfodor" target="_blank" rel="noreferrer">
                <div className="hidden lg:block">
                    <Image
                            loading="lazy"
                            src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-3.svg"
                            width={165}
                            height={100}
                            alt="Support me via Buymeacoffee.com but just if you like my content"
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                            loading="lazy"
                            src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-1.svg"
                            width={50}
                            height={50}
                            alt="Support me via Buymeacoffee.com but just if you like my content"
                    />
                </div>
              </a>
            </div>
          </div>
        </div>
      )
  }
  
  export default SocialLinks
  