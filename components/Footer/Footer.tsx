import React from 'react'
import ContactMe from './ContactMe'
import SocialLinks from './SocialLinks'

const Footer: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <div className="absolute top-0 -mt-8 h-10 w-full mx-auto dark:bg-[url('https://zoltanfodor.b-cdn.net/footer-transition-noise.png')] bg-[url('https://zoltanfodor.b-cdn.net/background-noise-footer.png')] bg-center bg-cover"></div>
        <div className='pt-12 dark:bg-[#101218] bg-happyhues_11-background-secondary'>
          <ContactMe />
          <SocialLinks />
          <div className="p-4">
            <p id="copyright" className="text-center font-semibold dark:text-white text-black">
              © 2022 Zoltan Fodor
            </p>
          </div>
        </div>
      </div>
    </>
    )
}
  
export default Footer